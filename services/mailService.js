import mailDb from './mailDb.js';
import storageService from './storageService.js';
export default {
  query,
  save,
  getById,
  getNextPrevMail,
  getUnReadLength,
  getAvaliableSpace,
  sentMail,
  remove,
  queryBy,
  addReplayToMail,
};

const KEY = 'mails';
var gMails = null;
_createMails();

function _createMails() {
  const defaultData = mailDb.getDefaultData();
  gMails = storageService.load(KEY, defaultData);
  storageService.store(KEY, gMails);
}

function query(filterBy) {
  let mails = gMails;
  if (filterBy) {
    let { subject } = filterBy;
    mails = gMails.filter((mail) =>
      mail.subject.toUpperCase().includes(subject.toUpperCase())
    );
  }
  return Promise.resolve(mails);
}

function queryBy(filterBy) {
  let mails = gMails;
  if (filterBy === 'Read') {
    mails = gMails.filter((mail) => mail.read);
    return Promise.resolve(mails);
  } else if (filterBy === 'Unread') {
    mails = gMails.filter((mail) => !mail.read);
    return Promise.resolve(mails);
  }
  return Promise.resolve(mails);
}

function save(mail) {
  if (mail.id) {
    const mailIdx = _getIdxById(mail.id);
    gMails[mailIdx] = mail;
  } else {
    gMails.push(mail);
  }
  storageService.store(KEY, gMails);
}

function remove(mail) {
  const mailIdx = _getIdxById(mail.id);
  gMails.splice(mailIdx, 1);
  storageService.store(KEY, gMails);
  return Promise.resolve();
}

function sentMail(mail) {
  gMails.unshift(mail);
  storageService.store(KEY, gMails);
}

function getById(mailId) {
  const mail = gMails.find((mail) => mail.id === mailId);
  return Promise.resolve(mail);
}

function getNextPrevMail(mailId) {
  const currentMailIdx = _getIdxById(mailId);
  const prevMailIdx = currentMailIdx - 1;
  const nextMailIdx = currentMailIdx + 1;
  if (prevMailIdx < 0)
    return {
      nextId: gMails[nextMailIdx].id,
      prevId: mailId,
    };
  if (nextMailIdx === gMails.length)
    return {
      nextId: mailId,
      prevId: gMails[prevMailIdx].id,
    };
  else {
    return {
      nextId: gMails[nextMailIdx].id,
      prevId: gMails[prevMailIdx].id,
    };
  }
}

function getUnReadLength() {
  const unReadMails = gMails.filter(
    (mail) => (mail.inbox || mail.important) && !mail.read
  );
  return unReadMails.length;
}

function getAvaliableSpace() {
  return {
    percentage: (gMails.length * 100) / 10,
    current: gMails.length,
  };
}

function addReplayToMail() {}

function _getIdxById(mailId) {
  return gMails.findIndex((mail) => mail.id === mailId);
}
