import express from 'express';
import {createDigimon, getDigimon} from '../models/digimon.js'
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Express' });
  
  try
  {
    const digimon = await createDigimon(
      {
        digimonName: 'Patamon',
        itemDropped: 'feathers of destruction',
        digimonHp: 90,
      }
    )
    res.json(digimon);
    // res.json({
    //   digimonName: 'Agumon',
    //   droppedItem: 'healing power Up',
    //   hp: '100',
    // })
  }
  catch(err){
    res.json(err);
  }
});

router.get('/:name', async (req, res) => {
  try
  {
    const digimon = await getDigimon(req.params.name)
    res.json(digimon);
    // res.json({
    //   digimonName: 'Agumon',
    //   droppedItem: 'healing power Up',
    //   hp: '100',
    // })
  }
  catch(err){
    res.json(err);
  }
})

export default router;
