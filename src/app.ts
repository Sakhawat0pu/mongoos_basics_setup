import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// Parser
app.use(express.json());
app.use(express.text());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my Basic Express Mongoose Server');
});

export default app;
