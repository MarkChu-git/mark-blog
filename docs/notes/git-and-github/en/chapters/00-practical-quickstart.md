---
title: Practical Quick Start — Get Git and GitHub Working Fast
tags:
  - git
  - github
  - quickstart
  - beginner
---

# Chapter 0: Practical Quick Start — Get Git and GitHub Working Fast

> Language / 语言：[中文](../../zh/chapters/00-practical-quickstart.md) | **English**

This chapter is not a replacement for the full textbook. It is a **startup accelerator**.

Its task is simple:

> **help a beginner run through the most useful version-control loop in the shortest realistic time.**

If any of the following describes you, this chapter is for you:

- you know Git is important but still do not feel safe using it,
- you know a few commands but do not really trust yourself,
- branch, merge, or rebase still feel intimidating,
- your documents, code, or projects keep turning into version chaos.

This chapter does not begin by drowning you in advanced concepts. Instead, it helps you get clear on:

- what Git looks like in normal day-to-day work,
- when the most common commands are used,
- what GitHub is doing in the workflow,
- and how document writing and version control fit together.

---

## 1. Six judgments worth remembering first

Do not try to “know everything” today. Start by remembering these six sentences:

1. **Git is not a cloud drive.**
2. **Git manages change history, not just the current file snapshot.**
3. **GitHub is not Git itself; it is a collaboration platform around repositories.**
4. **Beginners should learn the daily loop first, not advanced branch magic.**
5. **A commit should ideally capture one clear small change.**
6. **Pull before you start, push before you stop.**

If these six ideas are clear, almost everything else becomes easier.

---

## 2. The minimum useful workflow

Think of Git as a small cycle:

```text
check state → stage changes → commit history → sync remote
```

The corresponding core commands are:

```bash
git status
git add .
git commit -m "..."
git pull
git push
```

This is not a toy beginner set. It is the backbone of real daily work.

---

## 3. The four layers you should distinguish clearly

Beginners usually get confused because they do not separate the layers in their heads.

### 3.1 Working directory

This is the real folder you are editing right now.

Examples:

- `README.md`
- `chapter1.md`
- `images/figure-01.png`

### 3.2 Staging area

This is not just “another folder.” It is the list of changes you want to include in the next commit.

### 3.3 Commit history

This is the real core asset in Git. It records:

- what changed,
- when it changed,
- and why it changed.

### 3.4 Remote repository

This is the GitHub repository or another hosted remote.

Its main jobs are:

- backup,
- synchronization,
- collaboration,
- publishing.

Once these layers are distinct in your mind, Git becomes much less mysterious.

---

## 4. First practical run: from zero to a working loop

Assume you already have a local project folder.

### Step 1: enter the project directory

```bash
cd my-project
```

### Step 2: initialize Git

```bash
git init
```

This does **not** mean “upload to GitHub.” It means:

> from now on, the changes in this folder should be tracked by Git.

### Step 3: inspect the current state

```bash
git status
```

This is one of the most important habits you can build.

It tells you:

- which files are new,
- which files changed,
- which files are staged,
- whether you are ready to commit.

### Step 4: stage changes

```bash
git add .
```

This stages the current changes.

A more careful version is:

```bash
git add README.md
git add chapters/01-intro.md
```

That way you stay more aware of what exactly goes into the next commit.

### Step 5: commit

```bash
git commit -m "docs: add first draft of chapter 1"
```

A commit is not just “saving.” It is:

> turning a group of changes into a named, reviewable historical checkpoint.

### Step 6: connect a remote repository if needed

```bash
git remote add origin git@github.com:yourname/yourrepo.git
```

### Step 7: first push

```bash
git push -u origin main
```

At this point you already have a complete minimum loop.

---

## 5. What GitHub is actually doing here

Many beginners mix Git and GitHub together immediately.

The cleanest distinction is:

### Git handles:

- history recording,
- diffs,
- commits,
- branches and merges,
- rollback.

### GitHub handles:

- remote hosting,
- collaboration entry points,
- pull requests,
- issues,
- README presentation,
- repository browsing.

So keep this sentence clear:

> **Git is the system. GitHub is the platform.**

---

## 6. The command table worth practicing first

These are the commands most worth mastering early.

| Command | Purpose | When to use it |
| --- | --- | --- |
| `git status` | inspect current state | almost anytime |
| `git add .` | stage changes | before committing |
| `git commit -m "..."` | record a change set | after a small milestone |
| `git log --oneline` | review short history | to see recent work |
| `git diff` | inspect exact changes | before committing |
| `git diff --staged` | inspect staged changes | final check before commit |
| `git show <commit>` | view specific commit details | tracking specific changes |
| `git restore <file>` | undo working directory changes | made a mistake, want to revert |
| `git restore --staged <file>` | unstage changes | added wrong file, want to undo |
| `git pull` | get latest remote content | before starting work |
| `git push` | send local commits upstream | before stopping |
| `git branch` | list branches | when starting to learn branches |
| `git checkout -b new-branch` | create and switch branch | for new features or larger edits |

If you are a beginner, the first nine matter most.

---

## 7. A stable daily rhythm

If you are maintaining documents, code, or textbooks alone, the best routine is surprisingly simple.

### Before starting work

```bash
git pull
```

### While working

Commit after small meaningful units such as:

- finishing a subsection,
- adjusting one group of images,
- adding one example block,
- finishing one language cleanup pass.

### Commit

```bash
git add .
git commit -m "docs: refine markdown quickstart examples"
```

### Before stopping

```bash
git push
```

This rhythm looks ordinary, but it is extremely reliable.

---

## 8. How to write commit messages without pain

Beginners often get stuck here: what should the message actually say?

A simple pattern works very well:

```text
type: action + object
```

Examples:

- `docs: add git quickstart chapter`
- `docs: refine markdown examples`
- `fix: correct broken image path`
- `chore: reorganize chapter folders`

For a document-heavy repository, the most useful types are usually:

- `docs`
- `fix`
- `chore`

Avoid messages with no information value such as:

- `update`
- `change`
- `123`
- `final`

The message is written for your future self.

---

## 9. A few recovery moves that matter early

What beginners fear most is not “I do not know enough.” It is “what if I break something?”

These moves help a lot.

### 9.1 See what changed

```bash
git diff
```

### 9.2 View history

```bash
git log --oneline
```

### 9.3 Discard local changes to one file before commit

```bash
git restore filename
```

### 9.4 Unstage a file after `add`

```bash
git restore --staged filename
```

### 9.5 Amend the last commit message or content

```bash
git commit --amend
```

These few commands already cover a lot of day-to-day accidents.

---

## 10. When do you need branches?

Many beginners become nervous as soon as they hear the word “branch.” A simple way to think about it is:

> **a branch is an independent experiment line.**

When is it worth creating one?

- when you are about to make a large change,
- when you do not want to disturb the stable main line,
- when you want to try two different directions,
- when you are collaborating on a feature.

The basic form is:

```bash
git checkout -b feature/quickstart
```

This means:

- create a new branch called `feature/quickstart`,
- switch to it immediately.

At the beginner stage, knowing how to create a branch is already enough. You do not need advanced merge strategy on day one.

---

## 11. Why document work especially benefits from Git early

Many people think Git is only for programmers. In fact, document-heavy work is an excellent match for Git because documents:

- get revised repeatedly,
- move across chapters,
- replace screenshots,
- refine wording,
- expand over time,
- sometimes need rollback.

This is especially true for textbooks, knowledge bases, and tutorials.

You are not maintaining a single “final output file.” You are maintaining a **continuously evolving text system**.

---

## 12. What you should learn first on GitHub

If you are just starting with GitHub, this is enough for now:

### 12.1 Create a repository

Understand that a repository is the project container, not just a file upload slot.

### 12.2 Read the README

The README is the project front page, not decoration.

### 12.3 Push your local repository there

Let GitHub become the remote host and sync point.

### 12.4 View commit history on the web

Understand that the website can also show history.

### 12.5 Learn pull requests later

Pull requests are important, but they are not the first thing a brand-new learner must master.

Make the local loop stable first. Then platform collaboration becomes much easier.

---

## 13. Ten very common beginner mistakes

### Mistake 1: memorizing commands without understanding their function

### Mistake 2: committing only after huge piles of changes

### Mistake 3: writing meaningless commit messages

### Mistake 4: not pulling before starting

### Mistake 5: forgetting to push before stopping

### Mistake 6: operating blindly without checking `status`

### Mistake 7: mixing Git and GitHub together

### Mistake 8: trying to learn advanced rebase / cherry-pick / reset patterns too early

### Mistake 9: being afraid of branches and doing every large experiment on main

### Mistake 10: treating commits like “final version markers” instead of change history

---

## 14. A smallest possible exercise set

### Exercise 1: initialize a repository

```bash
mkdir git-practice
cd git-practice
git init
```

### Exercise 2: create a README

```bash
echo "# My Git Practice" > README.md
```

### Exercise 3: make the first commit

```bash
git add README.md
git commit -m "docs: add initial README"
```

### Exercise 4: modify it and commit again

```bash
echo "\nThis is my first repo." >> README.md
git add README.md
git commit -m "docs: add repo description"
```

### Exercise 5: inspect history

```bash
git log --oneline
```

If you complete these five steps, Git is no longer just theory.

---

## 15. A very practical document-maintenance workflow

If you write Markdown notes, textbooks, tutorials, or a knowledge base, this workflow is immediately useful.

### Local structure

```text
project/
├── README.md
├── chapters/
├── images/
└── references/
```

### Daily routine

1. `git pull`
2. write content / adjust screenshots / reorganize structure
3. `git status`
4. `git diff`
5. `git add .`
6. `git commit -m "docs: ..."`
7. `git push`

This is enough to support a surprisingly long stretch of stable work.

---

## 16. Chapter summary

The most important things to carry forward from this quick-start chapter are:

- Git manages change, not just files.
- GitHub is a collaboration platform, not Git itself.
- Beginners should stabilize the daily loop before learning advanced tricks.
- The most important commands are:
  - `git status`
  - `git add .`
  - `git commit -m "..."`
  - `git pull`
  - `git push`
- Each small change deserves its own small commit.

Once this minimum workflow feels natural, branches, merges, conflicts, and rollback become much easier to learn because the skeleton is already in place.

---

## 17. Suggested next steps

After this chapter, continue in this order:

1. Read Chapter 1 to build the deeper mental model of why version control exists at all.
2. Then move into the working tree, staging area, and commit history.
3. After that, begin learning branches, remotes, synchronization, and collaboration.
4. Finally, connect that system to your real document repositories and project workflow.
