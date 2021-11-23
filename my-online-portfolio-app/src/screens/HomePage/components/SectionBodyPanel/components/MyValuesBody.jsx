import React from 'react';
import { MY_VALUES } from '../utils';
import ValuesTile from './ValuesTile';

const MyValuesBody = () => {
    return (
        <div className="body-container mvb-outer-container">
            {
                MY_VALUES.map((myValue) => <ValuesTile {...myValue} />)
            }
        </div>
    );
}

export default MyValuesBody;