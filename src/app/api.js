import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
export const app = express();
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

