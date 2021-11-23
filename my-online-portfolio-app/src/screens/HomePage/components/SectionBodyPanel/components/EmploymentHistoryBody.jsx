import React from 'react';
import { MY_WORK_EXPERIENCE } from '../utils';
import EmploymentRecordTile from './EmploymentRecordTile';

const EmploymentHistoryBody = () => {
    return (
        <div className="ehb-outer-container">
            {
                MY_WORK_EXPERIENCE.map((workRecord) => <EmploymentRecordTile {...workRecord} />)
            }
        </div>
    );
}

export default EmploymentHistoryBody;