import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MY_SOCIALS } from '../utils';

const SocialMediaLinks = (props) => {
    return (
        <div
            className="sml-outer-container"
            style={{
                opacity: props.runAnimation ?  "1" : "0"
            }}
        >
            {
                MY_SOCIALS.map((socialMwdiaLink) => {
                    return (
                        <a
                            href={socialMwdiaLink.href}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon className="social-media-icon" icon={socialMwdiaLink.icon} />
                        </a>
                    )
                })
            }
        </div>
    );
}

export default SocialMediaLinks;