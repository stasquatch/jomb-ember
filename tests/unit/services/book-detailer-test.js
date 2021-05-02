import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Pretender from 'pretender';

module('Unit | Service | book-detailer', function(hooks) {
  setupTest(hooks);

  test('it returns nothing if no query is given for searching', async function(assert) {
    const server = new Pretender(function() {
      this.get('/googleapi', () => {
        assert.notOk(true, 'did not hit this endpoint');
        return [404, {}, ""]
      });
    });

    let service = this.owner.lookup('service:book-detailer');
    let result = await service.search();
    assert.equal(result, null, 'returns nothing');

    server.shutdown();
  });

  test('it returns a result if query is given for searching', async function (assert) {
    assert.expect(3);

    const server = new Pretender(function() {
      this.get('/googleapi', request => {
        assert.equal(request.queryParams.key, 'test', 'adds api key to query params');
        assert.equal(request.queryParams.q, 'sasquatch', 'adds search query to query params');
        return [200, {'content-type': 'application/javascript'}, '["sasquatch result"]'];
      });
    });

    let service = this.owner.lookup('service:book-detailer');
    let result = await service.search('sasquatch');
    assert.equal(result, 'sasquatch result', 'returns a value');

    server.shutdown();
  });
});
