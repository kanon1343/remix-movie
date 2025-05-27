# remix-twitter

プロジェクト概要


## 環境構築

### 必要なツール

- Deno: JavaScript と TypeScript のランタイム
- pnpm: 高速でディスク効率の良いパッケージマネージャー

### インストール手順

#### Deno

Linux/macOS:

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Windows:

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

インストール後、PATH を設定:

```bash
echo 'export DENO_INSTALL="$HOME/.deno"' >> ~/.bashrc
echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### pnpm

Node.js がすでにインストールされている場合:

```bash
npm install -g pnpm
```

### 使用技術と設定:

ランタイム: Deno

パッケージマネージャー: pnpm

コード品質: Biome

スタイリング: Tailwind CSS

API: TMDB

データベース: PostgreSQL + Prisma

### データベース設定

#### 必要なツール

- Docker: PostgreSQL コンテナを実行するために必要
- Node.js: Prisma CLI を実行するために必要

#### セットアップ手順

1. 環境変数の設定:

```bash
# .env.example を .env にコピー
cp .env.example .env
```

2. Docker で PostgreSQL を起動:

```bash
# PostgreSQL コンテナを起動
docker-compose up -d
```

3. Prisma セットアップ:

```bash
# Prisma クライアントを生成
pnpm prisma:generate

# データベースマイグレーションを実行
pnpm prisma:migrate

# テストデータを投入
pnpm prisma:seed
```

#### データモデル

このアプリケーションは以下のデータモデルを使用しています:

- `User`: ユーザー情報 (id, username, email, password, name, bio, avatar など)
- `Tweet`: ツイート情報 (id, content, userId など)
- `Like`: いいね情報 (userId, tweetId など)
- `Follow`: フォロー関係 (followerId, followingId など)

詳細なスキーマは `prisma/schema.prisma` ファイルを参照してください。
