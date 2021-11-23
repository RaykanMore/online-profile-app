import React from 'react';

const ContactCard = () => {
    return (
        <div className="cc-outer-container">
            <text className="location">Johannesburg | South Africa</text>
            <div className="cc-contact-entry">
                <text className="information">raykan.more@gmail.com</text>
            </div>
            <div className="cc-contact-entry">
                <text className="information">(+27) 64 757 2232</text>
            </div>
        </div>
    );
}

export default ContactCard;