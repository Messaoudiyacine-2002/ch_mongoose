const express = require("express");
const apiRoutes=require("./routes");
const bodyParser=require("body-parser");
require("./config/db").connect();

const app = express();
const PORT = 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", apiRoutes());



app.listen(PORT,()=>console.log(`this is in port ${PORT}`));
