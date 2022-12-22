import express, { Application, Request, Response } from 'express';
import routes from './routes/index';

const app: Application = express();
const port = 3000;

app.use(routes);

//first end point
app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('The Project is in /api/images whrite a valid image name and your desired width and height');
});

//starting server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
