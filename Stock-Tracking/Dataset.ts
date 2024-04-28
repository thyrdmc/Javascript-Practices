import { Product } from "./product";

export class Dataset {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Iphone 15 Pro Max", "Phone", 90000),
            new Product(2, "Iphone 14 Pro Max", "Phone", 60000),
            new Product(3, "Iphone 13 Pro Max", "Phone", 40000),

        );
    }

    getProducts(): Array<Product> {
        return this.products;
    }
}

