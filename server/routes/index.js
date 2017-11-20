import express from 'express';
import * as list from '../controllers/list';
import * as shoppingList from '../controllers/shoppingList';

const router = express.Router();

//-- List
router.route('/list')
  .get(list.listAll)
  .post(list.createListItem)
  .delete(list.deleteListItem);

//-- Shopping list
router.route('/shoppingList')
  .delete(shoppingList.createListItem);

export default router;
