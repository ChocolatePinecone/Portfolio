import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import { PageNavigation } from '../components/PageNavigation';
import LanguageToggler from '../components/LanguageToggler';
import { getContentByLanguage } from '../utils/LanguageSetting';

const Home = () => {
    const history = useHistory();

    return (
        <div id='home'>
            <LanguageToggler history={history} />
            <h2>{getContentByLanguage('Dit is het portfolio van:', 'This is the portfolio of:')}</h2>
            <br />
            <img src={logo} alt='Jelmer Pijnappel' />
            <PageNavigation className='nav' />
        </div>
    );
};

export default Home;
