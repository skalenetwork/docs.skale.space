import buildingApplications from "./building-applications.mjs";
import howSkaleWorks from "./how-skale-works.mjs";
import runASkaleChain from "./run-a-skale-chain.mjs";
import runASkaleNode from "./run-a-skale-node.mjs";
import skaleBridge from "./skale-bridge.mjs";
import welcome from "./welcome.mjs";

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
        label: "Audits and Security",
        slug: "audits-and-security"
    },
    {
        label: "Faucet",
        link: "https://base-sepolia-faucet.skale.space",
        badge: {
            text: "External",
            variant: "caution"
        }
    },
    {
        label: "Forum",
        link: "https://forum.skale.network",
        badge: {
            text: "External",
            variant: "caution"
        }
    }
]