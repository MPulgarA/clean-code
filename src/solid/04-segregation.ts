(() => {

    interface Bird {
        fly(): void;
        eat(): void;
        run(): void;
        swim(): void;
    }

    // Debemos segregar entre diferentes interfaces y clases, para no implementar métodos o funciones que no correspondan

    class Tucan implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
        public swim(){ }
    }

    class Humminbird implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
        public swim(){ }
    }

    class Ostrich implements Bird {
        public fly() {
            throw new Error('Esta ave no vuela');
        }
        public eat() { }
        public run() { }
        public swim(){ }
    }

    
    class Pinguin implements Bird {
        public fly() {
            throw new Error('Esta ave no vuela');
        }
        public eat() { }
        public run() { }
        public swim(){ }
    }

})()
