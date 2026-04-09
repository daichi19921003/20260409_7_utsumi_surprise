# タスクリスト - クイズの3択化と第3の試練の回答変更

## 🚨 タスク完全完了の原則

**このファイルの全タスクが完了するまで作業を継続すること**

---

## フェーズ1: データの更新

- [x] `src/lib/constants/quiz-data.ts` の修正
  - [x] 各試練に `options` を追加
  - [x] `trial3` のハッシュ値を「daichi」のものに更新

## フェーズ2: コンポーネントの再構築

- [x] `src/components/trial/TrialStage.tsx` の作成
- [x] 既存の個別試練コンポーネントの削除
  - [x] `src/components/trial/TrialStage1.tsx`
  - [x] `src/components/trial/TrialStage2.tsx`
  - [x] `src/components/trial/TrialStage3.tsx`

## フェーズ3: ページの統合とテスト

- [x] `src/app/page.tsx` の修正
- [x] `src/lib/store/quiz-store.test.ts` の修正（期待値の変更）
- [x] テストの実行 `npm test`
- [x] 動作確認（ブラウザ）

---

## 実装後の振り返り

### 実装完了日
{YYYY-MM-DD}

### 計画と実績の差分

**計画と異なった点**:
- {なし}

**新たに必要になったタスク**:
- {なし}

### 学んだこと

**技術的な学び**:
- {共通コンポーネント化による保守性の向上}
