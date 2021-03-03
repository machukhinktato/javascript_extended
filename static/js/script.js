const API_ROOT = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// const request = (path = '', callback, method = 'GET', body) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 console.log({response: xhr.responseText});
//                 callback(JSON.parse(xhr.responseText));
//             } else {
//                 console.error(xhr.responseText);
//             }
//         }
//     }
//
//     xhr.open(method, `${API_ROOT}/${path}`);
//
//     xhr.send(body);
// }

const promiseRequest = (path = '', method = 'GET', body) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log({response: xhr.responseText});
                        resolve(JSON.stringify(xhr.responseText));
                    } else {
                        console.error(xhr.responseText);
                        reject(new Error);
                    }
                }
            }
            xhr.open(method, `${API_ROOT}/${path}`);
            xhr.send(body);
        }, 1000)
    });
}


// promiseRequest()
//     .then(
//         (path='', method='GET', body) => {
//             xhr.open(method, open(`${API_ROOT}/${path}`));
//             xhr.send(body);
//         }
//     )
//     .catch((dataFromReject) => {
//             console.log(dataFromReject);
//         });

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
    }

    fetchData() {
        promiseRequest('catalogData.json')
            .then((answerFromServer) => {
                // answerFromServer.ForEach( e => {
                console.log(typeof(answerFromServer))
                // console.log(`banana = ${JSON.stringify(answerFromServer)}`)
                return this.goods = answerFromServer;
            })
            .catch((error) => {
                console.log(error);
            })
        // request('catalogData.json', (goods) => {
        //     this.goods = goods;
        //     callback();
        // });
    }

    getTotalPrice() {
        const sum = this.goods.reduce(
            (accumulator, currentElement) => accumulator + currentElement.price,
            0
        );
        console.log(sum)
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
list.render();
list.getTotalPrice();
console.log(list.goods);
