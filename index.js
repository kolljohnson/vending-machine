let validCoins = {'quarter': 0.25,'dime': 0.10, 'nickel': 0.05};
let products = {'cola': 1.00, 'chips': 0.50, 'candy': 0.65};

function VendingMachine() {
    let coinReturn = [];
    let currentAmount = 0;
    let priceDisplay = '';
    let purchaseComplete = false;

    this.display = () => {
        let display = 'INSERT COIN';
	
        if(this.isPurchaseComplete()) {
            purchaseComplete = false;
        }
	else if(priceDisplay != '') {
	    this.updatePriceDisplay();
	    display = priceDisplay;
	} else if (currentAmount > 0) {
	    display = `$${convertAmount(currentAmount.toString())}`;
	}
	return display;
    }

    this.insertCoin = (...coins) => {
	coins.forEach((coin) => {
	    if(checkCoin(coin) > 0) {
		let amount = checkCoin(coin);
		currentAmount += amount;
		currentAmount.toFixed(2);
	    } else {
		coinReturn.push(coin);
	    }
	});
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

    this.updatePriceDisplay = () => {
	if(priceDisplay === 'THANK YOU') {
	    purchaseComplete = true;
	    currentAmount = 0;
	}
    }

    this.makeChange = () => {
	Object.keys(validCoins).forEach( (key, index) => {
	    if(this.isAmountLargerThanCoin(validCoins[key])) {
		currentAmount -= validCoins[key];
		coinReturn.push(key);
	    }
	});
    }

    this.isPurchaseComplete = () => {
	return purchaseComplete && currentAmount === 0;
    }

    this.isAmountLargerThanCoin = (coin) => {
	return currentAmount >= coin.toFixed(2);
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
