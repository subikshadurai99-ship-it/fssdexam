"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductCategory = void 0;
var ProductCategory;
(function (ProductCategory) {
    ProductCategory[ProductCategory["Electronics"] = 0] = "Electronics";
    ProductCategory[ProductCategory["clothing"] = 1] = "clothing";
    ProductCategory[ProductCategory["grocery"] = 2] = "grocery";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
;
var Product = /** @class */ (function () {
    function Product(product_id, product_name, price, category, tags) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.price = price;
        this.category = category;
        this.tags = tags;
    }
    return Product;
}());
exports.Product = Product;
