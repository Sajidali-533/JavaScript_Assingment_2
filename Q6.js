const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "grey",
    hardDisk: "256 GB",
};

for(let key in productDetails){
    console.log(`${(key)} : ${productDetails[key]}`);
}