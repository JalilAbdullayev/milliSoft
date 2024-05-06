import React from "react";

export class Switch extends React.Component {
    state = {
        switchCheck: false
    }

    changeState(event) {
        this.setState({switchCheck: event.target.checked});
    }

    render() {
        return (
            <>
                <h1>
                    Toggle Switch
                </h1>
                <div className="form-check form-switch">
                    <input type="checkbox" role="switch" checked={this.state.switchCheck}
                           className={"form-check-input border " + (this.state.switchCheck ? 'border-success bg-success' : 'border-danger')}
                           onChange={event => this.changeState(event)}/>
                </div>
                <p>
                    Current State: {this.state.switchCheck ? 'On' : 'Off'}
                </p>
            </>
        )
    }
}