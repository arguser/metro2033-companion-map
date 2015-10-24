app.controller('MapController', function($scope, FactionService, LineService, StationService) {
  $scope.factions = FactionService.getList();
  $scope.lines = LineService.getList();
  $scope.stations = StationService.getList();

  $scope.form = {};

  $scope.getFaction = function(factionId) {
    return FactionService.getById(factionId);
  };

  $scope.getLine = function(lineId) {
    return LineService.getById(lineId);
  };
});
