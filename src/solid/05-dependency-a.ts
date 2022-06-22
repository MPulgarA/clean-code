import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new LocalDataBaseService();
    // const provider = new JsonDataBaseService();
    const provider = new WebApiService();

    // El principio de inversion de dependencias estabelce que debemos trabajar nuestro
    // código en base a la abstraccion y no la implementacion
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();