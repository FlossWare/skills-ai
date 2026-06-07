export const meta = {
  name: 'consensus-chat',
  description: 'Interactive AI chat with consensus/arbiter-worker validation',
  version: '1.0',
}

/**
 * Interactive AI chat using consensus-ai for multi-AI validation
 *
 * Visual indicators show consensus mode:
 * - Colored output for each worker (🔵 Claude, 🟢 GPT-4, 🟡 Gemini)
 * - Arbiter shown in red (🔴)
 * - Progress indicators
 * - Confidence scores
 * - Full attribution
 *
 * Usage:
 *   claude run consensus-chat
 *
 * Example output:
 *   ╔═══════════════════════════════════════════╗
 *   ║ 🔄 CONSENSUS MODE ACTIVE                  ║
 *   ╚═══════════════════════════════════════════╝
 *
 *   [CLAUDE] 🔵 Analyzing...
 *   [GPT-4]  🟢 Analyzing...
 *   [GEMINI] 🟡 Analyzing...
 *   [ARBITER] 🔴 Selecting best...
 *
 *   ✅ CONSENSUS REACHED
 *   Confidence: 95.0%
 *
 * Requires:
 *   - consensus-ai library (pip install consensus-ai)
 *   - Multiple AI models configured (Claude, GPT-4, Gemini)
 */

// This is a demonstration skill showing how to use consensus-ai
// with visual indicators for multi-AI validation

log('╔═══════════════════════════════════════════════════════╗')
log('║ 🔄 CONSENSUS CHAT - Multi-AI Interactive Mode        ║')
log('╚═══════════════════════════════════════════════════════╝')
log('')

phase('Setup')

// Check if consensus-ai is available
const hasConsensus = await agent(
  'Check if consensus-ai Python library is installed. Return true/false.',
  { label: 'check-consensus-ai', schema: { type: 'object', properties: { installed: { type: 'boolean' } } } }
)

if (!hasConsensus?.installed) {
  log('❌ consensus-ai library not found')
  log('')
  log('Install with:')
  log('  pip install consensus-ai')
  log('')
  return { error: 'consensus-ai not installed' }
}

log('✅ consensus-ai available')
log('')

phase('Interactive Chat')

log('Starting interactive consensus chat...')
log('')
log('Features:')
log('  🔵 Claude workers')
log('  🟢 GPT-4 workers')
log('  🟡 Gemini workers')
log('  🔴 Arbiter validation')
log('  ✅ Consensus scoring')
log('')
log('Type your questions below. Each answer is validated by multiple AIs.')
log('')

// Run interactive chat with consensus
const result = await agent(
  `Create an interactive AI chat session using consensus-ai library.

Configuration:
- Workers: claude-opus, gpt-4, gemini-pro
- Arbiter: claude-sonnet
- Strategy: rotating (each AI judges the others)
- Visual mode: true (show colored output)

Visual indicators:
- Show banner on startup
- Use ANSI colors for each AI:
  * \\x1b[94m (blue) for Claude
  * \\x1b[92m (green) for GPT-4
  * \\x1b[93m (yellow) for Gemini
  * \\x1b[91m (red) for Arbiter
  * \\x1b[1m (bold) for consensus
  * \\x1b[0m (reset)

For each question:
1. Show "Processing with consensus validation..."
2. Show worker activity with colors
3. Show arbiter evaluation
4. Show "✅ CONSENSUS REACHED"
5. Show confidence percentage
6. Show final answer
7. Show attribution (who proposed, who validated)

Run until user types 'exit' or empty line.

Return session summary including:
- Number of questions
- Average confidence
- Worker contributions`,
  { label: 'run-chat', phase: 'Interactive Chat' }
)

log('')
log('╔═══════════════════════════════════════════════════════╗')
log('║ 📊 SESSION SUMMARY                                    ║')
log('╚═══════════════════════════════════════════════════════╝')
log(result)

return {
  success: true,
  session_summary: result,
}
