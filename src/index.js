import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserSub} from './graphql/mutations'
import {  graphqlOperation,API } from 'aws-amplify';
//console.log(process.env.NODE_ENV)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

askForNotificationPermission()

function askForNotificationPermission() {
    Notification.requestPermission(function(result) {
      console.log('User Choice', result);
      if (result !== 'granted') {
        console.log('No notification permission granted!');
      } else {
        configurePushSub();
        // displayConfirmNotification();
      }
    });
  }
 
  function configurePushSub() {
    if (!('serviceWorker' in navigator)) {
      return;
    }
    navigator.serviceWorker.register('custom-service-worker.js')
  
    var reg;
    navigator.serviceWorker.ready
      .then(function(swreg) {
        console.log('ready')
        reg = swreg;
        return swreg.pushManager.getSubscription();
      })
      .then(function(sub) { 
        if (sub === null) {
          // Create a new subscription
          var vapidPublicKey = 'BGg3eXwdO3uWdEEwmkVA5zG4hNcfKMWr1YblaEQDsamYG27m-GB3OUkNhqC_PzXKA1U4v-3518i9URJVmr64Llg';
          var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
          return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidPublicKey
          });
        }
         else {
          console.log('We have a subscription')
         
        }
      })
      .then(async (newSub)=> {
          if(newSub!==undefined){
          console.log('new subscripton got created',newSub)
          const response = await API.graphql(graphqlOperation(createBrowserSub, {input: newSub}))
          console.log(response)

          }
        //   const data={sub:newSub}
        // return axios.post('http://localhost:3015/sub', data)
        //   }
      })
      .then(function(res) {
          if(res!==undefined){
        console.log('subscription saved to db')
        console.log(res.data)   
          displayConfirmNotification();
          }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  function displayConfirmNotification() {
    if ('serviceWorker' in navigator) {
      var options = {
        body: 'You successfully subscribed to our Notification service!',
        icon: '/src/images/icons/app-icon-96x96.png',
        image: '/src/images/sf-boat.jpg',
        dir: 'ltr',
        lang: 'en-US', // BCP 47,
        vibrate: [100, 50, 200],
        badge: '/src/images/icons/app-icon-96x96.png',
        tag: 'confirm-notification',
        renotify: true,
        actions: [
          { action: 'confirm', title: 'Okay', icon: '/src/images/icons/app-icon-96x96.png' },
          { action: 'cancel', title: 'Cancel', icon: '/src/images/icons/app-icon-96x96.png' }
        ]
      };
  
      navigator.serviceWorker.ready
        .then(function(swreg) {
          swreg.showNotification('Successfully subscribed!', options);
        });
    }
  }


