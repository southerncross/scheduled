import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpack from 'webpack';

import router from './router';
import webpackConfig from '../../webpack.config';

const app: express.Application = express();

app.use('/', router);

const compiler: webpack.ICompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

const port: number = Number(process.env.PORT) || 3322;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
