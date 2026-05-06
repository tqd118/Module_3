const ProductsDiscount = new WeakMap();

class Product {
    constructor(name, price) {
		this.name = name;
		this.price = price;
    }

    setDiscount(value) {
		ProductsDiscount.set(this, value);
    }

    getDiscount() {
		return ProductsDiscount.get(this);
    }
}

let p1 = new Product("Laptop", 1500);
let p2 = new Product("Phone", 800);
let p3 = new Product("Tablet", 600);

p1.setDiscount(10);
p2.setDiscount(5);
p3.setDiscount(15);

console.log("Initial discounts:");
console.log(p1.getDiscount());
console.log(p2.getDiscount());
console.log(p3.getDiscount());

p2 = null;

console.log("Discounts after deleting:");
try {
	console.log("p1:", p1.getDiscount());
	console.log("p3:", p3.getDiscount());
	console.log("p2", p2.getDiscount());
} catch(e) {
	console.log(e);
	console.log("p3 discount removed from weakmap");
}