import { Router } from 'express';

import { getLocation } from './handler';

const widgetRouter = Router();

widgetRouter.get('/list', getLocation);

export default widgetRouter;
