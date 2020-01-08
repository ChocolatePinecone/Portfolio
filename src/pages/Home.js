import React from 'react';
import logo from '../assets/images/logo.png';
import PageNavigation from '../components/PageNavigation';

const Home = () => (
    <div id='home'>
        <h3>This is the portfolio of:</h3>
        <br />
        <img src={logo} alt='Jelmer Pijnappel' />
        <PageNavigation className='nav' />
    </div>
);

export default Home;
