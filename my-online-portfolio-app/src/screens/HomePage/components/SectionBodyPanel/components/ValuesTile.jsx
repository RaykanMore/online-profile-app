import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValuesTile = props => {
    return (
        <div className="vt-outer-container">
            <div
                className="section-bubble ssb-icon-container"
                style={{
                    marginLeft: "0px",
                    border: "1px solid #508d5263",
                    backgroundColor: "transparent"
                }}
            >
                <FontAwesomeIcon
                    className="section-icon"
                    style={{
                        color: "#128816",
                        transform: `rotate(${props.transform ? "-40deg" : "0deg"})`
                    }}
                    icon={props.icon}
                />
            </div>
            <text className="vt-title">{props.title}</text>
        </div>
    );
}

export default ValuesTile;