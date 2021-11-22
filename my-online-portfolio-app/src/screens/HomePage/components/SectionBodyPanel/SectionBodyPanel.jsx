import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SectionBodyPanel = props => {
    return (
        <div
            className="sbp-outer-container"
            style={{
                left: props.isOpen ? "0%" : "-100%"
            }}
        >
            <div className="sbp-close-container">
                <div
                    onClick={() => props.closeSidePanel()}
                    className="button sbp-close"
                >
                    <FontAwesomeIcon
                        className='close-icon'
                        icon={faTimes}
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionBodyPanel;