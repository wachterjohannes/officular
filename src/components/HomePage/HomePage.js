import React, { PropTypes } from 'react';
import './HomePage.scss';

class ErrorPage {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = 'Home';
        this.context.onSetTitle(title);

        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
    }

}

export default ErrorPage;
