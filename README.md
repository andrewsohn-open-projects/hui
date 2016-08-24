# hui

HUI provides better UI components in the perspective of user-friendly in any web environment.

## Getting Started

HUI library only requires the user to load a single package file.
Access to the hui class must then be configured in the markup.

```html
<link rel="stylesheet" href="dist/hui-ui.min.css" />
<link rel="stylesheet" href="dist/hui-core.min.css" />
<body class="hui">...</body>
```
As the script works only with jQuery 1.8 or higher, it is necessary to load the jQuery library first.

```html
<script src="libs/jquery-1.8.3.min.js"></script>
<script src="dist/hui-core.min.js"></script>
<script src="dist/hui-ui.min.js"></script>
```

### Installing in command
```
npm install hui
```

### To build the project
Build using a gulp in HUI Library
```
gulp				// Build all processes
gulp core-compile	// Merge and Transpile Core JavaScript files
gulp core-uglify	// Minifiy Core JavaScript files
gulp css			// Compile SCSS files
gulp test			// Unit Tests
```
After the build output is shown below.
```
dist/hui-core.js
dist/hui-core.min.js
dist/hui-ui.js
dist/hui-ui.min.js
dist/hui-ui.css
dist/hui-ui.min.css
dist/hui-core.css
dist/hui-core.min.css
dist/hui-dark.css
dist/hui-dark.min.css
```

## Documentation


## Maintainers

Created by Andrew Sohn

## License

### The MIT License
===============

Copyright (c) 2016 
Hivelab Co., Ltd
http://www.hivelab.co.kr/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
