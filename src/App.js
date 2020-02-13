import React from 'react';
import Amplify from 'aws-amplify';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import aws_exports from './aws-exports';
import Organizer from './components/Organizer'
import Attendee from './components/Attendee'
import Welcome from './components/Welcome'


Amplify.configure(aws_exports);
Amplify.Logger.LOG_LEVEL = 'INFO';


class  App extends React.Component {
 
  render(){
  return (
    <div>
    <h1>Welcome</h1>
    <BrowserRouter>
    <Link to="/organizer">Organizer</Link> |
    <Link to="/attendee"> Attendee</Link> |
    <Link to="/welcome"> Welcome</Link>
   
    <Route path="/organizer" component={Organizer}/>
    <Route path="/attendee" component={Attendee}/>
    <Route path="/welcome"  component={Welcome}/>
    </BrowserRouter>
    </div>
  );
  }
}

export default App;
