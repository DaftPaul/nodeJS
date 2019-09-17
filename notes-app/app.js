const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

const command = process.argv[2];

// Customize yargs version
yargs.version('1.1.0')

// Create add comand
yargs.command({ 
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove comand
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title)
  }
})

// Create list comand
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function(){
    console.log('List notes')
  }
})

// Create list comand
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log('Read notes')
  }
})

// add, remove, read, list

yargs.parse();