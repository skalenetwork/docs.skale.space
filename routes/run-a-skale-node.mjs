const successVariant = "success";

export default [
    { "label": "Overview", "slug": "run-a-skale-node/overview" },
    { "label": "Become a Validator", "slug": "run-a-skale-node/become-a-validator" },
    { "label": "Node Types", "slug": "run-a-skale-node/node-types" },
    { "label": "Run Supernode", "slug": "run-a-skale-node/run-supernode" },
    { "label": "Run Sync Node", "slug": "run-a-skale-node/run-sync-node" },
    { "label": "Run Archive Node", "slug": "run-a-skale-node/run-archive-node" },
    { "label": "Compliance Requirements", "slug": "run-a-skale-node/compliance-requirements" },
    { "label": "Swap Limit Fix", "slug": "run-a-skale-node/swap-limit-fix" },
    { "label": "FAQ", "slug": "run-a-skale-node/faq" },
    { "label": "Troubleshooting", "slug": "run-a-skale-node/troubleshooting" },
    {
        "label": "Node CLI",
        "collapsed": true,
        "items": [
            { "label": "Intro to Node CLI", "slug": "run-a-skale-node/node-cli/intro-to-node-cli" },
            { "label": "Changing Node IP", "slug": "run-a-skale-node/node-cli/changing-node-ip" },
            { "label": "Node SSL Setup", "slug": "run-a-skale-node/node-cli/node-ssl-setup" },
            {
                "label": "v2.0",
                "slug": "run-a-skale-node/node-cli/release-v2-0",
                "badge": {
                    "text": "Latest Release",
                    "variant": successVariant
                }
            }
        ]
    },
    {
        "label": "Validator CLI",
        "collapsed": true,
        "items": [
            { "label": "Intro to Validator CLI", "slug": "run-a-skale-node/validator-cli/intro-to-validator-cli" },
            { "label": "Self Recharging Wallets", "slug": "run-a-skale-node/validator-cli/self-recharging-wallets" },
            {
                "label": "v1.2.0",
                "slug": "run-a-skale-node/validator-cli/release-v1-2-0",
                "badge": {
                    "text": "Latest Release",
                    "variant": successVariant
                }
            }
        ]
    },
    {
        "label": "Watchdog",
        "collapsed": true,
        "items": [
            { "label": "Intro to Watchdog", "slug": "run-a-skale-node/watchdog/intro-to-watchdog" }
        ]
    },
    {
        "label": "Releases",
        "collapsed": true,
        "items": [
            {
                "label": "3.1.1 Upgrade (Local SGX)",
                "slug": "run-a-skale-node/releases/upgrade-3-1-1-sgx",
                "badge": {
                    "text": "Latest Release",
                    "variant": successVariant
                }
            },
            { "label": "3.1.1 Upgrade", "slug": "run-a-skale-node/releases/upgrade-3-1-1" },
            { "label": "3.1.0 Upgrade", "slug": "run-a-skale-node/releases/upgrade-3-1-0" },
            { "label": "3.0.3 Upgrade", "slug": "run-a-skale-node/releases/upgrade-3-0-3" },
            { "label": "3.0.2 Upgrade", "slug": "run-a-skale-node/releases/upgrade-3-0-2" }
            
        ]
    }
]