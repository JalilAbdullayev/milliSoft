import React from "react";

class Collapse extends React.Component {
    constructor() {
        super();
        this.state = {
            showCard: true
        }

        // this.showMore = this.showMore.bind(this);
    }

    showMore = () => {
        this.setState({showCard: !this.state.showCard});
    }

    render() {
        return (
            <div className='col text-center'>
                <button className="btn btn-primary" onClick={this.showMore}>
                    Link with href
                </button>
                {this.state.showCard ? this.props.children : null}
            </div>
        )
    }
}

/*const Collapse = (props) => {
    return (
        <div className='col'>
            <a className="btn btn-primary" data-bs-toggle="collapse" href={'#' + props.href} aria-expanded="true"
               aria-controls={props.href}>
                Link with href
            </a>
            <div className="collapse show" id={props.href}>
                {props.children}
            </div>
        </div>
    );
}*/

export default Collapse;