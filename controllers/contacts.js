const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const data = await mongodb.getDatabase().db().collection('contacts').find();
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const data = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .find({ _id: contactId });
 data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle};