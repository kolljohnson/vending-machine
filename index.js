
function VendingMachine() {}

let validCoins = {'nickel': 0.05, 'dime': 0.10, 'quarter': 0.25};
let currentAmount = 0;
let coinReturn = [];

VendingMachine.prototype.display = () => {
    if(currentAmount > 0) {
	return currentAmount.toString();
    } else {
	return 'INSERT COIN';
    }
}

VendingMachine.prototype.insertCoin = (coin) => {
    if(checkCoin(coin) > 0) {
	let amount = checkCoin(coin);
	currentAmount += amount;
	currentAmount.toFixed(2);
    } else {
	coinReturn.push(coin);
    }
}

VendingMachine.prototype.coinReturn = () => {
    return coinReturn;
}

function checkCoin(coin) {
    if(coin in validCoins) {
	return validCoins[coin];
    }
    return 0;
}

module.exports = VendingMachine;
