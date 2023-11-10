type Item = {
	label: string;
	url: `/${string}`;
};
type NavigationItem = {
	items: Item[];
} & Item;

type NavigationItems = NavigationItem[];

export default [] satisfies NavigationItems;
