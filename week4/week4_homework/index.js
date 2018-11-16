const express = require('express')
const app = express()
const port = 3000

function printLog(req, res) {
	console.log(`${req.method} ${req.url}
${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}
`);

  req.on('data', d => console.log(d.toString()));
};

app.get('/', (req, res) => {printLog(req); res.send('This is main page.');});
app.get('/board', (req, res) => {printLog(req); res.send('This is board page.');});

app.post('/board', (req, res) => {printLog(req); res.send('This is board write page.');});

app.use(function (err, req, res, next) {
	console.log(err);
	res.statusCode = 404;
	res.send('404 Not found');
});

app.listen(port, () => console.log('server online'));