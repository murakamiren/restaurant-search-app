# ちかれす

## アプリ名

ちかれす

### コンセプト

出先で近くのお店を見つける

#### こだわったポイント

- 近くのお店を見つけることにフォーカスし、検索フォームを複雑化せず簡単に検索できるようにしました
- 一覧画面で、近くのお店を見つける為に必要な情報だけを載せ、簡単に素早くお店を見つけれるようにしました
- 現在地からの距離を表示することで、実際にどのぐらい近いかすぐ分かるようにしました
- とにかくいきたいお店を見つけることにフォーカスするため、予約や更に詳細を知りたい場合はホットペッパーの詳細サイトに飛ばせるようにしました

### アプリ URL

https://chikares.vercel.app/

### 該当プロジェクトのリポジトリ URL

https://github.com/murakamiren/restaurant-search-app

## 開発環境

### 開発環境

vscode 1.73.0 (Universal)

### 開発言語

TypeScript 4.8.4

#### 開発に使用したフレームワーク/ライブラリ

##### フレームワーク

- Next.js 13.0.2

##### ライブラリ

- React.js 18.2.0
- @chakra-ui/react 2.3.7
- axios 1.1.3
- swr 1.3.0
- jotai 1.9.1
- react-hook-form 7.39.1

##### テスト

- @playwright/test 1.27.1

##### リンター/フォーマッター

- eslint 8.26.0
- prettier 2.7.1
- husky 8.0.0
- lint-staged 13.0.3

## 動作対象端末・OS

## 動作対象 Web

- Google Chrome 107
- Mozilla Firefox 106
- Apple Safari 16

## 動作対象端末

- iPhone 12
- iPhone 13
- Pixel 5

### 動作対象 OS

- iOS 16.0.3
- Android 12
- macOS Big Sur ^11.7.1

## アプリケーション機能

### 機能一覧

- レストラン検索：ホットペッパーグルメサーチ API を使用し、店舗名、キーワード、距離(入力しなくても良い)で現在地周辺の飲食店を検索する
- ソート機能：検索後、おすすめ順と距離順にソート可能
- 現在からの距離：現在地からレストランの距離を表示
- レストラン情報取得：ホットペッパーグルメサーチ API を使用し、検索結果からレストランの詳細情報を取得する
- 更に詳細/予約：レストラン詳細から、ホットペッパーグルメのサイトに飛ぶ

### 画面一覧

- 検索/一覧画面：店舗名、キーワード、距離(入力しなくても良い)で検索し、結果一覧をフォームより下に表示
- 店舗詳細：店舗の詳細を表示する

### 使用している API

ホットペッパーグルメサーチ API

## 開発期間

6 日間

## アドバイスして欲しいポイント
