import { Router } from 'express';

import widgetRouter from './widget';

const router = Router();

router.use('/widget', widgetRouter);

router.get('/', async (req, res) => {
  res.json({
    message: 'Air travel API.',
  });
});

export default router;
