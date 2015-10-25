app.service('FactionService', function($filter) {
  this._factions = factions;

  this.getList = function() {
    return this._factions;
  };

  this.getById = function(id) {
    var found = $filter('filter')(this._factions, {
      faction_id: id
    }, true);
    if (found.length) {
      return found[0];
    } else {
      return false;
    }
  };
});
