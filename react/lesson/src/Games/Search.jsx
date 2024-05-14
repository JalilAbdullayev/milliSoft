import React from "react";
import { Link } from "react-router-dom";

export const Search = (props) => {
    return (
        <div className="row">
            <div className="col-10">
                <input type="search" className="form-control" placeholder='Search' onChange={(e) => props.search(e)}/>
            </div>
            <div className="col-2">
                <Link to='/add' className="btn btn-primary">
                    Add Game
                </Link>
            </div>
        </div>
    )
}