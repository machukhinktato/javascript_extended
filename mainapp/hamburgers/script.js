class Hamburger {
    constructor() {
        this.topping = ['cheese', 'salad', 'potato'];
        this.listOfCondiment = ['sprinkle with seasoning', 'add mayonnaise']
        this.condimentIsUsed = false;
        this.mayonnaisAdded = false;
    }
    SprinkleWithSeasoning() {
        if (this.condimentIsUsed === true) {
            this.condimentIsUsed = false;
        } else {

        }

    }
    useMayonnaise() {
        this.mayonnaisAdded = true;
    }
}