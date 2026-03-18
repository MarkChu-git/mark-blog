# Git 与 GitHub 教程资料地图

这份资料地图用于记录《Git 与 GitHub》教材编写时所使用的核心材料来源。目标不是简单堆链接，而是区分每类资料在教学写作中的角色：哪些负责建立版本控制概念，哪些负责解释 Git 的内部工作模型，哪些负责说明 GitHub 的平台协作行为。

## 一、Git 核心概念与权威教材资料

### 1. Pro Git（第二版）
- 链接：<https://git-scm.com/book/en/v2>
- 角色：Git 教材主干资料。
- 主要用于回答的问题：版本控制是什么、Git 为什么出现、Git 的工作方式、提交、分支、远程仓库与协作模型如何系统建立。

### 2. Git Glossary
- 链接：<https://git-scm.com/docs/gitglossary>
- 角色：术语精确定义资料。
- 主要用于回答的问题：branch、HEAD、working tree、index、bare repository 等关键术语的严格含义是什么。

### 3. Git 官方文档（git-scm docs）
- 链接：<https://git-scm.com/docs>
- 角色：命令行为与细节资料。
- 主要用于回答的问题：当正文进入命令级讲解时，各命令的正式语义、选项与边界行为如何核对。

## 二、GitHub 平台行为资料

### 4. GitHub Docs — Get started
- 链接：<https://docs.github.com/en/get-started>
- 角色：GitHub 平台入门资料。
- 主要用于回答的问题：GitHub 的基本对象、仓库使用方式、平台导航与新手入口是什么。

### 5. GitHub Docs — Repositories / Pull Requests / Issues / Forks
- 主入口：<https://docs.github.com/en/repositories>
- 主入口：<https://docs.github.com/en/pull-requests>
- 主入口：<https://docs.github.com/en/issues>
- 主入口：<https://docs.github.com/en/get-started/quickstart/fork-a-repo>
- 角色：平台协作行为资料。
- 主要用于回答的问题：仓库、PR、Issue、Fork 在 GitHub 中分别承担什么角色，它们和 Git 命令行中的对象如何对应。

## 三、编写原则

本册后续写作将遵循以下资料使用原则。

第一，凡是涉及版本控制的基本思想、Git 的工作模型与术语定义，优先回到 Pro Git 与 Git 官方资料，而不是只凭经验解释。

第二，凡是涉及 GitHub 平台上的功能、页面对象与协作路径，优先回到 GitHub Docs，而不是把平台行为和 Git 本体混为一谈。

第三，凡是涉及容易混淆的概念，例如 commit、branch、HEAD、remote、fork、pull request，要尽量先给出严格定义，再给出通俗解释。

第四，教材正文不做资料堆砌，而是把这些资料转化成适合中文读者逐步吸收的连续叙述。
