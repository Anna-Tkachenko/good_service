import express from 'express';
import cors from 'cors';

import { router as goodsRouter } from './routes/goods'
import { router as colorsRouter } from './routes/colors'
import { router as goodWithColorRouter } from './routes/goodsWithColors'
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/goods', express.json(), goodsRouter);
app.use('/colors', express.json(), colorsRouter);
app.use('/goodsWithColors', goodWithColorRouter)

app.listen(5000);