import React from "react";

export const GameList = (props) => {
    return (
        <div className="row mt-3">
            {props.games.map(game => {
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
                                    <button className="btn btn-md btn-outline-danger" onClick={() => props.delete(game.id)}>
                                        Delete
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