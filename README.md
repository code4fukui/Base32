# Base32

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base 32 encoding/decoding ES module for JavaScript.

## Features
- Encodes and decodes binary data to and from Base32 strings
- Preserves lexicographic order of strings through Base32 encoding
- Provides human-friendly encoding using a limited set of characters (0-9, A-Z)
- Supports both 64-character and 52-character (without separators) Base32 encoding

## Usage
In your code:

```javascript
import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";

const encoded = Base32.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base32.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32);
crypto.getRandomValues(key);
const encoded64 = Base32.encode(key);
console.log(encoded64); // 64-character Base32 string
const encoded52 = Base32.encode(key, false);
console.log(encoded52); // 52-character Base32 string
```

## Warning
This is *a* Base 32 implementation, not *the* Base 32 implementation. There are about (128 choose 32) different specifications of something called "Base 32" - see [Wikipedia](http://en.wikipedia.org/wiki/Base_32) for some of them. This is just one that should be simple and less error-prone.

## License
MIT License