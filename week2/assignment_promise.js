const fs = require('fs');

function writeFile(name, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(name, data, (error, data) => {
			if(error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}

function readFile(name, type) {
	return new Promise((resolve, reject) => {
		fs.readFile(name, type, (error, data) => {
			if(error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}



writeFile('./1.txt', '11111')
	.then(() => {
		console.log('1.txt created');
		return readFile('./1.txt','UTF-8');
	})
	.then((data1) => {
		return writeFile('./2.txt', data1+'22222');
	})
	.then(() => {
		console.log('2.txt created');
		return readFile('./2.txt','UTF-8');
	})
	.then((data2) => {
		return writeFile('./3.txt',data2 + '33333');
	})
	.then(() => {
		console.log('3.txt created');
		return readFile('./3.txt','UTF-8');
	})
	.then((data3) => {
		console.log(data3);	
	})