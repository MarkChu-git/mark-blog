const userAgent = process.env.npm_config_user_agent ?? ""
const execPath = (process.env.npm_execpath ?? "").replaceAll("\\", "/")

const isBun = /\bbun\//.test(userAgent)
const isForeignAgent = /(?:^|\s)(?:npm|yarn|pnpm)\/\d/.test(userAgent)
const isForeignBin = /\/(?:npm|npx|yarn|pnpm|cnpm)(?:\.cmd)?$/i.test(execPath)

if ((isForeignAgent || isForeignBin) && !isBun) {
  console.error("Iron law: this repo is Bun-only. npm / yarn / pnpm are forbidden.")
  console.error("Install Bun: https://bun.sh")
  console.error("Then run: bun install")
  process.exit(1)
}
