import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base32 } from "./Base32.js";

Deno.test("simple", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base32.encode(s);
  const decoded = Base32.decode(encoded);
  t.assertEquals(decoded, s);
});
Deno.test("len 5", () => {
  const s = new Uint8Array(5);
  for (let i = 0; i < s.length; i++) {
    s[i] = 255;
  }
  const encoded = Base32.encode(s);
  const decoded = Base32.decode(encoded);
  t.assertEquals(decoded, s);
});
Deno.test("array", () => {
  for (let i = 0; i < 2000; i++) {
    const n = new Uint8Array(i);
    for (let i = 0; i < n.length; i++) {
      n[i] = i;
    }
    const encoded = Base32.encode(n);
    //console.log(encoded);
    const decoded = Base32.decode(encoded);
    t.assertEquals(decoded, n);
  }
});
