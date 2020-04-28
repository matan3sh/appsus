import NoteImg from './Types/NoteImg.jsx';
import NoteText from './Types/NoteText.jsx';
import NoteTodos from './Types/NoteTodos.jsx';
import NoteVideo from './Types/NoteVideo.jsx';

const KeeperPreview = ({ note, noteType, onDelete, onEditText }) => {
  switch (noteType) {
    case 'NoteTodos':
      return <NoteTodos note={note} onDelete={onDelete} />;
    case 'NoteImg':
      return <NoteImg note={note} onDelete={onDelete} />;
    case 'NoteVideo':
      return <NoteVideo note={note} onDelete={onDelete} />;
    default:
      return <NoteText note={note} onDelete={onDelete} />;
  }
};

export default KeeperPreview;
