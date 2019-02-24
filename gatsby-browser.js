/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Always start at the top of the page on a route change.
// More investigation needed for a better solution. See https://github.com/gatsbyjs/gatsby/pull/3483

exports.onRouteUpdate = ({ location: { hash } }) => {
  if (typeof window !== `undefined`) {
    if (hash) {
      const element = document.querySelector(hash);
      window.scrollTo(0, element.offsetTop - 71);

      if (location.pathname.includes('faq'))
        element.click();
    }
    else 
      window.scrollTo(0, 0);
  }
}

exports.shouldUpdateScroll = args => {
   return false;
};