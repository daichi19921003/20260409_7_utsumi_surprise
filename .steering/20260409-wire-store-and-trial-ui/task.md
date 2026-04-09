# タスクリスト - ストアの連携と試練画面のベース実装

## 🚨 タスク完全完了の原則

**このファイルの全タスクが完了するまで作業を継続すること**

---

## フェーズ1: ページとストアの連携

- [x] `src/app/page.tsx` の修正
  - [x] `useQuizStore` をインポート
  - [x] `handleStartTrials` で `setStep('trial1')` を実行するように修正
  - [x] `currentStep` に応じた条件付きレンダリングの実装

## フェーズ2: 試練画面のベースコンポーネント

- [x] `src/components/trial/TrialLayout.tsx` の作成
- [x] `src/components/trial/TrialStage1.tsx` の作成（一旦簡単な入力フォームのみ）

## フェーズ3: 動作確認と修正

- [x] Gateway のボタンをクリックして試練1が表示されるか確認
- [x] タイポやパスの修正

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
- {Framer MotionとZustandを組み合わせたページ遷移}
