const Singleton = (function () {

    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    // NOTE El patron singleton lo que hace es garantizar que no importa si la instancia 1 o 2 toma ciertos valores, 
    // siempre apuntara al mismo espacio de memorias.
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();