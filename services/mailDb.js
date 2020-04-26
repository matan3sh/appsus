const gDefaultMails = [
  {
    id: 'GXj93KOkqZoC',
    subject: 'Title Mail Number 1',
    message: 'Digital Media and Technological Determinism',
    from: 'Linkedin',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: false,
    read: false,
    trash: false,
  },
  {
    id: 'YTj93KOkq589',
    subject: 'Title Mail Number 2',
    message: 'Digital Media and Technological Determinism2',
    from: 'me',
    to: 'Gmail',
    sentAt: Date.now(),
    inbox: false,
    sent: true,
    important: false,
    read: false,
    trash: false,
  },
  {
    id: 'YUIO5KOkq589',
    subject: 'Title Mail Number 3',
    message: 'Digital Media and Technological Determinism2',
    from: 'Gmail',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: true,
    read: false,
    trash: false,
  },
  {
    id: 'AAAHBKOkq589',
    subject: 'Title Mail Number 4',
    message: 'Digital Media and Technological Determinism2',
    from: 'me',
    to: 'Gmail',
    sentAt: Date.now(),
    inbox: false,
    sent: true,
    important: false,
    read: false,
    trash: false,
  },
];

function getDefaultData() {
  return gDefaultMails;
}

export default {
  getDefaultData,
};
