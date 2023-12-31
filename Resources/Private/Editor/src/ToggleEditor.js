import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from "@neos-project/react-ui-components";
import style from './ToggleEditor.css';

export default class ToggleEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
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
        const {commit, value} = this.props;
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
                label: item.label,
                icon: item.icon,
                description: item.description,
                color: item.color,
                key,
            });
        }

        function getColumnsClassNames() {
            if (options.layout === 'list') {
                return null;
            } else if (options.layout === 'flex') {
                return null;
            } else if (options.columns === null) {
                return {'grid-template-columns': 'repeat(' + Object.keys(options.values).length + ', 1fr)'};
            }

            return {'grid-template-columns': 'repeat(' + options.columns + ', 1fr)'};
        }

        return (
            <div className={style[options.layout]} style={getColumnsClassNames()}>
                {valueArray.map((item) => {
                    switch (options.layout) {
                        case 'list':
                            return (
                                <button onClick={() => commit(item.key)} type="button" title={item.description}
                                        className={value === item.key ? style.selected : ''}>
                                    <span className={style.radio}><span></span></span>
                                    {item.icon && <Icon icon={item.icon}/>}
                                    {item.label && <span>{item.label}</span>}
                                </button>
                            );

                        case 'color':
                            return (
                                <div className={style.colorBox}>
                                    <button onClick={() => commit(item.key)} type="button"
                                            title={item.description}
                                            className={[style.colorButton, value === item.key ? style.selected : '', item.color === 'transparent' ? style.colorTransparent : '', item.color === 'none' ? style.colorNone : ''].join(' ')}
                                            style={{'background-color': item.color}}>
                                        <Icon icon="times-circle"/>
                                    </button>
                                    {item.label && <span className={style.label}>{item.label}</span>}
                                </div>
                            );

                        default:
                            return (
                                <Button onClick={() => commit(item.key)} isActive={value === item.key}
                                        title={item.description} className={style.button}>
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
