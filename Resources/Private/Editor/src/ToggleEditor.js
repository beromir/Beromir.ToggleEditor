import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from "@neos-project/react-ui-components";
import style from './ToggleEditor.css';

export default class ToggleEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        options: PropTypes.shape({
            layout: PropTypes.string,
            columns: PropTypes.string,
            allowEmpty: PropTypes.bool,
            values: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    icon: PropTypes.string,
                    description: PropTypes.string,
                    color: PropTypes.string,
                    hidden: PropTypes.bool,
                })
            ),
        }).isRequired,
    };

    static defaultOptions = {
        layout: 'grid',
        columns: null,
        allowEmpty: false,
    };

    render() {
        const {commit, value, highlight, i18nRegistry} = this.props;
        const options = Object.assign(
            {},
            this.constructor.defaultOptions,
            this.props.options,
        );
        const values = options.values;

        if (!values) {
            return (
                <div className={style.textError}>
                    No options defined, add some to the NodeType definition.
                </div>
            );
        }

        const valueArray = [];

        for (const key in values) {
            const item = values[key];
            if (item.hidden) {
                continue;
            }
            valueArray.push({
                ...item,
                label: i18nRegistry.translate(item.label),
                description: i18nRegistry.translate(item.description),
                key,
            });
        }

        function getColumnsClassNames() {
            if (options.layout === 'list' || options.layout === 'flex') {
                return null;
            }

            const columns = options.columns || valueArray.length;
            return {'grid-template-columns': `repeat(${columns}, 1fr)`};
        }

        function onChange(item, node) {
            if (node) {
                node.blur();
            }
            commit(item ? item.key : '');
        }

        return (
            <div className={style[options.layout]} style={getColumnsClassNames()}>
                {valueArray.map((item) => {
                    switch (options.layout) {
                        case 'list':
                            return (
                                <button onClick={({currentTarget}) => onChange(item, currentTarget)} type="button"
                                        title={item.description}
                                        className={value === item.key ? style.selected : ''}>
                                    <span
                                        className={[style.radio, value === item.key && highlight ? style.highlight : ''].join(' ')}><span></span></span>
                                    {item.icon && <Icon icon={item.icon}/>}
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
                                                    type="button" title="clear" className={style.emptyButton}>
                                                <Icon icon="times" size="sm"/>
                                            </button>
                                        }
                                    </div>
                                    {item.label && <span className={style.label}>{item.label}</span>}
                                </div>
                            );

                        default:
                            return (
                                <Button onClick={() => onChange(item)} isActive={value === item.key}
                                        title={item.description}
                                        className={[style.button, value === item.key && highlight ? style.highlight : ''].join(' ')}>
                                    {item.icon && !item.color && <Icon icon={item.icon}/>}
                                    {item.color &&
                                        <span className={style.color} style={{'background-color': item.color}}></span>}
                                    {item.label && <span className={item.icon ? style.label : ''}>{item.label}</span>}
                                </Button>
                            );
                    }
                })}
            </div>
        );
    }
}
