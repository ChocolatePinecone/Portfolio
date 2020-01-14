import React from 'react';
import './Competences.css'
import ContentNavigation from '../components/ContentNavigation';
import logo from '../assets/images/logo.png';

const Competences = () => (
    <div id='competences'>
        <div className='header-menu'>
            <img src={logo} className='logo' alt='Jelmer Pijnappel' />
        </div>
        <div className='body'>
            <ContentNavigation />
            <div className='content'><h3>This is the competences page which will contain skills and experiences</h3></div>
        </div>
    </div>
);

export default Competences;
