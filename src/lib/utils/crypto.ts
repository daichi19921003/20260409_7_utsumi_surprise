import CryptoJS from 'crypto-js';

/**
 * 文字列をSHA-256でハッシュ化します。
 * クイズの正解判定に使用します。
 */
export const hashString = (text: string): string => {
  return CryptoJS.SHA256(text.trim().toLowerCase()).toString();
};

/**
 * Base64でエンコードされた文字列をデコードします。
 * 最終URLの難読化解除に使用します。
 */
export const decodeBase64 = (encoded: string): string => {
  return CryptoJS.enc.Base64.parse(encoded).toString(CryptoJS.enc.Utf8);
};

/**
 * 文字列をBase64でエンコードします。
 * 開発時のデータ作成用ユーティリティです。
 */
export const encodeBase64 = (text: string): string => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
