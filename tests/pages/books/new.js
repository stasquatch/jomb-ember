import {
  create,
  visitable
} from 'ember-cli-page-object';
import bookSearch from 'jomb-ember/tests/pages/components/book-search';

export default create({
  visit: visitable('/books/new'),

  bookSearch,
});
