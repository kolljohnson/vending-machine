let validCoins = {'quarter': 0.25,'dime': 0.10, 'nickel': 0.05};
let products = {'cola': 1.00, 'chips': 0.50, 'candy': 0.65};

function VendingMachine() {
    let coinReturn = [];
    let currentAmount = 0;
    this.priceDisplay = '';
    this.purchaseComplete = false;

    this.display = () => {
	let display = 'INSERT COIN'
	if(this.purchaseComplete) {
	    this.purchaseComplete = false;
	}
	else if(this.priceDisplay != '') {
	    this.checkPriceDisplay();
	    display = this.priceDisplay;
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
	    this.priceDisplay = 'THANK YOU';
	    currentAmount -= price;
	    currentAmount = (Math.round(currentAmount * Math.pow(10,2))/Math.pow(10,2)).toFixed(2);
	if(currentAmount > 0) {
	    this.makeChange();
	}
    } else {
	this.priceDisplay = `PRICE $${price.toFixed(2)}`;
    }
    }

    this.checkPriceDisplay = () => {
	if(this.priceDisplay == 'THANK YOU') {
	    this.purchaseComplete = true;
	    currentAmount = 0;
	}
    }

    this.makeChange = () => {
	Object.keys(validCoins).forEach(function(key, index) {
	    console.log(currentAmount);
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


module.exports = VendingMachine;
