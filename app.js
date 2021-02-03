import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { router } from './src/videos.js'; // eslint-disable-line
import { getDuration, getAge } from './src/format.js'; // eslint-disable-line

const app = express();

app.set('view engine', 'ejs');
const path = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(path, './public')));
app.use('/', router);

app.locals.getDuration = getDuration;
app.locals.getAge = getAge;

function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Fannst ekki :(';
  const message = 'efnið finnst ekki!';
  res.status(404).render('error', { title, message });
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err); // eslint-disable-line
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

const host = '127.0.0.1';
const port = 3000;

app.listen(port, host, () => {
  console.info(`Síðan http://${host}:${port}/`); // eslint-disable-line
});
