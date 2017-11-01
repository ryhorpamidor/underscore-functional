# Underscore Functional

A small and ligthweight library mimicking a subset of [Underscore's functional helpers](http://underscorejs.org/#functions).

You can use it when size and simplicity matters.

## How to use

There is a single command
```
grunt build
```
that will do a couple of things under the hood:
1. It runs unit tests against the original Underscore library.
2. It compiles source files of this library.
3. It runs unit tests against compiled files.

Unit tests should pass both for original Underscore and for this library.

Also you may use
 ```
 grunt build:[list of helpers]
 ```
 like
 ```grunt build:once,wrap,throttle```
 to compile only necessary helpers.

 Compiled dist folder will contain two files:
 * _f.js
 * _f.min.js

Just put one of them into your HTML.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.