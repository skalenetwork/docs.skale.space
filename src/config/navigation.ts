type Item = {
	label: string;
	url: `/${string}`;
};
type NavigationItem = {
	items: Item[];
} & Item;

type NavigationItems = NavigationItem[];

export default [
	{
		label: "Builders",
		url: "/builders",
		items: []
	},
	{
		label: "Learn",
		url: "/learn/about-skale-network",
		items: []
	},
	{
		label: "Quick Start",
		url: "/quick-start",
		items: []
	}
] satisfies NavigationItems;
