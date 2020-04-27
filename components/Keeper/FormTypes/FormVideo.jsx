const FormVideo = () => {
  return (
    <form>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Add Text' />
        <input
          type='text'
          className='form-control mt-2'
          placeholder='Add Video URL'
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

export default FormVideo;
