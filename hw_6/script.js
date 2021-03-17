const API_ROOT = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const request = (path = '', method = 'GET', body) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log({response: xhr.responseText});
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    console.error(xhr.responseText);
                    reject(xhr.responseText);
                }
            }
        }

        xhr.open(method, `${API_ROOT}/${path}`);

        xhr.send(body);
    });
}

Vue.component('search-item', {
    props: ['searchValue'],
    template: `
    <input v-bind:value="searchValue" v-on:input="$emit('input', $event.target.value)" >
    `
});

Vue.component('basket', {
    props: ['isBasketVisible'],
    template: `
    <section>
       <button class="basket-button" v-on:click="isBasketVisible = !isBasketVisible">Корзина</button>
<!--        <div v-if="isBasketVisible" class="basket">-->
<!--            <div class="basket-item" v-for="item in basketGoods">-->
<!--                <h4>{{ item.product_name }}</h4>-->
<!--                <p>{{ item.price }} x {{ item.quantity }}</p>-->
<!--                <button v-on:click="removeItem(item.id_product)">-->
<!--                    Удалить-->
<!--                </button>-->
<!--            </div>-->
<!--            <p class="basket-total">Общая стоимость: <b>{{ total }}</b></p>-->
<!--        </div>-->
    </section>
   `
});


Vue.component('goods-list', {
    props: ['filteredGoods'],
    template: `
        <section class="goods">
            <goods-item
                v-for="item in filteredGoods"
                v-bind:key="item.id_product"
                v-bind:item="item"
                v-on:add="$emit('add-item', $event)"
            />
            <goods-empty v-if="filteredGoods.length === 0" />
        </section>
    `,
});

Vue.component('goods-item', {
    props: ['item'],
    template: `
        <div class="item">
            <h2>{{ item.product_name }}</h2>
            <p>{{ item.price }}</p>
            <button name="add-to-basket" v-on:click.prevent="$emit('add', item)">Add to basket</button>
        </div>
    `,
});

Vue.component('goods-empty', {
    template: `
        <div class="goods--empty">
            Нет товаров
        </div>
    `,
});

new Vue({
    el: '#app',
    data: {
        goods: [],
        searchValue: '',
        basketGoods: [],
        isBasketVisible: false,
    },
    created() {
        this.fetchGoods();
        this.fetchBasket();
        console.log('this is', this.searchValue);
    },
    computed: {
        filteredGoods() {
            const regexp = new RegExp(this.searchValue, 'i');
            return this.goods.filter((goodsItem) =>
                regexp.test(goodsItem.product_name)
            );
        },
        total() {
            return this.basketGoods.reduce(
                (accumulator, currentElement) =>
                    accumulator + (currentElement.price * currentElement.quantity),
                0
            );
        }
    },
    methods: {
        async fetchGoods() {
            try {
                const res = await fetch(`${API_ROOT}/catalogData.json`);
                const goods = await res.json();
                this.goods = goods;
            } catch (err) {
                console.log(`Can't fetch data`, error);
                throw new Error(error);
            }
        },
        fetchBasket() {
            request('getBasket.json')
                .then((goods) => {
                    this.basketGoods = goods.contents;
                    console.log('basket', this.basketGoods);
                })
                .catch((error) => {
                    console.log(`Can't fetch basket data`, error);
                });
        },
        addItem(item) {
            request('addToBasket.json')
                .then((response) => {
                    if (response.result !== 0) {
                        const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
                        if (itemIndex > -1) {
                            this.basketGoods[itemIndex].quantity += 1;
                        } else {
                            this.basketGoods.push({...item, quantity: 1});
                        }
                        console.log(this.basketGoods);
                    } else {
                        console.error(`Can't add item to basket`, item, this.basketGoods);
                    }
                })
        },
        removeItem(id) {
            request('deleteFromBasket.json')
                .then((response) => {
                    if (response.result !== 0) {
                        this.basketGoods = this.basketGoods.filter((goodsItem) => goodsItem.id_product !== parseInt(id));
                        console.log(this.basketGoods);
                    } else {
                        console.error(`Can't remove item from basket`, item, this.basketGoods);
                    }
                });
        }
    },
});