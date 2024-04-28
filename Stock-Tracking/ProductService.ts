import { Dataset } from "./Dataset";
import { IProductService } from "./IProductService";
import { Product } from "./product";

export class ProductService implements IProductService {

    private dataset: Dataset;
    private products: Array<Product>;

    constructor(){
        this.dataset = new Dataset();
        this.products = new Array<Product>();
        this.dataset.getProducts().forEach(product => this.products.push(product));
    }

    getById(id: number): Product {
        return this.products.filter(product => product.id === id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    pushProduct(product: Product): void {
        if(product.id == 0 || product.id == null) {
            product.id = this.createId();
            this.products.push(product);
        }
        
        // Update Product

        else {
            let index;
            for(let i=0; i<this.products.length; i++) {
                if(this.products[i].id === product.id) { 
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    }
    
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0) { 
            this.products.splice(index, 1);
        }
    }

    private createId(): number{
        let key = 1;

        while(this.getById(key) != null) {
            key += 1;
        }
        return key;
    }

}