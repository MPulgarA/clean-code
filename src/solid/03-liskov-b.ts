// Sirven principalmente para trabajar con herencia
// Necesario para que todas las subclases de vehiculo tengan los métodos del mismo
// No se usan para crear instancias, si no para crear herencias
export abstract class Vehicle {
    // getNumberOfSits(): number{
    //     throw Error('Method not implemented.');
    // }

    // Las clases que extiendan de la clase abstracta, deberan implementar los metodos y propiedades abstractas
    // Si la palabra abstacta no exista, se debe obligar a tener ese metodo
    abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;

    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;

    }
}

export class Toyota extends Vehicle { 

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;

    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;

    }
}

export class Kia extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;

    }
}

