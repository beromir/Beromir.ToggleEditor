import React from "react";
import { Label } from "@neos-project/react-ui-components";
import clsx from "clsx";
import styles from "../style.module.css";

export default function Wrapper({ children, label, id, className, title, style, renderHelpIcon }) {
    if (!children) {
        return null;
    }

    return (
        <>
            {label && (
                <Label htmlFor={id}>
                    {label} {renderHelpIcon()}
                </Label>
            )}
            <div id={id} className={clsx(styles.wrapper, className)} style={style} title={title}>
                {children}
            </div>
        </>
    );
}
