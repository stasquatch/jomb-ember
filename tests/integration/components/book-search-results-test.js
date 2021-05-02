import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { create } from 'ember-cli-page-object';
import page from 'jomb-ember/tests/pages/components/book-search-results';
import { books } from 'jomb-ember/tests/fixtures/books';

const component = create(page);

module('Integration | Component | book-search-results', function(hooks) {
  setupRenderingTest(hooks);

  test('it displays first 5 results', async function(assert) {
    assert.expect(2);

    this.set('results', books);
    await render(hbs`<BookSearchResults @results={{this.results}} />`);

    assert.equal(component.results.items.length, 5, 'shows five results maximum');
    assert.equal(component.results.header.includes('Try a more specific search'), true, 'shows overflow text');
  });
});
