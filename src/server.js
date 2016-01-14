import express from 'express';
import auth from 'basic-auth';
import _ from 'lodash';
import bodyParser from 'body-parser';

const app = express();

const log = (req, res, next) => {
    console.log(
        JSON.stringify(
            _.assign(_.pick(req, ['method', 'url', 'originalUrl', 'query', 'body', 'headers']), {auth: auth(req)}),
            null, 2
        )
    );
    next();
};

const respond204 = (req, res) => res.sendStatus(204);

app.use(bodyParser.json());

app.route('*')
    .all(log)
    .all(respond204);

const port = process.env.PORT || 3001;
app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Listening on port ' + port);
    }
});
