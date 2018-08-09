import { css } from 'styled-components';

const BreakPoints = {
  bigDesktop: 1800,
  desktop: 1200,
  laptop: 1024,
  tablet: 600,
  phone: 320,
};

// Iterate through the break point sizes and create a media template
const Media = Object.keys(BreakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BreakPoints[label] / 16}em) {
        ${css(...args)}
    }`;
  return acc;
}, {});

export {
  Media,
  BreakPoints,
};
