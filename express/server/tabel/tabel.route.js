const express = require('express');
const tabelController = require('./tabel.controller');
const router = new express.Router();

router.route('/entries')
  .post(tabelController.entries);

module.exports = router;