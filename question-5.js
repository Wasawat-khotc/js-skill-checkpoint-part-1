// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode){
  costSum=0;
  for(cost of products){
    costSum= costSum+cost.price*cost.quantity
  }
  if (promotionCode==="SALE20"){
    costSum=costSum*0.8;
  }else if (promotionCode==="SALE50"){
    costSum=costSum*0.5;
  }else{
    costSum;
  }
return costSum;
};

console.log(calculateTotalPrice(products,""))
console.log(calculateTotalPrice(products,"SALE20"))
console.log(calculateTotalPrice(products,"SALE50"))