import React from "react";
import serialize from "form-serialize";

export class Add extends React.Component {
    formSubmit = (event) => {
        event.preventDefault();
        let obj = serialize(event.target, {hash: true});
        this.props.add(obj);
    }

    render() {
        return (
            <form onSubmit={this.formSubmit} className="mt-5">
                <h4 className='text-center'>
                    Add Person
                </h4>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="name"/>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Surname</label>
                        <input type="text" className="form-control" name="surname"/>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputYear">Age</label>
                        <input type="number" className="form-control" name="age" min='1' max='100'/>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-100 mt-3" value="Add"/>
            </form>
        )
    }
}