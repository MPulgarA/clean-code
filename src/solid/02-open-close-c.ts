// import axios from 'axios';

// Este es una clase adaptadora, siguiendo los lineamientos del patron adaptador
export class HttpClient {

    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log(status);
    //     return { data, status };
    // }

    async get(url: string) {

        const resp = await fetch(url);
        const data = await resp.json();

        return { data, status: resp.status };
    }

}