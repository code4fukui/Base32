//import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";
import { Base32 } from "./Base32.js";

const encoded = Base32.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base32.decode(encoded);
console.log(decoded);
