import advanced from "./advanced.mjs";
import beginner from "./beginner.mjs";
import skaleChain from "./skaleChain.mjs";

export default {
    label: "Learn",
    items: [
        {
            label: "About SKALE Network",
            link: "/learn/about-skale-network",
        },
        skaleChain,
        beginner,
        advanced,
        { label: "Mainnet Beta", link: "/learn/mainnet-beta" },
        { label: "FAQ", link: "/learn/faq" },
    ]
}