# Code Quality Tools

Skills AI uses comprehensive code quality checks for workflow validation.

## Automated Checks

Every PR and commit automatically runs:

| Check | Purpose | Status |
|-------|---------|--------|
| **JavaScript Syntax** | Validate all .js files parse correctly | ✅ Required |
| **Meta Blocks** | Every workflow has `export const meta` | ✅ Required |
| **Documentation** | Every .js has matching .md file | ✅ Required |
| **Skill Names** | meta.name matches filename | ⚠️ Warning |
| **Security Scan** | No hardcoded secrets or dangerous commands | ✅ Required |
| **Markdown Linting** | Style guide compliance | ⚠️ Warning |

**Legend:**
- ✅ Required: Must pass or build fails
- ⚠️ Warning: Issues reported but don't fail build

---

## Running Locally

### Check JavaScript Syntax

```bash
# Validate all workflow files
for file in $(find . -name "*.js" -not -path "./node_modules/*"); do
  node --check "$file"
done
```

### Verify Meta Blocks

```bash
# Check all workflows have meta export
for file in $(find . -name "*.js" -not -path "./node_modules/*"); do
  if ! grep -q "export const meta" "$file"; then
    echo "Missing meta in $file"
  fi
done
```

### Check Documentation

```bash
# Verify every .js has .md documentation
for file in $(find . -name "*.js" -not -path "./node_modules/*"); do
  md="${file%.js}.md"
  if [ ! -f "$md" ]; then
    echo "Missing documentation: $md"
  fi
done
```

### Security Scan

```bash
# Check for hardcoded secrets
grep -rn --include="*.js" --include="*.md" \
  -E "(api[_-]?key|password|secret|token)\s*=\s*['\"][^'\"]{10,}" .

# Check for dangerous commands
grep -rn --include="*.js" \
  -E "rm -rf /|dd if=|mkfs\.|shutdown|reboot" .
```

---

## Skill Quality Standards

### Required in Every Skill

1. **Meta Block** (first export):
```javascript
export const meta = {
  name: 'skill-name',
  description: 'One-line description',
  version: '1.0',
}
```

2. **Documentation File** (`skill-name.md`):
```markdown
# skill-name

Description of the skill.

## Usage

\`\`\`bash
claude run skill-name
\`\`\`

## Features

- Feature 1
- Feature 2
```

3. **No Security Issues**:
- No hardcoded API keys
- No dangerous shell commands
- No secrets in comments

---

## CI/CD Integration

### GitHub Actions

Automatically runs on:
- ✅ Every pull request to `main`
- ✅ Every push to `main`
- ✅ Manual trigger

**Workflow:** `.github/workflows/code-quality.yml`

**View results:**
- https://github.com/FlossWare/skills-ai/actions

---

## Best Practices

### Writing Skills

1. ✅ Start with `export const meta`
2. ✅ Include name, description, version
3. ✅ Create matching .md documentation
4. ✅ No hardcoded secrets
5. ✅ Use environment variables for config
6. ✅ Include error handling

### Security

- **Never commit API keys** - use environment variables
- **Validate user input** - prevent injection attacks
- **Avoid destructive commands** - `rm -rf /` etc
- **Review external dependencies** - check what they do

### Documentation

1. ✅ Every skill has .md file
2. ✅ Include usage examples
3. ✅ Document requirements
4. ✅ List features
5. ✅ Show expected output

---

## Fail vs Warn

### ✅ Must Pass (Fail Build)

- **JavaScript syntax** - Code must be valid
- **Meta blocks** - Every workflow needs meta export
- **Documentation** - Every .js needs matching .md
- **Security scan** - No secrets or dangerous commands

### ⚠️ Warning Only

- **Skill names** - Filename should match meta.name
- **Markdown linting** - Style suggestions only

---

## Summary

**Skills AI uses automated quality checks:**

- ✅ JavaScript syntax validation
- ✅ Workflow meta block verification
- ✅ Documentation coverage
- ✅ Security scanning
- ✅ Skill name consistency
- ✅ Markdown linting

**Every commit is automatically checked!** 🚀
