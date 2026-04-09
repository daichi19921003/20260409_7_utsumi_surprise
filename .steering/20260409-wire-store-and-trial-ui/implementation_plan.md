# 設計書 - ストアの連携と試練画面のベース実装

## アーキテクチャ概要

`useQuizStore` の `currentStep` に基づいて、メインページ (`src/app/page.tsx`) で表示するコンポーネントを切り替える。
Framer Motion を使用して、ステップ間の遷移アニメーションを実装する。

## コンポーネント設計

### 1. Page (`src/app/page.tsx`)
**責務**:
- `currentStep` の監視。
- ステップに応じた UI（Gateway または Trial1..3 または Reveal）の出し分け。

### 2. Trial Layout (`src/components/trial/TrialLayout.tsx`)
**責務**:
- 全ての試練で共通の背景、ヘッダー、進行状況表示。
- フェードイン・フェードアウトのアニメーション。

### 3. Trial Stages (`src/components/trial/TrialStage1.tsx` 等)
**責務**:
- 各試練の固有問題の表示。
- 入力フォームと提出ボタン。

## 画面遷移フロー

```mermaid
graph TD
    Gateway[GatewayButton Click] --> Action[store.setStep('trial1')]
    Action --> PageRender[Page re-renders based on currentStep]
    PageRender --> Trial1[Show TrialStage1]
```

## 実装の順序

1. `src/app/page.tsx` の修正（ストア連携）
2. `src/components/trial/TrialLayout.tsx` の作成
3. `src/components/trial/TrialStage1.tsx` の作成（プレースホルダ）
4. 動作確認
