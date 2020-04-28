const gDefaultKeepers = [
  {
    id: 'qfghjko589',
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
    style: { backgroundColor: '#f0ad4e' },
  },
  {
    id: 'gdg842697x',
    type: 'NoteImg',
    info: {
      url: 'https://i.ytimg.com/vi/7utqPvo79OI/maxresdefault.jpg',
      title: 'Me playing Mi',
    },
    style: { backgroundColor: '#f0ad4e' },
  },
  {
    id: 'dge25879xa',
    type: 'NoteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
  },
  {
    id: 'y125u8i7o9',
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'JS is The Future!',
    },
    style: { backgroundColor: '#5bc0de' },
  },
  {
    id: 'uyvbhj89632',
    type: 'NoteVideo',
    info: {
      url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      title: 'New Video For Keeper',
    },
  },
];

function getDefaultData() {
  return gDefaultKeepers;
}

export default {
  getDefaultData,
};
