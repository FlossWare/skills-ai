# Skills Index

**Complete catalog of all Skills AI workflows**

Last Updated: 2026-06-07  
Total Skills: 1  
Version: 0.1

---

## Quick Reference

### By Library

| Library | Skills |
|---------|--------|
| **consensus-ai** | consensus-chat |
| **vectordb-ai** | Coming soon |
| **semantic-search-ai** | Coming soon |
| **knowledge-ai** | Coming soon |

---

## All Skills (Alphabetical)

### consensus-chat

**File:** `consensus/consensus-chat.js`, `consensus/consensus-chat.md`  
**Purpose:** Interactive AI chat with multi-AI consensus validation  
**Usage:** `claude run consensus-chat`  
**Visual:** ✅ Colored output for each AI worker and arbiter  
**Models:** Claude Opus, GPT-4, Gemini Pro (workers), Claude Sonnet (arbiter)

**Features:**
- 🔄 Multi-AI validation
- 🎨 Visual indicators (colored output)
- 📊 Confidence scores
- 🔍 Full attribution
- ⚡ Interactive chat experience

**Example:**
```bash
claude run consensus-chat

# Shows:
# ╔═══════════════════════════════════════════╗
# ║ 🔄 CONSENSUS MODE ACTIVE                  ║
# ╚═══════════════════════════════════════════╝
#
# [CLAUDE] 🔵 Analyzing...
# [GPT-4]  🟢 Analyzing...
# [GEMINI] 🟡 Analyzing...
# [ARBITER] 🔴 Selecting best...
#
# ✅ CONSENSUS REACHED
# Confidence: 95.0%
```

---

## Coming Soon

### Vector Database Skills

**Using vectordb-ai:**
- `vectordb-search` - Interactive vector search
- `vectordb-migrate` - Migrate between backends (ChromaDB, Pinecone, etc.)
- `vectordb-export` - Export vector data
- `vectordb-import` - Import vector data

### Semantic Search Skills

**Using semantic-search-ai:**
- `semantic-rank` - Rerank search results
- `semantic-filter` - Advanced filtering with MongoDB operators
- `semantic-hybrid` - Hybrid search (semantic + keyword)

### Knowledge Skills

**Using knowledge-ai:**
- `knowledge-ingest` - Ingest documentation
- `knowledge-query` - RAG-based queries
- `knowledge-export` - Export knowledge base
- `knowledge-stats` - Show statistics

### More Consensus Skills

**Using consensus-ai:**
- `consensus-review` - Multi-AI code review
- `consensus-solve` - Fix issues with consensus
- `consensus-validate` - Validate any content

---

## Color Legend

Visual indicators in consensus skills:

| Color | AI | Role |
|-------|----|----|
| 🔵 Blue | Claude | Worker |
| 🟢 Green | GPT-4 | Worker |
| 🟡 Yellow | Gemini | Worker |
| 🔴 Red | Claude Sonnet | Arbiter |
| ✅ Green | System | Consensus |

---

## Statistics

### By Library
- consensus-ai: 1 skill
- vectordb-ai: 0 skills (coming soon)
- semantic-search-ai: 0 skills (coming soon)
- knowledge-ai: 0 skills (coming soon)

### Total
- Total skills: 1
- With documentation: 1 (100%)
- With visual indicators: 1 (100%)

---

## Usage Examples

### Run a Skill

```bash
# Interactive consensus chat
claude run consensus-chat
```

### List Available Skills

```bash
# In the skills-ai directory
ls */*.js
```

### Read Skill Documentation

```bash
# View documentation for a skill
cat consensus/consensus-chat.md
```

---

## Requirements

Different skills have different requirements:

**consensus-chat:**
- Python library: `consensus-ai`
- AI models: Claude, GPT-4, Gemini
- API keys configured

**Future skills:**
- `vectordb-*`: Requires `vectordb-ai`
- `semantic-*`: Requires `semantic-search-ai`
- `knowledge-*`: Requires `knowledge-ai`

---

## Project Structure

```
skills-ai/
├── README.md
├── SKILLS_INDEX.md (this file)
├── VERSION
│
└── consensus/
    ├── consensus-chat.js
    └── consensus-chat.md
```

---

## FlossWare AI Ecosystem

Skills AI is part of the FlossWare AI ecosystem:

- **vectordb-ai** - Vector database adapters
- **semantic-search-ai** - Semantic search toolkit
- **knowledge-ai** - Knowledge ingestion and RAG
- **consensus-ai** - Multi-AI orchestration
- **skills-ai** - Executable workflows (this project)

---

## Documentation

- [README.md](README.md) - Main overview
- [CODE_QUALITY.md](CODE_QUALITY.md) - Quality checks
- [VERSIONING.md](VERSIONING.md) - X.Y versioning guide
- Individual skill docs in each directory

---

## Contributing

Want to add a skill?

1. Create `category/skill-name.js` with meta block
2. Create `category/skill-name.md` with documentation
3. Test the skill
4. Submit PR

See existing skills for examples.

---

## Support

**Issues:** https://github.com/FlossWare/skills-ai/issues  
**Docs:** See individual .md files  
**FlossWare:** https://github.com/FlossWare

---

## Version History

| Version | Skills Added | Date |
|---------|-------------|------|
| v0.1 | consensus-chat | 2026-06-07 |

**Next version (v0.2) will be auto-created on next merge to main!** 🚀
