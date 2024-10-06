import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@neos-project/react-ui-components';
import { neos } from '@neos-project/neos-ui-decorators';
import style from './ToggleEditor.css';
import { connect } from 'react-redux';
import { selectors } from '@neos-project/neos-ui-redux-store';
import clsx from 'clsx';

const getDataLoaderOptionsForProps = props => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching)
});

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n'),
    dataSourcesDataLoader: globalRegistry.get('dataLoaders').get('DataSources')
}))
@connect(state => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state)
}))
export default class ToggleEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        options: PropTypes.shape({
            layout: PropTypes.oneOf(['grid', 'flex', 'list', 'color']),
            columns: PropTypes.number,
            allowEmpty: PropTypes.bool,
            iconSize: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x']),
            values: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    icon: PropTypes.string,
                    iconRotate: PropTypes.number,
                    description: PropTypes.string,
                    color: PropTypes.string,
                    hidden: PropTypes.bool,
                    preview: PropTypes.string,
                    previewFull: PropTypes.bool,
                    disabled: PropTypes.bool
                })
            ),

            dataSourceIdentifier: PropTypes.string,
            dataSourceUri: PropTypes.string,
            dataSourceDisableCaching: PropTypes.bool,
            dataSourceAdditionalData: PropTypes.objectOf(PropTypes.any)
        }).isRequired,
    };

    static defaultOptions = {
        layout: 'grid',
        columns: null,
        allowEmpty: false,
        iconSize: null,
        disabled: false,
    };

    state = {
        isLoading: false,
        values: []
    };

    constructor(props) {
        super(props);
        const options = this.props.options;
        this.state = {
            values: !options || this.hasDataSource() ? [] : this.flattenValues(options.values)
        };
    }

    hasDataSource() {
        const options = this.props.options;
        if (!options) {
            return false;
        }
        return options.dataSourceIdentifier || options.dataSourceUri;
    }

    componentDidMount() {
        if (this.hasDataSource()) {
            this.loadOptions();
        }
    }

    loadOptions() {
        this.setState({ isLoading: true });
        this.props.dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(this.props), this.props.value)
            .then(values => {
                this.setState({
                    isLoading: false,
                    values
                });
            });
    }

    flattenValues(values) {
        if (!values || typeof values !== 'object') {
            return [];
        }
        const i18n = this.props.i18nRegistry;
        const array = [];

        for (const value in values) {
            const item = values[value];
            if (item.hidden) {
                continue;
            }
            array.push({
                ...item,
                label: i18n.translate(item.label),
                description: i18n.translate(item.description),
                value,
            });
        }
        return array;
    }

    render() {
        const {values, isLoading} = this.state;
        const {commit, value, highlight, i18nRegistry} = this.props;
        const options = Object.assign(
            {},
            this.constructor.defaultOptions,
            this.props.options || {},
        );
        const resetLabel = i18nRegistry.translate('Beromir.ToggleEditor:Main:reset');

        if (isLoading) {
            return (
                <div className={clsx(style.wrapper, style.loading)}
                     title={i18nRegistry.translate('Beromir.ToggleEditor:Main:loading')}>
                    <Icon icon="spinner" size="lg" spin/>
                </div>
            );
        }

        if (!values || !values.length) {
            return (
                <div className={clsx(style.wrapper, style.error)}>
                    {i18nRegistry.translate('Beromir.ToggleEditor:Main:error.noNodeTypeDefintion')}
                </div>
            );
        }

        function onChange(item, node) {
            if (node) {
                node.blur();
            }
            if (!item || (options.allowEmpty && value === item.value)) {
                commit('');
                return;
            }
            commit(item.value);
        }

        function getPreview(item) {
            if (!item || !item.preview) {
                return null;
            }
            const preview = item.preview;
            const fullClass = item.previewFull ? style.imageFull : null;
            const label = item.description || item.label;

            if (preview.startsWith('<svg ')) {
                return (
                    <div className={clsx(style.imageSVG, fullClass)} aria-label={label} dangerouslySetInnerHTML={{__html: preview}}/>
                )
            }

            const src = preview.startsWith('resource://') ? `/_Resources/Static/Packages/${preview.substr(11)}` : preview;
            return (
                <img src={src} className={clsx(style.image, fullClass)} alt={label} />
            )
        }

        // const getColumnsStyle = () => ({'--columns': options.columns || values.length || 1})
        const getRotationStyle = (item) => ({transform: `rotate(${item.iconRotate || 0}deg)`})
        const getTitle = (item) => options.allowEmpty && value === item.value ? resetLabel : item.description || item.label;
        const getAllowEmptyIcon = (item, className = style.allowEmpty) => options.allowEmpty && value === item.value ? <div className={className}><Icon size="sm" icon="times"/></div> : null;
        function getColumnsStyle() {
            if (options.layout === 'list' || options.layout === 'flex') {
                return null;
            }
            const columns = options.columns || values.length || 1;
            return {
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
            };
        }

        return (
            <div className={clsx(style.wrapper, style[options.layout], options.disabled && style.disabled)} style={getColumnsStyle()}>
                {values.map((item) => {
                    const isCurrent = value === item.value;
                    switch (options.layout) {
                        case 'list':
                            return (
                                <button onClick={({currentTarget}) => onChange(item, currentTarget)}
                                        type="button"
                                        title={getTitle(item)}
                                        disabled={item.disabled}
                                        className={clsx(style.listButton, isCurrent && style.selected)}
                                >
                                    <span className={clsx(style.radio, isCurrent && highlight && style.highlight)}>
                                        <span></span>
                                    </span>
                                    {item.icon && <Icon icon={item.icon} style={getRotationStyle(item)} size={options.iconSize} />}
                                    {getPreview(item)}
                                    {item.label && <span>{item.label}</span>}
                                    {getAllowEmptyIcon(item, style.allowEmptyRadio)}
                                </button>
                            );

                        case 'color':
                            return (
                                <div className={style.colorBox}>
                                    <button onClick={({currentTarget}) => onChange(item, currentTarget)}
                                            type="button"
                                            title={getTitle(item)}
                                            disabled={item.disabled}
                                            className={clsx(style.colorButton, isCurrent && (highlight ? style.highlight : style.selected), item.color === 'transparent' && style.colorTransparent)}
                                            style={{backgroundColor: item.color}}
                                    >
                                        {getAllowEmptyIcon(item)}
                                    </button>
                                    {item.label && <span className={style.label}>{item.label}</span>}
                                </div>
                            );

                        default:
                            return (
                                <Button onClick={() => onChange(item)}
                                        isActive={isCurrent}
                                        title={getTitle(item)}
                                        disabled={item.disabled}
                                        className={clsx(style.button, isCurrent && highlight && style.highlight)}
                                >
                                    {item.icon && <Icon icon={item.icon} style={getRotationStyle(item)} size={options.iconSize} />}
                                    {getPreview(item)}
                                    {item.label && <span className={clsx(item.icon || item.preview ? style.label : null)}>{item.label}</span>}
                                    {getAllowEmptyIcon(item)}
                                </Button>
                            );
                    }
                })}
            </div>
        );
    }
}
