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
  self.highlight_stations = highlight_stations;
  $scope.stationList = stations;

  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for stations... use $timeout to simulate
   * remote dataservice call.
   */

   function highlight_stations(stationID) {
     console.log('highlight_stations');

   	var searchResult = findRecord(stations,"station_id",stationID);
   	var thisStation = searchResult[0];

    selectedItem(thisStation);

   	ctx[3].clearRect(0,0, 1800,2000);

   	ctx[3].lineWidth = 2*scale;
   	ctx[3].strokeStyle = '#FF0000';

   	circle(thisStation['x_position']*scale,thisStation['y_position']*scale,12*scale,3);
   	ctx[3].stroke();

   	circle(thisStation['x_position']*scale,thisStation['y_position']*scale,8*scale,3);
   	ctx[3].stroke();
   }

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
       self.station = item;
       self.line = LineService.getById(item.line_id);
       self.faction = FactionService.getById(item.faction_id);
       if (self.line != false)
         angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
       if (self.faction != false)
         angular.element(document.querySelector('div.panel-header-faction')).css('background-color', self.faction.faction_colour);
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
      highlight_station(item.display.station_id)
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
