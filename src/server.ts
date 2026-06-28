import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v1/users', (req:Request, res:Response) => {
    return res.status(200).json({
        status: 'success',
        message: 'Users fetched successfully',
        data: {
            users: [
                {
                    id: 1,
                    name: 'John Doe'
                },
                {
                    id: 2,
                    name: 'Jane Doe'
                },
                {
                    id: 3,
                    name: 'Jim Doe'
                },
                {
                    id: 4,
                    name: 'Jill Doe'
                },
                {
                    id: 5,
                    name: 'Jack Doe'
                },
                {
                    id: 6,
                    name: 'Jill Doe'
                },
                {
                    id: 7,
                    name: 'Jack Doe'
                },
                {
                    id: 8,
                    name: 'Jill Doe'
                },
                {
                    id: 9,
                    name: 'Jack Doe'
                },
                {
                    id: 10,
                    name: 'Jill Doe'
                },
            ]
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});