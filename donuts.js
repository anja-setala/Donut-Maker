//all business logic that drives the program is documented here

class DonutMaker {

    constructor() {
        this.timer;
        this.reset();
    }

    reset() {
        this.donutCount = 0; // number of donuts
        this.multiplier = 1; // amount of donuts per click by user
        this.autoClickerCount = 0;
        this.autoClickerCost = 100; //100 donuts
    }

    startTimer(updateDisplay) {
        if (this.timer == null) { //if timer has not started, start timer
            this.timer = setInterval(() => { //set interval is set in the timer
                updateDisplay();
            }, 1000); //1000 milliseconds
        }
    }

    getAutoClicker() {
        return this.autoClickerCount;
    }

    makeDonuts() {
        this.donutCount += this.multiplier;
    }

    getDonuts() {
        return Math.round(this.donutCount);
    }

    updateAuto() {
        this.donutCount = this.donutCount + (this.autoClickerCount);
    }

    getAutoClickerCost() {
        return Math.round(this.autoClickerCost);
    }

    autoClick() {
        if (!this.checkAuto()) {
            this.autoClickerCount++;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost += (this.autoClickerCost * 0.1);
        }
    }

    checkAuto() {
        if (this.donutCount >= this.autoClickerCost) {
            return false;
        } else {
            return true;
        }
    }


}
