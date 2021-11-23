import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownloadLinkTile = props => {
    return (
        <div className="dlt-outer-container">
            <FontAwesomeIcon
                className="tile-icon"
                icon={props.icon}
            />
            <div className="tile-title">
                {props.title}
            </div>
        </div>
    );
}

export default DownloadLinkTile;