import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";



const Navbar = () => {
    const [ isMoviesActive, setIsMoviesActive ] = useState( false );
    const [ isTvActive, setIsTvActive ] = useState( false );
    const [ isActorsActive, setIsActorsActive ] = useState( false );
    const [ showLinks ] = useState( true );

    const desableAll = () => {
        setIsMoviesActive( false );
        setIsTvActive( false );
        setIsActorsActive( false );
    }

    const activateMovie = () => {
        setIsMoviesActive( true );
        setIsTvActive( false );
        setIsActorsActive( false );
    }

    const activateTv = () => {
        setIsMoviesActive( false );
        setIsTvActive( true );
        setIsActorsActive( false );
    }

    const activateActors = () => {
        setIsMoviesActive( false );
        setIsTvActive( false );
        setIsActorsActive( true );
    }

    return (
        <div className="navbar">
            <div className="lelfSide">
                <div className="lelfSideItem">
                    <h1><Link to="/" className="navbar-logo" onClick={desableAll}>Plg<span><FaIcons.FaPlay /></span>Ciné</Link></h1>
                </div>
                <div className="lelfSideItem">
                    <Link className="link-icon">{showLinks ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}</Link>
                </div>
                <nav className="nav-menu lelfSideItem">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/films" className={isMoviesActive && "active"} onClick={activateMovie}>Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/series" className={isTvActive && "active"} onClick={activateTv}>Séries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/acteurs" className={isActorsActive && "active"} onClick={activateActors}>Acteurs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="rightSide"><Form /></div>
        </div>
    )
}

export default Navbar
