type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {
        // This hace referencia al objeto Product
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        // No Dry
        // if (this.name.length <= 0) throw new Error('Product name is empty');
        // if (this.price <= 0) throw new Error('Price is zero');
        // if (this.size.length <= 0) throw new Error('Size is empty');


        // Dry
        if (!this.isProductReady) return;

        return `${this.name} ${this.price} ${this.size}`;
    }
}

(() => {

    const bluePants = new Product('blue pants', 10, 'M');
    console.log(bluePants.toString());
})();