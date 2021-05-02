import Component from '@glimmer/component';

export default class BookSearchResultsComponent extends Component {
  resultLimit = 5;

  get displayResults() {
    if (!this.args.results?.items) return;
    if (this.args.results.totalItems <= this.resultLimit) return this.args.results.items;
    return this.args.results.items.slice(0, this.resultLimit);
  }

  get hasTooManyResults() {
    if (!this.args.results || this.args.results.totalItems <= this.resultLimit) return false;
    return true;
  }
}
