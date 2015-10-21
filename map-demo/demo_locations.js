// This file holds information of the Stations
//
// More data could be added in order to provide more detailed information about
// each station.
//
// DATA_VERSION
//  version_id - (unique id number)
//  version_name
//  version_language - (ISO code)
//
// STATION - (Individual stations)
//     station_id - (unique id number)
//     line_id
//     faction_id
//     x_position
//     y_position
//     station_open - (permenantly open to surface?)
//     version_id
//
// LINE - (Individual Lines)
//     line_id - (what line the station is on)
//     line_name
//     line_position - (what number the station is, for keying to next and previous stations)
//     line_nodes - coordinates for drawing the line
//     version_id
//
// NAME_SET - (Groups of names, like the Russian names, English names, Red Line names, etc.)
//     name_set_id
//     name_set_name
//     version_id
//
// STATION_NAME - (Names for stations)
//     station_id
//     station_name
//     name_set
//     version_id
//
// STATION_DESCRIPTION
//     description_id
//     version_id
//     station_id
//     station_description
//
// FACTION - (Hansa, Red Line, Polis, etc.)
//     faction_id
//     faction_name
//     faction_description
//     verison_id


/********************/
// DATA_VERSION
//  version_id - (unique id number)
//  version_name
//  version_language - (ISO code)

var data_version = [{
  "version_id": 3,
  "version_name": "Metro 2033 Book (English)",
  "version_language": "en"
}]

/********************/
// LINE - (Individual Lines)
//     line_id - (what line the station is on)
//     line_name
//     line_position - (what number the station is, for keying to next and previous stations)
//     line_nodes - coordinates for drawing the line
//     version_id

var lines = [{
  "line_id": 5,
  "line_colour": "#733b3b",
  "line_name": "Koltsevaya (Circular)",
  "line_nodes": [[2,570,608,249]],
  "version_id": 3
}, {
  "line_id": 6,
  "line_colour": "#c6871c",
  "line_name": "Kaluzhsko-Rizhskaya",
  "line_nodes": [[0,754.5,125],[0,755,165],[0,705,217],[0,705,368],[0,683,390],[0,684,662],[0,593,752],[0,521,823],[0,499,845],[0,499,902],[0,364,1040],
                [0,363,1102],[0,411,1150],        [1,411,1100],[0,396,1070],       [0,364,1040]
                ],
  "version_id": 3
}]

/********************/
//
// STATION - (Individual stations)
//     station_id - (unique id number)
//     line_id
//     faction_id
//     x_position
//     y_position
//     station_open - (permenantly open to surface?)
//     version_id

var stations = [{
  "station_name": "MEDVEDKOVO",
  "x_position": 754.5,
  "y_position": 125,
  "station_id": 28,
  "line_id": 0,
  "faction_id": 0,
  "version_id": 3
}, {
  "station_name": "BABUSHKINSKAYA",
  "x_position": 755,
  "y_position": 165,
  "station_id": 29,
    "line_id": 0,
  "faction_id": 0,
  "version_id": 3
}, {
  "station_name": "SVIBLOVO",
  "x_position": 730,
  "y_position": 190,
  "station_id": 30,
    "line_id": 0,
  "faction_id": 0,
  "version_id": 3
}, {
  "station_name": "BOTANICHESKIY SAD",
  "x_position": 705,
  "y_position": 217,
  "station_id": 31,
    "line_id": 0,
  "faction_id": 30,
  "version_id": 3
}, {
  "station_name": "VDNKH (EXHIBITION)",
  "x_position": 704.5,
  "y_position": 255.5,
  "station_id": 32,
    "line_id": 0,
  "faction_id": 5,
  "version_id": 3
}, {
  "station_name": "ALEKSEEVSKAYA",
  "x_position": 705,
  "y_position": 293,
  "station_id": 33,
    "line_id": 0,
  "faction_id": 5,
  "version_id": 3
}, {
  "station_name": "RIZHSKAYA",
  "x_position": 705,
  "y_position": 333,
  "station_id": 34,
    "line_id": 0,
  "faction_id": 5,
  "version_id": 3
}, {
  "station_name": "PROSPEKT MIRA",
  "x_position": 704,
  "y_position": 368,
  "station_id": 35,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "PROSPEKT MIRA (HANSA)",
  "x_position": 683,
  "y_position": 390,
  "station_id": 36,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "SUKHAREVSKAYA",
  "x_position": 682,
  "y_position": 423,
  "station_id": 37,
    "line_id": 0,
  "faction_id": 26,
  "version_id": 3
}, {
  "station_name": "TURGENEVSKAYA",
  "x_position": 683,
  "y_position": 515,
  "station_id": 38,
    "line_id": 0,
  "faction_id": 30,
  "version_id": 3
}, {
  "station_name": "KITAY-GOROD",
  "x_position": 684,
  "y_position": 662,
  "station_id": 39,
    "line_id": 0,
  "faction_id": 19,
  "version_id": 3
}, {
 "station_name": "TRETYAKOVSKAYA",
  "x_position": 593,
  "y_position": 752,
  "station_id": 40,
    "line_id": 0,
  "faction_id": 21,
  "version_id": 3
}, {
  "station_name": "OKTYABR'SKAYA",
  "x_position": 521,
  "y_position": 823,
  "station_id": 41,
    "line_id": 0,
  "faction_id": 0,
  "version_id": 3
}, {
  "station_name": "OKTYABR'SKAYA (Hansa)",
  "x_position": 499,
  "y_position": 845,
  "station_id": 42,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "BITZEVSKY PARK",
  "x_position": 411,
  "y_position": 1150,
  "station_id": 43,
    "line_id": 0,
  "faction_id": 28,
  "version_id": 3
}, {
  "station_name": "YASENEVO",
  "x_position": 388,
  "y_position": 1126,
  "station_id": 44,
    "line_id": 0,
  "faction_id": 14,
  "version_id": 3
}, {
  "station_name": "TEPLIY STAN",
  "x_position": 363,
  "y_position": 1102,
  "station_id": 45,
    "line_id": 0,
  "faction_id": 14,
  "version_id": 3
}, {
  "station_name": "KON'KOVO",
  "x_position": 363,
  "y_position": 1069,
  "station_id": 46,
    "line_id": 0,
  "faction_id": 14,
  "version_id": 3
}, {
  "station_name": "BELYAEVO",
  "x_position": 364,
  "y_position": 1039,
  "station_id": 47,
    "line_id": 0,
  "faction_id": 14,
  "version_id": 3
}, {
  "station_name": "KALUZHSKAYA",
  "x_position": 386,
  "y_position": 1015,
  "station_id": 48,
    "line_id": 0,
  "faction_id": 14,
  "version_id": 3
}, {
  "station_name": "NOVYE CHEREMUSHKI",
  "x_position": 409,
  "y_position": 993,
  "station_id": 49,
    "line_id": 0,
  "faction_id": 21,
  "version_id": 3
}, {
  "station_name": "PROFSOYUZNAYA",
  "x_position": 433,
  "y_position": 970,
  "station_id": 50,
    "line_id": 0,
  "faction_id": 19,
  "version_id": 3
}, {
  "station_name": "AKADEMICHESKAYA",
  "x_position": 455,
  "y_position": 948,
  "station_id": 51,
    "line_id": 0,
  "faction_id": 18,
  "version_id": 3
}, {
  "station_name": "LENINSKIY PROSPEKT",
  "x_position": 477,
  "y_position": 924,
  "station_id": 52,
    "line_id": 0,
  "faction_id": 20,
  "version_id": 3
}, {
  "station_name": "SHABOLOVSKAYA",
  "x_position": 499,
  "y_position": 902,
  "station_id": 53,
    "line_id": 0,
  "faction_id": 22,
  "version_id": 3
}, {
  "station_name": "KOMSOLMOL'SKAYA (HANSA)",
  "x_position": 741,
  "y_position": 430,
  "station_id": 60,
  "station_description": "",
  "line_id": 5,
  "faction_id": 1
}, {
  "station_name": "KURSKAYA (HANSA)",
  "x_position": 816,
  "y_position": 644,
  "station_id": 81,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "TAGANSKAYA (HANSA)",
  "x_position": 775,
  "y_position": 751,
  "station_id": 104,
  "station_description": "",
  "line_id": 0,
  "faction_id": 1
}, {
  "station_name": "PAVELETSKAYA (HANSA)",
  "x_position": 655,
  "y_position": 841,
  "station_id": 153,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "DOBRYNINSKAYA",
  "x_position": 608,
  "y_position": 854,
  "station_id": 15,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "PARK KUL'TURY",
  "x_position": 391,
  "y_position": 778,
  "station_id": 71,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "KIEVSKAYA (Hansa)",
  "x_position": 349,
  "y_position": 720,
  "station_id": 89,
    "line_id": 1,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "KRASNOPRESNENSKAYA",
  "x_position": 326,
  "y_position": 552,
  "station_id": 119,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "BELORUSSKAYA (Hansa)",
  "x_position": 398,
  "y_position": 430,
  "station_id": 140,
    "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}, {
  "station_name": "NOVOSLOBODSKAYA",
  "x_position": 504,
  "y_position": 368,
  "station_id": 9,

  "line_id": 0,
  "faction_id": 1,
  "version_id": 3
}]

/********************/
//NAME_SET - (Groups of names, like the Russian names, English names, Red Line names, etc.)
//     name_set_id
//     name_set_name
//     version_id

var name_set = [{
  "name_set_id": 0,
  "name_set_name": "Russian (Latin)",
  "version_id": 3
}, {
  "name_set_id": 1,
  "name_set_name": "Russian (Cyrillic)",
  "version_id": 3
}, {
  "name_set_id": 2,
  "name_set_name": "English",
  "version_id": 3
}]

/********************/
// STATION_NAME - (Names for stations)
//     station_id
//     station_name
//     name_set
var station_name = [{
  "station_id": 32,
  "station_name" : "VDNKh",
  "name_set": 0,
}, {
  "station_id": 32,
  "station_name" : "ВДНХ",
  "name_set": 1,
}, {
  "station_id": 32,
  "station_name" : "VDNKh",
  "name_set": 2,
}]


/********************/
// STATION_DESCRIPTION
//     description_id
//     version_id
//     station_id
//     station_description


/********************/
// FACTION - (Hansa, Red Line, Polis, etc.)
//     faction_id
//     faction_name
//     faction_description
//     verison_id


var factions = [{
  "faction_id": 0,
  "faction_name": "Unexplored",
  "faction_description": "Stations about which nothing is known.",
  "version_id": 3
}, {
  "faction_id": 1,
  "faction_name": "Confederation of Ring Line Stations (Hansa)",
  "faction_description": "Powerful trading block.",
  "version_id": 3
}, {
  "faction_id": 5,
  "faction_name": "VDNKh Commonwealth",
  "faction_description": "An empire built on mushroom tea.",
  "version_id": 3
}, {
  "faction_id": 30,
  "faction_name": "Hazardous",
  "faction_description": "Stations plagued with dangerous - sometimes supernatural - occurances.",
  "version_id": 3
}, {
  "faction_id": 26,
  "faction_name": "Transit",
  "faction_description": "Stations where people just pass on through.",
  "version_id": 3
}]
