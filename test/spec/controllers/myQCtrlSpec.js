'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('asApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('myQCtrl', {
      $scope: scope
    });
  }));

  it('should have a namespace', function () {
    expect(scope.myQCtrl).toBeDefined();
  });

  describe('search', function() {
    it('should exist', function() {
      expect(scope.myQCtrl.search).toBeDefined();
    });
  });
});
