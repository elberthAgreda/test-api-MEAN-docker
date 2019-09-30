import { Request, Response } from 'express';
import PostModel from '../models/post.model';
import Post from '../interfaces/post.interface';

class PostController {

    // Lazy load get posts - show post in home
    async getPosts(req: Request, res: Response): Promise<void> {
        try {
            // 'first' is name of param to paginate
            let ofPag = req.query.first || 0;
            ofPag = Number(ofPag);
            // show two post to defualt
            const posts = await PostModel.find()
                                            .skip(ofPag)
                                            .limit(10)
                                            .populate('user', 'name email');
            const count = await PostModel.count({})
            res.status(200).json({ status: true, posts, total: count});
        } catch (error) {
            res.status(400).json({
                status: false,
                error
            });
        }
    }

    async getPostsUserId(req: Request, res: Response): Promise<void> {
        const user = req.params.id;
        try {
            let ofPag = req.query.first || 0;
            ofPag = Number(ofPag);
            const posts = await PostModel.find({ user })
                                            .limit(2)
                                            .skip(ofPag);
            if ( !posts ) {
                res.status(500).json({
                    status: false,
                    message: 'No existe un post con ese id'
                });
            }
            const count = await PostModel.count({})
            res.status(200).json({ status: true, posts, total: count});
        } catch (error) {
            res.status(400).json({
                status: false,
                error
            });
        }
    }

    async savePost(req: Request, res: Response): Promise<void> {
        try {
            const { url, title, content, currentDay, user } = req.body;
            const newPost: Post = new PostModel({
                url,
                title,
                content,
                currentDay,
                user
            });
            if ( !req.file ) {
                res.status(500).json({status:false, message: 'No tiene adjunto valido'});
            }
            try {
                await newPost.save();
                res.status(200).json({status: true, post: newPost});
            } catch (error) {
                res.status(400).json({status: false, messsage: 'Error al guardar el usuario', error});
            }
        } catch (error) {
            res.status(400).json({status: false, messsage: 'Datos erroneos', error});            
        }
    }

    async deletePost(req: Request, res: Response): Promise<void> {
        const { id } = req.body;
        try {
            const postDelete = await PostModel.findByIdAndRemove({ id });
            if ( !postDelete ) {
                res.status(400).json({
                    status: false,
                    message: 'No existe un post con ese id'
                });
            }
            res.status(200).json({
                status: true,
                post: postDelete
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Error al eliminar el post'
            })
        }
    }

}

export const postController = new PostController();
