import React from "react";

export class Switch extends React.Component {
    changeState() {
        if(document.querySelector('input').checked) {
            document.querySelector('#current').innerHTML = 'On';
        } else {
            document.querySelector('#current').innerHTML = 'Off';
        }
    }
    render() {
        return (
            <>
                <h1>
                    Toggle Switch
                </h1>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                           onChange={this.changeState}/>
                </div>
                <p>
                    Current State: <span id='current'>
                    Off
                </span>
                </p>
            </>
        )
    }
}