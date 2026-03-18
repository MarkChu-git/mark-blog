# Typora 与 Markdown 教程资料地图

这份资料地图用于记录《Typora 与 Markdown》教程编写时所使用的核心材料来源。目标不是简单堆链接，而是区分每类资料在教学写作中的角色：哪些负责定义概念，哪些负责解释工具行为，哪些负责补足兼容性与实践细节。

## 一、Markdown 原始定义与设计思想

### 1. Daring Fireball: Markdown Syntax Documentation
- 链接：<https://daringfireball.net/projects/markdown/syntax>
- 角色：原始语法说明与设计哲学来源。
- 主要用于回答的问题：Markdown 最初到底想解决什么问题，为什么它强调可读性，段落、标题、列表、引用、代码块这些基础元素最初是如何定义的。

### 2. CommonMark Spec
- 链接：<https://spec.commonmark.org/0.31.2/>
- 角色：规范层资料。
- 主要用于回答的问题：为什么同样是 Markdown，在不同解析器里会出现差异；标题、列表、缩进、换行、转义、链接等规则为什么需要更严格、可测试的规范。

### 3. CommonMark Tutorial
- 链接：<https://commonmark.org/help/tutorial/>
- 角色：教学层资料。
- 主要用于回答的问题：如何把规范层知识拆成适合学习者逐步吸收的小单元。

## 二、Markdown 通用教学与兼容性建议

### 4. Markdown Guide — Basic Syntax
- 链接：<https://www.markdownguide.org/basic-syntax/>
- 角色：通用教学材料。
- 主要用于回答的问题：哪些写法兼容性更好，哪些是常见但不推荐的写法，初学者最容易犯的错误有哪些。

### 5. Markdown Guide — Getting Started / Extended Syntax
- 链接：<https://www.markdownguide.org/getting-started/>
- 链接：<https://www.markdownguide.org/extended-syntax/>
- 角色：入门与扩展层资料。
- 主要用于回答的问题：为什么 Markdown 适合长期写作与迁移；表格、任务列表、脚注等增强语法属于什么层次。

## 三、GitHub Flavored Markdown 与仓库发布场景

### 6. GitHub Docs — Basic writing and formatting syntax
- 链接：<https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>
- 角色：平台行为资料。
- 主要用于回答的问题：在 GitHub 上，标题、锚点、相对路径、图片、换行、引用、代码块等是怎样显示和解释的；为什么写给 GitHub 的 Markdown 与写给本地编辑器的 Markdown 有时需要不同注意点。

## 四、Typora 官方工具行为资料

### 7. Typora Support — Markdown Reference
- 链接：<https://support.typora.io/Markdown-Reference/>
- 角色：Typora 核心语法支持清单。
- 主要用于回答的问题：Typora 实际支持哪些 Markdown 与扩展功能，它与 GFM 的关系是什么。

### 8. Typora Support — Images in Typora
- 链接：<https://support.typora.io/Images/>
- 角色：图片工作流资料。
- 主要用于回答的问题：Typora 中图片如何插入、复制、保存、移动、使用相对路径以及与 YAML 配合。

### 9. Typora Support — Shortcut Keys
- 链接：<https://support.typora.io/Shortcut-Keys/>
- 角色：操作效率资料。
- 主要用于回答的问题：标题、表格、代码块、引用、视图切换、图片插入等功能的高频快捷键是什么。

### 10. Typora Support — Export
- 链接：<https://support.typora.io/Export/>
- 角色：发布与导出资料。
- 主要用于回答的问题：Typora 原生导出与 Pandoc 导出的边界在哪里，HTML/PDF/Word 等输出链路如何工作。

### 11. Typora Support — YAML Front Matter
- 链接：<https://support.typora.io/YAML/>
- 角色：文档元数据与高级配置资料。
- 主要用于回答的问题：YAML 在 Typora 中如何影响图片根路径、导出设置、元信息与 per-document 配置。

### 12. Typora Support — Math / Auto Numbering / What’s New
- 链接：<https://support.typora.io/Math/>
- 链接：<https://support.typora.io/Auto-Numbering/>
- 链接：<https://support.typora.io/What's-New-1.0/>
- 角色：增强功能资料。
- 主要用于回答的问题：公式、自动编号、版本变化与较高级写作能力如何在 Typora 中落地。

### 13. Typora Support — Markdown Reference / Shortcut Keys / Images / YAML
- 链接：<https://support.typora.io/Markdown-Reference/>
- 链接：<https://support.typora.io/Shortcut-Keys/>
- 链接：<https://support.typora.io/Images/>
- 链接：<https://support.typora.io/YAML/>
- 角色：语法、操作与设置联动资料。
- 主要用于回答的问题：Markdown 基础语法在 Typora 中如何输入、快捷键如何提升高频写作动作、图片设置如何影响文档资源管理、YAML 与文档级配置如何影响图片根路径和导出行为。

## 五、编写原则

本教程后续写作将遵循以下资料使用原则。

第一，概念性表述尽量回到原始定义或规范层资料，避免只凭经验描述。

第二，凡是涉及 Typora 的具体菜单行为、设置项名称、导出能力、图片处理方式，尽量以 Typora 官方支持文档为准。

第三，凡是涉及“兼容性最好怎么写”“哪些写法虽然能跑但不推荐”，尽量参考 Markdown Guide 与 GitHub 文档中的保守建议。

第四，凡是涉及平台差异和语法歧义，尽量引入 CommonMark 规范来解释，而不是简单说“有些地方会不一样”。

第五，教程正文不做资料堆砌，而是把这些资料消化成适合中文读者、适合教材式阅读的连续叙述。
