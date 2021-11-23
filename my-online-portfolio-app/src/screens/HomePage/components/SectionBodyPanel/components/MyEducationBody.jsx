import React from 'react';
import { MY_EDUCATION } from '../utils';
import EducationDetailsTile from './EducationDetailsTile';

const MyEducationBody = () => {
    return (
        <div className="body-container meb-outer-container">
            {
                MY_EDUCATION.map((educationRecord) => <EducationDetailsTile {...educationRecord} />)
            }
        </div>
    )
}

export default MyEducationBody;