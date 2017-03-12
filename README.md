# domSawyer

domSawyer is a JavaScript DOM manipulation library inspired by jQuery. With domSawyer, users can:

* Select one or many DOM elements
* Traverse and interact with DOM elements
* Create DOM elements
* Make `DOMNodeCollection` objects from `HTMLElement`s
* Queue functions until the DOM is fully loaded
* Simplify HTTP request

## Example
[gifr](http://adamjubert.github.io/gifr), a single-page web app inspired by Flickr

## Installation
Download `./domSawyer/`, include it in your project's directory and include the following script tag in the `head` section of your page's `index.html`:
```
<script type="text/javascript" src="domSawyer/dom_sawyer.js"></script>
```

## Features
Select DOM elements by their class, ids, or HTML element type by using the `$ds` selector. This will return an array of interactive `domSawyer`-wrapped objects.

### `addClass(className)`
Adds a class to the element.

`### append(arg)`
The given `arg` will be added to each selected element.

`### $ds.ajax(options)`
Performs an asynchronous `XMLHTTPRequest` using the `options` object. Return a chainable `Promise` once the request returns.

`### children()`
Returns all children of the element.

`### classList()`
Returns all classes attached the the element.

`### each(callback)`
Iterates through each element and performs the callback on it.

`### elements()`
Returns the elements.

`### empty()`
Removes all inner HTML properties from the element.

`### find(selector)`
Retrieve all descendants of each element, filtered by the `selector` string. The returned collection will contain all matching elements.

`### first()`
Returns the element's first child.

`### hasClass(className)`
Returns `true` or `false` depending on whether the element has the given `className`.

`### html(htmlContent)`
If `htmlContent` is a string, it will be added to each element.
If no argument is given, the first element's HTML will be returned.

`### last()`
Returns the element's last child.

`### length()`
Returns the elements length as an integer.

`### on(eventName, callback)`
Attaches an event handler function to the element.

`### off(eventName)`
Removes the specified event handler from the element.

`### parent()`
Returns the element's parent node.

`### remove()`
Removes the element.

`### removeClass(className)`
Removes the given `className` from the element's classes.

`### toggleClass(className)`
Turns `className` on or off depending on its current state.
