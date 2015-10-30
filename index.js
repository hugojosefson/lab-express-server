import express from 'express';
import _ from 'lodash';
const app = express();

const log = (req, res) => res.send(JSON.stringify(_.pick(req, ['method', 'url', 'originalUrl']), null, 2));

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
