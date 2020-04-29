import ReplayForm from './ReplayForm.jsx';
import ReplayPreview from './ReplayPreview.jsx';

export default class ReplayList extends React.Component {
  render() {
    const { replays, mail, replayForm, toggleReplayForm } = this.props;
    return (
      <React.Fragment>
        {replayForm && (
          <ReplayForm mail={mail} toggleReplayForm={toggleReplayForm} />
        )}

        {replays && replays.length ? (
          <div>
            {replays.map((replay) => (
              <ReplayPreview replay={replay} key={replay.id} mail={mail} />
            ))}
          </div>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}
