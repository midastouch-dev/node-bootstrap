const assert = require('chai').assert;

describe('TestFileName', () => {
  let index;

  beforeEach(() => {
    // Do before each test
    index = require('../src/index.js');
  });

  it('test description', (done) => {

  	let testResult = true;
  	let correctResult = true;

    assert.equal(testResult, correctResult, 'test function');
    done();

  });
});
