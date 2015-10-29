// This file holds information of the Stations
//
// More data could be added in order to provide more detailed information about
// each station.

// STATION_NAME - (Names for stations)
//     station_id
//     station_name
//     name_set
//


// LINE - (Individual Lines)
//     line_id - (what line the station is on)
//     line_colour
//     line_name
//     line_position - (what number the station is, for keying to next and previous stations)
// SOURCE: https://en.wikipedia.org/wiki/Moscow_Metro#Lines

var lines = [{
  "line_id": 1,
  "line_number": 1,
  "line_name": "Sokolnicheskaya",
  "line_nodes": [
    [0, 872, 269],
    [0, 872, 311],
    [0, 762, 425],
    [0, 201, 993]
  ],
  "line_colour": "#c81111"
}, {
  "line_id": 2,
  "line_number": 2,
  "line_name": "Zamoskvoretskaya",
  "line_nodes": [],
  "line_colour": "#2dcb41"
}, {
  "line_id": 3,
  "line_number": 3,
  "line_name": "Arbatsko-Pokrovskaya",
  "line_nodes": [],
  "line_colour": "#2192e4"
}, {
  "line_id": 4,
  "line_number": 4,
  "line_name": "Filyovskaya",
  "line_nodes": [],
  "line_colour": "#1cbcd9"
}, {
  "line_id": 5,
  "line_number": 5,
  "line_name": "Koltsevaya (Circular)",
  "line_nodes": [
    [2, 570, 608, 249]
  ],
  "line_colour": "#733b3b"
}, {
  "line_id": 6,
  "line_number": 6,
  "line_name": "Kaluzhsko-Rizhskaya",
  "line_nodes": [
    [0, 755, 125],
    [0, 755, 165],
    [0, 705, 217],
    [0, 705, 406],
    [0, 683, 423],
    [0, 683, 662],
    [0, 593, 752],
    [0, 521, 823],
    [0, 521, 823],
    [0, 521, 880],
    [0, 364, 1040],
    [0, 363, 1102],
    [0, 411, 1150],
    [1, 411, 1100],
    [0, 396, 1070],
    [0, 364, 1040]
  ],
  "line_colour": "#c6871c"
}, {
  "line_id": 7,
  "line_number": 7,
  "line_name": "Tagansko-Krasnopresnenskaya",
  "line_nodes": [],
  "line_colour": "#832396"
}, {
  "line_id": 8,
  "line_number": 8,
  "line_name": "Kalininsko-Solntsevskaya",
  "line_nodes": [],
  "line_colour": "#ebd82d"
}, {
  "line_id": 9,
  "line_number": 9,
  "line_name": "Serpukhovsko-Timiryazevskaya",
  "line_nodes": [],
  "line_colour": "#b6b6be"
}, {
  "line_id": 10,
  "line_number": 10,
  "line_name": "Lyublinsko-Dmitrovskaya",
  "line_nodes": [],
  "line_colour": "#89e87d"
}, {
  "line_id": 11,
  "line_number": 11,
  "line_name": "Kakhovskaya",
  "line_nodes": [],
  "line_colour": "#65ddc0"
}, {
  "line_id": 12,
  "line_number": 12,
  "line_name": "Butovskaya",
  "line_nodes": [],
  "line_colour": "#959fc8"
}]


// NAME_SET - (Groups of names, like the Russian names, English names, Red Line names, etc.)
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


// STATION_NAME - (Names for stations)
//     station_id
//     station_name
//     name_set

var station_name = [

  {
    "station_id": 9,
    "name_set": 0,
    "station_name": "NOVOSLOBODSKAYA"
  }, {
    "station_id": 9,
    "name_set": 1,
    "station_name": "Новослобо́дская"
  }, {
    "station_id": 9,
    "name_set": 2,
    "station_name": "NOVA SLOBODA"
  },

  {
    "station_id": 15,
    "name_set": 0,
    "station_name": "DOBRYNINSKAYA"
  }, {
    "station_id": 15,
    "name_set": 1,
    "station_name": "Добры́нинская"
  }, {
    "station_id": 15,
    "name_set": 2,
    "station_name": "DOBRYNIN"
  },

  {
    "station_id": 28,
    "name_set": 0,
    "station_name": "MEDVEDKOVO"
  }, {
    "station_id": 28,
    "name_set": 1,
    "station_name": "Медведково"
  }, {
    "station_id": 28,
    "name_set": 2,
    "station_name": "MEDVEDKOVO"
  },

  {
    "station_id": 29,
    "name_set": 0,
    "station_name": "BABUSHKINSKAYA"
  }, {
    "station_id": 29,
    "name_set": 1,
    "station_name": "Бабушкинская"
  }, {
    "station_id": 29,
    "name_set": 2,
    "station_name": "BABUSHKIN"
  },

  {
    "station_id": 30,
    "name_set": 0,
    "station_name": "SVIBLOVO"
  }, {
    "station_id": 30,
    "name_set": 1,
    "station_name": "Свиблово"
  }, {
    "station_id": 30,
    "name_set": 2,
    "station_name": "SVIBLOVO"
  },

  {
    "station_id": 31,
    "name_set": 0,
    "station_name": "BOTANICHESKIY SAD"
  }, {
    "station_id": 31,
    "name_set": 1,
    "station_name": "Ботанический сад"
  }, {
    "station_id": 31,
    "name_set": 2,
    "station_name": "BOTANIC GARDENS"
  },

  {
    "station_id": 32,
    "name_set": 0,
    "station_name": "VDNKh"
  }, {
    "station_id": 32,
    "name_set": 1,
    "station_name": "ВДНХ"
  }, {
    "station_id": 32,
    "name_set": 2,
    "station_name": "ECONOMIC ACHIEVEMENTS"
  },

  {
    "station_id": 33,
    "name_set": 0,
    "station_name": "ALEKSEEVSKAYA"
  }, {
    "station_id": 33,
    "name_set": 1,
    "station_name": "Алексеевская"
  }, {
    "station_id": 33,
    "name_set": 2,
    "station_name": "ALEKSEYEV"
  },

  {
    "station_id": 34,
    "name_set": 0,
    "station_name": "RIZHSKAYA"
  }, {
    "station_id": 34,
    "name_set": 1,
    "station_name": "Рижская"
  }, {
    "station_id": 34,
    "name_set": 2,
    "station_name": "RIZHSKA"
  },

  {
    "station_id": 35,
    "name_set": 0,
    "station_name": "PROSPEKT MIRA"
  }, {
    "station_id": 35,
    "name_set": 1,
    "station_name": "Проспект Мира"
  }, {
    "station_id": 35,
    "name_set": 2,
    "station_name": "PEACE PROSPECT"
  },
  /*
  { "station_id": 36, "name_set": 0,  "station_name" : "PROSPEKT MIRA"  },
  { "station_id": 36, "name_set": 1,  "station_name" : "Проспект Мира"  },
  { "station_id": 36, "name_set": 2,  "station_name" : "PEACE PROSPECT" },
  */
  {
    "station_id": 37,
    "name_set": 0,
    "station_name": "SUKHAREVSKAYA"
  }, {
    "station_id": 37,
    "name_set": 1,
    "station_name": "Су́харевская"
  }, {
    "station_id": 37,
    "name_set": 2,
    "station_name": "SUKHAREV"
  },

  {
    "station_id": 38,
    "name_set": 0,
    "station_name": "TURGENEVSKAYA"
  }, {
    "station_id": 38,
    "name_set": 1,
    "station_name": "Тургеневская"
  }, {
    "station_id": 38,
    "name_set": 2,
    "station_name": "TURGENEV"
  },

  {
    "station_id": 39,
    "name_set": 0,
    "station_name": "KITAY-GOROD"
  }, {
    "station_id": 39,
    "name_set": 1,
    "station_name": "Китай-город"
  }, {
    "station_id": 39,
    "name_set": 2,
    "station_name": "KITAY-GOROD"
  },

  {
    "station_id": 40,
    "name_set": 0,
    "station_name": "TRETYAKOVSKAYA"
  }, {
    "station_id": 40,
    "name_set": 1,
    "station_name": "Третьяко́вская"
  }, {
    "station_id": 40,
    "name_set": 2,
    "station_name": "TRETYAKOVSKI"
  },

  {
    "station_id": 41,
    "name_set": 0,
    "station_name": "OKTYABRSKAYA"
  }, {
    "station_id": 41,
    "name_set": 1,
    "station_name": "Октя́брьская"
  }, {
    "station_id": 41,
    "name_set": 2,
    "station_name": "OCTOBER"
  },

  {
    "station_id": 42,
    "name_set": 0,
    "station_name": "OKTYABRSKAYA"
  }, {
    "station_id": 42,
    "name_set": 1,
    "station_name": "Октя́брьская"
  }, {
    "station_id": 42,
    "name_set": 2,
    "station_name": "OCTOBER"
  },

  {
    "station_id": 43,
    "name_set": 0,
    "station_name": "BITTSEVSKY PARK"
  }, {
    "station_id": 43,
    "name_set": 1,
    "station_name": "Би́тцевский парк"
  }, {
    "station_id": 43,
    "name_set": 2,
    "station_name": "BITSEVSKI PARK"
  },

  {
    "station_id": 44,
    "name_set": 0,
    "station_name": "YASENEVO"
  }, {
    "station_id": 44,
    "name_set": 1,
    "station_name": "Ясенево"
  }, {
    "station_id": 44,
    "name_set": 2,
    "station_name": "YASENEVO"
  },

  {
    "station_id": 45,
    "name_set": 0,
    "station_name": "TYOPLY STAN"
  }, {
    "station_id": 45,
    "name_set": 1,
    "station_name": "Тёплый Стан"
  }, {
    "station_id": 45,
    "name_set": 2,
    "station_name": "TYOPLY STAN"
  },

  {
    "station_id": 46,
    "name_set": 0,
    "station_name": "KONKOVO"
  }, {
    "station_id": 46,
    "name_set": 1,
    "station_name": "Конько́во"
  }, {
    "station_id": 46,
    "name_set": 2,
    "station_name": "KONKOVO"
  },

  {
    "station_id": 47,
    "name_set": 0,
    "station_name": "BELYAYEVO"
  }, {
    "station_id": 47,
    "name_set": 1,
    "station_name": "Беля́ево"
  }, {
    "station_id": 47,
    "name_set": 2,
    "station_name": "BELYAEVO"
  },

  {
    "station_id": 48,
    "name_set": 0,
    "station_name": "KALUZHSKAYA"
  }, {
    "station_id": 48,
    "name_set": 1,
    "station_name": "Калужская"
  }, {
    "station_id": 48,
    "name_set": 2,
    "station_name": "KALUZHSKI"
  },

  {
    "station_id": 49,
    "name_set": 0,
    "station_name": "NOVYE CHEREMUSHKI"
  }, {
    "station_id": 49,
    "name_set": 1,
    "station_name": "Новые Черёмушки"
  }, {
    "station_id": 49,
    "name_set": 2,
    "station_name": "NEW CHERYOMUSHKI"
  },

  {
    "station_id": 50,
    "name_set": 0,
    "station_name": "PROFSOYUZNAYA"
  }, {
    "station_id": 50,
    "name_set": 1,
    "station_name": "Профсоюзная"
  }, {
    "station_id": 50,
    "name_set": 2,
    "station_name": "TRADE UNION STREET"
  },

  {
    "station_id": 51,
    "name_set": 0,
    "station_name": "AKADEMICHESKAYA"
  }, {
    "station_id": 51,
    "name_set": 1,
    "station_name": "Академи́ческая"
  }, {
    "station_id": 51,
    "name_set": 2,
    "station_name": "ACADEMY STREET"
  },

  {
    "station_id": 52,
    "name_set": 0,
    "station_name": "LENINSKIY PROSPEKT"
  }, {
    "station_id": 52,
    "name_set": 1,
    "station_name": "Ленинский проспект"
  }, {
    "station_id": 52,
    "name_set": 2,
    "station_name": "LENIN PROSPECT"
  },

  {
    "station_id": 53,
    "name_set": 0,
    "station_name": "SHABOLOVSKAYA"
  }, {
    "station_id": 53,
    "name_set": 1,
    "station_name": "Шаболовская"
  }, {
    "station_id": 53,
    "name_set": 2,
    "station_name": "SHABOLOVO STREET"
  },

  {
    "station_id": 60,
    "name_set": 0,
    "station_name": "KOMSOMOLSKAYA"
  }, {
    "station_id": 60,
    "name_set": 1,
    "station_name": "Комсомо́льская"
  }, {
    "station_id": 60,
    "name_set": 2,
    "station_name": "KOMSOMOL"
  },

  {
    "station_id": 71,
    "name_set": 0,
    "station_name": "PARK KULTURY"
  }, {
    "station_id": 71,
    "name_set": 1,
    "station_name": "Парк культу́ры"
  }, {
    "station_id": 71,
    "name_set": 2,
    "station_name": "CULTURE PARK"
  },

  {
    "station_id": 81,
    "name_set": 0,
    "station_name": "KURSKAYA"
  }, {
    "station_id": 81,
    "name_set": 1,
    "station_name": "Ку́рская"
  }, {
    "station_id": 81,
    "name_set": 2,
    "station_name": "KURSK"
  },

  {
    "station_id": 89,
    "name_set": 0,
    "station_name": "KIEVSKAYA"
  }, {
    "station_id": 89,
    "name_set": 1,
    "station_name": "Ки́евская"
  }, {
    "station_id": 89,
    "name_set": 2,
    "station_name": "KIEV"
  },

  {
    "station_id": 104,
    "name_set": 0,
    "station_name": "TAGANSKAYA"
  }, {
    "station_id": 104,
    "name_set": 1,
    "station_name": "Тага́нская"
  }, {
    "station_id": 104,
    "name_set": 2,
    "station_name": "TAGANKA"
  },

  {
    "station_id": 119,
    "name_set": 0,
    "station_name": "KRASNOPRESNENSKAYA"
  }, {
    "station_id": 119,
    "name_set": 1,
    "station_name": "Краснопре́сненская"
  }, {
    "station_id": 119,
    "name_set": 2,
    "station_name": "KRASNYA PRESNYA"
  },

  {
    "station_id": 140,
    "name_set": 0,
    "station_name": "BELORUSSKAYA"
  }, {
    "station_id": 140,
    "name_set": 1,
    "station_name": "Белору́сская"
  }, {
    "station_id": 140,
    "name_set": 2,
    "station_name": "BELARUS"
  },

  {
    "station_id": 153,
    "name_set": 0,
    "station_name": "PAVELETSKAYA"
  }, {
    "station_id": 153,
    "name_set": 1,
    "station_name": "Павеле́цкая"
  }, {
    "station_id": 153,
    "name_set": 2,
    "station_name": "PAVELETS"
  },

  {
    "station_id": 54,
    "name_set": 0,
    "station_name": "BULVAR ROKOSSOVSKOGO"
  }, {
    "station_id": 54,
    "name_set": 1,
    "station_name": "Бульва́р Рокоссо́вского"
  }, {
    "station_id": 54,
    "name_set": 2,
    "station_name": "ROKOSSOVSKY BLVD."
  },

  {
    "station_id": 55,
    "name_set": 0,
    "station_name": "CHERKIZOVSKAYA"
  }, {
    "station_id": 55,
    "name_set": 1,
    "station_name": "Черки́зовская"
  }, {
    "station_id": 55,
    "name_set": 2,
    "station_name": "CHERKIZOVO"
  },

  {
    "station_id": 56,
    "name_set": 0,
    "station_name": "PREOBRAZHENSKAYA PLOSHCHAD"
  }, {
    "station_id": 56,
    "name_set": 1,
    "station_name": "Преображе́нская пло́щадь"
  }, {
    "station_id": 56,
    "name_set": 2,
    "station_name": "PREOBRAZHENSKA SQUARE"
  },

  {
    "station_id": 57,
    "name_set": 0,
    "station_name": "SOKOLNIKI"
  }, {
    "station_id": 57,
    "name_set": 1,
    "station_name": "Соко́льники"
  }, {
    "station_id": 57,
    "name_set": 2,
    "station_name": "SOKOLNIKI"
  },

  {
    "station_id": 58,
    "name_set": 0,
    "station_name": "KRANSNOSELSKAYA"
  }, {
    "station_id": 58,
    "name_set": 1,
    "station_name": "Красносе́льская"
  }, {
    "station_id": 58,
    "name_set": 2,
    "station_name": "KRANSNOSELSKI"
  },

  {
    "station_id": 59,
    "name_set": 0,
    "station_name": "KOMSOMOLSKAYA"
  }, {
    "station_id": 59,
    "name_set": 1,
    "station_name": "Комсомо́льская"
  }, {
    "station_id": 59,
    "name_set": 2,
    "station_name": "KOMSOMOL"
  },

  {
    "station_id": 61,
    "name_set": 0,
    "station_name": "KRASNYE VOROTA"
  }, {
    "station_id": 61,
    "name_set": 1,
    "station_name": "Кра́сные воро́та"
  }, {
    "station_id": 61,
    "name_set": 2,
    "station_name": "RED GATE"
  },

  {
    "station_id": 62,
    "name_set": 0,
    "station_name": "CHISTYE PRUDY"
  }, {
    "station_id": 62,
    "name_set": 1,
    "station_name": "Чи́стые пруды́"
  }, {
    "station_id": 62,
    "name_set": 2,
    "station_name": "CLEAN PONDS"
  },

  {
    "station_id": 107,
    "name_set": 0,
    "station_name": "LUBYANKA"
  }, {
    "station_id": 107,
    "name_set": 1,
    "station_name": "Лубя́нка"
  }, {
    "station_id": 107,
    "name_set": 2,
    "station_name": "LUBYANKA"
  },

  {
    "station_id": 142,
    "name_set": 0,
    "station_name": "OKHOTNY RYAD"
  }, {
    "station_id": 142,
    "name_set": 1,
    "station_name": "Охотный ряд"
  }, {
    "station_id": 142,
    "name_set": 2,
    "station_name": "OKHOTNY ROW"
  },

  {
    "station_id": 83,
    "name_set": 0,
    "station_name": "BIBLIOTEKA IMENI LENINA"
  }, {
    "station_id": 83,
    "name_set": 1,
    "station_name": "Библиоте́ка и́мени Ле́нина"
  }, {
    "station_id": 83,
    "name_set": 2,
    "station_name": "LENIN LIBRARY"
  },

  {
    "station_id": 64,
    "name_set": 0,
    "station_name": "KROPOTKINSKAYA"
  }, {
    "station_id": 64,
    "name_set": 1,
    "station_name": "Кропо́ткинская"
  }, {
    "station_id": 64,
    "name_set": 2,
    "station_name": "KROPOTKIN"
  },
  /*
  { "station_id": 170, "name_set": 0, "station_name": "PARK KULTURY" },
  { "station_id": 170, "name_set": 1, "station_name": "Парк Культу́ры" },
  { "station_id": 170, "name_set": 2, "station_name": "CULTURE PARK" },
  */
  {
    "station_id": 70,
    "name_set": 0,
    "station_name": "FRUNZENSKAYA"
  }, {
    "station_id": 70,
    "name_set": 1,
    "station_name": "Фру́нзенская"
  }, {
    "station_id": 70,
    "name_set": 2,
    "station_name": "FRUNZE"
  },

  {
    "station_id": 69,
    "name_set": 0,
    "station_name": "SPORTIVNAYA"
  }, {
    "station_id": 69,
    "name_set": 1,
    "station_name": "Спорти́вная"
  }, {
    "station_id": 69,
    "name_set": 2,
    "station_name": "SPORT"
  },

  {
    "station_id": 68,
    "name_set": 0,
    "station_name": "LENINSKIYE GORY"
  }, {
    "station_id": 68,
    "name_set": 1,
    "station_name": "Ле́нинские го́ры"
  }, {
    "station_id": 68,
    "name_set": 2,
    "station_name": "LENIN HILLS"
  },

  {
    "station_id": 67,
    "name_set": 0,
    "station_name": "UNIVERSITET"
  }, {
    "station_id": 67,
    "name_set": 1,
    "station_name": "Университе́т"
  }, {
    "station_id": 67,
    "name_set": 2,
    "station_name": "UNIVERSITY"
  },

  {
    "station_id": 66,
    "name_set": 0,
    "station_name": "PROSPEKT VERNADSKOGO"
  }, {
    "station_id": 66,
    "name_set": 1,
    "station_name": "Проспе́кт Верна́дского"
  }, {
    "station_id": 66,
    "name_set": 2,
    "station_name": "VERNADSKI PROSPECT"
  },

  {
    "station_id": 65,
    "name_set": 0,
    "station_name": "YUGO-ZAPADNAYA"
  }, {
    "station_id": 65,
    "name_set": 1,
    "station_name": "Ю́го-За́падная"
  }, {
    "station_id": 65,
    "name_set": 2,
    "station_name": "SOUTHWEST"
  },

]


// STATION - (Individual stations)
//     station_id - (unique id number)
//     station_description
//     line_id
//     faction_id
//     x_position
//     y_position

var stations = [{
  "station_id": 1,
  "station_name": "ALTUF'YEVO",
  "station_description": "Description Lorem Ipsum Blah Blah",
  "label_point": 3,
  "x_position": 480,
  "y_position": 110,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 2,
  "station_name": "BIBIREVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 506,
  "y_position": 135.5,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 3,
  "station_name": "OTRADNOE",
  "station_description": "",
  "label_point": 3,
  "x_position": 506,
  "y_position": 168,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 4,
  "station_name": "VLADYKINO",
  "station_description": "",
  "label_point": 3,
  "x_position": 506,
  "y_position": 201,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 5,
  "station_name": "PETROVSKO-RAZUMOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 482,
  "y_position": 224,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 6,
  "station_name": "TIMIRYAZEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 481.5,
  "y_position": 255.5,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 7,
  "station_name": "DMITROVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 482,
  "y_position": 285.5,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 8,
  "station_name": "SAVELOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 482,
  "y_position": 314,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 9,
  "station_name": "MENDELEEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 482.5,
  "y_position": 346,
  "line_id": 9,
  "faction_id": 2
}, {
  "station_id": 10,
  "station_name": "NOVOSLOBODSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 504,
  "y_position": 368,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 11,
  "station_name": "TSVETNOY BULVAR",
  "station_description": "",
  "label_point": 3,
  "x_position": 578,
  "y_position": 446,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 12,
  "station_name": "CHEKHOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 500,
  "y_position": 524,
  "line_id": 9,
  "faction_id": 1
}, {
  "station_id": 13,
  "station_name": "ALEKSANDROVSKIY SAD",
  "station_description": "",
  "label_point": 3,
  "x_position": 501,
  "y_position": 624,
  "line_id": 4,
  "faction_id": 3
}, {
  "station_id": 14,
  "station_name": "BOROVITSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 502,
  "y_position": 667,
  "line_id": 0,
  "faction_id": 3
}, {
  "station_id": 15,
  "station_name": "POLYANKA",
  "station_description": "",
  "label_point": 3,
  "x_position": 515,
  "y_position": 761,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 16,
  "station_name": "DOBRYNINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 608,
  "y_position": 854,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 17,
  "station_name": "BULVAR DMITRIYA DONSKOGO",
  "station_description": "",
  "label_point": 3,
  "x_position": 609,
  "y_position": 1212,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 18,
  "station_name": "ANNINO",
  "station_description": "",
  "label_point": 3,
  "x_position": 610,
  "y_position": 1184,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 19,
  "station_name": "UL. AKADEMIKA YANGELYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 609,
  "y_position": 1159,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 20,
  "station_name": "PRAZHSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 609,
  "y_position": 1131,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 21,
  "station_name": "YUZHNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 610,
  "y_position": 1104,
  "line_id": 0,
  "faction_id": 0
}, {
  "station_id": 22,
  "station_name": "CHERTANOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 575,
  "y_position": 1072,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 23,
  "station_name": "SEVASTOPOLSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 574,
  "y_position": 1042,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 24,
  "station_name": "NAKHIMOVSKIY PROSPEKT",
  "station_description": "",
  "label_point": 3,
  "x_position": 575,
  "y_position": 1014,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 25,
  "station_name": "NAGORNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 574,
  "y_position": 986,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 26,
  "station_name": "NAGATINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 607,
  "y_position": 955,
  "line_id": 9,
  "faction_id": 0
}, {
  "station_id": 27,
  "station_name": "TUL'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 608,
  "y_position": 921,
  "line_id": 9,
  "faction_id": 2
}, {
  "station_id": 28,
  "station_name": "SERPUKHOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 608,
  "y_position": 884,
  "line_id": 9,
  "faction_id": 2
}, {
  "station_id": 29,
  "station_name": "MEDVEDKOVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 754.5,
  "y_position": 125,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 30,
  "station_name": "BABUSHKINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 755,
  "y_position": 165,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 31,
  "station_name": "SVIBLOVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 730,
  "y_position": 190,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 32,
  "station_name": "BOTANICHESKIY SAD",
  "station_description": "",
  "label_point": 3,
  "x_position": 705,
  "y_position": 217,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 33,
  "station_name": "VDNKH (EXHIBITION)",
  "station_description": "",
  "label_point": 3,
  "x_position": 704.5,
  "y_position": 255.5,
  "line_id": 6,
  "faction_id": 15
}, {
  "station_id": 34,
  "station_name": "ALEKSEEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 705,
  "y_position": 293,
  "line_id": 6,
  "faction_id": 15
}, {
  "station_id": 35,
  "station_name": "RIZHSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 705,
  "y_position": 333,
  "line_id": 6,
  "faction_id": 15
}, {
  "station_id": 36,
  "station_name": "PROSPEKT MIRA",
  "station_description": "",
  "label_point": 3,
  "x_position": 704,
  "y_position": 368,
  "line_id": 6,
  "faction_id": 2
}, {
  "station_id": 37,
  "station_name": "PROSPEKT MIRA",
  "station_description": "",
  "label_point": 3,
  "x_position": 683,
  "y_position": 390,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 38,
  "station_name": "SUKHAREVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 682,
  "y_position": 423,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 39,
  "station_name": "TURGENEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 683,
  "y_position": 515,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 40,
  "station_name": "KITAY-GOROD",
  "station_description": "",
  "label_point": 3,
  "x_position": 684,
  "y_position": 662,
  "line_id": 6, //7
  "faction_id": 0
}, {
  "station_id": 41,
  "station_name": "TRETYAKOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 593,
  "y_position": 752,
  "line_id": 6, //8
  "faction_id": 0
}, {
  "station_id": 42,
  "station_name": "OKTYABR'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 521,
  "y_position": 823,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 43,
  "station_name": "OKTYABR'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 499,
  "y_position": 845,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 44,
  "station_name": "BITZEVSKY PARK",
  "station_description": "",
  "label_point": 3,
  "x_position": 411,
  "y_position": 1150,
  "line_id": 12,
  "faction_id": 0
}, {
  "station_id": 45,
  "station_name": "YASENEVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 388,
  "y_position": 1126,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 46,
  "station_name": "TEPLIY STAN",
  "station_description": "",
  "label_point": 3,
  "x_position": 363,
  "y_position": 1102,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 47,
  "station_name": "KON'KOVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 363,
  "y_position": 1069,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 48,
  "station_name": "BELYAEVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 364,
  "y_position": 1039,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 49,
  "station_name": "KALUZHSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 386,
  "y_position": 1015,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 50,
  "station_name": "NOVYE CHEREMUSHKI",
  "station_description": "",
  "label_point": 3,
  "x_position": 409,
  "y_position": 993,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 51,
  "station_name": "PROFSOYUZNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 433,
  "y_position": 970,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 52,
  "station_name": "AKADEMICHESKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 455,
  "y_position": 948,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 53,
  "station_name": "LENINSKIY PROSPEKT",
  "station_description": "",
  "label_point": 3,
  "x_position": 477,
  "y_position": 924,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 54,
  "station_name": "SHABOLOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 499,
  "y_position": 902,
  "line_id": 6,
  "faction_id": 0
}, {
  "station_id": 55,
  "station_name": "ULITSA PODBEL'SKOGO",
  "station_description": "",
  "label_point": 3,
  "x_position": 872,
  "y_position": 253,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 56,
  "station_name": "CHERKIZOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 872.5,
  "y_position": 295,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 57,
  "station_name": "PREOBRAZHENSKAYA PLOSCHAD'",
  "station_description": "",
  "label_point": 3,
  "x_position": 846,
  "y_position": 323,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 58,
  "station_name": "SOKOL'NIKI",
  "station_description": "",
  "label_point": 3,
  "x_position": 818,
  "y_position": 349,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 59,
  "station_name": "KRANSNOSEL'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 791,
  "y_position": 377,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 60,
  "station_name": "KOMSOLMOL'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 762,
  "y_position": 409,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 61,
  "station_name": "KOMSOLMOL'SKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 741,
  "y_position": 430,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 62,
  "station_name": "KRASNYE VOROTA",
  "station_description": "",
  "label_point": 3,
  "x_position": 712,
  "y_position": 457,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 63,
  "station_name": "CHISTYE PRUDY",
  "station_description": "",
  "label_point": 3,
  "x_position": 683,
  "y_position": 483,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 64,
  "station_name": "TEATRAL'NAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 567,
  "y_position": 603,
  "line_id": 2,
  "faction_id": 5
}, {
  "station_id": 65,
  "station_name": "KROPOTKINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 442,
  "y_position": 729,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 66,
  "station_name": "YUGO-ZAPADNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 187,
  "y_position": 987,
  "line_id": 1,
  "faction_id": 0
}, {
  "station_id": 67,
  "station_name": "PROSPEKT VERNADSKOGO",
  "station_description": "",
  "label_point": 3,
  "x_position": 217,
  "y_position": 956,
  "line_id": 1,
  "faction_id": 0
}, {
  "station_id": 68,
  "station_name": "UNIVERSITET",
  "station_description": "",
  "label_point": 3,
  "x_position": 247,
  "y_position": 926,
  "line_id": 1,
  "faction_id": 0
}, {
  "station_id": 69,
  "station_name": "VOROB'EVY GORY",
  "station_description": "",
  "label_point": 3,
  "x_position": 279,
  "y_position": 892,
  "line_id": 1,
  "faction_id": 0
}, {
  "station_id": 70,
  "station_name": "SPORTIVNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 323,
  "y_position": 849,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 71,
  "station_name": "FRUNZENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 358,
  "y_position": 813,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 72,
  "station_name": "PARK KUL'TURY",
  "station_description": "",
  "label_point": 3,
  "x_position": 391,
  "y_position": 778, //fix position
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 72,
  "station_name": "PARK KUL'TURY",
  "station_description": "",
  "label_point": 3,
  "x_position": 391,
  "y_position": 778,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 73,
  "station_name": "SCHELKOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 986,
  "y_position": 427,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 74,
  "station_name": "PERVOMAYSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 987,
  "y_position": 463,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 75,
  "station_name": "IZMAYLOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 987,
  "y_position": 502,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 76,
  "station_name": "PARTIZANSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 961,
  "y_position": 528,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 77,
  "station_name": "SEMYONOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 935,
  "y_position": 555,
  "line_id": 3,
  "faction_id": 8
}, {
  "station_id": 78,
  "station_name": "ELEKTROZAVODSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 910,
  "y_position": 581,
  "line_id": 3,
  "faction_id": 8
}, {
  "station_id": 79,
  "station_name": "BAUMANSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 885,
  "y_position": 607,
  "line_id": 3,
  "faction_id": 8
}, {
  "station_id": 80,
  "station_name": "KURSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 846,
  "y_position": 643,
  "line_id": 3,
  "faction_id": 2
}, {
  "station_id": 81,
  "station_name": "CHKALOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 831,
  "y_position": 669,
  "line_id": 10,
  "faction_id": 2
}, {
  "station_id": 82,
  "station_name": "KURSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 816,
  "y_position": 644,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 83,
  "station_name": "PLOSCHAD' REVOLUTSII",
  "station_description": "",
  "label_point": 3,
  "x_position": 612,
  "y_position": 644,
  "line_id": 3,
  "faction_id": 5
}, {
  "station_id": 84,
  "station_name": "BIBLIOTEKA IM. LENINA",
  "station_description": "",
  "label_point": 3,
  "x_position": 523,
  "y_position": 645,
  "line_id": 1,
  "faction_id": 3
}, {
  "station_id": 85,
  "station_name": "ARBATSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 479,
  "y_position": 645,
  "line_id": 3,
  "faction_id": 3
}, {
  "station_id": 86,
  "station_name": "SMOLENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 418,
  "y_position": 646,
  "line_id": 3,
  "faction_id": 7
}, {
  "station_id": 87,
  "station_name": "PARK POBEDY",
  "station_description": "",
  "label_point": 3,
  "x_position": 180,
  "y_position": 737,
  "line_id": 3, //8
  "faction_id": 11
}, {
  "station_id": 88,
  "station_name": "KIEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 327,
  "y_position": 741,
  "line_id": 3,
  "faction_id": 7
}, {
  "station_id": 89,
  "station_name": "KIEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 325,
  "y_position": 698,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 90,
  "station_name": "KIEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 349,
  "y_position": 720,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 91,
  "station_name": "NOVOGIREEVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 1010,
  "y_position": 657,
  "line_id": 8,
  "faction_id": 7
}, {
  "station_id": 92,
  "station_name": "PEROVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 983,
  "y_position": 685,
  "line_id": 8,
  "faction_id": 0
}, {
  "station_id": 93,
  "station_name": "SCHOSSE ENTUZIASTOV",
  "station_description": "",
  "label_point": 3,
  "x_position": 956,
  "y_position": 712,
  "line_id": 8,
  "faction_id": 0
}, {
  "station_id": 94,
  "station_name": "AVIAMOTORNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 928,
  "y_position": 739,
  "line_id": 8,
  "faction_id": 0
}, {
  "station_id": 95,
  "station_name": "PLOSHAD' IL'YICHA",
  "station_description": "",
  "label_point": 3,
  "x_position": 867,
  "y_position": 765,
  "line_id": 8,
  "faction_id": 0
}, {
  "station_id": 96,
  "station_name": "MARKSISTSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 801,
  "y_position": 766,
  "line_id": 8,
  "faction_id": 2
}, {
  "station_id": 97,
  "station_name": "NOVOKUZNETSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 619,
  "y_position": 767,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 98,
  "station_name": "VYKHINO",
  "station_description": "",
  "label_point": 3,
  "x_position": 1032,
  "y_position": 896,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 99,
  "station_name": "RYAZANSKY PROSPEKT",
  "station_description": "",
  "label_point": 3,
  "x_position": 997,
  "y_position": 898,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 100,
  "station_name": "KUZMINKY",
  "station_description": "",
  "label_point": 3,
  "x_position": 961,
  "y_position": 896,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 101,
  "station_name": "TEKSTIL'SCHIKI",
  "station_description": "",
  "label_point": 3,
  "x_position": 941,
  "y_position": 876,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 102,
  "station_name": "VOLGOGRADSKY PROSPEKT",
  "station_description": "",
  "label_point": 3,
  "x_position": 910,
  "y_position": 845,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 103,
  "station_name": "PROLETARSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 867,
  "y_position": 803,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 104,
  "station_name": "TAGANSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 801,
  "y_position": 737,
  "line_id": 7,
  "faction_id": 2
}, {
  "station_id": 105,
  "station_name": "TAGANSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 775,
  "y_position": 751,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 106,
  "station_name": "KITAY-GOROD",
  "station_description": "",
  "label_point": 3,
  "x_position": 726,
  "y_position": 664,
  "line_id": 7, //6
  "faction_id": 0
}, {
  "station_id": 107,
  "station_name": "KUZNETSKY MOST",
  "station_description": "",
  "label_point": 3,
  "x_position": 638,
  "y_position": 574,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 108,
  "station_name": "LUBYANKA",
  "station_description": "",
  "label_point": 3,
  "x_position": 617,
  "y_position": 553,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 109,
  "station_name": "TVERSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 515,
  "y_position": 550,
  "line_id": 2,
  "faction_id": 1
}, {
  "station_id": 110,
  "station_name": "PUSHKINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 486,
  "y_position": 550,
  "line_id": 7,
  "faction_id": 1
}, {
  "station_id": 111,
  "station_name": "BARRIKADNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 357,
  "y_position": 553,
  "line_id": 7,
  "faction_id": 6
}, {
  "station_id": 112,
  "station_name": "PLANERNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 199,
  "y_position": 303,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 113,
  "station_name": "SHODNENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 200,
  "y_position": 345,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 114,
  "station_name": "TUSHINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 200,
  "y_position": 387,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 115,
  "station_name": "SCHUKINSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 200,
  "y_position": 429,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 116,
  "station_name": "OKTYABR'SKOE POLE",
  "station_description": "",
  "label_point": 3,
  "x_position": 225,
  "y_position": 454,
  "line_id": 0,
  "faction_id": 0
}, {
  "station_id": 117,
  "station_name": "POLEZHAEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 250,
  "y_position": 478,
  "line_id": 7,
  "faction_id": 0
}, {
  "station_id": 118,
  "station_name": "BEGOVAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 275,
  "y_position": 503,
  "line_id": 7,
  "faction_id": 6
}, {
  "station_id": 119,
  "station_name": "ULITSA 1905 GODA",
  "station_description": "",
  "label_point": 3,
  "x_position": 300,
  "y_position": 528,
  "line_id": 7,
  "faction_id": 6
}, {
  "station_id": 120,
  "station_name": "KRASNOPRESNENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 326,
  "y_position": 552,
  "line_id": 7,
  "faction_id": 2
}, {
  "station_id": 121,
  "station_name": "MAR'YINO",
  "station_description": "",
  "label_point": 3,
  "x_position": 907,
  "y_position": 1042,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 122,
  "station_name": "BRATISLAVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 907,
  "y_position": 1015,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 123,
  "station_name": "LYUBLINO",
  "station_description": "",
  "label_point": 3,
  "x_position": 907,
  "y_position": 991,
  "line_id": 10,
  "faction_id": 13
}, {
  "station_id": 124,
  "station_name": "VOLZHSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 907,
  "y_position": 964,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 125,
  "station_name": "PECHATNIKI",
  "station_description": "",
  "label_point": 3,
  "x_position": 888,
  "y_position": 945,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 126,
  "station_name": "KOZHUHOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 866,
  "y_position": 925,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 127,
  "station_name": "DUBROVKA",
  "station_description": "",
  "label_point": 3,
  "x_position": 866,
  "y_position": 887,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 128,
  "station_name": "KREST'YANSKAYA ZASTAVA",
  "station_description": "",
  "label_point": 3,
  "x_position": 866,
  "y_position": 834,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 129,
  "station_name": "RIMSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 867,
  "y_position": 734,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 130,
  "station_name": "SRETENSKY BULVAR",
  "station_description": "",
  "label_point": 3,
  "x_position": 648,
  "y_position": 488,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 131,
  "station_name": "TRUBNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 608,
  "y_position": 446,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 132,
  "station_name": "DOSTOYEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 607,
  "y_position": 333,
  "line_id": 0,
  "faction_id": 0
}, {
  "station_id": 133,
  "station_name": "MAR'YINA ROSCHA",
  "station_description": "",
  "label_point": 3,
  "x_position": 607,
  "y_position": 297,
  "line_id": 10,
  "faction_id": 0
}, {
  "station_id": 134,
  "station_name": "RECHNOY VOKZAL",
  "station_description": "",
  "label_point": 3,
  "x_position": 302,
  "y_position": 208,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 135,
  "station_name": "VODNY STADION",
  "station_description": "",
  "label_point": 3,
  "x_position": 302,
  "y_position": 248,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 136,
  "station_name": "VOIKOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 302,
  "y_position": 288,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 137,
  "station_name": "SOKOL",
  "station_description": "",
  "label_point": 3,
  "x_position": 302,
  "y_position": 332,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 138,
  "station_name": "AEROPORT",
  "station_description": "",
  "label_point": 3,
  "x_position": 324,
  "y_position": 355,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 139,
  "station_name": "DINAMO",
  "station_description": "",
  "label_point": 3,
  "x_position": 349,
  "y_position": 380,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 140,
  "station_name": "BELORUSSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 376,
  "y_position": 409,
  "line_id": 2,
  "faction_id": 9
}, {
  "station_id": 141,
  "station_name": "BELORUSSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 398,
  "y_position": 430,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 142,
  "station_name": "MAYAKOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 447,
  "y_position": 480,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 143,
  "station_name": "OKHOTNY RYAD",
  "station_description": "",
  "label_point": 3,
  "x_position": 569,
  "y_position": 602,
  "line_id": 1,
  "faction_id": 5
}, {
  "station_id": 144,
  "station_name": "NOVOKUZNETSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 592,
  "y_position": 783,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 145,
  "station_name": "KRASNOGVARDEYSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 847,
  "y_position": 1181,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 146,
  "station_name": "DOMODEDOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 823,
  "y_position": 1155,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 147,
  "station_name": "OREHOVO",
  "station_description": "",
  "label_point": 3,
  "x_position": 799,
  "y_position": 1131,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 148,
  "station_name": "TSARITSYNO",
  "station_description": "",
  "label_point": 3,
  "x_position": 773,
  "y_position": 1105,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 149,
  "station_name": "KANTEMIROVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 748,
  "y_position": 1080,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 150,
  "station_name": "KASHIRSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 749,
  "y_position": 1043,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 151,
  "station_name": "KOLOMENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 749,
  "y_position": 1008,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 152,
  "station_name": "AVTOZAVODSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 749,
  "y_position": 936,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 153,
  "station_name": "PAVELETSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 676,
  "y_position": 861,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 154,
  "station_name": "PAVELETSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 655,
  "y_position": 841,
  "line_id": 5,
  "faction_id": 2
}, {
  "station_id": 155,
  "station_name": "KRYLATSKOE",
  "station_description": "",
  "label_point": 3,
  "x_position": 99,
  "y_position": 514,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 156,
  "station_name": "MOLODEZHNAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 99,
  "y_position": 559,
  "line_id": 3,
  "faction_id": 0
}, {
  "station_id": 157,
  "station_name": "KUNTSEVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 99,
  "y_position": 606,
  "line_id": 3, //4
  "faction_id": 0
}, {
  "station_id": 158,
  "station_name": "PIONERSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 123,
  "y_position": 632,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 159,
  "station_name": "FILEVSKIY PARK",
  "station_description": "",
  "label_point": 3,
  "x_position": 145,
  "y_position": 655,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 160,
  "station_name": "BAGRATIONOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 167,
  "y_position": 676,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 161,
  "station_name": "FILI",
  "station_description": "",
  "label_point": 3,
  "x_position": 189,
  "y_position": 699,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 162,
  "station_name": "KUTUZOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 210,
  "y_position": 719,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 163,
  "station_name": "STUDENCHESKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 257,
  "y_position": 762,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 164,
  "station_name": "SMOLENSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 398,
  "y_position": 626,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 165,
  "station_name": "ARBATSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 460,
  "y_position": 625,
  "line_id": 4,
  "faction_id": 0
}, {
  "station_id": 166,
  "station_name": "BELORUSSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 398,
  "y_position": 430,
  "line_id": 2,
  "faction_id": 0
}, {
  "station_id": 168,
  "station_name": "KAHOVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 605,
  "y_position": 1043,
  "line_id": 11,
  "faction_id": 0
}, {
  "station_id": 169,
  "station_name": "VARSHAVSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 664,
  "y_position": 1043,
  "line_id": 11,
  "faction_id": 0
}, {
  "station_id": 170,
  "station_name": "KASHIRSKAYA",
  "station_description": "",
  "label_point": 3,
  "x_position": 721,
  "y_position": 1043,
  "line_id": 11,
  "faction_id": 0
}]


// FACTION
//     faction_id
//     faction_name
//     faction_description
// SOURCE: http://metrovideogame.wikia.com/wiki/Factions

var factions = [{
  "faction_id": 1,
  "faction_name": "Fourth Reich",
  "faction_description": "A politically far right neo-Nazi faction who embrace many of the ideals of World War II Nazi Germany. Their leader, the Führer, enforces a policy of oppression against all those who are considered 'inferior' which includes people who have been mutated by radiation. Their home station is the triple station of Tverskaya-Chekhovskaya-Pushkinskaya, though they occupy many other stations and bases on the surface. In a state of perpetual war with their political opposites, the Red Line, their army consists of highly trained men with advanced equipment, and often utilise Wehrmacht-style helmets and banners. They prefer well trained soldiers and heavy firepower at the expense of a smaller army (possibly because their purges have limited their recruitment options). The Nazis are always a hostile faction towards the player, as they commonly assume that Artyom is a Communist, claiming he is an 'Enemy Scout' or a 'Red Spy'.",
  "faction_colour": "#784805"
}, {
  "faction_id": 2,
  "faction_name": "Hansa",
  "faction_description": "This faction is a collection of stations that occupy the Koltsevaya Ring Line of the Metro. Formed during the early days of the Metro when Central Metro Command fell, Hansa is the most powerful faction in the Metro. Their influence stretches in all directions due to their line being impossible to bypass, meaning Hansa grew incredibly rich. Although their security forces are well equipped, they rarely seek war, preferring to use economic sanctions to suppress their neighbours. They also protect a number of satellite factions, in return for food, electricity and so on. Their leader is the mysterious Prime Minister Rusakov.",
  "faction_colour": "#784805"
}, {
  "faction_id": 3,
  "faction_name": "Polis",
  "faction_description": "Occupying the Arbatskaya, Alexandrovsky Sad, Biblioteka im Lenina and Borovitskaya stations, Polis is the beacon of light in the post-apocalyptic Metro. Created by previous members of the Russian government, military, and police, Polis is the factions closest to pre-war life, with electric lighting and relatively comfortable living conditions. Taking their society from Indian caste system, the Brahmin lead, the Kshatriya are the protectors, the Vashiya the merchants and the Shudra, who are the servants, Polis actively seeks to preserve as much of the old world as possible. They frequently send Stalkers to the surface to hunt for pre-war books that they distribute to the entire Metro.",
  "faction_colour": "#784805"
}, {
  "faction_id": 4,
  "faction_name": "Rangers of the Order",
  "faction_description": "A para-military organisation considered the protectors of the Metro, the Rangers venture the Metro and the surface, eliminating mutants and bandits who prey on the weak. Although technically neutral, they have close ties with Polis, with many members hailing from there. They have no home stations, instead occupying the surface base of Sparta, and the D6 bunker. Their leader, Miller, enforces a policy of 'if it's hostile, you kill it', which has served the Rangers well so far. Many members were previously Russian special forces or military, training which makes them ideal soldiers for protecting the Metro. This is also Artyom's faction.",
  "faction_colour": "#784805"
}, {
  "faction_id": 5,
  "faction_name": "Red Line",
  "faction_description": "The Red Line are a politically far-left faction who emulate the former Soviet-Union, particularly that of Stalin's era. Occupying the Sokolnicheskaya Line, minus the two stations of the Ring, the Red Line are a powerful faction. Although not as openly hostile as their enemies, the Fourth Reich, they are nonetheless an oppressive society, with many executions and imprisonments. Their army is reminiscent of the World War II Red Army, compromising of large quantities of poorly trained and equipped men with low survivability. Their huge (relative to the rest of the Metro) population allows this huge neglect for life. They have some well trained and equipped soldiers though, who are most likely either pre-war soldiers or veteran conscripts. These soldiers are rarely seen near the frontlines though. Their leader, Secretary Moskvin, is a harsh leader, though the faction is fairly wealthy nonetheless.",
  "faction_colour": "#784805"
}, {
  "faction_id": 6,
  "faction_name": "1905 Confederation",
  "faction_description": "Occupying the Barrikadnaya, Uliza 1905 goda, and Begovaya stations, the 1905 Confederation is a small faction of unknown origin. It is unknown what their primary produce is, though given their close proximity to Hansa, they are likely a satellite faction. Its only known residents are Mikhail Porfirevich and Vanechka.",
  "faction_colour": "#784805"
}, {
  "faction_id": 7,
  "faction_name": "Arbat Confederation",
  "faction_description": "Another small faction, occupying Kievskaya and its close neighbours. They are a Capitalist society, with a large number of Caucasians. Although they were previously a strong faction, their role in the Hansa - Red Line War reduced them to another Hansa satellite.",
  "faction_colour": "#784805"
}, {
  "faction_id": 8,
  "faction_name": "Baumansky Alliance",
  "faction_description": "The Baumansky Alliance are a small faction occupying the stations of Baumanskaya, Elektrozavodskaya and Semyonovskaya. They produce, repair and recreate much technology from before the war, as well as producing electricity to sell to the Metro. Their importance has enabled them to resist Hansa's absorption, as well as major hostilities.",
  "faction_colour": "#784805"
}, {
  "faction_id": 9,
  "faction_name": "Belorusskaya Trade Outpost",
  "faction_description": "A collection of trading stations, including Sokol, Aeroport, Dinamo and Belorusskaya, the Belorusskaya Trade Outpost is responsible for the production of food in the Metro, particularly livestock, something of a rarity in the Metro. Unlike many other factions, they are completely neutral, even willing to deal with the likes of the Fourth Reich, buying slaves from them to work on plantations. However, they are having problems with disappearances, rumoured to have been kidnapped by Satanists.",
  "faction_colour": "#784805"
}, {
  "faction_id": 10,
  "faction_name": "Children of the Underground",
  "faction_description": "Residing in the mutant stricken station of Paveletskaya, the Children of the Underground is the name for the forces protecting the station. Also known as Hole Station, Paveletskaya, missing its hermetic door, is constantly under attack by mutants. Artyom aids the Children of the Underground in fighting off the invaders, but the station eventually falls, the Children of the Underground sacraficing themselves to cut off Paveletskaya and the mutants from the rest of the Metro.",
  "faction_colour": "#784805"
}, {
  "faction_id": 11,
  "faction_name": "Savage Cannibals of the Great Worm Cult",
  "faction_description": "A technophobic, xenophobic primative faction, residing in Park Pobedy, the Great Worm Cult have descended into a state of primeaval living. They worship an entity known as the 'Great Worm', the being that created the entire world (I.E: The Metro), and frequently cannibalise those who use technology. Their leader is actually an old man who hated how technology destroyed the world. The Great Worm Cult's primary enemies are the Arbat Confederation, who's children they frequently steal.",
  "faction_colour": "#784805"
}, {
  "faction_id": 12,
  "faction_name": "Revolutionaries",
  "faction_description": "A military branch of the Red Line, though not directly affiliated anymore, the Revolutionaries travel the Metro attacking Reich territory and patrols, supplied by the Red Line. Following the ideals of Trotsky and Che Guevara, they save Artyom from certain death from a Reich noose.",
  "faction_colour": "#784805"
}, {
  "faction_id": 13,
  "faction_name": "Satanists",
  "faction_description": "A myth amongst the Metro, the Satanists are said to occupy the stations from Dubrovka to Lyublino. Driven mad by the apocalypse, the Satanists kidnap Metro dwellers and force them to dig a huge hole in Lyublino station, that they believe is the portal to Hell itself. Given that there is only one known witness of this, whether or not the Satanists truly exist is questionable.",
  "faction_colour": "#784805"
}, {
  "faction_id": 14,
  "faction_name": "The Watchtower",
  "faction_description": "The Watchtower are a religious faction occupying the tunnels south of Serpukhhovskaya. Composing mainly of Jehova's Witnesses, their brothers travel the Metro, taking in waifs and strays to indoctrinate into their order. One, Brother Timothy, rescues Artyom, but Artyom soon grows bored of the hypocritical ramblings of the priest.",
  "faction_colour": "#784805"
}, {
  "faction_id": 15,
  "faction_name": "VDNKh Commonwealth",
  "faction_description": "ne of the youngest factions in the Metro, the VDNKh Commonwealth is an alliance between VDNKh, Alexeyevskaya and Rizhskaya to monopolise the station's tea production and prevent annexation by Hansa. A strong faction, with schools, a library and a decent security force, the VDNKh Commonwealth will likely grow into a powerful faction. Their only major enemies are the Dark Ones.",
  "faction_colour": "#784805"
}, {
  "faction_id": 16,
  "faction_name": "Bandits",
  "faction_description": "Bandits is the catchall term for loosely organised gangs and thugs. Controlling certain stations throughout the Metro system, though rarely more than one, bandits are known to rob and murder defenceless travellers in the tunnels, taking their goods to sell on. However, some 'bandits' are simply lawless factions, such as those ruling Venice or Kitai-Gorod, and are not as extreme as other bandits. Although their businesses may be lucrative, and they are not afraid to kill to get what they want, they are not openly hostile. Many bandit factions are also rumoured to create and sell poor quality or fake merchandise to gullible travellers, often for the same price as a genuine copy.",
  "faction_colour": "#784805"
}]

// FEATURES - (Objects on the map that aren't stations)

var features = [{
    "feature_name": "Hansa Bunker|(GO-42)",
    "feature_id": 0,
    "x_position": 844,
    "y_position": 690,
    "width": 55,
    "height": 30,
    "version_id": 3
  }, {
    "feature_name": "Kingdom|of Rats",
    "feature_id": 1,
    "x_position": 450,
    "y_position": 220,
    "width": 50,
    "height": 26,
    "version_id": 3
  }, {
    "feature_name": "The Gates",
    "feature_id": 2,
    "x_position": 620,
    "y_position": 1100,
    "width": 50,
    "height": 20,
    "version_id": 3
  }

]
