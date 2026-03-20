# Chapter 0: Practical Quick Start — Get Git and GitHub Working

## What You'll Learn in This Chapter

- Understand Git's core concepts: working directory, staging area, commit history, remote repository
- Walk through the minimum workflow: from init to push, end to end
- Distinguish the roles of Git and GitHub
- Master the commands you'll use most often
- Write clear commit messages
- Learn basic recovery operations — what to do when things go wrong

## Where This Chapter Fits

From Chapter 1 onward, this book systematically covers the principles of version control, every core Git concept, and the full team collaboration workflow. But before that, this chapter helps you build hands-on familiarity — letting you run through the most common operations without needing to understand every underlying detail first.

This isn't skipping the theory. It's giving you a sense of "what it looks like" so that when you do encounter the concepts later, they click much faster.

## What Git Is Not

Before explaining what Git is, let's clear up a few common misconceptions.

Git is not a cloud drive. A cloud drive stores files. Git stores the **history of changes** to those files. Every edit, deletion, and addition is recorded, and you can rewind to any previous state at any time.

Git is also not a fancy "Save As." Save As means manually copying files and managing version numbers yourself. Git handles this automatically — each commit is a named checkpoint in history, so you never need to name another file `v2_final_revised_3.md`.

GitHub is not Git itself either. Git is a version control system that runs on your computer. GitHub is a hosting platform built on top of Git, providing a web interface and collaboration features. You can use Git perfectly well without GitHub, but adding GitHub gives you backup, collaboration, and sharing capabilities.

## The Four Layers

Everything Git manages can be divided into four layers. Getting these straight early on prevents a lot of confusion later.

The **working directory** is the real folder you're editing right now. When you open your editor to write documents or code, you're editing files in the working directory.

The **staging area** is an intermediate zone. When you run `git add`, you're placing changes from the working directory into the staging area, telling Git "I intend to commit these changes." The staging area gives you precise control over what goes into each commit — not every modification has to be committed together.

The **commit history** is Git's core. Each time you run `git commit`, Git takes a snapshot of the current state, attaches your description and a timestamp, and saves it permanently. These snapshots form a timeline you can scroll through at any time.

The **remote repository** is a copy of your repository stored on a server (like GitHub). It can synchronize with your local repository in both directions: you push your local commits to the remote, and pull other people's commits from the remote to your local machine.

The relationship between these layers is: you edit in the working directory, selectively stage your changes, commit the staged content as a new history node, then push those nodes to the remote repository for backup.

## The Minimum Workflow

Day-to-day Git usage boils down to a simple cycle:

```
check status → stage changes → commit → sync remote
```

The corresponding core commands:

```bash
git status
git add .
git commit -m "describe what you did"
git pull
git push
```

This isn't a "beginner toy." It's the main loop that many developers use every single day. All the advanced features you'll learn later are extensions built on top of this foundation.

## Walking Through It from Zero

Suppose you have a documentation project folder with some Markdown files and images. Now you want to bring it under Git management.

### Initialize the repository

```bash
cd my-project
git init
```

`git init` does exactly one thing: it creates a hidden `.git` folder in the current directory. This folder is where Git stores all version information. At this point your files aren't tracked yet — Git knows the repository exists, but hasn't recorded anything.

### Check the status

```bash
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
        chapters/
        images/
```

`git status` is the single most important command to build into your habits. It tells you which files are new, which have been modified, which are already staged, and which aren't being tracked by Git at all.

### Stage and commit

```bash
$ git add README.md
$ git commit -m "docs: add project README"
```

`git add README.md` places README.md in the staging area. `git commit` packages everything in the staging area into a history node, and `-m` provides the description for that node.

If you have multiple files to commit, you can add them one by one, or add everything at once:

```bash
$ git add .
$ git commit -m "docs: add initial project structure with chapters and images"
```

`git add .` puts all modified files in the current directory into the staging area. It's convenient, but you should know what you've changed — run `git status` and `git diff` first to check.

### Connect to a remote repository

If you have a GitHub account, you can create a remote repository for backup and synchronization:

```bash
$ git remote add origin https://github.com/yourname/your-repo.git
```

This tells Git: "use this address as the default for push and pull."

### Push to the remote

```bash
$ git push -u origin main
```

`-u` sets up a tracking relationship — after this, you can just run `git push` without specifying the remote and branch name.

That's the complete loop, from init to push.

## Git vs GitHub: Who Does What

The division of responsibility is clear.

Git handles version control itself: recording change history, creating branches, merging branches, comparing differences, and rolling back. All of these operations happen on your computer — no network required.

GitHub handles hosting and collaboration: storing your repository on a server, providing a web interface to browse code and history, and offering tools like Issues (task tracking), Pull Requests (code review), and Actions (automation).

In short: Git is the engine, GitHub is the platform. As an analogy, Git is like a word processor, and GitHub is like a collaborative document platform built on top of it.

## The Most Commonly Used Commands

These are the commands worth getting comfortable with first:

| Command | Purpose | When to use it |
|---------|---------|---------------|
| `git status` | Check current state | Anytime — make it a habit |
| `git add <file>` | Stage a file | Before committing |
| `git add .` | Stage all changes | After confirming what changed |
| `git commit -m "..."` | Commit staged content | After completing a unit of work |
| `git log --oneline` | View short commit history | When you want to review what was done |
| `git diff` | View unstaged changes | Before committing, to double-check |
| `git diff --staged` | View staged changes | Final check before commit |
| `git restore <file>` | Discard working directory changes | When you made a mistake and want to revert |
| `git restore --staged <file>` | Unstage a file | When you added the wrong file |
| `git pull` | Pull latest from remote | Before starting work |
| `git push` | Push local commits to remote | Before stopping work |

The first nine are the highest-frequency commands for daily work. Focus on mastering those first.

## How to Write Commit Messages

The core purpose of a commit message is simple: when you (or someone else) look at this record later, you should be able to quickly understand what this commit did.

A simple and effective format:

```
type: short description
```

Common types:

- `docs` — documentation changes
- `fix` — bug fixes or error corrections
- `chore` — miscellaneous (file reorganization, directory restructuring, etc.)

Examples:

- `docs: add chapter 1 draft`
- `fix: correct formula in section 3.2`
- `chore: reorganize chapter folders`

Avoid messages with no information content, like `update`, `change`, `123`, or `final`. These are useless when you're reviewing history later.

## What to Do When Things Go Wrong

This is what beginners worry about most, and it's one of Git's most valuable use cases.

### Scenario 1: You edited a file but haven't staged it, and want to revert

```bash
$ git restore README.md
```

The file reverts to its last committed state. Your changes are discarded.

### Scenario 2: You staged a file but haven't committed, and want to unstage it

```bash
$ git restore --staged README.md
```

The file is removed from the staging area, but your changes remain in the working directory.

### Scenario 3: You just committed and realized the message is wrong

```bash
$ git commit --amend
```

This opens your editor so you can modify the most recent commit's message. If you only need to fix the message and not the content, this is the safest approach.

### Scenario 4: You want to see exactly what changed in a file

```bash
$ git diff README.md
```

This shows your changes line by line — green for additions, red for deletions. Running `git diff` before committing catches a lot of simple mistakes.

### Scenario 5: You want to look back through commit history

```bash
$ git log --oneline
```

This shows a concise list of all commits — hash and message. To see the details of a specific commit:

```bash
$ git show <commit-hash>
```

These operations cover the vast majority of day-to-day recovery scenarios. More complex operations (like reverting multiple commits or recovering deleted branches) will be covered in detail in Chapter 3.

## When You Need Branches

So far, all your work has been on a single straight line — each commit builds on the previous one. This works fine for simple cases, but when you need to do two different things at the same time, a single line isn't enough.

Branches solve this problem. They let you create an independent line of work where changes don't affect the main line. For example, if you want to try rewriting a section without breaking the current version, just create a branch.

The most basic usage:

```bash
$ git checkout -b experiment/rewrite-section-3
```

This creates a new branch called `experiment/rewrite-section-3` and switches to it. None of the commits you make here will affect `main`.

Branches are covered in full detail in Chapter 4 (creating, switching, merging, resolving conflicts). For now, you just need to know: branches exist, they're safe, and you can create and delete them anytime.

## Why Document Work Is a Great Fit for Git

Many people assume Git is only for programmers. In reality, document work and Git are a natural match, because documents tend to be revised repeatedly, restructured across chapters, have images replaced, wording refined, content expanded, and occasionally need to be rolled back to an earlier version.

This is especially true for textbooks, knowledge bases, and tutorials — you're not maintaining a single "final output file," you're maintaining a continuously evolving text system. Each revision is a commit, every version can be traced back, and that's exactly what Git excels at.

## What to Learn First on GitHub

If you're just getting started with GitHub, these things have the highest priority:

- **Creating a repository**: A repository is the container for your project. Understanding this matters more than memorizing button locations.
- **Reading the README**: The README is the project's front page description, not decoration.
- **Pushing your local repository**: Make GitHub your backup and synchronization point.
- **Browsing commit history**: The web interface also shows the full modification history.

Pull Requests, Issues, and Actions are important, but you don't need to learn them on day one. Get the local version control loop working smoothly first, then approach the platform collaboration features — it'll be much easier.

## Hands-On Exercise

Before moving on to the later chapters, try running through this exercise. Your feel for Git comes from using it, not from reading about it.

```bash
# 1. Create a practice directory
mkdir git-practice
cd git-practice
git init

# 2. Create a file and commit
echo "# My Practice Repo" > README.md
git add README.md
git commit -m "docs: add initial README"

# 3. Modify the file and commit again
echo "This is my first Git repo." >> README.md
git add README.md
git commit -m "docs: add description to README"

# 4. Check the history
git log --oneline

# 5. Make a change but don't commit, then check with diff
echo "Adding a new line." >> README.md
git diff

# 6. Undo the change
git restore README.md

# 7. Confirm the file is restored
git diff
```

If you've completed these 7 steps, Git is no longer just a concept to you — you've personally created a repository, committed changes, reviewed history, and undone modifications.

## Chapter Summary

Git is a version control system that tracks the change history of your files, letting you rewind to any previous state at any time. GitHub is a hosting and collaboration platform built on top of Git.

Git manages content across four layers: working directory (where you edit), staging area (the preparation zone before committing), commit history (the record of all version snapshots), and remote repository (a backup copy on a server).

The daily minimum workflow is `git status` → `git add` → `git commit` → `git pull` / `git push`. This cycle covers the vast majority of individual project needs.

Don't worry about breaking things: `git restore` undoes working directory changes, `git restore --staged` unstages files, `git commit --amend` fixes the most recent commit message, `git diff` shows exactly what changed, and `git log --oneline` lets you review history.

## Next Steps

The next chapter goes back to fundamentals and answers a foundational question: what problem is version control actually solving? Once you understand that, everything that follows will feel more natural.
