#!/bin/sh
# Inspect the parent client's user-agent before any bun process can rewrite it.
# Bun reports: bun/<ver> npm/? node-v…
# npm reports: npm/<ver> node/v…

ua="${npm_config_user_agent:-}"

case "$ua" in
  bun/*)
    exit 0
    ;;
  *)
    echo "Iron law: this repo is Bun-only. npm / yarn / pnpm are forbidden." >&2
    echo "Install Bun: https://bun.sh" >&2
    echo "Then run: bun install" >&2
    exit 1
    ;;
esac
