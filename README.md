# remix-movie

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
