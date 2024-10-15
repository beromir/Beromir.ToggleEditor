import React from "react";
import { Icon } from "@neos-project/react-ui-components";
import style from "../style.module.css";
import clsx from "clsx";
import { getIconConfig } from "../utils";

export default function Icons({ item, size, isCurrent }) {
    const config = getIconConfig(item);
    // Nothing is set, so we return null
    if (!config) {
        return null;
    }

    const { state, rotate, needLayering } = config;

    // We have two previews, so we stack them to avoid a jump in the interface
    if (needLayering) {
        return (
            <span className={style.layered}>
                <Icon
                    icon={state.default}
                    className={style.transition}
                    style={{ opacity: isCurrent ? 0 : 1, transform: rotate?.default }}
                    size={size}
                />
                <Icon
                    icon={state.active}
                    className={style.transition}
                    style={{ opacity: isCurrent ? 1 : 0, transform: rotate?.active }}
                    size={size}
                />
            </span>
        );
    }

    // Only the default is set, so show it always
    if (state.default) {
        return (
            <Icon
                icon={state.default}
                className={style.transition}
                style={{ transform: isCurrent ? rotate?.active : rotate?.default }}
                size={size}
            />
        );
    }

    // Only the active is set, so show it only when active
    if (state.active && isCurrent) {
        return <Icon icon={state.active} style={{ transform: rotate?.active }} size={size} />;
    }

    // Nothing is set, so we return null
    return null;
}
