app.service('StationService', function() {
  this._stations = locations.stations;

  this.getList = function() {
    return this._stations;
  };

  this.getById = function(stationId) {
    return this._stations.findByProperty('stationId', stationId);
  };
});
