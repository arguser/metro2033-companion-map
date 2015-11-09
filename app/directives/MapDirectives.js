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

app.directive('optionsPanel', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/options-panel.html'
  }
});

app.directive('searchBox', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/search-box.html'
  }
});

app.directive('informationPanel', function (){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/information-panel.html'
  }
});
