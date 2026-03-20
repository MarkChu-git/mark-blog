# 第三章：回看与回退——如何查看历史、比较差异并安全撤销



## 本章你会学到什么

- 用 `git log` 查看提交历史，找到你需要的那次提交
- 用 `git diff` 比较不同版本之间的差异
- 用 `git restore`、`git reset`、`git revert` 安全地撤销错误
- 理解三种撤销方式的本质区别和使用场景

## 当代码突然出问题

代码昨天还能跑，今天就崩了。你盯着屏幕上的错误信息，第一反应是："我到底改了什么？"

没有 Git，你只能凭记忆猜测，或者一行行对比代码。有了 Git，你可以看到每一次修改的完整历史，比较任意两个版本的差异，甚至撤销错误的修改。

这一章教你如何使用这些能力。我们会从查看历史开始，然后学习如何比较差异，最后——这可能是最重要的部分——学习如何安全地撤销错误。"安全地"这个词很关键，因为 Git 提供了好几种撤销方式，有些很温和，有些很激进。选错了方式，你可能会丢失工作成果。

## 查看提交历史

运行 `git log`，Git 会显示每一次提交的完整信息：

```bash
$ git log
commit 61b6377a8c9f2e4d3b1a5c6e7f8g9h0i1j2k3l4m
Author: Mark <mark@example.com>
Date:   Sun Mar 16 23:48:15 2026 +0800

    docs: add git chapter on working tree staging and first commit

commit 4d64e45b7c8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l
Author: Mark <mark@example.com>
Date:   Sun Mar 16 20:30:42 2026 +0800

    docs: add beginner fast-track chapters and expand EN i18n content
```

每个提交包含四部分：提交 ID（那串40位的 SHA-1 哈希值）、作者、日期、提交信息。提交 ID 用来唯一标识这次提交，通常前7位就够用了。默认情况下，`git log` 按时间倒序显示——最新的提交在最上面。

### 简化输出

`--oneline` 把每个提交压缩成一行：

```bash
$ git log --oneline
61b6377 docs: add git chapter on working tree
4d64e45 docs: add beginner fast-track chapters
96ff8b5 Humanize textbook content
e737406 Humanize Git-and-GitHub volume
f2ca9ca Start Git and GitHub textbook volume
```

现在清爽多了。每行一个提交，ID + 提交信息。

如果项目有分支（第四章会详细讲），`--graph` 会画出分支结构：

```bash
$ git log --oneline --graph --all
* 61b6377 docs: add git chapter
* 4d64e45 docs: add beginner chapters
*   96ff8b5 Merge branch 'feature'
|\
| * e737406 Add new feature
* | f2ca9ca Fix bug
|/
* a1b2c3d Initial commit
```

这些星号和线条展示了代码如何从主线分叉、又合并回来。`--all` 显示所有分支，不只是当前分支。

### 查看详细改动

`-p` 显示每次提交的完整 diff：

```bash
$ git log -p -2    # 最近2次提交的详细改动
```

Git 会显示每个文件的每一行变化。绿色的 `+` 是新增的，红色的 `-` 是删除的。`-2` 限制只看最近2次提交，否则输出会很长。

`--stat` 只显示统计信息（改了几个文件、增删了多少行）：

```bash
$ git log --stat
commit 61b6377a8c9f2e4d3b1a5c6e7f8g9h0i1j2k3l4m
Author: Mark <mark@example.com>
Date:   Sun Mar 16 23:48:15 2026 +0800

    docs: add git chapter

 chapter-03.md | 245 ++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 245 insertions(+)
```

### 搜索和过滤

`--grep` 搜索提交信息：

```bash
$ git log --grep="chapter"    # 找所有提到"chapter"的提交
```

`--author` 按作者过滤：

```bash
$ git log --author="Mark"
```

团队协作时，这个命令可以看到队友最近在忙什么。

按时间过滤用 `--since` 和 `--until`：

```bash
$ git log --since="2 weeks ago"
$ git log --since="2026-03-01" --until="2026-03-15"
```

Git 能理解"2 weeks ago"、"yesterday"、"3 days"这样的自然语言。

### 查看单个提交

知道提交 ID 后，用 `git show` 查看这次提交的完整信息：

```bash
$ git show 61b6377
```

它会显示提交信息、作者、时间，以及这次提交的完整 diff。追踪 bug 时，找到引入 bug 的提交后，用 `git show` 看看那次到底改了什么。

### 常用选项速查

| 选项 | 作用 |
|------|------|
| `-p` | 显示每次提交的详细改动 |
| `--stat` | 显示文件修改统计 |
| `--oneline` | 每个提交一行 |
| `--graph` | 显示分支图 |
| `--all` | 显示所有分支 |
| `-<n>` | 只显示最近 n 次提交 |
| `--since`, `--after` | 指定时间之后的提交 |
| `--until`, `--before` | 指定时间之前的提交 |
| `--author` | 按作者过滤 |
| `--grep` | 搜索提交信息 |

## 比较差异

Git 可以比较任意两个版本之间的差异。还记得第二章讲的三层模型吗？

```
工作区（Working Directory）
    ↓
暂存区（Staging Area）
    ↓
提交历史（Commit History）
```

`git diff` 就是用来比较这三层之间的差异的。

### 工作区 vs 暂存区

查看"刚刚修改了什么，但还没有 add"：

```bash
$ git diff
```

假设你修改了 `README.md`，输出会像这样：

```diff
diff --git a/README.md b/README.md
index 1234567..abcdefg 100644
--- a/README.md
+++ b/README.md
@@ -1,4 +1,4 @@
 # 教材合集

-这是一个教材仓库。
+这是一个持续建设中的教材仓库，目标是把不同主题写成真正可读、可学、可复习的长期教材。
```

`-` 开头的行是旧内容（红色），`+` 开头的行是新内容（绿色）。`@@ -1,4 +1,4 @@` 告诉你这个改动在文件的哪个位置。

### 暂存区 vs 最新提交

查看"已经 add 了什么，即将 commit 的内容"：

```bash
$ git diff --staged
```

或者用它的别名：

```bash
$ git diff --cached
```

提交前用这个命令再确认一遍即将提交的内容是否正确。

### 比较任意两个提交

比较任意两个提交之间的差异：

```bash
$ git diff 61b6377 4d64e45
```

这会显示从提交 `61b6377` 到提交 `4d64e45` 之间的所有改动。

用 `HEAD` 代表最新的提交：

```bash
$ git diff HEAD~1 HEAD    # 最近一次提交的改动
```

`HEAD~1` 表示"最新提交的上一个提交"，`HEAD~2` 是上上个，以此类推。

### 只看特定文件

只看某个文件的差异，在命令后面加上文件路径：

```bash
$ git diff README.md
$ git diff 61b6377 4d64e45 README.md
```

### 实战：提交前的最后检查

修改了几个文件，有些已经 `git add`，有些还没有。提交前，确认一下改动是否正确：

```bash
# 1. 查看工作区的改动（还没 add 的）
$ git diff

# 2. 查看暂存区的改动（已经 add 的）
$ git diff --staged

# 3. 如果发现问题，继续修改文件，然后重新 add
$ git add <文件名>

# 4. 再次确认
$ git diff --staged

# 5. 确认无误后提交
$ git commit -m "docs: update README"
```

这个流程能帮你避免误提交。

## 撤销操作

在 Git 中，"撤销"有很多种含义：撤销工作区的修改、撤销暂存区的修改、撤销已经提交的修改、撤销已经推送的修改。Git 提供了三个主要的撤销命令，它们的使用场景完全不同。

### 场景1：撤销工作区的修改（还没 add）

修改了一个文件，但还没有运行 `git add`，现在想撤销这些修改：

```bash
$ git restore <文件名>
```

或者撤销所有修改：

```bash
$ git restore .
```

示例：

```bash
# 1. 修改了 README.md
$ echo "错误的内容" >> README.md

# 2. 查看状态
$ git status
On branch main
Changes not staged for commit:
  modified:   README.md

# 3. 撤销修改
$ git restore README.md

# 4. 再次查看状态
$ git status
On branch main
nothing to commit, working tree clean
```

警告：`git restore` 会直接丢弃你的修改，无法恢复！使用前请确认。

旧命令：在 Git 2.23 之前，使用 `git checkout -- <文件名>`，现在不推荐使用。

### 场景2：撤销暂存区的修改（已经 add，但还没 commit）

运行了 `git add`，但还没有 commit，现在想把文件从暂存区移除（但保留工作区的修改）：

```bash
$ git restore --staged <文件名>
```

示例：

```bash
# 1. 修改并添加到暂存区
$ echo "新内容" >> README.md
$ git add README.md

# 2. 查看状态
$ git status
On branch main
Changes to be committed:
  modified:   README.md

# 3. 从暂存区移除（但保留工作区的修改）
$ git restore --staged README.md

# 4. 再次查看状态
$ git status
On branch main
Changes not staged for commit:
  modified:   README.md
```

现在文件又回到了"已修改但未暂存"的状态。如果想连工作区的修改也撤销，再运行一次 `git restore README.md`。

旧命令：在 Git 2.23 之前，使用 `git reset HEAD <文件名>`。

### 场景3：撤销已经提交的修改（还没 push）

这是最复杂的场景，有三种方法：`git reset` 的三种模式。

#### 方法1：`git reset --soft`（只移动 HEAD）

撤销提交，但保留暂存区和工作区的修改。适合重新编辑提交信息，或者把多个提交合并成一个。

```bash
$ git reset --soft HEAD~1
```

示例：

```bash
# 1. 查看提交历史
$ git log --oneline
abc1234 docs: add chapter 3
def5678 docs: add chapter 2

# 2. 撤销最近一次提交
$ git reset --soft HEAD~1

# 3. 查看状态
$ git status
On branch main
Changes to be committed:
  new file:   chapter-03.md
```

现在最近一次提交被撤销了，但文件还在暂存区，你可以重新提交。

#### 方法2：`git reset --mixed`（默认模式）

撤销提交，重置暂存区，但保留工作区的修改。适合撤销提交后重新整理要提交的文件。

```bash
$ git reset HEAD~1
```

或者明确指定：

```bash
$ git reset --mixed HEAD~1
```

示例：

```bash
# 1. 撤销最近一次提交
$ git reset HEAD~1

# 2. 查看状态
$ git status
On branch main
Changes not staged for commit:
  modified:   chapter-03.md
```

现在文件回到了"已修改但未暂存"的状态。

#### 方法3：`git reset --hard`（最危险）

撤销提交，重置暂存区和工作区，**完全丢弃所有修改**。适合确定要完全放弃这次提交的所有内容。

```bash
$ git reset --hard HEAD~1
```

警告：这个命令会永久删除你的修改，无法恢复！使用前请三思。

示例：

```bash
# 1. 撤销最近一次提交并丢弃所有修改
$ git reset --hard HEAD~1

# 2. 查看状态
$ git status
On branch main
nothing to commit, working tree clean
```

所有修改都消失了。

#### 三种模式的对比

| 模式 | 移动 HEAD | 重置暂存区 | 重置工作区 | 使用场景 |
|------|-----------|------------|------------|----------|
| `--soft` | 是 | 否 | 否 | 重新编辑提交 |
| `--mixed` | 是 | 是 | 否 | 重新整理文件 |
| `--hard` | 是 | 是 | 是 | 完全放弃修改 |

记忆方法：`--soft` 最温柔，只动 HEAD；`--mixed` 中等，动 HEAD 和暂存区；`--hard` 最狠，全都动。

### 场景4：撤销已经推送的修改（已经 push）

如果已经把提交推送到远程仓库，不要使用 `git reset`。为什么？因为 `git reset` 会改写历史。如果别人已经基于这个提交开始工作，改写历史会导致他们的工作出问题。正确做法是使用 `git revert`。

#### `git revert`：创建新提交来撤销

`git revert` 不会删除旧提交，而是创建一个新的提交，这个提交的内容是"撤销某个旧提交的修改"。

```bash
$ git revert <提交ID>
```

示例：

```bash
# 1. 查看提交历史
$ git log --oneline
abc1234 docs: add wrong content
def5678 docs: add chapter 2

# 2. 撤销 abc1234 这次提交
$ git revert abc1234

# Git 会打开编辑器让你编辑提交信息，默认是：
# Revert "docs: add wrong content"
#
# This reverts commit abc1234.

# 3. 保存并退出编辑器

# 4. 查看提交历史
$ git log --oneline
xyz9012 Revert "docs: add wrong content"
abc1234 docs: add wrong content
def5678 docs: add chapter 2
```

注意：`git revert` 不会删除旧提交，而是创建一个新提交来"反向操作"。历史记录是完整的，这对团队协作很重要。

### 场景5：找回"丢失"的提交（reflog）

不小心用 `git reset --hard` 删除了提交，想要找回来。别慌，Git 有个"回收站"叫 `reflog`。

`reflog` 记录了你的 HEAD 指针的所有移动历史，即使提交被"删除"了，也能在 reflog 中找到。

```bash
$ git reflog
```

示例：

```bash
# 1. 不小心删除了提交
$ git reset --hard HEAD~2

# 2. 查看 reflog
$ git reflog
def5678 HEAD@{0}: reset: moving to HEAD~2
abc1234 HEAD@{1}: commit: docs: add chapter 3
xyz9012 HEAD@{2}: commit: docs: add chapter 2

# 3. 找回被删除的提交
$ git reset --hard abc1234

# 或者用 HEAD@{1}
$ git reset --hard HEAD@{1}
```

现在提交又回来了！

reflog 只保留最近几个月的记录（默认90天），所以不要指望它能找回很久以前的提交。

### 安全撤销的原则

push 前可以用 reset，push 后只能用 revert。还没 push 时，可以用 `git reset` 改写历史。已经 push 后，必须用 `git revert` 创建新提交。

使用 `--hard` 前请三思。`git reset --hard` 会永久删除修改。使用前请确认：真的不需要这些修改了吗？有没有备份？能不能用 `--soft` 或 `--mixed` 代替？

重要操作前先创建分支。如果要做一个可能有风险的操作，先创建一个分支作为备份：

```bash
$ git branch backup-before-reset
$ git reset --hard HEAD~5
```

如果出问题了，可以切换回备份分支：

```bash
$ git checkout backup-before-reset
```

记住 reflog 是最后的救命稻草。如果真的搞砸了，记得用 `git reflog` 找回"丢失"的提交。

## 常见问题与解决

**问题1：我不小心用 `git reset --hard` 删除了重要提交，怎么办？**

用 `git reflog` 找回：

```bash
$ git reflog
$ git reset --hard <提交ID>
```

**问题2：我想撤销多次提交，应该怎么做？**

用 `git reset HEAD~N`，N 是你想撤销的提交数量：

```bash
# 撤销最近3次提交
$ git reset HEAD~3
```

**问题3：`git revert` 时出现冲突，怎么办？**

手动解决冲突，然后继续 revert：

```bash
# 1. 解决冲突（编辑文件）
# 2. 添加解决后的文件
$ git add <文件名>
# 3. 继续 revert
$ git revert --continue
```

**问题4：我想撤销某个文件的修改，但保留其他文件，怎么做？**

用 `git restore` 指定文件：

```bash
$ git restore <文件名>
```

**问题5：`git restore` 和 `git reset` 有什么区别？**

`git restore` 用于撤销工作区或暂存区的修改，不影响提交历史。`git reset` 用于移动 HEAD 指针，改变提交历史。简单记忆：还没 commit 用 `git restore`，已经 commit 用 `git reset` 或 `git revert`。

## 本章小结

这一章学习了 Git 的历史查看、差异比较和撤销能力。

查看历史方面，`git log` 是核心命令，配合 `--oneline` 可以简化输出，`--graph` 能可视化分支，`-p` 显示详细改动，`--grep` 和 `--author` 用于搜索和过滤。`git show` 则用来查看单个提交的完整信息。

比较差异时，`git diff` 比较工作区和暂存区，`git diff --staged` 比较暂存区和最新提交，也可以用 `git diff <commit1> <commit2>` 比较任意两个提交。

撤销操作有多种方式：`git restore` 用于撤销工作区或暂存区的修改；`git reset` 有三种模式，`--soft` 只撤销提交但保留暂存区和工作区，`--mixed` 撤销提交和暂存区但保留工作区，`--hard` 则丢弃所有修改；对于已经 push 的提交，要用 `git revert` 创建新提交来撤销；如果不小心删除了提交，可以用 `git reflog` 找回。

安全原则：push 前可以用 reset，push 后只能用 revert；使用 `--hard` 前请三思；重要操作前先创建备份分支；reflog 是最后的救命稻草。

## 下一步

现在已经掌握了 Git 的基本操作：初始化、提交、查看历史、比较差异、撤销修改。但到目前为止，我们都是在一条直线上工作——每次提交都是在上一次提交的基础上继续。

在下一章，我们会学习 Git 最强大的功能之一：分支。分支让你可以同时进行多个平行开发：在一个分支上开发新功能，在另一个分支上修复 bug，在第三个分支上做实验。而且这些分支之间互不干扰，最后还能合并到一起。
