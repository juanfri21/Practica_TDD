module.exports = class Lista {
	#elementos;

	constructor() {
		this.#elementos = [];
	}

	count() {
		return this.#elementos.length;
	}
	find() {
		if (this.#elementos.length == 1) {
			return this.#elementos[0].value;
		}
		return NaN;
	}
	findKeyIndex(key) {
		let found = NaN;
		if (this.count()) {
			this.#elementos.forEach((element, index) => {
				if (Object.keys(element)[0] === key) {
					found = index;
				}
			});
		}
		return found;
	}
	add(key, value) {
		let found_index = this.findKeyIndex(key);
		if (!isNaN(found_index)) {
			this.#elementos[found_index][`${key}`] = value;
			return 'actualizado'
		} else {
			this.#elementos.push({ [`${key}`]: value });
			return 'no_actualizado'
		}
	}
	update(key, value) {}
	getByKey(key) {
		if (this.#elementos.length == 1) {
			return this.#elementos[0][key];
		}
		return NaN;
	}
};
