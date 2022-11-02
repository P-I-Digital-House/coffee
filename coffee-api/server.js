
const express = require("express");
const productRouter = require('./routes/productRouter.js');
const userRouter = require('./routes/userRouter.js');
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

app.use('/produtos', productRouter)

app.use('/usuarios', userRouter)


app.listen(5000, () => {
    console.log('servidor ligado')
});
