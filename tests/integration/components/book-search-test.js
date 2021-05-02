import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import MockBookDetailerService from 'jomb-ember/tests/mocks/book-detailer';
import { create } from 'ember-cli-page-object';
import page from 'jomb-ember/tests/pages/components/book-search';

const component = create(page);

module('Integration | Component | book-search', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:book-detailer', MockBookDetailerService);
  });

  test('it searches and displays first 5 results', async function(assert) {
    assert.expect(4);

    await render(hbs`<BookSearch />`);

    await component.enterQuery('harry potter');
    await component.search();

    assert.equal(component.results.items.length, 5, 'shows five results maximum');
    assert.equal(component.results.header.includes('Try a more specific search'), true, 'shows overflow text');

    await component.clear();

    assert.equal(component.queryValue, '', 'input is empty');
    assert.equal(component.results.isPresent, false, 'results block is not shown');
  });
});
