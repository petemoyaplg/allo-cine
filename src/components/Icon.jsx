import React from 'react';
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from 'react-icons/fa';


export const setIcon = ( stateVisibility ) => {
    return stateVisibility ? <IoIcons.IoIosArrowDropdownCircle /> : <IoIcons.IoIosArrowDroprightCircle />;
}

export const getAvatar = () => {
    return <BiIcons.BiUserPin />
}

export const socialMedias = [
    { title: 'instagramme', icon: <FaIcons.FaInstagram />, href: 'https://www.instagram.com/gaspard.plg/' },
    { title: 'github', icon: <FaIcons.FaGithub />, href: 'https://github.com/petemoyaplg' },
    { title: 'facebook', icon: <FaIcons.FaFacebook />, href: 'https://web.facebook.com/gaspard.petemoya' },
    { title: 'twitter', icon: <FaIcons.FaTwitter />, href: '' }
];

export const contacts = [
    { title: 'phone', icon: <FaIcons.FaPhoneAlt />, text: '+243 995 531 859' },
    { title: 'mail', icon: <IoIcons.IoIosMail />, text: 'gaspardplg11@gmail.com' },
];
