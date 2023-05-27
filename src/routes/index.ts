import express from 'express';
import logger from '../utils/logger';

const router = express.Router();

/* GET home page. */
router.get('/', (_req: express.Request, res: express.Response) => {
  logger.info('Server is starting');
  res.send('Server is working');
});

export default router;
