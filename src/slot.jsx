import React from 'react';
import styled from 'styled-components';
import SweetScroll from 'sweet-scroll';

const Frame = styled.div`
  overflow: auto;
  height: 200px;
`;

const getDOMNodeInSlotItem = (self, index) => self.props.children[index].props.children;

export class Slot extends React.Component {
  constructor() {
    super();
    this.state = { scroller: null };
  }

  static defaultProps = {
    duration: 3000,
    easing: 'easeOutQuint',
  };

  componentDidMount() {
    this.setState({
      scroller: new SweetScroll({
        duration: this.props.duration,
        easing: this.props.easing,
      }),
    });
  }

  componentDidUpdate() {
    this.FrameRef.scrollTop = 0;
    this.state.scroller.toElement(getDOMNodeInSlotItem(this.props.target));
  }

  render() {
    <Frame innerRefs={FrameRef => (this.FrameRef = FrameRef)}>{this.props.children}</Frame>;
  }
}
