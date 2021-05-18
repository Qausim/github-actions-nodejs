import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import './environment';
import router from './routes';
import Responses from './utils/responseUtils';
import { debugHelper, getDebugger } from './utils/debugUtils';

const app = express();
app.use(morgan('tiny'));
app.use(cookieParser());

// headers and cors
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (request.method === 'OPTIONS') {
    response.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, PATCH, DELETE',
    );
    return Responses.success(response, {});
  }
  return next();
});

app.use('/api', router);

// all non-existing routes
app.use((request, response) => {
  Responses.notFoundError(response);
});

// all unhandled errors
app.use((error, request, response) => {
  Responses.internalServerError(response);
});

const PORT = process.env.PORT || 3000;
const debug = debugHelper(getDebugger('app'));

app.listen(PORT, () => debug.success(`Server running on PORT: ${PORT}`));

export default app;
