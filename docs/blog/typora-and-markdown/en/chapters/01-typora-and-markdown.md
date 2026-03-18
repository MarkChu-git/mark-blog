---
title: "Chapter 1: Using Typora and Markdown Like Real Writing"
createTime: 2026/01/11 10:00:00
description: "Deeply understand Markdown's core philosophy: readability, writability, and content-first"
tags:
  - typora
  - markdown
  - writing
  - concepts
excerpt: Markdown's original purpose was not to make writing more complicated, but to pull writing back to a "content-first" state.
---

# Chapter 1: Using Typora and Markdown Like Real Writing

> Language / 语言：[中文](../../zh/chapters/01-typora-and-markdown.md) | **English**

## 1. First, Understand This: Markdown Is Not a "Fancy Syntax," It's a Writing Tool

Many people, when first encountering Markdown, have the same question: if Word can already write documents, why learn another set of syntax that looks a bit like code? This question is not naive at all—in fact, it hits the nail on the head. If you don't first understand what problem Markdown actually solves, the subsequent syntax learning can easily devolve into mechanical memorization: how many hash marks for headings, how many asterisks for bold, how to insert images, how to write tables. On the surface you've learned quite a bit, but when you actually write documents, it still feels awkward.

Markdown's original purpose was not to make writing more complicated, but to pull writing back to a "content-first" state. John Gruber, in the earliest Markdown syntax specification, emphasized that Markdown's core pursuit is "readability and writability." In other words, a Markdown text, even before being rendered into a beautiful webpage, should be clear enough and natural enough just looking at the plain text itself, without making people feel like they're reading a bunch of indecipherable tags. This idea is very important—it means Markdown is not trying to replace all typesetting tools, but rather to minimize interruptions from typesetting actions while you're writing.

In traditional rich text editors, writers often find themselves thinking about content while simultaneously dealing with styles: is the font size too large, is the paragraph spacing misaligned, are the table lines crooked, should the image be moved a bit to the left. This way of working isn't unusable, but it constantly pulls attention from "what I want to express" toward "does it look enough like a finished product." Markdown's approach is exactly the opposite. It encourages you to first write the structure clearly, then let the software present the style based on that structure. In other words, Markdown first cares about "this is a heading," "this is a list," "this is a quote," "this is code," and only then cares about what these things ultimately look like.

Precisely because of this, Markdown is particularly suitable for knowledge notes, technical documentation, course materials, project descriptions, blog drafts, paper drafts, and long-term accumulative writing. As your materials grow, you'll gradually discover a fact: what's truly difficult to manage is not "how to make one page look very nice," but "how to keep dozens or hundreds of documents clear, stable, and portable." Markdown is very strong at this, because its foundation is ordinary text files. Plain text means searchable, version-controllable, portable, long-term preservable, and also means you won't be tightly bound by the proprietary format of a single software.

## 1.5. Why the Same Markdown Displays Differently in Different Places

Many beginners, when just starting to learn Markdown, encounter a phenomenon that seems strange but is actually very normal: the same `.md` file looks fine in Typora, but when placed on GitHub, some details aren't exactly the same; switch to a different static site generator, and the behavior of tables of contents, line breaks, tables, footnotes, and task lists might change again. This leads to a misconception that Markdown itself is "unstable."

Strictly speaking, what's unstable is not the idea of Markdown itself, but rather that historically, Markdown's definition was too brief and too focused on intuition, resulting in many edge cases not being completely nailed down. The CommonMark specification emerged precisely because the original Markdown specification, while proposing a clear design philosophy, didn't fully write many parsing details into machine-verifiable rules. For example, how much indentation sub-lists need, whether headings must have blank lines before them, whether blank lines in lists change structure, how line-end breaks actually count as hard breaks—these have all shown differences across implementations.

This is very important for beginners because it directly determines your learning approach. You shouldn't treat Markdown as a set of "absolute syntax that's 100% consistent everywhere once memorized," but rather understand it as a text writing system with a common core but with extensions and implementation differences across different ecosystems. Typora tends to support common extensions close to GitHub Flavored Markdown; GitHub itself has a set of rendering rules oriented toward repository collaboration scenarios; while CommonMark is more like providing a stricter common foundation for these behaviors.

Therefore, the truly sound learning approach is not to pursue "memorizing all details of all platforms," but to first master the most stable basic writing style, then gradually understand platform differences. For example, leaving blank lines before and after headings, adding a space after hash marks, writing list indentation clearly, using relative paths for images as much as possible, not mixing too many fancy writing styles—these all belong to conservative writing habits that are less likely to cause problems across multiple platforms. You'll find later that these writing habits not only make documents more stable, but also make the source text itself cleaner.

## 2. Why Typora Is Suitable for Beginners

After understanding Markdown's value, the second question arises: since Markdown is essentially text, can't I just use any text editor? Theoretically, yes. You could even use Notepad, VS Code, Vim, or any editor that can save plain text to write Markdown. But theoretically "can" doesn't equal practically "suitable for getting started."

The reason Typora has long been viewed by many as one of the best entry points for Markdown is that it combines "source text writing" and "WYSIWYG preview" very naturally. When you type `# Level 1 Heading` in Typora, it doesn't show you raw code on the left and a separate preview on the right like many dual-pane editors do, but directly renders it as a heading effect in the same document. When you move the cursor back, you can see the Markdown structure behind it. This experience is especially friendly for beginners because it greatly reduces the sense of unfamiliarity of "I'm writing a bunch of strange symbols."

More importantly, Typora hasn't completely hidden Markdown in pursuit of "looking good." It's not turning Markdown into another Word, but using a smooth approach to gradually make you realize: oh, so this heading has `#` behind it, so this checkbox has `- [ ]` behind it, so this table is actually still vertical bars and dashes. In other words, Typora isn't helping you bypass Markdown, but helping you learn Markdown.

According to Typora's official support documentation, it supports many common extension features of GitHub Flavored Markdown, such as task lists, fenced code blocks, tables, strikethrough, footnotes, YAML Front Matter, table of contents, mathematical formulas, and some enhanced syntax. Typora also provides outline view, word count, theme switching, image management, export to PDF/HTML, relative path handling, mathematical formulas, and image upload—features very useful in actual writing. These capabilities combined make it suitable not only as a "Markdown learner" but also as a "long-term writing workbench."

## 3. What to Expect Before Installing Typora

If you've never used Typora, it's best to establish correct expectations before installation. Typora is not a complex typesetting system; its strength lies in clear structure, smooth writing, and document management, not in adjusting visual effects to InDesign-level precision. In other words, you should see it as a tool leaning toward writing and knowledge production, not a tool emphasizing pixel-level layout design.

Additionally, Typora has not been an indefinitely free Beta software since version 1.0. The official documentation clearly states that it provides a trial period, and long-term formal use requires purchasing a license. It's good to know this in advance, because many Chinese internet articles still have the old impression that "Typora is a free miracle tool." If you plan to use it as a long-term main tool, evaluating it as software worth paying for will be more realistic than holding the attitude of "just use it for a while."

After installation, when you first open Typora, the most worthwhile thing to do is not to rush into typing a bunch of syntax, but to first observe its working interface: whether the file tree is displayed on the left, whether the outline is displayed on the right, what entries related to Markdown, export, images, and preferences are in the top menu, and whether there are functions you need to enable in preferences. This step is like familiarizing yourself with a new classroom. You don't have to remember every button at first, but you should at least know roughly where the doors, windows, blackboard, and switches are.

## 4. How to Look at Typora's Basic Interface

When first opening Typora, many people are startled by its "quietness." Compared to some editors with densely packed toolbars, Typora appears very restrained. It's precisely this restraint that constitutes its writing advantage. What you really need to familiarize yourself with are mainly four areas: the document editing area, the file sidebar, the outline view, and the menu and preferences.

The document editing area is where you'll spend the most time. Most work happens here. Unlike dual-pane preview editors, Typora's document area directly renders Markdown into an effect close to the final reading form. When you input headings, paragraphs, lists, code blocks, tables, and images here, Typora will gradually help you complete structure recognition as you type. For beginners, this creates a very important psychological experience: you won't feel like you're "writing code," but more like you're "writing content."

The value of the file sidebar usually only truly manifests after you've written your twentieth document. Many beginners initially only care about how to write a single document, but ignore how to manage document collections. In fact, once you start treating Markdown as a long-term writing method, you'll face issues of folders, naming, categorization, chapter organization, image directories, and separating drafts from final versions. Typora's file tree helps you directly understand "documents" as "files in directories," which is very critical for long-term management. Because Markdown ultimately isn't a black box object in a database, but `.md` files actually lying in folders.

The outline view corresponds to "structural awareness." When an article gets longer and longer, what really helps you stay clear is often not the paragraphs themselves, but the heading hierarchy. If you write headings logically, the outline will support the article like a skeleton. Typora automatically generates an outline based on heading hierarchy, allowing you to quickly jump through it, and conversely check whether the article has structural imbalance. For example, if one section suddenly has a dozen parallel subsections while another section only has two or three sentences, this usually means content organization isn't stable enough.

As for menus and preferences, you don't need to memorize them all at once. You just need to first know where several important categories of functions are. For example, actions like inserting images, tables, code blocks, and mathematical formulas can usually be found in the menu; exporting to PDF, HTML, Word, etc. is also in the menu; whether to enable inline formulas, superscripts/subscripts, highlighting, image processing strategies, themes, auto-numbering, and other behaviors are mainly controlled in preferences. For beginners, a very practical method is: first understand functions through menus, then gradually memorize shortcuts. Don't do it the other way around by forcing yourself to memorize shortcuts at the beginning—that easily turns the learning experience into a burden.

## 5. When Writing Markdown, Master "Structure" First, Not "Special Effects"

Many introductory tutorials like to first list a string of syntax items: headings, bold, italic, links, images, tables, code, formulas, footnotes, task lists, strikethrough, HTML... It looks comprehensive, but after reading, beginners often haven't truly mastered writing. The reason is that Markdown's most core capability is actually not "how many tricks you know," but "whether you can write content with clear structure."

So the learning order must be right. What you should master first are headings, paragraphs, lists, quotes, and code blocks. Because these elements determine the most basic skeleton of a document. Inline emphasis like bold, italic, and strikethrough are certainly important too, but they're more like rhetoric, not skeleton. If you don't build the skeleton well, no amount of rhetoric can save a structurally chaotic document.

### 1. Headings: Not Font Size, But Hierarchy

In Markdown, the meaning of headings is first not "looking big," but "representing hierarchy." Level 1 headings usually correspond to the main theme of the entire document, level 2 headings correspond to major chapters, level 3 headings correspond to subsections within chapters, and further down are finer levels. Both Typora's official documentation and Markdown Guide clearly adopt the ATX heading style starting with hash marks `#`, which is the most common and most compatible approach today.

For example, these lines:

```markdown
# Getting Started with Typora
## Installation and Interface
### File Tree and Outline
```

Visually they'll display as headings of different sizes, but what you should really see is their structural relationship: the second line is a child of the first line, the third line is a child of the second line. If you treat headings purely as enlarged fonts, it's easy to have hierarchical chaos, such as a level 3 heading without a preceding level 2 heading, or headings at the same level carrying completely different granularities of content. These problems aren't obvious in short texts but become very fatal in long texts.

Markdown Guide also specifically mentions a compatibility habit: it's best to leave a space between the hash mark and the heading text, and leave blank lines above and below headings. This is a very worthwhile writing habit to develop. Although many renderers can tolerate non-standard writing, when crossing platforms and tools, the most stable approach is always standard writing. Writing stably from the beginning will save you a lot of trouble when migrating tools later.

### 2. Paragraphs: Learning to "Leave a Blank Line" Is More Important Than Learning to Press Enter

In Word, many people's understanding of paragraphs is "press Enter once to break the line." But in Markdown, paragraphs and line breaks are not the same concept. Both Daring Fireball's original syntax specification and Typora's official documentation emphasize that a paragraph consists of one or more consecutive lines of text, and different paragraphs are usually separated by blank lines.

What does this mean? It means that after you finish writing a paragraph, if you only do a normal line break without leaving a blank line, many Markdown parsers will still treat it as part of the same paragraph, not a new paragraph. Because Typora is an editor oriented toward writing experience, it helps you handle many input actions more naturally, so beginners in Typora often don't realize the importance of "paragraph rules." But if you later put documents on GitHub, static websites, blog systems, note tools, or other parsers, standard paragraph writing will become very important.

A very useful principle is: if you want readers to feel "here starts another layer of meaning," then use blank lines to separate paragraphs. Don't pile all content into one block, and don't start a new paragraph after every sentence. The rhythm of paragraphs is essentially arranging the breathing of your thoughts.

### 3. Line Breaks: Why You Pressed Enter But Didn't Get the Effect You Expected

One of the most common confusions when first learning Markdown is: I clearly broke the line, why is the display result still connected? The answer to this question actually reflects Markdown's design philosophy. Markdown defaults to assuming that "a single line break in plain text" is often just a visual line fold the author made while editing, not an intention to produce a real line break in HTML. Therefore, a true inline line break usually requires an additional signal.

Markdown Guide suggests two methods with the best compatibility: one is to keep two spaces at the end of the line before pressing Enter; another is to use `<br>` at the end. Typora itself provides an editor-level operation like `Shift + Enter` to make it more convenient for you to produce single-line break effects. Here you need to establish a clear concept: paragraph separation and inline line breaks are not the same thing. The former affects text structure, the latter affects intra-paragraph presentation. After understanding this, you won't be confused when writing poetry, addresses, signatures, or resume information.

### 4. Lists: Not for "Looking Good," But for Expressing Parallelism and Sequence

Lists in Markdown have two major categories: unordered lists and ordered lists. Unordered lists are suitable for expressing parallel items, ordered lists are suitable for expressing steps, processes, and sequences. Both Typora and Markdown Guide support common unordered list symbols, such as `-`, `*`, `+`, but in actual writing it's best to unify on one. My recommendation is very clear: use the minus sign `-` uniformly in daily text, as it's most stable and cleanest.

For example:

```markdown
- Install Typora
- Create your first Markdown document
- Learn headings and paragraphs
```

If you're writing operation steps, ordered lists are more suitable:

```markdown
1. Open Typora.
2. Create a new document.
3. Enter a level 1 heading.
4. Save as a .md file.
```

Note that the numbers in ordered lists don't necessarily have to strictly increment item by item in many parsers; renderers usually automatically calculate numbering. But from readability and maintainability perspectives, it's still best to write in actual order in the source file. Because what you're ultimately maintaining is a source text that "humans also need to read," not just input for machines.

The truly difficult part of lists is not single-level lists, but nested structures. For example, when a step needs supplementary explanation, then nests sub-steps, then inserts a code block, indentation becomes very important. Markdown Guide clearly reminds: when continuing to insert paragraphs, quotes, or code blocks in lists, you usually need four spaces or one Tab of indentation. Many people initially think Markdown is very simple, but then everything gets messed up when they encounter complex lists—essentially because they haven't truly digested the fact that "indentation represents hierarchy."

### 5. Blockquotes: Not a Decorative Box, But "Borrowing Another Layer of Voice"

Blockquotes start with `>`. Many people, after learning it for the first time, think it's just a gray border effect. Actually, the real meaning of blockquotes is that they introduce a kind of "non-main narrative" voice into the main text. You can use them for tips, definitions, original text excerpts, warnings, annotations, teacher comments, or even supplementary explanations to the preceding text.

For example:

```markdown
> Markdown's design focus is not on typesetting effects, but on readability and writability.
```

Once you understand the semantics of quotes, you won't abuse them. In truly good documentation, blockquotes usually only appear when "a secondary tone is needed here," not scattered everywhere just to make the page look richer.

### 6. Code Blocks: When to Use Them and Why Not to Overuse Them

If you're writing technical documentation, command tutorials, program notes, or configuration instructions, code blocks will almost certainly appear frequently. Typora's official documentation states that Typora supports GitHub Flavored Markdown style fenced code blocks, which is the three-backtick start and three-backtick end writing style. This is more intuitive than the earliest Markdown's "four-space indented code block" and more suitable for most scenarios today.

For example:

````markdown
```bash
mkdir notes
cd notes
```
````

In Typora, you just need to type three backticks and press Enter, and it will automatically generate a code block input area. If you add a language identifier, like `bash`, `python`, `javascript`, Typora can do syntax highlighting.

The real value of code blocks is to separate "text that needs to be preserved as-is" from ordinary narration. Commands, configurations, program snippets, JSON, YAML, log samples all belong to this situation. Conversely, if you just want to mention a command name or variable name in a sentence, inline code is more suitable, rather than starting a big block at every turn. Good document writing is not about having more code blocks being more professional, but about using blocks when blocks are needed and inline when inline is needed.

## 6. The Role of Inline Syntax Is Precise Emphasis, Not Painting Colors Everywhere

After you can already write documents with basic structure, you should then enter inline syntax. The main role of inline syntax is to create weight, distinction, and hints within sentences. The most common include bold, italic, inline code, links, and images.

### 1. Bold and Italic

Bold is commonly used to emphasize key concepts, italic is commonly used for light emphasis, terminology, book titles, foreign words, or tone changes. Both Markdown Guide and Typora's official documentation support two writing styles with asterisks and underscores, but for compatibility and consistency, it's usually recommended to prioritize asterisks, especially when sandwiched between words or variables in text, as it's less likely to cause ambiguity.

For example:

```markdown
This is a **key concept**.
This is *light emphasis*.
```

What really needs to be guarded against is overusing emphasis. Many beginners, once they learn bold, want to bold all important words in a paragraph, resulting in reading like the whole page is shouting key points. Once emphasis is excessive, it loses its emphasizing effect. You should understand bold as "giving the reader's eye a focal point," not "every sentence asserting its presence."

### 2. Inline Code

Inline code uses single backticks to wrap, such as `` `mkdir` ``, `` `README.md` ``, `` `Ctrl + Shift + P` ``. It's particularly suitable for appearing within sentences to represent command names, file names, parameters, variables, paths, or very literal input content.

For example: "Please save the file as `notes.md`, then execute `git add .` in the terminal."

Inline code has a very unique temperament: it tells readers in the main text, "for the following content, don't understand it as ordinary semantics, but treat it as a character string that needs precise identification." This is extremely important in technical writing. For example, `-` and `-`, `/` and `\`, case differences, extension differences—plain text is easy to miss, while inline code can greatly reduce the probability of misreading.

### 3. Links

Links are one of Markdown's most typical and practical capabilities. The most common is inline links:

```markdown
[Typora Official Support Documentation](https://support.typora.io/)
```

In writing, links are not just "putting a URL." They are the way documents establish external connections. A mature knowledge base won't write itself as a closed world, but will provide sources, extended reading, official documentation, and reference materials at key positions. Typora also supports reference-style links, though in the beginner stage you can first get familiar with inline links. Reference-style links are more suitable for reusing the same URL multiple times in long documents, or maintaining a cleaner visual effect in the main text.

### 4. Images

Image syntax looks similar to links, just with an exclamation mark in front:

```markdown
![A diagram](./images/example.png)
```

But what's truly important is not this line of syntax itself, but understanding that images in Markdown are not "data embedded inside the file," but "references to an image file." Typora's official Images documentation explains this very clearly: Markdown files themselves are plain text, so images are usually referenced through URLs, absolute paths, or relative paths.

This has a very large impact. Because it means that as long as you manage image paths well, Markdown documents will be very portable; conversely, if today you drag one image to the desktop, tomorrow one image comes from the downloads directory, and the day after one image is in the WeChat temporary directory, then when you move the entire set of documents to another computer, nine times out of ten you'll get a field of red X's.

Therefore, from the beginning it's recommended you develop a work habit: for each tutorial or each project directory, establish relatively stable image folders, such as `images/` or `assets/`, then have Typora copy images to this directory when inserting them, and use relative paths. This way, whether it's Git management, syncing to cloud storage, sending to others, or publishing to GitHub, it will be much easier in the future.

## 7. Typora's Most Worthwhile Practical Capabilities for Beginners to Master

If Markdown syntax solves "how to write documents," then many of Typora's features solve "how to actually use documents." The following capabilities are very worth practicing during the beginner stage because they directly affect your future workflow quality.

### 1. Use Typora to Create and Save Your First Document

The point beginners most easily overlook is to turn "drafts" into "files" as early as possible. Many people will open Typora and write casually, writing for a long time without saving, resulting in image paths, file locations, relative directories, and export locations all being in a floating state. The correct approach is: create a folder first at the beginning, then save your document in this folder.

For example, if you plan to write a set of materials about writing tools, you can first establish a directory like this:

```text
writing-course/
├── docs/
├── images/
└── 01-typora-and-markdown.md
```

Then open or save `01-typora-and-markdown.md` in Typora. The benefit of doing this is that the entire article has a clear belonging directory from the beginning. Future illustrations, exports, version management, synchronization, and publishing will all revolve around this directory. Much of the later chaos actually stems from being too casual about file placement in the early stage.

### 2. Learn to Use the Outline, Not Just the Scrollbar

Locating long texts using only the scrollbar is a very inefficient habit. Once an article exceeds a few thousand words, you should rely on the outline. Because the scrollbar only tells you "position," while the outline tells you "structure."

In Typora, when you've established a clear heading hierarchy, the outline is automatically generated. At this point you should often do two things. First, use the outline to jump to different chapters, rather than scrolling back and forth. Second, treat the outline as a self-checking tool, observing whether a section is too long, whether a level is broken, whether there are duplicate heading names, granularity imbalances, and other issues. Writing like this long-term, you'll gradually form the writing habit of "first think about the skeleton, then fill in content."

### 3. Learn to Set Image Processing Strategies

Typora's official documentation about images is very detailed, with the most noteworthy for beginners being "how to handle source files when inserting images." By default, Typora can directly reference the original path of images. But this is often not stable enough. A more suitable approach for long-term knowledge bases is to open image insertion related settings and have Typora copy images to a specified directory when you drag, paste, or insert local images.

Once you set it up this way, the relationship between documents and materials will be much more stable. For personal long-term writing, this is almost the watershed from "casual notes" to "maintainable material library." You'll find that good knowledge management never relies on how advanced the software is, but on forming stable file organization habits from the beginning.

### 4. Learn to Export, But Don't Rely on Export Patching Too Early

Typora's export capability is strong, able to export to PDF, HTML, and even other formats. Many beginners get especially excited, feeling they can finally "turn it into a formal document with one click." This excitement is understandable, but I more recommend you see export as "the last step," not "a tool to patch up layout while writing."

A truly mature process should be: first write the Markdown structure clearly, then let the style system take over the layout when exporting. In other words, export is the result, not a crutch. If you rely on a lot of manual patching before export every time you write a document, that usually means the structural design earlier wasn't clear enough.

### 5. Learn About Themes and Customization, But Don't Get Obsessed with Changing Skins in the Beginner Stage

Typora has a theme system, which is appealing because it makes the writing interface more stylish. The official site also provides themes and some CSS customization related capabilities, even able to achieve advanced effects like automatic heading numbering. For example, Typora's official support documentation provides a solution for implementing automatic heading numbering with CSS.

However, in the beginner stage I don't recommend you spend a lot of time on "which theme looks better." Because themes and color schemes are optimizations of user experience, not the core of writing ability. What should be stabilized first are: directory structure, file naming, heading hierarchy, image paths, code block usage habits, and export habits. After these things are all stable, then going to fiddle with CSS, customizing table of contents numbering, page width, fonts, code highlighting—that's icing on the cake, not putting the cart before the horse.

## 8. How to Truly Start Writing Your First Markdown Article

Now, let's condense all concepts into a very practical question: if you're using Typora to write Markdown for the first time today, how should your first article actually start?

The best way is not to copy from a syntax table, but to first pick a very small, very specific topic that you're familiar with, such as:

- My reading notes workflow
- How to organize course assignments
- How to back up computer materials
- How to configure a new project directory

Then write according to the following approach:

- First write a level 1 heading as the article theme.
- Then write a short introduction telling readers what problem this article will solve.
- Then arrange three to five level 2 headings, each level 2 heading only responsible for one clear small topic.
- Under each small topic, first write complete paragraphs, rather than rushing to stuff various formats inside.
- Only when you really need to emphasize key points, show commands, insert images, or list steps should you use corresponding syntax.

This writing style looks plain but is very effective. Because it forces you to prioritize making the article clear, rather than prioritizing making the page pretty. Many people never learn Markdown not because the syntax is too difficult, but because they put their attention in the wrong place from the beginning.

Below is a minimum article skeleton very suitable for beginners to imitate:

```markdown
# My First Markdown Article

This article is for practicing basic Typora and Markdown writing. I'll first explain the writing goal, then introduce the actual approach in several parts.

## Why I'm Writing This Article

Write a complete paragraph here explaining the motivation.

## What I've Prepared

Here you can use a list, or write it directly as paragraphs.

## Actual Steps

Here it's suitable to write an ordered list, and if commands are involved, insert code blocks.

## What I Got After Writing

Make a summary here, explaining the results and gains.
```

You'll find that this skeleton is not complicated at all, but it already contains the most critical thinking in Markdown writing: theme, paragraphs, chapters, steps, summary. As long as you're willing to use this skeleton to repeatedly write a few articles, syntax will naturally become familiar in the process, rather than being crammed into your brain through rote memorization.

## 9. A Complete Beginner Demonstration: From Blank Page to a Decent Document

Below we'll do a demonstration closer to real writing. Suppose you want to write a short article called "How to Organize Course Notes." You can develop it like this in Typora.

First input the title:

```markdown
# How to Organize Course Notes
```

Then write an introduction, not too long, but explain the problem:

```markdown
Many people take a lot of course notes, but after a while it becomes very difficult to find the content they need. This article wants to introduce a course note organization method that's easier to maintain long-term.
```

Then set up three level 2 headings:

```markdown
## First Establish Folders by Course
## Then Split Documents by Topic
## Finally Manage Images and Attachments Uniformly
```

At this point, the skeleton of this article has actually emerged. Next you fill in content under each section. If a section needs to list steps, use an ordered list; if you need to show directory structure, use a code block; if you need to explain a key concept, use bold emphasis; if you need to show a diagram, insert an image.

For example, under the "First Establish Folders by Course" section, you can provide a directory structure:

````markdown
```text
courses/
├── math/
│   ├── 01-limit.md
│   └── images/
├── physics/
└── history/
```
````

Under the "Finally Manage Images and Attachments Uniformly" section, you can explain why relative paths are recommended and how Typora helps you copy images to specified directories. Writing a document like this, readers will feel you're seriously teaching them to establish a working method, not just demonstrating a few syntax actions.

## 10. Images, Paths, and Folders: The Lesson Beginners Most Easily Fall Into and Should Learn Earliest

When many people learn Markdown, their attention is almost entirely on "visible" syntax like headings, bold, lists, and code blocks, but they treat images and paths as minor issues. As a result, when writing the first couple of articles there's no feeling, but once the number of documents increases, or when preparing to change computers, sync to GitHub, or export elsewhere, problems will erupt collectively: images can't be found, paths are all broken, documents can open but illustrations are all red X's, others can't see any illustrations after getting the folder.

These types of problems appear frequently because many people haven't truly understood the relationship between Markdown files and resource files. Markdown documents are not a closed box that packs everything inside. They are essentially text, and images, attachments, illustrations, covers, and diagrams are usually in external files, referenced through paths and links. Precisely because of this, whether Markdown documents are written stably often depends not only on whether you know the syntax, but also on whether your file system has order.

Typora's official documentation about images makes it very clear: images can come from network addresses, or from local absolute paths or relative paths; when inserting images, Typora can either directly reference the original path, or copy images to a specified directory, then change the links in the document to relatively stable reference methods. For temporary records, directly dragging an image in might be enough; but for textbooks, note libraries, course materials, and any repository prepared for long-term maintenance, the more stable approach is almost always to archive images into the directory belonging to the current document or the directory belonging to the current volume.

For example, if you're writing a textbook volume, rather than letting images scatter across the desktop, downloads directory, and chat cache, a more reasonable structure is often like this:

```text
books/
└── typora-and-markdown/
    ├── chapters/
    │   └── 01-typora-and-markdown.md
    └── images/
        ├── chapter-01-figure-01.png
        └── chapter-01-figure-02.png
```

When you adopt this structure, image references in documents can be written as relative paths. The value of relative paths is not only "looking concise," but more importantly they move together with the entire directory. As long as the directory structure of the entire textbook volume isn't messed up, you can copy this folder to another computer, sync to cloud storage, push to GitHub, or even send to others, and they can usually see the same images. Conversely, if you reference an absolute path under some system directory in Markdown, such as the desktop or downloads directory, then this document can basically only work normally on your own current machine.

GitHub's official documentation also specifically emphasizes that when referencing files and images inside repositories, prioritize using relative links rather than absolute links. The reason is very direct: relative links are naturally bound to repository structure; after switching branches, copying repositories, or others cloning it down, links are still more likely to remain usable. If you write repository internal documents as a bunch of absolute URLs, it looks like it works, but it loses the most precious part of Markdown's capability—portability.

So, for people just getting started, I highly recommend quickly establishing a simple but stable principle: where documents are written, supporting images should also be archived to positions with clear relationships to them; when references can use relative paths, try not to use absolute paths; if Typora provides a "copy to specified directory when inserting images" setting, set it up as much as possible, rather than randomly dragging images each time. Many people see these types of issues as "minor organization," but actually this is precisely the key step to elevate Markdown from "knowing how to write a few symbols" to "knowing how to manage a set of documents."

## 11. Why You Must Consider GitHub: Because Textbooks Don't Just Live on Your Computer

If you only treat Markdown as a personal temporary note-taking tool, then you can indeed long-term not care about GitHub, not care about platform differences, not care about public display. But as long as you prepare to make content into textbooks, documentation, knowledge bases, or course materials, the GitHub perspective will sooner or later become important. Because it represents not just a website, but a very typical "public repository reading scenario": others are not viewing articles in your Typora, but in browsers, on repository pages, on a platform with its own rendering rules reading your content.

GitHub's official documentation about Markdown gives a very valuable reminder: many writing styles look fine in local editors, but when placed on repository pages, what really determines the display effect is GitHub's own rendering logic. For example, headings automatically generate anchors, multiple headings form an outline in the interface, files and images within repositories are more recommended to use relative links, and ordinary single line breaks in `.md` files won't always be interpreted as the line breaks you imagine. In other words, once textbooks enter publishing scenarios, they're no longer just "as long as you're comfortable looking at them," but face questions of "how readers see them, how they jump around, how they reference, how they continue reading."

This is also why I don't recommend seeing Typora and GitHub as two unrelated things. Typora is more like your writing desk, GitHub is more like your display desk. The role of the writing desk is to help you more smoothly organize content; the role of the display desk is to stably deliver this content to readers' hands. A truly mature Markdown workflow shouldn't only have the former without the latter.

For textbook writers, this awareness will directly affect directory writing. For example, when you write the main README in the root directory, it shouldn't just be a work-start record for yourself, but should undertake the role of "letting people who come to the repository for the first time quickly understand what this is." Volume READMEs should let readers understand what this volume covers, who it's suitable for, where to start reading. Jump links between chapters also shouldn't just be for your own convenience, but should serve the entire reading path. Once you shift from "writing for myself" to "others also need to read," many seemingly minor Markdown conventions will suddenly become very practical.

Also precisely because of this, I recommend anyone preparing to make Markdown content into textbooks cultivate a publishing awareness early: what you're writing is not a draft that only temporarily holds up in the local editor, but a document that may be repeatedly read in repositories, webpages, exported PDFs, static sites, and different devices in the future. Writing with this awareness, many decisions will be more stable, such as heading hierarchies will be more restrained, directory structure will be clearer, links will be more standardized, image paths will be more orderly.

## 12. Don't Memorize Shortcuts Like a Table, Make Them Part of Your Writing Actions

Many software tutorials, when talking about shortcuts, like to directly throw out a big table: what's new file, what's save, what's heading, what's code block, what's quote, what's full screen. After reading, readers usually have an illusion that they've "mastered it pretty well." But when actually starting to write documents, hands still go back to the mouse, menus still need to be clicked layer by layer, input rhythm is still constantly interrupted. The reason is not complicated: shortcuts are not mastered by memorization, but by repeatedly using them in real actions, finally becoming muscle memory.

Typora's official shortcut documentation is very complete, listing common operations related to files, editing, paragraphs, formatting, and views. For beginners, what's most worth familiarizing with first is not everything, but those few actions that will directly change writing rhythm. For example, heading level switching, code blocks, quote blocks, unordered lists, ordered lists, insert image, insert link, new paragraph, and single line break—these are all very high-frequency actions when writing textbook main text.

Here's a very practical learning sequence:

- **Step 1**: Don't try to master all shortcuts at once, but first focus on three to five actions you'll repeatedly use in every document.
- **Step 2**: Force yourself to prioritize using these shortcuts over mouse menus for about a week.
- **Step 3**: When these actions have become natural, add the next group of actions.

The benefit of learning this way is that shortcuts will gradually embed into your writing process, rather than remaining dead knowledge in your brain.

For example, suppose today you're mainly practicing headings, lists, and code blocks, then you can consciously treat "new heading," "insert ordered list," "insert code fence" as today's key actions. You'll find that once these actions become natural, your attention when writing is less easily interrupted by interface operations. Markdown was originally a writing method emphasizing thought continuity, and shortcuts are actually helping you protect this continuity.

However, you should also avoid another extreme here: don't understand proficiency as "pursuing hand speed like playing games." The essence of textbook writing is still organizing knowledge, not proving how familiar you are with tools. The meaning of shortcuts is not to make you look professional, but to reduce meaningless switching costs for you, leaving more energy for structure, expression, and judgment. A truly effective workflow is not how many shortcuts you know, but whether you can naturally call up the most appropriate action when needed.

## 13. The Most Common Misconceptions About Typora and Markdown

The most common misconceptions in the beginner stage are not about not knowing how to write, but using the wrong understanding approach. The most typical problems here can actually be directly summarized into the following four types:

- **Misconception 1: Treating Markdown as "Lightweight Word"**
  Once you think this way, you'll constantly ask why it can't freely drag images, why it can't arbitrarily change local styles like typesetting software, why tables aren't as flexible as imagined. Actually, Markdown's value has never been in pixel-level freedom, but in structured expression and long-term maintainability. If what you're pursuing is magazine-layout-level control, Markdown simply wasn't designed for that goal.

- **Misconception 2: Treating Typora as "A Visual Editor That Doesn't Need to Learn Syntax at All"**
  This idea is very comfortable short-term, but long-term will get you stuck. Because once you leave Typora, you'll find you don't understand source text, don't know why it can display here but not there, and don't know why the same document has different styles on a different platform. The truly efficient way is to use Typora's WYSIWYG experience to enter Markdown, but ultimately still understand Markdown's basic rules.

- **Misconception 3: Pursuing Advanced Features Too Early**
  For example, being obsessed with footnotes, formulas, automatic table of contents, YAML, theme CSS, custom export, image hosting upload from the beginning, but not writing headings, paragraphs, lists, code blocks, and image path management stably. The result is often: it looks like you've learned a lot, but when actually writing a complete document it's still messy. When foundations aren't stable, advanced features only add noise.

- **Misconception 4: Ignoring the File System**
  Markdown documents don't exist in isolation. They're closely related to file names, directories, image paths, relative references, export locations, and synchronization methods. If you don't treat Markdown as "documents in the file system," but only as "a page of paper in an editor," you'll definitely suffer later when migrating, syncing, and publishing.

## 14. When You Start to Become Proficient, Markdown Will Change Your Writing Method

At first, Markdown seems like it's adding a layer of rules; but after truly becoming proficient, you'll find it's actually helping you reduce burden. Because it constantly reminds you: first think through the structure, then write the content clearly, and only then consider presentation. You no longer need to worry about font size, font family, paragraph spacing, and alignment while writing; you start thinking more about whether headings are accurate, whether paragraphs are complete, whether examples are appropriate, whether structure flows smoothly.

This is also why many long-term writers, programmers, knowledge managers, and researchers ultimately stabilize in the Markdown ecosystem. Not because Markdown is cooler, but because it makes writing closer to thinking itself. What you write in the editor is plain text, what you see in the renderer is clear typesetting, what you save in version control is comparable history, and what you publish on GitHub or websites is structurally stable content. Writing, saving, syncing, collaborating, publishing—this entire chain is connected for the first time by an extremely simple text format.

## 15. Exercise: Please Write a Three-Section Short Article Yourself

If you really want to learn this chapter, the best method is not to read ten more "Markdown Syntax Encyclopedias," but to immediately write a three-section short article in Typora. The topic can be very simple, such as "My Desktop Organization Method," "How to Prepare for an Exam," "How I Back Up Phone Photos." Requirements can be clearly specified as the following:

- First write a level 1 heading for the article.
- Then write an introduction of at least three sentences.
- Then write three level 2 headings, each section writing at least one complete paragraph.
- In one section insert a set of ordered lists.
- In another section insert a code block or directory structure example.
- Finally write a summary paragraph at the end, clearly stating the central meaning this article wants to convey.

When you complete this short article, you'll find you've unknowingly practiced headings, paragraphs, lists, code blocks, and structural organization all at once. True beginner mastery is not knowing every syntax rule, but independently writing a decent document.

## 16. What to Learn Next

After you can already stably write Markdown documents with clear structure, the next most worthwhile thing to continue learning is not to eat up all advanced syntax at once, but to enter topics closer to real workflows. For example, how to manage images and relative paths, how to organize directory structures for multiple documents, how to write tables and formulas, how to combine Markdown with Git, GitHub, static sites, and knowledge base systems. At that time you'll discover that learning Markdown later on has long ceased to be a question of "whether you can write hash marks and asterisks," but is about building your own knowledge production system.

## Appendix 1: Most Commonly Used Basic Syntax Examples in This Chapter

```markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading

This is a regular paragraph.

This is another paragraph.

- Unordered list item
- Unordered list item

1. Ordered step one
2. Ordered step two

> This is a quote.

`This is inline code`

```bash
echo "This is a code block"
```

[This is a link](https://example.com)

![This is an image](./images/example.png)
```

## Appendix 2: Three Habits You Should Develop Immediately

- **First determine file placement, then start writing**: Save any formal document to a definite folder first, then start writing.
- **Archive images into the document system internally**: Archive any images into the document directory internally as much as possible, rather than scattering them across desktop, downloads directory, and chat cache.
- **First think about heading hierarchy, then fill in main text**: Don't treat headings as decoration, treat headings as skeleton.

## References

This chapter's writing referenced the following original materials and official materials, and underwent Chinese pedagogical rewriting during content organization.

1. John Gruber, *Markdown Syntax Documentation*: <https://daringfireball.net/projects/markdown/syntax>
2. CommonMark, *CommonMark Spec 0.31.2*: <https://spec.commonmark.org/0.31.2/>
3. CommonMark, *Markdown Tutorial*: <https://commonmark.org/help/tutorial/>
4. Markdown Guide, *Basic Syntax*: <https://www.markdownguide.org/basic-syntax/>
5. GitHub Docs, *Basic writing and formatting syntax*: <https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>
6. Typora Support, *Markdown Reference*: <https://support.typora.io/Markdown-Reference/>
7. Typora Support, *Images in Typora*: <https://support.typora.io/Images/>
8. Typora Support, *Shortcut Keys*: <https://support.typora.io/Shortcut-Keys/>
9. Typora Support, *YAML Front Matter*: <https://support.typora.io/YAML/>
10. Typora Support, *Export*: <https://support.typora.io/Export/>
11. Typora Support, *Math and Academic Functions*: <https://support.typora.io/Math/>
12. Typora Support, *Auto Numbering for Headings*: <https://support.typora.io/Auto-Numbering/

