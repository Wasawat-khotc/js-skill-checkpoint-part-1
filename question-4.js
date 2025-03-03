// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
 function findMinQuantity (inventoryArray){
  let minQuantity ;
  let fruit ="";
  for (index of inventoryArray){
   
    if (minQuantity===undefined||minQuantity>index.quantity){
      minQuantity=index.quantity;
      fruit=index.name;
    }
  }return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruit} ซึ่งมี ${minQuantity} ชิ้น`;
 }

 console.log(findMinQuantity(inventory));