import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import LachlanImg from '../../images/youthtobusiness/lachlan-karr.png'
import JeanlucImg from '../../images/youthtobusiness/jeanluc-ong.jpg'
import EmersonImg from '../../images/youthtobusiness/emerson-cheung.jpg'
import Arrow from '../../images/youthtobusiness/arrow.png';

const Wrapper = styled.div`
  margin-top: 2rem;
  height: 100%;
  ${Media.tablet`height: 470px;`}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  -webkit-box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  .carousel-indicators {
    display: none;
  }
`;

const StyledCarouselItem = styled(CarouselItem)`
  width: 100%;
  height: 100%;
  ${Media.tablet`height: 400px;`}
  ${Media.laptop`height: 300px;`}
  display: flex !important;
  flex-direction: column;
  ${Media.tablet`flex-direction: row;`}
  opacity: 0;

  &.active {
    opacity: 1;
    transition: opacity .6s ease-out;
    z-index: 2;
  }

  &.carousel-item-right {
    img {
      opacity: 0;
    }
  }
`;

const TestimonialImg = styled.img`
  width: 100%;
  height: 100%;
  ${Media.medPhone`
    width: 300px;
    height: 300px;
  `}
  float: left;
  margin: 0 auto;
  ${Media.tablet`margin: auto 0 auto 20px;`}
  ${Media.laptop`
    margin: 0;
    border-radius: 8px 0 0 8px;
  `}
`;

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  ${Media.tablet`padding: 20px;`}
  ${Media.laptop`padding: 20px 30px;`}
`;

const NameWrapper = styled.div`
  h3 {
    color: ${Styles.themeColour};
    margin-bottom: 0;
  }
`;

const CarouselButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 120px;
  ${Media.tablet`top: 180px;`}
  ${Media.laptop`top: 120px;`}
  background: white;
  width: 46px;
  height: 46px;
  border-color: transparent;
  border-radius: 50%;
  -webkit-box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
  box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
  text-indent: -9000px;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: all .15s;
  transition: all .15s;

  ${({ Orientation }) => (Orientation === 'right'
    ? 'right: -20px'
    : 'left: -20px'
  )};

  &:focus,
  &:hover {
    outline: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
  }
`;

const items = [
  {
    src: LachlanImg,
    testimonial: `I've had the pleasure of attending three NLDCs during my time in AIESEC and the conference has been a consistent source of motivation, connection, and development. The conference has allowed me to build lasting relationships with my AIESEC colleague as well as business professionals such as Erin Williams of the Asia Pacific Foundation and Manisha Narula of the League of Innovators. The conference is a must for any AIESECer.`,
    name: `Lachlan Karr`,
    title: `National VP, Business Development, AIESEC in Canada 2018-2019`,
  },
  {
    src: JeanlucImg,
    testimonial: `The Y2B forum is an absolutely unreal experience. To be in the same room as business professionals who only want the best for each young person at this conference is amazing. You get the chance to get see these professionals at a different level as opposed to hearing the same general advice that you can get anywhere else.`,
    name: `Jean-Luc Ong`,
    title: `Local Committee President, AIESEC in Calgary 2018`,
  },
  {
    src: EmersonImg,
    testimonial: `I attended NLDC last year, and the conference truly showed me every aspect of what AIESEC can provide. I made so many connections outside my local chapter and felt the passion that AIESEC shared with every single delegate. The Youth to Business Forum had amazing speakers where they connected their company values to AIESEC values, and that allowed me to see the impact that AIESEC is making outside of this organization. Most importantly, NLDC allowed me to reflect on myself and understand how much AIESEC has changed me to a better leader. It was this conference that motivated me to strive for more and bring equally great experiences AIESEC has brought me to every single member in AIESEC in Canada.`,
    name: `Emerson Cheung`,
    title: `National President, AIESEC in Canada 2019-2020`,
  }
];

const StyledSvg = styled.svg`
  position: absolute;
  z-index: 3;
  width: 60px;
  height: 60px;
  top: 15px;
  ${Media.tablet`top: 35px;`}
  ${Media.laptop`top: 90px;`}
  right: 0;
  -webkit-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -ms-transform: scale(-1, -1);
  transform: scale(-1, -1);
  enable-background: new 0 0 512.5 512.5
`;

const QuotesBackground = () => (
  <StyledSvg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="512.5px" height="512.5px" viewBox="0 0 512.5 512.5">
    <g>
      <path d="M112.5,208.25c61.856,0,112,50.145,112,112s-50.144,112-112,112s-112-50.145-112-112l-0.5-16
        c0-123.712,100.288-224,224-224v64c-42.737,0-82.917,16.643-113.137,46.863c-5.817,5.818-11.126,12.008-15.915,18.51
        C100.667,208.723,106.528,208.25,112.5,208.25z M400.5,208.25c61.855,0,112,50.145,112,112s-50.145,112-112,112
        s-112-50.145-112-112l-0.5-16c0-123.712,100.287-224,224-224v64c-42.736,0-82.918,16.643-113.137,46.863
        c-5.818,5.818-11.127,12.008-15.916,18.51C388.666,208.723,394.527,208.25,400.5,208.25z"
      />
    </g>
  </StyledSvg>
);

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
            <NameWrapper>
              <h3>{ item.name }</h3>
              <p>{ item.title }</p>
            </NameWrapper>
          </TestimonialWrapper>
        </StyledCarouselItem>
      );
    });

    return (
      <Wrapper>
        <QuotesBackground />
        <StyledCarousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval="1000000">
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            { slides }
          <CarouselButton onClick={this.previous} Orientation="left">
            <img src={Arrow} style={{ transform: 'scaleX(-1)', width: '20px' }} />
          </CarouselButton>
          <CarouselButton onClick={this.next} Orientation="right">
            <img src={Arrow} style={{ width: '20px' }} />
          </CarouselButton>
        </StyledCarousel>
      </Wrapper>
    );
  };
};


export default Testimonials;