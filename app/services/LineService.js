app.service('LineService', function() {
  this._lines = [
    {
      lineId: 1,
      lineColour: "#c81111",
      lineName: "Sokolnicheskaya"
    }, {
      lineId: 2,
      lineColour: "#2dcb41",
      lineName: "Zamoskvoretskaya"
    }, {
      lineId: 3,
      lineColour: "#2192e4",
      lineName: "Arbatsko-Pokrovskaya"
    }, {
      lineId: 4,
      lineColour: "#1cbcd9",
      lineName: "Filyovskaya"
    }, {
      lineId: 5,
      lineColour: "#733b3b",
      lineName: "Koltsevaya (Circular)"
    }, {
      lineId: 6,
      lineColour: "#c6871c",
      lineName: "Kaluzhsko-Rizhskaya"
    }, {
      lineId: 7,
      lineColour: "#832396",
      lineName: "Tagansko-Krasnopresnenskaya"
    }, {
      lineId: 8,
      lineColour: "#ebd82d",
      lineName: "Kalininsko-Solntsevskaya"
    }, {
      lineId: 9,
      lineColour: "#b6b6be",
      lineName: "Serpukhovsko-Timiryazevskaya"
    }, {
      lineId: 10,
      lineColour: "#89e87d",
      lineName: "Lyublinsko-Dmitrovskaya"
    }, {
      lineId: 11,
      lineColour: "#65ddc0",
      lineName: "Kakhovskaya"
    }, {
      lineId: 12,
      lineColour: "#959fc8",
      lineName: "Butovskaya"
    }
  ];

  this.getList = function() {
    return this._lines;
  };

  this.getById = function(lineId) {
    return this._lines.findByProperty('lineId', lineId);
  };
});
