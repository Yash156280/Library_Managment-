const path = require('path');
const express = require('express');
const hostRoute = require('./routes/hostRoute');
const userRoute = require('./routes/userRoute');
const env=require('dotenv')
 // ✅ Corrected
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt');
const borrowRoute = require('./routes/borrowRoutes');
const { home } = require('./controlers/hostControler');
// ✅ Make sure spelling is correct
env.config();
const app = express();
app.bcrypt = bcrypt;

app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', home);

app.use(borrowRoute);
app.use('/host', hostRoute);
app.use('/user', userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running On http://localhost:${process.env.PORT}`);
});
