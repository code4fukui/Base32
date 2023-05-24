# Base32 encoding/decoding ES module for JavaScript

Base 32 is between hexadecimal notation and Base 64 encoding. It's intended to be a **human-friendly** -- you don't have to worry about punctuation, capitalization, or letters/numbers that are easy to confuse, making it easier to transmit in handwriting or over the phone.

One of the primary purposes is to have aesthetically pleasing SHA1 hashes. Compare:

 - Hex: `17O57684bea1f9331418b633a8f373119d765fd4`
 - B64: `xE_ptB5SeclHm8JEsD0-ST1mTBM`
 - B32: `RJ56_U1WM_LTT5_3TQH_K4P0_YJ4L_UTKD_3ZZZ_ZW`

Try giving out the Base 64 hash over the phone! "lowercase 'x', capital 'E', underscore, lowercase 'p', ..." Base 32 will work the same with upper- or lowercase, you can mistake a number for a similar-looking letter, and it will *still* decode to the same data.

## Getting started

In your code:

```javascript
import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";

const encoded = Base32.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base32.decode(encoded);
console.log(decoded);
```

## Warning: this is *a* Base 32 implementation, not *the* Base 32 implementation

There are about (128 choose 32) different specifications of something called "Base 32" - see [Wikipedia](http://en.wikipedia.org/wiki/Base_32) for some of them.

This is just one that should be simple, less error-prone.

## Minispec

- The *encoding* alphabet consists of the numerals 0-9 and the letters A-Z, excluding a few letters that might look like numbers, which we simply interpret as follows:

  - I -> 1
  - B -> 8
  - O -> 0
  - S -> 5

- Each character corresponds to 5 bits of input.
- Lexicographic order of strings is preserved through Base 32 encoding.

## Todo

- fix workflow for auto test

## Formalia

Under MIT License.

Fork as much as you like, I'm more than amenable to pull requests. I'm trying to keep it reasonably node-ish, so bear that in mind.
