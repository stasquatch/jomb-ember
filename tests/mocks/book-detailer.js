import Service from '@ember/service';
import { books } from 'jomb-ember/tests/fixtures/books';

export default class MockBookDetailerService extends Service {
  search() {
    return books;
  }
}