import express, { Application } from 'express'
import config from './config/config';
import logger from './utils/logger';



const app = express() as unknown as Application;

app.use(express.json())

app.listen(Number(config.PORT),() => {
   logger.info(`Server is running on PORT:: ${config.PORT}`)
})