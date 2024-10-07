import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "@neos-project/react-ui-components";
import { neos } from "@neos-project/neos-ui-decorators";
import style from "./style.module.css";
import { connect } from "react-redux";
import { selectors } from "@neos-project/neos-ui-redux-store";
import clsx from "clsx";

const getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching),
});

const defaultOptions = {
    layout: "grid",
    values: {},
    columns: null,
    allowEmpty: false,
    iconSize: null,
    disabled: false,
    dataSourceIdentifier: null,
    dataSourceUri: null,
};

function Editor(props) {
    const { layout, values, columns, allowEmpty, iconSize, disabled, dataSourceIdentifier, dataSourceUri } = {
        ...defaultOptions,
        ...props.options,
    };
    const { value, commit, highlight, i18nRegistry, dataSourcesDataLoader } = props;

    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);

    const [isLoading, setIsLoading] = useState(hasDataSource);
    const [options, setOptions] = useState(hasDataSource ? [] : flattenValues(values, i18nRegistry));

    useEffect(() => {
        if (hasDataSource) {
            // Load options from data source
            dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), value).then((values) => {
                setIsLoading(false);
                setOptions(values);
            });
        }
    });

    if (isLoading) {
        return (
            <div
                className={clsx(style.wrapper, style.loading)}
                title={i18nRegistry.translate("Beromir.ToggleEditor:Main:loading")}
            >
                <Icon icon="spinner" size="lg" spin />
            </div>
        );
    }

    if (!options || !options.length) {
        return (
            <div className={clsx(style.wrapper, style.error)}>
                {i18nRegistry.translate(
                    `Beromir.ToggleEditor:Main:error.${hasDataSource ? "noDataFromSource" : "noNodeTypeDefintion"}`,
                )}
            </div>
        );
    }

    const resetLabel = i18nRegistry.translate("Beromir.ToggleEditor:Main:reset");

    function onChange(item, node) {
        if (node) {
            node.blur();
        }
        if (!item || (allowEmpty && value === item.value)) {
            commit("");
            return;
        }
        commit(item.value);
    }

    const getIcon = (item) =>
        item.icon ? (
            <Icon icon={item.icon} style={{ transform: `rotate(${item.iconRotate || 0}deg)` }} size={iconSize} />
        ) : null;
    const getTitle = (item) => (allowEmpty && value === item.value ? resetLabel : item.description || item.label);
    const getAllowEmptyIcon = (item, className = style.allowEmpty) =>
        allowEmpty ? (
            <div className={clsx(className, value === item.value && style.allowEmptyShow)}>
                <Icon size="sm" icon="times" />
            </div>
        ) : null;

    return (
        <div
            className={clsx(style.wrapper, style[layout], disabled && style.disabled)}
            style={{ "--columns": columns || options.length || 1 }}
        >
            {options.map((item) => {
                const isCurrent = value === item.value;
                const { label, disabled } = item;
                switch (layout) {
                    case "list":
                        return (
                            <button
                                onClick={({ currentTarget }) => onChange(item, currentTarget)}
                                type="button"
                                title={getTitle(item)}
                                disabled={disabled}
                                className={clsx(style.listButton, isCurrent && style.selected)}
                            >
                                <span className={clsx(style.radio, isCurrent && highlight && style.highlight)}>
                                    <span></span>
                                </span>
                                {getIcon(item)}
                                {getPreview(item)}
                                {label && <span>{label}</span>}
                                {getAllowEmptyIcon(item, style.allowEmptyRadio)}
                            </button>
                        );

                    case "color":
                        return (
                            <div className={style.colorBox}>
                                <button
                                    onClick={({ currentTarget }) => onChange(item, currentTarget)}
                                    type="button"
                                    title={getTitle(item)}
                                    disabled={disabled}
                                    className={clsx(
                                        style.colorButton,
                                        isCurrent && (highlight ? style.highlight : style.selected),
                                        item.color === "transparent" && style.colorTransparent,
                                    )}
                                    style={{ backgroundColor: item.color }}
                                >
                                    {getAllowEmptyIcon(item)}
                                </button>
                                {label && (
                                    <span className={clsx(style.label, disabled && style.disabled)}>{label}</span>
                                )}
                            </div>
                        );

                    default:
                        return (
                            <Button
                                onClick={() => onChange(item)}
                                isActive={isCurrent}
                                title={getTitle(item)}
                                disabled={disabled}
                                className={clsx(style.button, isCurrent && highlight && style.highlight)}
                            >
                                {getIcon(item)}
                                {getPreview(item)}
                                {label && (
                                    <span className={clsx(item.icon || item.preview ? style.label : null)}>
                                        {label}
                                    </span>
                                )}
                                {getAllowEmptyIcon(item)}
                            </Button>
                        );
                }
            })}
        </div>
    );
}

Editor.propTypes = {
    value: PropTypes.string,
    commit: PropTypes.func.isRequired,
    i18nRegistry: PropTypes.object.isRequired,
    options: PropTypes.shape({
        layout: PropTypes.oneOf(["grid", "flex", "list", "color"]),
        columns: PropTypes.number,
        allowEmpty: PropTypes.bool,
        iconSize: PropTypes.oneOf(["xs", "sm", "lg", "2x", "3x"]),
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
                disabled: PropTypes.bool,
            }),
        ),

        dataSourceIdentifier: PropTypes.string,
        dataSourceUri: PropTypes.string,
        dataSourceDisableCaching: PropTypes.bool,
        dataSourceAdditionalData: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

function getPreview(item) {
    if (!item || !item.preview) {
        return null;
    }
    const preview = item.preview;
    const fullClass = item.previewFull ? style.imageFull : null;
    const label = item.description || item.label;

    if (preview.startsWith("<svg ")) {
        return (
            <div
                className={clsx(style.imageSVG, fullClass)}
                aria-label={label}
                dangerouslySetInnerHTML={{ __html: preview }}
            />
        );
    }

    const src = preview.startsWith("resource://") ? `/_Resources/Static/Packages/${preview.substr(11)}` : preview;
    return <img src={src} className={clsx(style.image, fullClass)} alt={label} />;
}

function flattenValues(values, i18nRegistry) {
    if (!values || typeof values !== "object") {
        return [];
    }

    const array = [];

    for (const value in values) {
        const item = values[value];
        if (item.hidden) {
            continue;
        }
        array.push({
            ...item,
            label: i18nRegistry.translate(item.label),
            description: i18nRegistry.translate(item.description),
            value,
        });
    }
    return array;
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));
const connector = connect((state) => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));
export default neosifier(connector(Editor));
