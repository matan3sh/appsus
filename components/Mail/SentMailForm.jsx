export default class SentMailForm extends React.Component {
  state = {};
  render() {
    return (
      <div className='row form-border mt-4 text-center'>
        <div className='col-11'>
          <h2>Send Email</h2>
        </div>
        <div className='col-1'>
          <button className='btn btn-dark' onClick={this.props.closeForm}>
            X
          </button>
        </div>
        <div className='col-12 mt-5'>
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='To:' />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Subject:'
              />
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                placeholder='Message'
                rows='7'
                defaultValue={''}
              />
            </div>
            <button className='btn btn-dark btn-block mb-3'>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
