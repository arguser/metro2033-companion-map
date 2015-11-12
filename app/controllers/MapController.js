app.controller('MapController', function($scope, $document, FactionService, LineService, StationService) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled = false;
  self.toggled = false;
  self.showOptions = false;
  self.language = 0;
  angular.element(document.querySelector('div.dragscroll')).duScrollTo(150,500);
  // list of `stations` value/display objects
  self.factions = FactionService.getList();
  self.lines = LineService.getList();
  self.stations = loadAll();
  self.station = null;
  self.line = null;
  self.faction = null;
  self.station_name = null;
  // self.stations = loadAll();
  self.form = {};
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;
  self.highlight_stations = highlight_stations;
  self.toggle = true;
  self.togglePanel = togglePanel;
  self.toggleOptionPanel = toggleOptionPanel;
  self.changeNames = changeNames;



  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for stations... use $timeout to simulate
   * remote dataservice call.
   */

  //  Option functions

  function changeNames(locale) {
    self.language = locale;
  	name_set = self.language;
  	print_station_labels();
    self.station = null;
  }

  /**
   *
   * Map functions
   *
   */

  function highlight_stations(station) {

    self.searchText = station.display.station_name;

    ctx[3].clearRect(0, 0, 1800, 2000);

    ctx[3].lineWidth = 2 * scale;
    ctx[3].strokeStyle = '#FF0000';

    circle(station.display['x_position'] * scale + xShim, station.display['y_position'] * scale + yShim, 12 * scale, 3);
    ctx[3].stroke();

    circle(station.display['x_position'] * scale  + xShim, station.display['y_position'] * scale  + yShim, 8 * scale, 3);
    ctx[3].stroke();

    angular.element(document.querySelector('div.dragscroll')).duScrollTo((station.display['x_position'] * scale + xShim) / 2, (station.display['y_position'] * scale + yShim) / 2, 500);

    selectedItem(station);
  }


  /**
   *
   * Searchbox functions
   *
   */

  function togglePanel() {
    self.toggle = !self.toggle;
    self.toggled = !self.toggled;
  }

  function toggleOptionPanel() {
    self.showOptions = !self.showOptions;
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

    self.toggle = true;

    if (item != null) {
      self.station = item.display;
      self.station_name = StationService.getNameByIdAndLocale(item.display.station_id, self.language);
      self.line = LineService.getById(item.display.line_id);
      self.faction = FactionService.getById(item.display.faction_id);
      if (self.line != false) {
        angular.element(document.querySelector('div.widget-pane-section-header-description')).css('background-color', self.line.line_colour);
        angular.element(document.querySelector('md-tabs-canvas')).css('background-color', shadeColor(self.line.line_colour, -20));
        }
      if (self.faction != false)
        angular.element(document.querySelector('div.panel-header-faction')).css('background-color', self.faction.faction_colour);
    }
  }

  function shadeColor(color, percent) {  // deprecated. See below.
      var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }

  function searchTextChange(text) {
    var station = StationService.getByName(text);
    if (!station) {
      self.station = null;
      self.faction = null;
    }
  }

  function selectedItemChange(item) {
    /**
     * Refresh data on Information Panel
     */
    self.toggle = true;

    if (item != null) {
      self.station = item.display;
      self.station_name = StationService.getNameByIdAndLocale(item.display.station_id, self.language);
      highlight_stations(item);
      self.line = LineService.getById(item.display.line_id);
      self.faction = FactionService.getById(item.display.faction_id);
      if (self.line != false) {
        angular.element(document.querySelector('div.widget-pane-section-header-description')).css('background-color', self.line.line_colour);
        angular.element(document.querySelector('md-tabs-canvas')).css('background-color', shadeColor(self.line.line_colour, -20));
        }
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
