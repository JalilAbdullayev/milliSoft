import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.photo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {props.cardTitle}
                </h5>
                <p className="card-text">
                    {props.cardContent}
                </p>
                <p className="card-text"><small className="text-body-secondary">
                    {props.updateTime}
                </small>
                </p>
            </div>
        </div>
    );
}

Card.defaultProps = {
    cardTitle: 'Default Title',
}

Card.propTypes = {
    cardTitle: PropTypes.string,
    cardContent: PropTypes.string,
    updateTime: PropTypes.string,
    photo: PropTypes.string
}
export default Card;