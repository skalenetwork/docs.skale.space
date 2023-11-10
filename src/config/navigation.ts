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
		label: "Develop",
		url: "/developers"
	},
	{
		label: "Learn",
		url: "/learn"
	},
	{
		label: "Quick Start",
		url: "/quick-start"
	},
	{
		label: "Tools",
		url: "/tools"
	},
] satisfies NavigationItems;
