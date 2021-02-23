const goods = [
    {title: 'Shirt', price: 150, image: "https://a.lmcdn.ru/img600x866/M/P/MP002XW047N4_12804328_1_v1_2x.jpg"},
    {title: 'Socks', price: 20, image: "https://a.lmcdn.ru/product/M/P/MP002XW04FOT_12975464_1_v1.jpg"},
    {title: 'jacket', price: 350, image: "https://a.lmcdn.ru/img600x866/I/X/IX001XW00U8W_13143761_2_v2.jpeg"},
    {title: 'Shoes', price: 250, image: "https://a.lmcdn.ru/product/D/R/DR004AUKPTG7_11968908_1_v2.jpg"},
];

const renderGoodsItem = (title, price, image) => `
<div class="col-3" style="width: 270px;">
<img src="${image}" alt="picture" height="250" class="img">
<div ><p class="txt"><b>${title}</b></p>
<p class="txt">${price} usd</p>
</div>
</div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}

renderGoodsList(goods);
