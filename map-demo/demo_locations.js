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
  "line_nodes": [[0,755,125],[0,755,165],[0,705,217],[0,705,406],[0,683,423],[0,683,662],[0,593,752],[0,521,823],[0,521,823],[0,521,880],[0,364,1040],
                [0,363,1102],[0,411,1150],[1,411,1100],[0,396,1070],[0,364,1040]],
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
  "x_position": 755,
  "y_position": 125,
  "station_id": 28,
  "line_id": 6,
  "faction_id": 0,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "BABUSHKINSKAYA",
  "x_position": 755,
  "y_position": 165,
  "station_id": 29,
  "line_id": 6,
  "faction_id": 0,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "SVIBLOVO",
  "x_position": 731,
  "y_position": 190,
  "station_id": 30,
  "line_id": 6,
  "faction_id": 0,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "BOTANICHESKIY SAD",
  "x_position": 705,
  "y_position": 217,
  "station_id": 31,
  "line_id": 6,
  "faction_id": 30,
  "version_id": 3,
  "station_open": 1,
  "label_point": 3
}, {
  "station_name": "VDNKH (EXHIBITION)",
  "x_position": 705,
  "y_position": 255.5,
  "station_id": 32,
  "line_id": 6,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "ALEKSEEVSKAYA",
  "x_position": 705,
  "y_position": 293,
  "station_id": 33,
  "line_id": 6,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "RIZHSKAYA",
  "x_position": 705,
  "y_position": 333,
  "station_id": 34,
  "line_id": 6,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "PROSPEKT MIRA",
  "x_position": 705,
  "y_position": 368,
  "station_id": 35,
  "line_id": 6,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "PROSPEKT MIRA (HANSA)",
  "x_position": 683,
  "y_position": 385,
  "station_id": 36,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 8
}, {
  "station_name": "SUKHAREVSKAYA",
  "x_position": 683,
  "y_position": 423,
  "station_id": 37,
  "line_id": 6,
  "faction_id": 26,
  "version_id": 3,
  "station_open": 0,
  "label_point": 9
}, {
  "station_name": "TURGENEVSKAYA",
  "x_position": 683,
  "y_position": 515,
  "station_id": 38,
  "line_id": 6,
  "faction_id": 30,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KITAY-GOROD",
  "x_position": 683,
  "y_position": 662,
  "station_id": 39,
  "line_id": 6,
  "faction_id": 19,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
 "station_name": "TRETYAKOVSKAYA",
  "x_position": 593,
  "y_position": 752,
  "station_id": 40,
  "line_id": 6,
  "faction_id": 21,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "OKTYABR'SKAYA",
  "x_position": 521,
  "y_position": 823,
  "station_id": 41,
  "line_id": 6,
  "faction_id": 0,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "OKTYABR'SKAYA (Hansa)",
  "x_position": 499,
  "y_position": 846,
  "station_id": 42,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 8
}, {
  "station_name": "BITZEVSKY PARK",
  "x_position": 411,
  "y_position": 1150,
  "station_id": 43,
  "line_id": 6,
  "faction_id": 28,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "YASENEVO",
  "x_position": 388,
  "y_position": 1126,
  "station_id": 44,
  "line_id": 6,
  "faction_id": 14,
  "version_id": 3,
  "station_open": 0,
  "label_point": 9
}, {
  "station_name": "TEPLIY STAN",
  "x_position": 363,
  "y_position": 1102,
  "station_id": 45,
  "line_id": 6,
  "faction_id": 14,
  "version_id": 3,
  "station_open": 0,
  "label_point": 9
}, {
  "station_name": "KON'KOVO",
  "x_position": 363,
  "y_position": 1069,
  "station_id": 46,
  "line_id": 6,
  "faction_id": 14,
  "version_id": 3,
  "station_open": 0,
  "label_point": 9
}, {
  "station_name": "BELYAEVO",
  "x_position": 364,
  "y_position": 1039,
  "station_id": 47,
  "line_id": 6,
  "faction_id": 14,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KALUZHSKAYA",
  "x_position": 388,
  "y_position": 1015,
  "station_id": 48,
  "line_id": 6,
  "faction_id": 14,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "NOVYE CHEREMUSHKI",
  "x_position": 409,
  "y_position": 993,
  "station_id": 49,
  "line_id": 6,
  "faction_id": 21,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "PROFSOYUZNAYA",
  "x_position": 433,
  "y_position": 970,
  "station_id": 50,
  "line_id": 6,
  "faction_id": 19,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "AKADEMICHESKAYA",
  "x_position": 455,
  "y_position": 948,
  "station_id": 51,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "LENINSKIY PROSPEKT",
  "x_position": 477,
  "y_position": 924,
  "station_id": 52,
  "line_id": 6,
  "faction_id": 20,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "SHABOLOVSKAYA",
  "x_position": 499,
  "y_position": 902,
  "station_id": 53,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KOMSOLMOL'SKAYA (HANSA)",
  "x_position": 741,
  "y_position": 427,
  "station_id": 60,
  "line_id": 5,
  "faction_id": 1,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KURSKAYA (HANSA)",
  "x_position": 816,
  "y_position": 644,
  "station_id": 81,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "TAGANSKAYA (HANSA)",
  "x_position": 775,
  "y_position": 751,
  "station_id": 104,
  "station_description": "",
  "line_id": 5,
  "faction_id": 1,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "PAVELETSKAYA (HANSA)",
  "x_position": 655,
  "y_position": 842,
  "station_id": 153,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 4
}, {
  "station_name": "DOBRYNINSKAYA (HANSA)",
  "x_position": 608,
  "y_position": 854,
  "station_id": 15,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 6
}, {
  "station_name": "PARK KUL'TURY (HANSA)",
  "x_position": 388,
  "y_position": 778,
  "station_id": 71,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KIEVSKAYA (HANSA)",
  "x_position": 349,
  "y_position": 720,
  "station_id": 89,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "KRASNOPRESNENSKAYA (HANSA)",
  "x_position": 328,
  "y_position": 552,
  "station_id": 119,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "BELORUSSKAYA (HANSA)",
  "x_position": 398,
  "y_position": 430,
  "station_id": 140,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 3
}, {
  "station_name": "NOVOSLOBODSKAYA (HANSA)",
  "x_position": 504,
  "y_position": 368,
  "station_id": 9,
  "line_id": 5,
  "faction_id": 1,
  "version_id": 3,
  "station_open": 0,
  "label_point": 11
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
var station_name = [
  

{ "station_id": 9, "name_set": 0, "station_name": "NOVOSLOBODSKAYA"},
{ "station_id": 9, "name_set": 1, "station_name": "Новослобо́дская"},
{ "station_id": 9, "name_set": 2, "station_name": "NOVA SLOBODA"},

{ "station_id": 15, "name_set": 0,  "station_name": "DOBRYNINSKAYA"},
{ "station_id": 15, "name_set": 1,  "station_name": "Добры́нинская"},
{ "station_id": 15, "name_set": 2,  "station_name": "DOBRYNIN"},

{ "station_id": 28, "name_set": 0, "station_name": "MEDVEDKOVO" },
{ "station_id": 28, "name_set": 1, "station_name": "Медведково" },
{ "station_id": 28, "name_set": 2, "station_name": "MEDVEDKOVO" },

{ "station_id": 29, "name_set": 0,  "station_name": "BABUSHKINSKAYA" },
{ "station_id": 29, "name_set": 1,  "station_name": "Бабушкинская" },
{ "station_id": 29, "name_set": 2,  "station_name": "BABUSHKIN" },

{ "station_id": 30, "name_set": 0,  "station_name": "SVIBLOVO" },
{ "station_id": 30, "name_set": 1,  "station_name": "Свиблово" },
{ "station_id": 30, "name_set": 2,  "station_name": "SVIBLOVO" },

{ "station_id": 31, "name_set": 0,   "station_name" : "BOTANICHESKIY SAD" },
{ "station_id": 31, "name_set": 1,   "station_name" : "Ботанический сад"  },
{ "station_id": 31, "name_set": 2,   "station_name" : "BOTANIC GARDENS"   },

{ "station_id": 32, "name_set": 0,  "station_name" : "VDNKh" },
{ "station_id": 32, "name_set": 1,  "station_name" : "ВДНХ"  },
{ "station_id": 32, "name_set": 2,  "station_name" : "ECONOMIC ACHIEVEMENTS" },

{ "station_id": 33, "name_set": 0, "station_name" : "ALEKSEEVSKAYA" },
{ "station_id": 33, "name_set": 1, "station_name" : "Алексеевская"  },
{ "station_id": 33, "name_set": 2, "station_name" : "ALEKSEYEV"     },

{ "station_id": 34, "name_set": 0,  "station_name" : "RIZHSKAYA" },
{ "station_id": 34, "name_set": 1,  "station_name" : "Рижская"   },
{ "station_id": 34, "name_set": 2,  "station_name" : "RIZHSKA"   },

{ "station_id": 35, "name_set": 0,  "station_name" : "PROSPEKT MIRA"  },
{ "station_id": 35, "name_set": 1,  "station_name" : "Проспект Мира"  },
{ "station_id": 35, "name_set": 2,  "station_name" : "PEACE PROSPECT" },

{ "station_id": 36, "name_set": 0,  "station_name" : "PROSPEKT MIRA"  },
{ "station_id": 36, "name_set": 1,  "station_name" : "Проспект Мира"  },
{ "station_id": 36, "name_set": 2,  "station_name" : "PEACE PROSPECT" },

{ "station_id": 37, "name_set": 0,  "station_name" : "SUKHAREVSKAYA" },
{ "station_id": 37, "name_set": 1,  "station_name" : "Су́харевская"   },
{ "station_id": 37, "name_set": 2,  "station_name" : "SUKHAREV"      },

{ "station_id": 38, "name_set": 0,  "station_name" : "TURGENEVSKAYA" },
{ "station_id": 38, "name_set": 1,  "station_name" : "Тургеневская"  },
{ "station_id": 38, "name_set": 2,  "station_name" : "TURGENEV"      },

{ "station_id": 39, "name_set": 0,  "station_name" : "KITAY-GOROD" },
{ "station_id": 39, "name_set": 1,  "station_name" : "Китай-город" },
{ "station_id": 39, "name_set": 2,  "station_name" : "KITAY-GOROD" },

{ "station_id": 40, "name_set": 0, "station_name": "TRETYAKOVSKAYA" },
{ "station_id": 40, "name_set": 1, "station_name": "Третьяко́вская" },
{ "station_id": 40, "name_set": 2, "station_name": "TRETYAKOVSKI" },

{ "station_id": 41, "name_set": 0,  "station_name": "OKTYABRSKAYA" },
{ "station_id": 41, "name_set": 1,  "station_name": "Октя́брьская"},
{ "station_id": 41, "name_set": 2,  "station_name": "OCTOBER" },

{ "station_id": 42, "name_set": 0,   "station_name": "OKTYABRSKAYA"},
{ "station_id": 42, "name_set": 1,   "station_name": "Октя́брьская"},
{ "station_id": 42, "name_set": 2,   "station_name": "OCTOBER"},

{ "station_id": 43, "name_set": 0, "station_name": "BITTSEVSKY PARK"},
{ "station_id": 43, "name_set": 1, "station_name": "Би́тцевский парк"},
{ "station_id": 43, "name_set": 2, "station_name": "BITSEVSKI PARK"},

{ "station_id": 44, "name_set": 0, "station_name": "YASENEVO"},
{ "station_id": 44, "name_set": 1, "station_name": "Ясенево"},
{ "station_id": 44, "name_set": 2, "station_name": "YASENEVO"},

{ "station_id": 45, "name_set": 0, "station_name": "TYOPLY STAN"},
{ "station_id": 45, "name_set": 1, "station_name": "Тёплый Стан"},
{ "station_id": 45, "name_set": 2, "station_name": "TYOPLY STAN"},

{ "station_id": 46, "name_set": 0,  "station_name": "KONKOVO"},
{ "station_id": 46, "name_set": 1,  "station_name": "Конько́во"},
{ "station_id": 46, "name_set": 2,  "station_name": "KONKOVO"},

{ "station_id": 47, "name_set": 0,  "station_name": "BELYAYEVO"},
{ "station_id": 47, "name_set": 1,  "station_name": "Беля́ево"},
{ "station_id": 47, "name_set": 2,  "station_name": "BELYAEVO"},

{ "station_id": 48, "name_set": 0,  "station_name": "KALUZHSKAYA"},
{ "station_id": 48, "name_set": 1,  "station_name": "Калужская"},
{ "station_id": 48, "name_set": 2,  "station_name": "KALUZHSKI"},

{ "station_id": 49, "name_set": 0, "station_name": "NOVYE CHEREMUSHKI"},
{ "station_id": 49, "name_set": 1, "station_name": "Новые Черёмушки"},
{ "station_id": 49, "name_set": 2, "station_name": "NEW CHERYOMUSHKI"},

{ "station_id": 50, "name_set": 0, "station_name": "PROFSOYUZNAYA"},
{ "station_id": 50, "name_set": 1, "station_name": "Профсоюзная"},
{ "station_id": 50, "name_set": 2, "station_name": "TRADE UNION STREET"},

{ "station_id": 51, "name_set": 0, "station_name": "AKADEMICHESKAYA"},
{ "station_id": 51, "name_set": 1, "station_name": "Академи́ческая"},
{ "station_id": 51, "name_set": 2, "station_name": "ACADEMY STREET"},

{ "station_id": 52, "name_set": 0,  "station_name": "LENINSKIY PROSPEKT"},
{ "station_id": 52, "name_set": 1,  "station_name": "Ленинский проспект"},
{ "station_id": 52, "name_set": 2,  "station_name": "LENIN PROSPECT"},

{ "station_id": 53, "name_set": 0,  "station_name" : "SHABOLOVSKAYA"    },
{ "station_id": 53, "name_set": 1,  "station_name" : "Шаболовская"      },
{ "station_id": 53, "name_set": 2,  "station_name" : "SHABOLOVO STREET" },

{ "station_id": 60, "name_set": 0,  "station_name" : "KOMOSOMOLSKAYA" },
{ "station_id": 60, "name_set": 1,  "station_name" : "Комсомо́льская"  },
{ "station_id": 60, "name_set": 2,  "station_name" : "KOMSOMOL"       },

{ "station_id": 71, "name_set": 0,  "station_name": "PARK KULTURY"},
{ "station_id": 71, "name_set": 1,  "station_name": "Парк культу́ры"},
{ "station_id": 71, "name_set": 2,  "station_name": "CULTURE PARK"},

{ "station_id": 81, "name_set": 0, "station_name" : "KURSKAYA" },
{ "station_id": 81, "name_set": 1, "station_name" : "Ку́рская"  },
{ "station_id": 81, "name_set": 2, "station_name" : "KURSK"    },

{"station_id": 89, "name_set": 0,  "station_name": "KIEVSKAYA"},
{"station_id": 89, "name_set": 1,  "station_name": "Ки́евская"},
{"station_id": 89, "name_set": 2,  "station_name": "KIEV"},

{"station_id": 104, "name_set": 0, "station_name": "TAGANSKAYA" },
{"station_id": 104, "name_set": 1, "station_name": "Тага́нская" },
{"station_id": 104, "name_set": 2, "station_name": "TAGANKA" },

{"station_id": 119, "name_set": 0,  "station_name": "KRASNOPRESNENSKAYA" },
{"station_id": 119, "name_set": 1,  "station_name": "Краснопре́сненская" },
{"station_id": 119, "name_set": 2,  "station_name": "KRASNYA PRESNYA" },

{ "station_id": 140, "name_set": 0, "station_name" : "BELORUSSKAYA" },
{ "station_id": 140, "name_set": 1, "station_name" : "Белору́сская"  },
{ "station_id": 140, "name_set": 2, "station_name" : "BELARUS"      },

{ "station_id": 153, "name_set": 0, "station_name": "PAVELETSKAYA"},
{ "station_id": 153, "name_set": 1, "station_name": "Павеле́цкая"},
{ "station_id": 153, "name_set": 2, "station_name": "PAVELETS"},

]

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
