const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const listToys = (name) => {
	let toyArray = []
	return new Promise ((resolve, reject) => {
		db.all(`SELECT Toy FROM kids WHERE Name = '${name}'`, (err, toys) => {
			let str = Object.values(toys)
			toys.forEach(toy => {
				toyArray.push(toy.Toy)
			})
			resolve(toyArray)
		})
	})
}

module.exports.listToys = listToys
