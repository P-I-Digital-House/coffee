
const express = require("express");
const useRoutes = require('./routes/productRouter.js');
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());
app.use('/produtos', useRoutes)


app.listen(5000, () => {
    console.log('servidor ligado')
});
