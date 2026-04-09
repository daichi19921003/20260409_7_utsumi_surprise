# 設計書 - クイズの3択化と第3の試練の回答変更

## アーキテクチャ概要

各試練の回答形式を自由入力から3択選択（ボタン選択）に変更する。
コードの重複を減らすため、個別の試練コンポーネントを廃止し、共通の `TrialStage` コンポーネントに統合する。
第3の試練の正解を「DAICHI」に更新する。

## コンポーネント設計

### 1. Trial Stage (`src/components/trial/TrialStage.tsx`)
**責務**:
- 特定のステップ（trial1..3）を受け取り、その試練の内容と選択肢を表示。
- 選択肢（3つのボタン）をクリックした際に、ストアの `submitAnswer` を呼び出す。

## データモデル変更

### Quiz Data (`src/lib/constants/quiz-data.ts`)
```typescript
export const QUIZ_CONTENT = {
  trial1: {
    title: '...',
    question: '...',
    options: ['選択肢A', '選択肢B', '選択肢C']
  },
  // ...
};
```

## 実装の順序

1. `quiz-data.ts` の更新（選択肢の追加とハッシュ変更）
2. `TrialStage.tsx` の新規作成と既存個別コンポーネントの削除
3. `src/app/page.tsx` の更新（新コンポーネントへの差し替え）
4. ユニットテストの修正と実行
