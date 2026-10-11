const fs = require("fs");
const lz4 = require("lz4");

const cache = new Map();

function parseCsvData(dataStr) {
	if (cache.has(dataStr)) {
		return cache.get(dataStr);
	}
	const cleanData = dataStr.replace(/\r/g, "");
	const lines = cleanData.trim().split("\n");
	if (lines.length === 0) return { header: [], rows: [] };

	const header = lines[0].split(",").map((h) => h.trim());
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
	const headerKeys = header
		.filter((h) => h !== "value")
		.map((h) => h.trim())
		.sort();

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

// Wykonanie bezpośrednie w celu uzyskania wyniku
try {
	const input = fs.readFileSync("find_match_average_v2.dat.lz4");
	const uncompressed = lz4.decode(input);
	const dataContent = uncompressed.toString("utf8");

	const searchKeysList = [
		{ a: 862984, b: 29105, c: 605280, d: 678194, e: 302120 },
		{ a: 20226, b: 781899, c: 186952, d: 506894, e: 325696 },
	];

	const wynik = task2(searchKeysList, dataContent);
	console.log("WYNIK KOŃCOWY:", wynik);
} catch (err) {
	console.error("BŁĄD:", err.message);
}

module.exports = { task1, task2 };
