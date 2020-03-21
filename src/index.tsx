import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// @ts-ignore
if (window.cordova) {
    document.addEventListener('deviceready', () => {
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate());
      tomorrow.setHours(18);
      tomorrow.setMinutes(0);
      tomorrow.setSeconds(0);
      var tomorrow_at_6_am = new Date(tomorrow);
    // @ts-ignore  
    window.cordova.plugins.notification.local.schedule({
      id: 1,
      text: "Sei ein Held und hol dir deine Sterne heute in der App",
      firstAt: tomorrow_at_6_am,
      every: "day" // "minute", "hour", "week", "month", "year"
  })
        ReactDOM.render(<App />, document.getElementById('root'));

    }, false);
  } else {
    ReactDOM.render(<App />, document.getElementById('root'));

  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
