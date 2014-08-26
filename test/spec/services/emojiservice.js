'use strict';

describe('Service: emojiService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var emojiService;
  beforeEach(inject(function (_emojiService_) {
    emojiService = _emojiService_;
  }));

  it('should do something', function () {
    expect(!!emojiService).toBe(true);
  });

});
