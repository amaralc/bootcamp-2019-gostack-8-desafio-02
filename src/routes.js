// IMPORT
import { Router } from 'express';
import User from './app/models/User'; // temporário (lógica não ficará dentro das rotas, e sim no controller)

// BODY
const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'myName',
    email: 'myname@email.com',
    password_hash: '123456',
  });
  return res.json(user);
});

// EXPORT
export default routes;
