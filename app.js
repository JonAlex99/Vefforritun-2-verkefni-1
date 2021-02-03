import express from 'express';
import {router} from './src/videos.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getDuration, getAge } from './src/format.js';

const app = express();

app.set('view engine', 'ejs');
const path = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(path, './public')));
app.use('/', router);

app.locals.getDuration = getDuration;
app.locals.getAge = getAge;


function notFoundHandler(req, res, next) {
  const title = 'Fannst ekki :(';
  const message = 'efnið finnst ekki!';
  res.status(404).render('error', { title, message });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

const host = '127.0.0.1';
const port = 3000;

app.listen(port, host, () => {
  console.info(`Síðan http://${host}:${port}/`);
});
