var canvas = document.getElementById("map"); // grabs the canvas element
var context = canvas.getContext("2d"); // returns the 2d context object
var img = document.getElementById('metro');

function initialize() { //Load image on Canvas
  canvas.width = img.width / 2;
  canvas.height = img.height / 2;
  // Draw the map
  context.drawImage(img, 0, 0, img.width / 2, img.height / 2);
};

$(function() {

  // Killing Intro key behavior
  $(document).on("keypress", 'form', function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
      e.preventDefault();
      return false;
    }
  });

  // ReDraw the map
  function drawMap() {
    context.drawImage(img, 0, 0, img.width / 2, img.height / 2);
  };
  drawMap();

  //Autocomplete on Search input
  $('#location').autocomplete({
    source: locations
  });


  // Locate station at input
  $('#location').change(function(event) {
    // This should be a filter with RegExp
    var result = $.grep(locations, function(elem) {
      return $('#location').val() === elem.label;
    });
    drawMap();
    $('.popover').hide();
    if (result.length == 0) {
      // No station found
    } else if (result.length == 1) {
      // Station found
      window.scrollTo(result[0].x, result[0].y / 2);
      showPopover(result[0]);
    } else {
      // Multiple stations found
      for (var i = 0; i < result.length; i++) {
        circleStation(result[i]);
      };
    }
  }).keydown(function() {
    $(this).change();
  }).keyup(function() {
    $(this).change();
  });

  function showPopover(location) {
    var offset = $('#map').offset();
    var xPos = (location.x + offset.left);
    var yPos = (location.y + offset.top);
    var theHeight = $('.popover').height();

    // Set station information
    $('.popover-title').text(location.label + " STATION");
    //

    $('.popover').show();
    $('.popover').css('left', (xPos + 15) + 'px');
    $('.popover').css('top', (yPos - (theHeight / 2)) + 'px');
  }

  function circleStation(location) {
    context.beginPath();
    var x = location.x;
    var y = location.y;
    var w = 100;
    var h = 20;
    var rx = x - w / 2;
    var ry = (y - h / 2) - 25;

    //Circle Station
    context.arc(x, y, 8, 0, 2 * Math.PI, false);
    context.fillStyle = 'transparent';
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.stroke();
  }
});
