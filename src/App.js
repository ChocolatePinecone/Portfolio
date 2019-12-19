import React from 'react';
import logo from './assets/images/Jelmer-Pijnappel.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React`
        </a>
      </header>
        <body>
            {/*The core Firebase JS SDK is always required and must be listed first*/}
            <script src="/__/firebase/7.6.1/firebase-app.js"/>

            {/*TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries*/}
            <script src="/__/firebase/7.6.1/firebase-analytics.js"/>

            {/*Initialize Firebase*/}
            <script src="/__/firebase/init.js"/>
        </body>
    </div>
  );
}

export default App;
