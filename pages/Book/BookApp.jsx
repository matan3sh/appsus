import bookService from '../../services/bookService.js';
import BookList from '../../components/Book/BookList.jsx';
import BookFilter from '../../components/Book/BookFilter.jsx';

export default class Home extends React.Component {
  state = {
    books: null,
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService
      .query(this.state.filterBy)
      .then((books) => this.setState({ books }));
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => this.loadBooks());
  };

  render() {
    const { books } = this.state;
    return (
      <div className='container mt-3'>
        <BookFilter onSetFilter={this.onSetFilter} />
        {books && (
          <div className='grid-3'>
            <BookList books={books} onSelectedBook={this.onSelectedBook} />
          </div>
        )}
      </div>
    );
  }
}
