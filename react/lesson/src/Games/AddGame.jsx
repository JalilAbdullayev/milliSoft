import React from "react";
import serialize from 'form-serialize';

export class AddGame extends React.Component {
    formSubmit = (event) => {
        event.preventDefault();
        let obj = serialize(event.target, {hash: true});
        this.props.add(obj);
    }

    render() {
        return (
            <form onSubmit={this.formSubmit} className="mt-5">
                <h4 className='text-center'>
                    Add Game
                </h4>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="Name"/>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputYear">Year</label>
                        <input type="number" className="form-control" name="Year" min='1900'
                               max={new Date().getFullYear()}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputLink">Link</label>
                        <input type="text" className="form-control" name="Link"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image</label>
                        <input type="text" className="form-control" name="Image"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-100 mt-3" value="Add"/>
            </form>
        )
    }
}