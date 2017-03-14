
function VendingMachine() {}

let validCoins = {'nickel': 0.05, 'dime': 0.10, 'quarter': 0.25};
let products = {'cola': 1.00, 'chips': 0.50, 'candy': 0.65}
let currentAmount = 0;
let priceDisplay = '';
let coinReturn = [];
let purchaseComplete = false;

VendingMachine.prototype.display = () => {
    if(purchaseComplete) {
	purchaseComplete = false;
	return 'INSERT COIN';
    }
    else if(priceDisplay != '') {
	checkPriceDisplay();
	return priceDisplay;
    } else if (currentAmount > 0) {
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

VendingMachine.prototype.pressButton = (button) => {
    let price = products[button];
    if(price <= currentAmount) {
	priceDisplay = 'THANK YOU';
    } else {
	priceDisplay = `PRICE ${price.toFixed(2)}`;
    }
}

function checkCoin(coin) {
    if(coin in validCoins) {
	return validCoins[coin];
    }
    return 0;
}

function checkPriceDisplay() {
    if(priceDisplay == 'THANK YOU') {
	purchaseComplete = true;
    }
}

module.exports = VendingMachine;
