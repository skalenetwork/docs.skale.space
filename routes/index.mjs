import buildingApplications from "./building-applications.json";
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
    }
]