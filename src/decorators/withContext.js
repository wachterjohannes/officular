import React, { PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

function withContext(ComposedComponent) {
    return class WithContext {

        static propTypes = {
            context: PropTypes.shape({
                onInsertCss: PropTypes.func,
                onSetTitle: PropTypes.func,
                onSetMeta: PropTypes.func,
                onPageNotFound: PropTypes.func
            })
        };

        static childContextTypes = {
            onInsertCss: PropTypes.func.isRequired,
            onSetTitle: PropTypes.func.isRequired,
            onSetMeta: PropTypes.func.isRequired,
            onPageNotFound: PropTypes.func.isRequired
        };

        getChildContext() {
            let context = this.props.context;

            return {
                onInsertCss: context.onInsertCss || emptyFunction,
                onSetTitle: context.onSetTitle || emptyFunction,
                onSetMeta: context.onSetMeta || emptyFunction,
                onPageNotFound: context.onPageNotFound || emptyFunction
            };
        }

        render() {
            let { context, ...other } = this.props;

            return <ComposedComponent {...other} />;
        }

    };
}

export default withContext;
