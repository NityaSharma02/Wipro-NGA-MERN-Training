// Generate invoice

function generateInvoice(order) {
  return new Promise((resolve) => {
    console.log("Generating invoice...");

    setTimeout(() => {
      resolve(`Invoice generated for Order #${order.id}: ${order.item}`);
    }, 1000);
  });
}

async function handleInvoice() {
  try {
    const order = { id: 101, item: "Pizza", amount: 299 };
    const invoiceMsg = await generateInvoice(order);
    console.log(invoiceMsg);
  } catch (err) {
    console.error("Error:", err);
  }
}

handleInvoice();
