# Skills AI

**Executable workflows for FlossWare AI ecosystem**

Interactive command-line skills using vectordb-ai, semantic-search-ai, knowledge-ai, and consensus-ai.

## What Are Skills?

Skills are **executable commands** that use FlossWare AI libraries to perform specific tasks.

- **Libraries** = Tools (vectordb-ai, consensus-ai, etc.)
- **Skills** = Recipes that use the tools

## Quick Start

```bash
# Clone repository
git clone https://github.com/FlossWare/skills-ai.git
cd skills-ai

# Run skills
claude run vectordb-search "find similar documents"
claude run knowledge-ingest docs/
claude run consensus-chat
claude run semantic-rank "authentication methods"
```

## Available Skills

See [SKILLS_INDEX.md](SKILLS_INDEX.md) for complete catalog.

### By Library

**Vector Database (vectordb-ai):**
- `vectordb-search` - Interactive vector search
- `vectordb-migrate` - Migrate between backends
- `vectordb-export` - Export vector data
- `vectordb-import` - Import vector data

**Semantic Search (semantic-search-ai):**
- `semantic-rank` - Rerank search results
- `semantic-filter` - Advanced filtering
- `semantic-hybrid` - Hybrid search demo

**Knowledge Base (knowledge-ai):**
- `knowledge-ingest` - Ingest documentation
- `knowledge-query` - RAG queries
- `knowledge-export` - Export knowledge
- `knowledge-stats` - Show statistics

**Consensus (consensus-ai):**
- `consensus-chat` - Interactive AI chat with visual indicators
- `consensus-review` - Multi-AI code review
- `consensus-solve` - Fix issues with consensus
- `consensus-validate` - Validate any content

## Visual Indicators

Skills using consensus-ai show **colored output** to indicate multi-AI mode:

```
╔═══════════════════════════════════════════╗
║ 🔄 CONSENSUS MODE ACTIVE                  ║
╚═══════════════════════════════════════════╝

[CLAUDE] 🔵 Analyzing...
[GPT-4]  🟢 Analyzing...
[GEMINI] 🟡 Analyzing...
[ARBITER] 🔴 Selecting best...

✅ CONSENSUS REACHED
```

## Features

- ✅ **Interactive** - Real-time feedback and progress
- ✅ **Visual** - Colored output, progress bars, status indicators
- ✅ **Multi-AI** - Consensus validation using arbiter/worker pattern
- ✅ **Model Agnostic** - Works with Claude, GPT-4, Gemini, Haiku
- ✅ **Composable** - Skills combine multiple libraries
- ✅ **Production Ready** - Error handling, retries, validation

## Installation

### From Source

```bash
git clone https://github.com/FlossWare/skills-ai.git
cd skills-ai

# Skills are ready to use with Claude Code
claude run <skill-name>
```

### Dependencies

Skills use FlossWare AI libraries:

```bash
# Install all libraries
pip install vectordb-ai semantic-search-ai knowledge-ai consensus-ai
```

## Examples

### Vector Database Search

```bash
# Search for similar content
claude run vectordb-search "authentication implementation"

# Output shows:
# - Top results with similarity scores
# - Source locations
# - Metadata
```

### Knowledge Ingestion

```bash
# Ingest documentation
claude run knowledge-ingest /path/to/docs/

# Progress:
# ┌─────────────────────────────────────┐
# │ Ingesting: README.md     [████] 25% │
# │ Ingesting: API.md        [████] 50% │
# │ Ingesting: GUIDE.md      [████] 75% │
# │ Complete!                [████] 100%│
# └─────────────────────────────────────┘
```

### Consensus Chat

```bash
# Interactive chat with multi-AI validation
claude run consensus-chat

# Shows colored output for each AI
# Full consensus validation
# Attribution tracking
```

### Semantic Reranking

```bash
# Rerank search results for better relevance
claude run semantic-rank "how to configure SSL"

# Shows before/after rankings
# Relevance scores
# Cross-encoder results
```

## Project Structure

```
skills-ai/
├── README.md
├── SKILLS_INDEX.md
├── LICENSE
│
├── vector-database/
│   ├── vectordb-search.js
│   ├── vectordb-migrate.js
│   ├── vectordb-export.js
│   └── vectordb-import.js
│
├── semantic-search/
│   ├── semantic-rank.js
│   ├── semantic-filter.js
│   └── semantic-hybrid.js
│
├── knowledge/
│   ├── knowledge-ingest.js
│   ├── knowledge-query.js
│   ├── knowledge-export.js
│   └── knowledge-stats.js
│
└── consensus/
    ├── consensus-chat.js
    ├── consensus-review.js
    ├── consensus-solve.js
    └── consensus-validate.js
```

## FlossWare AI Ecosystem

Skills AI is part of the FlossWare AI ecosystem:

- **vectordb-ai** - Vector database adapters (9 backends)
- **semantic-search-ai** - Semantic search toolkit
- **knowledge-ai** - Knowledge ingestion and RAG
- **consensus-ai** - Multi-AI orchestration (arbiter/worker pattern)
- **skills-ai** - Executable workflows (this project)

## Documentation

- [SKILLS_INDEX.md](SKILLS_INDEX.md) - Complete skill catalog
- [VISUAL_INDICATORS.md](VISUAL_INDICATORS.md) - Visual feedback guide
- [CONSENSUS_PATTERN.md](CONSENSUS_PATTERN.md) - Arbiter/worker pattern
- Individual skill docs in each directory

## Contributing

Contributions welcome! See individual skill files for examples.

## License

GPL-3.0

## Support

**Issues:** https://github.com/FlossWare/skills-ai/issues
**Docs:** See SKILLS_INDEX.md
**FlossWare:** https://github.com/FlossWare
