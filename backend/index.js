const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const { connectDb } = require("./connect");
const path = require('path')
const URL_ROUTE = require("./routes/url");
const staticRouter = require('./routes/static_router')
const userRoute = require('./routes/user')
const cookieParser = require('cookie-parser')
const { checkAuthentication, restrictTo } = require("./middleware/auth");

app.set('view engine', 'ejs');
app.set('views', path.resolve('views')); 
app.use(cookieParser())
app.use(express.json());
app.use(checkAuthentication)
app.use(express.urlencoded({extended: false}))

connectDb("mongodb://127.0.0.1:27017/url-shortner").then(() =>
    console.log("Database Connected")
);

app.use("/url",restrictTo(["Normal","Admin"]) ,URL_ROUTE);
app.use("/api",URL_ROUTE);
app.use("/",staticRouter)
app.use("/user", userRoute)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
