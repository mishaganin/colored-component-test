import React from 'react';

const ColoredUserpic = ({...props}) => {
    const {src, size, margin, backgroundColor, colors, hoverColors, colorWidth} = props;
    return <div className="container">
                <div className="container__wrapper">
                    <div className="container__img">
                        <img alt="Test" src={src}></img>
                    </div>
                </div>
                <style container__wrapper>{`
                    div {
                        border-radius: 50%;
                    }

                    img {
                        object-fit: cover;
                        max-width: 100%;
                        max-height: 100%;
                        width: ${size-margin}px;
                        height: ${size-margin}px;
                        border-radius: 50%;
                    }

                    .container {
                        width: ${size}px;
                        height: ${size}px;
                        background: linear-gradient(270deg, ${colors[0]}, ${colors[1]});
                    }

                    .container__wrapper {
                        width: ${size-colorWidth}px;
                        height: ${size-colorWidth}px;
                        margin: 0 auto;
                        transform: translateY(${colorWidth / 2}px);
                        background-color: ${backgroundColor};
                    }

                    .container__img {
                        width: ${size-colorWidth - margin}px;
                        height: ${size-colorWidth - margin}px;
                        margin: 0 auto;
                        transform: translateY(${margin / 2}px);
                    }

                    .container:hover {
                        background: linear-gradient(270deg, ${hoverColors[0]}, ${hoverColors[1]});
                    }
                    
                `}</style>
            </div>
            
}

export default ColoredUserpic;