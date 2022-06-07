(() => {


    // El principio de responsabilidad unica, es que cada una de las funciones debe hacer 
    // Una tarea y hacerla bien, tambien se aplica para las clases

    // No aplicando el principio
    type Gender = 'M' | 'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // };

        // Forma corta de manejar clases | Este código es lo mismo que el anterior, pero simplificado
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { };
    }

    const newPerson = new Person('Matías', 'M', new Date('1998-07-17'));
    console.log(newPerson);

})();