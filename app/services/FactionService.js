app.service('FactionService', function() {
  this._factions = locations.factions;

  this.getList = function() {
    return this._factions;
  };

  this.getById = function(factionId) {
    return this._factions.findByProperty('factionId', factionId);
  };
});
