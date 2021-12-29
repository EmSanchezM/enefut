import express from 'express';
import config from 'config';
import connect from './utils/database';
import logger from './utils/logger';
import routes from './routes';

const port = config.get<number>('port');

const app = express();

app.use(express.json());

app.listen(port, async()=>{
    logger.info('APP is running');
    await connect();
    routes(app);
});
