const fs = require('fs');

const specPath = module.parent.filename;
if (!specPath.endsWith('.test.js')) {
	throw new Error(`expected **.test.js, but included from: ${specPath}`);
}
const prefixPath = specPath.slice(0, -8);
const inputPath = prefixPath + '.txt';

// Load the test target.
module.exports = require(prefixPath);
const { solution } = module.exports;

// Load the test input.
global.inputFile = '';
if (fs.existsSync(inputPath)) {
	try {
		// Trim the trailing newline at EOF if present.
		global.inputFile = fs.readFileSync(inputPath, 'utf8').trim();
	} catch (e) {
		console.log(e.message);
	}
}

// Create the test harness.
const wrapTarget = (fn) => (expectedValue, input) => {
	if (input) {
		// example specified
		test(input, () =>
			expect(fn(input)).toBe(expectedValue)
		);
	} else {
		// use input file
		test('input file', () => {
			const output = fn(inputFile);
			if (expectedValue === undefined) {
				// Before expected value is known, just log the value.
				console.log(output);
			} else {
				expect(output).toBe(expectedValue);
			}
		});
	}
};
global.verify = wrapTarget(solution);
global.solution = solution;
