import { css } from 'styled-components';

const sizes = {
    bigDesktop: 1800, 
    desktop: 1200,
    tablet: 600,
    phone: 320,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }`
    return acc;
}, {});

export default media;