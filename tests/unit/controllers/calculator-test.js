import { module, test } from 'qunit';
import { setupTest } from 'stage2-calculator/tests/helpers';

module('Unit | Controller | calculator', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:calculator');
    assert.ok(controller);
  });
});
