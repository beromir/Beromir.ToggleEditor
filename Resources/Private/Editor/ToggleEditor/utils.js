export const getPreviewConfig = (item) => getIconOrPreviewConfig("preview", item);
export const getIconConfig = (item) => getIconOrPreviewConfig("icon", item);

export function getItemVariants(
    item,
    key,
    activeFallbackToDefault = false,
    processItem = (value) => value,
    subkey = "",
) {
    const activeKey = `${key}Active${subkey}`;
    const defaultItem = item[key + subkey];
    let activeItem = item[activeKey];

    if (activeFallbackToDefault && activeItem === undefined) {
        activeItem = defaultItem;
    }

    if (defaultItem == undefined && activeItem == undefined) {
        return null;
    }

    return {
        default: processItem(defaultItem),
        active: processItem(activeItem),
    };
}

export function flattenValues(values, layout) {
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
            value,
        });
    }
    if (layout === "color") {
        return processColorValues(array);
    }
    return array;
}

export function processColorValues(values) {
    if (!Array.isArray(values)) {
        return [];
    }
    values = values
        .map((item) => ({
            ...item,
            color: processColor(item.color),
        }))
        .filter((item) => item.color);

    return values;
}

function processColor(color) {
    if (!color || (typeof color !== "string" && !Array.isArray(color))) {
        return null;
    }
    if (typeof color === "string") {
        return [color];
    }
    color = color.filter(Boolean);
    if (color.length < 1) {
        return null;
    }
    return color;
}

function getIconOrPreviewConfig(type, item) {
    if (!item) {
        return null;
    }

    const state = getItemVariants(item, type);
    // Nothing is set, so we return null
    if (!state) {
        return null;
    }
    const needLayering = state.default && state.active;
    const rotate = getItemVariants(item, type, true, (value) => `rotate(${value || 0}deg)`, "Rotate");
    const label = getItemVariants("label", type, true);
    const description = getItemVariants("description", true);

    return {
        type,
        needLayering,
        state,
        label,
        description,
        rotate: rotate,
    };
}
