/** Copyright Notice
 * @author fabiofcferreira
 * @license MIT
 * @description Small function to scale Lottie SVG animations
 * @param {Number} multiplier Scale multiplier of the size
 * @param {HTMLElement} container
 */
function lottieScale (multiplier, container) {
  if (multiplier < 1) return Error('Scale should always be a positive floating number greater than 1')

  let svgElement = container.querySelector('svg')

  let newFrameWidth = svgElement.viewBox.baseVal.width / multiplier
  let newFrameHeight = svgElement.viewBox.baseVal.height / multiplier

  // For example:
  // An SVG animation with width 1920px would now become 960px wide with scale 2.
  // The same happens with height
  svgElement.width.baseVal.value = svgElement.viewBox.baseVal.width = newFrameWidth
  svgElement.height.baseVal.value = svgElement.viewBox.baseVal.height = newFrameHeight

  // Only change the starting X and Y coords if the frame size is decreasing
  let x = newFrameWidth / 2
  let y = newFrameHeight / 2

  svgElement.viewBox.baseVal.x = x - ((multiplier % 1) * x)
  svgElement.viewBox.baseVal.y = y - ((multiplier % 1) * y)
}

module.exports = lottieScale
