describe('counterService', function() {
  beforeEach(module('counterApp'));

  var counterService;

  beforeEach(inject(function(_counterService_) {
    counterService = _counterService_;

  }));

  it('can add to the counter', function() {

    counterService.increment();
    expect(counterService.counters).toMatch(1);
  });
});
