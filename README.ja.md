# Base32
Base 32 文字列の符号化/復号化を行うJavaScriptのモジュールです。

## デモ
特にありません。

## 機能
- バイナリデータをBase32文字列に符号化、復号化できます
- Base32符号化によって文字列の辞書順が保たれます
- 0-9、A-Zの制限された文字セットを使用し、人間が読みやすい符号化を提供します
- 64文字形式と52文字形式(区切り文字なし)のBase32符号化をサポートしています

## 使い方
コードの中で:

```javascript
import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";

const encoded = Base32.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base32.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32);
crypto.getRandomValues(key);
const encoded64 = Base32.encode(key);
console.log(encoded64); // 64文字形式のBase32文字列
const encoded52 = Base32.encode(key, false);
console.log(encoded52); // 52文字形式のBase32文字列
```

## ライセンス
MIT License