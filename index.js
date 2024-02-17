import { app } from './src/app/api.js'; 
import { router as userRouter } from './src/router/user.router.js';
import { router as rolRouter } from './src/router/rol.router.js';
import {router as productRouter} from './src/router/product.router.js';
import dotenv from 'dotenv';
dotenv.config();


// routes
app.use('/users', userRouter);
app.use('/rol', rolRouter);
app.use('/products', productRouter);




