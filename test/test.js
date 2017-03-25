const assert = require('chai').assert;
const VendingMachine = require('../index');

describe('Vending Machine', () => {
    
    describe('Accepts Coins', () => {
	let machine = new VendingMachine();
	
	it('should display INSERT COIN when no coins are inserted', () => {
	    assert.equal('INSERT COIN', machine.display());
	});

	it('adds valid coin amount to current amount', () => {
	    machine.insertCoin('quarter');
	    assert.equal('$0.25', machine.display());
	});

        it('accepts dimes', () => {
	    machine.insertCoin('dime');
	    assert.equal('$0.35', machine.display());
	});

	it('accepts nickels', () => {
	    machine.insertCoin('nickel');
	    assert.equal('$0.40', machine.display());
	});

	it('rejects invalid coins', () => {
	    machine.insertCoin('penny');
	    assert.lengthOf(machine.getCoins(), 1);
	});
    });

    describe('Select Product', () => {
	let machine = new VendingMachine();
	
	it('displays price when invalid', () => {
	    machine.pressButton('chips');
	    assert.equal('PRICE $0.50', machine.display());
	});

	it('displays price of candy when button pressed and price is invalid', () => {
	    machine.pressButton('candy');
	    assert.equal('PRICE $0.65', machine.display());
	});

	it('dispenses product when button pressed and correct change entered', () => {
	    machine.insertCoin('quarter', 'quarter');
	    machine.pressButton('chips');
	    assert.equal('THANK YOU', machine.display());
	});

	it('dispenses cola when button pressed and correct change entered', () => {
	    machine.insertCoin('quarter', 'quarter', 'quarter', 'quarter');
	    assert.equal('THANK YOU', machine.display());
	});

	it('dispenses candy when button pressed and correct change entered', () => {
	    machine.insertCoin('quarter', 'quarter', 'nickel', 'dime');
	    machine.pressButton('candy');
	    assert.equal('THANK YOU', machine.display());
	});

	it('displays INSERT COIN after purchase complete', () => {
	    assert.equal('INSERT COIN', machine.display());
	});
    });

    describe('Make Change', () => {
	let machine = new VendingMachine();

	it('returns excess change in the coin return after purchase', () => {
	    machine.insertCoin('quarter', 'quarter', 'quarter');
	    machine.pressButton('candy');
	    assert.deepEqual(['dime'], machine.getCoins());
	});
    });
});
