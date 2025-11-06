var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Decorator 
function LogChange(value, context) {
    var methodName = String(context.name);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Change detected in: ".concat(methodName));
        var result = value.apply(this, args);
        return result;
    };
}
// Product class implementing IProduct
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _updatePrice_decorators;
    var _updateStock_decorators;
    return _a = /** @class */ (function () {
            function Product(id, name, category, price, stock) {
                this.id = (__runInitializers(this, _instanceExtraInitializers), id);
                this.name = name;
                this.category = category;
                this.price = price;
                this.stock = stock;
            }
            Product.prototype.updatePrice = function (newPrice) {
                console.log("Price updated from \u20B9".concat(this.price, " to \u20B9").concat(newPrice));
                this.price = newPrice;
            };
            Product.prototype.updateStock = function (newStock) {
                console.log("Stock updated from ".concat(this.stock, " to ").concat(newStock));
                this.stock = newStock;
            };
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _updatePrice_decorators = [LogChange];
            _updateStock_decorators = [LogChange];
            __esDecorate(_a, null, _updatePrice_decorators, { kind: "method", name: "updatePrice", static: false, private: false, access: { has: function (obj) { return "updatePrice" in obj; }, get: function (obj) { return obj.updatePrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _updateStock_decorators, { kind: "method", name: "updateStock", static: false, private: false, access: { has: function (obj) { return "updateStock" in obj; }, get: function (obj) { return obj.updateStock; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Store products in Array of Tuples
var products = [
    [1, new Product(1, "Laptop", "Electronics", 55000, 10)],
    [2, new Product(2, "Shoes", "Fashion", 2500, 20)],
    [3, new Product(3, "Headphones", "Electronics", 1500, 30)],
];
//Display all products
console.log("Product Inventory:");
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var _a = products_1[_i], id = _a[0], product = _a[1];
    console.log("ID: ".concat(id, ", Name: ").concat(product.name, ", Category: ").concat(product.category, ", Price: \u20B9").concat(product.price, ", Stock: ").concat(product.stock));
}
// Update values
products[0][1].updatePrice(58000);
products[1][1].updateStock(18);
