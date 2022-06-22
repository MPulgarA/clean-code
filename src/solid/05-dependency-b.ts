import { JsonDataBaseService, LocalDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // Esta trabajando con una clase abstracta
    constructor(private postProvider: PostProvider) { }

    async getPosts() {
        // en lugar de usar la dependencia oculta, colocaremos la dependencia en el constructor
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}