/**
 * @author fabiofcferreira
 * @description Small functions scales a Lottie SVG animation
 * @param {Number} multiplier Scale multiplier of the size
 * @param {HTMLElement} container
 */
function lottieScale(multiplier, container) {
  if (multiplier < 0) return Error('Scale should always be a positive floating number')
  
  let svgElement = container.querySelector('svg')
  
  if (multiplier > 1) {
    // reduce size by multipler-th times
    // For example, an SVG with width 1920px would now become 960px wide.
    // The same happens with height
    svgElement.viewBox.baseVal.width /= multiplier
    svgElement.viewBox.baseVal.height /= multiplier

    svgElement.viewBox.baseVal.x = svgElement.viewBox.baseVal.width / multiplier
    svgElement.viewBox.baseVal.y = svgElement.viewBox.baseVal.height / multiplier
  }
}