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
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    // Mantener la sesion de usuario
    // Estas clases violentan el princio de responsabilidad unica, debido a que hacen demasiadas cosas
    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    // const newUser = new User();

    const userSettings = new UserSettings(
        '/usr/home','/home', 'matpulgar@gmail.com', 'Admin', 'Matias', 'M', new Date('1998-07-17')
    );

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})

})();