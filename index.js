
function VendingMachine() {}

let validCoins = {'quarter': 0.25}

VendingMachine.prototype.currentAmount = 0;

VendingMachine.prototype.display = function () {
    if(VendingMachine.prototype.currentAmount > 0) {
	return VendingMachine.prototype.currentAmount.toString();
    } else {
	return 'INSERT COIN';
    }
}

VendingMachine.prototype.insertCoin = function (coin) {
    let amount = checkCoin(coin);
    VendingMachine.prototype.currentAmount += amount;
    VendingMachine.prototype.currentAmount.toFixed(2);
}

function checkCoin(coin) {
    if(coin in validCoins) {
	return validCoins[coin];
    }
}

module.exports = VendingMachine;
