app.service('StationService', function($filter) {
  this._stations = stations;
  this._stationNames = station_names;

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

  this.getNameByIdAndLocale = function(id, lang) {
    var found = $filter('filter')(this._stationNames, {
      station_id: id, name_set: lang
    }, true);
    if (found.length) {
      return found[0];
    } else {
      return false;
    }
  };

  this.getByName = function(name) {
    var found = $filter('filter')(this._stations, {
      station_name: name
    }, true);
    if (found.length) {
      return found[0];
    } else {
      return false;
    }
  };
});
