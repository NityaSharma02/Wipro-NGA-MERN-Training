// Process payment

function processPayment(order) {
  console.log("Processing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.amount > 0) {
        resolve(`Payment of ₹${order.amount} for ${order.item} completed`);
      } else {
        reject("Payment failed: Invalid amount!");
      }
    }, 1000);
  });
}

// Running promise
processPayment({ id: 101, item: "Burger", amount: 299 })
  .then((msg) => console.log(msg))
  .catch((err) => console.error("Error:", err));
