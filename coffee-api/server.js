
const express = require("express");
//const productRouter = require('./routes/productRouter.js');
//const userRouter = require('./routes/userRouter.js');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const loginRouter = require("./routes/loginRouter");
const userRouterSequelize = require("./routes/userRouterSequelize");
const productRouterSequelize = require("./routes/productRouterSequelize");
const addressRouter = require("./routes/addressRouter");
const paymentRouter = require("./routes/paymentRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//app.use('/products', productRouter);

//app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/users', userRouterSequelize);

app.use('/products', productRouterSequelize);

app.use('/address', addressRouter);

app.use('/payment', paymentRouter);

app.listen(5000, () => {
    console.log('servidor ligado')
});
