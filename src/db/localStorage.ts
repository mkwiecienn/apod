type Compare<T> = (a: T, b: T) => boolean;

const LS = {
	addItemToArr<T>(key: string, item: T, compare: Compare<T> = (a, b) => a === b) {
		const arr = JSON.parse(localStorage.getItem(key) || '[]');
		const existing = arr.find((x: T) => compare(x, item));

		if (!!existing) return;

		arr.push(item);
		localStorage.setItem(key, JSON.stringify(arr));
	},
	removeItemFromArr<T>(key: string, itemIdProp: keyof T, itemId: T[keyof T]) {
		const arr: T[] = JSON.parse(localStorage.getItem(key) || '[]');
		const index = arr.findIndex((x: T) => x[itemIdProp] === itemId);

		if (index > -1) {
			arr.splice(index, 1);
		}
		localStorage.setItem(key, JSON.stringify(arr));
	},
	getItems(key: string) {
		const el = localStorage.getItem(key);

		if (!!el) {
			return JSON.parse(el);
		}
		return null;
	},
	clear(key: string) {
		localStorage.setItem(key, '');
	}
};

export default LS;
