import React from 'react';
import { contacts, socialMedias } from '../Icon';
import * as FaIcons from "react-icons/fa";

export default function Footer () {
    return (
        <div className="footer">
            <div className="content">
                <h5>Contact</h5>
                <span>{contacts[ 0 ].icon} {contacts[ 0 ].text}</span>
                <span>{contacts[ 1 ].icon} {contacts[ 1 ].text}</span><br />
                <h5>Suivez-moi</h5>
                {socialMedias.map( ( { title, icon, href } ) => <a href={href} title={title} key={title}>{icon}</a> )}
                <h5>Copyright</h5>
                <span>Plg<FaIcons.FaPlay />Ciné©{new Date().getFullYear()} - Privacy Policy</span>
            </div>
        </div>
    )
}
