/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/ "../project/static/script.js":
        /*!***********************************!*\
          !*** ../project/static/script.js ***!
          \***********************************/
        /***/ (() => {

            eval("const API_ROOT = 'http://localhost:3000/api';\nconst request = (path = '', method = 'GET', body) => {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = () => {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    console.log({response: xhr.responseText});\n                    resolve(JSON.parse(xhr.responseText));\n                } else {\n                    console.error(xhr.responseText);\n                    reject(xhr.responseText);\n                }\n            }\n        }\n\n        xhr.open(method, `${API_ROOT}/${path}`);\n\n        xhr.setRequestHeader('Content-Type', 'application/json');\n\n        xhr.send(body);\n    });\n}\n\nVue.component('goods-list', {\n    props: ['filteredGoods'],\n    template: `\n        <section class=\"goods\">\n            <goods-item\n                v-for=\"item in filteredGoods\"\n                v-bind:key=\"item.id\"\n                v-bind:item=\"item\"\n                v-on:add=\"$emit('add-item', $event)\"\n            />\n            <goods-empty v-if=\"filteredGoods.length === 0\" />\n        </section>\n    `,\n});\n\nVue.component('goods-item', {\n    props: ['item'],\n    template: `\n        <div class=\"item\">\n            <h2>{{ item.title }}</h2>\n            <p>{{ item.price }}</p>\n            <button name=\"add-to-basket\" v-on:click.prevent=\"$emit('add', item)\">Add to basket</button>\n        </div>\n    `,\n});\n\nVue.component('goods-empty', {\n    template: `\n        <div class=\"goods--empty\">\n            Нет товаров\n        </div>\n    `,\n});\n\nVue.component('v-basket', {\n    props: ['goods', 'total'],\n    template: `\n        <div class=\"basket\">\n            <div class=\"basket-item\" v-for=\"item in goods\">\n                <h4>{{ item.title }}</h4>\n                <p>{{ item.price }} x {{ item.quantity }}</p>\n                <button v-on:click=\"$emit('remove-item', item.id)\">\n                    Удалить\n                </button>\n            </div>\n            <p class=\"basket-total\">Общая стоимость: <b>{{ total }}</b></p>\n        </div>\n    `,\n});\n\nVue.component('goods-search', {\n    props: ['value'],\n    template: `\n        <input v-bind:value=\"value\" v-on:input=\"handleInput\" type=\"text\" class=\"search\" />\n    `,\n    methods: {\n        handleInput(event) {\n            this.$emit('change', event.target.value);\n        },\n    },\n});\n\nVue.component('v-error', {\n    template: `\n        <div class=\"error\">Что-то пошло не так</div>\n    `,\n});\n\nnew Vue({\n    el: '#app',\n    data: {\n        goods: [],\n        searchValue: '',\n        basketGoods: [],\n        isBasketVisible: false,\n        isError: false,\n    },\n    created() {\n        this.fetchGoods();\n        this.fetchBasket();\n    },\n    computed: {\n        filteredGoods() {\n            const regexp = new RegExp(this.searchValue, 'i');\n            return this.goods.filter((goodsItem) =>\n                regexp.test(goodsItem.title)\n            );\n        },\n        total() {\n            return this.basketGoods.reduce(\n                (accumulator, currentElement) =>\n                    accumulator + (currentElement.price * currentElement.quantity),\n                0\n            );\n        }\n    },\n    methods: {\n        async fetchGoods() {\n            try {\n                const res = await fetch(`${API_ROOT}/goods`);\n                const goods = await res.json();\n                this.goods = goods;\n            } catch (error) {\n                console.log(`Can't fetch data`, error);\n                this.isError = true;\n                throw new Error(error);\n            }\n        },\n        async fetchBasket() {\n            try {\n                const res = await fetch(`${API_ROOT}/basket-goods`);\n                const goods = await res.json();\n                this.basketGoods = goods.contents;\n            } catch (error) {\n                console.log(`Can't fetch basket data`, error);\n                throw new Error(error);\n            }\n        },\n        async addItem(item) {\n            try {\n                const res = await fetch(`${API_ROOT}/basket-goods`, {\n                    method: 'POST',\n                    body: JSON.stringify(item),\n                    headers: {\n                        'Content-type': 'application/json'\n                    }\n                });\n                const response = await res.json;\n                if (response.result !== 0) {\n                    const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);\n                    if (itemIndex !== -1) {\n                        this.basketGoods[itemIndex].quantity += 1;\n                    } else {\n                        this.basketGoods.push({...item, quantity: 1});\n                        console.log(itemIndex)\n                    }\n                }\n            } catch (err) {\n                console.error(`Can't add item to basket`, item, this.basketGoods, err);\n            }\n        },\n        async handleRemoveItem(id) {\n            const rawResponse = await fetch(`${API_ROOT}/basket-goods/${id}`, {\n                method: 'DELETE',\n            });\n            const response = await rawResponse.json();\n\n            if (response.result !== 0) {\n                this.basketGoods = this.basketGoods.filter((goodsItem) => goodsItem.id !== parseInt(id));\n                console.log(this.basketGoods);\n            } else {\n                console.error(`Can't remove item from basket`, item, this.basketGoods);\n            }\n        }\n    },\n});\n\n//# sourceURL=webpack://wp/../project/static/script.js?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/
    var __webpack_exports__ = {};
    /******/
    __webpack_modules__["../project/static/script.js"]();
    /******/
    /******/
})()
;