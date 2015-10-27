app.service('StationService', function($filter) {
  this._stations = stations;

  this.getList = function() {
    return this._stations;
  };

  this.getById = function(id) {
    var found = $filter('filter')(this._station, {
      station_id: id
    }, true);
    if (found.length) {
      return found[0];
    } else {
      return false;
    }
  };
});
