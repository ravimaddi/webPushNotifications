
import React from 'react';
import {  graphqlOperation,API } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { lambdaTrigger,createMessage } from '../graphql/mutations';

  
  const postmsg= async(query,variables)=>{
    const response = await API.graphql(graphqlOperation(query, variables))
    return response
  }
  
  class  Organizer extends React.Component {
    state={
      msg:''
    }
   
  
    handleChange=(e)=>{
      this.setState({msg:e.target.value})
    }
  
  
    handleSubmit=async(e)=>{
      e.preventDefault()
      const txt=this.state.msg
      this.setState({msg:''})
      let input = {
        msg: txt
      }
      const resp = await API.graphql(graphqlOperation(createMessage,{input: {text:txt}}))
      console.log('msg',resp)
      
      const response = await API.graphql(graphqlOperation(lambdaTrigger,{input}))
      console.log(response)
    }
    render(){
    return (
      <div>
      <Connect>
  
      {({ data, loading }) => {
       
     return( 
       <div>
     <h4>Enter message</h4><br/>
     <form onSubmit={this.handleSubmit}>
       <input type="text" onChange={(e)=>this.handleChange(e)} value={this.state.msg}/><br/><br/>
       <input type ="submit"/>
     </form>
     </div>
     )
    }}
      </Connect>
      </div>
    );
    }
  }
  
  export default Organizer;
  