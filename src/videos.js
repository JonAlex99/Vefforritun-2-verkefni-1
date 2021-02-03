import express from 'express';
import fs from 'fs';
import util from 'util';

export const router = express.Router();
const readFileAsync = util.promisify(fs.readFile);

function catchErrors(e){
  return(req, res, next) => e(req, res, next).catch(next);
}


//Verður að senda parsa yfir í Json
async function getJson() { //Importa FS pakka til að fá þetta til að virka
  const file = await readFileAsync('./videos.json');
  const json = JSON.parse(file);
  return json;
}

//kallar á getJson
async function index(req, res) { //main.ejs
  const title = 'Fræðslumyndbandaleigan';
  const json = await getJson();
  const{videos, categories} = json;
  categories.forEach(c => {
    let i = 0;
    c.videos.forEach(vid => {
      c.videos[i++] = videos[vid - 1];
    });
  });

  res.render('main', {title, categories});
}

//kallar a getJson
async function videos(req,res,next) {
  const{id} = req.params;

  const json = await getJson();
  const{videos} = json;

  const erMyndbandTil = videos.find((a) => a.id === parseInt(id, 10));

  if (!erMyndbandTil) {
    return next();
  }

  const{title, video} = erMyndbandTil;

  return res.render('video', {title, video})

}

router.get('/', catchErrors(index));

router.get('/:id', catchErrors(videos));
