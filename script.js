const products = [
    'Samsung galaxy on 5',
    'Redmi mobile bangladesh',
    'xiomi a2 lite phone',
    'HP laptop G323',
    'High quality processor laptop and mobile',
    'Redmi note 8 plus',
    'iphone 12 max pro mobile high quality'
];

const search = 'mobile';
const myProduct = [];
for (const item of products) {
    if (item.toLowerCase().includes(search)) {
        myProduct.push(item);
    }
}
console.log(myProduct);


for(i==0;i<10;i++){
    console.log(i);
}








/* const search = 'laptop';
const myProduct = [];
for (product of products) {
    if (product.indexOf(search) != -1) {
        myProduct.push(product);
    }
}
console.log(myProduct); */
