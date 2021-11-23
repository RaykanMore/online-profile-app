import React from 'react';

const DownloadDocument = props => {
    return (
        <a
            href={props.src}
            download
        >
            {props.children}
        </a>
    ); 
}

export default DownloadDocument