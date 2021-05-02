import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BookSearchComponent extends Component {
  @service bookDetailer;
  @tracked query;
  @tracked results = [];
  
  @action
  async search(e) {
    e.preventDefault();
    this.results = await this.bookDetailer.search(this.query);
  }

  @action
  clear(e) {
    e.preventDefault();
    this.results = [];
    this.query = '';
  }
}
