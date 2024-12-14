import React, { Component } from 'react'

export default class App extends Component {
    state={
        users :[
            {id:101,nmae:"juned",password:"12345"},
            {id:102,nmae:"khan",password:"1234567"},
            {id:103,nmae:"ali",password:"12345871"}
        ],
        isloggedin:false
    }
  render() {
    const newuser=this.state.users.map((user)=>{
        return (
        <h1 key={user.id}> ID={user.id}  Name={user.nmae} Password={user.password}  </h1>
        )
    })
    return (
      <div>{newuser}</div>
    );
  };
};
