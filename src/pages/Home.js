import React from 'react';
import './Home.css'
import logo from '../assets/images/logo.png';
import { PageNavigation } from '../components/PageNavigation';

const Home = () => (
    <div id='home'>
        <h2>This is the portfolio of:</h2>
        <br />
        <img src={logo} alt='Jelmer Pijnappel' />
        <PageNavigation className='nav' />
    </div>
);

export default Home;
