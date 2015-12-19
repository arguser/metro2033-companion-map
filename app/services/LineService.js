app.service('LineService', function($filter) {
  this._lines = lines;

  this.getList = function() {
    return this._lines;
  };

  this.getById = function(id) {
    var found = $filter('filter')(this._lines, {
      line_id: id
    }, true);
    if (found.length) {
      return found[0];
    } else {
      return false;
    }
  };
});
