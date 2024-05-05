import React from "react";

export class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'transparent'
        };
    }

    changeColor(newColor) {
        this.setState({color: newColor});
    }

    render() {
        return (
            <>
                <h1>
                    Color Picker
                </h1>
                <div className={'bg-' + this.state.color} style={{'width': '100px', 'height': '100px'}}></div>
                <div className="btn-group mt-3" role="group">
                    <button className="btn btn-sm btn-danger" onClick={() => this.changeColor('danger')}>
                        Red
                    </button>
                    <button className='btn btn-sm btn-success' onClick={() => this.changeColor('success')}>
                        Green
                    </button>
                    <button className='btn btn-sm btn-primary' onClick={() => this.changeColor('primary')}>
                        Blue
                    </button>
                </div>
            </>
        )
    }
}