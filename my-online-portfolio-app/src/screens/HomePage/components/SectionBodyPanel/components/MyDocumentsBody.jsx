import React from 'react';
import DownloadDocument from '../../../../../componenets/DownloadDocument';
import DownloadLinkTile from './DownloadLinkTile';
import { MY_DOCUMENTS } from '../utils';


const MyDocumentsBody = props => {
    return (
        <div className="body-container mdb-outer-container">
            {
                MY_DOCUMENTS.map((documentEntry) => {
                    return (
                        <DownloadDocument src={documentEntry.documentLink}>
                            <DownloadLinkTile title={documentEntry.documentTitle} icon={documentEntry.documentIcon} />
                        </DownloadDocument>   
                    )
                })
            }
        </div>
    );
}

export default MyDocumentsBody;