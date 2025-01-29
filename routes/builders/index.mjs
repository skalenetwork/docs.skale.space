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
            label: "CEX Integration Guide",
            link: "/builders/cex-integration-guide",
            badge: {
                text: "Guide",
                variant: "note",
            },
        },
        {
            label: "Developer FAQ",
            link: "/builders/developer-faq"
        }
    ]
}
