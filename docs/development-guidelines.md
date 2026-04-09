# 開発ガイドライン (Development Guidelines)

## コーディング規約

### 命名規則

#### Reactコンポーネント
- **PascalCase**: `GatewaySection.tsx`, `TrialForm.tsx`
- **演出用コンポーネント**: `Effect[Name].tsx` (例: `EffectBackground.tsx`)

#### 変数・関数
- **camelCase**: `currentStep`, `submitAnswer`
- **イベントハンドラ**: `handle[Action]` (例: `handleEnterClick`)

#### 状態管理 (Zustand)
- **Store作成**: `useQuizStore`
- **アクション**: `set[Property]` (例: `setStep`)

### スタイリング (Tailwind CSS)
- **基本方針**: 基本的にインラインクラスを使用。複雑なアニメーションはFramer Motionと組み合わせて定義。
- **カラーパレット**: 秘密結社テーマに基づき、`zinc-950`（背景）, `amber-500`（強調/黄金）, `rose-900`（不気味な赤）を主軸とする。

### アニメーション (Framer Motion)
- **一貫性**: ページ遷移や要素の表示には、共通の `transition` オブジェクトを使用し、統一感を持たせる。
- **パフォーマンス**: 大量のアニメーションが同時に動く場合は、`AnimatePresence` を適切に使い、不要なDOM要素を削除する。

## Git運用ルール

### ブランチ戦略 (Git Flow 簡易版)
- `main`: リリース用
- `feature/[YYYYMMDD]-[name]`: 機能開発（例: `feature/20260409-init-design`）

### コミットメッセージ規約
[Conventional Commits](https://www.conventionalcommits.org/) に準拠。
- `feat`: 新機能実装（コンポーネント追加、ロジック実装）
- `style`: デザイン調整、アニメーション微調整
- `docs`: ドキュメント更新

## テスト戦略

### ユニットテスト
- **対象**: クイズの正誤判定ロジック、ユーティリティ関数。
- **ツール**: Vitest

### 視覚的確認 (Manual QA)
- 秘密結社らしい「雰囲気」が出ているか、アニメーションのタイミングが不自然でないかを手動で入念に確認する。

## サプライズ情報の保護

### 難読化
- クイズの正解や最終メッセージは、以下の方法で難読化する：
  1. Base64エンコード
  2. 単純なROT13等の換字
  3. ソースコード内での分割配置
- **重要**: 開発中に `console.log` 等で秘密情報を出力したままプッシュしないこと。

## 開発環境
- **Framework**: Next.js 14 (App Router)
- **Node**: v20+
- **Package Manager**: npm
