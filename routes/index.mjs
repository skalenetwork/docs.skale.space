import buildingApplications from "./building-applications.json";
import howSkaleWorks from "./how-skale-works.json";
import runASkaleChain from "./run-a-skale-chain.json";
import runASkaleNode from "./run-a-skale-node.json";
import skaleBridge from "./skale-bridge.json";
import welcome from "./welcome.json";

export default [
    {
        label: "Welcome",
        collapsed: true,
        items: welcome
    },
    {
        label: "Building Applications",
        collapsed: true,
        items: buildingApplications
    },
    {
        label: "Run a SKALE Chain",
        collapsed: true,
        items: runASkaleChain
    },
    {
        label: "SKALE Bridge",
        collapsed: true,
        items: skaleBridge
    },
    {
        label: "Run a SKALE Node",
        collapsed: true,
        items: runASkaleNode
    },
     {
        label: "How SKALE Works",
        collapsed: true,
        items: howSkaleWorks
    },
    {
        label: "Audits",
        slug: "audits"
    },
    {
        label: "FAQ",
        slug: "faq"
    },
    {
        label: "Faucet",
        slug: "faucet"
    },
    {
        label: "Forum",
        link: "https://forum.skale.network",
        badge: {
            text: "External",
            variant: "caution"
        }
    },
    {
        label: "Tools",
        slug: "tools"
    }
]