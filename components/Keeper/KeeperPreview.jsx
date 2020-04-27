import NoteImg from './Types/NoteImg.jsx';
import NoteText from './Types/NoteText.jsx';
import NoteTodos from './Types/NoteTodos.jsx';
import NoteVideo from './Types/NoteVideo.jsx';

const KeeperPreview = ({ note, noteType }) => {
  switch (noteType) {
    case 'NoteTodos':
      return <NoteTodos note={note} />;
    case 'NoteImg':
      return <NoteImg note={note} />;
    case 'NoteVideo':
      return <NoteVideo note={note} />;
    default:
      return <NoteText note={note} />;
  }
};

export default KeeperPreview;
