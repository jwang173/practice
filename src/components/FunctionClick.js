import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )//no () for function as function call
}

export default FunctionClick
