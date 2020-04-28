import NoteImg from './Types/NoteImg.jsx';
import NoteText from './Types/NoteText.jsx';
import NoteTodos from './Types/NoteTodos.jsx';
import NoteVideo from './Types/NoteVideo.jsx';

const KeeperPreview = ({ note, noteType, onDelete, onUpdateNotes, onSave }) => {
  switch (noteType) {
    case 'NoteTodos':
      return (
        <NoteTodos
          note={note}
          onDelete={onDelete}
          onUpdateNotes={onUpdateNotes}
        />
      );
    case 'NoteImg':
      return (
        <NoteImg
          note={note}
          onDelete={onDelete}
          onUpdateNotes={onUpdateNotes}
          onSave={onSave}
        />
      );
    case 'NoteVideo':
      return (
        <NoteVideo
          note={note}
          onDelete={onDelete}
          onUpdateNotes={onUpdateNotes}
        />
      );
    default:
      return (
        <NoteText
          note={note}
          onDelete={onDelete}
          onUpdateNotes={onUpdateNotes}
        />
      );
  }
};

export default KeeperPreview;
