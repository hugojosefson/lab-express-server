import express from 'express';
import _ from 'lodash';
const app = express();

const log = (req,res) => {
    res.send(JSON.stringify(_.pick(req, ['method', 'url','originalUrl']), null, 2));
};

app.use(log);

app.listen(3001);
