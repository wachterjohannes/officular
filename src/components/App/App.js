import React, { PropTypes } from 'react';
import './App.scss';

class App {

    static propTypes = {
        children: PropTypes.element.isRequired,
        error: PropTypes.object
    };

    render() {
        return !this.props.error ? (
            <div>
                {this.props.children}
            </div>
        ) : this.props.children;
    }

}

export default App;
