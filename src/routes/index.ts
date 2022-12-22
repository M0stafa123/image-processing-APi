import express from 'express';
import apiroute from './api/api';
const routes = express.Router();

routes.use(apiroute);
export default routes;
