/**
 * Snippet from:
 * https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */
const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const logos = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default logos;
