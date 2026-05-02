# Agent Guidelines

## BITE Terminology

When documenting BITE features, **reference features by their descriptive names** rather than BITE phases (Phase I, Phase II, etc.).

### Preferred Feature Names

- **BITE encryption** (not "BITE Phase I") - For encrypted transaction amounts
- **Confidential tokens** (not "BITE Phase II") - For native confidential tokens with built-in privacy

### Rationale

Using descriptive names improves clarity and reduces confusion as the BITE protocol evolves. Phases are implementation details; feature names describe what developers can actually use.

### Examples

❌ **Avoid:**
- "BITE Phase I encryption"
- "Phase II confidential tokens"

✅ **Use:**
- "BITE encryption for confidential transaction amounts"
- "Confidential tokens with native privacy"

## Resource Links Policy

When adding resource or reference links to the bottom of any docs page, follow these rules:

- **Only link to external 3rd-party documentation** that meaningfully enhances the page's core content (e.g., Ethereum docs for EVM concepts, OpenZeppelin for contract patterns, Viem/ethers for SDK usage).
- **Do not link to tools or platforms we built on top of** (e.g., Mintlify docs, Mintlify MCP docs). We use them; we don't sell them.
- **Internal SKALE doc cross-links** are fine — those navigate within our own documentation.

### Examples

❌ **Avoid:**
- "See [Mintlify MCP Documentation](https://mintlify.com/docs/...) for more details"

✅ **Use:**
- "See [OpenZeppelin's ERC-20 guide](https://docs.openzeppelin.com/...) for implementation details"
- "See [Using LLMs.txt](/get-started/build-with-ai/using-llms-txt) for more context"

## Other Guidelines

[Add additional agent guidelines here as needed]
