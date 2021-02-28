class Hamburger {
    constructor() {
        this.toppingList = {'cheese': [10, 20], 'salad': [20, 5], 'potato': [15, 10]};
        this.condimentList = {'sprinkle with seasoning': [15, 0], 'use mayonnaise': [20, 5]};
        this.hamburgerSize = {'large': [50, 20], 'small': [100, 40]};
        this.infoAboutPrice = undefined;
        this.infoAboutCalories = undefined;
        this.selectSize()
    }
    selectSize() {
        let answer = prompt('small or large?');
        console.log(this.hamburgerSize[answer]);
        this.infoAboutPrice = this.hamburgerSize[answer][0];
        this.infoAboutCalories = this.hamburgerSize[answer][1];
        this.selectTopping()
    }
    selectTopping() {
        console.log(this.toppingList);
        let answer = prompt('with which topping? (cheese, salad, potato)')
        console.log(this.toppingList[answer]);
        this.infoAboutPrice += this.toppingList[answer][0]
        this.infoAboutCalories += this.toppingList[answer][1]
    }
}