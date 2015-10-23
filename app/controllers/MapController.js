app.controller('MapController', function($scope, FactionService, LineService, StationService) {
  $scope.simulateQuery = false;
  $scope.isDisabled = false;

  // list of `stations` value/display objects
  $scope.factions = FactionService.getList();
  $scope.lines = LineService.getList();
  $scope.stations = StationService.getList();
  $scope.station = null;
  $scope.line = null;
  // $scope.stations = loadAll();
  $scope.form = {};
  $scope.querySearch = querySearch;
  $scope.selectedItemChange = selectedItemChange;
  $scope.searchTextChange = searchTextChange;

  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for stations... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch(query) {
    var results = query ? self.stations.filter(createFilterFor(query)) : self.stations,
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(results);
      }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function selectedItem(item) {
    /**
     * Refresh data on Information Panel
     */
    if (item != null) {
      self.station = item.display;
      self.line = $filter('filter')(lines, function(l) {
        return l.line_id === item.display.line_id;
      })[0];
      if (self.line != null)
        angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
    }
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    /**
     * Refresh data on Information Panel
     */

    if (item != null) {
      self.station = item.display;
      self.line = $filter('filter')(lines, function(l) {
        return l.line_id === item.display.line_id;
      })[0];
      if (self.line != null)
        angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
    }
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  /**
   * Build `stations` list of key/value pairs
   */
  function loadAll() {
    var allstations = stations;
    return allstations.map(function(station) {
      return {
        value: station.station_name.toLowerCase(),
        display: station
      };
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(station) {
      return (station.value.indexOf(lowercaseQuery) === 0);
    };
  }
});
