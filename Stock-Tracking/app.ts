
import { ProductService } from "./ProductService";
import { Product } from "./product";

let _productService = new ProductService();

let products;
products = _productService.getProducts();


let new_product = new Product();

new_product.name = "Iphone 11";
new_product.category = "Phone";
new_product.price = 20000;

_productService.pushProduct(new_product);
_productService.deleteProduct(_productService.getById(4));

console.log(products);