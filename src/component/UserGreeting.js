import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn : false
  }
}

  render() {

    return this.state.isLoggedIn && <div>Welcome Kientnehihi</div>


    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Kientnehihi</div> :
    //     <div>Welcome Guest</div>
    // )

    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Kientehihi</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(
    //     <div>{message}</div>
    // )


    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Kietnehihi</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Kietnehihi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting