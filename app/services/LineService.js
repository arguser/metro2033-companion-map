app.service('LineService', function() {
  this._lines = locations.lines;

  this.getList = function() {
    return this._lines;
  };

  this.getById = function(lineId) {
    return this._lines.findByProperty('lineId', lineId);
  };
});
