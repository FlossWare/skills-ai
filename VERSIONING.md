# X.Y Versioning

Skills AI uses **X.Y versioning** (Major.Minor) - no patch numbers.

## Why X.Y?

**Every merge to main is a release candidate.**

- Simple: Only two numbers (0.1, 0.2, 1.0, 1.1)
- Clear: Major.Minor, no confusion
- Fast: Auto-increment on every merge
- Consistent: Same as all FlossWare AI projects

## How It Works

### Automatic Versioning

1. **Push to main**
2. **GitHub Actions runs**
3. **Version auto-bumps** (0.1 → 0.2 → 0.3)
4. **Git tag created** (v0.2)
5. **GitHub Release published**

### Version File

Current version in `VERSION`:
```
0.1
```

### Git Tags

```bash
# List all versions
git tag -l

# Checkout specific version
git checkout v0.2
```

---

## Version Bumping

### Minor Bumps (Default)

Every merge to main bumps the minor version:

```
0.1 → 0.2 → 0.3 → 0.4 → ... → 0.99 → 1.0
```

### Major Bumps

Manually bump major version when:
- Breaking API changes
- Major feature milestones
- Significant rewrites

**How to bump major:**

```bash
# Update VERSION file
echo "1.0" > VERSION

# Commit and push
git add VERSION
git commit -m "chore: bump to 1.0 - breaking changes [skip ci]"
git push
```

---

## Release Process

### Automatic (Every Merge)

GitHub Actions automatically:
1. Reads current version from `VERSION`
2. Bumps minor version
3. Updates `VERSION` file
4. Creates git tag (v0.X)
5. Pushes tag
6. Creates GitHub Release

### Release Notes

Auto-generated from commits since last release.

**Example release notes:**
```
## Skills AI v0.2

**X.Y Versioning:** Every merge to main is a release candidate.

### What's New
- Added consensus-chat skill
- Added vectordb-search skill
- Updated documentation

### Installation
git clone https://github.com/FlossWare/skills-ai.git
cd skills-ai
git checkout v0.2
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v0.1 | 2026-06-07 | Initial release, consensus-chat |
| v0.2 | TBD | Auto-bumped on next merge |

---

## Comparison with Other Systems

| System | Format | Example | Skills AI |
|--------|--------|---------|-----------|
| **Semantic Versioning** | X.Y.Z | 1.2.3 | ❌ Too complex |
| **CalVer** | YYYY.MM.DD | 2026.06.07 | ❌ Not feature-based |
| **X.Y Versioning** | X.Y | 0.1, 0.2, 1.0 | ✅ Perfect fit |

---

## Installing Specific Versions

### Latest Version

```bash
git clone https://github.com/FlossWare/skills-ai.git
cd skills-ai
```

### Specific Version

```bash
git clone https://github.com/FlossWare/skills-ai.git
cd skills-ai
git checkout v0.2
```

### List Available Versions

```bash
git tag -l
# Output:
# v0.1
# v0.2
# v0.3
```

---

## CI/CD Workflow

**File:** `.github/workflows/release.yml`

**Triggers:**
- Push to `main` branch

**Steps:**
1. Get current version from `VERSION` file
2. Bump minor version (X.Y → X.(Y+1))
3. Update `VERSION` file
4. Commit with `[skip ci]` to avoid loop
5. Create git tag
6. Push tag
7. Create GitHub Release

---

## Development Workflow

### Working on Features

```bash
# Create feature branch
git checkout -b feature/my-skill

# Make changes
# ... edit files ...

# Commit
git commit -m "feat: add my-skill"

# Push
git push origin feature/my-skill

# Create PR → merge to main
# Version auto-bumps!
```

### Checking Version

```bash
# Current version
cat VERSION

# Latest tag
git describe --tags --abbrev=0

# All versions
git tag -l
```

---

## FlossWare AI Ecosystem Versions

All projects use X.Y versioning:

| Project | Current Version |
|---------|----------------|
| vectordb-ai | 0.3 |
| semantic-search-ai | 0.2 |
| knowledge-ai | 0.4 |
| consensus-ai | 0.2 |
| **skills-ai** | **0.1** |

---

## Summary

**Skills AI uses X.Y versioning:**

- ✅ Simple (Major.Minor only)
- ✅ Automatic (every merge bumps version)
- ✅ Tagged (git tags for every release)
- ✅ Consistent (same as all FlossWare AI projects)

**Every merge to main = new release!** 🚀
