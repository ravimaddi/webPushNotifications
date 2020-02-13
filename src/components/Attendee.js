import React from 'react'
import { Connect } from 'aws-amplify-react';

import {  graphqlOperation,API } from 'aws-amplify';

function notifyMe(msg) {
  const options = {
    body: 'First notification!',
    icon: 'images/notification-flat.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Go to the site',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close the notification',
        icon: 'images/xmark.png'},
    ]
  }
  
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications!');
    return;
  }
  Notification.requestPermission(status => {
    console.log('Notification permission status:', status);
  });
  
  
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
  
      // TODO 2.4 - Add 'options' object to configure the notification
  
      reg.showNotification('Hello world!', options);
    });
  }
} 

const SubscribeToMsg = `
subscription onCreateMessage{
    onCreateMessage{
          text
    }
   }`;

class Attendee extends React.Component{
    state={
        msg:''
    }
    render(){
        return(
            <div>
            <h1>Attendee</h1>
            <Connect
            subscription={graphqlOperation(SubscribeToMsg)}
            onSubscriptionMsg={(prev, data) => {
               
                notifyMe(data.onCreateMessage.text)
                
                this.setState({msg:data.onCreateMessage.text})
                
            }}
            >
                {({ data, loading }) => {
                   
                    return (
                        <div>
                        <h1>Messages</h1>
                        <h2>{this.state.msg}</h2>
                      
                        </div>
                    )
                }
                }
                </Connect>
                </div>
        )
    }
}
export default Attendee