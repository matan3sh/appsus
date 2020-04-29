const gDefaultKeepers = [
  {
    id: 'ujndyur790',
    type: 'NoteImg',
    isPinned: true,
    info: {
      url:
        'https://basketballforever.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/04/26124256/last-dance.jpg',
      title: 'The Last Dance',
    },
    style: { backgroundColor: '#d9534f' },
  },
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
    isPinned: false,
    info: {
      url: 'https://i.ytimg.com/vi/7utqPvo79OI/maxresdefault.jpg',
      title: 'Me playing Mi',
    },
    style: { backgroundColor: '#d9534f' },
  },
  {
    id: 'dge25879xa',
    type: 'NoteTodos',
    isPinned: false,
    info: {
      label: 'Thing to Learn:',
      todos: [
        { txt: 'Node', doneAt: null },
        { txt: 'React', doneAt: 187111111 },
        { txt: 'Javascript', doneAt: 187111111 },
      ],
    },
  },
  {
    id: 'fjnmpo9876',
    type: 'NoteImg',
    isPinned: false,
    info: {
      url:
        'https://images-na.ssl-images-amazon.com/images/I/41QtMppf4kL._SX331_BO1,204,203,200_.jpg',
      title: 'Nola',
    },
    style: { backgroundColor: '#0275d8' },
  },
  {
    id: 'y125u8i7o9',
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'JS is The Future!',
    },
    style: { backgroundColor: '#5cb85c' },
  },
  {
    id: 'uyvbhj89632',
    type: 'NoteVideo',
    isPinned: false,
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
