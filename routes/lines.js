const express = require('express');
const lineRoutes = require('../models/line-route').lineRoutes;

const router = express.Router();

router.get('/', async (req, res) => {
  const routes = await lineRoutes.find({});

  return res.status(200).json(routes);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const rute = {
    type: 'LineString',
    coordinates: JSON.parse(body.rute),
  };

  const newRoute = new lineRoutes({
    nama: body.nama,
    warna: body.warna,
    rute,
  });

  await newRoute.save();

  return res.status(201).json(newRoute);
});

module.exports = router;
