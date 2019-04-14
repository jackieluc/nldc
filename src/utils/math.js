/*
 * Calculates and returns the height that is calculated
 * by the width and aspect ratio
 */
function getHeightFromRatio({ width, ratio }) {
  return (parseFloat(width) / parseFloat(ratio)).toFixed(2);
}

module.exports = {
  getHeightFromRatio,
}