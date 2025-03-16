const balanceModel = require("../models/balance.model");

async function allBalances(req, res) {
  try {
    const balances = await balanceModel.find({});
    res.send(balances);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function retrieveBalance(req, res) {
  const { balanceId } = req.params;
  try {
    const balance = await balanceModel.find({ _id: balanceId });
    res.send(balance);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function addBalance(req, res) {
  try {
    const newBalance = await balanceModel.insertOne({ ...req.body });
    res.send(neBbalance);
  } catch (err) {
    res.send({
      error: true,
    });
  }
}

async function updateBalance(req, res) {
  const { balanceId } = req.params;
  try {
    const updatedbalance = await balanceModel.updateOne(
      {
        _id: req.body.id,
      },
      {
        ...req.body,
      }
    );
    res.send(updatedbalance);
  } catch (err) {
    res.send({
      error: true,
      message: err.message,
    });
  }
}

async function deleteBalance(req, res) {
  const { balanceId } = req.params;
  try {
    const balance = await balanceModel.delete({ _id: balanceId });
    res.send(balance);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

async function deleteBalances(req, res) {
  try {
    const balance = await balanceModel.delete({});
    res.send(balance);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

module.exports = {
  addBalance,
  allBalances,
  retrieveBalance,
  updateBalance,
  deleteBalance,
  deleteBalances,
};
