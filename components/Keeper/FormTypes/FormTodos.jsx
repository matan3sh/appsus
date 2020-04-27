const FormTodos = () => {
  return (
    <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Add Comma Separated List'
        />
        <button
          className='btn btn-dark mt-3'
          style={{ height: '40px', marginRight: '35px' }}
        >
          Add Note
        </button>
      </div>
    </form>
  );
};

export default FormTodos;
