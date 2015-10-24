app.service('FactionService', function() {
  this._factions = [
    {
      factionId: 0,
      factionName: "Hansa",
      factionDescription: "his faction is a collection of stations that occupy the Koltsevaya Ring Line of the Metro. Formed during the early days of the Metro when Central Metro Command fell, Hansa is the most powerful faction in the Metro. Their influence stretches in all directions due to their line being impossible to bypass, meaning Hansa grew incredibly rich. Although their security forces are well equipped, they rarely seek war, preferring to use economic sanctions to suppress their neighbours. They also protect a number of satellite factions, in return for food, electricity and so on. Their leader is the mysterious Prime Minister Rusakov."
    }, {
      factionId: 0,
      factionName: "Fourth Reich",
      factionDescription: "A politically far right neo-Nazi faction who embrace many of the ideals of World War II Nazi Germany. Their leader, the Führer, enforces a policy of oppression against all those who are considered 'inferior' which includes people who have been mutated by radiation. Their home station is the triple station of Tverskaya-Chekhovskaya-Pushkinskaya, though they occupy many other stations and bases on the surface. In a state of perpetual war with their political opposites, the Red Line, their army consists of highly trained men with advanced equipment, and often utilise Wehrmacht-style helmets and banners. They prefer well trained soldiers and heavy firepower at the expense of a smaller army (possibly because their purges have limited their recruitment options). The Nazis are always a hostile faction towards the player, as they commonly assume that Artyom is a Communist, claiming he is an 'Enemy Scout' or a 'Red Spy'."
    }, {
      factionId: 0,
      factionName: "Polis",
      factionDescription: "Occupying the Arbatskaya, Alexandrovsky Sad, Biblioteka im Lenina and Borovitskaya stations, Polis is the beacon of light in the post-apocalyptic Metro. Created by previous members of the Russian government, military, and police, Polis is the factions closest to pre-war life, with electric lighting and relatively comfortable living conditions. Taking their society from Indian caste system, the Brahmin lead, the Kshatriya are the protectors, the Vashiya the merchants and the Shudra, who are the servants, Polis actively seeks to preserve as much of the old world as possible. They frequently send Stalkers to the surface to hunt for pre-war books that they distribute to the entire Metro."
    }, {
      factionId: 0,
      factionName: "Rangers of the Order",
      factionDescription: "A para-military organisation considered the protectors of the Metro, the Rangers venture the Metro and the surface, eliminating mutants and bandits who prey on the weak. Although technically neutral, they have close ties with Polis, with many members hailing from there. They have no home stations, instead occupying the surface base of Sparta, and the D6 bunker. Their leader, Miller, enforces a policy of 'if it's hostile, you kill it', which has served the Rangers well so far. Many members were previously Russian special forces or military, training which makes them ideal soldiers for protecting the Metro. This is also Artyom's faction."
    }, {
      factionId: 0,
      factionName: "Red Line",
      factionDescription: "The Red Line are a politically far-left faction who emulate the former Soviet-Union, particularly that of Stalin's era. Occupying the Sokolnicheskaya Line, minus the two stations of the Ring, the Red Line are a powerful faction. Although not as openly hostile as their enemies, the Fourth Reich, they are nonetheless an oppressive society, with many executions and imprisonments. Their army is reminiscent of the World War II Red Army, compromising of large quantities of poorly trained and equipped men with low survivability. Their huge (relative to the rest of the Metro) population allows this huge neglect for life. They have some well trained and equipped soldiers though, who are most likely either pre-war soldiers or veteran conscripts. These soldiers are rarely seen near the frontlines though. Their leader, Secretary Moskvin, is a harsh leader, though the faction is fairly wealthy nonetheless."
    }, {
      factionId: 0,
      factionName: "1905 Confederation",
      factionDescription: "Occupying the Barrikadnaya, Uliza 1905 goda, and Begovaya stations, the 1905 Confederation is a small faction of unknown origin. It is unknown what their primary produce is, though given their close proximity to Hansa, they are likely a satellite faction. Its only known residents are Mikhail Porfirevich and Vanechka."
    }, {
      factionId: 0,
      factionName: "Arbat Confederation",
      factionDescription: "Another small faction, occupying Kievskaya and its close neighbours. They are a Capitalist society, with a large number of Caucasians. Although they were previously a strong faction, their role in the Hansa - Red Line War reduced them to another Hansa satellite."
    }, {
      factionId: 0,
      factionName: "Baumansky Alliance",
      factionDescription: "The Baumansky Alliance are a small faction occupying the stations of Baumanskaya, Elektrozavodskaya and Semyonovskaya. They produce, repair and recreate much technology from before the war, as well as producing electricity to sell to the Metro. Their importance has enabled them to resist Hansa's absorption, as well as major hostilities."
    }, {
      factionId: 0,
      factionName: "Belorusskaya Trade Outpost",
      factionDescription: "A collection of trading stations, including Sokol, Aeroport, Dinamo and Belorusskaya, the Belorusskaya Trade Outpost is responsible for the production of food in the Metro, particularly livestock, something of a rarity in the Metro. Unlike many other factions, they are completely neutral, even willing to deal with the likes of the Fourth Reich, buying slaves from them to work on plantations. However, they are having problems with disappearances, rumoured to have been kidnapped by Satanists."
    }, {
      factionId: 0,
      factionName: "Children of the Underground",
      factionDescription: "Residing in the mutant stricken station of Paveletskaya, the Children of the Underground is the name for the forces protecting the station. Also known as Hole Station, Paveletskaya, missing its hermetic door, is constantly under attack by mutants. Artyom aids the Children of the Underground in fighting off the invaders, but the station eventually falls, the Children of the Underground sacraficing themselves to cut off Paveletskaya and the mutants from the rest of the Metro."
    }, {
      factionId: 0,
      factionName: "Savage Cannibals of the Great Worm Cult",
      factionDescription: "A technophobic, xenophobic primative faction, residing in Park Pobedy, the Great Worm Cult have descended into a state of primeaval living. They worship an entity known as the 'Great Worm', the being that created the entire world (I.E: The Metro), and frequently cannibalise those who use technology. Their leader is actually an old man who hated how technology destroyed the world. The Great Worm Cult's primary enemies are the Arbat Confederation, who's children they frequently steal."
    }, {
      factionId: 0,
      factionName: "Revolutionaries",
      factionDescription: "A military branch of the Red Line, though not directly affiliated anymore, the Revolutionaries travel the Metro attacking Reich territory and patrols, supplied by the Red Line. Following the ideals of Trotsky and Che Guevara, they save Artyom from certain death from a Reich noose."
    }, {
      factionId: 0,
      factionName: "Satanists",
      factionDescription: "A myth amongst the Metro, the Satanists are said to occupy the stations from Dubrovka to Lyublino. Driven mad by the apocalypse, the Satanists kidnap Metro dwellers and force them to dig a huge hole in Lyublino station, that they believe is the portal to Hell itself. Given that there is only one known witness of this, whether or not the Satanists truly exist is questionable."
    }, {
      factionId: 0,
      factionName: "The Watchtower",
      factionDescription: "The Watchtower are a religious faction occupying the tunnels south of Serpukhhovskaya. Composing mainly of Jehova's Witnesses, their brothers travel the Metro, taking in waifs and strays to indoctrinate into their order. One, Brother Timothy, rescues Artyom, but Artyom soon grows bored of the hypocritical ramblings of the priest."
    }, {
      factionId: 0,
      factionName: "VDNKh Commonwealth",
      factionDescription: "ne of the youngest factions in the Metro, the VDNKh Commonwealth is an alliance between VDNKh, Alexeyevskaya and Rizhskaya to monopolise the station's tea production and prevent annexation by Hansa. A strong faction, with schools, a library and a decent security force, the VDNKh Commonwealth will likely grow into a powerful faction. Their only major enemies are the Dark Ones."
    }, {
      factionId: 0,
      factionName: "Bandits",
      factionDescription: "Bandits is the catchall term for loosely organised gangs and thugs. Controlling certain stations throughout the Metro system, though rarely more than one, bandits are known to rob and murder defenceless travellers in the tunnels, taking their goods to sell on. However, some 'bandits' are simply lawless factions, such as those ruling Venice or Kitai-Gorod, and are not as extreme as other bandits. Although their businesses may be lucrative, and they are not afraid to kill to get what they want, they are not openly hostile. Many bandit factions are also rumoured to create and sell poor quality or fake merchandise to gullible travellers, often for the same price as a genuine copy."
    }
  ];

  this.getList = function() {
    return this._factions;
  };

  this.getById = function(factionId) {
    return this._factions.findByProperty('factionId', factionId);
  };
});
