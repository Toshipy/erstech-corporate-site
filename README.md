## Git

### Commit Message Prefix

| Prefix   | 説明                 |
| -------- | -------------------- |
| feat     | 機能追加             |
| refactor | リファクタリング     |
| fix      | バグ修正             |
| chore    | ライブラリ追加等     |
| docs     | ドキュメントのみ変更 |
| style    | スタイルのみ変更     |
| test     | テストの追加         |

### Branch Model

| ブランチ名 | 説明                                               |
| ---------- | -------------------------------------------------- |
| main       | 起点となるブランチ。マージしたら本番環境へ反映する |
| develop    | マージしたらステージング環境へ反映する             |
| feat/XXX   | 機能開発用ブランチ                                 |
| ref/XXX    | リファクタリング用ブランチ                         |
| fix/XXX    | バグ修正用ブランチ                                 |
| hotfix/XXX | 本番環境で発生している緊急バグ修正用ブランチ       |

## Directory

```
├── public/                     # 静的ファイル（画像、フォントなど）
├── src/
│   ├── app/                    # Next.js 13のappディレクトリベースのルーティング
│   │   ├── layout.tsx          # 全ページ共通のレイアウト
│   │   ├── page.tsx            # ルートページ (`/`)
│   │   ├── about/
│   │   │   └── page.tsx        # Aboutページ (`/about`)
│   │   ├── blog/
│   │   │   └── [slug]/         # 動的ルーティングのブログページ
│   │   │       └── page.tsx    # 個別のブログ記事 (`/blog/[slug]`)
│   │   └── components/         # appディレクトリで使うコンポーネント
│   │       └── Header.tsx      # ヘッダコンポーネント
│   ├── components/             # アプリ全体で再利用される汎用コンポーネント
│   │   ├── Button.tsx          # ボタンコンポーネント
│   │   └── Footer.tsx          # フッターコンポーネント
│   ├── constants/              # アプリ全体で使用する定数や設定
│   │   └── config.ts           # 環境設定や定数
│   ├── domain/                 # ドメイン層のロジック
│   │   ├── infrastructure/     # 外部APIとの連携
│   │   ├── services/           # ビジネスロジックやデータ加工
│   │   └── entities/           # 型定義やデータモデル
│   ├── pages/                  # Next.js 13以前のページベースのルーティング
│   ├── styles/                 # グローバルなスタイルシート
│   │   └── globals.css         # グローバルスタイル
│   └── utils/                  # ユーティリティ関数やフック
├── .env.local                  # 環境変数
├── next.config.js              # Next.jsの設定
└── tsconfig.json               # TypeScriptの設定

```

## Install

### yarn

```
yarn install
yarn add -D @types/react
```

### Jest

```
yarn create jest@latest
```

### ESLint

```
yarn add -D eslint
```

### Prettier

```
yarn add -D prettier
yarn add -D prettier-plugin-tailwindcss
```

### Storybook

```
npx storybook@latest init
yarn storybook
open http://localhost:6006/
```

### Vercel

```
yarn dlx vercel

```

### shadcn ui libraries

- Navigation Menu:
  https://ui.shadcn.com/docs/components/navigation-menu

```
npx shadcn@latest add navigation-menu
```

- Scroll Area:
  https://ui.shadcn.com/docs/components/scroll-area

```
npx shadcn@latest add scroll-area
```

- Dark mode: https://ui.shadcn.com/docs/dark-mode/next

```
yarn add next-themes
```

- Dropdown menu: https://ui.shadcn.com/docs/components/dropdown-menu

```
npx shadcn@latest add dropdown-menu
```

- Button: https://ui.shadcn.com/docs/components/button

```
npx shadcn@latest add button
```

- Accordion: https://ui.shadcn.com/docs/components/accordion

```
npx shadcn@latest add accordion
```

- Form

```
npx shadcn@latest add form
```

- Zod

```
yarn add zod
```

- Input: https://ui.shadcn.com/docs/components/input

```
npx shadcn@latest add input
```

- Toast: https://ui.shadcn.com/docs/components/toast

```
npx shadcn@latest add toast
```

- Select: https://ui.shadcn.com/docs/components/select

```
npx shadcn@latest add select
```

- Textarea: https://ui.shadcn.com/docs/components/textarea

```
npx shadcn@latest add textarea
```

### Icons

- Remixicon: https://classic.yarnpkg.com/en/package/remixicon

```
yarn add remixicon
```

- Simple icon: https://github.com/icons-pack/react-simple-icons

```
yarn add @icons-pack/react-simple-icons
```
