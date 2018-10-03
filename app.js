const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes	=	require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
					  .command('add', 'Add a new note', {
					    title: titleOptions,
					    body: bodyOptions
					  })
					  .command('list', 'List all notes')
					  .command('read', 'Read a note', {
					    title: titleOptions,
					  })
					  .command('remove', 'Remove a note', {
					    title: titleOptions
					  })
					  .help()
					  .argv;

var command = argv._[0];

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note){
		console.log('\n\nNote created.');
		notes.showNote(note);
	} else {
		console.log(`duplicate title - not saved`);
	}
} else if (command === 'list') {
	allNotes = notes.getAll();
	console.log(`\n${allNotes.length} note(s) retrieved.`);
	allNotes.forEach(note => notes.showNote(note));
} else if (command === 'read') {
	let note = notes.getNote(argv.title);
	if (note){
		console.log('\n\nNote found');
		notes.showNote(note);
	} else {
		console.log(`note not found`);
	}
} else if (command === 'remove') {
		let noteRemoved = notes.removeNote(argv.title);
		let message = noteRemoved ? 'Note was removed' : 'Note not found';
		console.log(message);
} else {
	console.log(`What? ${command} not known!`);
}
