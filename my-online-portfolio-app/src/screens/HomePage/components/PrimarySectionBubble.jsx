import React from 'react';


const PrimarySectionBubble = props => {
    return (
        <div
            className="psb-outer-container"
            style={{
                transform: `translateX(${props.runAnimation ?  "0%" : "-50%"})`,
                opacity: props.runAnimation ?  "1" : ".3"
            }}
        >
            <div
                className="button section-bubble psb-outer-container"
                onClick={() => props.showSectionBody()}
            >
                <img
                    className='section-image'
                    src={props.source}
                    alt={props.name}
                />
            </div>
            <text className="ssb-title">{props.title}</text>
        </div>
    );
}

export default PrimarySectionBubble;