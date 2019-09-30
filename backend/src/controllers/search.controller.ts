import { Request, Response } from 'express';
import PostModel from '../models/post.model';
import Post from '../interfaces/post.interface';

class SearchController {

    constructor() { }

    async search(req: Request, res: Response) {
        const term = req.params.term;
        const regex = new RegExp( term, 'i');
        try {
            const posts = await searchPost(regex);
            res.status(200).json({ status: true, posts });
        } catch (error) {
            res.status(500).json({ status: false });
        }
    }

    async searchCollection(req: Request, res: Response) {
        const table = req.params.table;
        const term = req.params.term;
        const regex = new RegExp( term, 'i');
        let promiseSearch: Promise<any>;
        switch (table) {
            case 'post':
                promiseSearch = searchPost(regex);
                break;
            default:
                return res.status(500).json({ status: false, message: 'error en la busqueda' });
        }
        promiseSearch.then( result => {
            res.status(200).json({
                status: true,
                [table]: result
            });
        });
    }

}

async function searchPost( regex: RegExp ): Promise<Post[] | Error>{
    try {
       return await PostModel.find({ name: regex }, 'name url');
    } catch (error) {
        return error
    }
}

export const searchController = new SearchController();
