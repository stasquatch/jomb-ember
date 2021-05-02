import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | comma-join', function(hooks) {
  setupRenderingTest(hooks);

  test('it turns array into comma-joined string', async function(assert) {
    this.set('inputValue', ["One", "Two"]);
    await render(hbs`{{comma-join this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'One, Two');
  });

  test('it returns string if given a string', async function(assert) {
    this.set('inputValue', 'One, Two');
    await render(hbs`{{comma-join this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'One, Two');
  });

  test('it returns nothing if given null', async function (assert) {
    this.set('inputValue', null);
    await render(hbs`{{comma-join this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('it returns nothing if given an object', async function (assert) {
    this.set('inputValue', { something: 'unreadable' });
    await render(hbs`{{comma-join this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
