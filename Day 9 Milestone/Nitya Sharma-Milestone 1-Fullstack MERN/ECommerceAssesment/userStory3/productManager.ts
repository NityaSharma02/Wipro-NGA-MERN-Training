// Interface for Product
interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

// Decorator
function LogChange(value: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);
  return function (this: any, ...args: any[]) {
    console.log(`Change detected in: ${methodName}`);
    const result = value.apply(this, args);
    return result;
  };
}

// Product class implementing IProduct
class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public price: number,
    public stock: number
  ) {}

  @LogChange
  updatePrice(newPrice: number) {
    console.log(`Price updated from ₹${this.price} to ₹${newPrice}`);
    this.price = newPrice;
  }

  @LogChange
  updateStock(newStock: number) {
    console.log(`Stock updated from ${this.stock} to ${newStock}`);
    this.stock = newStock;
  }
}

// Store products in Array of Tuples
const products: [number, Product][] = [
  [1, new Product(1, "Laptop", "Electronics", 55000, 10)],
  [2, new Product(2, "Shoes", "Fashion", 2500, 20)],
  [3, new Product(3, "Headphones", "Electronics", 1500, 30)],
];

//Display all products
console.log("Product Inventory:");
for (const [id, product] of products) {
  console.log(
    `ID: ${id}, Name: ${product.name}, Category: ${product.category}, Price: ₹${product.price}, Stock: ${product.stock}`
  );
}

// Update values
products[0][1].updatePrice(58000);
products[1][1].updateStock(18);
