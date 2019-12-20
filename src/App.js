import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import PageNavigation from './components/PageNavigation';

const App = () => (
    <div className='App'>
        <header className='App-header'>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <PageNavigation className='nav' />
            </div>
        </header>

        {/* The core Firebase JS SDK is always required and must be listed first */}
        <script src='/__/firebase/7.6.1/firebase-app.js' />

        {/* TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries */}
        <script src='/__/firebase/7.6.1/firebase-analytics.js' />

        {/* Initialize Firebase */}
        <script src='/__/firebase/init.js' />
    </div>
);

export default App;
