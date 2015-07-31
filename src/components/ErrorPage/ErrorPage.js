import React, { PropTypes } from 'react';
import './ErrorPage.scss';

class ErrorPage {

    render() {
        let title = 'Error';

        return (
            <div>
                <h1>{title}</h1>

                <p>Sorry, an critical error occurred on this page.</p>
            </div>
        );
    }

}

export default ErrorPage;
