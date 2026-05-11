# SKALE Documentation

> [docs.skale.space](https://docs.skale.space) — Official documentation for the SKALE Network.

**SKALE** is the blockchain for a billion agents — programmable privacy built into the protocol, with zero gas fees, agentic commerce primitives, and horizontal scalability.

This repository powers the SKALE documentation site, built with [Mintlify](https://mintlify.com).

## What is SKALE?

SKALE is a network of independent Layer 1 chains (SKALE Chains) anchored to Ethereum and Base. Unlike traditional blockchains that scale one chain vertically, SKALE scales horizontally — adding more chains as demand grows. Each chain runs on a dedicated subset of validators (all validators run all chains simultaneously via containerization), achieving ~1,500 TPS per chain with 1–2s finality.

### Key Differentiators

| Feature | Description |
|---------|-------------|
| **Programmable Privacy** | Threshold-encrypted transactions, conditional decryption, and confidential tokens — built into consensus via BITE (Blockchain Integrated Threshold Encryption). No ZK circuits, no TEEs. |
| **Zero Gas Fees** | End users never hold gas tokens. Powered by EIP-3009 meta-transactions, SFuel distribution, and credit-based chain models. |
| **Agentic Commerce** | Native x402 (HTTP 402 payments), MPP (Machine Payments Protocol), ERC-8004 agent identity — agents pay agents autonomously. |
| **Horizontal Scalability** | Deploy dedicated SKALE Chains as demand scales. No contention, no shared mempool, no congestion. |
| **Enhanced EVM** | Native precompiled contracts for RNG (VRF), gasless transactions, filestorage, and encryption — no oracles or middleware needed. |

Learn more at [skale.space](https://skale.space) or dive into the docs at [get-started/skale](https://docs.skale.space/get-started/skale).

## Repository Structure

```
docs.skale.space/
├── docs.json               # Mintlify navigation config (all page structure, redirects)
├── custom.css              # Custom Mintlify styles
├── _snippets/              # Reusable MDX includes (chain addresses, AI integrations)
├── get-started/            # Introduction, quick starts, SKL token, agentic builders
├── cookbook/               # Step-by-step tutorials (deployment, privacy, x402, MPP, agents)
├── developers/             # Technical docs (integrate SKALE, privacy, SDKs, bridge, crypto)
├── skale-chain/            # Chain internals (consensus, block rotation, DDOS, precompiles)
├── chain-types/            # AppChain, Credit Chain, Zero-Gas Chain
├── validators/             # Supernode operations, CLI, watchdog, upgrade guides
├── .agents/                # AI agent skills for building with SKALE
│   └── skills/             # Reusable skills (glossary, build, etc.)
└── AGENTS.md               # Full agent guidelines (product pillars, terminology, paths)
```

## Contributing

We welcome contributions to improve SKALE documentation! Whether it's fixing a typo, clarifying a concept, adding a tutorial, or expanding the privacy or agentic commerce sections — every contribution helps.

### Getting Started

1. **Fork** this repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/docs.skale.space.git
   cd docs.skale.space
   ```
3. **Install Mintlify CLI** (if not already installed):
   ```bash
   npm i -g mintlify
   ```
4. **Run the local dev server**:
   ```bash
   mintlify dev
   ```
   This starts a local preview at `http://localhost:3000`.

> **Alternative (Docker):** If `mintlify dev` fails due to Homebrew/Node.js conflicts or you don't want to manage Node versions locally, use Docker Compose instead. Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/).
> ```bash
> docker compose up -d
> ```
> The docs site will be available at `http://localhost:4444`.

### Architecture & Design

The documentation follows a flat `.mdx` file structure organized by **product section** (not by file type). The primary organizational artifact is `docs.json`, which defines:

- **Navigation tabs** — Get Started, Cookbook, Developers, SKALE Chain, Validators
- **Group hierarchy** — Pages nested under groups within each tab
- **Redirects** — Legacy URL mappings (200+ redirects maintained in `docs.json`)

All pages use **MDX** format with Mintlify JSX components:
- `Card`, `CardGroup` — Navigation and reference grids
- `Note`, `Accordion`, `AccordionGroup` — Callouts and expandable content
- `CodeGroup` — Multi-language code tabs
- `Steps` — Numbered tutorial steps

**Content guidelines:**

- **Never reference raw `.mdx` filenames** in links — always use the path slug as listed in `docs.json`
- **Terminology**: SKALE (uppercase), BITE (descriptive names, no phases), x402 (lowercase x), onchain (one word), ERC-20 (hyphenated)
- **Privacy terminology**: Use "confidential" for product/marketing, "encrypted" for technical mechanism, "private" only for absolute cryptographic guarantees
- See [AGENTS.md](./AGENTS.md) for complete terminology standards and product pillar guidelines

### What to Contribute

Good places to start:

- **Tutorials** — Add new recipes to `/cookbook/` for x402, MPP, confidential tokens, agent workflows
- **Fixes** — Clarify ambiguous sections, fix broken links, update chain addresses in `_snippets/`
- **Privacy deep-dives** — Expand `/developers/programmable-privacy/` with more use cases and API references
- **Agentic commerce** — Document agent patterns, facilitator integrations, ERC-8004 usage
- **Validator docs** — Improve node operations, troubleshooting, CLI guides

### Formatting & Linting

- Pages use `.mdx` extension
- Frontmatter with `title` and `description` at the top of each file
- Mintlify-specific components for layout (avoid raw HTML where possible)
- Keep lines reasonably short for readable diffs

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes with clear commit messages
3. Test locally with `mintlify dev`
4. Open a PR with a description of what changed and why
5. Maintainers will review and provide feedback

### Need Help?

- Open a [GitHub Issue](https://github.com/skalenetwork/docs.skale.space/issues)
- Join the [SKALE Discord](https://discord.gg/skale) and open a ticket in `#support`
- Check [AGENTS.md](./AGENTS.md) for the full product context used by AI coding assistants

## Related Resources

- [SKALE Network](https://skale.space) — Main website
- [SKALE Portal](https://base.skalenodes.com) — Chain management dashboard for SKALE on Base
- [SKALE MCP Server](https://docs.skale.space/mcp) — AI-powered docs access
- [llms.txt](https://docs.skale.space/llms.txt) — Full docs in AI-consumable format
- [GitHub](https://github.com/skalenetwork) — All SKALE open-source repositories

---

Documentation for the SKALE Network
