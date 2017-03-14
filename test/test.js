const assert = require('chai').assert;
const VendingMachine = require('../index');

describe('Vending Machine', () => {
    let machine = new VendingMachine();
    
    describe('Accepts Coins', () => {
	
	it('should display INSERT COIN when no coins are inserted', () => {
	    assert.equal('INSERT COIN', machine.display());
	});

	it('adds valid coin amount to current amount', () => {
	    machine.insertCoin('quarter');
	    assert.equal('0.25', machine.display());
	});

	it('rejects invalid coins', () => {
	    machine.insertCoin('penny');
	    assert.lengthOf(machine.coinReturn(), 1);
	});
    });
});
