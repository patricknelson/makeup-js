# makeup-floating-label

Module for creating an accessible, progressively enhanced floating label.

## Experimental

This CommonJS module is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
// via npm
npm install makeup-floating-label

// via yarn
yarn add makeup-floating-label
```

## Example

```js
// require the module
const FloatingLabel = require('makeup-floating-label');

// get NodeList
const widgetEls = document.querySelectorAll('.floating-label');

// assign next id to each element
widgetEls.forEach(function(el) {
    var widget = new FloatingLabel(el);
});
```

Markup:

```html
<div class="floating-label">
    <label class="floating-label__label" for="input-1">Input 1</label>
    <input class="floating-label__textbox" id="input-1" name="input-1" />
</div>
```

## Params

* `el`: the root widget el
* `options.labelElementAnimateModifier`: the classname to add when the label begins its CSS animation (default: 'floating-label__label--animate')
* `options.labelElementInlineModifier`: the classname to add when the label is in its non-floating state (default: 'floating-label__label--inline')
* `options.textboxElementBackgroundRGB`: for the purposes of a Chrome autofill bug, if your textbox background colour is not white, specify its RGB value (default: 'rgb(255, 255, 255)')

## Methods

* `refresh()`: call this after form autofill or reset to refresh the label state

## Custom Events        

None

## Dependencies

None

## Polyfills

None