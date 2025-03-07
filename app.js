//this controls how the app works; looks for user interaction

const donutMaker = new DonutMaker();
const donutCount = document.getElementById("donutCounter");
const autoClicker = document.getElementById("autoClicker");
const autoCount = document.getElementById("autoCount");
const autoCost = document.getElementById("autoCost");

donutMaker.startTimer(updateDisplay);
updateUI();

function clickDonut() {
    donutMaker.makeDonuts();
    updateUI();
}

function clickAutoDonut() {
    donutMaker.autoClick();
    updateUI();
}

function updateDisplay() {
    donutMaker.updateAuto();
    updateUI();
}

function updateUI() {
    donutCount.innerText = donutMaker.getDonuts();
    autoClicker.disabled = donutMaker.checkAuto();
    autoCount.innerText = donutMaker.getAutoClicker();
    autoCost.innerText = "Next Auto-Clicker Cost:" + donutMaker.getAutoClickerCost();

}

function reset() { //broker between app and ui
    donutMaker.reset();
    updateUI();

}
