import React from 'react';
import { ABOUT_ME } from '../utils';


const AboutMeBody = props => {
    return (
        <div className="body-container amb-outer-container">
            {
                ABOUT_ME.map((paragraph) => {
                    return (
                        <p className="amb-paragraph">
                            {paragraph}
                        </p>   
                    )
                })
            }
        </div>
    );
}

export default AboutMeBody;