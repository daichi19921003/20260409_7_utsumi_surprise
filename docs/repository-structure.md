# リポジトリ構造定義書 (Repository Structure Document)

## プロジェクト構造

```text
/
├── src/                    # ソースコード
│   ├── app/                # Next.js App Router (Pages, Layouts)
│   ├── components/         # Reactコンポーネント
│   │   ├── ui/             # shadcn/uiコンポーネント
│   │   ├── effects/        # アニメーション演出用コンポーネント (煙、パーティクル等)
│   │   └── stages/         # クイズの各段階（Trial）に対応するコンポーネント
│   ├── hooks/              # カスタムフック
│   ├── lib/                # ユーティリティ、定数、外部ライブラリ設定
│   │   ├── constants/      # プロダクト全体で使う定数（問題データ等）
│   │   └── utils/          # 暗号化、フォーマット等の小規模ユーティリティ
│   ├── stores/             # Zustandによる状態管理
│   └── types/              # TypeScript型定義
├── public/                 # 静的資産（ロゴ、サウンド等）
├── docs/                   # プロジェクトドキュメント
├── tests/                  # テストコード
├── .steering/              # ステアリングファイル（タスク管理）
└── config/                 # ツール設定ファイル
```

## ディレクトリ詳細

### src/app/ (Next.js Pages)
**役割**: ルーティングと各画面のレイアウト定義。
**命名規則**: Next.js App Routerの慣習に従う (page.tsx, layout.tsx)。

### src/components/stages/ (試練の場)
**役割**: クイズの各ステップ（Gateway, Trial 1-3, Reveal）ごとの独立したUI。
**命名規則**: `[StageName]Stage.tsx` (例: `Trial1Stage.tsx`)。

### src/components/effects/ (演出用)
**役割**: 秘密結社らしさを演出するための再利用可能な視覚効果コンポーネント。
**命名規則**: `[EffectName].tsx` (例: `MysticSmoke.tsx`)。

### src/stores/ (状態管理)
**役割**: クイズの進捗状況、正誤判定、アニメーションのフラグを管理。
**配置ファイル**: `useQuizStore.ts`。

### src/lib/constants/ (問題データ)
**役割**: クイズの問題内容、ハッシュ化された正解、隠蔽されたRevealメッセージの保持。

## ファイル配置規則

| ファイル種別 | 配置先 | 命名規則 |
|------------|--------|---------|
| コンポーネント | src/components/ | PascalCase.tsx |
| カスタムフック | src/hooks/ | useCamelCase.ts |
| 状態管理 | src/stores/ | useCamelCase.ts |
| 型定義 | src/types/ | kebab-case.ts |
| 定数 | src/lib/constants/ | camelCase.ts |

## 命名規則

### ディレクトリ名
- レイヤーディレクトリ: 複数形 (e.g., `components`, `hooks`)。
- 分類ディレクトリ: kebab-case (e.g., `trial-stages`)。

### ファイル名
- Reactコンポーネント: `PascalCase.tsx` (e.g., `SecretButton.tsx`)。
- 関数・フック: `camelCase.ts` (e.g., `useQuizState.ts`)。

## 依存関係のルール
- Components → Stores (OK)
- Components → Lib (OK)
- Stores → Lib (OK)
- Lib → Components (❌)
- Stages Components → Effect Components (OK)

## テストディレクトリ構造
```text
tests/
├── unit/
│   └── stores/             # QuizStoreのロジックテスト
│   └── lib/                # ユーティリティ関数のテスト
└── e2e/
    └── surprise-flow.test.ts # GatewayからRevealまでの疎通確認
```
