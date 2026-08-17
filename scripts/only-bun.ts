const userAgent = process.env.npm_config_user_agent ?? ""

if (userAgent.length > 0 && !userAgent.includes("bun")) {
  console.error("This repo uses Bun. npm / yarn / pnpm are not welcome here.")
  console.error("Install Bun: https://bun.sh")
  console.error("Then run: bun install")
  process.exit(1)
}
