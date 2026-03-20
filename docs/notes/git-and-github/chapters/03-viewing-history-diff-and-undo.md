# Chapter 3: Looking Back and Undoing — How to View History, Compare Differences, and Safely Undo



## What You'll Learn in This Chapter

- Use `git log` to view commit history and find the commit you need
- Use `git diff` to compare differences between versions
- Use `git restore`, `git reset`, `git revert` to safely undo mistakes
- Understand the essential differences and use cases of the three undo methods

## When Code Suddenly Breaks

The code worked yesterday, but crashes today. You stare at the error message on screen, first thought: "What did I change?"

Without Git, you can only guess from memory or compare code line by line. With Git, you can see the complete history of every change, compare differences between any two versions, and even undo wrong modifications.

This chapter teaches you how to use these capabilities. We'll start with viewing history, then learn how to compare differences, and finally—this might be the most important part—learn how to safely undo mistakes. "Safely" is key here, because Git provides several undo methods, some gentle, some aggressive. Choose the wrong method, and you might lose your work.

## Viewing Commit History

Run `git log`, Git will show you complete information for every commit:

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

Each commit contains four parts: commit ID (that 40-character SHA-1 hash), author, date, commit message. The commit ID uniquely identifies this commit, usually the first 7 characters are enough. By default, `git log` displays in reverse chronological order—newest commits on top.

### Simplified Output

`--oneline` compresses each commit to one line:

```bash
$ git log --oneline
61b6377 docs: add git chapter on working tree
4d64e45 docs: add beginner fast-track chapters
96ff8b5 Humanize textbook content
e737406 Humanize Git-and-GitHub volume
f2ca9ca Start Git and GitHub textbook volume
```

Much cleaner now. One commit per line, ID + commit message.

If the project has branches (we'll cover this in detail in Chapter 4), `--graph` will draw the branch structure:

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

These asterisks and lines show how code branched from the main line and merged back. `--all` shows all branches, not just the current one.

### Viewing Detailed Changes

`-p` shows the complete diff for each commit:

```bash
$ git log -p -2    # Detailed changes for the last 2 commits
```

Git will show every line change in every file. Green `+` is added, red `-` is deleted. `-2` limits to the last 2 commits, otherwise the output gets very long.

`--stat` shows only statistics (how many files changed, how many lines added/deleted):

```bash
$ git log --stat
commit 61b6377a8c9f2e4d3b1a5c6e7f8g9h0i1j2k3l4m
Author: Mark <mark@example.com>
Date:   Sun Mar 16 23:48:15 2026 +0800

    docs: add git chapter

 chapter-03.md | 245 ++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 245 insertions(+)
```

### Searching and Filtering

`--grep` searches commit messages:

```bash
$ git log --grep="chapter"    # Find all commits mentioning "chapter"
```

`--author` filters by author:

```bash
$ git log --author="Mark"
```

In team collaboration, this command shows what teammates have been working on recently.

Filter by time with `--since` and `--until`:

```bash
$ git log --since="2 weeks ago"
$ git log --since="2026-03-01" --until="2026-03-15"
```

Git understands natural language like "2 weeks ago", "yesterday", "3 days".

### Viewing a Single Commit

After knowing the commit ID, use `git show` to view complete information for this commit:

```bash
$ git show 61b6377
```

It shows commit message, author, time, and the complete diff for this commit. When tracking bugs, after finding the commit that introduced the bug, use `git show` to see what exactly changed.

### Quick Reference for Common Options

| Option | Purpose |
|--------|---------|
| `-p` | Show detailed changes for each commit |
| `--stat` | Show file modification statistics |
| `--oneline` | One commit per line |
| `--graph` | Show branch graph |
| `--all` | Show all branches |
| `-<n>` | Show only the last n commits |
| `--since`, `--after` | Commits after specified time |
| `--until`, `--before` | Commits before specified time |
| `--author` | Filter by author |
| `--grep` | Search commit messages |

## Comparing Differences

Git can compare differences between any two versions. Remember the three-layer model from Chapter 2?

```
Working Directory
    ↓
Staging Area
    ↓
Commit History
```

`git diff` is used to compare differences between these three layers.

### Working Directory vs Staging Area

View "what you just modified, but haven't added yet":

```bash
$ git diff
```

Assuming you modified `README.md`, the output looks like this:

```diff
diff --git a/README.md b/README.md
index 1234567..abcdefg 100644
--- a/README.md
+++ b/README.md
@@ -1,4 +1,4 @@
 # Textbook Collection

-This is a textbook repository.
+This is a continuously developing textbook repository, aiming to write different topics into truly readable, learnable, and reviewable long-term textbooks.
```

Lines starting with `-` are old content (red), lines starting with `+` are new content (green). `@@ -1,4 +1,4 @@` tells you where this change is in the file.

### Staging Area vs Latest Commit

View "what you've added, content about to be committed":

```bash
$ git diff --staged
```

Or use its alias:

```bash
$ git diff --cached
```

Use this command before committing to confirm once more that the content about to be committed is correct.

### Comparing Any Two Commits

Compare differences between any two commits:

```bash
$ git diff 61b6377 4d64e45
```

This shows all changes from commit `61b6377` to commit `4d64e45`.

Use `HEAD` to represent the latest commit:

```bash
$ git diff HEAD~1 HEAD    # Changes in the most recent commit
```

`HEAD~1` means "the commit before the latest commit", `HEAD~2` is two commits back, and so on.

### Viewing Specific Files Only

To view differences for a specific file only, add the file path after the command:

```bash
$ git diff README.md
$ git diff 61b6377 4d64e45 README.md
```

### Practice: Final Check Before Committing

Modified several files, some already `git add`, some not yet. Before committing, confirm the changes are correct:

```bash
# 1. View working directory changes (not yet added)
$ git diff

# 2. View staging area changes (already added)
$ git diff --staged

# 3. If problems found, continue modifying files, then re-add
$ git add <filename>

# 4. Confirm again
$ git diff --staged

# 5. Commit after confirming everything is correct
$ git commit -m "docs: update README"
```

This workflow helps you avoid mistaken commits.

## Undo Operations

In Git, "undo" has many meanings: undo working directory changes, undo staging area changes, undo committed changes, undo pushed changes. Git provides three main undo commands, with completely different use cases.

### Scenario 1: Undo Working Directory Changes (Not Yet Added)

Modified a file, but haven't run `git add` yet, now want to undo these changes:

```bash
$ git restore <filename>
```

Or undo all changes:

```bash
$ git restore .
```

**Example**:

```bash
# 1. Modified README.md
$ echo "Wrong content" >> README.md

# 2. Check status
$ git status
On branch main
Changes not staged for commit:
  modified:   README.md

# 3. Undo changes
$ git restore README.md

# 4. Check status again
$ git status
On branch main
nothing to commit, working tree clean
```

**Warning**: `git restore` will directly discard your changes, cannot be recovered! Confirm before using.

**Old command**: Before Git 2.23, used `git checkout -- <filename>`, not recommended now.

### Scenario 2: Undo Staging Area Changes (Already Added, But Not Yet Committed)

Ran `git add`, but haven't committed yet, now want to remove the file from staging area (but keep working directory changes):

```bash
$ git restore --staged <filename>
```

**Example**:

```bash
# 1. Modify and add to staging area
$ echo "New content" >> README.md
$ git add README.md

# 2. Check status
$ git status
On branch main
Changes to be committed:
  modified:   README.md

# 3. Remove from staging area (but keep working directory changes)
$ git restore --staged README.md

# 4. Check status again
$ git status
On branch main
Changes not staged for commit:
  modified:   README.md
```

Now the file is back to "modified but not staged" state. If you want to undo working directory changes too, run `git restore README.md` again.

**Old command**: Before Git 2.23, used `git reset HEAD <filename>`.

### Scenario 3: Undo Committed Changes (Not Yet Pushed)

This is the most complex scenario, with three methods: three modes of `git reset`.

#### Method 1: `git reset --soft` (Only Move HEAD)

Undo commit, but keep staging area and working directory changes. Suitable for re-editing commit message, or combining multiple commits into one.

```bash
$ git reset --soft HEAD~1
```

**Example**:

```bash
# 1. View commit history
$ git log --oneline
abc1234 docs: add chapter 3
def5678 docs: add chapter 2

# 2. Undo the most recent commit
$ git reset --soft HEAD~1

# 3. Check status
$ git status
On branch main
Changes to be committed:
  new file:   chapter-03.md
```

Now the most recent commit is undone, but the file is still in staging area, you can commit again.

#### Method 2: `git reset --mixed` (Default Mode)

Undo commit, reset staging area, but keep working directory changes. Suitable for undoing commit and reorganizing files to commit.

```bash
$ git reset HEAD~1
```

Or explicitly specify:

```bash
$ git reset --mixed HEAD~1
```

**Example**:

```bash
# 1. Undo the most recent commit
$ git reset HEAD~1

# 2. Check status
$ git status
On branch main
Changes not staged for commit:
  modified:   chapter-03.md
```

Now the file is back to "modified but not staged" state.

#### Method 3: `git reset --hard` (Most Dangerous)

Undo commit, reset staging area and working directory, **completely discard all changes**. Suitable for when you're certain you want to completely abandon all content from this commit.

```bash
$ git reset --hard HEAD~1
```

**Warning**: This command will permanently delete your changes, cannot be recovered! Think three times before using.

**Example**:

```bash
# 1. Undo the most recent commit and discard all changes
$ git reset --hard HEAD~1

# 2. Check status
$ git status
On branch main
nothing to commit, working tree clean
```

All changes are gone.

#### Comparison of Three Modes

| Mode | Move HEAD | Reset Staging | Reset Working | Use Case |
|------|-----------|---------------|---------------|----------|
| `--soft` | Yes | No | No | Re-edit commit |
| `--mixed` | Yes | Yes | No | Reorganize files |
| `--hard` | Yes | Yes | Yes | Completely abandon changes |

**Memory tip**:
- `--soft`: Gentlest, only moves HEAD
- `--mixed`: Medium, moves HEAD and staging area
- `--hard`: Most aggressive, moves everything

### Scenario 4: Undo Pushed Changes (Already Pushed)

**Important principle**: If you've already pushed commits to remote repository, **don't use `git reset`**!

Why? Because `git reset` rewrites history. If others have already started working based on this commit, rewriting history will cause problems for their work.

**Correct approach**: Use `git revert`.

#### `git revert`: Create New Commit to Undo

`git revert` doesn't delete old commits, but creates a new commit whose content is "undo the changes from an old commit".

```bash
$ git revert <commit-ID>
```

**Example**:

```bash
# 1. View commit history
$ git log --oneline
abc1234 docs: add wrong content
def5678 docs: add chapter 2

# 2. Undo commit abc1234
$ git revert abc1234

# Git will open editor to let you edit commit message, default is:
# Revert "docs: add wrong content"
#
# This reverts commit abc1234.

# 3. Save and exit editor

# 4. View commit history
$ git log --oneline
xyz9012 Revert "docs: add wrong content"
abc1234 docs: add wrong content
def5678 docs: add chapter 2
```

Note: `git revert` doesn't delete old commits, but creates a new commit to "reverse the operation". The history is complete, which is important for team collaboration.

### Scenario 5: Recovering "Lost" Commits (reflog)

Accidentally deleted commits with `git reset --hard`, want to recover them. Don't panic, Git has a "recycle bin" called `reflog`.

`reflog` records all movement history of your HEAD pointer, even if commits are "deleted", they can still be found in reflog.

```bash
$ git reflog
```

**Example**:

```bash
# 1. Accidentally deleted commits
$ git reset --hard HEAD~2

# 2. View reflog
$ git reflog
def5678 HEAD@{0}: reset: moving to HEAD~2
abc1234 HEAD@{1}: commit: docs: add chapter 3
xyz9012 HEAD@{2}: commit: docs: add chapter 2

# 3. Recover deleted commits
$ git reset --hard abc1234

# Or use HEAD@{1}
$ git reset --hard HEAD@{1}
```

Now the commits are back!

**Note**: reflog only keeps records for the last few months (default 90 days), so don't expect it to recover commits from long ago.

### Principles for Safe Undoing

Can use reset before push, can only use revert after push. Not yet pushed: can use `git reset` to rewrite history. Already pushed: must use `git revert` to create new commits.

Think three times before using `--hard`. `git reset --hard` will permanently delete your changes. Before using, confirm: Do you really not need these changes anymore? Do you have a backup? Can you use `--soft` or `--mixed` instead?

Create a branch before important operations. If you're about to do a potentially risky operation, create a branch as backup first:

```bash
$ git branch backup-before-reset
$ git reset --hard HEAD~5
```

If something goes wrong, you can switch back to the backup branch:

```bash
$ git checkout backup-before-reset
```

Remember reflog is the last resort. If you really messed up, remember to use `git reflog` to recover "lost" commits.

## Common Problems and Solutions

**Problem 1: I accidentally deleted important commits with `git reset --hard`, what should I do?**

Recover with `git reflog`:

```bash
$ git reflog
$ git reset --hard <commit-ID>
```

**Problem 2: I want to undo multiple commits, how should I do it?**

Use `git reset HEAD~N`, where N is the number of commits you want to undo:

```bash
# Undo the last 3 commits
$ git reset HEAD~3
```

**Problem 3: Conflicts appeared during `git revert`, what should I do?**

Manually resolve conflicts, then continue revert:

```bash
# 1. Resolve conflicts (edit files)
# 2. Add resolved files
$ git add <filename>
# 3. Continue revert
$ git revert --continue
```

**Problem 4: I want to undo changes to a specific file, but keep other files, how?**

Use `git restore` to specify the file:

```bash
$ git restore <filename>
```

**Problem 5: What's the difference between `git restore` and `git reset`?**

`git restore` is used to undo working directory or staging area changes and doesn't affect commit history. `git reset` is used to move the HEAD pointer and changes commit history. Simple memory: not yet committed, use `git restore`; already committed, use `git reset` or `git revert`.

## Chapter summary

In this chapter we learned Git's history viewing, difference comparison, and undo capabilities.

For viewing history, `git log` is the core command. Combined with `--oneline` it simplifies output, `--graph` visualizes branches, `-p` shows detailed changes, and `--grep` and `--author` are used for searching and filtering. `git show` views complete information for a single commit.

When comparing differences, `git diff` compares working directory and staging area, `git diff --staged` compares staging area and latest commit, and you can also use `git diff <commit1> <commit2>` to compare any two commits.

Undo operations have multiple methods: `git restore` undoes working directory or staging area changes; `git reset` has three modes—`--soft` only undoes commit but keeps staging area and working directory, `--mixed` undoes commit and staging area but keeps working directory, `--hard` discards all changes; for already pushed commits, use `git revert` to create a new commit to undo; if you accidentally delete commits, use `git reflog` to recover them.

Safety principles: can use reset before push, can only use revert after push; think three times before using `--hard`; create backup branch before important operations; reflog is the last resort.

## Next steps

Now you've mastered Git's basic operations: initialize, commit, view history, compare differences, undo changes. But so far, we've been working on a single line—each commit continues based on the previous commit.

In the next chapter, we'll learn one of Git's most powerful features: **branches**. Branches let you conduct multiple parallel developments simultaneously: develop new features on one branch, fix bugs on another branch, experiment on a third branch. And these branches don't interfere with each other, and can eventually be merged together.
