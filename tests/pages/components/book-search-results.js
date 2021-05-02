import {
  collection,
  text
} from 'ember-cli-page-object';

export default {
  results: {
    scope: '[data-test-results]',
    header: text('h2'),
    items: collection('[data-test-result-item]'),
  },
};
