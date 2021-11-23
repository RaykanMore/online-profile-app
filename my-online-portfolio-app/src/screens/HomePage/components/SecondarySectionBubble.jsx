import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecondarySectionBubble = (props) => {
    return (
        <div
            className="button button-hover section-bubble ssb-outer-container"
            onClick={() => props.showSectionBody()}
        >
            <FontAwesomeIcon
                className='section-icon'
                icon={props.icon}
            />
        </div>
    );
}

export default SecondarySectionBubble;