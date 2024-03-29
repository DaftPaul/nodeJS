const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter( n => n.title === title )
  const duplicateNote = notes.find( n => n.title === title )

  debugger

  if(!duplicateNote){
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
  fs.writeFileSync('notes.json', dataJON);
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
  const newNotes = notes.filter( n => n.title !== title )
  if(newNotes.length === notes.length) console.log(chalk.red.bold('No se encontro ninguna nota con ese titulo'))
  else {
    saveNotes(newNotes);
    console.log(chalk.green.bold('Nota eliminada correctamente ==> '+title))
  }
  
}

const listNotes = () => {
  const notes = loadNotes();
  if(notes.length > 0){
    console.log(chalk.green.bold('Tus notas son:'))
    notes.forEach( note => console.log(chalk.blue(`- ${note.title}`)))
  }else{
    console.log(chalk.red('No tienes ninguna nota guardada'))
  }
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteFounded = notes.find(note => note.title === title)
  if(noteFounded){
    console.log(chalk.green.bold(noteFounded.title))
    console.log(noteFounded.body)
  }
  else console.log(chalk.red.bold('No se encontro la siguiente nota ==> ' +title))
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}