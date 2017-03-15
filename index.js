let validCoins = {'quarter': 0.25,'dime': 0.10, 'nickel': 0.05};
let products = {'cola': 1.00, 'chips': 0.50, 'candy': 0.65};

function VendingMachine() {
    let coinReturn = [];
    let currentAmount = 0;
    let priceDisplay = '';
    let purchaseComplete = false;

    this.display = () => {
	let display = 'INSERT COIN'
	if(purchaseComplete) {
	    purchaseComplete = false;
	}
	else if(priceDisplay != '') {
	    this.checkPriceDisplay();
	    display = priceDisplay;
	} else if (currentAmount > 0) {
	    display = `$${currentAmount.toString()}`;
	}
	return display;
    }

    this.insertCoin = (coin) => {
	if(checkCoin(coin) > 0) {
	    let amount = checkCoin(coin);
	    currentAmount += amount;
	    currentAmount.toFixed(2);
	} else {
	    coinReturn.push(coin);
	}
    }
    
    this.getCoins = () => {
	return coinReturn;
    }

    this.pressButton = (button) => {
	let price = products[button];
	if(price <= currentAmount) {
	    priceDisplay = 'THANK YOU';
	    currentAmount -= price;
	    currentAmount = convertAmount(currentAmount);
	if(currentAmount > 0) {
	    this.makeChange();
	}
    } else {
	priceDisplay = `PRICE $${price.toFixed(2)}`;
    }
    }

    this.checkPriceDisplay = () => {
	if(priceDisplay == 'THANK YOU') {
	    purchaseComplete = true;
	    currentAmount = 0;
	}
    }

    this.makeChange = () => {
	Object.keys(validCoins).forEach( (key, index) => {
	    if(currentAmount >= validCoins[key].toFixed(2)) {
		currentAmount -= validCoins[key];
		coinReturn.push(key);
	    }
	});
    }
}


function checkCoin(coin) {
    if(coin in validCoins) {
	return validCoins[coin];
    }
    return 0;
}

function convertAmount(amount) {
    return (Math.round(amount * Math.pow(10,2))/Math.pow(10,2)).toFixed(2);
}

module.exports = VendingMachine;
