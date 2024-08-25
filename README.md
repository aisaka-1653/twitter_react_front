## About
[backend](https://github.com/aisaka-1653/twitter_rails_api)と同時に使用する

## Setup
> [!WARNING]
> バックエンド側で既に外部ネットワーク(external)を作成している場合は､手順1をスキップしてください

1. バックエンドコンテナとの通信用に外部ネットワークを作成する  
```bash
$ docker network create external
```

2. リポジトリをクローンする
```bash
$ git clone https://github.com/aisaka-1653/twitter_react_front.git
$ cd twitter_react_front
```

3. docker-composeをビルドする
```bash
$ docker-compose build
```

4. packageをインストールする
```bash
$ docker-compose run --rm front npm install
```

5. 開発サーバーを起動する
```bash
$ docker-compose up
```
