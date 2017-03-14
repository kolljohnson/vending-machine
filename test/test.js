const assert = require('assert');
const VendingMachine = require('../index');

describe('Vending Machine', () => {
    describe('Accepts Coins', () => {
	
	it('should display INSERT COIN when no coins are inserted', () => {
	    let machine = new VendingMachine();
	    assert.equal('INSERT COIN', machine.display());
	});
    });
});
