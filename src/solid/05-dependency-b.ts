import { JsonDataBaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: JsonDataBaseService) { }

    async getPosts() {
        // en lugar de usar la dependencia oculta, colocaremos la dependencia en el constructor
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}