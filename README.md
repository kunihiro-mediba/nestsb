# NestJS GraphQL TypeScript プロジェクトサンプル

## 使用法

- Schema 定義変更

  1. [schema.graphql](./schema.graphql) の修正
  2. `npm run codegen`

- ウォッチ実行

  - `npm run dev`

- プロダクションビルド

  - `npm run build`

- ビルド生成物の実行
  - `npm run start`

## 公式サンプルプロジェクトとの違い

- 不要な依存パッケージの排除
- nest コマンド(@nestjs/cli)を使わない
- tsconfig.json の strict オプション無効化しない
- src ディレクトリ配下を rootDir に設定
