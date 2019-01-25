# Fade text

Animation of text fading letter-by-letter
Demo: [here](https://jasofalcon.github.io/matrix/)

## Install

```js

npm i fade-text (or yarn)

```

## Usage

```html
<div id="my-text">There is no spoon</div>
```

```js
import FadeText from 'fade-text';

const fadeText = new FadeText();
fadeText.applyAnimation('my-text');
```
