import React from 'react';
import './Competences.css'
import ContentNavigation from '../components/ContentNavigation';
import logo from '../assets/images/logo.png';
import { redirectToPath} from '../components/PageNavigation';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';

export const Competences = () => {
    const history = useHistory();

    return (
        <div id='competences'>
            <div className='header-menu'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt='Jelmer Pijnappel' onClick={ () => { redirectToPath(history, '/') } }/>
                </div>
                <div className='mobile-burger-container' onClick={toggleMobileMenu}>
                    <div id='mobile-burger' >
                        <div className='bar topBar'/>
                        <div className='bar btmBar'/>
                    </div>
                </div>
            </div>
            <div className='body'>
                <ContentNavigation />
                <div className='content'>
                    <Switch>
                        <Route path='/skills'>
                            <h3>Welcome skills</h3>
                        </Route>
                        <Route path='/experience'>
                            <h3>Welcome experience</h3>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export const toggleMobileMenu = () => {
    const burger = document.querySelector('.mobile-burger-container');
    const nav = document.querySelector('.navigation');

    burger.classList.toggle('menu-opened');
    nav.classList.toggle('menu-opened');
};
