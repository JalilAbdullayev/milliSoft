import React from 'react';

export class Counter extends React.Component {
    increment() {
        document.querySelector('span').innerHTML++;
    }

    decrement() {
        document.querySelector('span').innerHTML--;
    }
    render() {
        return (
            <>
                <h1>
                    Count: <span>
                    0
                </span>
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