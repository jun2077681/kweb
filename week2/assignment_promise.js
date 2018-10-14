const fs = require('fs').promises;

fs.writeFile('./1.txt', '11111')
	.then(() => {
		console.log('1.txt created');
		return fs.readFile('./1.txt','UTF-8');
	})
	.then((data1) => {
		return fs.writeFile('./2.txt', data1+'22222');
	})
	.then(() => {
		console.log('2.txt created');
		return fs.readFile('./2.txt','UTF-8');
	})
	.then((data2) => {
		return fs.writeFile('./3.txt',data2 + '33333');
	})
	.then(() => {
		console.log('3.txt created');
		return fs.readFile('./3.txt','UTF-8');
	})
	.then((data3) => {
		console.log(data3);	
	})