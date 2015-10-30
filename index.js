import express from 'express';
import auth from 'basic-auth';
import _ from 'lodash';
const app = express();

const log = (req, res, next) => {
    console.log(
        JSON.stringify(
            _.assign(_.pick(req, ['method', 'url', 'originalUrl']), {auth: auth(req)}),
            null, 2
        )
    );
    next();
};

app.route('*')
    .all(log);

const port = process.env.port || 3001;
app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Listening on port ' + port);
    }
});
