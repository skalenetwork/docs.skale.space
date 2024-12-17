import builders from "./builders/index.mjs";
import ecosystem from "./ecosystem/index.mjs";
import learn from "./learn/index.mjs";

export default [
    builders,
    ecosystem,
    learn,
    {
        label: "Quick Start",
        autogenerate: { directory: "quick-start" },
    },
];