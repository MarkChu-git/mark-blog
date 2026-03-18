---
title: "Chapter 2: Writing Documents for Long-Term Maintenance - Directory Structure, Images, Relative Paths, and Repository Organization"
createTime: 2026/01/12 10:00:00
description: Learn how to organize multiple documents for long-term maintainability
tags:
  - markdown
  - file-structure
  - paths
  - images
excerpt: What truly determines whether a set of Markdown materials can survive long-term is often not syntax, but structure.
---

# Chapter 2: Writing Documents for Long-Term Maintenance — Directory Structure, Images, Relative Paths, and Repository Organization

> Language / 语言：[中文](../../zh/chapters/02-structure-images-and-paths.md) | **English**

## 1. What truly determines whether a set of Markdown materials can survive long-term is often not syntax, but structure

Many people, in the first stage of learning Markdown, focus almost entirely on syntax itself: how to write headings, how to write bold text, how to write lists, how to write code blocks. This stage is certainly important, because if you're not familiar with even the most basic writing rules, documents simply cannot be produced consistently. But once you actually start accumulating materials, you'll gradually discover that what determines whether a set of documents can live long, live stably, and live like a proper textbook is often not whether you know how to write hash marks and backticks, but whether you've placed your documents in a reasonable structure.

This sounds like a very ordinary statement, but it actually carries tremendous weight. Because a Markdown document is essentially just a text file. Text files themselves are not magical. They are powerful because they are easy to search, easy to version control, easy to copy, easy to migrate, and easy to read by different tools. But these advantages only truly manifest when the structure is clear. If a repository is full of file names like `new-document.md`, `notes1.md`, `image.png`, `final-version2.md`, with images scattered across the desktop, download directory, and chat cache, then even if you're writing in Markdown, this set of materials will still quickly spiral out of control.

So, starting from this chapter, we temporarily shift our attention from “how to write a single document” to “how to organize multiple documents.” For textbook writing, this step is almost the watershed between being a writer and being an editor. The former cares about whether they can write an article today, while the latter cares about whether, six months later, after switching computers, after adding twenty more chapters, after publishing to GitHub, this content is still clear, still stable, and still easy to continue expanding.

## 2. Directory structure is not decoration — it makes decisions for your future self

Many beginners, when creating directories, often adopt a very immediate mindset: today I need to write an article, so I create one in the current folder; tomorrow I need to write another, so I create another; if illustrations need to be saved, I just drag them into the current directory; if I temporarily don't know where to put something, I just put it on the desktop. In the short term, this approach has the least resistance, because it requires almost no design. But in the long term, it continuously creates hidden costs. After a few weeks, you'll start forgetting which files are main text, which are drafts, which images correspond to which chapter, which directories are just experimental, and which content is ready to be shared publicly.

Therefore, directory structure should ideally take on a “pre-constraint” function from the very beginning. So-called pre-constraint doesn't mean binding you to a rigid system, but rather reducing the possibility of chaos for your future self. For example, if you already know this repository is a textbook collection, not a collection of individual articles, then the most natural way to organize it should not be to lay all documents flat in the root directory, but to first separate out the “volume” level. Because the core unit of a textbook collection is not “file,” but “volume.” Once this basic unit is determined, many subsequent decisions naturally become simpler: where to put chapters, where to put research materials, where to put images, what role the root README should play, what role the volume README should play — all will gradually become clear.

This repository has already adopted such an approach:

- The root directory is responsible for explaining what the entire textbook collection is.
- `CATALOG.md` is responsible for serving as the master catalog navigation.
- Under the `books/` directory, specific content is organized by volume.

The greatest value of doing this is not that the form looks good, but that it separates the responsibilities of different levels. The root directory no longer competes for space with any specific textbook, the volume directory doesn't need to take on the overall explanation task for the entire repository, and chapter files only need to focus on solving the problems of the chapters themselves.

A mature textbook repository should ideally allow anyone entering for the first time to quickly answer three questions:

- What is this repository as a whole about?
- What does this particular volume I'm looking at cover?
- If I'm ready to start reading, where should I begin?

If these three questions can be naturally answered within the directory and README structure, it means your repository already has the foundation of being “readable,” rather than just being “something you yourself can barely recognize.”

## 3. Why images are always the first to break

When a set of Markdown materials is just starting out, image problems often don't immediately surface. Because in the very early stages, there are few files and few images, and path errors aren't immediately obvious. But once content starts to increase, images are usually the first part to break on a large scale. The reason is simple: documents are text and relatively stable; images are external resources that need to be referenced to get into documents. As long as the reference relationship gets messy, images will break first.

Typora's official image documentation clearly states this: Markdown files don't directly “own” images; they only reference them. This reference can point to a network address or a local path. Precisely because of this, as long as image files are moved, renamed, deleted, lost during synchronization, or the path notation is unstable, images in documents will break. Many people, when they first encounter this situation, think the software is broken, but more often it's actually a problem with resource management methods.

In textbook writing, images are especially important. Because textbooks aren't just casual notes — they often need to include interface screenshots, directory diagrams, code result images, flowcharts, comparison diagrams, and operation screenshots. In other words, images in textbooks are not occasional supporting actors, but core materials that likely bear explanatory responsibility. If image management is chaotic, the readability of the textbook will be directly destroyed.

Therefore, images in a textbook repository should not be treated as “put them wherever is convenient” attachments, but should be viewed as part of the main text. The most stable approach is usually to establish a clear relationship between the image directory and the content directory. For example, in the current volume “Typora and Markdown,” images could be uniformly placed under `books/typora-and-markdown/images/`, and then referenced in chapters through relative paths. The benefits of doing this are very practical: you can tell at a glance which volume these images belong to, rather than having everything mixed together across the entire repository; in the future, if a certain volume needs to be migrated, published, or split as a whole, resource relationships are less likely to be lost.

## 4. Why relative paths are the lifeline of textbook repositories

If directory structure solves “where to put things,” then path notation solves “how documents find these things.” And in a textbook repository that needs long-term maintenance, may be migrated, may involve collaboration, and may be published to GitHub, one of the most worthwhile habits to establish first is to use relative paths as much as possible.

GitHub's official documentation, when explaining file and image references within repositories, explicitly recommends prioritizing relative links. The reason is not abstract: relative links move together with the repository structure, and as long as the structure isn't messed up, links have a better chance of remaining valid. Absolute links are completely different. They are often bound to a specific environment, such as your local machine directory, a fixed URL, or a webpage path under the current branch. Just because it works for you today doesn't mean it will work when someone else clones it, nor does it mean it will still work after you change directories.

For beginners, the easiest example to understand is images. Suppose you write in your document:

```markdown
![Diagram](/Users/mark/Desktop/temp/image.png)
```

This might display on your current machine, but for others it will almost certainly be invalid. Because others don't have your desktop directory, nor do they have this image. Even for yourself, if you clean up your desktop in a few days, this link will immediately become invalid. Relative paths are different. If the image is placed in a clear directory inside the repository, then what the document references is not “the absolute location on your machine,” but “the relative relationship between it and the current document.” And this relative relationship, as long as the directory isn't messed up, will be much more stable.

For example:

```markdown
![Chapter 1 Diagram](../images/chapter-01-figure-01.png)
```

The value of this kind of notation is not just the technical level of “shorter path,” but that it makes the document truly form a whole with the repository. Whether you move the entire volume directory, push the entire repository to GitHub, or someone else clones it, as long as the relative positional relationship remains unchanged, this image can still be found. For textbook engineering, this is almost one of the sources of underlying stability.

## 5. What Typora helps you with here is not just “inserting images more conveniently”

Many people, when mentioning Typora's image functionality, only think of a very superficial advantage: dragging an image in is convenient. This statement is certainly not wrong, but it's too shallow. What's truly important is that Typora provides a capability to gradually incorporate image insertion behavior into workflow management. According to official documentation, Typora can choose different strategies when inserting local images, such as directly using the source path, copying to a specified directory, using relative paths, setting image root paths with YAML Front Matter when needed, and even connecting to image upload tools to upload images to cloud image hosting.

For textbook repositories, the most important thing is not all the advanced features, but two things:

- **When inserting images, try to copy them to a clear directory**
- **Generate relative paths that are as stable as possible**

As long as these two things are established, the relationship between Markdown documents and image resources will immediately become much more stable. Conversely, if every time you insert an image you just “casually drag it in” without caring where Typora actually referenced the original file from, then the more you write, the more hidden dangers you accumulate.

One thing to especially note here: cloud image hosting upload functionality is not inherently more advanced. In Typora's official documentation about uploading images, there is a very prominent warning specifically reminding users to pay attention to privacy, reliability, deletability, and legal risks of third-party services. For textbook repositories, unless you very clearly know that your publishing scenario relies on image hosting, otherwise a more conservative and stable approach is usually still to first place images inside the repository and have them version-controlled together with the main text. This method may not be as flexible as “external links everywhere,” but it is often more suitable for textbook projects in terms of controllability, portability, and auditability.

## 6. Unifying naming from the start will save much more effort than a later cleanup

File names and image names seem like small matters, but they are actually the most easily underestimated foundational engineering. Because once naming gets messy, search gets worse, navigation gets worse, image references get worse, and chapter management also gets worse. Especially for textbooks, which are content that grows by chapter over the long term, once naming style is inconsistent, a strange situation will quickly emerge: the content is clearly all there, but it becomes increasingly difficult to manage.

In textbook repositories, the most important thing about naming is not being “cool,” but being “stable, predictable, and scalable.” From a practical maintenance perspective, you should at least try to achieve the following two points:

- **Chapter file naming should have stable numbering**: For example, if chapter files have numbering from the start, then subsequent sorting, navigation, catalog construction, and export will all be much more natural. Conversely, if today you write “Chapter One,” tomorrow you write “chapter2,” and the day after you write “new-version-chapter-three-final,” then any automation and manual management will become increasingly painful.
- **Image naming should establish relationships with chapters**: Rather than calling images `screenshot.png`, `new-image-2.png`, `screen-snapshot-2026-03-15.png`, it's better to establish relationships with chapters from the start, such as `chapter-01-figure-01.png`, `chapter-01-figure-02.png`. This naming method, although not as “effortless,” is very worthwhile in long-term maintenance. Because it lets you know at a glance which chapter this image belongs to, and later if a certain image becomes invalid, needs replacement, needs uniform compression or renaming, everything will be much easier.

## 7. A recommended starting structure for textbook repositories

Below is a structure example that is very suitable as a starting point for textbook collections. It's not the only correct answer, but it's stable enough, clear enough, and easy to continue growing during subsequent expansion.

```text
textbook-collection/
├── README.md
├── CATALOG.md
└── books/
    ├── typora-and-markdown/
    │   ├── README.md
    │   ├── chapters/
    │   │   ├── 01-typora-and-markdown.md
    │   │   └── 02-structure-images-and-paths.md
    │   ├── images/
    │   └── research/
    └── another-book/
        ├── README.md
        ├── chapters/
        ├── images/
        └── research/
```

In this structure, each level should ideally have its own responsibility:

- The root directory is responsible for explaining “what the entire repository is.”
- `CATALOG.md` is responsible for serving as the master navigation.
- Volume READMEs are responsible for explaining “what this volume covers.”
- `chapters/` holds the main text.
- `images/` holds images.
- `research/` holds resource maps and research-oriented auxiliary files.

A major advantage of doing this is that even if a certain volume needs to be separated out later, it already has a relatively complete small structure of its own, rather than only being able to barely exist by depending on the current repository.

## 8. Why research materials also deserve a separate directory

Many people think research materials are just “some links I looked up,” and don't need a dedicated directory. But for textbook-type projects, the significance of research materials goes far beyond memos. It actually helps you answer two questions:

- What is the main text actually based on?
- Where should I continue digging when expanding later?

When a chapter's content becomes increasingly thick and the topic becomes increasingly complex, many judgments are no longer as simple as “do I know this or not,” but involve specification differences, platform behavior, tool settings, version changes, and best practices. If you haven't left some structured trace of material sources, every time you expand later you'll have to search everywhere again, which is both time-consuming and likely to mess up things you've already verified.

This volume “Typora and Markdown” has already separately established `research/source-map.md`. This is a very good start. It at least means that when continuing to expand in the future, you don't need to recall “which Typora official documents did I look up last time,” “which content came from Markdown Guide,” “which judgments need to go back to the CommonMark specification.” For textbook engineering, this kind of “research trace” is not noise, but a component of sustainability.

## 9. Truly implementing this chapter into your own actions

If you're preparing to use Markdown and Typora as long-term writing tools, then the most important takeaway from this chapter should not just be “I know what relative paths are,” but should be implemented as several specific actions:

- **Build directories first, then write main text**: Don't write articles casually in some temporary location first, then supplement structure after it grows big, because the cost of supplementing structure later is usually higher.
- **Treat images as part of main text resources**: From the moment images are inserted, they should know where they're going to be archived, rather than being placed randomly first and then trying to remedy the situation when problems arise.
- **Try to stabilize relative relationships**: What you should pursue is not “can display right now,” but “can still display after changing environments.”
- **Write README and catalogs as part of the textbook**: Textbooks are not just collections of chapter main text; they are also a reading path. README and catalogs determine whether readers will smoothly enter this path.

## 10. Chapter summary

What this chapter really wants to explain is actually just one sentence: the power of Markdown comes not only from lightweight syntax, but also from stable structure. Once what you're preparing to write is no longer scattered notes, but a textbook that needs long-term maintenance, may be published, may be expanded, and may involve collaboration, then directory structure, image management, relative paths, volume design, and research material preservation are no longer marginal issues, but part of main text quality.

Many beginners think this work “feels like organizing, not like writing.” But truly mature writing precisely includes this organizing. Because textbooks are not written for yourself five minutes from now, but for people who will still need to come back and reuse them weeks, months, or even years in the future. The more stable you make the structure today, the less chaos cost you'll pay in the future. This kind of benefit is especially obvious in the Markdown world.

## References

1. GitHub Docs, *Basic writing and formatting syntax*: <https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>
2. Typora Support, *Images in Typora*: <https://support.typora.io/Images/>
3. Typora Support, *Upload Images*: <https://support.typora.io/Upload-Image/>
4. Typora Support, *YAML Front Matter*: <https://support.typora.io/YAML/>
5. Markdown Guide, *Hacks*: <https://www.markdownguide.org/hacks/>
