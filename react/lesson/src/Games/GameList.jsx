import React from "react";

export class GameList extends React.Component {
    render() {
        return (
            <div className="row mt-3">
                {this.props.games.map(game => {
                    return (
                        <div className="col-lg-4" key={game.id}>
                            <div className="card mb-4 shadow-sm">
                                <img src={game.Image} alt="" className='card-img-top'/>
                                <div className="card-body">
                                    <a href={game.Link} className="card-title text-decoration-none" target='_blank'
                                       rel='noreferrer'>
                                        {game.Name}
                                    </a>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <button className="btn btn-md btn-outline-danger"
                                                onClick={() => this.props.delete(game.id)}>
                                            Delete
                                        </button>
                                        <button className="btn btn-md btn-outline-info"
                                                onClick={() => this.props.openModal(game)}>
                                            Edit
                                        </button>
                                        <h6>
                                        <span className="badge text-bg-primary">
                                            {game.Year}
                                        </span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}