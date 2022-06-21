(() => {

    interface Bird {
        eat(): void;
    }

    // Debemos segregar entre diferentes interfaces y clases, para no implementar métodos o funciones que no correspondan
    interface FlyingBird {
        fly(): number;
    }

    interface RunningBird {
        run(): void;
    }

    interface SwimmerBird {
        swim(): void;
    }


    class Tucan implements Bird, FlyingBird {
        public fly() { return 30 }
        public eat() { }

    }

    class Humminbird implements Bird, FlyingBird {
        public fly() { return 100 }
        public eat() { }
 
    }

    class Ostrich implements Bird, RunningBird {
        public eat() { }
        public run() { }
    }


    class Pinguin implements Bird, SwimmerBird {
        public eat() { }
        public swim() { }
    }

})()
