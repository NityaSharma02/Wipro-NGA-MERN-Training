// fetching order information

function fetchOrder(orderId, callback) {
  console.log("Fetching order...");

  setTimeout(() => {
    const mockData = {
      101: { id: 101, item: "Pizza", amount: 299 },
      102: { id: 102, item: "Burger", amount: 199 }
    };

    const order = mockData[orderId];

    if (!order) {
      return callback("Order not found!", null);
    }

    callback(null, order);
  }, 1000);
}

// Running callback
fetchOrder(101, (err, order) => {
  if (err) return console.error("Error:", err);
  console.log("✔ Order fetched:", order);
});
