import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockBookDetailerService from 'jomb-ember/tests/mocks/book-detailer';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import page from 'jomb-ember/tests/pages/books/new';

module('Acceptance | books/new', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:book-detailer', MockBookDetailerService);
  });

  test('it passes an a11y audit', async function(assert) {
    await page.visit();
    await page.bookSearch.enterQuery('sasquatch');
    await page.bookSearch.search();
    
    await a11yAudit();
    assert.equal(currentURL(), '/books/new');
  });
});
