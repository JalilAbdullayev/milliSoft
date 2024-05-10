import React from "react";

export const Search = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <input type="search" className="form-control" placeholder='Search' onChange={(e) => props.search(e)}/>
            </div>
        </div>
    )
}