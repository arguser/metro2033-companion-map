angular.module('mapApp', ['ngMaterial'])
  .controller('StationListController', StationListController);

function StationListController($timeout, $q, $log) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // list of `stations` value/display objects
  self.stations = loadAll();
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;
  self.selectedStation = null;

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
    self.selectedStation = item;
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    /**
     * Refresh data on Information Panel
     */
    self.selectedStation = item;
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  /**
   * Build `stations` list of key/value pairs
   */
  function loadAll() {
    var allstations = locations;
    return allstations.map(function(station) {
      return {
        value: station.label.toLowerCase(),
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
}
