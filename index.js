const express = require("express");
var cookieParser = require('cookie-parser')

const path = require("path");
const bodyParser = require("body-parser");
// const expressSession = require("express-session")
const { v4 } = require("uuid");
const productRouter = require("./controller/routers");

const app = express();
const port = process.env.PORT || 3000;

const middlewares = function (req, res, next) {
  console.log(`middleware -  ${req.url}  ${req.method} -- ${new Date()}`);
  next();
};

const cookiestore = function(req,res,next){
  res.cookie("job apis", 'sample_data', {maxAge: 3600});
  next()
}

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(middlewares);

app.use("/", middlewares,cookiestore, productRouter);
app.use("/task", middlewares, productRouter);
app.use("/task/addjob", middlewares, productRouter);
app.use("/task/job/premiumsDatas", middlewares, productRouter);
// app.use("/task/premium",middlewares,productRouter)
// app.use("/task/premium",productRouter)

app.use("/public",async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.listen(port, () => {
  console.log(`server start port at  ${port}`);
});
