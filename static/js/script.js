const API_ROOT = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const promisedRequest = (path = '', method = 'GET', body) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${API_ROOT}/${path}`);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send()
    });
}


class GoodsItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `
            <div class="item">
                <h2>${this.item.product_name}</h2>
                <p>${this.item.price}</p>
            </div>
        `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.sumOfGoods = undefined;
    }

    fetchData() {
        promisedRequest('catalogData.json')
            .then((answerFromServer) => {
                this.goods = JSON.parse(answerFromServer);
                this.render()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getTotalPrice() {
        promisedRequest('catalogData.json')
            .then((answerFromServer) => {
                this.goods = JSON.parse(answerFromServer);
                this.sumOfGoods = this.goods.reduce(
                    (accumulator, currentElement) => accumulator + currentElement.price,
                    0
                );
            })
    }

    render() {
        const goodsString = this.goods.map(element => {
            const item = new GoodsItem(element);
            return item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsString.join(' ');
    }
}


class Basket {

    constructor() {
        this.basket = []
    }

    fetchData() {
        promisedRequest('getBasket.json')
            .then((answerFromServer) => {
                this.basket = JSON.parse(answerFromServer);
                this.render()
                return this.basket;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    addItem(item) {
        promisedRequest('getBasket.json')
            .then((answerFromServer) => {
                this.basket.contents.forEach(elem => { if (Number(item) === elem.id_product){console.log('uspekh')}})
            })

    }

    removeItem() {

    }

    changeQuantity() {

    }

    applyCoupon() {

    }

    getDeliveryPrice() {

    }

    createOrder() {

    }

    clear() {

    }

    getTotalPrice() {

    }

    render() {
        const basketString = this.goods.map(element => {
            const item = new BasketItem(element);
            return item.render();
        });
        document.querySelector('.goods-list').innerHTML = basketString.join(' ');

    }
}


class BasketItem {

    constructor(item) {
        this.item = item;
    }

    changeType() {

    }

    removeItem() {

    }

    changeQuantity() {

    }

    render() {
        return `
            <div class="item">
                <h2>${this.item.product_name}</h2>
                <p>${this.item.price}</p>
            </div>
        `;
    }
}


const list = new GoodsList();
list.fetchData();
list.getTotalPrice();
console.log(list);
cart = new Basket();
cart.fetchData()
console.log(cart.addItem('123'));