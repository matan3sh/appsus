const gDefaultMails = [
  {
    id: 'GXj93KOkqZoC',
    subject: 'Title Mail Number 1',
    message: 'Digital Media and Technological Determinism',
    from: 'Linkedin',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: false,
    read: false,
  },
  {
    id: 'YTj93KOkq589',
    subject: 'Title Mail Number 2',
    message: 'Digital Media and Technological Determinism2',
    from: 'Gmail',
    sentAt: Date.now(),
    inbox: false,
    sent: true,
    important: false,
    read: false,
  },
  {
    id: 'YUIO5KOkq589',
    subject: 'Title Mail Number 3',
    message: 'Digital Media and Technological Determinism2',
    from: 'Gmail',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: true,
    read: false,
  },
];

function getDefaultData() {
  return gDefaultMails;
}

export default {
  getDefaultData,
};
