import keeperService from '../../services/keeperService.js';
import FormText from './FormTypes/FormText.jsx';
import FormImage from './FormTypes/FormImage.jsx';
import FormVideo from './FormTypes/FormVideo.jsx';
import FormTodos from './FormTypes/FormTodos.jsx';

export default class KeeperForm extends React.Component {
  state = {
    isText: true,
    isImage: false,
    isVideo: false,
    isTodos: false,
  };

  onSaveText = () => {};

  onSaveImage = (noteImg) => {
    keeperService.save(noteImg);
    this.props.onUpdateNotes();
  };

  onSaveVideo = () => {};

  onSaveTodos = () => {};

  render() {
    const { isText, isImage, isVideo, isTodos } = this.state;
    return (
      <div className='row mt-5 card-form'>
        <div className='col-8'>
          {isText && <FormText />}
          {isImage && <FormImage onSaveImage={this.onSaveImage} />}
          {isVideo && <FormVideo />}
          {isTodos && <FormTodos />}
        </div>
        <div className='col-4' style={{ marginTop: '21px' }}>
          <button
            className='btn btn-primary'
            style={{ height: '40px', marginRight: '5px' }}
            onClick={() =>
              this.setState({
                isText: true,
                isImage: false,
                isVideo: false,
                isTodos: false,
              })
            }
          >
            <i className='fas fa-font'></i>
          </button>
          <button
            className='btn btn-danger'
            style={{ height: '40px', marginRight: '5px' }}
            onClick={() =>
              this.setState({
                isText: false,
                isImage: true,
                isVideo: false,
                isTodos: false,
              })
            }
          >
            <i className='fas fa-image'></i>
          </button>
          <button
            className='btn btn-warning'
            style={{ height: '40px', marginRight: '5px' }}
            onClick={() =>
              this.setState({
                isText: false,
                isImage: false,
                isVideo: true,
                isTodos: false,
              })
            }
          >
            <i className='fas fa-video'></i>
          </button>
          <button
            className='btn btn-info'
            style={{ height: '40px', marginRight: '5px' }}
            onClick={() =>
              this.setState({
                isText: false,
                isImage: false,
                isVideo: false,
                isTodos: true,
              })
            }
          >
            <i className='fas fa-list'></i>
          </button>
        </div>
      </div>
    );
  }
}
