const http = require('http');
const cal1 = require('./calc1.js');
const cal2 = require('./calc2.js');
const cal3 = require('./calc3.js');

//const fs = require('fs');
//const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	res.end(`1 + 1 = ${cal1.add(1,1)}\n` +
			`2 - 10 = ${cal2.sub(2,10)}\n` +
			`3 * 7 = ${cal3.mul(3,7)}`);

	//const indexContent = fs.readFileSync(path.join(__dirname, 'index.html'));
	//res.end(indexContent);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});