import React from 'react';
import PropTypes from 'prop-types';

import { findDOMNode } from 'react-dom';

class Slot extends React.Component {
  constructor() {
    super();
    this.targetRefs = [];
  }

  componentDidUpdate(prevProps) {
    if (this.props.target === prevProps.target) return;

    this.FrameRef.scrollTop = 0;

    const target = this.targetRefs[this.props.target];

    if (target == null) return;

    const beforeDistance = findDOMNode(this.targetRefs[this.targetRefs.length - 1]).offsetTop;

    const beforeScroll = this.props.times > 1 ? beforeDistance * (this.props.times - 1) : 0;

    const totalScroll = beforeScroll + target.offsetTop;

    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      console.log(elapsed);
      if (elapsed > this.props.duration) return;

      this.FrameRef.scrollTop =
        this.props.easing(elapsed, 0, totalScroll, this.props.duration) % beforeDistance;

      requestAnimationFrame(tick);
    };

    tick();
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{ overflow: 'hidden', position: 'relative' }}
        ref={FrameRef => (this.FrameRef = FrameRef)}
      >
        {this.props.children.map((child, index) =>
          React.cloneElement(child, { ref: ref => (this.targetRefs[index] = ref) }))}
      </div>
    );
  }
}

Slot.defaultProps = {
  duration: 3000,
  easing: function easeOutQuad(elapsed, initialValue, amountOfChange, duration) {
    return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue;
  },
  times: 1,
};

Slot.propTypes = {
  duration: PropTypes.number,
  target: PropTypes.number.isRequired,
  easing: PropTypes.func,
  times: PropTypes.number,
};

export default Slot;
