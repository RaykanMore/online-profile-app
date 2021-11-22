import React from 'react';


const PrimarySectionBubble = props => {
    console.log(props.source)
    return (
        <div
            className="button section-bubble psb-outer-container"
            onClick={() => props.showSectionBody()}
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