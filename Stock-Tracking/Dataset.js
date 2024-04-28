"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
var product_1 = require("./product");
var Dataset = /** @class */ (function () {
    function Dataset() {
        this.products = new Array(new product_1.Product(1, "Iphone 15 Pro Max", "Phone", 90000), new product_1.Product(2, "Iphone 14 Pro Max", "Phone", 60000), new product_1.Product(3, "Iphone 13 Pro Max", "Phone", 40000));
    }
    Dataset.prototype.getProducts = function () {
        return this.products;
    };
    return Dataset;
}());
exports.Dataset = Dataset;
