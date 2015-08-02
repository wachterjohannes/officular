import React, { PropTypes } from 'react';
import './NotFoundPage.scss';

class NotFoundPage {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = 'Page Not Found';
        this.context.onSetTitle(title);

        return (
            <div>
                <h1>{title}</h1>

                <p>Sorry, but the page you were trying to view does not exist.</p>
            </div>
        );
    }

}

export default NotFoundPage;
