import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler= this.clickHandler.bind(this);
    }
    
// clickHandler() {
//     this.setState({
//         message: 'Goodbye!'
//     })
//     console.log(this)
// }//this undefined in event handler, use event bind

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
        //Binding this as defined: 1.binding in render 2.arrow function in render 3.binding in constructor 4.property as arrow function suggest 3,4 esp 4
    }
}

export default EventBind
