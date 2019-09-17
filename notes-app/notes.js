const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter( n => {
    return n.title === title
  })

  if(duplicateNotes.length === 0){
    notes.push({ 
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.bold('New note added!'))
  }
  else console.log(chalk.red.bold('Note title taken!'))
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return [];
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter( n => {
    return n.title !== title
  })
  if(newNotes.length === notes.length) console.log(chalk.red.bold('No se encontro ninguna nota con ese titulo'))
  else {
    saveNotes(newNotes);
    console.log(chalk.green.bold('Nota eliminada correctamente ==> '+title))
  }
  
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}