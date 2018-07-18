import * as express from 'express';
import * as bodyParser from 'body-parser';

import router from './router';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3322;

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
