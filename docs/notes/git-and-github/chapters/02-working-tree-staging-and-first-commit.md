# Chapter 2: Start Using Git for Real — Working Tree, Staging Area, and Your First Reliable Commit



Chapter 1 answered the conceptual question:

> why does version control exist at all?

This chapter answers the next practical question:

> when you actually start using Git, where exactly are your files, edits, staged changes, and commits living?

Many beginners do not fail because Git commands are impossible. They fail because they do not have a map in their head.

Commands like `git add`, `git commit`, and `git status` look understandable one by one. But once real work starts, everything blurs together.

The reason is usually simple:

> **no stable three-layer model of how Git handles work.**

That model is:

1. the working tree,
2. the staging area,
3. the commit history.

Once these three layers are clear, daily Git use becomes much easier.

---

## 1. The first big correction: editing a file is not the same as recording history

A lot of beginners unconsciously imagine Git as some kind of automatic archive system:

- I changed a file,
- Git knows that,
- so the history probably already “has it” in some sense.

That is the beginning of confusion.

Git’s default model is not:

> “you changed it, so I stored it.”

Git’s model is:

> you change files first, then choose what enters the next commit, and only then write that choice into history.

So in a normal Git workflow, at least three different things happen:

- a file changes,
- a chosen version of that change is staged,
- staged content becomes part of commit history.

These are not the same event.

---

## 2. Layer one: the working tree

The working tree is the real project directory you are editing right now.

Example:

```text
my-book/
├── README.md
├── chapters/
│   ├── 01-intro.md
│   └── 02-git-basics.md
└── images/
    └── cover.png
```

Suppose you:

- add a new section to `02-git-basics.md`,
- replace a screenshot,
- and tweak one line in `README.md`.

At this moment, those changes exist only in the **working tree**.

The working tree is:

- where real files live,
- where you keep editing,
- not yet the same thing as “prepared for commit,”
- definitely not yet the same thing as “recorded in history.”

A good mental picture is this:

> the working tree is your construction site.

---

## 3. Layer two: the staging area

The staging area is one of the most confusing Git concepts for beginners, but it is also one of the most valuable to understand early.

Think of it as:

> **the shortlist for the next commit**.

Git does not force every working-tree change directly into history. It lets you decide:

- which files belong in the next commit,
- which changes should wait,
- which edits still need cleanup before they deserve to be recorded.

The most common command is:

```bash
git add .
```

But the real meaning of this command is **not** “commit.”

Its meaning is:

> place current changes into the staging area.

You can also be more selective:

```bash
git add README.md
git add chapters/02-git-basics.md
```

That is often a better early habit, because it strengthens your sense of boundary.

### Why does Git have a staging area at all?

Because real work is messy.

In one session, you may have:

- fixed typos,
- added a new explanation block,
- replaced a screenshot,
- moved a section heading.

These changes do not always belong in one historical unit.

The staging area lets you organize history deliberately.

---

## 4. Layer three: commit history

When you run:

```bash
git commit -m "docs: explain working tree and staging area"
```

Git takes what is currently in the staging area and turns it into a formal historical checkpoint.

That checkpoint is a **commit**.

A commit expresses at least three things:

1. what changed,
2. when it was recorded,
3. that you judged this set of changes to be one meaningful step.

This is why a commit is not just “save.”

It is structured change recording.

### Why commit history matters

Not to brag about activity.

Commit history matters because it lets you:

- review old decisions,
- compare versions,
- locate the change that introduced a problem,
- recover a more stable earlier state.

History is an asset, not clutter.

---

## 5. The three layers in one standard workflow

Let’s connect the pieces.

Suppose you are writing a chapter.

### Step 1: modify the file

You add a new section to `chapters/02-git-basics.md`.

At this stage, the change exists only in the **working tree**.

### Step 2: inspect the state

```bash
git status
```

Git shows what changed and whether it is staged yet.

### Step 3: stage the file

```bash
git add chapters/02-git-basics.md
```

Now that version of the file is in the **staging area**.

### Step 4: commit it

```bash
git commit -m "docs: explain working tree, staging, and commit flow"
```

Now the staged content enters **commit history**.

So the real skeleton is not:

> change = commit

It is:

> change → choose → commit

That is the daily backbone of Git.

---

## 6. Why `git status` is the best beginner habit

If I could recommend only one Git habit to a beginner, it would usually be this:

```bash
git status
```

Why?

Because `git status` tells you how the three layers relate right now.

It shows:

- which files changed but are not staged,
- which files are already staged,
- which branch you are on,
- whether the working tree is clean.

That makes it the closest thing Git has to a dashboard.

### A good beginner rhythm

- after meaningful edits, run `git status`,
- before every commit, run `git status`,
- before pushing, it is often worth checking again.

This single habit prevents a huge amount of avoidable confusion.

---

## 7. Why beginners should not rely blindly on `git add .`

`git add .` is convenient and very common.

But if a beginner uses it blindly all the time, a hidden problem appears:

> you stop knowing what you are actually staging.

Maybe you intended to commit:

- one small explanation block,

but you accidentally included:

- a temporary scratch file,
- a test screenshot,
- an unfinished draft.

A more careful early habit is:

```bash
git status
git add specific-file
git status
```

Once your sense of change boundaries becomes stronger, batch staging becomes easier to control.

---

## 8. What a first reliable commit should look like

A lot of beginners make the first commit enormous:

- initialize folders,
- add README,
- write two chapters,
- add many screenshots,
- reorganize structure,
- fix wording everywhere,

and throw it all into one commit.

That is understandable, but not ideal for long-term maintenance.

### A better first reliable commit has three qualities

1. **clear boundary** — it does one kind of thing,
2. **clear explanation** — the message tells you what happened,
3. **future readability** — later-you can understand why it exists.

Examples:

```bash
git commit -m "docs: add initial repository structure"
```

Then:

```bash
git commit -m "docs: add first draft of chapter 2"
```

Then:

```bash
git commit -m "docs: refine staging area examples"
```

That kind of history stays readable.

---

## 9. Seven high-frequency commands that make sense after this chapter

### 1. `git status`
Inspect current state.

### 2. `git add <file>`
Stage one specific file.

### 3. `git add .`
Stage many current changes.

### 4. `git commit -m "..."`
Write staged content into history.

### 5. `git log --oneline`
View a compact history list.

### 6. `git diff`
Inspect differences before staging or committing.

### 7. `git diff --staged`
Inspect what is already staged and about to be committed.

These seven commands already support a large amount of document workflow.

---

## 10. A practical workflow for writers and document maintainers

If you write tutorials, notes, or textbooks, this workflow is especially useful.

### Before starting

```bash
git pull
```

### While working

After finishing one meaningful unit — such as:

- one subsection,
- one batch of screenshots,
- one cleanup pass,
- one example block,

prepare a small commit.

### Before committing

```bash
git status
git diff
```

### Commit

```bash
git add chapters/02-git-basics.md
git commit -m "docs: explain working tree, staging, and commit flow"
```

### Before stopping

```bash
git push
```

This rhythm gives you:

- readable history,
- clear change boundaries,
- much easier rollback and review.

---

## 11. Eight very common beginner mistakes

### Mistake 1: thinking file edits are already “in Git”

They are not. They begin in the working tree.

### Mistake 2: thinking `git add` is the same as commit

It is not. It only stages changes.

### Mistake 3: never checking `git status`

That destroys orientation.

### Mistake 4: making huge commits with unrelated edits

That makes history hard to read.

### Mistake 5: writing meaningless commit messages

Messages like `update`, `change`, or `fix` are too vague by themselves.

### Mistake 6: committing while the working tree is messy

That often drags in things that do not belong.

### Mistake 7: only knowing `git add .`, never selective staging

That weakens change control.

### Mistake 8: committing without reviewing `git diff`

Then you may not even know what you just recorded.

---

## 12. Chapter summary

This chapter establishes the essential three-layer Git model:

- **working tree**: the real files you are editing,
- **staging area**: the chosen content for the next commit,
- **commit history**: the formal recorded change history.

Once these layers are stable in your head, the following commands stop feeling mysterious:

- `git status`
- `git add`
- `git commit`
- `git diff`
- `git log`

All of them are really helping you inspect, move, or record the relationship among those three layers.

---

## Practice task

Do this minimum exercise yourself:

1. create one Markdown file,
2. write three paragraphs,
3. run `git status`,
4. stage the file with `git add <file>`,
5. inspect staged content with `git diff --staged`,
6. commit it:

```bash
git commit -m "docs: add first practice chapter"
```

Once you complete this sequence, Git is no longer just a command list. It starts becoming a system you can feel.

---

## Next chapter preview

The next chapter can continue into:

- daily repository rhythm after initialization,
- how to write cleaner commits,
- how to inspect history and compare changes,
- how to undo local work safely,
- and how Git begins serving real document workflow.
