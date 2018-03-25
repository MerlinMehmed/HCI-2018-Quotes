import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quote extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.text}</p>
                    <i>{this.props.author}</i>
                </div>
                <button className='btn btn-info'>Like</button>
            </div>
        );
    }
}

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Quote;