import keeperDb from './keeperDb.js';
import storageService from './storageService.js';

export default {
  query,
  save,
};

const KEY = 'notes';
var gNotes = null;
_createNotes();

function _createNotes() {
  const defaultData = keeperDb.getDefaultData();
  gNotes = storageService.load(KEY, defaultData);
  storageService.store(KEY, gNotes);
}

function query(filterBy) {
  let notes = gNotes;
  if (filterBy) {
    let { subject } = filterBy;
    notes = gNotes.filter((mail) =>
      mail.subject.toUpperCase().includes(subject.toUpperCase())
    );
  }
  return Promise.resolve(notes);
}

function save(note) {
  gNotes.unshift(note);
  storageService.store(KEY, gNotes);
}

function _getIdxById(noteId) {
  return gNotes.findIndex((note) => note.id === noteId);
}
