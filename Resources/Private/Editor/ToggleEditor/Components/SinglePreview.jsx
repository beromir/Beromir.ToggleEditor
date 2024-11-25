import React from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import styles from "../style.module.css";
import clsx from "clsx";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));
export default neosifier(SinglePreview);

function SinglePreview({ src, className, style, label, i18nRegistry }) {
    const translatedLabel = i18nRegistry.translate(label);
    if (src.startsWith("<svg ")) {
        return (
            <div
                className={clsx(styles.transition, styles.imageSVG, className)}
                style={style}
                aria-label={translatedLabel}
                dangerouslySetInnerHTML={{ __html: src }}
            />
        );
    }

    return (
        <img
            className={clsx(styles.transition, styles.image, className)}
            style={style}
            alt={translatedLabel}
            src={src.startsWith("resource://") ? `/_Resources/Static/Packages/${src.substr(11)}` : src}
        />
    );
}
