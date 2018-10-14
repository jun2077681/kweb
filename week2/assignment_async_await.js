const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

async function main() {
	await writeFile('./1.txt', '11111');
	console.log('1.txt created');
	const data1 = await readFile('./1.txt','UTF-8');
	await writeFile('./2.txt',data1 + '22222');
	console.log('2.txt created');
	const data2 = await readFile('./2.txt','UTF-8');
	await writeFile('./3.txt',data2 + '33333');
	console.log('3.txt created');
	const data3 = await readFile('./3.txt','UTF-8');
	console.log(data3);
}

main().catch(error => console.error(error));