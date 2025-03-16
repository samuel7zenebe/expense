const sportBetModel = require("../models/sportBet.model");

async function allsportBets(req, res) {
  try {
    const sportBets = await sportBetModel.find({});
    res.send(sportBets);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function retrievesportBet(req, res) {
  const { sportBetId } = req.params;
  try {
    const sportBet = await sportBetModel.find({ _id: sportBetId });
    res.send(sportBet);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function addsportBet(req, res) {
  try {
    const newsportBet = await sportBetModel.insertOne(...req.body);
    res.send(newsportBet);
  } catch (err) {
    res.send({
      error: true,
    });
  }
}

async function updatesportBet(req, res) {
  const { sportBetId } = req.params;
  try {
    const updatedsportBet = await sportBetModel.updateOne(
      {
        _id: req.body.id,
      },
      {
        ...req.body,
      }
    );
    res.send(updatedsportBet);
  } catch (err) {
    res.send({
      error: true,
      message: err.message,
    });
  }
}

async function deletesportBet(req, res) {
  const { sportBetId } = req.params;
  try {
    const sportBet = await sportBetModel.delete({ _id: sportBetId });
    res.send(sportBet);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

async function deletesportBets(req, res) {
  try {
    const sportBet = await sportBetModel.delete({});
    res.send(sportBet);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

module.exports = {
  addsportBet,
  allsportBets,
  retrievesportBet,
  updatesportBet,
  deletesportBet,
  deletesportBets,
};
