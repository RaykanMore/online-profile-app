import React from 'react';

const EducationDetailsTile = props => {
    return (
        <div className="edt-outer-container">
            <text className="edt-primary-text">{props.qualification}</text>
            <text className="edt-secondary-text">{props.institutionAndDuration}</text>
            <text className="edt-secondary-text">{props.location}</text>
        </div>
    );
}

export default EducationDetailsTile;