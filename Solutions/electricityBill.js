// Electricity Bill Calculator
// Write a program that calculates the electricity bill based on units consumed using different rates for different slabs.

// 100 and below = 3
// 100-200 = 5
// 200-300 = 7
// 300 above = 10

function electricityBill(units) {
  let totalBill;

  if (units <= 100) {
    // fix:- added less than equal to.
    totalBill = units * 3;
  } else if (units > 100 && units <= 200) {
    // fix:- fixed the condition for 100-200 range
    totalBill = 100 * 3 + (units - 100) * 5;
    // Fixed the brackets to get right result.
  } else if (units > 200 && units <= 300) {
    // fix:- Fixed the condition for 200-300 range
    console.log(units);

    totalBill = 100 * 3 + 100 * 5 + (units - 200) * 7;
    // Fixed the brackets to get right result.
  } else {
    totalBill = 100 * 3 + 100 * 5 + 100 * 7 + (units - 300) * 10;
    // Fixed the brackets to get right result.
  }

  console.log(`Total Electricity Bill: ${totalBill}`);
}
