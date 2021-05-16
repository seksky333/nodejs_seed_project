// eslint-disable-next-line import/newline-after-import
const dotevn = require('dotenv');
dotevn.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
