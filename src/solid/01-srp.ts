(() => {

    interface Product {
        id: number;
        name: string;
    }

    // Manejo de productos
    class ProductService {
        getProducts(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProducts(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        // Axios, fetch, etc
        // private httpAdapter: Object;

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProducts(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProducts(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['matpulgar@gmail.com'], 'to-client');
        }

    }

    class Mailer {
        private masterEmail: string = 'aa@aa.com';

        sendEmail(emailList: string[], template: 'to-client' | 'to-admin') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }



    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();