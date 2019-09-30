import { Schema, model }  from 'mongoose';
import User from '../interfaces/user.interface';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema: Schema = new Schema({
    name: {
        type: String,
        minlength: [5, 'El minimo de longitud es 5'],
        maxlength: [50, 'El máximo de longitud es 50'],
        required: [ true, 'El nombre del usuario es requerido' ]
    },
    email: {
        type: String,
        unique: true,
        minlength: [5, 'El minimo de longitud es 5'],
        maxlength: [50, 'El máximo de longitud es 50'],
        required: [ true, 'El email es requerido' ]
    },
    password: {
        type: String,
        minlength: [5, 'El minimo de longitud es 5'],
        maxlength: [80, 'El máximo de longitud es 50'],
        required: [ true, 'El password es requerido' ]
    }
}, { collection: 'users' });

userSchema.plugin( uniqueValidator, { message: 'el campo {PATH} debe de ser unico'} );

export default model<User>('User', userSchema);
