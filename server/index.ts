import express from 'express';
import mainRouter from './routes';
import {ResError} from "./utils";
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({message: 'ok'});
});

app.use('/api', mainRouter);

app.use((req, res, next) => {
    const error = new ResError('not found', 404);
    next(error);
});

app.use((err: Error | ResError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    let status = 500;
    if ("status" in err) {
        status = err.status;
    }
    res.status(status).json({
        error: {
            message: err.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});