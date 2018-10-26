import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.defaultProps = {
  children: null,
};


ScrollToTop.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default withRouter(ScrollToTop);
