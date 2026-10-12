// Shopping Cart Total
// Write a program that calculates the total price of a product based on the product selected and the quantity entered by the user. The program should support the
// four available products and display the total amount that needs to be paid

function cartTotal(productName, quantity) {
  let headPhone = "999";
  let smartWatch = "1599";
  let PS5 = "1299";
  let iPad = "599";

  let totalPrice;

  if (productName == "headPhone") {
    totalPrice = headPhone * quantity;
  } else if (productName == "smartWatch") {
    totalPrice = smartWatch * quantity;
  } else if (productName == "PS5") {
    totalPrice = PS5 * quantity;
  } else {
    totalPrice = iPad * quantity;
  }

  //   fix:- changed the product name based on which condition is true.

  console.log(`Total Amount To Be Paid: ${totalPrice}`);
}
