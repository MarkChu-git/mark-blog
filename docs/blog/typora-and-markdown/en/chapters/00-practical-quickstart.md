---
title: "Chapter 0: Practical Quick Start - Get Typora, Markdown, and LaTeX Working Fast"
createTime: 2026/01/10 10:30:00
description: Help a complete beginner build a usable writing workflow with Typora, Markdown, LaTeX, and Git in the shortest time
tags:
  - typora
  - markdown
  - beginner
excerpt: This chapter is not a syntax cheat sheet, but a writing workflow accelerator that helps beginners get started with Markdown quickly.
---

# Chapter 0: Practical Quick Start — Get Typora, Markdown, and LaTeX Working Fast

> Language / 语言：[中文](../../zh/chapters/00-practical-quickstart.md) | **English**

This is not a lazy “compressed version” of the whole volume, and it is not a syntax-only cheat sheet.

Its goal is more direct:

> **help a complete beginner build a usable writing workflow with Typora, Markdown, LaTeX basics, and Git in the shortest realistic time.**

If what you want right now is:

- to start writing in Markdown quickly,
- to learn the most useful syntax first,
- to make Typora comfortable enough for daily work,
- to understand how Git fits into document writing,
- and to write basic formulas without fear,

then this is the right place to start.

After this chapter, you can return to the full textbook with much better momentum.

---

## 1. Who this chapter is for

This chapter is especially useful for:

- **complete beginners** who are touching Markdown or Typora seriously for the first time,
- **people who want immediate traction** instead of a long conceptual detour,
- **document-heavy learners** writing notes, tutorials, textbooks, lab reports, assignments, or blog posts,
- **practical readers** who want to get useful work done first and study theory second.

If you have tried to learn Markdown before but never truly adopted it, the problem is often not lack of intelligence. The problem is usually the learning sequence:

- too abstract,
- too fragmented,
- too syntax-centered,
- and not enough like a real writing workflow.

This chapter is meant to fix that.

---

## 2. The five most important takeaways

If you only remember five things from today, remember these:

1. **Markdown matters because of structure, not decoration.**
2. **Typora matters because it lets you stay close to the source text without making writing feel unpleasant.**
3. **The core document skeleton is small:** headings, paragraphs, lists, blockquotes, code blocks, links, images, and tables.
4. **For LaTeX, beginners only need a small useful subset at first:** inline math, display math, fractions, superscripts, subscripts, and square roots.
5. **For Git, you do not need advanced branching on day one.** If you can use `status`, `add`, `commit`, `pull`, and `push`, you already cover a large amount of real document work.

Once these basic moves become natural, you are already ahead of many people who have “watched tutorials” but never built a durable habit.

---

## 3. A 30-minute onboarding route

The fastest stable route looks like this:

### Step 1: Install Typora and start writing before customizing

Install Typora, open a file, and begin writing.

Do **not** start with:

- themes,
- fonts,
- export cosmetics,
- fancy templates,
- endless menu exploration.

What decides whether you keep using the tool is not visual polish. It is whether you can open it and write immediately.

### Step 2: Learn the eight most useful Markdown building blocks

The first set you should master is:

- headings,
- paragraphs,
- lists,
- blockquotes,
- code blocks,
- links,
- images,
- tables.

### Step 3: Learn only enough LaTeX to be useful

Start with:

- inline math `$...$`
- display math `$$...$$`
- fractions `\frac{a}{b}`
- superscripts `x^2`
- subscripts `a_1`
- square roots `\sqrt{x}`
- sums `\sum_{i=1}^{n}`

### Step 4: Create a stable document folder structure

At minimum, use something like this:

```text
my-notes/
├── README.md
├── chapters/
│   └── 01-my-first-note.md
└── images/
    └── 01-example.png
```

### Step 5: Use Git to manage change

Even if you are writing alone, use Git from the start. Documents also grow, get revised, get reordered, and sometimes need rollback.

---

## 4. Markdown essentials: the first syntax you actually need

These are not “all Markdown features.” They are the features you need first and use constantly.

### 4.1 Headings

```markdown
# Level 1 heading
## Level 2 heading
### Level 3 heading
```

Use them like this:

- `#` for the document title,
- `##` for major sections,
- `###` for subsections.

Common beginner mistakes:

- using only one heading level everywhere,
- using larger headings just to make text “look important,”
- treating headings like bold text.

The right mental model is simple:

> **headings are structure, not font size.**

### 4.2 Paragraphs

Normal writing is just normal text.

```markdown
This is the first paragraph.

This is the second paragraph.
```

If you only want a forced line break inside the same idea, use:

- `Shift + Enter`,
- or sometimes `<br>`.

### 4.3 Unordered lists

```markdown
- Apple
- Banana
- Orange
```

Use unordered lists for parallel items.

### 4.4 Ordered lists

```markdown
1. Open Typora
2. Create a new document
3. Add the title
4. Write the body
```

Use ordered lists for steps and sequences.

### 4.5 Nested lists

```markdown
1. Prepare the environment
   - Install Typora
   - Install Git
2. Create the repository
   - Make a chapters folder
   - Make an images folder
```

The key idea here is indentation.

> **Indentation expresses hierarchy, not visual decoration.**

### 4.6 Blockquotes

```markdown
> This is a blockquote.
```

Use blockquotes for:

- reminders,
- definitions,
- warnings,
- extracts,
- side comments.

Example:

```markdown
> Note: use relative image paths whenever possible.
```

### 4.7 Inline code

```markdown
Use `git status` to inspect the current state.
```

Inline code is ideal for commands, filenames, flags, and parameter names inside normal prose.

### 4.8 Code blocks

````markdown
```bash
git status
git add .
git commit -m "docs: update chapter"
```
````

Common language labels include:

- `bash`
- `python`
- `json`
- `yaml`
- `text`

### 4.9 Links

```markdown
[Typora official site](https://typora.io)
```

### 4.10 Images

```markdown
![Example image](../images/example.png)
```

What matters most is not just “can you insert an image?” It is whether:

- images live in a consistent `images/` folder,
- the path is relative,
- filenames follow a clear rule.

### 4.11 Tables

```markdown
| Syntax | Purpose |
| --- | --- |
| # Heading | Defines heading hierarchy |
| - List | Creates unordered items |
```

Tables are good for:

- comparisons,
- summaries,
- quick reference.

They are not good containers for long explanatory paragraphs.

### 4.12 Emphasis

```markdown
**bold**
*italic*
~~strikethrough~~
```

Emphasis is useful, but it is not the structural backbone of the document.

---

## 5. A copy-ready Markdown writing template

If you need to write a tutorial today, start with this:

```markdown
# My First Markdown Document

## 1. What problem this document solves

Use one or two paragraphs to explain the goal.

## 2. What you need

- Tool A
- Tool B
- One example file

## 3. Steps

### 3.1 Step one

Explain the action clearly.

### 3.2 Step two

Continue.

## 4. Common problems

> Note: put the most frequent pitfalls here.

## 5. Summary

End with the key lesson the reader should remember.
```

This template is not fancy, but it is stable and effective.

---

## 6. LaTeX formulas: only the useful beginner layer

Many beginners panic when they see formulas. In practice, most document writers use a small set of patterns again and again.

### 6.1 Inline math

```markdown
$f = \frac{1}{T}$
```

Use inline math when the formula belongs inside a sentence.

Example: frequency can be written as $f = \frac{1}{T}$.

### 6.2 Display math

```markdown
$$
E = mc^2
$$
```

Use display math when the formula deserves its own line.

### 6.3 Fractions

```markdown
$\frac{a+b}{c}$
```

### 6.4 Superscripts and subscripts

```markdown
$x^2$
$a_1$
```

### 6.5 Square roots

```markdown
$\sqrt{x^2+y^2}$
```

### 6.6 Summation

```markdown
$\sum_{i=1}^{n} i$
```

### 6.7 Integrals

```markdown
$\int_a^b f(x)\,dx$
```

### 6.8 Multi-line alignment

```markdown
$$
\begin{align}
a+b &= c \\
d &= e+f
\end{align}
$$
```

At the beginner stage, this subset is already enough for a large amount of practical work.

---

## 7. The Typora settings worth checking first

You do not need to learn every setting. But some settings have an immediate effect on writing comfort.

### 7.1 Markdown-related preferences

Pay special attention to whether Typora:

- enables inline math,
- shows the outline panel,
- shows the file tree,
- handles image insertion in a stable way.

### 7.2 Image handling preferences

If you plan to maintain documents over time, build this habit early:

- copy images into a fixed folder,
- use relative paths,
- use predictable filenames.

Examples:

- `chapter-01-figure-01.png`
- `chapter-01-figure-02.png`

### 7.3 Learn a few high-frequency shortcuts

Do not try to memorize everything at once. Learn the most useful actions first:

- create headings,
- create lists,
- insert code blocks,
- insert tables,
- search,
- open the outline.

---

## 8. A writing workflow is not just “finish once”

Real document work is usually not:

- write once,
- export once,
- forget forever.

It is more like:

- draft,
- improve structure,
- add screenshots,
- refine language,
- adjust folders,
- revise later.

That is exactly why Markdown plus Typora is so useful for long-term writing.

You are working with plain text, stable structure, clean version history, and a format that can later be reorganized, exported, or synchronized.

---

## 9. The smallest useful Git workflow for document writing

If this is your first serious contact with Git, do not begin with advanced branch models.

Start with this minimum loop:

### 9.1 Initialize a repository

```bash
git init
```

### 9.2 Check the current state

```bash
git status
```

### 9.3 Stage your changes

```bash
git add .
```

### 9.4 Commit them

```bash
git commit -m "docs: add first markdown draft"
```

### 9.5 Connect a remote repository if needed

```bash
git remote add origin <your-repo-url>
```

### 9.6 Push

```bash
git push -u origin main
```

### 9.7 Pull

```bash
git pull
```

These actions already cover a huge amount of solo document maintenance.

---

## 10. The Git commands document writers use constantly

The following table is worth revisiting until it becomes natural.

| Command | Purpose | Typical use |
| --- | --- | --- |
| `git status` | Check current state | Before every commit |
| `git add .` | Stage changes | When preparing a commit |
| `git commit -m "..."` | Record a change set | After each small milestone |
| `git pull` | Get latest remote changes | Before starting work |
| `git push` | Send local commits to remote | After finishing a session |
| `git log --oneline` | Review commit history | To see recent work quickly |
| `git diff` | Inspect exact changes | Before committing |

---

## 11. A practical daily rhythm for writing

If your work is document-heavy, this routine is excellent:

### Before working

```bash
git pull
```

### While writing

Commit after meaningful small units such as:

- one section structure,
- one subsection finished,
- one set of screenshots added,
- one round of language cleanup.

### When committing

```bash
git add .
git commit -m "docs: refine chapter 1 structure"
```

### Before stopping

```bash
git push
```

This creates a powerful feeling very quickly:

> every change is recorded, and every rollback has a handle.

---

## 12. Exercises you can do right now

Do not postpone this. Start with a small practical set.

### Exercise 1: Write a 300-word Markdown document

Requirements:

- 1 level-1 heading,
- 2 level-2 headings,
- 1 unordered list,
- 1 ordered list,
- 1 blockquote,
- 1 code block,
- 1 link.

### Exercise 2: Write three formulas

- one inline formula,
- one display formula,
- one formula with a fraction.

### Exercise 3: Put the file under Git

```bash
git init
git add .
git commit -m "docs: add first practice note"
```

If you finish these three exercises, you are no longer just “someone who watched a tutorial.”

---

## 13. Chapter summary

The key lessons from this quick-start chapter are:

- learn the most frequently used moves first,
- treat structure as more important than visual tricks,
- learn only the most useful LaTeX subset first,
- configure the Typora settings that directly affect writing comfort,
- and build the minimum Git loop:
  `status` → `add` → `commit` → `pull` / `push`.

Once this minimum workflow feels natural, the full textbook becomes much easier to absorb — and much more interesting — because you are no longer reading in the abstract. You are already using the system.

---

## 14. Suggested next steps

After this chapter, continue like this:

1. Read Chapter 1 for the long-term writing mindset behind Typora and Markdown.
2. Read Chapter 2 to stabilize folders, images, and relative paths.
3. Read Chapter 3 for a fuller treatment of Markdown, LaTeX, and Typora settings.
4. Read Chapter 4 to learn advanced features like table alignment, task lists, and Mermaid diagrams.
5. Then move to the quick-start chapter in **Git and GitHub** so that your writing workflow and version control start working together.
4. Then move to the quick-start chapter in **Git and GitHub** so that your writing workflow and version control start working together.
