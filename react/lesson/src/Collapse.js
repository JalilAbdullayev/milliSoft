import React from "react";

const Collapse = (props) => {
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
}

export default Collapse;