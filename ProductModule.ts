export enum ProductCategory{
    Electronics,
    clothing,
    grocery
};

export interface IProduct{
    product_id:number;
    product_name:string;
    price:number;
    category:ProductCategory;
    tags:string[];
}

export class Product implements IProduct{
    product_id:number;
    product_name:string;
    price:number;
    category:ProductCategory;
    tags:string[];

    constructor(
        product_id:number,
        product_name:string,
        price:number,
        category:ProductCategory,
        tags:string[]
    ){
        this.product_id = product_id;
        this.product_name = product_name;
        this.price = price;
        this.category = category;
        this.tags = tags;
    }
}
