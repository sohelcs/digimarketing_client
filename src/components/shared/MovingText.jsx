import React from 'react';

const MovingText = () => {
    return (
        <svg width="400" height="400" className="w-full h-full">
            <defs>
                <path id="curve" d="M 200, 200 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0" fill="transparent" />
            </defs>
            <text className="text-[#333] text-[12px] font-thin animate-moveText">
                <textPath href="#curve">digimarketingmix</textPath>
            </text>
        </svg>

    );
};

export default MovingText; 
