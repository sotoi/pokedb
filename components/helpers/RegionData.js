const RegionData = [
  {
    name: `Kanto`,
    image: `https://archives.bulbagarden.net/media/upload/2/25/LGPE_Kanto_Map.png`,
    description: `The Kanto region (Japanese: カントー地方 Kanto region) is a region of the Pokémon world. Kanto is located east of Johto, which together form a joint landmass that is south of Sinnoh.

  Kanto is the setting of the first generation of games and can be explored in generations II, III, IV, and VII.

  Professor Oak is the resident Pokémon Professor and gives Pokémon Trainers a choice between Bulbasaur, Charmander, or Squirtle as their starter Pokémon. In Pokémon Yellow, the only choice is a Pikachu that he recently caught, although he did have an Eevee. In Let's Go, Pikachu!, the player chooses Pikachu. In Let's Go, Eevee!, the player chooses Eevee. In the games, the player begins their journey in Pallet Town and ends it at Indigo Plateau.

  The artwork from the early games depict Kanto as grassland. Starting in Generation III, it is shown with denser tree coverage.

  All cities in Kanto are named after colors, with the exception of Pallet Town, which refers to a palette, meaning a range of colors. Unlike every other region, Kanto's fictional name reflects its real-world name.`,
    professor: `Oak`,
    starters: [
      { name: `bulbasaur`, id: 1 },
      { name: `charmander`, id: 4 },
      { name: `squirtle`, id: 7 },
      { name: `pikachu`, id: 25 },
      { name: `eevee`, id: 133 },
    ],
  },
  {
    name: `Johto`,
    image: `https://archives.bulbagarden.net/media/upload/6/64/JohtoMap.png`,
    description: `The Johto region (Japanese: ジョウト地方 Johto region) is a region of the Pokémon world. Johto is located west of Kanto, which together form a joint landmass that is south of Sinnoh and Sinjoh Ruins.

  It was the second core series region to be introduced. First explored in Pokémon Gold and Silver, it is home to an additional 100 Pokémon that were not present in the previous games. It is also the setting of Pokémon Crystal, Pokémon HeartGold, and Pokémon SoulSilver.

  Players begin their journey in New Bark Town, where Professor Elm offers either Chikorita, Cyndaquil, or Totodile to beginning Pokémon Trainers.

  The English-version names of most of the cities in Johto are names of plants or things related to plants.`,
    professor: `Elm`,
    starters: [
      { name: `chikorita`, id: 152 },
      { name: `cyndaquil`, id: 155 },
      { name: `totodile`, id: 158 },
    ],
  },
  {
    name: `Hoenn`,
    image: `https://archives.bulbagarden.net/media/upload/8/85/Hoenn_ORAS.png`,
    description: `The Hoenn region (Japanese: ホウエン地方 Hoenn region) is a region of the Pokémon world. It is located south of Sinnoh, as stated in The Unbeatable Lightness of Seeing!. It is the setting of Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha Sapphire. It was the third core series region to be introduced.

  Hoenn is inspired by the real-world Japanese main island of Kyushu. The names of most of the cities in Hoenn are made of two words put together (Little Root, Fort Tree, Slate Port, Ever Grande, etc.) rather than colors or plants as Kanto and Johto had done. Professor Birch of Littleroot Town offers the starter Pokémon known as Treecko, Torchic, or Mudkip to Trainers beginning their journey of this vast land.`,
    professor: `Birch`,
    starters: [
      { name: `treecko`, id: 252 },
      { name: `torchic`, id: 255 },
      { name: `mudkip`, id: 258 },
    ],
  },
  {
    name: `Sinnoh`,
    image: `https://archives.bulbagarden.net/media/upload/0/08/Sinnoh_BDSP_artwork.png`,
    description: `The Sinnoh region (Japanese: シンオウ地方 Sinnoh region), formerly known as Hisui (Japanese: ヒスイ地方 Hisui region), is a region of the Pokémon world. It is located north of Kanto,[1] Johto,[1] and Hoenn.[2] It is the setting of Pokémon Diamond, Pearl, Platinum, Brilliant Diamond, Shining Pearl, and Legends: Arceus; the latter explores the region's earlier history when it was still known as Hisui. It was the fourth core series region to be introduced.

  Sinnoh is composed of the large mainland, the Battle Zone on another landmass to the northeast, and several smaller islands on both sides of the region. Most of Sinnoh's routes are on land, having very few water routes, in vast contrast to Hoenn. The region is divided by Mount Coronet, roughly comparable to how the continent that Kanto and Johto make up is essentially a contiguous region.`,
    professor: `Rowan`,
    starters: [
      { name: `turtwig`, id: 387 },
      { name: `chimchar`, id: 390 },
      { name: `piplup`, id: 393 },
    ],
  },
  {
    name: `Unova`,
    image: `https://archives.bulbagarden.net/media/upload/f/fc/Unova_B2W2_alt.png`,
    description: `The Unova region (Japanese: イッシュ地方 Isshu region) is a region of the Pokémon world. It is the setting of Pokémon Black and White and Pokémon Black 2 and White 2. It was the fifth core series region to be introduced.

  Unova is far away from the four other large regions, and the Pokémon which inhabit Unova are diverse and different from those of Kanto, Johto, Hoenn, and Sinnoh. In his director's column, Junichi Masuda suggested that the geographical and social background for Unova draws inspiration from the New York City metropolitan area.[1][2] Although it is geographically based on New York City, it draws inspiration for its landmarks from the entire state of New York, which features a mixture of rural locations and urban areas as well as factory towns and industrial complexes.`,
    professor: `Juniper`,
    starters: [
      { name: `snivy`, id: 495 },
      { name: `tepig`, id: 498 },
      { name: `oshawott`, id: 501 },
    ],
  },
  {
    name: `Kalos`,
    image: `https://archives.bulbagarden.net/media/upload/8/8a/Kalos_alt.png`,
    description: `The Kalos region (Japanese: カロス地方 Kalos region) is a region of the Pokémon world. It was the sixth core series region to be introduced and is the setting of Pokémon X and Y.

  It is shaped like a five-pointed star, with one of its biggest cities being Lumiose City in the north-central part of the region. It features a vast network of rivers and waterways snaking through much of its landscape, cities and towns. North-east of Lumiose City lies a mountain range where more frigid temperatures exist, extending down into the plains below. Western Kalos features a vast ocean, where the shoreside city of Shalour City lies in the middle of a cove.`,
    professor: `Sycamore`,
    starters: [
      { name: `chespin`, id: 650 },
      { name: `fennekin`, id: 653 },
      { name: `froakie`, id: 656 },
    ],
  },
  {
    name: `Alola`,
    image: `https://archives.bulbagarden.net/media/upload/0/0b/Alola_USUM_artwork.png`,
    description: `The Alola region (Japanese: アローラ地方 Alola region) is a region of the Pokémon world. It was the seventh core series region to be introduced and is the setting of Pokémon Sun, Moon, Ultra Sun, and Ultra Moon.

  Alola is made up of five islands: the natural islands Melemele Island, Akala Island, Ula'ula Island, and Poni Island; and the artificial island Aether Paradise. It is a popular resort destination and attracts a lot of tourists from other regions. In Alola, humans and Pokémon coexist in a very close relationship, and a culture has developed that is different from other regions.`,
    professor: `Kubui`,
    starters: [
      { name: `rowlet`, id: 722 },
      { name: `litten`, id: 725 },
      { name: `popplio`, id: 728 },
    ],
  },
  {
    name: `Galar`,
    image: `https://archives.bulbagarden.net/media/upload/c/ce/Galar_artwork.png`,
    description: `The Galar region (Japanese: ガラル地方 Galar region) is a region of the Pokémon world, and the eighth core series region to be introduced. It is the setting of Pokémon Sword and Shield. \n Galar may have been derived from gallant, gala (a special occasion), or Galahad. It may also come from an anagram of San-Graal, the French name of the Holy Grail. Another possible etymology may be galar, Irish and Scottish Gaelic for "disease," in reference to either Dynamax and Eternatus or one of Britain's nicknames, Blighty. `,
    professor: `Magnolia`,
    starters: [
      { name: `grookey`, id: 810 },
      { name: `scorbunny`, id: 813 },
      { name: `sobble`, id: 816 },
    ],
  },
];

export default RegionData;
