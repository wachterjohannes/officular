import React, { PropTypes } from 'react';
import './ErrorPage.scss';

class ErrorPage {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired,
        onPageNotFound: PropTypes.func.isRequired
    };

    render() {
        let title = 'Error';
        this.context.onSetTitle(title);

        return (
            <div>
                <h1>{title}</h1>

                <p>Sorry, an critical error occurred on this page.</p>
            </div>
        );
    }

}

export default ErrorPage;
