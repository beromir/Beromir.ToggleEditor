import React from "react";
import style from "../style.module.css";
import SinglePreview from "./SinglePreview";
import { getPreviewConfig } from "../utils";

export default function PreviewImage({ item, isCurrent }) {
    const config = getPreviewConfig(item);
    if (!config) {
        return null;
    }
    const { state, rotate, needLayering, label, description } = config;
    const fullClass = item.previewFull ? style.imageFull : null;

    // We have two previews, so we stack them to avoid a jump in the interface
    if (config.needLayering) {
        return (
            <span className={style.layered}>
                <SinglePreview
                    src={state.default}
                    className={fullClass}
                    style={{ opacity: isCurrent ? 0 : 1, transform: rotate?.default }}
                    label={description?.default || label?.default}
                />
                <SinglePreview
                    src={state.active}
                    className={fullClass}
                    style={{ opacity: isCurrent ? 1 : 0, transform: rotate?.active }}
                    label={description?.active || label?.active}
                />
            </span>
        );
    }

    // Only the default is set, so show it always
    if (state.default) {
        return (
            <SinglePreview
                src={state.default}
                className={fullClass}
                style={{ transform: isCurrent ? rotate?.active : rotate?.default }}
                label={description?.default || label?.default}
            />
        );
    }

    // Only the active is set, so show it only when active
    if (state.active && isCurrent) {
        return (
            <SinglePreview
                src={state.active}
                className={fullClass}
                style={{ transform: rotate?.active }}
                label={description?.active || label?.active}
            />
        );
    }

    // Nothing is set, so we return null
    return null;
}
