import { BitWriter } from "https://code4fukui.github.io/bitutil/BitWriter.js";
import { BitReader } from "https://code4fukui.github.io/bitutil/BitReader.js";

const B32S = "0123456789ACDEFGHJKLMNPQRTUVWXYZ";
const B32 = new Uint8Array(B32S.length);
for (let i = 0; i < B32S.length; i++) {
  B32[i] = B32S[i].charCodeAt(0);
}
const ALIAS = { O: 0, I: 1, B: 8, S: 5 };
const SEP = "_".charCodeAt(0);

const encode = (bin, withsep = true) => {
  const r = new BitReader(bin);
  const res = new Uint8Array(bin.length * 3);
  let idx = 0;
  for (;;) {
    const c = r.read(5);
    if (c < 0) break;
    const n = B32[c];
    res[idx++] = n;
    if (withsep && idx % 5 == 4) {
      res[idx++] = SEP;
    }
  }
  return new TextDecoder().decode(new Uint8Array(res.buffer, 0, idx));
};

const decode = (s) => {
  const s2 = [];
  for (const c of s) {
    const a = ALIAS[c];
    if (a) {
      s2.push(a);
    } else {
      const n = B32S.indexOf(c);
      if (n >= 0) {
        s2.push(n);
      }
    }
  }
  const w = new BitWriter();
  for (const n of s2) {
    w.write(5, n);
  }
  return w.getBytes(true);
}

export const Base32 = { encode, decode };
