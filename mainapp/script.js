class GoodsItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.item.image}" alt="Card image cap">
            <div class="card-body text-center">
                <h5 class="card-title">${this.item.title}</h5>
                <p class="card-text">${this.item.price}</p>
                <a href="#" class="btn btn-outline-secondary">check details</a>
            </div>
        </div>
        `;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchData() {
        this.goods = [
            {title: 'Shirt', price: 150, image: "https://a.lmcdn.ru/img600x866/M/P/MP002XW047N4_12804328_1_v1_2x.jpg"},
            {title: 'Socks', price: 20, image: "https://a.lmcdn.ru/product/M/P/MP002XW04FOT_12975464_1_v1.jpg"},
            {title: 'Jacket', price: 350, image: "https://a.lmcdn.ru/img600x866/I/X/IX001XW00U8W_13143761_2_v2.jpeg"},
            {title: 'Shoes', price: 250, image: "https://a.lmcdn.ru/product/D/R/DR004AUKPTG7_11968908_1_v2.jpg"},
        ];
    }

    render() {
        const goodsString = this.goods.map(element => {
            const item = new GoodsItem(element);
            return item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsString.join('');
    }
}

const list = new GoodsList();
list.fetchData();
list.render();