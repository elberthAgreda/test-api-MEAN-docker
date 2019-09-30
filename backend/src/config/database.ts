import mongoose from 'mongoose';
import { keyBD } from './keys';

export async function connect() {
    try {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useUnifiedTopology', true);
        await mongoose.connect(keyBD);
        console.log('Conectado con la BD');
    }
    catch(e) {
        console.log(e)
    }
}
