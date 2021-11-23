import React from 'react';

const EmploymentRecordTile = props => {
    return (
        <div className="ert-outer-container">
            <table className="work-record-table">
                <tr className="table-heading table-heading-primary">
                    <td className="table-heading table-heading-primary" colSpan={2}>{props?.companyAndDuration}</td>
                </tr>
                {
                    props?.positions?.map((positionRecord) => {
                        return ([
                                <tr key={0} className="table-row-secondary">
                                    <td className="table-heading table-heading-secondary" colSpan={2}>{positionRecord?.role}</td>
                                </tr>,
                                <tr key={1}>
                                    <td className="table-heading table-heading-tirtiary">Duties</td>
                                    <td className="table-data">
                                        <ul>
                                            {
                                                positionRecord?.duties?.map((roleDuty) => <li>{roleDuty}</li>)
                                            }
                                        </ul>
                                    </td>
                                </tr>,
                                <tr key={2}>
                                    <td className="table-heading table-heading-tirtiary">Business Impact</td>
                                    <td className="table-data">{positionRecord?.businessImpact}</td>
                                </tr>
                        ])
                    })
                }
            </table>
        </div>
    );
}

export default EmploymentRecordTile;