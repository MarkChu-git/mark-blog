import { chmodSync, existsSync } from "node:fs"

if (!existsSync(".git")) {
  process.exit(0)
}

if (existsSync(".githooks/pre-commit")) {
  chmodSync(".githooks/pre-commit", 0o755)
}

const result = Bun.spawnSync(["git", "config", "core.hooksPath", ".githooks"], {
  stdout: "ignore",
  stderr: "pipe",
})

if (result.exitCode !== 0) {
  const detail = result.stderr.toString().trim()
  console.error("Failed to set core.hooksPath to .githooks.")
  if (detail.length > 0) {
    console.error(detail)
  }
  process.exit(1)
}
