import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
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

const StyledCarousel = styled(Carousel)`
  background: white;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  -webkit-box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const StyledCarouselItem = styled(CarouselItem)`
  width: 900px;
  height: 300px;
  display: flex !important;
  opacity: 0;

  &.active {
    opacity: 1;
    transition: opacity .6s ease-out;
  }

  &.carousel-item-right {
    img {
      opacity: 0;
    }
  }
`;

const TestimonialImg = styled.img`
  width: 300px;
  height: 300px;
  float: left;
  border-radius: 8px 0 0 8px;
`;

const TestimonialWrapper = styled.div`
  // padding-left: 300px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

const items = [
  {
    src: LachlanImg,
    testimonial: `I've had the pleasure of attending three NLDCs during my time in AIESEC and the conference has been a consistent source of motivation, connection, and development. The conference has allowed me to build lasting relationships with my AIESEC colleague as well as business professionals such as Erin Williams of the Asia Pacific Foundation and Manisha Narula of the League of Innovators. The conference is a must for any AIESECer.`,
  },
  {
    src: JeanlucImg,
    testimonial: `The Y2B forum is an absolutely unreal experience. To be in the same room as business professionals who only want the best for each young person at this conference is amazing. You get the chance to get see these professionals at a different level as opposed to hearing the same general advice that you can get anywhere else.`,
  },
  {
    src: EmmersonImg,
    testimonial: `I attended NLDC last year, and the conference truly showed me every aspect of what AIESEC can provide. I made so many connections outside my local chapter and felt the passion that AIESEC shared with every single delegate. The Youth to Business Forum had amazing speakers where they connected their company values to AIESEC values, and that allowed me to see the impact that AIESEC is making outside of this organization. Most importantly, NLDC allowed me to reflect on myself and understand how much AIESEC has changed me to a better leader. It was this conference that motivated me to strive for more and bring equally great experiences AIESEC has brought me to every single member in AIESEC in Canada.`,
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
        <StyledCarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <TestimonialImg src={item.src} alt={item.altText} />
          <TestimonialWrapper>
            <p>{ item.testimonial }</p>
          </TestimonialWrapper>
        </StyledCarouselItem>
      );
    });

    return (
      <Wrapper>
        <StyledCarousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval="1000000">
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            { slides }
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </StyledCarousel>
      </Wrapper>
    );
  };
};


export default Testimonials;