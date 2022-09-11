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
