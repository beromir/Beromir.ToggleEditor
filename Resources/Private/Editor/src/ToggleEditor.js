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

        const columns = options.columns === null ? Object.keys(options.values).length : options.columns;

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

        return (
            <div className={[style[options.layout]].join(' ')}
                 style={options.layout !== 'flex' ? {'grid-template-columns': 'repeat(' + columns + ', 1fr)'} : null}>
                {valueArray.map((item) => {
                    if (options.layout !== 'color') {
                        return (
                            <Button onClick={() => commit(item.key)} isActive={value === item.key}
                                    title={item.description} className={style.button}>
                                {item.icon && !item.color && <Icon icon={item.icon}/>}
                                {item.color &&
                                    <span className={style.color} style={{'background-color': item.color}}></span>}
                                {item.label && <span className={item.icon ? style.label : ''}>{item.label}</span>}
                            </Button>
                        );
                    } else {
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
                    }
                })}
            </div>
        );
    }
}
