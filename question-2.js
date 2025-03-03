// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity=200;
inventory.unshift({ name: "Orange", price: 20, quantity: 300 })
let InventoryCost= function(inventoryArray){
  let sumCost=0 ;
  for (index of inventoryArray){
   sumCost = sumCost+index.price*index.quantity;
  }return sumCost;
}


console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก "+InventoryCost(inventory)+" บาท")

