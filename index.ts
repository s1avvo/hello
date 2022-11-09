import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import 'express-async-errors';
import {mainRouter} from "./route/main";
import {homeRouter} from "./route/home";

const app = express();

app.use('/', homeRouter);
app.use('/main', mainRouter);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(process.env.PORT || 3000, () => {
    console.log(`server run on port 3000`);
} )