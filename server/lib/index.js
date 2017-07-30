import express from 'express';
import { resolve } from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import List from '../model/list-model';
import routes from '../routes/index';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const { NODE_ENV, PORT, HOST, DB_NAME } = process.env;


//-- Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('combined'));

//-- API -- prefix all routes with "api"
app.use('/api', routes);

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${HOST}/${DB_NAME}`);

if(NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack.config.babel.js');

  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, webpackConfig.devServer);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(resolve(__dirname, '../../build/index.html')));
    res.end();
  });
}else{
  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../../client/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server started at ${HOST}:${PORT}`);
});
