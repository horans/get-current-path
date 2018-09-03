# Get Current Path

"Get Current Path" (or "GCP"),
will acquire the path of currently executing js file.

## Install

```html
<script src="./get-current-path.js"></script>
```

## Usage

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

## Change Log

__180903__

* fallback with filename

__180831__

* initial release