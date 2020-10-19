import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {

        //Suggest 3 or 4

        return this.state.isLoggedIn && <div>Welcome Vishwas</div>//4.short circuit operator

        // return (
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Vishwas</div>) :
        //     (<div>Welcome Guest</div>)
        // ) //3.ternery operator

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Vishwas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }//2.element variable

        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Vishwas</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // } //1. if/else statement //no only if


        // return (
        //     <div>
        //         <div>Welcome Vishwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
            
        // )
    }
}

export default UserGreeting
