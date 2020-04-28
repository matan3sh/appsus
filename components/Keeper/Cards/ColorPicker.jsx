const ColorPicker = ({ changeColor }) => {
  return (
    <React.Fragment>
      <button
        className='btn btn-dark'
        onClick={() => changeColor('dark')}
      ></button>
      <button
        className='btn btn-primary'
        onClick={() => changeColor('primary')}
      ></button>
      <button
        className='btn btn-success'
        onClick={() => changeColor('success')}
      ></button>
      <button
        className='btn btn-danger'
        onClick={() => changeColor('danger')}
      ></button>
      <button
        className='btn btn-warning'
        onClick={() => changeColor('warning')}
      ></button>
      <button
        className='btn btn-info'
        onClick={() => changeColor('info')}
      ></button>
    </React.Fragment>
  );
};

export default ColorPicker;
