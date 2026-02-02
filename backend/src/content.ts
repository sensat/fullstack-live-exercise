import { Request, Response } from 'express';
import { app } from './index';

app.get('/api/content/list', (_req: Request, res: Response) => {
  return res.json({
    contentList: [
      {id: 'content-1', name: 'Content 1', description: 'Content 1 description'},
      {id: 'content-2', name: 'Content 2', description: 'Content 2 description'},
      {id: 'content-3', name: 'Content 3', description: 'Content 3 description'},
      {id: 'content-4', name: 'Content 4', description: 'Content 4 description'},
      {id: 'content-5', name: 'Content 5', description: 'Content 5 description'},
      {id: 'content-6', name: 'Content 6', description: 'Content 6 description'},
    ],
  });
});