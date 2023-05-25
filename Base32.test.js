import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base32 } from "./Base32.js";

Deno.test("simple", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base32.encode(s);
  const decoded = Base32.decode(encoded);
  t.assertEquals(decoded, s);
});
Deno.test("sep1", () => {
  const s = new Uint8Array(5);
  const encoded = Base32.encode(s);
  t.assertEquals(encoded, "0000_0000");
});
Deno.test("sep2", () => {
  const s = new Uint8Array(6);
  const encoded = Base32.encode(s);
  t.assertEquals(encoded, "0000_0000_00");
});
Deno.test("sep3", () => {
  const s = new Uint8Array(4);
  const encoded = Base32.encode(s);
  t.assertEquals(encoded, "0000_000");
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
Deno.test("lowercase", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base32.encode(s);
  const decoded = Base32.decode(encoded);
  const decoded2 = Base32.decode("d5j6_6");
  t.assertEquals(decoded, decoded2);
});
Deno.test("spc", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base32.encode(s);
  const decoded = Base32.decode(encoded);
  const decoded2 = Base32.decode("  D-5J6\n 6  ");
  t.assertEquals(decoded, decoded2);
});
Deno.test("prikey", () => {
  const key = new Uint8Array(32);
  for (let i = 0; i < key.length; i++) {
    key[i] = Math.random() * 256;
  }
  const encoded = Base32.encode(key);
  //console.log(encoded); // MNNU_1LKG_6R29_Z5JM_ZT25_01DH_850E_PWK0_XR2D_L5DP_KAK3_9EWV_V2T0
  t.assertEquals(encoded.length, 64);
  const encoded2 = Base32.encode(key, false);
  //console.log(encoded2); // MNNU1LKG6R29Z5JMZT2501DH850EPWK0XR2DL5DPKAK39EWVV2T0
  t.assertEquals(encoded2.length, 52);
});
