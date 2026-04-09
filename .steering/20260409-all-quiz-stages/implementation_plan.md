# 設計書 - 全試練ステージと最終啓示画面の実装

## アーキテクチャ概要

既存の `TrialLayout` と `TrialStage1` のパターンを踏襲し、残りの試練（第2、第3）と最終的な報酬を表示する啓示画面を実装する。
`src/app/page.tsx` で全てのステップをコントロールし、シームレスな体験を提供する。

## コンポーネント設計

### 1. Trial Stage 2 & 3 (`src/components/trial/TrialStage2.tsx`, `TrialStage3.tsx`)
**責務**:
- `QUIZ_CONTENT` からそれぞれの試練の内容を表示。
- ストアの `submitAnswer` を呼び出し、正解なら次のステップへ遷移。

### 2. Reveal Stage (`src/components/trial/Reveal.tsx`)
**責務**:
- 全問正解後の最終メッセージ（`REVEAL_MESSAGE`）の表示。
- 難読化された `REWARD_URL_ENCODED` をデコードし、Google Meet へのリンクボタンを表示。
- 祝福の演出（特別なアニメーション等）。

## データフロー

### 最終的な報酬の提示
```
1. TrialStage3 で正解
2. currentStep が 'reveal' に更新、isAuthorized が true になる
3. Page が Reveal コンポーネントを表示
4. Reveal コンポーネント内で decodeBase64(REWARD_URL_ENCODED) が実行される
5. ユーザーが「聖なる門へ入る」ボタンから Google Meet へ遷移
```

## 実装の順序

1. `TrialStage2.tsx` の作成
2. `TrialStage3.tsx` の作成
3. `Reveal.tsx` の作成
4. `src/app/page.tsx` の更新（全コンポーネントの統合）
5. 最終的な動作確認（通しテスト）
