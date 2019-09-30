import { Router } from 'express';
import { postController } from '../controllers/post.controller';
import { authentication } from '../middlewares/authentication';

class PostRoute {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', authentication.checkToken, postController.getPosts);
        this.router.get('/:id', authentication.checkToken, postController.getPostsUserId);
        this.router.post('/', authentication.checkToken, postController.savePost);
        this.router.delete('/', authentication.checkToken, postController.deletePost);
    }

}

export default new PostRoute().router;
