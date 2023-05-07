import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    icon,
    bgColor,
    color,
    bgHoverColor,
    size,
    width,
    height,
    padding,
    disabled = false,
    pointerEvents,
    onClick,
    className,
    ...passProps
}) => {
    const classes = twMerge(`
    text-text
    flex 
    min-w-max
    px-2 py-0.5 
    hover:text-textHovered      hover:bg-hovered
    cursor-pointer   select-none      items-center     whitespace-nowrap
    rounded    
    ${className ?? ""}
    `);
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <div
            style={{ backgroundColor: bgColor, color, pointerEvents, padding }}
            className={classes}
        >
            {children}
        </div>
    );
};

export default Button;
