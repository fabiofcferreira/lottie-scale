# Lottie Scale

Lottie Scale is a very small NPM package to allow those with very little and out-of-scale SVG animations exported from Bodymovin to scale them, just by providing the container element and the scale multiplier.

It's particularly simple, that is, a single function call.

## How to use

There are two possible ways to use Lottie Scale.

### Head `<script>` tag

```
<script type="text/javascript" src="https://unpkg.com/lottie-scale@latest/dist/index.min.js"></script>
<!-- OR -->
<script type="text/javascript" src="https://unpkg.com/lottie-scale@latest/dist/index.js"></script>
```

### Module import (ES6 import)

```
import * as lottieScale from 'lottie-scale'
```

### Scale SVG animation

Lottie Scale can only do its magic after the DOM of the SVG animation is rendered so it's essential to add an event listener to the animation.

For now, the only function of the package is `lottieScale`:
```
lottieScale(zoomMultiplier int, lottieObject obj)
```

Usage example in a real case scenario:
```
// If you're using ES6 import
import * as lottieScale from 'lottie-scale'

let el = document.querySelector('#svgContainer')

const anim = lottie.loadAnimation({
  container: el,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json', // Dataset or any other source can be used here to provide Lottie with JSON for the animation to render
  rendererSettings: {
    scaleMode: 'cover',
  }
})

let svgRendered = el.querySelector('svg')

anim.addEventListener('DOMContentLoaded', () => {
  lottieScale(2, svgRendered)
})
```
In this example, the SVG animation is basically zoomed 200%.

### Contributing

Feel free to add your 2 cents via the issues or pull requests tabs.
