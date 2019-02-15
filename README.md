# google-polyline
[![npm](https://img.shields.io/npm/v/google-polyline.svg?style=flat-square)](https://npmjs.com/package/google-polyline)
[![npm license](https://img.shields.io/npm/l/google-polyline.svg?style=flat-square)](https://npmjs.com/package/google-polyline)
[![npm downloads](https://img.shields.io/npm/dm/google-polyline.svg?style=flat-square)](https://npmjs.com/package/google-polyline)
[![build status](https://img.shields.io/travis/jhermsmeier/node-google-polyline.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-google-polyline)

Encodes and decodes [Google's polyline format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save google-polyline
```

## Usage

```js
var polyline = require( 'google-polyline' )
```

```js
polyline.encode([
  [ 38.5, -120.2 ],
  [ 40.7, -120.95 ],
  [ 43.252, -126.453 ]
])

> '_p~iF~ps|U_ulLnnqC_mqNvxq`@'
```

```js
polyline.decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )

> [
  [ 38.5, -120.2 ],
  [ 40.7, -120.95 ],
  [ 43.252, -126.453 ]
]
```

## Benchmarks

```sh
$ npm run benchmark
```

```
# decode: 3 points ⨉ 100000
ok ~21 ms (0 s + 21199187 ns)

# decode: ~350 points ⨉ 100000
ok ~741 ms (0 s + 740819246 ns)

# encode: 3 points ⨉ 100000
ok ~221 ms (0 s + 221480259 ns)

# encode: ~350 points ⨉ 100000
ok ~2.4 s (2 s + 403294668 ns)
```
