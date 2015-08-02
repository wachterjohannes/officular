import React, { PropTypes } from 'react';
import withContext from '../../decorators/withContext';
import './App.scss';

@withContext
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
