import {
  clickable,
  fillable,
  value
} from 'ember-cli-page-object';
import bookSearchResults from 'jomb-ember/tests/pages/components/book-search-results';

export default {
  enterQuery: fillable('[data-test-input="query"]'),
  queryValue: value('[data-test-input="query"]'),
  search: clickable('[data-test-button="submit"]'),
  clear: clickable('[data-test-button="clear"]'),
  ...bookSearchResults,
};
