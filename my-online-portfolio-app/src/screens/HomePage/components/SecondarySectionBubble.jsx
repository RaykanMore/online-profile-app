import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecondarySectionBubble = (props) => {
    return (
        <div className="ssb-outer-container">
            <div
                className="button button-hover section-bubble ssb-icon-container"
                onClick={() => props.showSectionBody()}
            >
                <FontAwesomeIcon
                    className='section-icon'
                    icon={props.icon}
                />
            </div>
            <text className="ssb-title">{props.title}</text>
        </div>
    );
}

export default SecondarySectionBubble;