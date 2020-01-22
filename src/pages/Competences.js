import React from 'react';
import './Competences.css'
import { ContentNavigation } from '../components/ContentNavigation';
import logo from '../assets/images/logo.png';
import { redirectToPath} from '../components/PageNavigation';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';
import Javascript from '../competences/Javascript';
import Java from '../competences/Java';
import Cplusplus from '../competences/C++';
import Skills from '../competences/Skills';
import Experience from '../competences/Experience';

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
                        <Route path='/skills/hard-skills/languages/javascript'>
                            <Javascript/>
                        </Route>
                        <Route path='/skills/hard-skills/languages/java'>
                            <Java/>
                        </Route>
                        <Route path='/skills/hard-skills/languages/c++'>
                            <Cplusplus/>
                        </Route>
                        <Route path='/skills'>
                            <Skills/>
                        </Route>
                        <Route path='/experience'>
                            <Experience />
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
