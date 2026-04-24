# AGENTS.md — Mandatory Workflow Rules

These rules bind ALL agent sessions operating in this repository.

## 1. Commit & Push

Every change — whether code, config, or documentation — MUST be committed and pushed to the remote branch before declaring a task complete. No uncommitted work may remain.

## 2. Skill Traversal

Before executing any task, traverse ALL available skills and select **every skill that could plausibly apply**. The more the better. Do not skip a skill because it seems "too heavy" or "not an exact match." If there is even a 1% chance a skill applies, load it.

## 3. Multi-Subagent Mode with 3 Auditors

Every task MUST be executed using 3+ parallel subagents. Specifically:

- **Worker agents**: execute the actual implementation work
- **3 Auditor agents**: their sole purpose is to inspect the output of worker agents and verify:
  - Code quality and adherence to project conventions
  - All rules in this file are followed
  - No regressions or edge cases missed
  - Correctness of the solution

Each auditor produces a structured verdict: **PASS** or **FAIL** with supporting evidence. If any auditor returns FAIL, the workers must address the issues before the task is considered complete.

## 4. Web Search Capability

For any task involving:
- External libraries or dependencies
- Best practices or patterns
- Research or fact-checking
- Version / API changes

Use WebSearch or web fetch tools **before** making implementation decisions. Do not rely on static internal knowledge.

## 5. Enforcement

This file is read by every agent session. Violation of any rule is grounds for task rejection and re-execution.
