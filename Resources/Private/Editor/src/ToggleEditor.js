import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@neos-project/react-ui-components';
import { neos } from '@neos-project/neos-ui-decorators';
import style from './ToggleEditor.css';
import { connect } from 'react-redux';
import { selectors } from '@neos-project/neos-ui-redux-store';

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
    };

    state = {
        isLoading: false,
        values: []
    };

    constructor(props) {
        super(props);
        this.state = {
            values: this.hasDataSource() ? [] : this.flattenValues(this.props.options.values)
        };
    }

    hasDataSource() {
        return this.props.options.dataSourceIdentifier || this.props.options.dataSourceUri;
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
        const valueArray = [];

        for (const key in values) {
            const item = values[key];
            if (item.hidden) {
                continue;
            }
            valueArray.push({
                ...item,
                label: i18n.translate(item.label),
                description: i18n.translate(item.description),
                key,
            });
        }
        return valueArray;
    }

    render() {
        const {values, isLoading} = this.state;
        const {commit, value, highlight, i18nRegistry} = this.props;
        const options = Object.assign(
            {},
            this.constructor.defaultOptions,
            this.props.options,
        );

        if (isLoading) {
            return (
                <div className={style.loading}
                     title={i18nRegistry.translate('Beromir.ToggleEditor:Main:loading')}>
                    <Icon icon="spinner" size="lg" spin/>
                </div>
            );
        }

        if (!values || !values.length) {
            return (
                <div className={style.textError}>
                    {i18nRegistry.translate('Beromir.ToggleEditor:Main:error.noNodeTypeDefintion')}
                </div>
            );
        }

        function getColumnsStyle() {
            if (options.layout === 'list' || options.layout === 'flex') {
                return null;
            }
            const columns = options.columns || values.length || 1;
            return {
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
            };
        }

        function onChange(item, node) {
            if (node) {
                node.blur();
            }
            commit(item ? item.key : '');
        }

        function getPreview(item) {
            if (!item || !item.preview) {
                return null;
            }
            const preview = item.preview;
            const fullClass = item.previewFull ? style.imageFull : '';
            const label = item.description || item.label;

            if (preview.startsWith('<svg ')) {
                return (
                    <div className={`${style.imageSVG} ${fullClass}`} aria-label={label} dangerouslySetInnerHTML={{__html: preview}}/>
                )
            }

            const src = preview.startsWith('resource://') ? `/_Resources/Static/Packages/${preview.substr(11)}` : preview;
            return (
                <img src={src} className={`${style.image} ${fullClass}`} alt={label} />
            )
        }

        function getRotationStyle(item) {
            if (item.iconRotate) {
                return {
                    transform: `rotate(${item.iconRotate}deg)`
                };
            }
            return {};
        }

        return (
            <div className={style[options.layout]} style={getColumnsStyle()}>
                {values.map((item) => {
                    switch (options.layout) {
                        case 'list':
                            return (
                                <button onClick={({currentTarget}) => onChange(item, currentTarget)}
                                        type="button"
                                        title={item.description}
                                        className={value === item.key ? style.selected : ''}>
                                    <span className={[style.radio, value === item.key && highlight ? style.highlight : ''].join(' ')}>
                                        <span></span>
                                    </span>
                                    {item.icon && <Icon icon={item.icon} style={getRotationStyle(item)} size={options.iconSize} />}
                                    {getPreview(item)}
                                    {item.label && <span>{item.label}</span>}
                                </button>
                            );

                        case 'color':
                            return (
                                <div className={style.colorBox}>
                                    <div className={style.colorButtonWrapper}>
                                        <button onClick={({currentTarget}) => onChange(item, currentTarget)}
                                                type="button"
                                                title={item.description}
                                                className={[style.colorButton, value === item.key ? highlight ? style.highlight : style.selected : '', item.color === 'transparent' ? style.colorTransparent : ''].join(' ')}
                                                style={{'background-color': item.color}}/>

                                        {options.allowEmpty && value === item.key &&
                                            <button onClick={({currentTarget}) => onChange(null, currentTarget)}
                                                    type="button"
                                                    title={i18nRegistry.translate('Beromir.ToggleEditor:Main:resetColor')}
                                                    className={style.emptyButton}>
                                                <Icon icon="times" size="sm"/>
                                            </button>
                                        }
                                    </div>
                                    {item.label && <span className={style.label}>{item.label}</span>}
                                </div>
                            );

                        default:
                            return (
                                <Button onClick={() => onChange(item)}
                                        isActive={value === item.key}
                                        title={item.description}
                                        className={[style.button, value === item.key && highlight ? style.highlight : ''].join(' ')}>
                                    {item.icon && <Icon icon={item.icon} style={getRotationStyle(item)} size={options.iconSize} />}
                                    {getPreview(item)}
                                    {item.label && <span className={item.icon || item.preview ? style.label : ''}>{item.label}</span>}
                                </Button>
                            );
                    }
                })}
            </div>
        );
    }
}
