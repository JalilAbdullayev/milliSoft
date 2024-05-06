import React from 'react';

export class Counter extends React.Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState(plus => ({count: plus.count + 1}));
    }

    decrement = () => {
        this.setState(minus => ({count: minus.count - 1}));
    }

    render() {
        return (
            <>
                <h1>
                    Count: {this.state.count}
                </h1>
                <div className="btn-group" role="group">
                    <button className='btn btn-sm btn-dark' onClick={this.increment}>
                        Increment
                    </button>
                    <button className='btn btn-sm btn-dark' onClick={this.decrement}>
                        Decrement
                    </button>
                </div>
            </>
        )
    }
}