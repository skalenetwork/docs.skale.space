import delegators from "./delegators.mjs";
import governance from "./governance.mjs";
import validators from "./validators.mjs";

export default {
    label: "Ecosystem",
    items: [
        { label: "Overview", link: "/ecosystem" },
        delegators,
        governance,
        validators
    ]
}