# Chapter 3 Screenshot Guide

This document contains all the content you need to screenshot for Chapter 3. Open this file in Typora and capture each section as instructed.

---

## Figure 3-1: Heading Hierarchy and Outline Linkage

**Filename:** `chapter-03-figure-01-heading-outline-overview.png`

### Content to Capture:

# Level 1 Heading - Document Title

This is the introduction paragraph for the document.

## Level 2 Heading - Main Section

This is content under the main section.

### Level 3 Heading - Subsection

This is content under the subsection.

#### Level 4 Heading - Detailed Topic

This is content under the detailed topic.

### Another Level 3 Heading

More content here.

## Another Level 2 Heading

Final section content.

**Capture Instructions:**
- Show Typora with both editing area and outline sidebar visible
- Ensure the outline panel on the left shows the heading hierarchy
- Include at least levels 1, 2, and 3 in the outline view

---

## Figure 3-2: Lists and Nesting

**Filename:** `chapter-03-figure-02-list-and-nesting.png`

### Content to Capture:

#### Unordered List

- First item
- Second item
- Third item

#### Ordered List

1. Step one
2. Step two
3. Step three

#### Nested List

- Main category A
  - Sub-item A1
  - Sub-item A2
    - Detail A2a
    - Detail A2b
- Main category B
  - Sub-item B1
  - Sub-item B2

**Capture Instructions:**
- Show both editing state (with markdown syntax) and rendered state
- If possible, use Typora's split view or show the raw markdown first, then the rendered result
- Include at least 2 levels of nesting

---

## Figure 3-3: Code Block with Syntax Highlighting

**Filename:** `chapter-03-figure-03-code-block-highlight.png`

### Content to Capture:

#### Python Code Block

```python
def hello_world():
    """This is a simple greeting function."""
    message = "Hello, Typora!"
    print(message)
    return message

# Call the function
result = hello_world()
```

#### Bash Code Block

```bash
# Navigate to project directory
cd ~/my-project

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"
```

#### JSON Code Block

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "author": "Your Name",
  "license": "MIT"
}
```

**Capture Instructions:**
- Show code blocks with language identifiers (`python`, `bash`, `json`)
- Ensure syntax highlighting is visible (colors for keywords, strings, comments)
- Include the triple backticks with language name visible

---

## Figure 3-4: Inline Math Setting

**Filename:** `chapter-03-figure-04-inline-math-setting.png`

### Content to Capture:

#### Part A: Settings Panel

Open Typora Preferences → Markdown → Markdown Syntax Support

Show these settings:
- [x] Inline Math (LaTeX style)
- [ ] Highlight (==mark==)
- [x] Subscript (~sub~)
- [x] Superscript (^sup^)
- [ ] Diagrams (Sequence, Flowchart, Mermaid)

#### Part B: Inline Formula Example

The quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ is used to solve quadratic equations.

Einstein's famous equation $E = mc^2$ shows the relationship between mass and energy.

The area of a circle is $A = \pi r^2$.

**Capture Instructions:**
- Part A: Screenshot the Markdown preferences panel with Inline Math checkbox visible
- Part B: Show inline formulas rendered within paragraph text
- If possible, combine both in one image or create two separate screenshots

---

## Figure 3-5: Display Math and Multi-line Alignment

**Filename:** `chapter-03-figure-05-display-math-and-align.png`

### Content to Capture:

#### Display Formula (Block)

$$
E = mc^2
$$

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

#### Multi-line Aligned Formula

$$
\begin{align}
(x + y)^2 &= x^2 + 2xy + y^2 \\
&= (x^2 + y^2) + 2xy \\
&= x^2 + y^2 + 2xy
\end{align}
$$

$$
\begin{align}
\sum_{i=1}^{n} i &= \frac{n(n+1)}{2} \\
\sum_{i=1}^{n} i^2 &= \frac{n(n+1)(2n+1)}{6}
\end{align}
$$

**Capture Instructions:**
- Show both standalone display formulas and aligned multi-line formulas
- Ensure the rendered mathematical notation is clear and readable
- Include the raw markdown syntax if showing in source code mode

---

## Figure 3-6: Markdown Preferences Overview

**Filename:** `chapter-03-figure-06-markdown-preferences-overview.png`

### Content to Capture:

Open Typora Preferences → Markdown

Show the following sections:

#### Markdown Syntax Support
- [x] Inline Math (LaTeX style)
- [x] Subscript (~sub~)
- [x] Superscript (^sup^)
- [ ] Highlight (==mark==)
- [x] Footnotes ([^1])
- [ ] Diagrams (Sequence, Flowchart, Mermaid)

#### Math Block Settings
- Math Rendering Engine: MathJax (or KaTeX)
- [x] Auto Numbering Math Blocks

#### Other Settings
- Default Code Language: (empty or specify)
- Word Count: Include whitespace

**Capture Instructions:**
- Capture the full Markdown preferences panel
- Ensure checkboxes for Inline Math, Footnotes, and other key settings are visible
- Show both "Markdown Syntax Support" and "Math" sections if possible

---

## Figure 3-7: Image Preferences and Folder Structure

**Filename:** `chapter-03-figure-07-image-preferences-and-folder-structure.png`

### Content to Capture:

#### Part A: Image Settings

Open Typora Preferences → Image

Show these settings:

**Image Insert:**
- [x] Copy image to current folder (./)
- [ ] Copy image to ./assets folder
- [ ] Upload image via iPic
- [ ] Use global setting

**Other Options:**
- [x] Apply above rules to local images
- [ ] Apply above rules to online images
- [x] Use relative path if possible

#### Part B: Folder Structure

```
books/
└── typora-and-markdown/
    ├── images/
    │   ├── chapter-01-figure-01.png
    │   ├── chapter-02-figure-01.png
    │   ├── chapter-02-figure-02.png
    │   └── chapter-03-figure-01.png
    ├── chapters/
    │   ├── 01-introduction.md
    │   ├── 02-setup.md
    │   └── 03-markdown-basics.md
    └── README.md
```

**Capture Instructions:**
- Part A: Screenshot the Image preferences panel
- Part B: Show the file explorer/finder with the actual folder structure
- If possible, combine both or create a split view

---

## Figure 3-8: Shortcuts and Menu Entry

**Filename:** `chapter-03-figure-08-shortcuts-and-menu-entry.png`

### Content to Capture:

#### Part A: Menu Bar

Show the Typora menu bar with these items visible:

**File Menu:**
- New (Cmd+N)
- Open (Cmd+O)
- Save (Cmd+S)
- Export → PDF, HTML, Word

**Edit Menu:**
- Undo (Cmd+Z)
- Cut (Cmd+X)
- Copy (Cmd+C)
- Paste (Cmd+V)

**Paragraph Menu:**
- Heading 1 (Cmd+1)
- Heading 2 (Cmd+2)
- Heading 3 (Cmd+3)
- Table (Cmd+Opt+T)
- Code Block (Cmd+Opt+C)

**Format Menu:**
- Strong (Cmd+B)
- Emphasis (Cmd+I)
- Underline (Cmd+U)
- Inline Code (Cmd+Shift+`)

#### Part B: Shortcut Help

Open Help → Custom Shortcut Keys (or show the shortcut reference)

**Capture Instructions:**
- Part A: Show the menu bar with keyboard shortcuts visible
- Part B: Show the shortcut help/reference page
- Focus on high-frequency actions: headings, bold, italic, code blocks, lists

---

## Quick Reference: All Figure Filenames

1. `chapter-03-figure-01-heading-outline-overview.png`
2. `chapter-03-figure-02-list-and-nesting.png`
3. `chapter-03-figure-03-code-block-highlight.png`
4. `chapter-03-figure-04-inline-math-setting.png`
5. `chapter-03-figure-05-display-math-and-align.png`
6. `chapter-03-figure-06-markdown-preferences-overview.png`
7. `chapter-03-figure-07-image-preferences-and-folder-structure.png`
8. `chapter-03-figure-08-shortcuts-and-menu-entry.png`

## Target Directory

Save all screenshots to:

```
books/typora-and-markdown/images/
```

---

## Tips for Taking Screenshots

1. **Clean Background:** Close unnecessary applications and browser tabs
2. **Consistent Size:** Use the same Typora window size for all screenshots
3. **High Resolution:** Ensure your display is at native resolution
4. **Clear Focus:** Click on the relevant area before capturing
5. **Annotations:** If needed, add arrows or highlights after capture
6. **File Naming:** Use the exact filenames listed above for consistency

## Typora Settings for Best Screenshot Results

Before taking screenshots, adjust these settings:

- **View → Zoom:** Set to 100% or 125% for better readability
- **View → Show Sidebar:** Enable for outline views
- **View → Source Code Mode:** Toggle as needed to show raw markdown
- **Preferences → Appearance:** Choose a clean theme (GitHub or Newsprint)
