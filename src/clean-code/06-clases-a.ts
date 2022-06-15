(() => {


    // El principio de responsabilidad unica, es que cada una de las funciones debe hacer 
    // Una tarea y hacerla bien, tambien se aplica para las clases

    // No aplicando el principio
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { };
    }

    // Si se quiere extender de la clase padre, se debe crear una instancia de la misma
    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
        ){
            super();
        }
    }

})();