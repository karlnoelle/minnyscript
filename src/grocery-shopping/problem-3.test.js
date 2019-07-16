const { readFileSync } = require('fs');
const UNIT_PRICES_BY_ITEM =
	JSON.parse(readFileSync(`${__dirname}/item-prices.json`, 'utf8'));

/**
 * Problem 3
 *
 * @param quantity number of units
 * @param itemName item identifier
 * @returns {number} price, or falsy if item is unknown
 */
const priceCheck = (quantity, itemName) => {

	return 0.00;
};

/**
 * Bonus Problem 3
 *
 * @param itemNames comma-separated list of item names (optional)
 * @returns {number} of highest-priced item from the list, or of
 * all the available items (if itemNames is undefined)
 */
const maxPricedItem = (itemNames) => {
};

/*** Test cases ***/

describe('Problem 3: priceCheck', () => {
	test('in the coconut', () => {
		const result = priceCheck(1, 'limes');
		expect(result).toBe(3.68);
	});
	test('a spare is in the car', () => {
		const result = priceCheck(2, 'umbrella');
		expect(result).toBe(19.98);
	});
	test('minimum to stock in any freezer', () => {
		const result = priceCheck(3, 'ice cream');
		expect(result).toBe(10.47);
	});
	test('anti-vampire recipe', () => {
		const result = priceCheck(6, 'garlic');
		expect(result).toBe(4.74);
	});
	test('baker\'s dozen', () => {
		const result = priceCheck(13, 'eggs');
		expect(result).toBe(3.25);
	});
	test('per baby, look it up!', () => {
		const result = priceCheck(5250, 'diapers');
		expect(result).toBe(945.00);
	});
	test('that poor cow', () => {
		const result = priceCheck(6400, 'milk');
		expect(result).toBe(14848.00);
	});
	test('speling is for sukerz', () => {
		expect(priceCheck(4, 'dipers')).toBeFalsy();
		expect(priceCheck(4, 'dypers')).toBeFalsy();
		expect(priceCheck(8, 'hummis')).toBeFalsy();
		expect(priceCheck(16, 'parsly')).toBeFalsy();
		expect(priceCheck(17, 'keenwah')).toBeFalsy();
		expect(priceCheck(20, 'tomatoe paste')).toBeFalsy();
		expect(priceCheck(21, 'umbrela')).toBeFalsy();
		expect(priceCheck(24, 'zylital')).toBeFalsy();
		expect(priceCheck(26, 'zuchini')).toBeFalsy();
		expect(priceCheck(26, 'zuckini')).toBeFalsy();
	});
});

describe('Bonus Problem 3: maxPricedItem', () => {
	test.skip('one item', () => {
		const result = maxPricedItem('eggs');
		expect(result).toBe(0.25);
	});
	test.skip('a healthy breakfast', () => {
		const result = maxPricedItem('apples, bananas, milk, yogurt');
		expect(result).toBe(2.32);
	});
	test.skip('with unavailable item', () => {
		const result = maxPricedItem('apples, oranges');
		expect(result).toBe(2.13);
	});
	test.skip('no items specified', () => {
		const result = maxPricedItem('');
		expect(result).toBe(12.46);
	});
});
