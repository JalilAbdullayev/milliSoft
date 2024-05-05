import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
    render() {
        return (
            <div className="card text-start">
                <img src={this.props.photo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.cardTitle}
                    </h5>
                    <p className="card-text">
                        {this.props.cardContent}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">
                        {this.props.updateTime}
                    </small>
                    </p>
                </div>
            </div>
        )
    }
}

/*const Card = (props) => {
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
}*/

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