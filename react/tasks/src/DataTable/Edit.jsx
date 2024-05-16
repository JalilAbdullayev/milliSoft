import React from "react";
import serialize from "form-serialize";

export class Edit extends React.Component {
    formSubmit = (event) => {
        event.preventDefault();
        let obj = serialize(event.target, {hash: true});
        this.props.edit(obj);
        this.props.closeModal();
    }

    render() {
        return (
            <div className="modal d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edit Person
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={this.props.closeModal}></button>
                        </div>
                        <form onSubmit={this.formSubmit}>
                            <div className="modal-body">
                                <div className="form-row row">
                                    <div className="form-group col-md-12">
                                        <label className='mb-2' htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control mb-3" name="name"
                                               defaultValue={this.props.person.name}/>
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-12">
                                        <label className='mb-2' htmlFor="inputName">Surname</label>
                                        <input type="text" className="form-control mb-3" name="surname"
                                               defaultValue={this.props.person.surname}/>
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-12">
                                        <label className='mb-2' htmlFor="inputYear">Age</label>
                                        <input type="number" className="form-control" name="age" min='1' max='100'
                                               defaultValue={this.props.person.age}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={this.props.closeModal}>
                                    Close
                                </button>
                                <button type="submit" className="btn btn-info text-white">
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}