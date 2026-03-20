# Chapter 0: Practical Quick Start — Get Typora, Markdown, and LaTeX Working Fast

## What You'll Learn in This Chapter

- Understand the core value of Markdown: writing structured documents in plain text
- Master the most commonly used Markdown syntax: headings, paragraphs, lists, blockquotes, code blocks, links, images, and tables
- Write basic LaTeX formulas
- Set up a stable document directory structure
- Manage document history with Git
- Configure the Typora settings that matter most for writing

## Where This Chapter Fits

From Chapter 1 onward, this book systematically covers Markdown's design philosophy, how Typora works under the hood, specification differences, image path management, and long-term document maintenance. But before that, this chapter helps you build hands-on familiarity — letting you run through the most common writing operations without needing to understand every underlying detail first.

## What Markdown Is

Markdown is a way to write structured documents in plain text. You use simple symbols (`#` for headings, `-` for lists, `>` for blockquotes) to mark up document structure, then hand the file to a rendering tool (Typora, GitHub, a blog system, etc.) to produce a formatted page.

Markdown is not a WYSIWYG editor. What you write is source code; what you see is the rendered result. This "write source code" approach has a key advantage: you can open, edit, compare, and track these files with any text editor. For this reason, Markdown files are naturally suited for version control with Git.

## What Typora Is

Typora is a Markdown editor with a distinguishing feature: it renders as you type. When you enter Markdown syntax, Typora immediately displays the formatted result instead of leaving you staring at raw markup.

This doesn't mean Typora hides Markdown from you. On the contrary, the content you write in Typora is standard Markdown source code underneath. Typora simply makes the writing process smoother — you don't need to toggle between "edit source" and "preview result" modes.

## The Most Commonly Used Markdown Syntax

The skeleton of everyday document writing comes down to eight types: headings, paragraphs, lists, blockquotes, code blocks, links, images, and tables. Once you're comfortable with these eight, you can already produce well-structured documents.

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

`#` is the document's main title, `##` marks major sections, and `###` marks subsections within a section. Headings are structural backbone nodes, not font-size controls. In Typora's Outline panel, heading levels automatically generate a document navigation tree — the clearer your heading hierarchy, the more useful the outline becomes.

### Paragraphs

Separate paragraphs with a blank line:

```markdown
This is the first paragraph.

This is the second paragraph.
```

To force a line break within the same paragraph (without starting a new one), use `Shift + Enter`.

### Lists

Unordered lists use `-`:

```markdown
- Apples
- Bananas
- Oranges
```

Ordered lists use numbers followed by periods:

```markdown
1. Open Typora
2. Create a new document
3. Type a heading
4. Start writing
```

Lists can be nested. Indentation expresses hierarchy — it's not about visual formatting, but about showing which items belong to which parent.

```markdown
1. Set up your environment
   - Install Typora
   - Install Git
2. Create a repository
   - Create a chapters directory
   - Create an images directory
```

### Blockquotes

Blockquotes start with `>`:

```markdown
> This is a blockquote.
```

A blockquote is essentially a shift in voice — you can use it for tips, definitions, warnings, source excerpts, or supplementary notes, keeping them visually distinct from the main narrative.

### Code

Inline code is wrapped in backticks:

```markdown
Use `git status` to check the current state.
```

Code blocks use triple backticks with a language annotation:

````markdown
```bash
git status
git add .
git commit -m "docs: update chapter"
```
````

The language annotation is optional, but it enables syntax highlighting. Common language tags include `bash`, `python`, `json`, `yaml`, and `text`.

### Links and Images

Link syntax is `[display text](URL)`:

```markdown
[Typora website](https://typora.io)
```

Image syntax is `![alt text](path)`:

```markdown
![Diagram](../images/example.png)
```

Use relative paths for images. Keep image files in a dedicated `images/` directory, and establish a naming convention tied to chapters (e.g., `chapter-01-figure-01.png`). This saves a lot of trouble during long-term maintenance.

### Tables

```markdown
| Syntax | Purpose |
| --- | --- |
| # Heading | Define heading levels |
| - List | Indicate parallel items |
```

Tables work well for comparisons and summaries. They're not suitable for long-form text.

### Emphasis

```markdown
**bold**, *italic*, ~~strikethrough~~
```

Emphasis is supplementary — it's not the structural backbone of a document.

## LaTeX Formulas: Start with the Essentials

Typora natively supports LaTeX math formulas. For beginners, the following types cover most practical needs.

Inline formulas are wrapped in single `$` and embedded within a sentence:

```markdown
Frequency can be written as $f = \frac{1}{T}$.
```

Block-level formulas are wrapped in double `$$` and occupy their own line:

```markdown
$$
E = mc^2
$$
```

Commonly used formula syntax:

| Syntax | Result |
| --- | --- |
| `\frac{a}{b}` | Fraction a/b |
| `x^2` | Superscript (square) |
| `a_1` | Subscript |
| `\sqrt{x}` | Square root |
| `\sum_{i=1}^{n}` | Summation |
| `\int_a^b f(x)\,dx` | Integral |

Multi-line aligned formulas use the `align` environment:

```markdown
$$
\begin{align}
a+b &= c \\
d &= e+f
\end{align}
$$
```

## Document Directory Structure

Before you start writing, set up your directory structure. A good starting structure:

```text
my-notes/
├── README.md
├── chapters/
│   └── 01-my-first-note.md
└── images/
    └── 01-example.png
```

The core idea: keep content files and image files in separate directories, and use numbered filenames for easy sorting and maintenance.

## Typora Settings

You don't need to study every setting, but a few directly affect the writing experience. Confirm these early on.

**Markdown-related**: Make sure inline math is enabled, the Outline panel is visible, and the file tree is active.

**Image-related**: Set Typora to "automatically copy images to a specified directory on insert," and consistently use relative paths. Adopt a `chapter-XX-figure-XX.png` naming convention for image files.

**Keyboard shortcuts**: Prioritize mastering: create heading, insert list, insert code block, insert table, search, and open outline. You don't need to memorize them all at once — they become natural with use.

## Managing Documents with Git

Even if you're writing documents alone, Git is worth using. Documents undergo constant revision, deletion, rollback, and expansion — Git records every change and gives you a basis for every revert.

Minimum workflow:

```bash
git init
git add .
git commit -m "docs: add initial draft"
```

If you want remote backup (e.g., via GitHub):

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

The daily cycle: `git pull` (sync before starting) → write → `git add` + `git commit` (commit after completing a unit of work) → `git push` (push before finishing).

Most frequently used commands:

| Command | Purpose | When to use it |
| --- | --- | --- |
| `git status` | Check current change state | Anytime — make it a habit |
| `git add .` | Stage all changes | Before committing |
| `git commit -m "..."` | Record a change | After completing a unit of work |
| `git pull` | Pull latest from remote | Before starting work |
| `git push` | Push local commits to remote | Before finishing work |
| `git log --oneline` | View short commit history | When reviewing recent changes |
| `git diff` | View specific changes | Before committing, to double-check |

For a complete Git tutorial, see the **Git and GitHub** volume.

## Writing Template

If you're ready to start writing a tutorial or note right now, you can use this structure directly:

```markdown
# Document Title

## 1. What problem does this document solve?

A paragraph or two explaining the goal.

## 2. What you need

- Tool A
- Tool B
- A sample file

## 3. Step-by-step

### 3.1 First step

Describe the action clearly.

### 3.2 Second step

Continue.

## 4. Common issues

> Note: place the most common pitfalls here.

## 5. Summary

Summarize what the reader should remember most.
```

This template's value isn't that it "looks good" — it's that it's inherently a well-structured document, with clear heading hierarchy, goal explanation, step-by-step guidance, issue warnings, and a clean wrap-up.

## Hands-On Exercises

Before moving on, try completing these exercises yourself.

### Exercise 1: Write a Markdown Document

Requirements: 1 heading level 1, 2 heading level 2, 1 unordered list, 1 ordered list, 1 blockquote, 1 code block, 1 link.

### Exercise 2: Write 3 Formulas

One inline formula, one block-level formula, one formula with a fraction.

### Exercise 3: Manage with Git

```bash
mkdir typora-practice
cd typora-practice
git init

# After writing your document
git add .
git commit -m "docs: add first practice note"
```

If you've completed these three steps, Markdown, LaTeX, and Git are no longer just concepts to you.

## Chapter Summary

Markdown is a way to write structured documents in plain text; Typora is an editor that makes the process smoother. Together, they let you produce documents that are well-structured, easy to maintain, and naturally suited for version control.

The most commonly used syntax skeleton consists of eight types: headings, paragraphs, lists, blockquotes, code blocks, links, images, and tables. For LaTeX formulas, inline formulas, block-level formulas, fractions, superscripts/subscripts, and square roots cover most practical needs.

Before you start writing, set up a directory structure with images in a dedicated `images/` directory using relative paths. Use Git to track modification history and build the `status` → `add` → `commit` → `pull` / `push` daily cycle.

## Next Steps

The next chapter goes back to fundamentals and discusses a foundational question: why are Typora and Markdown not just a set of syntax tools, but a writing method? Once you understand that, everything that follows will feel more natural.
