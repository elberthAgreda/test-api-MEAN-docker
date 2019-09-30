import { Document } from 'mongoose';

interface Post extends Document{
    url: String;
    title: String;
    content: String;
    currentDay: Date;
    user: string;
}

export default Post;
