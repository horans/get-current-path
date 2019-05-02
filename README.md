# Get Current Path

"Get Current Path" (or "GCP"),
will acquire the path of currently executing js file.

## Install

```html
<script src="./get-current-path.js"></script>
```

## Usage

Use "GCP" as soon as possible, and avoid to use directly in any delays.
(setTimeout, Promise, Event)

```javascript
var currentPath = gcp()
```

## Fallback

"GCP" uses `currentScript` as default.
If the client browser does not support this feature (eg., IE),
it will fallback to a not reliable approach.
This fallback approach may not working when other async script presents.
You can try to pass the script filename to fix that.

```javascript
var currentPath = gcp('your-script.js')
```

## References

1. [How to get the file-path of the currently executing javascript code](https://stackoverflow.com/questions/2255689/)
1. [What is my script src URL](https://stackoverflow.com/questions/984510/)
1. [document.currentScript is null](https://stackoverflow.com/questions/38769103/)
1. [Document​.current​Script](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript)

## Change Log

```text
180903
* fallback with filename
```

```text
180831
* initial release
```