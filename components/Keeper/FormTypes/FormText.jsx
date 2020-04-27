import utilService from '../../../services/utilService.js'

export default class FormText extends React.Component {
  state = {
    text: {
      id: '',
      type: '',
      info: {
        txt: '',
      },
      style: { backgroundColor: '#' },
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        text: {
          id: utilService.makeId(),
          type: 'NoteText',
          info: {
             ...prevState.text.info,
            [field]: value,
          },
          style: { backgroundColor: '#0031a2' },
        },
      };
    });
  };


  onSubmit = (e) => {
    e.preventDefault();
    console.log(456);
    this.props.onSaveText(this.state.text);
    this.setState({
      text: {
        id: utilService.makeId(),
        type: 'NoteText',
        info: {
          txt: '',
        },
        style: { backgroundColor: '' },
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            name='txt'
            type='text'
            className='form-control'
            placeholder='Add Text'
            value={this.state.text.info.txt}
            onChange={this.onChange}
          />
          <button
            className='btn btn-dark '
            style={{ height: '40px', marginRight: '35px' }}
          >
            Add Note
          </button>
        </div>
      </form>
    );
  }
}
