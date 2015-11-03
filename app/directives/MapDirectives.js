app.directive('stationName', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/station-name.html'
  }
});

app.directive('stationDescription', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/station-description.html'
  }
});

app.directive('factionDescription', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/faction-description.html'
  }
});

app.directive('stationImage', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/station-image.html'
  }
});
