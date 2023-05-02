import React from 'react';

const Button = ({
    children,
    icon,
    bgColor,
    color,
    bgHoverColor,
    size,
    width,
    padding,
    disabled = false,
    pointerEvents,
    onClick,
    hoverBackground,
    ...passProps
}) => {
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
            className={` text-text flex text-${size}
                 mx-2 max-h-6 min-w-max px-2 py-0.5 w-${width}
                 hover:text-textHovered hover:bg-${hoverBackground}
                 cursor-pointer select-none items-center whitespace-nowrap
                 rounded hover:drop-shadow-xl `}
        >
            {children}
        </div>
    );
};

export default Button;
