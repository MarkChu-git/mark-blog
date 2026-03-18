---
title: Git and GitHub
tags:
  - git
  - github
  - version-control
---

# Git and GitHub

> Language / 语言：[中文](../zh/README.md) | **English**

Many people meet Git for the first time and immediately feel that it is “important but hard.” They memorize a few commands, then freeze when branches, conflicts, rollback, or remotes appear. They know GitHub is popular, but still do not know how Git and GitHub relate to each other.

The root problem is often not that Git is inherently impossible. The real problem is the learning path: most people begin with “how to type a few commands” instead of “what problem version control is actually solving.”

This volume is not trying to turn Git into a command cheat sheet, and not trying to reduce GitHub to a list of website clicks. Its job is to explain these questions clearly:

- what problem version control is actually solving,
- why memorizing commands is not enough,
- what Git is responsible for and what GitHub is responsible for,
- why writing, coding, collaboration, publishing, branching, rollback, and review all converge on this system.

For that reason, the volume develops three lines together:

- **concept line**: version control, commits, branches, remotes, collaboration,
- **operation line**: initialize, commit, inspect history, branch, merge, sync, rollback,
- **workflow line**: solo work, multi-device sync, teamwork, review, and release.

## Who this volume is for

This volume is mainly written for:

- **complete beginners** who know Git matters but still hesitate to start,
- **users who can operate but do not understand** what is happening underneath,
- **users who have touched GitHub but still mix up local repos, remotes, branches, pull requests, forks, and sync**, 
- **and people who want to apply Git and GitHub seriously to textbooks, documents, knowledge bases, and project collaboration.**

## What has been added in this pass

To make the material more useful to beginners, this volume now adds a dedicated **practical fast-track layer**:

- begin with the smallest useful loop,
- emphasize the most common commands and rhythms,
- help document writers and project maintainers actually use Git,
- then return to the deeper conceptual model.

The English material is also moving away from the old “entry-page only” approach. The goal is for the English and Chinese content to carry the same substantive material as much as possible.

## Scope

This volume will gradually cover:

1. the basic idea of version control and how Git differs from ordinary backup habits,
2. Git’s core working model: working tree, staging area, and commit history,
3. repository initialization, commit workflow, history viewing, diffing, undo, and rollback,
4. branches, merge, rebase, conflicts, and the logic behind them,
5. remotes, `fetch`, `pull`, `push`, and synchronization,
6. GitHub concepts such as repositories, README, Issues, Pull Requests, Forks, and Actions,
7. the path from individual workflow to collaborative publishing and review,
8. and a practical beginner-facing fast track.

## Current chapters

### Practical fast track

- [Chapter 0: Practical Quick Start — Get Git and GitHub Working Fast](chapters/00-practical-quickstart.en.md) ([中文](chapters/00-practical-quickstart.md))

### Chapter 1

- [Chapter 1: What Version Control Is Actually Solving](chapters/01-why-version-control-matters.en.md) ([中文](chapters/01-why-version-control-matters.md))

### Chapter 2

- [Chapter 2: Start Using Git for Real — Working Tree, Staging Area, and Your First Reliable Commit](chapters/02-working-tree-staging-and-first-commit.en.md) ([中文](chapters/02-working-tree-staging-and-first-commit.md))

## Recommended reading order

### Track A: complete beginner / wants traction quickly

1. Start with Chapter 0.
2. Read Chapter 1 to build the mental model.
3. Read Chapter 2 to stabilize the working-tree / staging / history model.
4. Then move into later chapters on history inspection, undo, branching, synchronization, and collaboration.

### Track B: knows some commands but feels increasingly messy

1. Start with Chapter 1 to make the conceptual problem clear.
2. Read Chapter 2 to make the three-layer model concrete.
3. Return to Chapter 0 to stabilize the command loop.
4. Then move into later chapters on branching, synchronization, and collaboration.

## Research materials

To keep this volume grounded in authoritative material rather than memory alone, a source map has been prepared:

- [Source map](research/source-map.md)

## Current stage goal

The current priorities are:

- expand the conceptual and workflow-centered core text,
- strengthen the beginner practical layer,
- keep filling the English version,
- and turn this volume into something that works both as a fast entry point and as a long-term Git / GitHub reference.
