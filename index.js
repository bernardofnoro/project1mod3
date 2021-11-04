const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());



app.get("/", (req,res) => {
    res.status(200).json({message:" Bem vindos a minha API - Bernardo"});
});

const cervejaRouter = require("./cervejas");
app.use("/cervejas",cervejaRouter);

const timesRouter = require("./times");
app.use("/times",timesRouter);

const jogosRouter = require("./jogos");
app.use("/jogos",jogosRouter);


app.listen(port, () => {
    console.info(`App running: http://localhost:${port}`);
});

   
