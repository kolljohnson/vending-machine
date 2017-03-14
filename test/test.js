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

    describe('Select Product', () => {
	it('displays price when invalid', () => {
	    machine.pressButton('chips');
	    assert.equal('PRICE 0.50', machine.display());
	});

	it('dispenses product when button pressed and correct change entered', () => {
	    machine.insertCoin('quarter');
	    machine.insertCoin('quareter');
	    machine.pressButton('chips');
	    assert.equal('THANK YOU', machine.display());
	});
    });
});
