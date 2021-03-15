import express from 'express';
import  BaseRouter  from './routes/BaseRouter'
import dbCongifg from './config/db.congifg';
import { BaseController } from './controllers/BaseController';
// rest of the code remains same
const app = express();
const PORT = 4000;
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/demo', (req, res) => res.send('Express + TypeScript Server'));
app.use('/', new BaseRouter(new BaseController()).getRouter());
// let pgp = require("pg-promise");
// let client = pgp()(dbCongifg.URI);
// client.any("select * from members");


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});