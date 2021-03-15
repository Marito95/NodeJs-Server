import express from 'express';
import  BaseRouter  from './routes/BaseRouter'
import dbCongifg from './config/db.congifg';
import { BaseController } from './controllers/BaseController';

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/demo', (req, res) => res.send('Express + TypeScript Server'));
app.use('/', new BaseRouter(new BaseController()).getRouter());


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
