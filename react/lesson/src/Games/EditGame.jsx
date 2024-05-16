import React from "react";
import serialize from "form-serialize";

export class EditGame extends React.Component {
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
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edit Game
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={this.props.closeModal}></button>
                        </div>
                        <form onSubmit={this.formSubmit}>
                            <div className="modal-body">
                                <div className="form-row row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control" name="Name"
                                               defaultValue={this.props.game.Name}/>
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputYear">Year</label>
                                        <input type="number" className="form-control" name="Year"
                                               defaultValue={this.props.game.Year} min='1900'
                                               max={new Date().getFullYear()}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputLink">Link</label>
                                        <input type="text" className="form-control" name="Link"
                                               defaultValue={this.props.game.Link}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputImage">Image</label>
                                        <input type="text" className="form-control" name="Image"
                                               defaultValue={this.props.game.Image}/>
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