# Next.js 設計・環境設定

## Next.js の環境構築

### Storybook

- コンポーネントを確認できる

### CSS in JS ライブラリの実装

- For Example

  - styled-components(``の中に css 書き込んでいけるやつ)
  - styled-jsx(Vercel が開発してるやつ)
  - tailwind-css(いつもの className のところに指定するやつ)
  - emotion(ちなみにとても人気で質の高いホームページに使われているから今一番使いたい)
  - xstyled(props ベース)
  - Theme UI(テーマを機能の中心に備えたやつ)

- どれを使うのかの三箇条
  - 書きやすさ
  - 開発の活発さ
  - 捨てやすさ(別のライブラリや自前実装などへの移行のしやすさ)

### React Hook Form(Form)

- useForm という Hook が使えるようになる
- For Example

### SWR(REST API)

- API が叩ける React のライブラリ

### React Content Loader (Loading)

- Loading が作れる

### Material Icon(Icon)

- アイコン用でサイズや色はコンポーネントを作るときに span で props から指定して変更できるようにする

### Jest(testing)

- test 用のライブラリ

### data-testid

- getByElementId みたいなやつで取ってくる時に class や id は変更される可能性があるから

### JSONServer(backend)

- backend
- REST API のダミーエンドポイントを作成するためのツール

# アプリケーション開発・実装

1. APi クライアントの実装
2. コンポーネント実装の準備
3. Atomic Design によるコンポーネント設計
4. Atoms の実装
5. Molecules の実装
6. Organisms の実装
7. Template の実装
8. ページの設計と実装
9. コンポーネントのユニットテスト

## API クライアントの実装

- src/util 以下の fetch をラップして使いやすくする fetcher 関数を作成
- API クライアントを、src/services/auth 以下に、関数ごとにファイルを分割して実装
- アプリケーションで使用されるデータの型を定義

## コンポーネント実装準備

- レスポンシブデザイン対応を簡潔な記述で実現する
- Theme の機能を使いやすくする
- これらの機能を型の機能を活かして実装する

## Atomic Design によるコンポーネント設計の実施

- props やコンテキストを活用し、ビジネスロジックの実装を避け、再利用可能にする
- 外部依存性を極力排除し、外部から依存性を注入できるようにする
- Atomic Design に従ってコンポーネントを分割
- 個々のコンポーネントは Storybook で確認
- ユニットテストの追加

1. デザインをもとに、Atomic Design に沿ったコンポーネントの分割
2. Atoms の実装
3. Molecules の実装
4. Organisms の実装
5. Template の実装
6. ページ(Pages)の実装
7. API クライアント等の外部依存関係の実装
