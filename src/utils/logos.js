/**
 * Snippet from:
 * https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */
const importAll = r => {
	const images = {}
	r.keys().forEach(item => {
		images[item.replace('./', '')] = r(item)
	})
	return images
}

// Can't seem to use variable paths to the separate directories of logos...

const sponsorLogos = importAll(require.context('../images/sponsors', false, /\.(png|jpe?g|svg)$/))

const partnerLogos = importAll(require.context('../images/partners', false, /\.(png|jpe?g|svg)$/))

module.exports = {
	sponsorLogos,
	partnerLogos,
}
