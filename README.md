# bunserver2

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# How this stack works

We serve up static pages using elysiajs static
These static pages can be rendered by browsers without javascript enabled. Sadly as we use Twind for css, these pages will be unstyled
These static pages include src links to htmx, twind, and a reactive js script
