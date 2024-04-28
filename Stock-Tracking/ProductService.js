"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var Dataset_1 = require("./Dataset");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataset = new Dataset_1.Dataset();
        this.products = new Array();
        this.dataset.getProducts().forEach(function (product) { return _this.products.push(product); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (product) { return product.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.pushProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.createId();
            this.products.push(product);
        }
        // Update Product
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.createId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key += 1;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
