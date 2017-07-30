import express from 'express';
import * as list from '../controllers/list';

const router = express.Router();

//-- List
router.route('/list')
  .get(list.listAll)
  .post(list.createListItem);

//-- Shopping list

export default router;
