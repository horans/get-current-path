# Get Current Path

Acquire the path of currently executing js file.

* Use `currentScript` if possible.
* Fallback may not working when other asyn script presents.

## Install

```html
<script src="./get-current-path.js"></script>
```

## Usage

```javascript
var currentPath = gcp()
```

## References

1. [How to get the file-path of the currently executing javascript code](https://stackoverflow.com/questions/2255689/)
1. [What is my script src URL](https://stackoverflow.com/questions/984510/)