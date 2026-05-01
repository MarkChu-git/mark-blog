---
title: About Me
description: Mark — student developer building robust systems, writing technical content, and turning complexity into clear structure.
aside: false
pageClass: about-page
---

<div class="resume-header">

<img src="/profile.webp" alt="Mark" class="profile-photo" />

# (Mark) Hanyang Chu

Student Developer · Full Stack · Algorithms · Quant · AI

<div class="contact-info">

[GitHub](https://github.com/MarkChu-git) · [LinkedIn](https://www.linkedin.com/in/hanyang-chu-8836252a7) · [Email](mailto:markchu2022@gmail.com)

</div>

</div>

## Education

### Monash University Malaysia
**Bachelor of Computer Science in Data Science** · *2025 - Present*

## Skills

### Programming Languages
TypeScript / JavaScript, Python, Go, Java / Kotlin, C#, C++, SQL

### Frontend
React / Next.js, Vue, HTML / CSS / Tailwind CSS, Astro

### Backend & Data
FastAPI, PostgreSQL / Supabase, R

### DevOps & Tools
Docker / Kubernetes, Linux, Git, Zsh / Bash

### Other
Technical Writing, LaTeX / Markdown

## Projects

### Aura — AI-Driven Fragrance Recommendation Platform
**Tech Stack:** React, FastAPI, PostgreSQL + pgvector, Redis, Celery, Docker, OpenAI API

An intelligent fragrance recommendation engine that bridges abstract olfactory descriptions with concrete product suggestions. Uses Vector Search (pgvector) and LLMs to interpret user queries based on imagery and mood.

- Built a modern distributed architecture with Traefik Gateway, FastAPI backend, and React frontend
- Implemented semantic search using PostgreSQL pgvector for fragrance similarity matching
- Designed async task processing with Celery + Redis for long-running AI inference
- Containerized the entire stack with Docker Compose for production deployment

[GitHub](https://github.com/MarkChu-git/Aura)

### Always Ontrack — Terminal CLI for Monash OnTrack
**Tech Stack:** TypeScript, Node.js, Commander.js, Playwright, Chalk

A terminal-first CLI tool that turns common Monash OnTrack workflows into a single command surface. Designed for both interactive terminal use and scriptable automation.

- Implemented SSO authentication with automated browser handling via Playwright
- Built comprehensive command set for projects, units, tasks, feedback, and file operations
- Designed batch task selectors supporting multiple selection modes (comma-separated, all-tasks)
- Added JSON output mode for CI/CD integration and scripting workflows

[GitHub](https://github.com/MarkChu-git/Always-Ontrack)

### Kestrel — Real-time Algorithm Visualization Platform
**Tech Stack:** Rust, React, Astro, PixiJS, PostgreSQL, Redis, NATS, Docker

A next-generation platform for visualizing data structures and algorithms in real-time. Streams visualization events during execution instead of batch processing.

- Built high-performance WebSocket gateway in Rust (Axum + Tokio) with binary Protobuf protocol
- Implemented WebGL-based rendering with PixiJS for smooth visualizations
- Designed secure sandboxed execution with Kata Containers and Firecracker microVMs
- Created multi-language runner system supporting JavaScript, Python, C++, and Java

[GitHub](https://github.com/MarkChu-git/kestrel)

## Experience

### Multimodal Chat System Development
**Backend Engineer** · *Dec 2025 - Feb 2026*

- Participated in multimodal chat system architecture refactoring, implemented strategy routing module supporting both text-only and multimodal processing modes
- Developed video processing module with two-stage sampling, valid frame calculation, and timestamp annotation
- Integrated MinIO media storage service for file upload, deduplication, and persistent storage
- Built LLM orchestration module for unified management of multimodal model calls and context processing
- Refactored document splitter with optimized chunking algorithm to improve document processing quality
- Switched length calculation from character-level to token-level for better LLM compatibility
- Fixed extra space insertion issue in Chinese document cross-page merging, improving text coherence
- Wrote unit tests and integration tests covering video routing, strategy routing, and other core modules

---

*I care about engineering practice, mathematical thinking, and technical writing. I treat this site as a long-term personal product — a place to sharpen thinking, document progress, and build in public.*

<style>
.about-page .resume-header {
  text-align: center;
  margin-bottom: 2rem;
}

.about-page .profile-photo {
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.about-page .resume-header h1 {
  margin-bottom: 0.5rem;
}

.about-page .resume-header p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.about-page .contact-info {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 0.5rem;
}

.about-page .contact-info a {
  white-space: nowrap;
}

.about-page h2 {
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
}

.about-page h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
}

.about-page h3 + p strong {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-page .profile-photo {
    width: 150px;
  }

  .about-page .resume-header h1 {
    font-size: 1.75rem;
  }

  .about-page h2 {
    font-size: 1.25rem;
    margin-top: 2rem;
  }

  .about-page h3 {
    font-size: 1.1rem;
  }

  .about-page .contact-info {
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .about-page .profile-photo {
    width: 120px;
    margin-bottom: 1rem;
  }

  .about-page .resume-header h1 {
    font-size: 1.5rem;
  }

  .about-page .resume-header p {
    font-size: 0.9rem;
  }

  .about-page h2 {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }

  .about-page h3 {
    font-size: 1rem;
  }

  .about-page .contact-info {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
