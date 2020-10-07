import * as fs from 'fs';
import express from 'express';
import {ResError} from "../utils";

const router = express.Router();

router.get('/user/:id', async (req, res) => {
    try {
        const userId = +req.params.id;
        const users = await fs.promises.readFile('data/users.json', 'utf-8');
        const requestedUser = JSON.parse(users)[userId];
        if (!requestedUser) {
            throw new ResError('user not found', 400);
        }
        res.status(200).json({
            user: requestedUser
        });
    } catch (e) {
        console.log(e);
        res.status(e.status || 500).json({
            error: {
                message: e.message || 'something went wrong'
            }
        });
    }
});

router.get('/user/:id/infections', async (req, res) => {
    try {
        const userId = +req.params.id;
        const infections = await fs.promises.readFile('data/infections.json', 'utf-8');
        const infectionsList = JSON.parse(infections)[userId];
        res.status(200).json(infectionsList || []);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: {
                message: 'something went wrong'
            }
        });
    }
});

export default router;