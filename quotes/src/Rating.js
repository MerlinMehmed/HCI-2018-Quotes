import React, {Component} from "react";
import './Rating.css'

class Rating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: props.rating,
            temp_rating: props.rating
        }
    }

    getInitialState() {
        return {
            rating: this.props.rating || null,
            temp_rating: null
        };
    }

    rate(rating) {
        this.setState({
            rating: rating,
            temp_rating: rating
        });
    }

    render() {
        var stars = [];

        for(var i = 0; i < 5; i++) {
            var className = 'star-rating__star';

            if (this.state.rating >= i && this.state.rating != null) {
                className += ' is-selected';
            }

            stars.push(
                <span
                    className={className}
                    onClick={this.rate.bind(this, i)}>
                    ★
                </span>
            );
        }

        return (
            <span className="star-rating">
                {stars}
            </span>
        );
    }
}

export default Rating;