import React from 'react';
import logo from './assets/images/Jelmer-Pijnappel.png';
import './App.css';

const App = () => (
    <div className='App'>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
        </header>
        <body>
            {/* The core Firebase JS SDK is always required and must be listed first */}
            <script src='/__/firebase/7.6.1/firebase-app.js' />

            {/* TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries */}
            <script src='/__/firebase/7.6.1/firebase-analytics.js' />

            {/* Initialize Firebase */}
            <script src='/__/firebase/init.js' />
        </body>
    </div>
);

export default App;
