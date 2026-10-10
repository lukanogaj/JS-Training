function getHeader(data) {
	let end = data.indexOf("\n");

	if (end === -1) {
		end = data.length;
	}

	const header = data
		.slice(0, end)
		.replace(/\r$/, "")
		.replace(/^\uFEFF/, "")
		.split(",");

	const indexes = new Map();

	for (let i = 0; i < header.length; i++) {
		indexes.set(header[i], i);
	}

	if (!indexes.has("value")) {
		throw new Error("Key mismatch");
	}

	return {
		indexes,
		headerEnd: end,
		valueIndex: indexes.get("value"),
	};
}

function validateSearch(search, indexes) {
	for (const key of Object.keys(search)) {
		if (!indexes.has(key)) {
			throw new Error("Key mismatch");
		}
	}
}

function prepareSearch(search, indexes) {
	validateSearch(search, indexes);

	return Object.entries(search).map(([key, value]) => ({
		index: indexes.get(key),
		value: String(value),
	}));
}

function readNeededFields(data, start, end, needed) {
	const fields = new Array(needed.length);

	let column = 0;
	let fieldStart = start;
	let neededPosition = 0;

	for (let i = start; i <= end; i++) {
		if (i === end || data.charCodeAt(i) === 44) {
			while (
				neededPosition < needed.length &&
				needed[neededPosition].index === column
			) {
				let fieldEnd = i;

				if (fieldEnd > fieldStart && data.charCodeAt(fieldEnd - 1) === 13) {
					fieldEnd--;
				}

				fields[needed[neededPosition].slot] = data.slice(fieldStart, fieldEnd);

				neededPosition++;
			}

			if (neededPosition === needed.length) {
				break;
			}

			column++;
			fieldStart = i + 1;
		}
	}

	return fields;
}

function buildNeeded(valueIndex, searches) {
	const indexes = new Set([valueIndex]);

	for (const conditions of searches) {
		for (const condition of conditions) {
			indexes.add(condition.index);
		}
	}

	return [...indexes]
		.sort((a, b) => a - b)
		.map((index, slot) => ({ index, slot }));
}

function buildSlots(needed) {
	const slots = new Map();

	for (const item of needed) {
		slots.set(item.index, item.slot);
	}

	return slots;
}

function matches(fields, conditions, slots) {
	for (const condition of conditions) {
		const actual = fields[slots.get(condition.index)];

		if (actual !== "ANY" && actual !== condition.value) {
			return false;
		}
	}

	return true;
}

function task1(search, data) {
	const { indexes, headerEnd, valueIndex } = getHeader(data);

	const conditions = prepareSearch(search, indexes);
	const needed = buildNeeded(valueIndex, [conditions]);
	const slots = buildSlots(needed);

	let position = headerEnd + 1;

	while (position < data.length) {
		let end = data.indexOf("\n", position);

		if (end === -1) {
			end = data.length;
		}

		if (end > position) {
			const fields = readNeededFields(data, position, end, needed);

			if (matches(fields, conditions, slots)) {
				return fields[slots.get(valueIndex)];
			}
		}

		position = end + 1;
	}

	return "-1";
}

function task2(keys, data) {
	const { indexes, headerEnd, valueIndex } = getHeader(data);

	if (keys.length === 0) {
		return "-1";
	}

	const searches = keys.map((search) => prepareSearch(search, indexes));

	const needed = buildNeeded(valueIndex, searches);
	const slots = buildSlots(needed);

	const found = new Array(searches.length);
	let remaining = searches.length;
	let position = headerEnd + 1;

	while (position < data.length && remaining > 0) {
		let end = data.indexOf("\n", position);

		if (end === -1) {
			end = data.length;
		}

		if (end > position) {
			const fields = readNeededFields(data, position, end, needed);

			for (let i = 0; i < searches.length; i++) {
				if (found[i] !== undefined) {
					continue;
				}

				if (matches(fields, searches[i], slots)) {
					found[i] = Number(fields[slots.get(valueIndex)]);
					remaining--;
				}
			}
		}

		position = end + 1;
	}

	let weightedSum = 0;
	let totalWeight = 0;

	for (const value of found) {
		if (value === undefined) {
			continue;
		}

		const weight = Math.abs(value % 2) === 1 ? 10 : 20;

		weightedSum += value * weight;
		totalWeight += weight;
	}

	if (totalWeight === 0) {
		return "-1";
	}

	return (weightedSum / totalWeight).toFixed(1);
}

if (typeof module !== "undefined" && module.exports) {
	module.exports = { task1, task2 };
}
