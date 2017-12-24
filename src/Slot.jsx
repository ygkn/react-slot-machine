import React from 'react';
import SweetScroll from 'sweet-scroll';
import PropTypes from 'prop-types';

import { findDOMNode } from 'react-dom';

class Slot extends React.Component {
  constructor() {
    super();
    this.state = { scroller: null };
  }

  componentDidMount() {
    this.setState({
      scroller: new SweetScroll(
        {
          duration: this.props.duration,
          easing: this.props.easing,
        },
        this.FrameRef,
      ),
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.target === prevProps.target) return;

    this.FrameRef.scrollTop = 0;

    if (this.targetRef) {
      this.state.scroller.toElement(findDOMNode(this.targetRef));
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{ overflow: 'hidden' }}
        ref={FrameRef => (this.FrameRef = FrameRef)}
      >
        {this.props.children.map((child, index) =>
            (index === this.props.target
              ? React.cloneElement(child, { ref: ref => (this.targetRef = ref) })
              : child))}
      </div>
    );
  }
}

Slot.defaultProps = {
  duration: 3000,
  easing: 'easeOutQuint',
};

Slot.propTypes = {
  duration: PropTypes.number,
  target: PropTypes.number.isRequired,
};

export default Slot;
