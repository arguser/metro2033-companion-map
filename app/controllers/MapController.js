app.controller('MapController', function($scope, FactionService, LineService, StationService) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled = false;

  // list of `stations` value/display objects
  self.factions = FactionService.getList();
  self.lines = LineService.getList();
  self.stations = loadAll();
  self.station = null;
  self.line = null;
  // self.stations = loadAll();
  self.form = {};
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;

  function toggle() {
    self.information = !self.information;
  };

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
      self.line = LineService.getById(item.display.line_id);
      if (self.line != false)
        angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
    }
  }

  function searchTextChange(text) {
    // $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    /**
     * Refresh data on Information Panel
     */

    if (item != null) {
      self.station = item.display;
      self.line = LineService.getById(item.display.line_id);
      self.faction = FactionService.getById(item.display.faction_id);
      if (self.line != false)
        angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
      if (self.faction != false)
        angular.element(document.querySelector('div.panel-header-faction')).css('background-color', self.faction.faction_colour);
    }
    // $log.info('Item changed to ' + JSON.stringify(item));
  }
  /**
   * Build `stations` list of key/value pairs
   */
  function loadAll() {
    var allstations = StationService.getList();
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
