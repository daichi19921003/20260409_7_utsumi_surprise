# 設計書 - クイズの基本ロジックとZustandストアの作成

## アーキテクチャ概要

Zustandを用いたクライアントサイドの状態管理。クイズの進行（現在のステップ）、回答の記録、認証状態を中央集権的に管理する。
セキュリティのため、正解の判定はSHA-256ハッシュ値との比較で行い、最終的な報酬URLはBase64で難読化する。

```mermaid
graph TD
    Store[Zustand Store] --> State[currentStep, answers, isAuthorized]
    Store --> Actions[setStep, submitAnswer, reset]
    Actions --> Utils[crypto (SHA-256), Base64]
```

## コンポーネント設計

### 1. Quiz Store (`src/lib/store/quiz-store.ts`)

**責務**:
- クイズの進行状態（gateway -> trial1 -> trial2 -> trial3 -> reveal）の保持。
- 各試練の回答内容の保持。
- 回答の検証とステップ遷移の実行。
- 最終的な認証状態（isAuthorized）の管理。

**実装の要点**:
- `persist` ミドルウェアは使用せず、リロード時はリセットされる仕様とする。
- 正解判定ロジックをアクション内にカプセル化する。

## データフロー

### クイズ回答提出
```
1. コンポーネントが submitAnswer('trial1', 'ユーザ入力') を呼び出す
2. ストアが入力値をハッシュ化し、定義済みの正解ハッシュと比較
3. 正解の場合、currentStep を次のステップ（trial2）に進め、trueを返す
4. 不正解の場合、falseを返す（コンポーネント側で演出を実行）
```

## エラーハンドリング戦略

### エラーハンドリングパターン
- 入力値のバリデーションは Zod を使用（空文字チェック等）。
- 不正なステップ遷移の試みは無視。

## テスト戦略

### ユニットテスト (Vitest)
- `quiz-store` の各アクションの正常系（正解時）および異常系（不正解時）の挙動確認。
- ステップ遷移が正しい順序で行われるかの検証。

## 依存ライブラリ

```json
{
  "dependencies": {
    "zustand": "^4.5.2",
    "crypto-js": "^4.2.0"
  },
  "devDependencies": {
    "@types/crypto-js": "^4.2.2"
  }
}
```

## ディレクトリ構造

```
src/
  lib/
    store/
      quiz-store.ts
    constants/
      quiz-data.ts (正解ハッシュ、最終メッセージ等)
    utils/
      crypto.ts (ハッシュ化ユーティリティ)
```

## 実装の順序

1. ユーティリティ（ハッシュ化、デコード）の実装
2. クイズデータ（正解ハッシュ等）の定義
3. Zustand ストアの実装
4. ユニットテストの作成と実行

## セキュリティ考慮事項

- 正解は平文ではなく SHA-256 ハッシュで `quiz-data.ts` に記述する。
- 最終 URL は Base64 で難読化する。

## 将来の拡張性

- クイズの問題数が増えても、`quiz-data.ts` の追加と `QuizState` の型定義拡張で対応可能。
