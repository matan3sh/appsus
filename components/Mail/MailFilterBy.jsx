const MailFilterBy = ({ onSetFilter }) => {
  return (
    <div className='form-group'>
      <select
        className='form-control'
        onChange={(e) => onSetFilter(e.target.value)}
      >
        <option className='male' value='All'>
          All
        </option>
        <option className='male' value='Read'>
          Read
        </option>
        <option className='female' value='Unread'>
          Unread
        </option>
      </select>
    </div>
  );
};

export default MailFilterBy;
