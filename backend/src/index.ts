import cors from 'cors';
import express, { Request, Response } from 'express';

export const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// import routes
import './content';

app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Content exporter API running on :${port}`);
});
