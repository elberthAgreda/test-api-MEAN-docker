import { Schema, model }  from 'mongoose';
import Post from '../interfaces/post.interface';

const postSchema: Schema = new Schema({
    url: { type: String, required: [ true, 'La url es requerida' ] },
    title: { type: String, required: [ true, 'El título es requerido' ] },
    content: { type: String, required: [ true, 'El contenido es requerido' ] },
    currentDay: { type: Date, required: [ true, 'La fecha es requerida' ] },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { collection: 'posts' });

export default model<Post>('Post', postSchema);
