import React from 'react';


const PrimarySectionBubble = props => {
    return (
        <div
            className="button section-bubble psb-outer-container"
            onClick={() => props.showSectionBody()}
            style={{
                transform: `translateX(${props.runAnimation ?  "0%" : "-50%"})`,
                opacity: props.runAnimation ?  "1" : ".3"
            }}
        >
            <img
                className='section-image'
                src={props.source}
                alt={props.title}
            />
        </div>
    );
}

export default PrimarySectionBubble;