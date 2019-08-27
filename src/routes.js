// IMPORT
import { Router } from 'express';

// BODY
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

// EXPORT
export default routes;
