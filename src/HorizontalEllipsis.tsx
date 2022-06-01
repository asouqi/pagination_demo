import React from "react";

const HorizontalEllipsis = () => {
    return <svg width="20" height="4" viewBox="0 0 20 4">
        <g transform="rotate(-90 2 2)" fill="#1A9BC7" fill-rule="evenodd">
            <rect width="4" height="4" rx="2"></rect>
            <rect y="8" width="4" height="4" rx="2"></rect>
            <rect y="16" width="4" height="4" rx="2"></rect>
        </g>
    </svg>
};

export default HorizontalEllipsis;
