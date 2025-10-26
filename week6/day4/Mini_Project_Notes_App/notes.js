const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green('New note added!'));
  } else {
    console.log(chalk.red('Note title already exists!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green(`Note "${title}" removed!`));
  } else {
    console.log(chalk.red(' Note not found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your Notes:'));
  notes.forEach((note, i) => {
    console.log(`${i + 1}. ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green('Note Found!'));
    console.log(chalk.yellow(`Title: ${note.title}`));
    console.log(`Body: ${note.body}`);
  } else {
    console.log(chalk.red('Note not found!'));
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
