const successVariant = "success";

export default [
	{ "label": "Overview", "slug": "run-a-skale-node/overview" },
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
			{ "label": "Intro to Node CLI", "slug": "run-a-skale-node/node-cli/overview" },
			{ "label": "Changing Node IP", "slug": "run-a-skale-node/node-cli/changing-node-ip" },
			{ "label": "Node SSL Setup", "slug": "run-a-skale-node/node-cli/node-ssl-setup" },
			{
				"label": "v2.0",
				"slug": "run-a-skale-node/node-cli/releases/v2-0",
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
			{ "label": "Intro to Validator CLI", "slug": "run-a-skale-node/validator-cli/overview" },
			{ "label": "Self Recharging Wallets", "slug": "run-a-skale-node/validator-cli/self-recharging-wallets" },
			{
				"label": "v1.2.0",
				"slug": "run-a-skale-node/validator-cli/releases/v1-2-0",
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
			{ "label": "Intro to Watchdog", "slug": "run-a-skale-node/watchdog/overview" }
		]
	},
	{
		"label": "Network Releases",
		"collapsed": true,
		"items": [
			{
				"label": "4.0.1 Upgrade",
				"slug": "run-a-skale-node/releases/4-0-1-upgrade",
				"badge": {
					"text": "Latest Release",
					"variant": successVariant
				}
			},
			{ "label": "4.0.0 Upgrade", "slug": "run-a-skale-node/releases/4-0-0-upgrade" },
			{ "label": "3.1.1 Upgrade (Local SGX)", "slug": "run-a-skale-node/releases/3-1-1-upgrade-local-sgx" },
			{ "label": "3.1.1 Upgrade", "slug": "run-a-skale-node/releases/3-1-1-upgrade" },
			{ "label": "3.1.0 Upgrade", "slug": "run-a-skale-node/releases/3-1-0-upgrade" },
			{ "label": "3.0.3 Upgrade", "slug": "run-a-skale-node/releases/3-0-3-upgrade" },
		]
	}
]
