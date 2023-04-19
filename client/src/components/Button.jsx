import React from 'react';

const Button = ({
    children,
    icon,
    bgColor,
    color,
    bgHoverColor,
    size,
    width,
    disabled = false,
    pointerEvents,
    onClick,
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
        <button
            style={{ backgroundColor: bgColor, color, pointerEvents }}
            className={` text-text flex text-${size} max-h-6 px-2  w-${width} hover:text-textHovered hover:bg-hovered mx-2 min-w-max select-none whitespace-nowrap rounded hover:drop-shadow-xl `}
        >
            {children}
        </button>
    );
};

export default Button;
