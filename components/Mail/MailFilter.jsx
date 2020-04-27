export default class MailFilter extends React.Component {
  state = {
    filter: { subject: '' },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(
      (prevState) => ({ filter: { ...prevState.filter, [field]: value } }),
      () => {
        this.props.onSetFilter(this.state.filter);
      }
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSetFilter(this.state.filter);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Search'
            name='subject'
            value={this.state.filter.subject}
            onChange={this.onChange}
          />
        </div>
      </form>
    );
  }
}
