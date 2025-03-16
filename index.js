const express = require("express");
const { createReadStream } = require("fs");

const userRouter = require("./routes/user.route");
const loanRouter = require("./routes/loan.route");
const sportBetRouter = require("./routes/sportBet.route");

const cors = require("cors");
const connectToDb = require("./mogodb");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    method: "POST,GET",
  })
);

app.use("/users", userRouter);
app.use("/sportbets", sportBetRouter);
app.use("/loans", loanRouter);

connectToDb().catch(console.dir);
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/info", async (req, res) => {
  const date = new Date();
  let fullData = "";
  const readable = createReadStream(
    `D://source/${date.getFullYear()}-0${
      date.getMonth() + 1
    }-${date.getDate()}.txt`,
    {
      start: 0,
      encoding: "utf-8",
    }
  );
  readable.on("data", (chunk) => {
    fullData += chunk;
  });
  readable.on("end", () => {
    const parsedJson = JSON.parse(fullData);
    const firstTournament = parsedJson?.events[0]?.tournament?.name;
    res.send(parsedJson);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
