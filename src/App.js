import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Competences from './pages/Competences';

const App = () => (
    <div className='App'>
        <header className='App-header'>
            <div className='page'>
                <Router>
                    <Switch>
                        <Route path='/over-mij'>
                            <About />
                        </Route>
                        <Route path='/vaardigheden'>
                            <Competences />
                        </Route>
                        <Route path='/ervaring'>
                            <Competences />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
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
