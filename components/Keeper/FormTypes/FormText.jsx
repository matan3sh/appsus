const FormText = () => {
  return (
    <form>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Add Text' />
        <button
          className='btn btn-dark mt-1'
          style={{ height: '40px', marginRight: '35px' }}
        >
          Add Note
        </button>
      </div>
    </form>
  );
};

export default FormText;
