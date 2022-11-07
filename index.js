require('dotenv').config();
const models = require('./models/models');
const express = require('express');
const sequelize = require('./bd');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routers/index');
const middleware = require('./middleware/middlewareHandLoad');
const PORT = process.env.PORT || 5000;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(middleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('done');
    });
  } catch (e) {
    console.log(e);
  }
};

start();
