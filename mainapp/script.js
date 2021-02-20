const goods = [
    {title: 'Shirt', price: 150, image: "https://bpm.hse.ru/Runtime/site/img/logo.svg"},
    {title: 'Socks', price: 20,image: "https://bpm.hse.ru/Runtime/site/img/logo.svg"},
    {title: 'jacket', price: 350,image: "https://bpm.hse.ru/Runtime/site/img/logo.svg"},
    {title: 'Shoes', price: 250,image: "https://bpm.hse.ru/Runtime/site/img/logo.svg"},
];

const renderGoodsItem = (title, price, image) => `<div class="goods-item"><img src="${image}" alt="picture" class="img"><h3>${title}</h3><p>${price} usd</p></div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}

renderGoodsList(goods);
