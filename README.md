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

## Install

### yarn

```
yarn install
```

### Jest

```
yarn create jest@latest
```

### ESLint

```
yarn add -D eslint
```

### Storybook

```
npx storybook@latest init
yarn storybook
open http://localhost:6006/
```
