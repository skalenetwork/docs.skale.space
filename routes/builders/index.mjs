import appDevelopers from "./appDevelopers.mjs";
import chainOperators from "./chainOperators.mjs";
import nodeOperators from "./nodeOperators.mjs";
import tools from "./tools.mjs";

export default {
    label: "Builders",
    items: [
        { label: "Overview", link: "/builders" },
        appDevelopers,
        chainOperators,
        nodeOperators,
        tools,
        {
            label: "Developer FAQ",
            link: "/builders/developer-faq"
        },
        {
            label: "Integrating SKALE",
            link: "/builders/integration-guide",
            badge: {
                text: "Guide",
                variant: "note",
            },
        },
    ]
}