// let obj = {
// 	name: 'Ian'
// };

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Ian", "age":48}';

// let person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person.name, person.age);

const fs = require('fs');

let originalNote = {
	title: 'some title',
	body: 'some body'
}

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
