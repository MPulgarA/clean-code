(() => {

    type Gender = 'M' | 'F';

    // NOTE Aplicando el principio de responsabilidad Unica
    // Priorizar la composición frente a la herencia
    // Hay que tratar de evitar el uso de extends debido a la complejidad que esta añade

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    // Implementa el principio
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        };
    }

    interface UserProps {
        email: string,
        role: string,
    }

    // De alguna manera, debemos eliminar el extends
    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email, role,
        }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    // Clase independiente
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    // Crear una clase con todas las propiedades necesarias
    // Su objetivo es que sea una composición de las otras clases

    interface UserSettingsProps {
        birthdate: Date
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string,
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'matpulgar@gmail.com',
        role: 'Admin',
        name: 'Matias',
        gender: 'M',
        birthdate: new Date('1998-07-17')
    });

    console.log({ userSettings })

})();