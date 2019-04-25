import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config();

export class App {
    app: express.Application;
    public database: any = mongoose;

    init = () => {
        this.app = express();
        this.app.use(bodyParser.json());
        this.initDB();
        this.buildHeaders();
        this.app.listen(process.env.APP_PORT, () => console.log(`app on PORT:${process.env.APP_PORT}`));
        this.buildRoutes();
    };

    private initDB = () => this.database
        .connect(process.env.DB_MONGO_URL, { useNewUrlParser: true })
        .then(() => console.log('MG connected'))
        .catch((err: any) => console.log(err));

    private buildRoutes = () => Object.values(routes).map(route => route(this.app));

    private buildHeaders = () => {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    };
}


export default new App();
