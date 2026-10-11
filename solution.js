const crypto = require("crypto");

// Prosta pamięć podręczna (memoizacja) dla sparsowanych danych
const cache = new Map();

function parseCsvData(dataStr) {
	if (cache.has(dataStr)) {
		return cache.get(dataStr);
	}
	const lines = dataStr.trim().split("\n");
	if (lines.length === 0) return { header: [], rows: [] };

	const header = lines[0].split(",");
	const rows = new Array(lines.length - 1);

	for (let i = 1; i < lines.length; i++) {
		if (lines[i].trim()) {
			rows[i - 1] = lines[i].split(",");
		}
	}

	const result = { header, rows };
	cache.set(dataStr, result);
	return result;
}

function validateKeys(searchObj, header) {
	const searchKeys = Object.keys(searchObj).sort();
	const headerKeys = header.filter((h) => h !== "value").sort();

	if (
		searchKeys.length !== headerKeys.length ||
		!searchKeys.every((val, index) => val === headerKeys[index])
	) {
		throw new Error("Key mismatch");
	}
}

function task1(searchDict, dataStr) {
	const { header, rows } = parseCsvData(dataStr);

	validateKeys(searchDict, header);

	const colIndices = {};
	for (let i = 0; i < header.length; i++) {
		colIndices[header[i]] = i;
	}
	const valueIdx = colIndices["value"];
	const searchEntries = Object.entries(searchDict);

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		let match = true;

		for (let j = 0; j < searchEntries.length; j++) {
			const [k, v] = searchEntries[j];
			if (row[colIndices[k]] !== String(v)) {
				match = false;
				break;
			}
		}

		if (match) {
			return row[valueIdx];
		}
	}

	return "-1";
}

function task2(searchList, dataStr) {
	const { header, rows } = parseCsvData(dataStr);

	if (searchList.length > 0) {
		validateKeys(searchList[0], header);
	}

	const colIndices = {};
	for (let i = 0; i < header.length; i++) {
		colIndices[header[i]] = i;
	}
	const valueIdx = colIndices["value"];

	let totalWeightedValue = 0;
	let totalWeight = 0;

	for (let s = 0; s < searchList.length; s++) {
		const searchDict = searchList[s];
		const searchEntries = Object.entries(searchDict);
		let matchedValStr = null;

		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			let match = true;

			for (let j = 0; j < searchEntries.length; j++) {
				const [k, v] = searchEntries[j];
				if (row[colIndices[k]] !== String(v)) {
					match = false;
					break;
				}
			}

			if (match) {
				matchedValStr = row[valueIdx];
				break;
			}
		}

		if (matchedValStr !== null && matchedValStr !== "-1") {
			const val = parseInt(matchedValStr, 10);
			const weight = val % 2 !== 0 ? 10 : 20;
			totalWeightedValue += val * weight;
			totalWeight += weight;
		}
	}

	if (totalWeight === 0) {
		return "0.0";
	}

	const weightedAvg = totalWeightedValue / totalWeight;
	return weightedAvg.toFixed(1);
}

module.exports = { task1, task2 };
