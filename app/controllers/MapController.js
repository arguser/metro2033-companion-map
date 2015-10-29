app.controller('MapController', function($scope, FactionService, LineService, StationService) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled = false;
  self.toggled = true;
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
  self.toggle = true;
  self.togglePanel = togglePanel;

  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for stations... use $timeout to simulate
   * remote dataservice call.
   */

   /**
   *
   * Map functions
   *
   */

   function highlight_stations(station) {

     selectedItem(station);

   	ctx[3].clearRect(0,0, 1800,2000);

   	ctx[3].lineWidth = 2*scale;
   	ctx[3].strokeStyle = '#FF0000';

   	circle(thisStation['x_position']*scale,thisStation['y_position']*scale,12*scale,3);
   	ctx[3].stroke();

   	circle(thisStation['x_position']*scale,thisStation['y_position']*scale,8*scale,3);
   	ctx[3].stroke();
   }


  /**
  *
  * Searchbox functions
  *
  */

  function togglePanel() {
    self.toggle = !self.toggle;
    self.toggled = self.toggle;
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
       self.station = item.display;
       self.line = LineService.getById(item.display.line_id);
       self.faction = FactionService.getById(item.display.faction_id);
       if (self.line != false)
         angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
       if (self.faction != false)
         angular.element(document.querySelector('div.panel-header-faction')).css('background-color', self.faction.faction_colour);
     }
  }

  function searchTextChange(text) {
    self.station = null;
  }

  function selectedItemChange(item) {
    /**
     * Refresh data on Information Panel
     */
     self.toggle = true;

    if (item != null) {
      self.station = item.display;
      highlight_station(item.display.station_id)
      self.line = LineService.getById(item.display.line_id);
      self.faction = FactionService.getById(item.display.faction_id);
      if (self.line != false)
        // This should be handled "the angular way"
        angular.element(document.querySelector('div.panel-header-description')).css('background-color', self.line.line_colour);
      if (self.faction != false)
        // This should be handled "the angular way"
        angular.element(document.querySelector('div.panel-header-faction')).css('background-color', self.faction.faction_colour);
    }
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
