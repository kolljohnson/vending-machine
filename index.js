
function VendingMachine() {}

let validCoins = {'nickel': 0.05, 'dime': 0.10, 'quarter': 0.25};
let currentAmount = 0;

VendingMachine.prototype.display = () => {
    if(currentAmount > 0) {
	return currentAmount.toString();
    } else {
	return 'INSERT COIN';
    }
}

VendingMachine.prototype.insertCoin = (coin) => {
    let amount = checkCoin(coin);
    currentAmount += amount;
    currentAmount.toFixed(2);
}

function checkCoin(coin) {
    if(coin in validCoins) {
	return validCoins[coin];
    }
}

module.exports = VendingMachine;
