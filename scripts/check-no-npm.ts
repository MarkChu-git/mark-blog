import { existsSync, readdirSync, statSync } from "node:fs"

const bannedFiles = [
  "package-lock.json",
  "npm-shrinkwrap.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  ".npmrc",
]

const commandScanTargets = [
  "package.json",
  "vercel.json",
  "netlify.toml",
  "bunfig.toml",
  ...listHookFiles(),
]

function listHookFiles(): string[] {
  if (!existsSync(".githooks")) {
    return []
  }

  return readdirSync(".githooks")
    .map((name) => `.githooks/${name}`)
    .filter((path) => statSync(path).isFile())
}

const forbiddenCommand = /\b(?:npm\s+(?:run|install|ci|exec)|npm\s+i\b|npx\s+)/

function fail(message: string): never {
  console.error(`Iron law: npm is forbidden. ${message}`)
  process.exit(1)
}

for (const file of bannedFiles) {
  if (existsSync(file)) {
    fail(`Remove ${file}. This repo uses bun.lock only.`)
  }
}

for (const file of commandScanTargets) {
  if (!existsSync(file)) {
    continue
  }

  const text = await Bun.file(file).text()
  const match = forbiddenCommand.exec(text)
  if (match) {
    fail(`${file} contains a runnable npm/npx command: "${match[0].trim()}". Use bun / bunx.`)
  }
}

const staged = Bun.spawnSync(["git", "diff", "--cached", "--name-only", "--", ...bannedFiles], {
  stdout: "pipe",
  stderr: "pipe",
})

if (staged.exitCode === 0) {
  const names = staged.stdout.toString().trim()
  if (names.length > 0) {
    fail(`Staged forbidden lock/config files:\n${names}`)
  }
}
