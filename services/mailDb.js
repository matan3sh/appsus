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
    preMode: '',
    replays: [
      {
        id: 'rtgbnjuyt5',
        from: 'me',
        to: 'Linkedin',
        sentAt: Date.now(),
        message: 'Replays To Someone',
      },
    ],
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
    preMode: '',
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
    preMode: '',
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
    preMode: '',
  },
];

function getDefaultData() {
  return gDefaultMails;
}

export default {
  getDefaultData,
};
