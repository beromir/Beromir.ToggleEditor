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
            values: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    icon: PropTypes.string,
                    description: PropTypes.string,
                    color: PropTypes.string,
                })
            ),
        }).isRequired,
    };

    static defaultOptions = {
        layout: 'grid',
        columns: null,
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
            valueArray.push({
                label: i18nRegistry.translate(item.label),
                icon: item.icon,
                description: i18nRegistry.translate(item.description),
                color: item.color,
                key,
            });
        }

        function getColumnsClassNames() {
            if (options.layout === 'list' || options.layout === 'flex') {
                return null;
            }

            const columns = options.columns || Object.keys(options.values).length;
            return {'grid-template-columns': `repeat(${columns}, 1fr)`};
        }

        return (
            <div className={style[options.layout]} style={getColumnsClassNames()}>
                {valueArray.map((item) => {
                    switch (options.layout) {
                        case 'list':
                            return (
                                <button onClick={() => commit(item.key)} type="button" title={item.description}
                                        className={value === item.key ? style.selected : ''}>
                                    <span className={[style.radio, value === item.key && highlight ? style.highlight : ''].join(' ')}><span></span></span>
                                    {item.icon && <Icon icon={item.icon}/>}
                                    {item.label && <span>{item.label}</span>}
                                </button>
                            );

                        case 'color':
                            return (
                                <div className={style.colorBox}>
                                    <button onClick={() => commit(item.key)} type="button"
                                            title={item.description}
                                            className={[style.colorButton, value === item.key ? highlight ? style.highlight : style.selected : '', item.color === 'transparent' ? style.colorTransparent : '', item.color === 'none' ? style.colorNone : ''].join(' ')}
                                            style={{'background-color': item.color}}>
                                        <Icon icon="times-circle"/>
                                    </button>
                                    {item.label && <span className={style.label}>{item.label}</span>}
                                </div>
                            );

                        default:
                            return (
                                <Button onClick={() => commit(item.key)} isActive={value === item.key}
                                        title={item.description} className={[style.button, value === item.key && highlight ? style.highlight : ''].join(' ')}>
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
