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
        console.log(this.item)
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
                // return this.goods;
            })
            // .then((answerFromServer) => {
            //     console.log(this.goods);
            //     this.goods = JSON.parse(answerFromServer);
            //     // this.getTotalPrice()
            //     return this.goods
            // })
            .catch((error) => {
                console.log(error);
            })
    }

    getTotalPrice() {
        promisedRequest('catalogData.json')
            .then((answerFromServer) => {
                this.goods = JSON.parse(answerFromServer);
                const sum = this.goods.reduce(
                    (accumulator, currentElement) => accumulator + currentElement.price,
                    0
                );
                this.sumOfGoods = sum;
            })
        // console.log(sum);
        // return this.sum
        // console.log(this.goods);
        // const sum = this.goods.reduce(
        //     (accumulator, currentElement) => accumulator + currentElement.price,
        //     0
        // );
        // console.log(sum)
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
    fetchData() {
        // запрос данных с сервера
    }

    addItem() {


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

    }
}


class BasketItem {

    changeType() {

    }

    removeItem() {

    }

    changeQuantity() {

    }

    render() {

    }
}


const list = new GoodsList();
list.fetchData();
// list.render();
list.getTotalPrice();
console.log(list);
