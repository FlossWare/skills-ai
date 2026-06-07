# consensus-chat

Interactive AI chat with multi-AI consensus validation and visual indicators.

## Description

Chat with AI where every answer is validated by multiple AI models using the arbiter/worker pattern from consensus-ai.

## Features

- 🔄 **Multi-AI Validation** - Every answer validated by 3+ AIs
- 🎨 **Visual Indicators** - Colored output shows which AI is working
- 📊 **Confidence Scores** - See consensus confidence percentage
- 🔍 **Full Attribution** - Know who proposed and who validated
- ⚡ **Interactive** - Real-time chat experience

## Visual Indicators

```
╔═══════════════════════════════════════════╗
║ 🔄 CONSENSUS MODE ACTIVE                  ║
╚═══════════════════════════════════════════╝

You: How do I implement authentication?

Processing with consensus validation...

[CLAUDE] 🔵 Analyzing...
[GPT-4]  🟢 Analyzing...
[GEMINI] 🟡 Analyzing...
[ARBITER] 🔴 Selecting best...

✅ CONSENSUS REACHED
Confidence: 95.0%

AI (Consensus): Here's how to implement authentication...

──────────────────────────────────────────────
Proposed by: Claude Opus
Validated by: GPT-4, Gemini
──────────────────────────────────────────────
```

## Usage

```bash
# Start interactive chat
claude run consensus-chat
```

## How It Works

1. **You ask a question**
2. **3 workers generate answers independently:**
   - 🔵 Claude Opus
   - 🟢 GPT-4
   - 🟡 Gemini Pro
3. **Arbiter evaluates all proposals:**
   - 🔴 Claude Sonnet
4. **Best answer selected** with confidence score
5. **Attribution shown** - who proposed, who validated

## Consensus Strategy

Uses **rotating arbiter** strategy:
- Each AI becomes arbiter once
- Every AI judges all others
- Fully democratic consensus
- Maximum validation

## Requirements

- Python library: `consensus-ai`
- AI models: Claude, GPT-4, Gemini
- API keys configured

## Installation

```bash
# Install consensus-ai
pip install consensus-ai

# Configure API keys (if not already done)
export ANTHROPIC_API_KEY=your-key
export OPENAI_API_KEY=your-key
export GOOGLE_API_KEY=your-key
```

## Example Session

```
╔═══════════════════════════════════════════╗
║ 🔄 CONSENSUS CHAT MODE                    ║
╚═══════════════════════════════════════════╝

You: What are the security risks in this code?

[CLAUDE] 🔵 Analyzing...
[GPT-4]  🟢 Analyzing...
[GEMINI] 🟡 Analyzing...
[ARBITER] 🔴 Selecting best...

✅ CONSENSUS REACHED
Confidence: 92.5%

AI: The main security risks are:
1. SQL injection vulnerability in line 45
2. Missing input validation on user data
3. Hardcoded credentials in config

Proposed by: GPT-4
Validated by: Claude, Gemini

You: How do I fix the SQL injection?

[CLAUDE] 🔵 Analyzing...
[GPT-4]  🟢 Analyzing...
[GEMINI] 🟡 Analyzing...
[ARBITER] 🔴 Selecting best...

✅ CONSENSUS REACHED
Confidence: 98.0%

AI: Use parameterized queries...

You: exit

📊 SESSION SUMMARY
──────────────────
Questions: 2
Average confidence: 95.3%
Worker contributions:
  Claude: 1 selected
  GPT-4: 1 selected
  Gemini: 0 selected
```

## When to Use

- **Critical decisions** - Need high confidence
- **Security questions** - Want validation
- **Complex problems** - Benefit from multiple perspectives
- **Learning** - See different AI approaches

## When NOT to Use

- Simple questions - Single AI is faster
- Time-sensitive - Consensus takes longer
- Cost-sensitive - Uses multiple API calls

## Color Legend

| Color | AI | Role |
|-------|----|----|
| 🔵 Blue | Claude | Worker |
| 🟢 Green | GPT-4 | Worker |
| 🟡 Yellow | Gemini | Worker |
| 🔴 Red | Claude Sonnet | Arbiter |
| ✅ Green | System | Consensus |

## Configuration

Default configuration:
- Workers: Claude Opus, GPT-4, Gemini Pro
- Arbiter: Claude Sonnet
- Strategy: Rotating (democratic)
- Visual mode: Enabled

## Related Skills

- `consensus-review` - Multi-AI code review
- `consensus-solve` - Fix issues with consensus
- `consensus-validate` - Validate any content

## Learn More

- [ARBITER_WORKER_PATTERN.md](../CONSENSUS_PATTERN.md)
- [VISUAL_INDICATORS.md](../VISUAL_INDICATORS.md)
- [consensus-ai library](https://github.com/FlossWare/consensus-ai)

## License

GPL-3.0
