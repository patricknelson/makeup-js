# makeup-listbox

A JavaScript class that represents an ARIA listbox. No CSS provided.

## Example

The following markup is required. Classnames are configurable (see config section below).

```html
<div class="listbox" data-auto-select="true">
    <div class="listbox__options" role="listbox" tabindex="0">
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="../style/icon.svg#icon-tick-small"></use>
                </svg>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="../style/icon.svg#icon-tick-small"></use>
                </svg>
            </svg>
        </div>
        <div class="listbox__option" role="option" aria-selected="false">
            <span class="listbox__value">Option 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                <svg class="icon icon--tick-small" focusable="false" height="8" width="8">
                    <use xlink:href="../style/icon.svg#icon-tick-small"></use>
                </svg>
            </svg>
        </div>
    </div>
</div>
```

Style:

No CSS is provided. However, the class is fully compatible with [eBay Skin](https://ebay.github.io/skin/#listbox).

Script:

```js
const Listbox = require('makeup-listbox');
});
```

## Config

The constructor takes a configuration object as its second parameter.

### customElementMode

Set to true if using the class as the model for a custom element (aka Web Component)

### BEM

Use this object to specify your custom classnames (i.e. if you don't wish to use the default `listbox` prefixes).


## Events

### makeup-listbox-change

Fired when the switch is toggled.

* `detail.on`: true or false