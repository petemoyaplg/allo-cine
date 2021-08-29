import React from 'react';
import { BounceLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="loader">
            <BounceLoader loading />
        </div>
    );
}

export default Loader;