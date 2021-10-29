class DonutStore {
    constructor() {
        this.donutsEarned = 0;
        this.numAutoClickers = 0;
        this.autoClickerCost = 100;
        this.numMultipliers = 0;
        this.multiplierCost = 10;
        this.donutsPerClick = 1;
        this.myClickerId = undefined;
    }

////////////////////////////////
// methods
    createDonut() {
        this.donutsPerClick = Math.pow(1.2, this.numMultipliers);
        this.donutsEarned += this.donutsPerClick;
        this.retrieveDonutCount();
    }

    reset() {
        console.log("resetting...");
        this.donutsEarned = 0;
        donutCountOutput.innerText = 0;
        this.numMultipliers = 0;
        this.multiplierCost = 10;
        numMultiplierOutput.innerText = this.numMultipliers;
        multiplierCosting.innerText = this.multiplierCost;
        this.numAutoClickers = 0;
        this.autoClickerCost = 100;
        numAutoClickerOutput.innerText = this.numAutoClickers;
        autoClickerCosting.innerText = this.autoClickerCost;
        this.donutsPerClick = 1;
        donutsPerClickOutput.innerText = this.donutsPerClick;
        this.myClickerId = undefined;
    }

    autoDonut = () => {
        for(let i = 0; i < this.numAutoClickers; i++) {
            console.log("autocreatedonut");
            this.createDonut();
        }
        
    }

    retrieveDonutCount() {
        donutCountOutput.innerText = Math.round(this.donutsEarned);
        }

    purchaseAutoClicker() { 
        if (this.donutsEarned >= this.autoClickerCost) {
            this.donutsEarned -= this.autoClickerCost;
            this.numAutoClickers += 1;
            numAutoClickerOutput.innerText = this.numAutoClickers;
            this.autoClickerCost += this.autoClickerCost * .1; 
            autoClickerCosting.innerText = this.autoClickerCost;
            this.autoClickerEnable();
        }
    }

    purchaseMultiplier() {
        if (this.donutsEarned >= this.multiplierCost) {
            this.donutsEarned -= this.multiplierCost;
            this.numMultipliers += 1;
            numMultiplierOutput.innerText = this.numMultipliers;
            this.multiplierCost += this.multiplierCost * .2;
            multiplierCost.innerText = Math.round(this.multiplierCost);
            donutCountOutput.innerText = Math.round(this.donutsEarned);
            donutsPerClickOutput.innerText = this.donutsPerClick;
        }
    }

    autoClickerCreateDonuts() {
        // add autoclicker event listener
        this.donutsEarned += this.numAutoClickers * Math.pow(1.2, this.numMultipliers);
        this.retrieveDonutCount();
    }

    autoClickerEnable() {
            const myClickerId = setInterval(this.autoDonut, 1000);
    }

}
