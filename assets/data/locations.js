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
  // red line
  "line_id": 1,
  "line_number": 1,
  "line_name": "Sokolnicheskaya",
  "line_nodes": [
    [0, 882, 259],
    [0, 882, 301],
    [0, 762, 425],
    [0, 201, 993],
  ],
  "line_colour": "#c81111"
},
{ // green line
  "line_id": 2,
  "line_number": 2,
  "line_name": "Zamoskvoretskaya",
  "line_nodes": [
    [0, 322,218], // Planernaya
    [0, 322,342],
    [1, 400,420],
    [0, 420,430], 
    [1, 435,430],
    [0, 455,440],
    [1, 608,591],
    [0, 608,611],
    [0, 598,621], // teatralnaya
    [1, 562,657],
    [0, 552,677],
    [1, 552,733],
    [0, 562,753],
    [0, 592,783], // Novokuznetskaya
    [0, 676,861], // Pavelets
    [1, 739,924],
    [0, 749,944],
    [0, 749,1080],
    [0, 847,1181],
    [0, 847,1210]
  ],
  "line_colour": "#2dcb41"
},
{ // Blue Line
  "line_id": 3,
  "line_number": 3,
  "line_name": "Arbatsko-Pokrovskaya",
  "line_nodes": [
    [0,  76,595], 
    [1,  76,658], 
    [0,  86,678], 
    [0, 110,702], // SLAVYANSKY BULVAR
    [0, 159,751], // PARK POEBY
    [1, 224,821],
    [0, 244,821],
    [0, 327,741], // KIEVSKAYA
    [1, 422,646],
    [0, 442,636],
    [0, 485,636], // ARBAT (POLIS)
    [1, 742,636],
    [0, 762,626],
    [0, 800,588],
    [0, 863,525],
    [0, 945,442],
    [0, 945,378] // SHCHYOLKOVSKAYA
  ],
  "line_colour": "#2192e4"
},
{
  // Pale Blue Line
  "line_id": 4,
  "line_number": 4,
  "line_name": "Filyovskaya",
  "line_nodes": [
  [0, 527,621], // ALEKSANDROVSKY SAD
  [1, 527,610],
  [0, 517,600],
  [1, 436,600],
  [0, 416,610],
  [0, 318,708],  // KIEVSKAYA
  [1, 264,762],
  [0, 244,762],
  [1, 110,628],
  [0, 100,608],
  [0, 100,365], // PYATNITSKOYE SHOSSE
  ],
  "line_colour": "#1cbcd9"
},
{
  // Circle Line
  "line_id": 5,
  "line_number": 5,
  "line_name": "Koltsevaya (Circular)",
  "line_nodes": [
    [2, 570, 608, 249]
  ],
  "line_colour": "#733b3b"
},
{
  // Orange Line
  "line_id": 6,
  "line_number": 6,
  "line_name": "Kaluzhsko-Rizhskaya",
  "line_nodes": [
    [0, 755, 125],
    [0, 755, 165],
    [0, 705, 217],
    [1, 705, 391],
    [0, 695, 411],
    [0, 683, 423],
    [0, 683, 662],
    [0, 593, 752],
    [0, 521, 823],
    [0, 521, 823],
    [1, 521, 870],
    [0, 511, 890],
    [0, 364, 1040],
    [0, 363, 1102],
    [0, 411, 1150],
    [1, 411, 1097],
    [0, 401, 1077],
    [0, 364, 1040]
  ],
  "line_colour": "#c6871c"
},
{ // purple line
  "line_id": 7,
  "line_number": 7,
  "line_name": "Tagansko-Krasnopresnenskaya",
  "line_nodes": [
    [0, 192,305],
    [0, 192,425],
    [0, 300,533],
    [0, 631,533], // Kuznetsy Most
    [1, 697,599],
    [0, 708,620],
    [1, 708,700],
    [0, 728,720],
    [1, 770,720],
    [0, 790,730],
    [0, 800,740], // taganskaya
    [1, 976,916],
    [0, 996,926],
    [1, 1050,926],
    [0, 1070,946],    
    [0, 1070,985]
  ],
  "line_colour": "#832396"
},
{
  // Yellow Line
  "line_id": 8,
  "line_number": 8,
  "line_name": "Kalininsko-Solntsevskaya",
  "line_nodes": [
    [0, 613,766],
    [1, 895,766],
    [0, 915,756],
    [0, 1034,627],
  ],
  "line_colour": "#ebd82d"
},
{
  // Yellow Line Extension
  "line_id": 14,
  "line_number": 8,
  "line_name": "Kalininsko-Solntsevskaya",
  "line_nodes": [
    [0, 265,620], // DELOVOY TSENTR
    [1, 240,620],
    [0, 220,630],
    [1, 183,670],
    [0, 173,694],
    [0, 173,750], // PARK POBEDY
  ],
  "line_colour": "#ebd82d"
},
{
  // grey line
  "line_id": 9,
  "line_number": 9,
  "line_name": "Serpukhovsko-Timiryazevskaya",
  "line_nodes": [
    [0, 490,90], // Altufyevo
    [0, 515,115],
    [0, 515,185],
    [0, 490,210],
    [0, 490,350],
    [0, 580,440], // Tsvetnoy Bulvar
    [1, 580,453],
    [0, 560,473],
    [1, 539,473],
    [0, 519,483],
    [0, 489,513], // Chekhovskaya
    [1, 475,527],
    [0, 465,547],
    [1, 465,648],
    [0, 475,668],
    [0, 485,678], // Arbat
    [1, 495,688],
    [0, 505,708],
    [1, 505,727],
    [0, 515,747],
    [1, 598,830],
    [0, 608,850],
    [0, 608,880],
    [0, 608,940],
    [0, 578,970],
    [0, 578,1060],
    [0, 608,1090],
    [0, 608,1210]
  ],
  "line_colour": "#b6b6be"
},
{
  // Lime Green Line
  "line_id": 10,
  "line_number": 10,
  "line_name": "Lyublinsko-Dmitrovskaya",
  "line_nodes": [
    [0, 600,270], // Maryina Roshcha
    [1, 600,440],
    [0, 620,460],
    [1, 630,460],
    [0, 650,470],
    [0, 800,620], // Chkalovskaya
    [1, 860,680],
    [0, 870,700],
    [1, 870,915],
    [0, 880,935],
    [0, 906,961],
    [0, 906,1051],
    [0, 907,1121],
    [0, 847,1181] // Krasnogvardeyskaya
  ],
  "line_colour": "#a0bd3d"
},
{ // Teal Line
  "line_id": 11,
  "line_number": 11,
  "line_name": "Kakhovskaya",
  "line_nodes": [
    [0, 602,1030],
    [0, 749,1030]
  ],
  "line_colour": "#65ddc0"
},
{
  // Pale blue line
  "line_id": 12,
  "line_number": 12,
  "line_name": "Butovskaya",
  "line_nodes": [
    [0, 435,1150],
    [0, 515,1150],
    [1, 564,1150],
    [0, 584,1170],
    [0, 584,1210],
    [0, 494,1300]
  ],
  "line_colour": "#959fc8"
},
{
  // Pale Blue Extension
  "line_id": 13,
  "line_number": 4,
  "line_name": "Filyovskaya",
  "line_nodes": [
  [0, 318,708],  // KIEVSKAYA
  [1, 310,708],
  [0, 290,688],
  [0, 290,600],  // DELOVOY TSENTR
  [0, 290,565]
  ],
  "line_colour": "#1cbcd9"
}
]

// **************************************************************************************************************************************************
// RIVERS
//  Rivers
var rivers = [
  [5, [20,450], [130,450], [240,680], [340,640], [400,680], [400,720],[360,750], [270, 840],[294,898],[340,910],[370,860]],
]


// **************************************************************************************************************************************************

// LINE BREAKS
//  Where the various lines are broken or blocked
var line_breaks = [
  // 1 - Red Line
  [300,892],
  [286,906],
  // 2 - Green Line (No breaks)
  // 3 - dark blue line
  [925, 462],
  [307,761],
  [140,732],
  [76,630],
  // 4 - Light Blue Line
  [500,600],
  // 5 - Circle Line (No breaks)
  // 6 - Orange line (No Breaks)
  // 7 - Purple Line
  [261,494],
  [936,875],
  // 8 Yellow Line (No Breaks)
  // 9 Grey line (No Breaks)
  // 10 Line Green Line
  [600,290],
  [600,340],
  [600,400],
  [635,460],
  [709,529],
  [739,559],
  // 11 Teal Line (No Breaks)
  // 12 Pale Blue Line (No Breaks)
  // 13 Pale Bue Extension (No Breaks)
  // 14 - Yellow Line Extension
  [216,635],
  [187,665],
]

// **************************************************************************************************************************************************
// SURFACE_LINKS
// Tunnels to surface [angle, x, y]
var surface_links = [
  // 1 - Red Line
  [180, 882,280],
  [225, 776,408],
  [135, 341,888],
  // 2 - Green Line
  [0, 322,320],
  [180, 749,1055],
  [180, 847,1195],
  // 3 - Dark Blue line
  [225, 937,450],
  // 4 - Light Blue Line
  [315, 178,696],
  // 5 - Circle Line
  [180, 363,470],
  // 6 - Orange line
  [225, 742,178],
  [45,  398,1004],
  // 7 - Purple Line
  [225, 192,305],
  // 8 - Yellow Line
  [225, 1008,655],
  // 9 - Grey line
  [45, 502,197],
  [315, 598,1080],
  // 10 - Lime Green Line
  [315, 885,920],
  // 11 - Teal Line
  [90,  630,1030],
  // 12 - Pale Blue Line
  [45, 574,1220],
  // 13 - Light Blue Extension
  // 14 - Yellow Line Extension
]
// **************************************************************************************************************************************************
// SIDE_TUNNELS
// Side Tunnels
var side_tunnels = [
  // 1 - Red Line
  [[323,870],[341,888],[336,893]],
  [[527,621],[565,621],[580,636]],
  [[574,630],[580,624],[575,619]],
  [[386,805],[356,775],[370,761]],
  // 2 - Green Line
  [[475,460],[500,435]],
  [[598,621],[640,621],[654,635]],
  [[531,814],[540,823],[610,823],[633,846]],
  [[610,823],[620,813]],
  [[542,821],[564,799]],
  [[694,1030],[694,1000],[749,1000]],
  // 3 - Dark Blue line
  [[319,749],[307,737],[285,759],[295,769]],
  // 4 - Light Blue Line
  // 5 - Circle Line
  // 6 - Orange line
  [[705,368],[670,368],[662,376]],
  // 7 - Purple Line
  [[840,766],[840,740],[802,702]],
  [[815,755],[835,735]],
  [[800,740],[820,720]],
  // 8 - Yellow Line
  [[172,722],[153,704]],
  // 9 - Grey line
  [[445,227],[490,227]],
  [[655,1105],[610,1105]],
  // 10 - Lime Green Line
  [[890,915],[885,920],[870,920]],
  // 11 - Teal Line
  // 12 - Pale Blue Line
  // 13 - Light Blue Extension
  // 14 - Yellow Line Extension
]

// **************************************************************************************************************************************************
// DANGEROUS TUNNELS
var dangerous_tunnels = [
  // 1 - red line
  {"line_nodes": [[0,855,329],[0,820,365]], "line_colour": "#000000"}, // sokolniki to preobrazhenska square
  // 2 - Green Line
  {"line_nodes": [[0,749,1080],[0,749,1000]], "line_colour": "#000000"}, // kolomenskaya to kantemirovskaya
  // 6 - Orange line
  {"line_nodes": [[0,705,217],[0,705,255]], "line_colour": "#000000"}, // Botanic Gardens to VDNKh
  {"line_nodes": [[0,705,293],[0,705,333]], "line_colour": "#000000"}, // Alekseevska to Rizhskaya
  {"line_nodes": [[0, 705, 368],[1, 705, 391],[0, 695, 411],[0, 683, 423],[0, 683, 662]], "line_colour": "#000000"}, // Prospekt Mira to Kitai-Gorod
  // 8 - Yellow Line
  {"line_nodes": [[0,800,766],[0,613,766]], "line_colour": "#000000"}, // Marksistkaya to Tretyakovskaya
  // 9 - Grey line
  {"line_nodes": [[0, 490,210],[0, 490,320]], "line_colour": "#000000"}, // Petrovsko to Savyolovskaya
  {"line_nodes": [[0, 489,513],[1, 475,527],[0, 465,547],[1, 465,648],[0, 475,668],[0, 485,678]], "line_colour": "#000000"}, // Chekhovskaya to Borovitskaya
  {"line_nodes": [[0, 608,940],[0, 578,970],[0, 578,1000]], "line_colour": "#000000"}, // Nagatinskaya to Nakhimovsky
  {"line_nodes": [[0, 578,1040],[0, 578,1060],[0, 608,1090],[0, 608,1120]], "line_colour": "#000000"}, // Sevastapol to Prazhskaya
  // 10 - Lime Green Line
  {"line_nodes": [[0, 870,870],[0, 870,905]], "line_colour": "#000000"}, // Dubrovka to Kozhukhovskaya
  // 11 - Teal Line
  {"line_nodes": [[0, 664,1030],[0, 725,1030]], "line_colour": "#000000"}, // Varshavskaya to Kashirskaya
  // 12 - Pale Blue Line
  // 13 - Light Blue Extension
  // 14 - Yellow Line Extension
]
// **************************************************************************************************************************************************
// TUNNEL ENTRANCES
var tunnel_entrances = [
  // 1 - Red Line
  [135, 846,339],
  [315, 830,355], 
  [135, 314,878],
  [315, 274,918],
  // 2 - Green Line
  [45,  744,929], 
  [270, 749,985],
  // 3 - Dark Blue line
  [90,  945,425],
  [315, 915,472],
  [270, 76,615],
  // 4 - Light Blue Line
  [135, 386,640],
  [315, 346,680],
  // 5 - Circle Line
  // 6 - Orange line
  // 7 - Purple Line
  // 8 - Yellow Line
  // 9 - Grey line
  // 10 - Lime Green Line
  // 11 - Teal Line
  // 12 - Pale Blue Line
  // 13 - Light Blue Extension
  // 14 - Yellow Line Extension
]

// **************************************************************************************************************************************************

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
//     name_set
//     station_name

var station_names = [


  {"station_id": 1, "name_set": 0, "station_name": "ALTUFYEVO"},
  {"station_id": 1, "name_set": 1, "station_name": "Алтуфьево"},
  {"station_id": 1, "name_set": 2, "station_name": "ALTUFYEVO"},

  {"station_id": 2, "name_set": 0, "station_name": "BIBIREVO"},
  {"station_id": 2, "name_set": 1, "station_name": "Бибирево"},
  {"station_id": 2, "name_set": 2, "station_name": "BIBIREVO"},

  {"station_id": 3, "name_set": 0, "station_name": "OTRADNOYE"},
  {"station_id": 3, "name_set": 1, "station_name": "Отрадное"},
  {"station_id": 3, "name_set": 2, "station_name": "OTRADNOYE"},

  {"station_id": 4, "name_set": 0, "station_name": "VLADYKINO"},
  {"station_id": 4, "name_set": 1, "station_name": "Владыкино"},
  {"station_id": 4, "name_set": 2, "station_name": "VLADYKINO"},

  {"station_id": 5, "name_set": 0, "station_name": "PETROVSKO-RAZUMOVSKAYA"},
  {"station_id": 5, "name_set": 1, "station_name": "Петровско-Разумовская"},
  {"station_id": 5, "name_set": 2, "station_name": "PETROVSKO-RAZUMOVSKI"},

  {"station_id": 6, "name_set": 0, "station_name": "TIMIRYAZEVSKAYA"},
  {"station_id": 6, "name_set": 1, "station_name": "Тимиря́зевская"},
  {"station_id": 6, "name_set": 2, "station_name": "TIMIRYAZEV"},

  {"station_id": 7, "name_set": 0, "station_name": "DMITROVSKAYA"},
  {"station_id": 7, "name_set": 1, "station_name": "Дмитровская"},
  {"station_id": 7, "name_set": 2, "station_name": "DMITROV"},

  {"station_id": 8, "name_set": 0, "station_name": "SAVYOLOVSKAYA"},
  {"station_id": 8, "name_set": 1, "station_name": "Савёловская"},
  {"station_id": 8, "name_set": 2, "station_name": "SAVYOLOVO"},

  {"station_id": 9, "name_set": 0, "station_name": "MENDELEYEVSKAYA"},
  {"station_id": 9, "name_set": 1, "station_name": "Менделе́евская"},
  {"station_id": 9, "name_set": 2, "station_name": "MENDELEYEV"},

  {"station_id": 10, "name_set": 0, "station_name": "NOVOSLOBODSKAYA"},
  {"station_id": 10, "name_set": 1, "station_name": "Новослобо́дская"},
  {"station_id": 10, "name_set": 2, "station_name": "NOVA SLOBODA"},

  {"station_id": 11, "name_set": 0, "station_name": "TSVETNOY BULVAR"},
  {"station_id": 11, "name_set": 1, "station_name": "Цветно́й бульва́"},
  {"station_id": 11, "name_set": 2, "station_name": "TSVETNOY BLVD."},

  {"station_id": 12, "name_set": 0, "station_name": "CHEKHOVSKAYA"},
  {"station_id": 12, "name_set": 1, "station_name": "Чеховская́"},
  {"station_id": 12, "name_set": 2, "station_name": "CHEKHOV"},

  {"station_id": 13, "name_set": 0, "station_name": "ALEKSANDROVSKY SAD"},
  {"station_id": 13, "name_set": 1, "station_name": "Алекса́ндровский сад"},
  {"station_id": 13, "name_set": 2, "station_name": "ALEXANDER GARDENS"},

  {"station_id": 14, "name_set": 0, "station_name": "BOROVITSKAYA"},
  {"station_id": 14, "name_set": 1, "station_name": "Боровицкая́"},
  {"station_id": 14, "name_set": 2, "station_name": "BOROVITSKI"},

  {"station_id": 15, "name_set": 0, "station_name": "POLYANKA"},
  {"station_id": 15, "name_set": 1, "station_name": "Полянка"},
  {"station_id": 15, "name_set": 2, "station_name": "POLYANKA"},

  {"station_id": 16, "name_set": 0, "station_name": "DOBRYNINSKAYA"},
  {"station_id": 16, "name_set": 1, "station_name": "Добры́нинская"},
  {"station_id": 16, "name_set": 2, "station_name": "DOBRYNIN"},

  {"station_id": 17, "name_set": 0, "station_name": "BULVAR DMITRIYA DONSKOGO"},
  {"station_id": 17, "name_set": 1, "station_name": "Бульвар Дмитрия Донского"},
  {"station_id": 17, "name_set": 2, "station_name": "DMITRY DONSKOY BLVD."},

  {"station_id": 18, "name_set": 0, "station_name": "ANNINO"},
  {"station_id": 18, "name_set": 1, "station_name": "А́ннино"},
  {"station_id": 18, "name_set": 2, "station_name": "ANNINO"},

  {"station_id": 19, "name_set": 0, "station_name": "ULITSA AKADEMIKA YANGELYA"},
  {"station_id": 19, "name_set": 1, "station_name": "Улица академика Янгеля"},
  {"station_id": 19, "name_set": 2, "station_name": "ACADEMICIAN YANGEL ST."},

  {"station_id": 20, "name_set": 0, "station_name": "PRAZHSKAYA"},
  {"station_id": 20, "name_set": 1, "station_name": "Пражская"},
  {"station_id": 20, "name_set": 2, "station_name": "PRAGUE"},

  {"station_id": 21, "name_set": 0, "station_name": "YUZHNAYA"},
  {"station_id": 21, "name_set": 1, "station_name": "Южная"},
  {"station_id": 21, "name_set": 2, "station_name": "SOUTHERN"},

  {"station_id": 22, "name_set": 0, "station_name": "CHERTANOVSKAYA"},
  {"station_id": 22, "name_set": 1, "station_name": "Чертановская"},
  {"station_id": 22, "name_set": 2, "station_name": "CHERTANOVO"},

  {"station_id": 23, "name_set": 0, "station_name": "SEVASTOPOLSKAYA"},
  {"station_id": 23, "name_set": 1, "station_name": "Севастопольская"},
  {"station_id": 23, "name_set": 2, "station_name": "SEBASTOPOL"},

  {"station_id": 24, "name_set": 0, "station_name": "NAKHIMOVSKY PROSPEKT"},
  {"station_id": 24, "name_set": 1, "station_name": "Нахимовский Проспект"},
  {"station_id": 24, "name_set": 2, "station_name": "NAKHIMOV PROSPECT"},

  {"station_id": 25, "name_set": 0, "station_name": "NAGORNAYA"},
  {"station_id": 25, "name_set": 1, "station_name": "Нагорная"},
  {"station_id": 25, "name_set": 2, "station_name": "NAGORNAYA"},

  {"station_id": 26, "name_set": 0, "station_name": "NAGATINSKAYA"},
  {"station_id": 26, "name_set": 1, "station_name": "Нагатинская"},
  {"station_id": 26, "name_set": 2, "station_name": "NAGATINO"},

  {"station_id": 27, "name_set": 0, "station_name": "TULSKAYA"},
  {"station_id": 27, "name_set": 1, "station_name": "Tульская"},
  {"station_id": 27, "name_set": 2, "station_name": "TULA"},

  {"station_id": 28, "name_set": 0, "station_name": "SERPUKHOVSKAYA"},
  {"station_id": 28, "name_set": 1, "station_name": "Серпуховска́я"},
  {"station_id": 28, "name_set": 2, "station_name": "SERPUKHOV"},

  {"station_id": 29, "name_set": 0, "station_name": "MEDVEDKOVO"},
  {"station_id": 29, "name_set": 1, "station_name": "Медведково"},
  {"station_id": 29, "name_set": 2, "station_name": "MEDVEDKOVO"},

  {"station_id": 30, "name_set": 0, "station_name": "BABUSHKINSKAYA"},
  {"station_id": 30, "name_set": 1, "station_name": "Бабушкинская"},
  {"station_id": 30, "name_set": 2, "station_name": "BABUSHKIN"},

  {"station_id": 31, "name_set": 0, "station_name": "SVIBLOVO"},
  {"station_id": 31, "name_set": 1, "station_name": "Свиблово"},
  {"station_id": 31, "name_set": 2, "station_name": "SVIBLOVO"},

  {"station_id": 32, "name_set": 0, "station_name": "BOTANICHESKIY SAD"},
  {"station_id": 32, "name_set": 1, "station_name": "Ботанический сад"},
  {"station_id": 32, "name_set": 2, "station_name": "BOTANIC GARDENS"},

  {"station_id": 33, "name_set": 0, "station_name": "VDNKh"},
  {"station_id": 33, "name_set": 1, "station_name": "ВДНХ"},
  {"station_id": 33, "name_set": 2, "station_name": "ECONOMIC ACHIEVEMENTS"},

  {"station_id": 34, "name_set": 0, "station_name": "ALEKSEEVSKAYA"},
  {"station_id": 34, "name_set": 1, "station_name": "Алексеевская"},
  {"station_id": 34, "name_set": 2, "station_name": "ALEKSEYEV"},

  {"station_id": 35, "name_set": 0, "station_name": "RIZHSKAYA"},
  {"station_id": 35, "name_set": 1, "station_name": "Рижская"},
  {"station_id": 35, "name_set": 2, "station_name": "RIZHSKA"},

  {"station_id": 36, "name_set": 0, "station_name": "PROSPEKT MIRA"},
  {"station_id": 36, "name_set": 1, "station_name": "Проспект Мира"},
  {"station_id": 36, "name_set": 2, "station_name": "PEACE PROSPECT"},

  /* Not required
  { "station_id": 37, "name_set": 0,  "station_name" : "PROSPEKT MIRA"  },
  { "station_id": 37, "name_set": 1,  "station_name" : "Проспект Мира"  },
  { "station_id": 37, "name_set": 2,  "station_name" : "PEACE PROSPECT" },
  */

  {"station_id": 38,  "name_set": 0, "station_name": "SUKHAREVSKAYA"},
  {"station_id": 38,  "name_set": 1, "station_name": "Су́харевская"},
  {"station_id": 38,  "name_set": 2, "station_name": "SUKHAREV"},

  {"station_id": 39,  "name_set": 0, "station_name": "TURGENEVSKAYA"},
  {"station_id": 39,  "name_set": 1, "station_name": "Тургеневская"},
  {"station_id": 39,  "name_set": 2, "station_name": "TURGENEV"},

  {"station_id": 40,  "name_set": 0, "station_name": "KITAY-GOROD"},
  {"station_id": 40,  "name_set": 1, "station_name": "Китай-город"},
  {"station_id": 40,  "name_set": 2, "station_name": "KITAY-GOROD"},

  {"station_id": 41,  "name_set": 0, "station_name": "TRETYAKOVSKAYA"},
  {"station_id": 41,  "name_set": 1, "station_name": "Третьяко́вская"},
  {"station_id": 41,  "name_set": 2, "station_name": "TRETYAKOVSKI"},

  {"station_id": 42,  "name_set": 0, "station_name": "OKTYABRSKAYA"},
  {"station_id": 42,  "name_set": 1, "station_name": "Октя́брьская"},
  {"station_id": 42,  "name_set": 2, "station_name": "OCTOBER"},

  {"station_id": 43, "name_set": 0, "station_name": "OKTYABRSKAYA"},
  {"station_id": 43, "name_set": 1, "station_name": "Октя́брьская"},
  {"station_id": 43, "name_set": 2, "station_name": "OCTOBER"},

  {"station_id": 44, "name_set": 0, "station_name": "NOVOYASENEVSKAYA"},
  {"station_id": 44, "name_set": 1, "station_name": "Би́тцевский парк"},
  {"station_id": 44, "name_set": 2, "station_name": "NEW YASENEVO"},

  {"station_id": 45, "name_set": 0, "station_name": "YASENEVO"},
  {"station_id": 45, "name_set": 1, "station_name": "Ясенево"},
  {"station_id": 45, "name_set": 2, "station_name": "YASENEVO"},

  {"station_id": 46, "name_set": 0, "station_name": "TYOPLY STAN"},
  {"station_id": 46, "name_set": 1, "station_name": "Тёплый Стан"},
  {"station_id": 46, "name_set": 2, "station_name": "TYOPLY STAN"},

  {"station_id": 47, "name_set": 0, "station_name": "KONKOVO"},
  {"station_id": 47, "name_set": 1, "station_name": "Конько́во"},
  {"station_id": 47, "name_set": 2, "station_name": "KONKOVO"},

  {"station_id": 48, "name_set": 0, "station_name": "BELYAYEVO"},
  {"station_id": 48, "name_set": 1, "station_name": "Беля́ево"},
  {"station_id": 48, "name_set": 2, "station_name": "BELYAEVO"},

  {"station_id": 49, "name_set": 0, "station_name": "KALUZHSKAYA"},
  {"station_id": 49, "name_set": 1, "station_name": "Калужская"},
  {"station_id": 49, "name_set": 2, "station_name": "KALUZHSKI"},

  {"station_id": 50, "name_set": 0, "station_name": "NOVYE CHEREMUSHKI"},
  {"station_id": 50, "name_set": 1, "station_name": "Новые Черёмушки"},
  {"station_id": 50, "name_set": 2, "station_name": "NEW CHERYOMUSHKI"},

  {"station_id": 51, "name_set": 0, "station_name": "PROFSOYUZNAYA"},
  {"station_id": 51, "name_set": 1, "station_name": "Профсоюзная"},
  {"station_id": 51, "name_set": 2, "station_name": "TRADE UNION STREET"},

  {"station_id": 52, "name_set": 0, "station_name": "AKADEMICHESKAYA"},
  {"station_id": 52, "name_set": 1, "station_name": "Академи́ческая"},
  {"station_id": 52, "name_set": 2, "station_name": "ACADEMY STREET"},

  {"station_id": 53, "name_set": 0, "station_name": "LENINSKIY PROSPEKT"},
  {"station_id": 53, "name_set": 1, "station_name": "Ленинский проспект"},
  {"station_id": 53, "name_set": 2, "station_name": "LENIN PROSPECT"},

  {"station_id": 54,  "name_set": 0, "station_name": "SHABOLOVSKAYA"},
  {"station_id": 54,  "name_set": 1, "station_name": "Шаболовская"},
  {"station_id": 54,  "name_set": 2, "station_name": "SHABOLOVO STREET"},

  {"station_id": 55,  "name_set": 0, "station_name": "BULVAR ROKOSSOVSKOGO"},
  {"station_id": 55,  "name_set": 1, "station_name": "Бульва́р Рокоссо́вского"},
  {"station_id": 55,  "name_set": 2, "station_name": "ROKOSSOVSKY BLVD."},

  {"station_id": 56,  "name_set": 0, "station_name": "CHERKIZOVSKAYA"},
  {"station_id": 56,  "name_set": 1, "station_name": "Черки́зовская"},
  {"station_id": 56,  "name_set": 2, "station_name": "CHERKIZOVO"},

  {"station_id": 57,  "name_set": 0, "station_name": "PREOBRAZHENSKAYA PLOSHCHAD"},
  {"station_id": 57,  "name_set": 1, "station_name": "Преображе́нская пло́щадь"},
  {"station_id": 57,  "name_set": 2, "station_name": "PREOBRAZHENSKA SQUARE"},

  {"station_id": 58,  "name_set": 0, "station_name": "SOKOLNIKI"},
  {"station_id": 58,  "name_set": 1, "station_name": "Соко́льники"},
  {"station_id": 58,  "name_set": 2, "station_name": "SOKOLNIKI"},

  {"station_id": 59,  "name_set": 0, "station_name": "KRANSNOSELSKAYA"},
  {"station_id": 59,  "name_set": 1, "station_name": "Красносе́льская"},
  {"station_id": 59,  "name_set": 2, "station_name": "KRANSNOSELSKI"},

  {"station_id": 60,  "name_set": 0, "station_name": "KOMSOMOLSKAYA"},
  {"station_id": 60,  "name_set": 1, "station_name": "Комсомо́льская"},
  {"station_id": 60,  "name_set": 2, "station_name": "KOMSOMOL"},

  {"station_id": 61,  "name_set": 0, "station_name": "KOMSOMOLSKAYA"},
  {"station_id": 61,  "name_set": 1, "station_name": "Комсомо́льская"},
  {"station_id": 61,  "name_set": 2, "station_name": "KOMSOMOL"},

  {"station_id": 62,  "name_set": 0, "station_name": "KRASNYE VOROTA"},
  {"station_id": 62,  "name_set": 1, "station_name": "Кра́сные воро́та"},
  {"station_id": 62,  "name_set": 2, "station_name": "RED GATE"},

  {"station_id": 63,  "name_set": 0, "station_name": "CHISTYE PRUDY"},
  {"station_id": 63,  "name_set": 1, "station_name": "Чи́стые пруды́"},
  {"station_id": 63,  "name_set": 2, "station_name": "CLEAN PONDS"},

  {"station_id": 64,  "name_set": 0, "station_name": "TEATRALNAYA"},
  {"station_id": 64,  "name_set": 1, "station_name": "Театра́льная́"},
  {"station_id": 64,  "name_set": 2, "station_name": "THEATER SQUARE"},

  {"station_id": 65,  "name_set": 0, "station_name": "KROPOTKINSKAYA"},
  {"station_id": 65,  "name_set": 1, "station_name": "Кропо́ткинская"},
  {"station_id": 65,  "name_set": 2, "station_name": "KROPOTKIN"},

  {"station_id": 66, "name_set": 0, "station_name": "YUGO-ZAPADNAYA"},
  {"station_id": 66, "name_set": 1, "station_name": "Ю́го-За́падная"},
  {"station_id": 66, "name_set": 2, "station_name": "SOUTHWEST"},

  {"station_id": 67, "name_set": 0, "station_name": "PROSPEKT VERNADSKOGO"},
  {"station_id": 67, "name_set": 1, "station_name": "Проспе́кт Верна́дского"},
  {"station_id": 67, "name_set": 2, "station_name": "VERNADSKI PROSPECT"},

  {"station_id": 68, "name_set": 0, "station_name": "UNIVERSITET"},
  {"station_id": 68, "name_set": 1, "station_name": "Университе́т"},
  {"station_id": 68, "name_set": 2, "station_name": "UNIVERSITY"},

  {"station_id": 69, "name_set": 0, "station_name": "VOROBYOVY GORY"},
  {"station_id": 69, "name_set": 1, "station_name": "Воробьёвы го́ры"},
  {"station_id": 69, "name_set": 2, "station_name": "SPARROW HILLS"},

  {"station_id": 70, "name_set": 0, "station_name": "SPORTIVNAYA"},
  {"station_id": 70, "name_set": 1, "station_name": "Спорти́вная"},
  {"station_id": 70, "name_set": 2, "station_name": "SPORT"},

  {"station_id": 71, "name_set": 0, "station_name": "FRUNZENSKAYA"},
  {"station_id": 71, "name_set": 1, "station_name": "Фру́нзенская"},
  {"station_id": 71, "name_set": 2, "station_name": "FRUNZE"},

  {"station_id": 72, "name_set": 0, "station_name": "PARK KULTURY"},
  {"station_id": 72, "name_set": 1, "station_name": "Парк культу́ры"},
  {"station_id": 72, "name_set": 2, "station_name": "CULTURE PARK"},

  {"station_id": 73, "name_set": 0, "station_name": "SHCHYOLKOVSKAYA"},
  {"station_id": 73, "name_set": 1, "station_name": "Щёлковская"},
  {"station_id": 73, "name_set": 2, "station_name": "SCHOLKOVO"},

  {"station_id": 74, "name_set": 0, "station_name": "PERVOMAYSKAYA"},
  {"station_id": 74, "name_set": 1, "station_name": "Первомайская"},
  {"station_id": 74, "name_set": 2, "station_name": "MAY DAY"},

  {"station_id": 75, "name_set": 0, "station_name": "IZMAYLOVSKAYA"},
  {"station_id": 75, "name_set": 1, "station_name": "Измайловская"},
  {"station_id": 75, "name_set": 2, "station_name": "IZMAILOV"},

  {"station_id": 76, "name_set": 0, "station_name": "IZMAYLOVSKY PARK"},
  {"station_id": 76, "name_set": 1, "station_name": "Измайловский парк"},
  {"station_id": 76, "name_set": 2, "station_name": "IZMAILOVSKI PARK"},

  {"station_id": 77, "name_set": 0, "station_name": "SEMENOVSKAYA"},
  {"station_id": 77, "name_set": 1, "station_name": "Семёновская"},
  {"station_id": 77, "name_set": 2, "station_name": "SEMENOV"},

  {"station_id": 78, "name_set": 0, "station_name": "ELEKTROZAVODSKAYA"},
  {"station_id": 78, "name_set": 1, "station_name": "Электрозаводская"},
  {"station_id": 78, "name_set": 2, "station_name": "ELECTROZAVOD"},

  {"station_id": 79, "name_set": 0, "station_name": "BAUMANSKAYA"},
  {"station_id": 79, "name_set": 1, "station_name": "Бауманская"},
  {"station_id": 79, "name_set": 2, "station_name": "BAUMAN"},

  {"station_id": 80, "name_set": 0, "station_name": "KURSKAYA"},
  {"station_id": 80, "name_set": 1, "station_name": "Курская"},
  {"station_id": 80, "name_set": 2, "station_name": "KURSK"},

  {"station_id": 81, "name_set": 0, "station_name": "CHKALOVSKAYA"},
  {"station_id": 81, "name_set": 1, "station_name": "Чка́ловская"},
  {"station_id": 81, "name_set": 2, "station_name": "CHAKALOV"},

  {"station_id": 82,  "name_set": 0, "station_name": "KURSKAYA"},
  {"station_id": 82,  "name_set": 1, "station_name": "Ку́рская"},
  {"station_id": 82,  "name_set": 2, "station_name": "KURSK"},

  {"station_id": 83,  "name_set": 0, "station_name": "PLOSHCHAD REVOLYUTSII"},
  {"station_id": 83,  "name_set": 1, "station_name": "Пло́щадь Револю́ции"},
  {"station_id": 83,  "name_set": 2, "station_name": "REVOLUTION SQUARE"},

  {"station_id": 84,  "name_set": 0, "station_name": "BIBLIOTEKA IMENI LENINA"},
  {"station_id": 84,  "name_set": 1, "station_name": "Библиоте́ка и́мени Ле́нина"},
  {"station_id": 84,  "name_set": 2, "station_name": "LENIN LIBRARY"},

  {"station_id": 85, "name_set": 0, "station_name": "ARBATSKAYA (2)"},
  {"station_id": 85, "name_set": 1, "station_name": "Арба́тская (2)"},
  {"station_id": 85, "name_set": 2, "station_name": "ARBAT (2)"},

  {"station_id": 86, "name_set": 0, "station_name": "SMOLENSKAYA (2)"},
  {"station_id": 86, "name_set": 1, "station_name": "Смоленская (2)"},
  {"station_id": 86, "name_set": 2, "station_name": "SMOLENSK (2)"},

  {"station_id": 87,  "name_set": 0, "station_name": "PARK POBEDY"},
  {"station_id": 87,  "name_set": 1, "station_name": "Парк Победы"},
  {"station_id": 87,  "name_set": 2, "station_name": "VICTORY PARK"},

/*
  "station_id": 88,
  "station_name": "KIEVSKAYA",
*/

  {"station_id": 90,  "name_set": 0, "station_name": "KIEVSKAYA"},
  {"station_id": 90,  "name_set": 1, "station_name": "Ки́евская"},
  {"station_id": 90,  "name_set": 2, "station_name": "KIEV"},

  {"station_id": 91,  "name_set": 0, "station_name": "NOVOGIREYEVO"},
  {"station_id": 91,  "name_set": 1, "station_name": "Новогиреево"},
  {"station_id": 91,  "name_set": 2, "station_name": "NOVOGIREYEVO"},

  {"station_id": 92,  "name_set": 0, "station_name": "PEROVO"},
  {"station_id": 92,  "name_set": 1, "station_name": "Перо́во"},
  {"station_id": 92,  "name_set": 2, "station_name": "PEROVO"},

  {"station_id": 93,  "name_set": 0, "station_name": "SHOSSE ENTUZIASTOV"},
  {"station_id": 93,  "name_set": 1, "station_name": "Шоссе Энтузиастов"},
  {"station_id": 93,  "name_set": 2, "station_name": "ENTHUSIAST ROAD"},

  {"station_id": 94,  "name_set": 0, "station_name": "AVIAMOTORNAYA"},
  {"station_id": 94,  "name_set": 1, "station_name": "Авиамото́рная"},
  {"station_id": 94,  "name_set": 2, "station_name": "AEROMOTOR"},

  {"station_id": 95,  "name_set": 0, "station_name": "PLOSHCHAD ILYICHA"},
  {"station_id": 95,  "name_set": 1, "station_name": "Площадь Ильича"},
  {"station_id": 95,  "name_set": 2, "station_name": "ILYICH SQUARE"},

  {"station_id": 96,  "name_set": 0, "station_name": "MARKSISTSKAYA"},
  {"station_id": 96,  "name_set": 1, "station_name": "Марксистская"},
  {"station_id": 96,  "name_set": 2, "station_name": "MARXIST"},

/*
  "station_id": 97,
  "station_name": "TRETYAKOVSKAYA",
*/

  {"station_id": 98,  "name_set": 0, "station_name": "VYKHINO"},
  {"station_id": 98,  "name_set": 1, "station_name": "Выхино"},
  {"station_id": 98,  "name_set": 2, "station_name": "VYKHINO"},

  {"station_id": 99,  "name_set": 0, "station_name": "RYAZANSKIY PROSPEKT"},
  {"station_id": 99,  "name_set": 1, "station_name": "Рязанский проспект"},
  {"station_id": 99,  "name_set": 2, "station_name": "RYAZAN PROSPECT"},

  {"station_id": 100,  "name_set": 0, "station_name": "KUZMINKI"},
  {"station_id": 100,  "name_set": 1, "station_name": "Кузьминки"},
  {"station_id": 100,  "name_set": 2, "station_name": "KUZMINKI"},

  {"station_id": 101,  "name_set": 0, "station_name": "TEKSTILSHCHIKI"},
  {"station_id": 101,  "name_set": 1, "station_name": "Текстильщики"},
  {"station_id": 101,  "name_set": 2, "station_name": "TEKSTILSHIKI"},

  {"station_id": 102,  "name_set": 0, "station_name": "VOLGOGRADSKY PROSPEKT"},
  {"station_id": 102,  "name_set": 1, "station_name": "Волгоградский проспект"},
  {"station_id": 102,  "name_set": 2, "station_name": "VOLGOGRAD PROSPECT"},

  {"station_id": 103,  "name_set": 0, "station_name": "PROLETARSKAYA"},
  {"station_id": 103,  "name_set": 1, "station_name": "Пролетарская"},
  {"station_id": 103,  "name_set": 2, "station_name": "PROLETARIAN"},

/*
  "station_id": 104,
  "station_name": "TAGANSKAYA",
*/

  {"station_id": 105, "name_set": 0, "station_name": "TAGANSKAYA"},
  {"station_id": 105, "name_set": 1, "station_name": "Тага́нская"},
  {"station_id": 105, "name_set": 2, "station_name": "TAGANKA" },

  {"station_id": 107, "name_set": 0, "station_name": "KUZNETSKY MOST"},
  {"station_id": 107, "name_set": 1, "station_name": "Кузне́цкий Мост"},
  {"station_id": 107, "name_set": 2, "station_name": "BLACKSMITHS BRIDGE" },

  {"station_id": 108, "name_set": 0, "station_name": "LUBYANKA"},
  {"station_id": 108, "name_set": 1, "station_name": "Лубя́нка"},
  {"station_id": 108, "name_set": 2, "station_name": "LUBYANKA"},

  {"station_id": 109, "name_set": 0, "station_name": "TVERSKAYA"},
  {"station_id": 109, "name_set": 1, "station_name": "Тверская"},
  {"station_id": 109, "name_set": 2, "station_name": "TVERSKAYA"},

  {"station_id": 110, "name_set": 0, "station_name": "PUSHKINSKAYA"},
  {"station_id": 110, "name_set": 1, "station_name": "Пушкинская"},
  {"station_id": 110, "name_set": 2, "station_name": "PUSHKIN"},

  {"station_id": 111, "name_set": 0, "station_name": "BARRIKADNAYA"},
  {"station_id": 111, "name_set": 1, "station_name": "Баррикадная"},
  {"station_id": 111, "name_set": 2, "station_name": "BARRICADE"},

  {"station_id": 112, "name_set": 0, "station_name": "PLANERNAYA"},
  {"station_id": 112, "name_set": 1, "station_name": "Планeрная"},
  {"station_id": 112, "name_set": 2, "station_name": "RIVER STATION"},

  {"station_id": 113, "name_set": 0, "station_name": "SKHODNENSKAYA"},
  {"station_id": 113, "name_set": 1, "station_name": "Сходненская"},
  {"station_id": 113, "name_set": 2, "station_name": "SKHODNAYA RIVER"},

  {"station_id": 114, "name_set": 0, "station_name": "TUSHINSKAYA"},
  {"station_id": 114, "name_set": 1, "station_name": "Тушинская"},
  {"station_id": 114, "name_set": 2, "station_name": "TUSHINO"},

  {"station_id": 115, "name_set": 0, "station_name": "SHCHUKINSKAYA"},
  {"station_id": 115, "name_set": 1, "station_name": "Щукинская"},
  {"station_id": 115, "name_set": 2, "station_name": "SCHUKINO"},

  {"station_id": 116, "name_set": 0, "station_name": "OKTYABRSKOE POLE"},
  {"station_id": 116, "name_set": 1, "station_name": "Октябрьское поле"},
  {"station_id": 116, "name_set": 2, "station_name": "OCTOBER FIELD"},

  {"station_id": 117, "name_set": 0, "station_name": "POLEZHAYEVSKAYA"},
  {"station_id": 117, "name_set": 1, "station_name": "Полежаевская"},
  {"station_id": 117, "name_set": 2, "station_name": "POLEZHAYEV"},

  {"station_id": 118, "name_set": 0, "station_name": "BEGOVAYA"},
  {"station_id": 118, "name_set": 1, "station_name": "Бегова́я"},
  {"station_id": 118, "name_set": 2, "station_name": "EQUESTRIAN"},

  {"station_id": 119, "name_set": 0, "station_name": "ULITSA 1905 GODA"},
  {"station_id": 119, "name_set": 1, "station_name": "Улица 1905 года"},
  {"station_id": 119, "name_set": 2, "station_name": "1905 STREET"},

  {"station_id": 120, "name_set": 0, "station_name": "KRASNOPRESNENSKAYA"},
  {"station_id": 120, "name_set": 1, "station_name": "Краснопре́сненская"},
  {"station_id": 120, "name_set": 2, "station_name": "KRASNYA PRESNYA"},

  {"station_id": 121, "name_set": 0, "station_name": "MARYINO"},
  {"station_id": 121, "name_set": 1, "station_name": "Марьин"},
  {"station_id": 121, "name_set": 2, "station_name": "MARYINO"},

  {"station_id": 122, "name_set": 0, "station_name": "BRATISLAVSKAYA"},
  {"station_id": 122, "name_set": 1, "station_name": "Братиславская"},
  {"station_id": 122, "name_set": 2, "station_name": "BRATISLAVA"},

  {"station_id": 123, "name_set": 0, "station_name": "LYUBLINO"},
  {"station_id": 123, "name_set": 1, "station_name": "Люблино"},
  {"station_id": 123, "name_set": 2, "station_name": "LYUBLINO"},

  {"station_id": 124, "name_set": 0, "station_name": "VOLZHSKAYA"},
  {"station_id": 124, "name_set": 1, "station_name": "Волжская"},
  {"station_id": 124, "name_set": 2, "station_name": "VOLGA BLVD."},

  {"station_id": 125, "name_set": 0, "station_name": "PECHATNIKI"},
  {"station_id": 125, "name_set": 1, "station_name": "Печатники"},
  {"station_id": 125, "name_set": 2, "station_name": "PECHATNIKI"},

  {"station_id": 126, "name_set": 0, "station_name": "KOZHUKHOVSKAYA"},
  {"station_id": 126, "name_set": 1, "station_name": "Кожуховская"},
  {"station_id": 126, "name_set": 2, "station_name": "KOZUKOVO"},

  {"station_id": 127, "name_set": 0, "station_name": "DUBROVKA"},
  {"station_id": 127, "name_set": 1, "station_name": "Дубровка"},
  {"station_id": 127, "name_set": 2, "station_name": "DUBROVKA"},

  {"station_id": 128, "name_set": 0, "station_name": "KRESTYANSKAYA ZASTAVA"},
  {"station_id": 128, "name_set": 1, "station_name": "Крестьянская застава"},
  {"station_id": 128, "name_set": 2, "station_name": "PEASANT OUTPOST"},

  {"station_id": 129, "name_set": 0, "station_name": "RIMSKAYA"},
  {"station_id": 129, "name_set": 1, "station_name": "Римская"},
  {"station_id": 129, "name_set": 2, "station_name": "ROME"},

  {"station_id": 130, "name_set": 0, "station_name": "SRETENSKY BULVAR"},
  {"station_id": 130, "name_set": 1, "station_name": "Сре́тенский бульва́р"},
  {"station_id": 130, "name_set": 2, "station_name": "SRETENSKI BLVD."},

  {"station_id": 131, "name_set": 0, "station_name": "TRUBNAYA"},
  {"station_id": 131, "name_set": 1, "station_name": "Тру́бная"},
  {"station_id": 131, "name_set": 2, "station_name": "TRUBNA"},

  {"station_id": 132, "name_set": 0, "station_name": "DOSTOYEVSKAYA"},
  {"station_id": 132, "name_set": 1, "station_name": "Достоевская"},
  {"station_id": 132, "name_set": 2, "station_name": "DOSTOYEVSKY"},

  {"station_id": 133, "name_set": 0, "station_name": "MARYINA ROSHCHA"},
  {"station_id": 133, "name_set": 1, "station_name": "Марьина роща"},
  {"station_id": 133, "name_set": 2, "station_name": "MARY'S GROVE"},

  {"station_id": 134, "name_set": 0, "station_name": "RECHNOY VOKZAL"},
  {"station_id": 134, "name_set": 1, "station_name": "Речной вокзал"},
  {"station_id": 134, "name_set": 2, "station_name": "RIVER TERMINAL"},

  {"station_id": 135, "name_set": 0, "station_name": "VODNY STADION"},
  {"station_id": 135, "name_set": 1, "station_name": "Во́дный стадио́н"},
  {"station_id": 135, "name_set": 2, "station_name": "WATER STADIUM"},

  {"station_id": 136, "name_set": 0, "station_name": "VOYKOVSKAYA"},
  {"station_id": 136, "name_set": 1, "station_name": "Во́йковская"},
  {"station_id": 136, "name_set": 2, "station_name": "VOYKOV"},

  {"station_id": 137, "name_set": 0, "station_name": "SOKOL"},
  {"station_id": 137, "name_set": 1, "station_name": "Со́кол"},
  {"station_id": 137, "name_set": 2, "station_name": "SOKOL"},

  {"station_id": 138, "name_set": 0, "station_name": "AEROPORT"},
  {"station_id": 138, "name_set": 1, "station_name": "Аэропо́рт"},
  {"station_id": 138, "name_set": 2, "station_name": "AIRPORT"},

  {"station_id": 139, "name_set": 0, "station_name": "DINAMO"},
  {"station_id": 139, "name_set": 1, "station_name": "Дина́мо"},
  {"station_id": 139, "name_set": 2, "station_name": "DYNAMO"},

  {"station_id": 140, "name_set": 0, "station_name": "BELORUSSKAYA"},
  {"station_id": 140, "name_set": 1, "station_name": "Белору́сска"},
  {"station_id": 140, "name_set": 2, "station_name": "BELARUS"},

/* // not required
  {"station_id": 141, "name_set": 0, "station_name": "BELORUSSKAYA"},
  {"station_id": 141, "name_set": 1, "station_name": "Белору́сская"},
  {"station_id": 141, "name_set": 2, "station_name": "BELARUS"},
*/

  {"station_id": 142, "name_set": 0,    "station_name": "MAYAKOVSKAYA"},
  {"station_id": 142, "name_set": 1,    "station_name": "Маяковская"},
  {"station_id": 142, "name_set": 2,    "station_name": "MAYAKOVSKY"},

  {"station_id": 143, "name_set": 0, "station_name": "OKHOTNY RYAD"},
  {"station_id": 143, "name_set": 1, "station_name": "Охотный ряд"},
  {"station_id": 143, "name_set": 2, "station_name": "OKHOTNY ROW"},

  {"station_id": 144, "name_set": 0, "station_name": "NOVOKUZNETSKAYA"},
  {"station_id": 144, "name_set": 1, "station_name": "Новокузнецкая"},
  {"station_id": 144, "name_set": 2, "station_name": "NOVOKUZNETS"},

  {"station_id": 145, "name_set": 0, "station_name": "KRASNOGVARDEYSKAYA"},
  {"station_id": 145, "name_set": 1, "station_name": "Красногварде́йская"},
  {"station_id": 145, "name_set": 2, "station_name": "RED GUARDS"},

  {"station_id": 146, "name_set": 0, "station_name": "DOMODEDOVSKAYA"},
  {"station_id": 146, "name_set": 1, "station_name": "Домодедовская"},
  {"station_id": 146, "name_set": 2, "station_name": "DOMODEDO"},

  {"station_id": 147, "name_set": 0, "station_name": "OREKHOVO"},
  {"station_id": 147, "name_set": 1, "station_name": "Орехово"},
  {"station_id": 147, "name_set": 2, "station_name": "OREKHOVO"},

  {"station_id": 148, "name_set": 0, "station_name": "TSARITSYNO"},
  {"station_id": 148, "name_set": 1, "station_name": "Царицыно"},
  {"station_id": 148, "name_set": 2, "station_name": "TSARITSYNO"},

  {"station_id": 149, "name_set": 0, "station_name": "KANTEMIROVSKAYA"},
  {"station_id": 149, "name_set": 1, "station_name": "Кантемировская"},
  {"station_id": 149, "name_set": 2, "station_name": "KANTEMIROVO"},

  {"station_id": 150, "name_set": 0, "station_name": "KASHIRSKAYA"},
  {"station_id": 150, "name_set": 1, "station_name": "Каширская"},
  {"station_id": 150, "name_set": 2, "station_name": "KASHIRA"},

  {"station_id": 151, "name_set": 0, "station_name": "KOLOMENSKAYA"},
  {"station_id": 151, "name_set": 1, "station_name": "Коло́менская"},
  {"station_id": 151, "name_set": 2, "station_name": "KOLOMENSKOE"},

  {"station_id": 152, "name_set": 0, "station_name": "AVTOZAVODSKAYA"},
  {"station_id": 152, "name_set": 1, "station_name": "Автозаво́дская"},
  {"station_id": 152, "name_set": 2, "station_name": "AVTOZAVOD"},

  {"station_id": 153, "name_set": 0, "station_name": "PAVELETSKAYA"},
  {"station_id": 153, "name_set": 1, "station_name": "Павелецкая"},
  {"station_id": 153, "name_set": 2, "station_name": "PAVELETS"},

  {"station_id": 154, "name_set": 0, "station_name": "PAVELETSKAYA"},
  {"station_id": 154, "name_set": 1, "station_name": "Павеле́цкая"},
  {"station_id": 154, "name_set": 2, "station_name": "PAVELETS"},

  {"station_id": 155, "name_set": 0, "station_name": "KRYLATSKOE"},
  {"station_id": 155, "name_set": 1, "station_name": "Крылатское"},
  {"station_id": 155, "name_set": 2, "station_name": "KRYLATSKOY"},

  {"station_id": 156, "name_set": 0, "station_name": "MOLODYOZHNAYA"},
  {"station_id": 156, "name_set": 1, "station_name": "Молодёжная"},
  {"station_id": 156, "name_set": 2, "station_name": "YOUTH"},
/* Not Required
  {"station_id": 157, "name_set": 0, "station_name": "KUNTSEVSKAYA"},
  {"station_id": 157, "name_set": 1, "station_name": "Кунцевская"},
  {"station_id": 157, "name_set": 2, "station_name": "KUNTSEVO"},
*/
  {"station_id": 158, "name_set": 0, "station_name": "PIONERSKAYA"},
  {"station_id": 158, "name_set": 1, "station_name": "Пионе́рская"},
  {"station_id": 158, "name_set": 2, "station_name": "PIONEER"},

  {"station_id": 159, "name_set": 0, "station_name": "FILYOVSKY PARK"},
  {"station_id": 159, "name_set": 1, "station_name": "Филёвский парк"},
  {"station_id": 159, "name_set": 2, "station_name": "FILYOVSKI PARK"},

  {"station_id": 160, "name_set": 0, "station_name": "BAGRATIONOVSKAYA"},
  {"station_id": 160, "name_set": 1, "station_name": "Багратионовская"},
  {"station_id": 160, "name_set": 2, "station_name": "BAGRATION"},

  {"station_id": 161, "name_set": 0, "station_name": "FILI"},
  {"station_id": 161, "name_set": 1, "station_name": "Фили"},
  {"station_id": 161, "name_set": 2, "station_name": "FILI"},

  {"station_id": 162, "name_set": 0, "station_name": "KUTUZOVSKAYA"},
  {"station_id": 162, "name_set": 1, "station_name": "Кутузовская"},
  {"station_id": 162, "name_set": 2, "station_name": "KUTUZOV"},

  {"station_id": 163, "name_set": 0, "station_name": "STUDENCHESKAYA"},
  {"station_id": 163, "name_set": 1, "station_name": "Studencheskaya"},
  {"station_id": 163, "name_set": 2, "station_name": "STUDENT"},

  {"station_id": 164, "name_set": 0, "station_name": "SMOLENSKAYA (1)"},
  {"station_id": 164, "name_set": 1, "station_name": "Смоленская (1)"},
  {"station_id": 164, "name_set": 2, "station_name": "SMOLENSK (1)"},

  {"station_id": 165, "name_set": 0, "station_name": "ARBATSKAYA (1)"},
  {"station_id": 165, "name_set": 1, "station_name": "Арба́тская (1)"},
  {"station_id": 165, "name_set": 2, "station_name": "ARBAT (1)"},

  {"station_id": 166, "name_set": 0, "station_name": "TEKHNOPARK"},
  {"station_id": 166, "name_set": 1, "station_name": "Технопарк"},
  {"station_id": 166, "name_set": 2, "station_name": "TECHNOPARK"},

  {"station_id": 167, "name_set": 0, "station_name": "KAKHOVSKAYA"},
  {"station_id": 167, "name_set": 1, "station_name": "Каховская"},
  {"station_id": 167, "name_set": 2, "station_name": "KAKHOVSKA"},

  {"station_id": 168, "name_set": 0, "station_name": "SPARTAK"},
  {"station_id": 168, "name_set": 1, "station_name": "Спартак"},
  {"station_id": 168, "name_set": 2, "station_name": "SPARTACUS"},

  {"station_id": 169, "name_set": 0, "station_name": "VARSHAVSKAYA"},
  {"station_id": 169, "name_set": 1, "station_name": "Варшавская"},
  {"station_id": 169, "name_set": 2, "station_name": "WARSAW"},
  /* not required
  {"station_id": 170, "name_set": 0, "station_name": "KASHIRSKAYA"},
  {"station_id": 170, "name_set": 1, "station_name": "Каширская"},
  {"station_id": 170, "name_set": 2, "station_name": "KASHIRA"},
  */
  /* not required
  { "station_id": 171, "name_set": 0, "station_name": "PARK KULTURY" },
  { "station_id": 171, "name_set": 1, "station_name": "Парк Культу́ры" },
  { "station_id": 171, "name_set": 2, "station_name": "CULTURE PARK" },
  */
  {"station_id": 172, "name_set": 0, "station_name": "NOVOKOSINO"},
  {"station_id": 172, "name_set": 1, "station_name": "Новокосино"},
  {"station_id": 172, "name_set": 2, "station_name": "NOVOKOSINO"},

  {"station_id": 173, "name_set": 0, "station_name": "BITTSEVSKY PARK"},
  {"station_id": 173, "name_set": 1, "station_name": "Би́тцевский парк"},
  {"station_id": 173, "name_set": 2, "station_name": "BITTSEVSKI PARK"},

  {"station_id": 174, "name_set": 0, "station_name": "LESOPARKOVAYA"},
  {"station_id": 174, "name_set": 1, "station_name": "Лесопа́рковая"},
  {"station_id": 174, "name_set": 2, "station_name": "PARKS"},

  {"station_id": 175, "name_set": 0, "station_name": "ULITSA STAROKACHALOVSKAYA"},
  {"station_id": 175, "name_set": 1, "station_name": "У́лица Ста́рокачаловская"},
  {"station_id": 175, "name_set": 2, "station_name": "STAROKACHALOV ST."},

  {"station_id": 176, "name_set": 0, "station_name": "ULITSA SKOBELEVSKAYA"},
  {"station_id": 176, "name_set": 1, "station_name": "У́лица Ско́белевская"},
  {"station_id": 176, "name_set": 2, "station_name": "SKOBELEV ST."},

  {"station_id": 177, "name_set": 0, "station_name": "BULVAR ADMIRALA USHAKOVA"},
  {"station_id": 177, "name_set": 1, "station_name": "Бульва́р Адмира́ла Ушако́ва"},
  {"station_id": 177, "name_set": 2, "station_name": "ADMIRAL USHAKOV BLVD."},

  {"station_id": 178, "name_set": 0, "station_name": "ULITSA GORCHAKOVA"},
  {"station_id": 178, "name_set": 1, "station_name": "У́лица Горчако́ва"},
  {"station_id": 178, "name_set": 2, "station_name": "GORCHAKOV ST."},

  {"station_id": 179, "name_set": 0, "station_name": "BUNINSKAYA ALLEYA"},
  {"station_id": 179, "name_set": 1, "station_name": "Бу́нинская алле́я"},
  {"station_id": 179, "name_set": 2, "station_name": "BUNIN ALLEY"},

  {"station_id": 180, "name_set": 0, "station_name": "ALMA-ATINSKAYA"},
  {"station_id": 180, "name_set": 1, "station_name": "Алма́-Ати́нская"},
  {"station_id": 180, "name_set": 2, "station_name": "ALMATY"},

  {"station_id": 181, "name_set": 0, "station_name": "ZYABLIKOVO"},
  {"station_id": 181, "name_set": 1, "station_name": "Зя́бликово"},
  {"station_id": 181, "name_set": 2, "station_name": "ZYABLIKOVO"},

  {"station_id": 182, "name_set": 0, "station_name": "SHIPILOVSKAYA"},
  {"station_id": 182, "name_set": 1, "station_name": "Шипи́ловская"},
  {"station_id": 182, "name_set": 2, "station_name": "SHIPILOVO"},

  {"station_id": 183, "name_set": 0, "station_name": "BORISOVO"},
  {"station_id": 183, "name_set": 1, "station_name": "Бори́сово"},
  {"station_id": 183, "name_set": 2, "station_name": "BORISOVO"},

  {"station_id": 184, "name_set": 0, "station_name": "LERMONTOVSKY PROSPEKT"},
  {"station_id": 184, "name_set": 1, "station_name": "Лермонтовский проспект"},
  {"station_id": 184, "name_set": 2, "station_name": "LERMONTOVSKI PROSPECT"},

  {"station_id": 185, "name_set": 0, "station_name": "ZHULEBINO"},
  {"station_id": 185, "name_set": 1, "station_name": "Лермонтовский проспект"},
  {"station_id": 185, "name_set": 2, "station_name": "LERMONTOVSKI PROSPECT"},

  {"station_id": 186, "name_set": 0, "station_name": "STROGINO"},
  {"station_id": 186, "name_set": 1, "station_name": "Строгино́"},
  {"station_id": 186, "name_set": 2, "station_name": "STROGINO"},

  {"station_id": 187, "name_set": 0, "station_name": "MYAKININO"},
  {"station_id": 187, "name_set": 1, "station_name": "Мякининo"},
  {"station_id": 187, "name_set": 2, "station_name": "MYAKININO"},

  {"station_id": 188, "name_set": 0, "station_name": "VOLOKOLAMSKAYA"},
  {"station_id": 188, "name_set": 1, "station_name": "Волоколамская"},
  {"station_id": 188, "name_set": 2, "station_name": "VOLOKOLAM"},

  {"station_id": 189, "name_set": 0, "station_name": "MITINO"},
  {"station_id": 189, "name_set": 1, "station_name": "Ми́тино"},
  {"station_id": 189, "name_set": 2, "station_name": "MITINO"},

  {"station_id": 190, "name_set": 0, "station_name": "PYATNITSKOYE SHOSSE"},
  {"station_id": 190, "name_set": 1, "station_name": "Пя́тницкое шоссе́"},
  {"station_id": 190, "name_set": 2, "station_name": "PYATNITSKOYE HWY."},

  {"station_id": 191, "name_set": 0, "station_name": "DELOVOY TSENTR"},
  {"station_id": 191, "name_set": 1, "station_name": "Деловой центр"},
  {"station_id": 191, "name_set": 2, "station_name": "BUSINESS CENTER"},

  {"station_id": 192, "name_set": 0, "station_name": "VYSTAVOCHNAYA"},
  {"station_id": 192, "name_set": 1, "station_name": "Выставочная"},
  {"station_id": 192, "name_set": 2, "station_name": "EXHIBITION CENTER"},

  {"station_id": 193, "name_set": 0, "station_name": "SLAVYANSKY BULVAR"},
  {"station_id": 193, "name_set": 1, "station_name": "Славянский бульвар"},
  {"station_id": 193, "name_set": 2, "station_name": "SLAVIC BLVD."},
/* Not Required
  {"station_id": 194, "name_set": 0, "station_name": "PARK POBEDY"},
  {"station_id": 194, "name_set": 1, "station_name": ""},
  {"station_id": 194, "name_set": 2, "station_name": "VICTORY PARK"},
*/
  {"station_id": 195, "name_set": 0, "station_name": "KUNTSEVSKAYA"},
  {"station_id": 195, "name_set": 1, "station_name": "Кунцевская"},
  {"station_id": 195, "name_set": 2, "station_name": "KUNTSEVO"},

  {"station_id": 196, "name_set": 0, "station_name": "STOROZHEVAYA BASHNYA"},
  {"station_id": 196, "name_set": 1, "station_name": "Сторожевая башня"},
  {"station_id": 196, "name_set": 2, "station_name": "THE WATCHTOWER"},

  {"station_id": 197, "name_set": 0, "station_name": "MEZHDUNARODNAYA"},
  {"station_id": 197, "name_set": 1, "station_name": "Междунаро́дная"},
  {"station_id": 197, "name_set": 2, "station_name": "INTERNATIONAL"},
]

// **************************************************************************************************************************************************

// STATION - (Individual stations)
//     station_id - (unique id number)
//     station_name - (name of station, used for internal tracking)
//     station_open - (is station open to surface, 1=yes 0=no)
//     station_img - image for station
//     label_point - where to place label, based on clock face 1-12
//     x_position
//     y_position
//     line_id
//     faction_id

var stations = [{
  "station_id": 1,
  "station_name": "ALTUFYEVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 490,
  "y_position": 90,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 2,
  "station_name": "BIBIREVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 515,
  "y_position": 115,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 3,
  "station_name": "OTRADNOE",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 515,
  "y_position": 150,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 4,
  "station_name": "VLADYKINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 515,
  "y_position": 185,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 5,
  "station_name": "PETROVSKO-RAZUMOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 10,
  "x_position": 490,
  "y_position": 210,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 6,
  "station_name": "TIMIRYAZEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 490,
  "y_position": 245,
  "line_id": 9,
  "faction_id": 25,
  "symbol_id": 25
}, {
  "station_id": 7,
  "station_name": "DMITROVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 490,
  "y_position": 280,
  "line_id": 9,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 8,
  "station_name": "SAVELOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 490,
  "y_position": 315,
  "line_id": 9,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 9,
  "station_name": "MENDELEYEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 490,
  "y_position": 350,
  "line_id": 9,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 10,
  "station_name": "NOVOSLOBODSKAYA (HANSA)",
  "x_position": 490,
  "y_position": 372,
  "line_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 11,
  "station_name": "TSVETNOY BULVAR",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 7,
  "x_position": 580,
  "y_position": 440,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 12,
  "station_name": "CHEKHOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 489,
  "y_position": 513,
  "line_id": 9,
  "faction_id": 8,
  "symbol_id": 8
}, {
  "station_id": 13,
  "station_name": "ALEKSANDROVSKY SAD",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12,
  "x_position": 527,
  "y_position": 621,
  "line_id": 4,
  "faction_id": 7,
  "symbol_id": 7
}, {
  "station_id": 14,
  "station_name": "BOROVITSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6.5,
  "x_position": 485,
  "y_position": 678,
  "line_id": 0,
  "faction_id": 7,
  "symbol_id": 7
}, {
  "station_id": 15,
  "station_name": "POLYANKA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 520,
  "y_position": 751,
  "line_id": 9,
  "faction_id": 3,
  "symbol_id": 3,
  "station_description": "Polyanaka is dark, empty and abandoned. Nonetheless, travellers passing through often report strange encounters including visions of the past, confrontations with invisible foes and even detailed conversations with illusionary people. Many scoff at these experiences, citing the influence of hallucinogenic gases, but others believe Polyanka is a place of destiny, where travellers may receive messages from fate itself."
}, {
  "station_id": 16,
  "station_name": "DOBRYNINSKAYA (HANSA)",
  "x_position": 590,
  "y_position": 855,
  "line_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11.5,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 17,
  "station_name": "BULVAR DMITRIYA DONSKOGO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 608,
  "y_position": 1210,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 18,
  "station_name": "ANNINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 608,
  "y_position": 1180,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 19,
  "station_name": "ULITSA AKADEMIKA YANGELYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 608,
  "y_position": 1150,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 20,
  "station_name": "PRAZHSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 608,
  "y_position": 1120,
  "line_id": 9,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 21,
  "station_name": "YUZHNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 608,
  "y_position": 1090,
  "line_id": 0,
  "faction_id": 1,
  "symbol_id": 1
},{
  "station_id": 22,
  "station_name": "CHERTANOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 578,
  "y_position": 1060,
  "line_id": 9,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 23,
  "station_name": "SEVASTAPOLSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 578,
  "y_position": 1030,
  "line_id": 0,
  "faction_id": 23,
  "symbol_id": 23
}, {
  "station_id": 24,
  "station_name": "NAKHIMOVSKY PROSPEKT",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 578,
  "y_position": 1000,
  "line_id": 9,
  "faction_id": 24,
  "symbol_id": 24,
  "station_description": "Nakhimovskiy Prospekt is infested with mutated scavengers, hairless things resembling primates and spiders in equal measure. They feed on carrion they drag down to the platform through the open doors to the surface and the reek of decaying flesh is strong enough to make passers by dizzy. Timid creatures, they avoid conflict, retreating to the carriages of two stalled trains when travellers pass through."
}, {
  "station_id": 25,
  "station_name": "NAGORNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 578,
  "y_position": 970,
  "line_id": 9,
  "faction_id": 3,
  "symbol_id": 3,
  "station_description": "Nagornaya is a station of ill-repute, feared by those who have to travel through it. Sometimes it will be calm, dark and quiet, and travellers pass through without issue. But at other times it will be awake and malevolant, filled with strange mists or playing host to horrifying mutated creatures far too large to pass through the tunnels or doors. A day when one can pass through Nagornaya without problems, or avoid it alltogether is a good day."
}, {
  "station_id": 26,
  "station_name": "NAGATINSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 608,
  "y_position": 940,
  "line_id": 9,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 27,
  "station_name": "TULSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 608,
  "y_position": 910,
  "line_id": 9,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 28,
  "station_name": "SERPUKHOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 608,
  "y_position": 875,
  "line_id": 9,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 29,
  "station_name": "MEDVEDKOVO",
  "x_position": 755,
  "y_position": 125,
  "line_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 30,
  "station_name": "BABUSHKINSKAYA",
  "x_position": 755,
  "y_position": 165,
  "line_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 31,
  "station_name": "SVIBLOVO",
  "x_position": 731,
  "y_position": 190,
  "line_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 32,
  "station_name": "BOTANICHESKIY SAD",
  "x_position": 705,
  "y_position": 217,
  "line_id": 6,
  "faction_id": 3,
  "version_id": 3,
  "station_open": 1,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 3
}, {
  "station_id": 33,
  "station_name": "VDNKH (EXHIBITION)",
  "x_position": 705,
  "y_position": 255,
  "line_id": 6,
  "faction_id": 9,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 9
}, {
  "station_id": 34,
  "station_name": "ALEKSEEVSKAYA",
  "x_position": 705,
  "y_position": 293,
  "line_id": 6,
  "faction_id": 9,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 9
}, {
  "station_id": 35,
  "station_name": "RIZHSKAYA",
  "x_position": 705,
  "y_position": 333,
  "line_id": 6,
  "faction_id": 9,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 9
}, {
  "station_id": 36,
  "station_name": "PROSPEKT MIRA",
  "x_position": 705,
  "y_position": 368,
  "line_id": 6,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 10,
  "symbol_id": 5
}, {
  "station_id": 37,
  "station_name": "PROSPEKT MIRA (HANSA)",
  "x_position": 683,
  "y_position": 385,
  "line_id": 5,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 5
}, {
  "station_id": 38,
  "station_name": "SUKHAREVSKAYA",
  "x_position": 683,
  "y_position": 423,
  "line_id": 6,
  "faction_id": 3,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11.5,
  "symbol_id": 3
}, {
  "station_id": 39,
  "station_name": "TURGENEVSKAYA",
  "x_position": 683,
  "y_position": 472,
  "line_id": 6,
  "faction_id": 3,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 3
}, {
  "station_id": 40,
  "station_name": "KITAY-GOROD",
  "x_position": 683,
  "y_position": 662,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5.5,
  "symbol_id": 221
}, {
  "station_id": 41,
  "station_name": "TRETYAKOVSKAYA",
  "x_position": 593,
  "y_position": 752,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 223
}, {
  "station_id": 42,
  "station_name": "OKTYABRSKAYA",
  "x_position": 521,
  "y_position": 823,
  "line_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 10,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 43,
  "station_name": "OKTYABR'SKAYA (HANSA)",
  "x_position": 499,
  "y_position": 846,
  "line_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 8,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 44,
  "station_name": "NOVOYASENEVSKAYA",
  "x_position": 411,
  "y_position": 1150,
  "line_id": 6,
  "faction_id": 3,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 3
}, {
  "station_id": 45,
  "station_name": "YASENEVO",
  "x_position": 388,
  "y_position": 1126,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 18
}, {
  "station_id": 46,
  "station_name": "TEPLIY STAN",
  "x_position": 363,
  "y_position": 1102,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 18
}, {
  "station_id": 47,
  "station_name": "KONKOVO",
  "x_position": 363,
  "y_position": 1069,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 18
}, {
  "station_id": 48,
  "station_name": "BELYAEVO",
  "x_position": 364,
  "y_position": 1039,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 18
}, {
  "station_id": 49,
  "station_name": "KALUZHSKAYA",
  "x_position": 388,
  "y_position": 1015,
  "line_id": 6,
  "faction_id": 18,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 18
}, {
  "station_id": 50,
  "station_name": "NOVYE CHEREMUSHKI",
  "x_position": 409,
  "y_position": 993,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 223
}, {
  "station_id": 51,
  "station_name": "PROFSOYUZNAYA",
  "x_position": 433,
  "y_position": 970,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 221
}, {
  "station_id": 52,
  "station_name": "AKADEMICHESKAYA",
  "x_position": 455,
  "y_position": 948,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 220
}, {
  "station_id": 53,
  "station_name": "LENINSKIY PROSPEKT",
  "x_position": 477,
  "y_position": 924,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 222
}, {
  "station_id": 54,
  "station_name": "SHABOLOVSKAYA",
  "x_position": 499,
  "y_position": 902,
  "line_id": 6,
  "faction_id": 22,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 224
},  {
  "station_id": 55,
  "station_name": "BULVAR ROKOSSOVSKOGO",
  "x_position": 882,
  "y_position": 259,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 6
}, {
  "station_id": 56,
  "station_name": "CHERKIZOVSKAYA",
  "x_position": 882,
  "y_position": 301,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 6
}, {
  "station_id": 57,
  "station_name": "PREOBRAZHENSKAYA PLOSHCHAD'",
  "x_position": 856,
  "y_position": 329,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 6
}, {
  "station_id": 58,
  "station_name": "SOKOLNIKI",
  "x_position": 818,
  "y_position": 365,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 6
}, {
  "station_id": 59,
  "station_name": "KRANSNOSELSKAYA",
  "x_position": 791,
  "y_position": 393,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 6
}, {
  "station_id": 60,
  "station_name": "KOMSOMOLSKAYA",
  "x_position": 762,
  "y_position": 425,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 6
}, {
  "station_id": 61,
  "station_name": "KOMSOMOLSKAYA (HANSA)",
  "x_position": 762,
  "y_position": 450,
  "line_id": 5,
  "faction_id": 5,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 5
}, {
  "station_id": 62,
  "station_name": "KRASNYE VOROTA",
  "x_position": 720,
  "y_position": 466,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5.5,
  "symbol_id": 6
}, {
  "station_id": 63,
  "station_name": "CHISTYE PRUDY",
  "x_position": 698,
  "y_position": 489,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5,
  "symbol_id": 6
}, {
  "station_id": 64,
  "station_name": "TEATRALNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 2,
  "x_position": 598,
  "y_position": 621,
  "line_id": 2,
  "faction_id": 6,
  "symbol_id": 6
}, {
  "station_id": 65,
  "station_name": "KROPOTKINSKAYA",
  "x_position": 456,
  "y_position": 735,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id":6
}, {
  "station_id": 66,
  "station_name": "YUGO-ZAPADNAYA",
  "x_position": 201,
  "y_position": 993,
  "line_id": 1,
  "faction_id": 11,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 11
}, {
  "station_id": 67,
  "station_name": "PROSPEKT VERNADSKOGO",
  "x_position": 230,
  "y_position": 962,
  "line_id": 1,
  "faction_id": 11,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 11
}, {
  "station_id": 68,
  "station_name": "UNIVERSITET",
  "x_position": 262,
  "y_position": 932,
  "line_id": 1,
  "faction_id": 11,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 11
}, {
  "station_id": 69,
  "station_name": "VOROBYOVY GORY",
  "x_position": 294,
  "y_position": 898,
  "line_id": 1,
  "faction_id": 2,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 2,
  "station_description": "A surface station on the bottom level of the Luzhniki Metro Bridge, Vorobyovy Gory was utterly destroyed in the nuclear attack. Nothing remains but rubble and rusted girders poking from the waters of the Moskva River."
},{
  "station_id": 70,
  "station_name": "SPORTIVNAYA",
  "x_position": 335,
  "y_position": 855,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 6
},  {
  "station_id": 71,
  "station_name": "FRUNZENSKAYA",
  "x_position": 371,
  "y_position": 820,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 6
}, {
  "station_id": 72,
  "station_name": "PARK KULTURY (HANSA)",
  "x_position": 388,
  "y_position": 778,
  "line_id": 5,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "symbol_id": 5
},{
  "station_id": 73,
  "station_name": "SCHELKOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 945,
  "y_position": 378,
  "line_id": 3,
  "faction_id": 15,
  "symbol_id": 15
}, {
  "station_id": 74,
  "station_name": "PERVOMAYSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 945,
  "y_position": 410,
  "line_id": 3,
  "faction_id": 15,
  "symbol_id": 15
}, {
  "station_id": 75,
  "station_name": "IZMAYLOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 945,
  "y_position": 442,
  "line_id": 3,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 76,
  "station_name": "IZMAYLOVSKY PARK",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 905,
  "y_position": 482,
  "line_id": 3,
  "faction_id": 21,
  "symbol_id": 21
}, {
  "station_id": 77,
  "station_name": "SEMYONOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 880,
  "y_position": 507,
  "line_id": 3,
  "faction_id": 13,
  "symbol_id": 13
}, {
  "station_id": 78,
  "station_name": "ELEKTROZAVODSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 855,
  "y_position": 532,
  "line_id": 3,
  "faction_id": 13,
  "symbol_id": 13
}, {
  "station_id": 79,
  "station_name": "BAUMANSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 830,
  "y_position": 557,
  "line_id": 3,
  "faction_id": 13,
  "symbol_id": 13
}, {
  "station_id": 80,
  "station_name": "KURSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11.5,
  "x_position": 800,
  "y_position": 588,
  "line_id": 3,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 81,
  "station_name": "CHKALOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 800,
  "y_position": 620,
  "line_id": 10,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 82,
  "station_name": "KURSKAYA (HANSA)",
  "x_position": 820,
  "y_position": 604,
  "line_id": 5,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 5
}, {
  "station_id": 83,
  "station_name": "PLOSHCHAD REVOLYUTSII",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5,
  "x_position": 613,
  "y_position": 636,
  "line_id": 3,
  "faction_id": 6,
  "symbol_id": 6
}, {
  "station_id": 84,
  "station_name": "BIBLIOTEKA IM. LENINA",
  "x_position": 527,
  "y_position": 663,
  "line_id": 1,
  "faction_id": 7,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5,
  "symbol_id": 7
}, {
  "station_id": 85,
  "station_name": "ARBATSKAYA (2)",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11,
  "x_position": 485,
  "y_position": 636,
  "line_id": 3,
  "faction_id": 7,
  "symbol_id": 7
}, {
  "station_id": 86,
  "station_name": "SMOLENSKAYA (2)",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6.5,
  "x_position": 418,
  "y_position": 651,
  "line_id": 3,
  "faction_id": 14,
  "symbol_id": 14
}, {
  "station_id": 87,
  "station_name": "PARK POBEDY",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 173,
  "y_position": 766,
  "line_id": 3,
  "faction_id": 20,
  "symbol_id": 20
}, {
  "station_id": 88,
  "station_name": "KIEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 337,
  "y_position": 731,
  "line_id": 3,
  "faction_id": 14,
  "symbol_id": 14
}, {
  "station_id": 89,
  "station_name": "KIEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 318,
  "y_position": 708,
  "line_id": 4,
  "faction_id": 14,
  "symbol_id": 14
}, {
  "station_id": 90,
  "station_name": "KIEVSKAYA (HANSA)",
  "x_position": 342,
  "y_position": 707,
  "line_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 91,
  "station_name": "NOVOGIREEVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 1008,
  "y_position": 655,
  "line_id": 8,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 92,
  "station_name": "PEROVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 982,
  "y_position": 683,
  "line_id": 8,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 93,
  "station_name": "SCHOSSE ENTUZIASTOV",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 956,
  "y_position": 711,
  "line_id": 8,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 94,
  "station_name": "AVIAMOTORNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 930,
  "y_position": 739,
  "line_id": 8,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 95,
  "station_name": "PLOSHCHAD ILYICHA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5.5,
  "x_position": 890,
  "y_position": 766,
  "line_id": 8,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 96,
  "station_name": "MARKSISTSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 800,
  "y_position": 766,
  "line_id": 8,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 97,
  "station_name": "TRETYAKOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 613,
  "y_position": 766,
  "line_id": 8,
  "faction_id": 22,
  "symbol_id": 220
}, {
  "station_id": 98,
  "station_name": "VYKHINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12,
  "x_position": 1052,
  "y_position": 926,
  "line_id": 7,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 99,
  "station_name": "RYAZANSKY PROSPEKT",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 1010,
  "y_position": 926,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 100,
  "station_name": "KUZMINKY",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 2,
  "x_position": 971,
  "y_position": 910,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 101,
  "station_name": "TEKSTILSCHIKI",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 2,
  "x_position": 951,
  "y_position": 890,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 102,
  "station_name": "VOLGOGRADSKY PROSPEKT",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 916,
  "y_position": 855,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 103,
  "station_name": "PROLETARSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 896,
  "y_position": 835,
  "line_id": 7,
  "faction_id": 0,
  "symbol_id": 1
}, {
  "station_id": 104,
  "station_name": "TAGANSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 800,
  "y_position": 740,
  "line_id": 7,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 105,
  "station_name": "TAGANSKAYA (HANSA)",
  "x_position": 775,
  "y_position": 751,
  "line_id": 5,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 106,
  "station_name": "KITAY-GOROD",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 708,
  "y_position": 662,
  "line_id": 7, //6
  "faction_id": 22,
  "symbol_id": 222
}, {
  "station_id": 107,
  "station_name": "KUZNETSKY MOST",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12,
  "x_position": 631,
  "y_position": 533,
  "line_id": 7,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 108,
  "station_name": "LUBYANKA",
  "x_position": 631,
  "y_position": 557,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 10,
  "symbol_id": 6
}, {
  "station_id": 109,
  "station_name": "TVERSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 529,
  "y_position": 513,
  "line_id": 2,
  "faction_id": 8,
  "symbol_id": 8
}, {
  "station_id": 110,
  "station_name": "PUSHKINSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 509,
  "y_position": 533,
  "line_id": 7,
  "faction_id": 8,
  "symbol_id": 8
}, {
  "station_id": 111,
  "station_name": "BARRIKADNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 1,
  "x_position": 350,
  "y_position": 533,
  "line_id": 7,
  "faction_id": 10,
  "symbol_id": 10
}, {
  "station_id": 112,
  "station_name": "PLANERNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 192,
  "y_position": 305,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 113,
  "station_name": "SHODNENSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 192,
  "y_position": 335,
  "line_id": 7,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 114,
  "station_name": "TUSHINSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 192,
  "y_position": 365,
  "line_id": 7,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 115,
  "station_name": "SCHUKINSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 192,
  "y_position": 425,
  "line_id": 7,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 116,
  "station_name": "OKTYABRSKOE POLE",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 214,
  "y_position": 447,
  "line_id": 0,
  "faction_id": 4,
  "symbol_id": 51
}, {
  "station_id": 117,
  "station_name": "POLEZHAEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 236,
  "y_position": 469,
  "line_id": 7,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 118,
  "station_name": "BEGOVAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 278,
  "y_position": 511,
  "line_id": 7,
  "faction_id": 10,
  "symbol_id": 10
}, {
  "station_id": 119,
  "station_name": "ULITSA 1905 GODA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 300,
  "y_position": 533,
  "line_id": 7,
  "faction_id": 10,
  "symbol_id": 10
}, {
  "station_id": 120,
  "station_name": "KRASNOPRESNENSKAYA (HANSA)",
  "x_position": 327,
  "y_position": 553,
  "line_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 4,
  "faction_id": 5,
  "symbol_id": 5
}, {
  "station_id": 121,
  "station_name": "MARYINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 906,
  "y_position": 1080,
  "line_id": 10,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 122,
  "station_name": "BRATISLAVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 906,
  "y_position": 1040,
  "line_id": 10,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 123,
  "station_name": "LYUBLINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 906,
  "y_position": 1000,
  "line_id": 10,
  "faction_id": 25,
  "symbol_id": 25
}, {
  "station_id": 124,
  "station_name": "VOLZHSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 906,
  "y_position": 961,
  "line_id": 10,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 125,
  "station_name": "PECHATNIKI",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 883,
  "y_position": 938,
  "line_id": 10,
  "faction_id": 17,
  "symbol_id": 17
}, {
  "station_id": 126,
  "station_name": "KOZHUKHOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 870,
  "y_position": 905,
  "line_id": 10,
  "faction_id": 17,
  "symbol_id": 17
}, {
  "station_id": 127,
  "station_name": "DUBROVKA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 870,
  "y_position": 870,
  "line_id": 10,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 128,
  "station_name": "KRESTYANSKAYA ZASTAVA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 870,
  "y_position": 835,
  "line_id": 10,
  "faction_id": 0,
  "symbol_id": 1
}, {
  "station_id": 129,
  "station_name": "RIMSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 1,
  "x_position": 870,
  "y_position": 745,
  "line_id": 10,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 130,
  "station_name": "SRETENSKY BULVAR",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 668,
  "y_position": 489,
  "line_id": 10,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 131,
  "station_name": "TRUBNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 600,
  "y_position": 440,
  "line_id": 10,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 132,
  "station_name": "DOSTOYEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 600,
  "y_position": 320,
  "line_id": 0,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 133,
  "station_name": "MARYINA ROSCHA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 600,
  "y_position": 270,
  "line_id": 10,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 134,
  "station_name": "RECHNOY VOKZAL",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 322,
  "y_position": 218,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 135,
  "station_name": "VODNY STADION",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 322,
  "y_position": 258,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 136,
  "station_name": "VOYKOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 322,
  "y_position": 298,
  "line_id": 2,
  "faction_id": 4,
  "symbol_id": 50
}, {
  "station_id": 137,
  "station_name": "SOKOL",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 322,
  "y_position": 342,
  "line_id": 2,
  "faction_id": 12,
  "symbol_id": 12
}, {
  "station_id": 138,
  "station_name": "AEROPORT",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 344,
  "y_position": 364,
  "line_id": 2,
  "faction_id": 12,
  "symbol_id": 12
}, {
  "station_id": 139,
  "station_name": "DINAMO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 366,
  "y_position": 386,
  "line_id": 2,
  "faction_id": 12,
  "symbol_id": 12
}, {
  "station_id": 140,
  "station_name": "BELORUSSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 7,
  "x_position": 390,
  "y_position": 410,
  "line_id": 2,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 141,
  "station_name": "BELORUSSKAYA (HANSA)",
  "x_position": 390,
  "y_position": 435,
  "line_id": 5,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point":10,
  "symbol_id": 5
}, {
  "station_id": 142,
  "station_name": "MAYAKOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 475,
  "y_position": 460,
  "line_id": 2,
  "faction_id": 4,
  "symbol_id": 4
},  {
  "station_id": 143,
  "station_name": "OKHOTNY RYAD",
  "x_position": 583,
  "y_position": 606,
  "line_id": 1,
  "faction_id": 6,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 2,
  "symbol_id": 6
}, {
  "station_id": 144,
  "station_name": "NOVOKUZNETSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 593,
  "y_position": 783,
  "line_id": 2,
  "faction_id": 22,
  "symbol_id": 224
}, {
  "station_id": 145,
  "station_name": "KRASNOGVARDEYSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 847,
  "y_position": 1181,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 146,
  "station_name": "DOMODEDOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 8,
  "x_position": 823,
  "y_position": 1155,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 147,
  "station_name": "OREHOVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 799,
  "y_position": 1131,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 148,
  "station_name": "TSARITSYNO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 773,
  "y_position": 1105,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 149,
  "station_name": "KANTEMIROVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 749,
  "y_position": 1080,
  "line_id": 2,
  "faction_id": 3,
  "symbol_id": 3,
  "station_description": "It is believed that the roof of Kantemirovskaya was pierced or cracked open during the nuclear attack and a fragment of an unexploded warhead crashed nearby, flooding the station and surrounding tunnels with radiation. No one can be completely sure, as the contamination is too intense for even the most experienced stalkers to risk approaching."
}, {
  "station_id": 150,
  "station_name": "KASHIRSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 749,
  "y_position": 1030,
  "line_id": 2,
  "faction_id": 3,
  "symbol_id": 3,
  "station_description": "Kashirskaya is so contaminated by radiation seeping north from Kantemirovskaya that it is unsafe to approach in even the best radiation suits."
}, {
  "station_id": 151,
  "station_name": "KOLOMENSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 749,
  "y_position": 1000,
  "line_id": 2,
  "faction_id": 3,
  "symbol_id": 3
}, {
  "station_id": 152,
  "station_name": "AVTOZAVODSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 734,
  "y_position": 919,
  "line_id": 2,
  "faction_id": 21,
  "symbol_id": 21
}, {
  "station_id": 153,
  "station_name": "PAVELETSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 676,
  "y_position": 861,
  "line_id": 2,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 154,
  "station_name": "PAVELETSKAYA (HANSA)",
  "x_position": 676,
  "y_position": 834,
  "line_id": 5,
  "faction_id": 5,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "symbol_id": 5
}, {
  "station_id": 155,
  "station_name": "KRYLATSKOE",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 535,
  "line_id": 3,
  "faction_id": 19,
  "symbol_id": 19
}, {
  "station_id": 156,
  "station_name": "MOLODEZHNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 565,
  "line_id": 3,
  "faction_id": 19,
  "symbol_id": 19
}, {
  "station_id": 157,
  "station_name": "KUNTSEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 595,
  "line_id": 3, //4
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 158,
  "station_name": "PIONERSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12.5,
  "x_position": 112,
  "y_position": 630,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 159,
  "station_name": "FILEVSKIY PARK",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12.5,
  "x_position": 134,
  "y_position": 652,
  "line_id": 4,
  "faction_id": 24,
  "symbol_id": 24
}, {
  "station_id": 160,
  "station_name": "BAGRATIONOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 156,
  "y_position": 674,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 161,
  "station_name": "FILI",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 188,
  "y_position": 706,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 162,
  "station_name": "KUTUZOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 210,
  "y_position": 728,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 163,
  "station_name": "STUDENCHESKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 232,
  "y_position": 750,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 164,
  "station_name": "SMOLENSKAYA (1)",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 406,
  "y_position": 620,
  "line_id": 4,
  "faction_id": 24,
  "symbol_id": 24
}, {
  "station_id": 165,
  "station_name": "ARBATSKAYA (1)",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11.5,
  "x_position": 445,
  "y_position": 600,
  "line_id": 4,
  "faction_id": 24,
  "symbol_id": 24
}, {
  "station_id": 166,
  "station_name": "TEKHNOPARK",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 749,
  "y_position": 955,
  "line_id": 2,
  "faction_id": 2,
  "symbol_id": 2,
  "station_description": "A surface station still under construction when the bombs hit, Teknopark lies in overgrown ruins."
}, {
  "station_id": 167,
  "station_name": "KAKHOVSKAYA",
  "x_position": 602,
  "y_position": 1030,
  "line_id": 0,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12.5,
  "faction_id": 23,
  "symbol_id": 23
}, {
  "station_id": 168,
  "station_name": "SPARTAK",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 192,
  "y_position": 395,
  "line_id": 7,
  "faction_id": 4,
  "symbol_id": 4
}, {
  "station_id": 169,
  "station_name": "VARSHAVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 6,
  "x_position": 664,
  "y_position": 1030,
  "line_id": 11,
  "faction_id": 23,
  "symbol_id": 23,
  "station_description": "Varshavskaya is nominally under the control of Sebastopol, however its half-open hermetic doors make it so heavily irradiated as to be uninhabitable. The walls ooze murky water and the station is full of rust and mould."
}, {
  "station_id": 170,
  "station_name": "KASHIRSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 725,
  "y_position": 1030,
  "line_id": 11,
  "faction_id": 3,
  "symbol_id": 3,
  "station_description": "Kashirskaya is so contaminated by radiation seeping north from Kantemirovskaya that it is unsafe to approach in even the best radiation suits."
}, {
  "station_id": 171,
  "station_name": "PARK KULTURY",
  "x_position": 412,
  "y_position": 778,
  "line_id": 1,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "faction_id": 6,
  "symbol_id": 6
}, {
  "station_id": 172,
  "station_name": "NOVOKOSINO",
  "x_position": 1034,
  "y_position": 627,
  "line_id": 8,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12,
  "faction_id": 16,
  "symbol_id": 16
}, {
  "station_id": 173,
  "station_name": "BITTSEVSKY PARK",
  "x_position": 435,
  "y_position": 1150,
  "line_id": 12,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 5.5,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 174,
  "station_name": "LESOPARKOVAYA",
  "x_position": 505,
  "y_position": 1150,
  "line_id": 12,
  "version_id": 3,
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 12,
  "faction_id": 1,
  "symbol_id": 1
},{
  "station_id": 175,
  "station_name": "ULITSA STAROKACHALOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 584,
  "y_position": 1210,
  "line_id": 12,
  "faction_id": 1,
  "symbol_id": 1
},{
  "station_id": 176,
  "station_name": "ULITSA SKOBELEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 554,
  "y_position": 1240,
  "line_id": 12,
  "faction_id": 2,
  "symbol_id": 2
},{
  "station_id": 177,
  "station_name": "BULVAR ADMIRALA USHAKOVA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 534,
  "y_position": 1260,
  "line_id": 12,
  "faction_id": 2,
  "symbol_id": 2
},{
  "station_id": 178,
  "station_name": "ULITSA GORCHAKOVA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 514,
  "y_position": 1280,
  "line_id": 12,
  "faction_id": 2,
  "symbol_id": 2
},{
  "station_id": 179,
  "station_name": "BUNINSKAYA ALLEYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 494,
  "y_position": 1300,
  "line_id": 12,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 180,
  "station_name": "ALMA-ATINSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 847,
  "y_position": 1210,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 181,
  "station_name": "ZYABLIKOVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 867,
  "y_position": 1161,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 182,
  "station_name": "SHIPILOVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 887,
  "y_position": 1141,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 183,
  "station_name": "BORISOVO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 907,
  "y_position": 1121,
  "line_id": 2,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 184,
  "station_name": "LERMONTOVSKY PROSPEKT",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 1070,
  "y_position": 955,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 185,
  "station_name": "ZHULEBINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 1070,
  "y_position": 985,
  "line_id": 7,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 186,
  "station_name": "STROGINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 505,
  "line_id": 3,
  "faction_id": 19,
  "symbol_id": 19
}, {
  "station_id": 187,
  "station_name": "MYAKININO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 475,
  "line_id": 3,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 188,
  "station_name": "VOLOKOLAMSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 425,
  "line_id": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 189,
  "station_name": "MITINO",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 395,
  "line_id": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 190,
  "station_name": "PYATNITSKOYE SHOSSE",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 100,
  "y_position": 365,
  "line_id": 3,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 191,
  "station_name": "DELOVOY TSENTR",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11,
  "x_position": 270,
  "y_position": 620,
  "line_id": 4,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 192,
  "station_name": "VYSTAVOCHNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 11,
  "x_position": 290,
  "y_position": 600,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
}, {
  "station_id": 193,
  "station_name": "SLAVYANSKY BULVAR",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 110,
  "y_position": 702,
  "line_id": 3,
  "faction_id": 2,
  "symbol_id": 2
}, {
  "station_id": 194,
  "station_name": "PARK POBEDY",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 173,
  "y_position": 742,
  "line_id": 3,
  "faction_id": 20,
  "symbol_id": 20
},{
  "station_id": 195,
  "station_name": "KUNTSEVSKAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 76,
  "y_position": 595,
  "line_id": 3,
  "faction_id": 1,
  "symbol_id": 1
},{
  "station_id": 196,
  "station_name": "STOROZHEVAYA BASHNYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 3,
  "x_position": 640,
  "y_position": 895,
  "line_id": 9,
  "faction_id": 26,
  "symbol_id": 52
},{
  "station_id": 197,
  "station_name": "MEZHDUNARODNAYA",
  "station_open": 0,
  "station_img": "assets/img/example.png",
  "label_point": 9,
  "x_position": 290,
  "y_position": 565,
  "line_id": 4,
  "faction_id": 1,
  "symbol_id": 1
},

]

// **************************************************************************************************************************************************

// FACTION
//     faction_id
//     faction_name
//     faction_description
// SOURCE: http://metrovideogame.wikia.com/wiki/Factions

var factions = [{
  "faction_id": 0,
  "faction_name": "Placeholder",
  "faction_description": "Stations that have not been placed yet.",
  "faction_colour": "#FFFFFF"
}, {
  "faction_id": 1,
  "faction_name": "Unknown/Unexplored",
  "faction_description": "No information is currently available about this station.",
  "faction_colour": "#FFFFFF"
},{
 "faction_id": 2,
  "faction_name": "Destroyed",
  "faction_description": "These stations were completely destroyed by the war, or were still under construction when the bombs fell.",
  "faction_colour": "#727272"
},{
 "faction_id": 3,
  "faction_name": "Uninhabited or Abandoned",
  "faction_description": "Stations that are uninhabited, or were once inhabited and have since been abandoned.",
  "faction_colour": "#B2B2B2"
},{
  "faction_id": 4,
  "faction_name": "Independent",
  "faction_description": "Independent Stations go their own way in the Metro, maintaing their independence either by fierce resistance, or by the fact that no major faction wants them.",
  "faction_colour": "#297EFF"
}, {
  "faction_id": 5,
  "faction_name": "Community of the Ring Stations (Hansa)",
  "faction_description": "This faction is a collection of stations that occupy the Koltsevaya Ring Line of the Metro. Formed during the early days of the Metro, Hansa is the most powerful faction in the Metro. Their influence stretches in all directions due to their line being impossible to bypass, meaning Hansa grew incredibly rich. Although their security forces are well equipped, they rarely seek war, preferring to use economic sanctions to suppress their neighbours. They also protect a number of satellite factions, in return for food, electricity and so on. Their leader is the mysterious Prime Minister Rusakov. The official name of the faction is the Community of the Ring Line Stations - the almost universal nickname of 'Hansa' is a reference to the Hanseatic trading league of early modern Europe.",
  "faction_colour": "#8C9091"
}, {
  "faction_id": 6,
  "faction_name": "Red Line",
  "faction_description": "The Red Line are a politically far-left faction who emulate the former Soviet-Union, particularly that of Stalin's era. Occupying the Sokolnicheskaya Line (minus the two stations of the Ring and the Lenin Libray), the Red Line are a powerful faction. Although not as openly hostile as their enemies, the Fourth Reich, they are nonetheless an oppressive society, with many executions and imprisonments. Their huge (relative to the rest of the Metro) population makes them a major consumer of food and other resources, despite this hunger is common. Initially the Red Line intended to convert the entire Metro to communism, but after a costly war with Hansa and the Arbat Confederation they settled on their current borders. While previously at war with the Neo-Nazis of the Fourth Reich they are currently limiting themselves to supporting freelance revolutionary brigades that fight the Nazis unofficially. The leader of the red line is the notably harsh General Secretary Moskvin.",
  "faction_colour": "#FF0000"
}, {
  "faction_id": 7,
  "faction_name": "Polis",
  "faction_description": "Occupying the Arbatskaya, Alexandrovsky Sad, Biblioteka Im Lenina and Borovitskaya stations, Polis is the beacon of light in the post-apocalyptic Metro. Created by surving members of the Russian government, military, and police, and staff from the Lenin Library, Polis is the faction closest to pre-war life, with electric lighting and relatively comfortable living conditions. Basing their society on the Indian caste system, they are divided into the Brahmin (researchers and keepers of knowledge), the Kshatriya (military), the Vashiya (merchants) and the Shudra (servants). Members of each caste are tattooed for easy identification. The castes often vye for control of the station, with the Kshatriya recently taking power from the Brahmin, a fact that still rankles with the researchers. Polis actively seeks to preserve as much of the old world as possible and frequently sends Stalkers to the vast Library on the surface to hunt for pre-war books that they then distribute to the entire Metro.",
  "faction_colour": "#0080C1"
}, {
  "faction_id": 8,
  "faction_name": "Fourth Reich",
  "faction_description": "A politically far right neo-Nazi faction who embrace many of the ideals of World War II Nazi Germany. Their leader, the Führer, enforces a policy of oppression against all those who are considered 'inferior', in particular non-ethnic Russians from the Caucasus regions who make up a substantial part of the Metro's population. The Fourth Reich are based at the triple station of Tverskaya-Chekhovskaya-Pushkinskaya but have ambitions for expansion. They are often at war with their ideological opposites on the Red Line.",
  "faction_colour": "#2E2A26"
}, {
  "faction_id": 9,
  "faction_name": "VDNKh Commonwealth",
  "faction_description": "One of the youngest factions in the Metro, the VDNKh Commonwealth is a recent alliance between VDNKh, Alexeyevskaya and Rizhskaya to monopolise VDNKh's tea production and prevent annexation by Hansa. Already a strong faction, with schools, a library and a decent security force, the VDNKh Commonwealth has the potential to grow into a major player in the Metro.",
  "faction_colour": "#EFA508"
}, {
  "faction_id": 10,
  "faction_name": "1905 Confederation",
  "faction_description": "Occupying the Barrikadnaya, Uliza 1905 Goda, and Begovaya stations, the 1905 Confederation is a small faction of unknown origin. It is unknown what their primary produce is, though given their close proximity to Hansa, they are likely a satellite faction.",
  "faction_colour": "#A53E00"
}, {
  "faction_id": 11,
  "faction_name": "University/Emerald City (Rumoured)",
  "faction_description": "Rumours of a vast secret bunker beneath the Moscow State University existed even before the war. After the bombs fell the stories evolved into tales of a secret civilisation of scientists and academics, working together to preserve knowledge and culture, and quietly observing the greater Metro. No convincing evidence of the Emerald City has ever been produced, although some point out that without electricty to support the freezing plant the soft soil beneath the university site should have melted, tumbling the buildings into the river - something Stalkers state has not happened.",
  "faction_colour": "#4DC11A"
}, {
  "faction_id": 12,
  "faction_name": "Plantations and Factories",
  "faction_description": "Located at the northern end of the Zamoskvoretskaya line, these stations produce tremendous amounts of food and goods for the entire Metro. Kilometres of tunnels and engineering lines have been converted to mushroom and potato plantations and farms for pigs and chickens. At least some of the vast workforce is rumoured to be made up of slaves purchased from the Fourth Reich. Increasing dissapearances are blamed on kidnappings by the Satanists.",
  "faction_colour": "#C7DC23"
}, {
  "faction_id": 13,
  "faction_name": "Baumansky Alliance",
  "faction_description": "The Baumansky Alliance are a small faction occupying the stations of Baumanskaya, Elektrozavodskaya and Semyonovskaya. They produce, repair and recreate much technology from before the war, as well as producing electricity to sell to the Metro. Their importance has enabled them to resist Hansa's absorption, as well as major hostilities.",
  "faction_colour": "#67C1D9"
}, {
  "faction_id": 14,
  "faction_name": "Arbat Confederation",
  "faction_description": "Another small faction, occupying Kievskaya and its close neighbours. They are a capitalist society, with a large number of Caucasians. Although they were previously a strong faction, their role in the Hansa - Red Line War reduced them to another Hansa satellite.",
  "faction_colour": "#0080C1"
}, {
  "faction_id": 15,
  "faction_name": "Pervomay Republic",
  "faction_description": "A small republic cut off from the rest of the Metro and managed by former police officers.",
  "faction_colour": "#1D58FF"
}, {
  "faction_id": 16,
  "faction_name": "Kalinin Confederation",
  "faction_description": "A collection of stations on the Kalinin line. Their distance from the rest of the Metro keeps them safe from many hazards.",
  "faction_colour": "#FFFF08"
}, {
  "faction_id": 17,
  "faction_name": "Pechatniki Confederation",
  "faction_description": "A small confederation best known for production of tea - although many prefer that from VDNKh. Previously holding their own, they are now struggling to survive after the tunnels to Dubrovka have become possessed by some dark force.",
  "faction_colour": "#B000BF"
}, {
 "faction_id": 18,
  "faction_name": "Yasenevo Confederation",
  "faction_description": "Located in the south of the Metro and isolated by many stations held by ciminal gangs, not much is known about this faction.",
  "faction_colour": "#00CBFF"
}, {
 "faction_id": 19,
  "faction_name": "Commonwealth of Human Mutants",
  "faction_description": "Located at shallow and surface stations on the Filevskaya line the Commonwealth is inhabited by a population badly affected by radiation. Some inhabitants are said to have three legs or two heads.",
  "faction_colour": "#323232"
}, {
  "faction_id": 20,
  "faction_name": "Savage Cannibals of the Great Worm Cult",
  "faction_description": "A technophobic, xenophobic, primative sect residing at Park Pobedy, the Great Worm Cult have descended into a state of degeneracy. They worship an entity known as the 'Great Worm', allegedly the being that created the entire world, and kidnap children from other stations to be raised in the cult. Any adults they capture are eaten. Mutation is common among the cultists but this has resulted in the development of preternatural night vision and hypnotic abilities verging on the psychic. The cult was founded and is led by an old man who hated how technology destroyed the world and sees his new religion as the best hope for preserving humanity past the point where the Metro fails entirely.",
  "faction_colour": "#00BE00"
}, {
  "faction_id": 21,
  "faction_name": "Trotskyists",
  "faction_description": "Several scattered stations have fallen to Trotskyist revolutionaries. Ideological differences put them at odds with the Red Line, however they still support the roving bands of revolutionaries that travel the metro.",
  "faction_colour": "#FF0000"
}, {
  "faction_id": 22,
  "faction_name": "Gangsters",
  "faction_description": "Various criminal groups - including the Russian mafia - survived the war and occupy stations in the south of the Metro. They spend much of their time staging attacks and raids on each other's stations.",
  "faction_colour": "#FFFFFF"
},  {
  "faction_id": 23,
  "faction_name": "Sevastapol",
  "faction_description": "Sevastapol and Kakhovska stations take advantage of the high groundwater in their region by maintaining dozens of small hydroelectric plants in their tunnels. They sell electricity to Hansa in exchange for ammunition to fight off the horrific creatures that creep north from the mysterious caverns known as 'The Gates'. Sevastapol's influence theoretically extends as far as Varshavskaya, however the station is so heavily irradiated as to be uninhabitable.",
  "faction_colour": "#499EFF"
}, {
  "faction_id": 24,
  "faction_name": "Occupied by Mutants",
  "faction_description": "Various stations have been occupied by mutated creatures. Some are relatively harmless while others are as nightmarish as anything encountered on the surface.",
  "faction_colour": "#323232"
}, {
  "faction_id": 25,
  "faction_name": "Satanists",
  "faction_description": "The Satanists are a group of malevolent metro inhabitants, who believe that the metro is the gateway to hell. Little is known about the location of the Satanists. One witness was kidnapped on Belorusskaya and brought to their station. He did not recognize it, although based on his description and the fact that it's beyond Pechatniki, Lyublino (Lyublinsko-Dmitrovskaya Line) is the most likely candidate. In contrast, some rumours place the Satanists at Timiryazevskaya on the Serpukhovsko-Timiryazevskaya line, suggesting there may be more than one colony of Satan worshipers in the Metro. The Satanist station is vandalized, all name-boards are ripped off and the walls and floor are blood-stained. The floor in the center is ripped up, and there's a huge pit, 30 metres deep, where kidnapped slaves from other stations are forced to dig further down. The Satanists believe that the end of the world already happened, and the Moscow metro is the Hellgate – if they dig a bit deeper, they would get to Hell and see Satan himself. The Satanists do not appear to maintain any industry, and they also brutally murder slaves on a constant basis. How they survive remains a mystery.",
  "faction_colour": "#000000"
}, {
  "faction_id": 26,
  "faction_name": "The Watchtower",
  "faction_description": "The Watchtower are a religious order based in a train stalled in the tunnel between Serpukhhovskaya and Tulskaya. Composing mainly of Jehova's Witnesses, their brothers travel the Metro, taking in waifs and strays to indoctrinate into their religion. Their offer of food and accommodation in exchange for faith has seen them assemble quite a collection of the desperate and destitute.",
  "faction_colour": "#FFA530"
}


/*
  "faction_id": 4,
  "faction_name": "Rangers of the Order",
  "faction_description": "A para-military organisation considered the protectors of the Metro, the Rangers venture the Metro and the surface, eliminating mutants and bandits who prey on the weak. Although technically neutral, they have close ties with Polis, with many members hailing from there. They have no home stations, instead occupying the surface base of Sparta, and the D6 bunker. Their leader, Miller, enforces a policy of 'if it's hostile, you kill it', which has served the Rangers well so far. Many members were previously Russian special forces or military, training which makes them ideal soldiers for protecting the Metro. This is also Artyom's faction.",
  "faction_colour": "#784805"

  "faction_id": 10,
  "faction_name": "Children of the Underground",
  "faction_description": "Residing in the mutant stricken station of Paveletskaya, the Children of the Underground is the name for the forces protecting the station. Also known as Hole Station, Paveletskaya, missing its hermetic door, is constantly under attack by mutants. Artyom aids the Children of the Underground in fighting off the invaders, but the station eventually falls, the Children of the Underground sacraficing themselves to cut off Paveletskaya and the mutants from the rest of the Metro.",
  "faction_colour": "#784805"

  "faction_id": 16,
  "faction_name": "Bandits",
  "faction_description": "Bandits is the catchall term for loosely organised gangs and thugs. Controlling certain stations throughout the Metro system, though rarely more than one, bandits are known to rob and murder defenceless travellers in the tunnels, taking their goods to sell on. However, some 'bandits' are simply lawless factions, such as those ruling Venice or Kitai-Gorod, and are not as extreme as other bandits. Although their businesses may be lucrative, and they are not afraid to kill to get what they want, they are not openly hostile. Many bandit factions are also rumoured to create and sell poor quality or fake merchandise to gullible travellers, often for the same price as a genuine copy.",
  "faction_colour": "#784805"

*/
]

// **************************************************************************************************************************************************

// FEATURES - (Objects on the map that aren't stations)

var features = [{
    "feature_name": "Hansa Bunker|(GO-42)",
    "feature_id": 0,
    "x_position": 835,
    "y_position": 712,
    "width": 55,
    "height": 30,
    "version_id": 3
  }, {
    "feature_name": "Kingdom|of Rats",
    "feature_id": 1,
    "x_position": 445,
    "y_position": 227,
    "width": 50,
    "height": 26,
    "version_id": 3
  }, {
    "feature_name": "The Gates",
    "feature_id": 2,
    "x_position": 655,
    "y_position": 1105,
    "width": 50,
    "height": 20,
    "version_id": 3
  }

]
