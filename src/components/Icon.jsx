import React from 'react';
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";


export const setIcon = ( stateVisibility ) => {
    return stateVisibility ? <IoIcons.IoIosArrowDropdownCircle /> : <IoIcons.IoIosArrowDroprightCircle />;
}

export const getAvatar = () => {
    return <BiIcons.BiUserPin />
}
