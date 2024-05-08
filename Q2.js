function CalculateTotalCartValue(p1,p2,p3){
    let  sum = p1+p2+p3;
    return sum;
}

let totalPrice = CalculateTotalCartValue(125,20,30);

console.log("The total cart value is " + totalPrice);