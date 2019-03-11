import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import LachlanImg from '../../images/youthtobusiness/lachlan-karr.png'
import JeanlucImg from '../../images/youthtobusiness/jeanluc-ong.jpg'
import EmmersonImg from '../../images/youthtobusiness/emmerson-cheung.jpg'

const Wrapper = styled.div`
  margin-top: 2rem;
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarouselItem = styled(CarouselItem)`
  height: 300px;
`;

const TestimonialImg = styled.img`
  width: 400px;
  height: 400px;
`;

const items = [
  {
    src: LachlanImg,
    testimonial: 'Slide 1',
  },
  {
    src: JeanlucImg,
    testimonial: 'Slide 2',
  },
  {
    src: EmmersonImg,
    testimonial: 'Slide 3',
  }
];

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <StyledCarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <div>
            <p>{item.testimonial}</p>
          </div>
        </StyledCarouselItem>
      );
    });

    return (
      <Wrapper>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval="10000">
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Wrapper>
    );
  };
};


export default Testimonials;