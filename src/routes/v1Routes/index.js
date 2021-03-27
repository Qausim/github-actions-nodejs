import { Router } from 'express';

const v1Router = Router();

v1Router.use('/', (request, response, next) => {
  response.status(200).json({
    message: 'Welcome to my test API',
  })
});

export default v1Router;
