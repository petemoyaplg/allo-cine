import React, { useState } from 'react';
import Chips from 'react-chips';

const ChipList = () => {
    const [ chipArray, setChips ] = useState( [] );

    const onChange = chips => {
        setChips( chips );
    }
    return (
        <div>
            <Chips
                value={chipArray}
                onChange={onChange}
                suggestions={[ "Your", "Data", "Here" ]}
            />
        </div>
    );
}

export default ChipList;