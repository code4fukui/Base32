# Base32

JavaScript用のBase 32エンコード/デコードESモジュール。

## 機能
- バイナリデータとBase32文字列間のエンコードおよびデコード
- Base32エンコード後も文字列の辞書順を保持
- 限られた文字セット（0-9、A-Z）を使用し、人間にとって読みやすいエンコードを提供
- 64文字および52文字（セパレータなし）の両方のBase32エンコードをサポート

## 使い方
コード内での使用例:

```javascript
import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";

const encoded = Base32.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base32.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32);
crypto.getRandomValues(key);
const encoded64 = Base32.encode(key);
console.log(encoded64); // 64文字のBase32文字列
const encoded52 = Base32.encode(key, false);
console.log(encoded52); // 52文字のBase32文字列
```

## 警告
これはBase 32の「ある」実装であり、「唯一の」実装ではありません。「Base 32」と呼ばれるものの仕様は、およそ (128 choose 32) 通り存在します。その一部については[Wikipedia](http://en.wikipedia.org/wiki/Base_32)を参照してください。本ライブラリは、シンプルでエラーが起こりにくいように設計された、そのうちの1つにすぎません。

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
