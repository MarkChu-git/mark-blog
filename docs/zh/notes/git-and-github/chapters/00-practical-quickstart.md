---
title: 新手快学版——先把 Git 和 GitHub 用起来
tags:
  - git
  - github
  - quickstart
  - beginner
---

# 第零章：新手快学版——先把 Git 和 GitHub 用起来

> Language / 语言：**中文** | [English](../../en/chapters/00-practical-quickstart.md)

这一章不是完整教材的替代品，而是一个**上手加速器**。

它的任务很简单：

> **让一个几乎没系统学过 Git 的新手，在最短时间里跑通最常用的版本控制闭环。**

如果你现在的状态是下面这些之一，这章就是给你准备的：

- 知道 Git 很重要，但一直没真正敢用。
- 会几条命令，但心里不踏实。
- 每次一看到 branch、merge、rebase 就发慌。
- 写文档、写代码、做项目时，总觉得文件版本越来越乱。

这章不会先把你淹没在复杂概念里，而是先让你掌握：

- Git 到底在日常中怎么用，
- 最常见的命令什么时候敲，
- GitHub 在这个流程里负责什么，
- 文档工作流和 Git 应该怎么接起来。

---

## 一、你先只要记住 6 个判断

今天先别追求“全会”，先把这 6 句话记住：

1. **Git 不是网盘。**
2. **Git 管的是变化历史，不只是当前文件。**
3. **GitHub 不是 Git 本体，而是围绕仓库协作的平台。**
4. **新手最先学的是日常闭环，不是高级分支魔法。**
5. **一次提交，最好只记录一个清晰的小变化。**
6. **每次开工前先同步，每次收工前再推送。**

只要这 6 条站稳，你后面学什么都顺很多。

---

## 二、最小工作流：你最先会这一套就够了

把 Git 想成一个最小循环：

```text
看状态 → 加入改动 → 提交记录 → 同步远程
```

对应的最核心命令就是：

```bash
git status
git add .
git commit -m "..."
git pull
git push
```

这套命令不是“只够入门”的玩具，而是很多人每天都在反复使用的主干动作。

---

## 三、先认识你手里到底有哪几层东西

新手一混乱，通常是因为脑中没有层次。

你至少要知道有这几层：

### 1. 工作目录（working directory）

就是你现在正在修改的真实文件夹。

例如：

- `README.md`
- `chapter1.md`
- `images/figure-01.png`

### 2. 暂存区（staging area）

它不是另一个文件夹，而是“准备进入下一次提交的改动清单”。

### 3. 提交历史（commit history）

这是 Git 真正的核心资产。它记录：

- 你做了什么变化
- 什么时候做的
- 为什么做

### 4. 远程仓库（remote repository）

例如 GitHub 上的仓库。

它的作用主要是：

- 备份
- 同步
- 协作
- 发布

这 4 层先分清，你后面就不容易乱。

---

## 四、第一次上手：从零开始一遍跑通

假设你现在有一个本地文件夹，里面是你的文档项目。

### 第一步：进入项目目录

```bash
cd my-project
```

### 第二步：初始化 Git 仓库

```bash
git init
```

这一步的意思不是“上传到 GitHub”，而是告诉 Git：

> 从现在开始，这个目录里的变化我要纳入版本控制。

### 第三步：看状态

```bash
git status
```

这是你最应该养成习惯的命令。

它会告诉你：

- 哪些文件是新文件
- 哪些文件改过了
- 哪些文件已经暂存
- 现在适不适合提交

### 第四步：加入改动

```bash
git add .
```

这表示把当前目录下的改动放进暂存区。

更稳的做法是：

```bash
git add README.md
git add chapters/01-intro.md
```

这样你会更清楚自己到底提交了什么。

### 第五步：提交

```bash
git commit -m "docs: add first draft of chapter 1"
```

这一步很关键。提交不是“保存一下”，而是：

> 我把这一批变化打成一个有说明、可回看的历史节点。

### 第六步：连接远程仓库（如果有 GitHub）

```bash
git remote add origin git@github.com:yourname/yourrepo.git
```

### 第七步：首次推送

```bash
git push -u origin main
```

到这里，你就已经把一套最小闭环跑通了。

---

## 五、GitHub 在这里到底干什么

很多人一上来就把 Git 和 GitHub 混在一起。

最简单的区分方法是：

### Git 负责：

- 记录历史
- 对比改动
- 建立提交
- 分支和合并
- 回滚

### GitHub 负责：

- 远程托管
- 协作入口
- Pull Request
- Issue
- README 展示
- 在线浏览仓库

所以别再把它们混成一句话：

> **Git 是系统，GitHub 是平台。**

---

## 六、文档作者最常用的命令表

下面这些命令，是你最值得先练熟的。

| 命令 | 作用 | 什么时候用 |
| --- | --- | --- |
| `git status` | 看状态 | 几乎随时都能用 |
| `git add .` | 暂存改动 | 准备提交前 |
| `git commit -m "..."` | 提交变化 | 一个小阶段完成后 |
| `git log --oneline` | 看简短历史 | 想回看最近做了什么 |
| `git diff` | 看具体差异 | 提交前检查 |
| `git diff --staged` | 看暂存区差异 | 提交前最后确认 |
| `git show <commit>` | 看某次提交详情 | 追踪具体改动 |
| `git restore <file>` | 撤销工作区修改 | 改错了想恢复 |
| `git restore --staged <file>` | 取消暂存 | add 错了想撤回 |
| `git pull` | 拉远程最新内容 | 开工前 |
| `git push` | 把本地提交推上去 | 收工前 |
| `git branch` | 看分支 | 开始接触分支时 |
| `git checkout -b new-branch` | 新建并切换分支 | 做新功能或大改动时 |

如果你是新手，前 9 个优先级最高。

---

## 七、真正高频的日常节奏

如果你是一个人维护文档、代码或教材，最推荐的节奏其实很朴素：

### 开工前

```bash
git pull
```

先拿到最新内容。

### 写作 / 开发中

完成一个小块就提交，不要攒一大坨。

例如：

- 写完一个小节
- 调整完一批图片
- 补完一个示例
- 修完一轮错别字

### 提交

```bash
git add .
git commit -m "docs: refine markdown quickstart examples"
```

### 收工前

```bash
git push
```

这种节奏看起来平平无奇，但很稳。

---

## 八、提交信息怎么写最不痛苦

新手经常卡在这里：到底写什么提交说明？

最简单的办法是用：

```text
类型: 动作 + 对象
```

例如：

- `docs: add git quickstart chapter`
- `docs: refine markdown examples`
- `fix: correct broken image path`
- `chore: reorganize chapter folders`

如果你是文档仓库，最常用的通常就是：

- `docs`
- `fix`
- `chore`

不要写这种没信息量的提交：

- `update`
- `change`
- `123`
- `final`

提交信息是给未来的你看的。

---

## 九、最常见的几个“救命动作”

新手最怕的不是不会用，而是“改坏了怎么办”。

下面这些动作很重要。

### 1. 看看到底改了什么

```bash
git diff
```

### 2. 看历史

```bash
git log --oneline
```

### 3. 如果某个文件还没提交，想撤销本地修改

```bash
git restore filename
```

### 4. 如果已经 add 了，但还不想提交

```bash
git restore --staged filename
```

### 5. 如果刚提交完，想马上改提交信息

```bash
git commit --amend
```

这几个先会，已经能处理大量日常小事故。

---

## 十、什么时候需要分支

很多新手一听分支就紧张，其实你可以先这样理解：

> **分支就是一条独立试验线。**

什么时候值得开分支？

- 你准备做一轮大改
- 你不想影响当前稳定版本
- 你要尝试两个不同方向
- 你和别人协作开发一个功能

最基本的用法：

```bash
git checkout -b feature/quickstart
```

这表示：

- 新建一个叫 `feature/quickstart` 的分支
- 并切过去工作

对新手来说，先会新建分支就够了，不用急着学复杂合并策略。

---

## 十一、文档写作为什么尤其适合早点用 Git

很多人误以为 Git 只是程序员工具。其实文档工作非常适合用 Git，因为文档有这些特点：

- 会反复修订
- 会移动章节
- 会替换图片
- 会改措辞
- 会扩充内容
- 会需要回滚某个版本

尤其是写教材、知识库、教程时，Git 的价值非常大。

因为你不是在维护一个“最后成品文件”，而是在维护一个**持续演化的文本系统**。

---

## 十二、GitHub 上你最先该会什么

如果你刚接触 GitHub，先会下面这些就够：

### 1. 建仓库（repository）

知道仓库是项目容器，不是“单文件上传区”。

### 2. 看 README

README 是项目首页说明，不是摆设。

### 3. 推本地仓库上去

让 GitHub 成为远程托管和同步节点。

### 4. 看提交记录

知道网页端也能看到 history。

### 5. 以后再学 Pull Request

PR 很重要，但不是新手第一分钟必须学的东西。

先把本地闭环跑顺，再学平台协作，会轻松得多。

---

## 十三、新手最容易犯的 10 个错误

### 错误 1：只背命令，不理解作用

### 错误 2：很久才提交一次，改动攒成一大坨

### 错误 3：提交信息几乎没有意义

### 错误 4：开工前不先 `pull`

### 错误 5：收工前忘记 `push`

### 错误 6：不看 `status` 就乱操作

### 错误 7：把 Git 和 GitHub 混成一回事

### 错误 8：一上来就想学最复杂的 rebase / cherry-pick / reset 套路

### 错误 9：害怕分支，于是所有改动都在主线上乱做

### 错误 10：把提交当“最终版命名器”，而不是变化记录器

---

## 十四、你今天就能做的最小练习

### 练习 1：初始化一个仓库

```bash
mkdir git-practice
cd git-practice
git init
```

### 练习 2：新建一个 README

```bash
echo "# My Git Practice" > README.md
```

### 练习 3：提交第一次历史记录

```bash
git add README.md
git commit -m "docs: add initial README"
```

### 练习 4：再修改一次，再提交一次

```bash
echo "\nThis is my first repo." >> README.md
git add README.md
git commit -m "docs: add repo description"
```

### 练习 5：看历史

```bash
git log --oneline
```

如果你把这 5 步跑完，Git 对你来说就已经不是“纯概念”了。

---

## 十五、一个非常实用的个人文档工作流

如果你是写 Markdown 文档、教材、教程、知识库的人，可以直接用这套：

### 本地结构

```text
project/
├── README.md
├── chapters/
├── images/
└── references/
```

### 每天工作节奏

1. `git pull`
2. 写内容 / 改图 / 调结构
3. `git status`
4. `git diff`
5. `git add .`
6. `git commit -m "docs: ..."`
7. `git push`

这套真的足够你稳定工作很久。

---

## 十六、本章小结

这章你最该先掌握的是：

- Git 管的是变化，不只是文件。
- GitHub 是协作平台，不是 Git 本体。
- 新手先跑通日常闭环，不要急着上复杂技巧。
- 最重要的命令是：
  - `git status`
  - `git add .`
  - `git commit -m "..."`
  - `git pull`
  - `git push`
- 每次改一小块，就提交一小块。

你只要把这套最小工作流练顺，后面学分支、合并、冲突、回滚时就不会那么痛苦，因为你已经有了骨架。

---

## 下一步建议

读完这章后，建议继续这样走：

1. 回去读第一章，补齐“版本控制为什么存在”的心智模型。
2. 然后进入后续章节，系统学习工作区、暂存区、提交历史。
3. 再逐步进入分支、远程仓库、同步、协作。
4. 最后把它真正接到你的文档仓库和项目工作流里。
