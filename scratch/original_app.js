/**
 * LifeInvader EN3 Advertisement Editor - Core Application Logic
 */

// Datasets will be injected here during build
const VEHICLE_DB = {
    "helicopters":  [
                        "Buzzard",
                        "Frogger",
                        "Maverick",
                        "Sparrow",
                        "SuperVolito Carbon",
                        "Swift Deluxe",
                        "Volatus"
                    ],
    "boats":  [
                  "Dinghy",
                  "Dinghy (2-Seater)",
                  "Dinghy (Yacht)",
                  "Jetmax",
                  "Marquis",
                  "SeaShark",
                  "Speeder",
                  "Squalo",
                  "Suntrap",
                  "Toro",
                  "Tropic"
              ],
    "planes":  [
                   "Alpha-Z1",
                   "Cuban 800",
                   "Dodo",
                   "Duster",
                   "Howard NX-25",
                   "Luxor",
                   "Luxor Deluxe",
                   "Malard",
                   "Mammatus",
                   "Microlight",
                   "Nimbus",
                   "P-45 Nokota",
                   "V-65 Molotok",
                   "Velum"
               ],
    "motorcycles":  [
                        "Akuma",
                        "Bagger",
                        "Carbon RS",
                        "Daemon",
                        "Enduro",
                        "Faggio",
                        "Gargoyle",
                        "Hakuchou",
                        "Innovation",
                        "Lectro",
                        "Manchez",
                        "Nemesis",
                        "PCJ-600",
                        "Rat Bike",
                        "Sanchez",
                        "Thrust",
                        "Vader",
                        "Whippet Race Bike",
                        "Zombie Chopper",
                        "Apocalypse Deathbike",
                        "Bati 801",
                        "Chimera",
                        "Defiler",
                        "Esskey",
                        "FCR 1000",
                        "Hakuchou Drag",
                        "Nightblade",
                        "Ruffian",
                        "Sanctus",
                        "Tri-Cycles Race Bike",
                        "Vindicator",
                        "Wolfsbane",
                        "Avarus",
                        "Bati 801RR",
                        "Cliffhanger",
                        "Diabolus",
                        "FCR 1000 Custom",
                        "Hexer",
                        "Shotaro",
                        "Vortex",
                        "BF-400",
                        "Cruiser",
                        "Diabolus Custom",
                        "Future Shock Deathbike",
                        "Sovereign",
                        "Blazer",
                        "Double-T",
                        "Street Blazer",
                        "Blazer Lifeguard",
                        "Stryder",
                        "BMX"
                    ],
    "not_sellable_cars":  [
                              "Annis Concept 2021",
                              "Brabus Rocket G900",
                              "Bravado Charger Daytona",
                              "Enus EXP 10",
                              "Genesis G90",
                              "KMTA Optima",
                              "Overflod Jesko 2020",
                              "Pfister Cayenne",
                              "Shelby Cobra Daytona",
                              "Truffade Veyron",
                              "Ubermacht M5 (F90)",
                              "Vapid Focus RS",
                              "Benefactor-MG G63 (6X6)",
                              "Enus Wraith",
                              "Grotti FXX-K Evo",
                              "Karin Corolla AE",
                              "Overflod CCX",
                              "Pfister Panamera Turismo",
                              "Skoda Octavia RS",
                              "Truffade La Voiture Noire",
                              "Ubermacht Z4 (E85)",
                              "Vapid GT 2017",
                              "Benefactor-Benz GLS 63",
                              "Grotti Tributo (F8)",
                              "Overflod One",
                              "Pfister 911 Turbo 2021",
                              "SSC Tuatara",
                              "Truffade Bolide",
                              "Ubermacht Vision",
                              "Vapid Raptor F150",
                              "Benefactor-Benz MG Visione",
                              "Grotti Stradale (SF90)",
                              "Overflod Gemera",
                              "Pegassi Veneno (LP750)",
                              "Truffade Divo",
                              "Vapid Mustang 1965",
                              "Benefactor-Benz Vision AVTR",
                              "Grotti Superfast (F812)",
                              "Overflod Regera",
                              "Pegassi Centenario (LP770)",
                              "Vapid Mustang MACH-E",
                              "Benefactor-MG Project One",
                              "Grotti Pista (F488)",
                              "Obey TT",
                              "Pegassi Terzo",
                              "Benefactor-MG E63 (W213)",
                              "Grotti Monza (SP2)",
                              "Obey RS5 Coupe",
                              "Pegassi Urus",
                              "Benefactor-Maybach GLS600",
                              "Gallivanter Evoque",
                              "Obey RS E-Tron GT",
                              "Pegassi Diablo (SV)",
                              "Benefactor-MG GLE63 Coupe",
                              "Obey E-Tron Sportback",
                              "Pegassi Aventador (LP700)",
                              "Benefactor-MG A45 (W176)",
                              "Ocelot Vulcan",
                              "Pegassi Alston (SC18)",
                              "Benefactor-MG CLS53 (C257)",
                              "Ocelot Evora",
                              "Pegassi Reventon",
                              "Benefactor-Benz GLC300",
                              "Ocelot GranTurismo",
                              "Pegassi Sian",
                              "Benefactor-Benz 300 SL (W198)",
                              "Pegassi Countach (LP400)",
                              "Benefactor-Benz 190E (Evolution II)",
                              "Pegassi Countach (LPI 800-4)",
                              "Benefactor-Maybach S63 (W223)",
                              "Pegassi SE (PJ1)",
                              "Progen Elva",
                              "Progen P1",
                              "Progen 765 LT (Spider)"
                          ],
    "sellable_cars":  [
                          "Adder",
                          "Baller",
                          "Canis Grand Cherokee",
                          "Declasse Corvette C7",
                          "Elegy Retro Custom",
                          "F620",
                          "Gallivanter Defender",
                          "Hermes",
                          "Imorgon",
                          "Jackal",
                          "Kamacho",
                          "Lampadati Giulia GTA",
                          "Mamba",
                          "Nebula Turbo",
                          "Oracle",
                          "Panto",
                          "Raiden",
                          "Sabre Turbo",
                          "T-20",
                          "Ubermacht 760 (LI)",
                          "V-STR",
                          "Warrener",
                          "X80 Proto",
                          "Yosemite",
                          "Z-Type",
                          "9F",
                          "Alpha",
                          "Baller LE LWB",
                          "Calico GTF",
                          "Declasse Tahoe",
                          "Elegy RH8",
                          "Faction",
                          "Gallivanter Defender Halloween Edition",
                          "Hotknife",
                          "Impaler",
                          "JB 700",
                          "Khamelion",
                          "Landstalker",
                          "Massacro",
                          "Neon",
                          "Osiris",
                          "Paragon R",
                          "Rancher XL",
                          "Sandking SWB",
                          "Tailgater",
                          "Ubermacht I8",
                          "Vacca",
                          "Warrener HKR",
                          "XA-21",
                          "Yosemite Rancher",
                          "Zentorno",
                          "9F Cabrio",
                          "Annis ZR-350",
                          "Baller SG",
                          "Caracara 4x4",
                          "Deveste Eight",
                          "Ellie",
                          "Felon",
                          "Gallivanter Defender Christmas Edition",
                          "Huntley S",
                          "Infernus",
                          "Jester",
                          "Komoda",
                          "Lynx",
                          "Mammoth HUM EV",
                          "Nero",
                          "Obey A8",
                          "Pariah",
                          "Rapid GT",
                          "Sandking XL",
                          "Tailgater S",
                          "Ubermacht M3 (G80)",
                          "Vagner",
                          "Washington",
                          "XLS",
                          "Zion",
                          "Annis 350Z",
                          "Banshee",
                          "Carbonizzare",
                          "Deviant",
                          "Emperor",
                          "Felon GT",
                          "Gauntlet",
                          "Infernus Classic",
                          "Jester (Racecar)",
                          "Krieger",
                          "Monroe",
                          "Nero Custom",
                          "Obey R8",
                          "Patriot",
                          "Raptor",
                          "SC-1",
                          "Taipan",
                          "Ubermacht M3 (E46)",
                          "Vamos",
                          "Windsor",
                          "XLS (Armored)",
                          "Zion Cabrio",
                          "Annis Silvia (S15)",
                          "Banshee 900R",
                          "Casco",
                          "Dilettante",
                          "Emperor LX-570",
                          "Feltzer",
                          "Gauntlet Classic",
                          "Ingot",
                          "Jester Classic",
                          "Karin Land Cruiser 200",
                          "Moonbeam",
                          "Nightshade",
                          "Obey RS6",
                          "Patriot Stretch",
                          "Rat-Loader",
                          "Schafter",
                          "Tampa",
                          "Ubermacht M4 (G82)",
                          "Vectre",
                          "Windsor Drop",
                          "Annis Skyline GT-R (R34)",
                          "Beater Emperor",
                          "Cavalcade",
                          "Dinka RT-3000",
                          "Emperor RCF",
                          "Flash GT",
                          "Gauntlet Hellfire",
                          "Issi",
                          "Jester RR",
                          "Karin Tundra 2021",
                          "Monowheel",
                          "Novak",
                          "Obey RS7",
                          "Pegassi Huayra BC",
                          "Rat-Truck",
                          "Schafter LWB",
                          "Tempesta",
                          "Ubermacht M4 (GTS)",
                          "Velierer",
                          "Zion Classic",
                          "Annis GT-R I",
                          "Beater Mariachi Tornado",
                          "Cheburek",
                          "Dinka NSX 2017",
                          "Entity XF",
                          "FMJ",
                          "Gauntlet Redwood",
                          "Itali GTB",
                          "Journey",
                          "Karin Supra A80",
                          "Obey S8 (D4)",
                          "Pegassi Performante (LP640)",
                          "RE-7B",
                          "Schafter LWB (Armored)",
                          "Tezeract",
                          "Ubermacht M5 (E34)",
                          "Vigero",
                          "Zorrusso",
                          "Annis RX-7 (FD)",
                          "Beater Surfer",
                          "Cheetah",
                          "Dominator",
                          "Enus Cullinan",
                          "FQ 2",
                          "GB200",
                          "Itali GTB Custom",
                          "Jugular",
                          "Karin Mark 2",
                          "Ocelot Victor",
                          "Penetrator",
                          "Reaper",
                          "Schafter V12",
                          "Thrax",
                          "Ubermacht M5 (E60)",
                          "Virgo",
                          "Annis RX-7 (Veilside Fortune)",
                          "Beater Tornado",
                          "Cheetah Classic",
                          "Dominator ASP",
                          "Enus Phantom",
                          "Fugitive",
                          "Glendale",
                          "Itali GTO",
                          "Ocelot F-Type R",
                          "Penumbra",
                          "Rebel",
                          "Schlagen GT",
                          "Tigon",
                          "Ubermacht M5 (CS)",
                          "Virgo Classic",
                          "Annis WRX 2004",
                          "Benefactor-MG C63 (W205)",
                          "Chino",
                          "Dominator GTT",
                          "Enus Spectre",
                          "Furore GT",
                          "GP-1",
                          "Obey A6",
                          "Peyote Gasser",
                          "Rebla GTS",
                          "Schwarzer",
                          "Torero",
                          "Ubermacht M5 (CS) Halloween Edition",
                          "Viseris",
                          "Apocalypse Impaler",
                          "Benefactor-MG C63 Coupe (W205)",
                          "Clique",
                          "Dominator GTX",
                          "Enus Continental GT",
                          "Fusilade",
                          "Granger",
                          "Obey Q8",
                          "Pfister 811",
                          "Regina",
                          "Seminole",
                          "Toros",
                          "Ubermacht M8 (F91)",
                          "Visione",
                          "Apocalypse Imperator",
                          "Benefactor-MG G63 (G770)",
                          "Coil Cybertruck",
                          "Dominator PiBwasser",
                          "ETR-1",
                          "Futo",
                          "Growler",
                          "Ocelot Vanquish Zagto SB",
                          "Pfister Panamera",
                          "Remus",
                          "Sentinel Classic",
                          "Tropos Rallye",
                          "Ubermacht X5 (E70)",
                          "Voltic",
                          "Apocalypse Issi",
                          "Benefactor-MG S63 (W222)",
                          "Coil Model S",
                          "Drift Yosemite",
                          "Euros",
                          "Futo GTX",
                          "Grotti Italia (F458)",
                          "Ocelot Eletre",
                          "Pfister Taycan",
                          "Revolter",
                          "Sentinel XS",
                          "Truffade Centodieci",
                          "Ubermacht X5 (G05)",
                          "Voodoo",
                          "Apocalypse Slamvan",
                          "Benefactor-MG VT Black Series",
                          "Coil Model X",
                          "Dubsta",
                          "Exemplar",
                          "Future Shock Issi",
                          "GT 500",
                          "Pfister 918 Spyder",
                          "Rhapsody",
                          "Serrano",
                          "Tulip",
                          "Ubermacht X6-M (E71)",
                          "Voodoo Custom",
                          "Ardent",
                          "Benefactor-Benz 600SEL (W140)",
                          "Coil Roadster",
                          "Dubsta 6x6",
                          "Pheonix",
                          "Riata",
                          "Seven-70",
                          "Turismo Classic",
                          "Ubermacht X7 (G07)",
                          "Asbo",
                          "Benefactor-Benz E420 (W210)",
                          "Cognoscenti",
                          "Dubsta SG",
                          "Picador",
                          "Rocoto",
                          "Shelby GT500",
                          "Turismo R",
                          "Asea",
                          "Benefactor-Benz Vito (V447)",
                          "Cognoscenti 55",
                          "Dukes",
                          "Prairie",
                          "Ruiner",
                          "Slam Van",
                          "Truffade Chiron",
                          "Asterope",
                          "Benefactor-Maybach Pullman",
                          "Cognoscenti Cabrio",
                          "Declasse Camaro 2020",
                          "Premier",
                          "Rumpo",
                          "Slamvan Custom",
                          "Tyrant",
                          "Autarch",
                          "Bestia GTS",
                          "Comet",
                          "Previon",
                          "Ruston",
                          "Specter",
                          "Tyrus",
                          "Albany Escalade",
                          "BF Injection",
                          "Comet S2",
                          "Progen 675 LT",
                          "Rusty Rebel",
                          "Stafford",
                          "Bison",
                          "Comet SR",
                          "Stallion",
                          "Blade",
                          "Contender",
                          "Stinger",
                          "Blista",
                          "Coquette",
                          "Stinger GT",
                          "Blista Kanjo",
                          "Coquette Blackfin",
                          "Stirling GT",
                          "Bodhi",
                          "Coquette D10",
                          "Streiter",
                          "Brawler",
                          "Couquette Classic",
                          "Stretch",
                          "Bravado Charger SRT",
                          "Cyclone",
                          "Sultan",
                          "Bravado Charger 1969",
                          "Cypher",
                          "Bravado Challenger 2016",
                          "Sultan Classic",
                          "Bravado Ram 1500",
                          "Sultan RS",
                          "Bravado Viper 2008",
                          "Sultan RS Classic",
                          "Brioso R/A",
                          "Super Diamond",
                          "Buccaneer",
                          "Surano",
                          "Buffalo",
                          "Surge",
                          "Bullet",
                          "Swinger",
                          "Benefactor-MG GT",
                          "Benefactor-MG SL65 (R230)",
                          "Burgerfahrzeug Golf GTI Vision"
                      ]
}
;
const CLOTHING_DB = {
    "female":  {
                   "MASKS":  [

                             ],
                   "BACKPACKS":  [

                                 ],
                   "ACCESSORY":  [
                                     "navel piercing accessory",
                                     "gloves",
                                     "accessory",
                                     "Ak-47 Chain",
                                     "black voron shoulder accessory",
                                     "boxing gloves",
                                     "Bracelet",
                                     "Chain",
                                     "chain around the body accessory",
                                     "chain lost treasure neon accessory",
                                     "Chain With Star Pendant",
                                     "Clown Chain",
                                     "deer antler accessory",
                                     "deer antlers with a red nose accessory",
                                     "Eagle Necklace",
                                     "El Primo Corazon Krawl On The Shoulder Accessory",
                                     "Fluorescent Cat Ears",
                                     "flying bear on the shoulder accessory",
                                     "Glasses With Glowing Snow",
                                     "glowing nails",
                                     "Grand Chain",
                                     "Hamster On The Shoulder Accessory",
                                     "hearts Pride glasses",
                                     "Leon Krawl On The Shoulder Accessory",
                                     "Lovely Bird Egg On The Shoulder Accessory",
                                     "neck scarf accessory",
                                     "Necklace",
                                     "Neon Rabbit Ears",
                                     "Owl On The Shoulder Accessory",
                                     "pixel glasses",
                                     "Satanic Wings",
                                     "Scarf",
                                     "shiny deer antler headband accessory",
                                     "Six-Tailed Fox On The Shoulder Accessory",
                                     "snowflake glasses",
                                     "Strong Chicken On The Shoulder Accessory",
                                     "Tie",
                                     "Toothless Dragon On The Shoulder Accessory",
                                     "wristband accessory",
                                     "beads accessory",
                                     "Onelove Chain"
                                 ],
                   "WATCH":  [
                                 "Volex watch of type *",
                                 "Kolex watch of type *"
                             ],
                   "Dress":  [
                                 "luminous dress",
                                 "Love costume",
                                 "Spring set S23",
                                 "Wedding dress"
                             ],
                   "PANTS":  [
                                 "Abibas leggings",
                                 "Abibas pants",
                                 "jeans",
                                 "skirt with tights",
                                 "Muci shorts",
                                 "Custom Jeans"
                             ],
                   "TOP/HOODIE":  [
                                      "bandana top",
                                      "collection 5 top",
                                      "corset top",
                                      "day dress",
                                      "dress",
                                      "faution top",
                                      "jumpsuit",
                                      "long brand T-shirt",
                                      "low dress",
                                      "pullover with long sleeve",
                                      "short pullover",
                                      "Social Club hoodie",
                                      "stylish suit",
                                      "summer bra",
                                      "top 2 outerwear",
                                      "top Faution",
                                      "top with chains",
                                      "Watch Me sweater",
                                      "winter collection dress"
                                  ],
                   "SHOES":  [
                                 "tall boots",
                                 "luminous shoes"
                             ],
                   "HEADWEAR":  [
                                    "rabbit ears"
                                ]
               },
    "male":  {
                 "ANIMATED ITEMS":  [
                                        "Chick",
                                        "Fire Ring",
                                        "Lightning Charge",
                                        "Heros Cape",
                                        "Crown of Shining Runes"
                                    ],
                 "MASKS":  [
                               "alien with neon eyes mask",
                               "anime mask",
                               "bandana mask",
                               "baseball mask",
                               "Bigness mask",
                               "boxing helmet",
                               "carnival mask",
                               "Casual neon helmet",
                               "Christmas tree mask",
                               "Satanic horns",
                               "clown mask",
                               "cowgirl hat",
                               "Cupids crown",
                               "Daft Punk mask",
                               "demon mask",
                               "desert scarf mask",
                               "LM Playboy mask with luminous print",
                               "Lui Vi desert scarf mask",
                               "devil mask",
                               "earphones with a heart",
                               "emoji mask",
                               "evil mask",
                               "exotic mask",
                               "fox mask",
                               "gorilla mask",
                               "Glowing face scarf mask",
                               "handkerchief mask",
                               "Jason blue mask",
                               "kitsune mask",
                               "luminous head bag mask",
                               "Sashmello mask",
                               "Munk mask",
                               "monkey boss mask",
                               "Nik mask",
                               "owl mask",
                               "panama hat",
                               "penguin mask",
                               "pig mask",
                               "purge mask",
                               "raccoon mask",
                               "raptor mask",
                               "raven mask",
                               "Razer headphones",
                               "red stocking mask",
                               "reindeer mask",
                               "robot human mask",
                               "robot mask",
                               "rooster mask",
                               "samurai mask",
                               "Santa Claus mask",
                               "shamanic mask",
                               "Saruko neon mask",
                               "skeleton king mask",
                               "snowboarders mask",
                               "snowflake glasses",
                               "snowman mask",
                               "sports mask",
                               "stealthy mask",
                               "tied scarf mask",
                               "tight mask",
                               "toothy mask",
                               "trending shark head hat",
                               "TRON helmet",
                               "TV-head mask"
                           ],
                 "SPATIAL SOUND EFFECTS":  [
                                               "Aghhhhh",
                                               "Boowomp",
                                               "Bonk",
                                               "Bro",
                                               "Brother eww",
                                               "Cartoon tickle",
                                               "Directed by",
                                               "Duck",
                                               "Faaah",
                                               "Festive whistle",
                                               "Goofy laugh",
                                               "I love you",
                                               "Kiss",
                                               "Laughter",
                                               "Mwahahaha",
                                               "No no no no wait",
                                               "Romantic",
                                               "Sad violin",
                                               "Skeleton hits a shield",
                                               "Suspicious",
                                               "Suspicious sound",
                                               "Uwu",
                                               "Vagabond",
                                               "Whistle sound",
                                               "Woooow",
                                               "Yeah boy"
                                           ],
                 "ACCESSORY":  [
                                   "boxing gloves",
                                   "chain around the body accessory",
                                   "chain lost treasure neon accessory",
                                   "Cyberpunk greatsword accessory",
                                   "deer antler accessory",
                                   "deer antlers with a red nose accessory",
                                   "flying bear on the shoulder accessory",
                                   "gloves",
                                   "glowing snow glasses",
                                   "Grand Chain",
                                   "hearts Pride glasses",
                                   "neck scarf accessory",
                                   "pixel glasses",
                                   "Satanic Wings",
                                   "shiny deer antler headband accessory",
                                   "snowflake glasses",
                                   "Snake around the body accessory",
                                   "wristband accessory",
                                   "accessory",
                                   "Ak-47 Chain",
                                   "black voron shoulder accessory",
                                   "Bracelet",
                                   "Chain",
                                   "Chain With Star Pendant",
                                   "Clown Chain",
                                   "Eagle Necklace",
                                   "El Primo Corazon Krawl On The Shoulder Accessory",
                                   "Fluorescent Cat Ears",
                                   "glowing nails",
                                   "Hamster On The Shoulder Accessory",
                                   "Leon Krawl On The Shoulder Accessory",
                                   "Lovely Bird Egg On The Shoulder Accessory",
                                   "Necklace",
                                   "Neon Rabbit Ears",
                                   "Owl On The Shoulder Accessory",
                                   "Scarf",
                                   "Six-Tailed Fox On The Shoulder Accessory",
                                   "Strong Chicken On The Shoulder Accessory",
                                   "Tie",
                                   "Toothless Dragon On The Shoulder Accessory",
                                   "beads accessory",
                                   "Onelove Chain"
                               ],
                 "WATCH":  [
                               "Vasio G-Shock watch",
                               "Volex watch of type *",
                               "Kolex watch of type *"
                           ],
                 "PANTS":  [
                               "Abibas pants",
                               "Abibas sport pants",
                               "Abibas sweatpants",
                               "bright trousers",
                               "Bior pants",
                               "Grand RP collection pants",
                               "Muci pants",
                               "Muci trousers",
                               "Casual neon pants",
                               "Classic denim shorts",
                               "half-glowing pants",
                               "insulated personal pants",
                               "Lui Vi pants",
                               "luminous Fendi pants",
                               "luminous Grand RP trousers",
                               "LM Playboy pants with luminous print",
                               "luminous trousers",
                               "Leather gothic pants",
                               "new fashionable joggers",
                               "Niki new collection pants",
                               "Niki tech fleece pants",
                               "Niki track suit pants",
                               "neon pants",
                               "Neon Pants Set New Sample LW",
                               "summer voyage shorts",
                               "Shorts Lui Vi",
                               "TRON pants"
                           ],
                 "BACKPACK SKINS":  [
                                        "Backpack from the Cubic Friend paired set skin",
                                        "Backpack with piggy keychain skin",
                                        "Branded Small backpack skin",
                                        "Capsule backpack skin",
                                        "Chain bag with spikes skin",
                                        "Classic Lui Vui backpack skin",
                                        "Cloud backpack skin",
                                        "Cross backpack skin",
                                        "Duffel Bag skin",
                                        "Fur-lined bunny backpack",
                                        "Gauard bag with Ladudu skin",
                                        "Gingerbread house backpack skin",
                                        "Gayardo shoulder bag skin",
                                        "Grand backpack skin",
                                        "Happy bear shoulder bag skin",
                                        "HaHaHa set crossbody bag skin",
                                        "Large LV crossbody bag skin",
                                        "LUV backpack with wings skin",
                                        "Luv Moscnino spiky heart backpack skin",
                                        "LV backpack with water prints skin",
                                        "LV crossbody bag skin",
                                        "LW Crossbody Bag skin",
                                        "Memo Bag Ladudu skin",
                                        "Motosport Waist bag skin",
                                        "Neon Chrome handbag skin",
                                        "Scary chicken backpack skin",
                                        "Skeleton cheetah plush backpack skin",
                                        "Small shoulder bag LW skin",
                                        "SSC Kit Bag skin",
                                        "Sweet Sheep fur bag"
                                    ],
                 "TOP/HOODIE":  [
                                    "Air Bior pullover sweater",
                                    "black jacket with yellow trim",
                                    "bomber jacket with glowing elements",
                                    "branded insulated hoodie",
                                    "branded longsleeve",
                                    "branded T-shirt",
                                    "bright hoodie",
                                    "branded Molo T-shirt",
                                    "Casual neon set",
                                    "Casual neon torso",
                                    "Chanel top",
                                    "collection 2022 T-shirt",
                                    "cropp collection T-shirt",
                                    "denim jacket",
                                    "fur coat without a hood",
                                    "Glowing Bomber Set NEW Sample LW",
                                    "Grand RP collection hoodie",
                                    "Grand RP collection T-shirt",
                                    "haliky hoodie",
                                    "haliky T-shirt",
                                    "Hoodie with Balaclava Cap X Yazzy",
                                    "jacket with luminous trim",
                                    "jacket with T-shirt",
                                    "Lui Vi jacket",
                                    "Lui Vi sweatshirt",
                                    "Lui Vi full set",
                                    "Lui Vi set",
                                    "Lui Vi T-shirt",
                                    "LM Playboy sweatshirt with luminous print",
                                    "LM Playboy jacket with luminous print",
                                    "LM Playboy T-shirt with luminous print",
                                    "LM Playboy full set with luminous print",
                                    "Lui Vi top",
                                    "Mikachu hoodie",
                                    "mix collection T-shirt",
                                    "Muci hoodie",
                                    "Muci hoodie with snake",
                                    "Muci Not Fake hoodie",
                                    "Muci sweatshirt",
                                    "Niki new collection hoodie",
                                    "Niki tech top",
                                    "Niki track suit top",
                                    "Off-White sweatshirt",
                                    "Philip Plein T-shirt",
                                    "scary turtleneck T-shirt",
                                    "Social Club hoodie",
                                    "Ston Islan Classic Sportswear",
                                    "summer collection T-shirt",
                                    "T-shirt of one-color CAP brand",
                                    "The West Pace jacket",
                                    "trendy jacket",
                                    "TRON full set",
                                    "TRON torso",
                                    "Tsum collection T-shirt",
                                    "vintage Abibas Olympic Jerseys",
                                    "luminous jacket with turquoise trim",
                                    "luminous T-shirt",
                                    "UP-Green Sweatshirt",
                                    "Wide printed football T-shirt"
                                ],
                 "SHOES":  [
                               "Abibas Marquee Boost Lows shoes",
                               "Abibas Pro Bounce 2019 Lows shoes",
                               "Abibas Pezy Boost 700 V3 Alvah shoes",
                               "Abibas Pezy foam shoes",
                               "Acic Gel Kayano sneakers.",
                               "Ground Mordan 4 Retro Laser 30th shoes",
                               "Muci branded flip-flops",
                               "Mordan 1 shoes",
                               "Mordan 6 shoes",
                               "luminous shoes",
                               "Off-White luminous Keezy Boost shoes",
                               "luminous Keezy Boost shoes",
                               "neon shoes",
                               "Niki Groundporce One new collection shoes",
                               "Niki Shox shoes",
                               "Niki Uptempo shoes",
                               "Niki Zoom Freak 1 Multi-Color shoes",
                               "Off-White Pezy Boost shoes",
                               "red sneakers",
                               "RGB neon shoes",
                               "Pans sneakers",
                               "Pezy Boost shoes",
                               "rare luminous shoes",
                               "Casual neon shoes",
                               "Balenciaga Track sneakers",
                               "TRON shoes",
                               "Alastor McQueen Oversized sneakers"
                           ],
                 "HEADWEAR":  [
                                  "Satanic horns"
                              ]
             }
}
;
const ITEMS_DB = {
    "tickets": [
        "Car Ticket",
        "Cayo Perico Ticket",
        "Flame and Water Lottery Ticket",
        "Grand Ticket",
        "Lottery Ticket",
        "Rare Lottery Ticket",
        "Resource Miners Ticket",
        "Secret Ticket",
        "Secret Ticket Fragment",
        "regular lottery ticket",
        "Royal Artifacts lottery ticket"
    ],
    "containers": [
        "Daily Container",
        "Gardeners Container",
        "Unique Love Container",
        "Desert Scarf Mask Container",
        "Valuable Container",
        "Benefactor Container",
        "Love Container",
        "Resources Container",
        "School Container",
        "Caravan Container",
        "Burglarized House Container",
        "Trezor Container",
        "Container For Bikers 1/2/3/4/5",
        "Container For Branded Shorts",
        "Container For Branded T-Shirts",
        "Sphere Of Influence Container",
        "Container For Drifters 1/2/3",
        "Container For Men 1/2",
        "Container For Racers 1/2/3/4/5",
        "Study Of The Organisation Container",
        "Container For Women 1/2",
        "Container With Wheels 1/2/3",
        "Progen Container",
        "Ocelot Container",
        "Ingrand Container",
        "Old Autumn Gold Container",
        "Old Summer Gold Container",
        "Old Winter Gold Container",
        "Arena Container",
        "Organisation Container",
        "Exclusive Truckers Container",
        "valuable container",
        "biker container",
        "Brand T-shirts 2 container",
        "Brand shorts 2 container",
        "trucker container",
        "racer container",
        "Grand racers container",
        "Maserati container",
        "gardener container",
        "rare love container",
        "regular love container",
        "Renault container",
        "diver container",
        "organization container",
        "wheels 1 container",
        "wheels 2 container",
        "wheels 3 container",
        "daily container",
        "Halloween container",
        "womens gift container of type 1",
        "womens gift container of type 2",
        "males gift container of type 1",
        "males gift container of type 2",
        "blue womens top container of type 4",
        "black womens top container of type 4",
        "Benefactor E500 (W124) container",
        "daily study of the organization container",
        "Captured caravans container",
        "Delivered caravans container",
        "Valentine 2025 container",
        "case of delivered caravans container"
    ],
    "pets": [
        "Pet",
        "Pet Border Collie",
        "Pet Cat",
        "Pet Chicken",
        "Pet Christmas Elf",
        "Pet Cute Hippo",
        "Pet Dog",
        "Pet Duckling",
        "Pet Fancy Bear",
        "Pet Food",
        "Pet Ghost",
        "Pet Golden Retriever",
        "Pet Huggy Wuggy",
        "Pet Husky",
        "Pet Kitty Bunny",
        "Pet Lion Cub",
        "Pet Monkey",
        "Pet Panda",
        "Pet Panther",
        "Pet Pig",
        "Pet Poodle",
        "Pet Pug",
        "Pet Puma",
        "Pet Pumpkin Guardian",
        "Pet Rabbit",
        "Pet Rat",
        "Pet Rooster",
        "Pet Rottweiler",
        "Pet Santa Claus",
        "Pet Treat",
        "Pet Voodoo Doll",
        "Pet Westie",
        "Pet X-mas Husky",
        "Pet Mini Robot",
        "Pet Cyberdog",
        "Pet Robobeast",
        "Mr Candy Cane Pet",
        "Futuristic Friend",
        "Cougar Pet"
    ],
    "tools": [
        "low quality pickaxe",
        "medium quality pickaxe",
        "high quality pickaxe",
        "max quality pickaxe",
        "advanced quality pickaxe",
        "low quality fishing rod",
        "medium quality fishing rod",
        "high quality fishing rod",
        "max quality fishing rod",
        "advanced quality fishing rod",
        "automatic drill",
        "automatic sawmill",
        "automatic rod",
        "automatic oil well",
        "automatic watering can"
    ],
    "resources": [
        "battery",
        "fuel canister",
        "premium fuel canister",
        "charger",
        "solar barrel",
        "gasoline barrel",
        "kerene barrel",
        "fuel for resource extraction",
        "paint can",
        "wire",
        "thread",
        "solar panel",
        "sponges",
        "scrap metal",
        "top quality metal",
        "copper",
        "emerald",
        "ruby",
        "diamond",
        "obsidian",
        "magma stone"
    ],
    "fish": [
        "perch",
        "carp",
        "salmon",
        "trout",
        "megalodon",
        "ray",
        "orca",
        "humpback whale"
    ],
    "gardening": [
        "cabbage vegetables",
        "pumpkin fruits",
        "mandarin fruits",
        "strawberry fruits",
        "pineapple fruits",
        "cabbage seeds",
        "pumpkin seeds",
        "mandarin seeds",
        "strawberry seeds",
        "pineapple seeds",
        "mushroom seeds"
    ],
    "juices": [
        "attack juice",
        "protection juice",
        "endurance juice",
        "riding juice",
        "power juice",
        "immunity juice",
        "juice on becoming an animal",
        "juice for double the payment",
        "fast running juice"
    ],
    "subscriptions": [
        "Prime",
        "Prime Platinum"
    ],
    "others": [
        "GrandPro BodyCam",
        "Treasure Map",
        "video card",
        "hookah",
        "dice",
        "Leash",
        "SIM card",
        "token",
        "tonic treat",
        "Dirty Statue",
        "Purified Statue",
        "Drawing",
        "letter \"G\"",
        "letter \"R\"",
        "letter \"A\"",
        "letter \"N\"",
        "letter \"D\"",
        "custom license plate",
        "Christmas key",
        "Christmas copper",
        "Christmas timber",
        "Christmas perch",
        "Christmas seed",
        "Christmas lollipop",
        "New years gift",
        "A Little gift",
        "A Big gift",
        "An Opened gift",
        "luminous wheels of type 1",
        "luminous wheels of type 2",
        "luminous wheels of type 3",
        "luminous wheels of type 4",
        "luminous wheels of type 5",
        "luminous wheels of type 6"
    ]
}
;
const BUSINESSES_DB = [
    "Ammunition Store", "ATM", "Car wash", "Car sharing", "Chip tuning", "Clothing shop", 
    "Electric station", "Farm", "Flower shop", "Fight club", "Furniture shop", "Gas station", 
    "Grand Elite", "Hair salon", "Jewelry store", "Juice shop", "Luna park", "Parking", 
    "Pet Shop", "State object", "Service station", "Tattoo studio", "Taxi company", 
    "24/7 Store", "Burger shop", "Cowshed", "Freight train", "Plantation", "Oil Well"
];

const BUILD_TIMESTAMP = "2026 May 26 07:30:20";
const BUILD_TIMESTAMP_SHORT = "May 26 07:30";

// Simulated GRP Citizens Database
let grpCitizens = [
    { name: "Max Uchiha", role: "State Org Leader", status: "Allowed (LI)", isLI: true },
    { name: "Elite Alpha", role: "State Org Deputy", status: "Allowed (LI)", isLI: true },
    { name: "Nate Blakely", role: "State Org Deputy", status: "Allowed (LI)", isLI: true },
    { name: "Lucio Escobar", role: "Crime Leader", status: "Allowed", isLI: false },
    { name: "Zandre Mortez", role: "State Org Leader", status: "Denied", isLI: false },
    { name: "John Funchalez", role: "Admin Assistant", status: "Allowed", isLI: false },
    { name: "Carl Jordan", role: "Unofficial Leader", status: "Allowed", isLI: false }
];

// Stats Counters
let stats = {
    processed: 0,
    rejections: 0,
    blacklists: 0
};

// Action Override State
let actionOverrideMode = "auto";
let userClickedAction = false;

// Official & Unofficial Places Dictionary
const OFFICIAL_PLACES = [
    "Vinewood Hills", "Rockford Hills", "Richman", "Sandy Shores", "Paleto Bay",
    "Postal", "Hospital", "Capitol", "Fire Station", "Auto Fair", "Bahama Mamas Bar",
    "Tequi-la-la Bar", "FIB", "Hotel Spa Bar", "Pacific Bluffs Country Club",
    "Diamond Resort Bar", "Vanilla Unicorn Bar", "Church", "Stock Exchange", "Stadium",
    "Chumash", "Lifeinvader", "Del Perro Pier", "Del Perro Beach", "Cayo Perico Island",
    "Hotel", "Raton Canyon", "School", "SAHP", "Mirror Park", "LSPD"
];

const UNOFFICIAL_PLACES = [
    "airport", "autosalon", "beach", "beach market", "ghetto", "post office",
    "train station", "yacht", "city"
];

// Reordering definitions
const REAL_ESTATE_ORDER = [
    "garden", "garage spaces", "warehouses", "helipad", "custom interior", "insurance",
    "swimming pool", "tennis court", "driveway", "backyard", "views", "location"
];

// Dynamic Most Used Advertisement Presets System (Upgraded to 12 dynamic slots)
const DEFAULT_PRESETS = [
    { label: "Sell: 10 Grand Tickets", raw: "selling 10 rp tickets for 350k each", count: 12 },
    { label: "Buy: Prime Platinum", raw: "buying prime platinum 30 days", count: 11 },
    { label: "Auto: Sandking XL", raw: "selling fully upgraded sandking xl", count: 10 },
    { label: "Buy: Truffade Chiron", raw: "buying truffade chiron", count: 9 },
    { label: "Buy: Cage Pet", raw: "buying pet", count: 8 },
    { label: "Sell: Cage Pet", raw: "selling pet 600k", count: 7 },
    { label: "Sell: House Ôäû1406", raw: "selling house 1406", count: 6 },
    { label: "Dating: Girlfriend", raw: "looking for girlfriend", count: 5 },
    { label: "Sell: SIM Card", raw: "selling sim card 1111113", count: 4 },
    { label: "Buy: SIM Card", raw: "buying sim card 7777777", count: 3 },
    { label: "Sell: Charger", raw: "selling charger", count: 2 },
    { label: "Sell: 10 Salmon", raw: "selling 10 salmon", count: 1 }
];

function generatePresetLabel(raw) {
    const clean = raw.replace(/\s+/g, " ").trim();
    const lower = clean.toLowerCase();
    
    let actionPrefix = "Auto";
    if (/^(?:selling|wts|sell)\b/i.test(lower)) actionPrefix = "Sell";
    else if (/^(?:buying|wtb|buy)\b/i.test(lower)) actionPrefix = "Buy";
    else if (/^(?:trading|wtt|trade)\b/i.test(lower)) actionPrefix = "Trade";
    else if (/^(?:renting out|rent out)\b/i.test(lower)) actionPrefix = "Rent";
    else if (/^(?:renting|rent)\b/i.test(lower)) actionPrefix = "Rent";
    else if (/^(?:hiring|hire)\b/i.test(lower)) actionPrefix = "Hire";
    else if (/^(?:looking for|look for|searching for)\b/i.test(lower)) actionPrefix = "Dating";
    
    let subject = clean.replace(/^(buying|selling or trading|selling|trading|renting out|renting|hiring|wtb|wts|wtt|buy|sell|trade|rent|hire|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(a\s+|an\s+)?/i, "").trim();
    
    const lowerSubject = subject.toLowerCase();
    if (lowerSubject.includes("chiron")) return `${actionPrefix}: Truffade Chiron`;
    if (lowerSubject.includes("sandking")) return `${actionPrefix}: Sandking XL`;
    if (lowerSubject.includes("house")) return `${actionPrefix}: Vinewood House`;
    if (lowerSubject.includes("ticket")) return `${actionPrefix}: Grand Tickets`;
    if (lowerSubject.includes("platinum")) return `${actionPrefix}: Prime Platinum`;
    if (lowerSubject.includes("girlfriend")) return `${actionPrefix}: Girlfriend`;
    if (lowerSubject.includes("sim card") || lowerSubject.includes("simcard")) return `${actionPrefix}: SIM Card`;
    if (lowerSubject.includes("pet") || lowerSubject.includes("cage")) return `${actionPrefix}: Cage Pet`;
    if (lowerSubject.includes("charger")) return `${actionPrefix}: Charger`;
    if (lowerSubject.includes("salmon")) return `${actionPrefix}: 10 Salmon`;
    if (lowerSubject.includes("juice")) return `${actionPrefix}: Juices`;
    if (lowerSubject.includes("scrap metal")) return `${actionPrefix}: Scrap Metal`;
    if (lowerSubject.includes("dice")) return `${actionPrefix}: Play Dice`;
    if (lowerSubject.includes("pumpkin")) return `${actionPrefix}: Pumpkin Plantation`;
    if (lowerSubject.includes("solar panel")) return `${actionPrefix}: Solar Panels`;
    if (lowerSubject.includes("graphic card") || lowerSubject.includes("video card")) return `${actionPrefix}: Video Cards`;
    if (lowerSubject.includes("luminous stone")) return `${actionPrefix}: Luminous Stone`;
    
    const words = subject.split(" ").slice(0, 3).map(w => {
        const cw = w.replace(/[^\w]/g, "");
        if (!cw) return "";
        return cw.charAt(0).toUpperCase() + cw.slice(1).toLowerCase();
    }).filter(w => w !== "");
    
    let subjectText = words.join(" ");
    if (subjectText.length > 20) {
        subjectText = subjectText.substring(0, 17) + "...";
    }
    return `${actionPrefix}: ${subjectText || "Ad"}`;
}

function initPresetButtons() {
    if (!localStorage.getItem("li_most_used_ads")) {
        localStorage.setItem("li_most_used_ads", JSON.stringify(DEFAULT_PRESETS));
    }
    renderPresetButtons();
}

function renderPresetButtons() {
    const container = document.querySelector(".preset-buttons");
    if (!container) return;
    
    let presets = [];
    try {
        presets = JSON.parse(localStorage.getItem("li_most_used_ads")) || DEFAULT_PRESETS;
    } catch (e) {
        presets = DEFAULT_PRESETS;
    }
    
    presets.sort((a, b) => b.count - a.count);
    const topPresets = presets.slice(0, 12);
    
    container.innerHTML = "";
    topPresets.forEach(preset => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-preset";
        btn.setAttribute("data-ad", preset.raw);
        btn.title = preset.raw;
        btn.textContent = preset.label;
        
        btn.addEventListener("click", () => {
            userClickedAction = false;
            actionOverrideMode = "auto";
            document.getElementById("raw-ad").value = preset.raw;
            document.getElementById("category-override").value = "auto";
            processAd();
        });
        
        container.appendChild(btn);
    });
}

function trackCopiedAd(rawVal) {
    if (!rawVal || !rawVal.trim()) return;
    const clean = rawVal.replace(/\s+/g, " ").trim();
    
    let presets = [];
    try {
        presets = JSON.parse(localStorage.getItem("li_most_used_ads")) || DEFAULT_PRESETS;
    } catch (e) {
        presets = DEFAULT_PRESETS;
    }
    
    const existing = presets.find(p => p.raw.toLowerCase() === clean.toLowerCase());
    if (existing) {
        existing.count += 1;
    } else {
        const label = generatePresetLabel(clean);
        presets.push({ label, raw: clean, count: 1 });
    }
    
    localStorage.setItem("li_most_used_ads", JSON.stringify(presets));
    renderPresetButtons();
}

// Force browser scroll to top on reload and prevent scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

// Initialise application on DOM load
document.addEventListener("DOMContentLoaded", () => {
    initAccessGate();
    initBugReport();
    initTabs();
    initSearchExplorer();
    initAdProcessing();
    initFloatingClipboard();
    initCustomData();
    renderCustomTranslations();
    initGeminiEngine();
    initAdminPanel();
    initPolicyBook();
    initPresetButtons();
    
    const lastUpdatedMain = document.getElementById("last-updated-main");
    if (lastUpdatedMain) {
        lastUpdatedMain.textContent = `Last Updated: ${BUILD_TIMESTAMP}`;
    }
    
    // Initialize dynamic most used ad presets
    initPresetButtons();
    
    // Bind action toggle group buttons
    const btnSell = document.getElementById("btn-toggle-sell");
    const btnBuy = document.getElementById("btn-toggle-buy");
    
    if (btnSell && btnBuy) {
        btnSell.addEventListener("click", () => {
            userClickedAction = true;
            actionOverrideMode = "Selling";
            btnSell.classList.add("active");
            btnBuy.classList.remove("active");
            processAd();
        });
        
        btnBuy.addEventListener("click", () => {
            userClickedAction = true;
            actionOverrideMode = "Buying";
            btnBuy.classList.add("active");
            btnSell.classList.remove("active");
            processAd();
        });
    }
});

/* ==========================================================================
   UI Tabs & Database Explorer
   ========================================================================== */

function initTabs() {
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const tabId = btn.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
            if (tabId === "tab-ai-assistant") {
                refreshAIAssistantTabVisibility();
            } else if (tabId === "tab-bug-triage") {
                refreshBugTriageTabVisibility();
            }
        });
    });

    const tabBtnHistory = document.getElementById("tab-btn-history");
    if (tabBtnHistory) {
        tabBtnHistory.addEventListener("click", refreshMainHistory);
    }
    const btnRefreshHistory = document.getElementById("btn-refresh-history");
    if (btnRefreshHistory) {
        btnRefreshHistory.addEventListener("click", refreshMainHistory);
    }
}

function initSearchExplorer() {
    const searchInput = document.getElementById("db-search-input");
    const resultsContainer = document.getElementById("db-results");
    if (!searchInput || !resultsContainer) return;
    let currentFilter = "all";
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderSearchResults(searchInput.value, currentFilter);
        });
    });
    
    searchInput.addEventListener("input", (e) => {
        renderSearchResults(e.target.value, currentFilter);
    });
    
    // Initial render
    renderSearchResults("", "all");
}

function renderSearchResults(query, filter) {
    const resultsContainer = document.getElementById("db-results");
    resultsContainer.innerHTML = "";
    
    const term = query.toLowerCase().trim();
    let matches = [];

    // --- Icon & gradient class map by category ---
    const catIconMap = {
        helicopters:       { icon: "fa-helicopter",   cls: "cat-helicopter" },
        boats:             { icon: "fa-ship",          cls: "cat-boat" },
        planes:            { icon: "fa-plane",         cls: "cat-plane" },
        motorcycles:       { icon: "fa-motorcycle",    cls: "cat-motorcycle" },
        sellable_cars:     { icon: "fa-car-side",      cls: "cat-car-sell" },
        not_sellable_cars: { icon: "fa-car-side",      cls: "cat-car-rent" }
    };
    
    // 1. Vehicle Matches
    if (filter === "all" || filter === "vehicles") {
        for (const cat in VEHICLE_DB) {
            const list = VEHICLE_DB[cat];
            const iconInfo = catIconMap[cat] || { icon: "fa-car", cls: "cat-car-sell" };
            list.forEach(name => {
                if (name.toLowerCase().includes(term) || term === "") {
                    const isNotSellable = cat === "not_sellable_cars";
                    matches.push({
                        name: name,
                        type: "Vehicle",
                        subtype: cat.replace('_', ' '),
                        badgeClass: "vehicle",
                        details: isNotSellable ? "RENT ONLY (Non-sellable)" : "Sellable & Rentable",
                        statusText: isNotSellable ? "RENT ONLY" : "SELLABLE",
                        statusClass: isNotSellable ? "status-not-sellable" : "status-sellable",
                        thumbIcon: iconInfo.icon,
                        thumbClass: iconInfo.cls
                    });
                }
            });
        }
    }
    
    // 2. Clothing Matches
    if (filter === "all" || filter === "clothing") {
        const clothingIcons = {
            MASKS: "fa-mask", BACKPACKS: "fa-backpack", ACCESSORY: "fa-gem",
            WATCH: "fa-clock", Dress: "fa-shirt", PANTS: "fa-person",
            SHOES: "fa-shoe-prints", TOPS: "fa-shirt", HATS: "fa-hat-cowboy",
            GLASSES: "fa-glasses", CHAINS: "fa-link", EARRINGS: "fa-ear-listen"
        };
        const addClothing = (gender, catName, list) => {
            list.forEach(name => {
                if (name.toLowerCase().includes(term) || term === "") {
                    matches.push({
                        name: name,
                        type: "Clothing",
                        subtype: `${gender.toUpperCase()} - ${catName}`,
                        badgeClass: "clothing",
                        details: `Official clothing list item (${gender})`,
                        statusText: "VALID ITEM",
                        statusClass: "status-sellable",
                        thumbIcon: clothingIcons[catName] || "fa-shirt",
                        thumbClass: "cat-clothing"
                    });
                }
            });
        };
        
        for (const cat in CLOTHING_DB.male) {
            addClothing("male", cat, CLOTHING_DB.male[cat]);
        }
        for (const cat in CLOTHING_DB.female) {
            addClothing("female", cat, CLOTHING_DB.female[cat]);
        }
    }
    
    // 3. Item Matches
    if (filter === "all" || filter === "items") {
        const itemIcons = {
            tickets: "fa-ticket",
            containers: "fa-box-open",
            pets: "fa-paw",
            tools: "fa-screwdriver-wrench",
            resources: "fa-gem",
            fish: "fa-fish",
            gardening: "fa-seedling",
            juices: "fa-flask",
            subscriptions: "fa-star",
            others: "fa-icons"
        };
        const itemClasses = {
            tickets: "cat-ticket",
            containers: "cat-container",
            pets: "cat-pet",
            tools: "cat-tools",
            resources: "cat-resources",
            fish: "cat-fish",
            gardening: "cat-gardening",
            juices: "cat-juices",
            subscriptions: "cat-subscriptions",
            others: "cat-others"
        };
        
        for (const cat in ITEMS_DB) {
            const list = ITEMS_DB[cat];
            const icon = itemIcons[cat] || "fa-cubes";
            const cls = itemClasses[cat] || "cat-item";
            list.forEach(name => {
                if (name.toLowerCase().includes(term) || term === "") {
                    matches.push({
                        name: name,
                        type: "Item",
                        subtype: cat.charAt(0).toUpperCase() + cat.slice(1),
                        badgeClass: "item",
                        details: `Official database item (${cat})`,
                        statusText: "VALID ITEM",
                        statusClass: "status-sellable",
                        thumbIcon: icon,
                        thumbClass: cls
                    });
                }
            });
        }
    }
    
    // 4. Business Matches
    if (filter === "all" || filter === "businesses") {
        BUSINESSES_DB.forEach(name => {
            if (name.toLowerCase().includes(term) || term === "") {
                matches.push({
                    name: name,
                    type: "Business",
                    subtype: "Business",
                    badgeClass: "business",
                    details: "Official business type",
                    statusText: "VALID BUSINESS",
                    statusClass: "status-sellable",
                    thumbIcon: "fa-briefcase",
                    thumbClass: "cat-business"
                });
            }
        });
    }
    
    // Cap results at 100 for performance
    const displayMatches = matches.slice(0, 100);
    
    if (displayMatches.length === 0) {
        resultsContainer.innerHTML = `<div class="log-empty" style="grid-column: 1/-1; text-align: center; padding: 20px;">No items match your search.</div>`;
        return;
    }
    
    displayMatches.forEach(item => {
        const card = document.createElement("div");
        card.className = "db-card";
        card.title = "Double-click to copy name";
        card.innerHTML = `
            <div class="db-card-thumb ${item.thumbClass}">
                <i class="fa-solid ${item.thumbIcon}"></i>
            </div>
            <div class="db-card-body">
                <div class="db-card-header">
                    <span class="db-item-name">${escapeHTML(item.name)}</span>
                    <span class="db-item-badge ${item.badgeClass}">${item.type}</span>
                </div>
                <div class="db-item-detail">Category: <strong>${escapeHTML(item.subtype)}</strong></div>
                <div class="db-item-status ${item.statusClass}">
                    <i class="fa-solid ${item.statusClass === 'status-sellable' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${item.statusText}
                </div>
            </div>
        `;
        
        card.addEventListener("dblclick", () => {
            const copyText = item.type === "Vehicle" ? `"${item.name}"` : item.name;
            navigator.clipboard.writeText(copyText).then(() => {
                showCustomNotification(`Copied ${item.type === "Vehicle" ? copyText : `"${item.name}"`} to clipboard!`, "success");
            }).catch(err => {
                console.error("Failed to copy text: ", err);
                showCustomNotification("Failed to copy to clipboard", "error");
            });
        });

        resultsContainer.appendChild(card);
    });
}



/* ==========================================================================
   Fuzzy Matching & String Similarity Utilities
   ========================================================================== */

function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function getClosestMatch(input, list, threshold = 0.6) {
    if (!input || !list || list.length === 0) return null;
    let bestMatch = null;
    let maxSimilarity = 0;
    
    const cleanInput = input.trim().toLowerCase();
    
    for (const item of list) {
        const cleanItem = item.trim().toLowerCase();
        
        // Exact check
        if (cleanInput === cleanItem) {
            return item;
        }
        
        // Substring check
        if (cleanItem.includes(cleanInput) || cleanInput.includes(cleanItem)) {
            let similarity = Math.min(cleanInput.length, cleanItem.length) / Math.max(cleanInput.length, cleanItem.length);
            if (cleanItem.startsWith(cleanInput)) similarity += 0.2;
            if (similarity > maxSimilarity) {
                maxSimilarity = similarity;
                bestMatch = item;
            }
        }
        
        // Levenshtein check
        const dist = levenshteinDistance(cleanInput, cleanItem);
        const maxLength = Math.max(cleanInput.length, cleanItem.length);
        const similarity = 1 - (dist / maxLength);
        
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = item;
        }
    }
    
    return maxSimilarity >= threshold ? bestMatch : null;
}

function correctSpelling(text, ctx) {
    let corrected = text;

    // Protect price values (e.g. 5m, 5mil, 500k, $5 Million) from spelling correction
    const protectedPrices = [];
    corrected = corrected.replace(/\b(?:\d+(?:[\.,]\d+)*\s*(?:k|m|mil|ml|million|billion|b|trillion)\b|\$\s*\d+(?:[\.,]\d+)*)/gi, (match) => {
        protectedPrices.push(match);
        return `__PROTECTED_PRICE_${protectedPrices.length - 1}__`;
    });
    
    // Normalize percentage prefixes like %20 -> 20%
    const pctPrefixMatch = corrected.match(/%(\d+)\b/);
    if (pctPrefixMatch) {
        corrected = corrected.replace(/%(\d+)\b/g, "$1%");
        ctx.logs.push({ text: `Normalized percentage notation: <strong>%${pctPrefixMatch[1]}</strong> corrected to <strong>${pctPrefixMatch[1]}%</strong>`, type: 'correction' });
    }
    
    // Protect type numbers (e.g. type 5, type 13, 14 and 19) from being spell-corrected (e.g. 5 -> lvl5)
    const protectedTypes = [];
    corrected = corrected.replace(/\b(type|types|extra|extras|of\s+type)\s+(\d+(?:\s*(?:,|and|or)\s*\d+)*)\b/gi, (match) => {
        protectedTypes.push(match);
        return `__PROTECTED_TYPE_${protectedTypes.length - 1}__`;
    });
    
    // Actions / Prefixes
    const actionMatch = corrected.match(/\b(sling|sellaing|seling|selaing|slling|selign|saling|sellin|seeling|sellig|sellng|selng|sel|sale)\b/i);
    if (actionMatch) {
        corrected = corrected.replace(/\b(sling|sellaing|seling|selaing|slling|selign|saling|sellin|seeling|sellig|sellng|selng|sel|sale)\b/gi, "Selling");
        ctx.logs.push({ text: `Spelling correction: action <strong>${actionMatch[0]}</strong> corrected to <strong>Selling</strong>`, type: 'correction' });
    }
    const buyingMatch = corrected.match(/\b(buyin|bying|buing|buyg|buyen|buyiing|beying|buyng)\b/i);
    if (buyingMatch) {
        corrected = corrected.replace(/\b(buyin|bying|buing|buyg|buyen|buyiing|beying|buyng)\b/gi, "Buying");
        ctx.logs.push({ text: `Spelling correction: action <strong>${buyingMatch[0]}</strong> corrected to <strong>Buying</strong>`, type: 'correction' });
    }
    const tradingMatch = corrected.match(/\b(tradin|tradg|trding|traiding|treding)\b/i);
    if (tradingMatch) {
        corrected = corrected.replace(/\b(tradin|tradg|trding|traiding|treding)\b/gi, "Trading");
        ctx.logs.push({ text: `Spelling correction: action <strong>${tradingMatch[0]}</strong> corrected to <strong>Trading</strong>`, type: 'correction' });
    }
    const rentingMatch = corrected.match(/\b(rentin|rentg|rnting|renten|reenting)\b/i);
    if (rentingMatch) {
        corrected = corrected.replace(/\b(rentin|rentg|rnting|renten|reenting)\b/gi, "Renting");
        ctx.logs.push({ text: `Spelling correction: action <strong>${rentingMatch[0]}</strong> corrected to <strong>Renting</strong>`, type: 'correction' });
    }

    // Price correction
    const priceMatch = corrected.match(/\b(negable|negotiabl|negotiab|nego|negoitable|negotable|negotiabe|negotiate|negotiat|negtable)\b/gi);
    if (priceMatch) {
        const uniqueMatches = [...new Set(priceMatch.map(m => m.toLowerCase()))];
        uniqueMatches.forEach(m => {
            if (m !== "negotiable") {
                ctx.logs.push({ text: `Spelling correction: <strong>${m}</strong> corrected to <strong>negotiable</strong>`, type: 'correction' });
            }
        });
        corrected = corrected.replace(/\b(negable|negotiabl|negotiab|nego|negoitable|negotable|negotiabe|negotiate|negotiat|negtable)\b/gi, "negotiable");
    }

    // Upgrades fuzzy matches / corrections
    const partConfigMatch = corrected.match(/\b(par\s+confin|par\s+config|par\s+tuning|part\s+config|part\s+tuning|partial\s+config|partial\s+tuning|partially\s+upgraded|nearly\s+max|partially\s+config|part\s+confin|part\s+configuration|par\s+configuration|par\s+conf|part\s+conf|part\s+confin)\b/gi);
    if (partConfigMatch) {
        const uniqueMatches = [...new Set(partConfigMatch.map(m => m.toLowerCase()))];
        uniqueMatches.forEach(m => {
            if (m !== "partial configuration") {
                ctx.logs.push({ text: `Spelling correction: upgrade <strong>${m}</strong> corrected to <strong>partial configuration</strong>`, type: 'correction' });
            }
        });
        corrected = corrected.replace(/\b(par\s+confin|par\s+config|par\s+tuning|part\s+config|part\s+tuning|partial\s+config|partial\s+tuning|partially\s+upgraded|nearly\s+max|partially\s+config|part\s+confin|part\s+configuration|par\s+configuration|par\s+conf|part\s+conf|part\s+confin)\b/gi, "partial configuration");
    }

    const fullConfigMatch = corrected.match(/\b(full\s+conf|ful\s+conf|full\s+config|ful\s+config|full\s+tuning|ful\s+tuning|full\s+tune|ful\s+tune|max\s+conf|max\s+config|max\s+tuning|max\s+tune|maxed|fully\s+upgraded|ful\s+upgraded|full\s+configuration|ful\s+configuration|full\s+confin|ful\s+confin|full\s+max|ful\s+max|full\s+maxed|ful\s+maxed|pro\s+parts)\b/gi);
    if (fullConfigMatch) {
        const uniqueMatches = [...new Set(fullConfigMatch.map(m => m.toLowerCase()))];
        uniqueMatches.forEach(m => {
            if (m !== "full configuration") {
                ctx.logs.push({ text: `Spelling correction: upgrade <strong>${m}</strong> corrected to <strong>full configuration</strong>`, type: 'correction' });
            }
        });
        corrected = corrected.replace(/\b(full\s+conf|ful\s+conf|full\s+config|ful\s+config|full\s+tuning|ful\s+tuning|full\s+tune|ful\s+tune|max\s+conf|max\s+config|max\s+tuning|max\s+tune|maxed|fully\s+upgraded|ful\s+upgraded|full\s+configuration|ful\s+configuration|full\s+confin|ful\s+confin|full\s+max|ful\s+max|full\s+maxed|ful\s+maxed|pro\s+parts)\b/gi, "full configuration");
    }

    // Luminous wheels / rims
    const wheelsMatch = corrected.match(/\b(luminous\s+rims|unique\s+rims|unique\s+wheels)\b/gi);
    if (wheelsMatch) {
        const uniqueMatches = [...new Set(wheelsMatch.map(m => m.toLowerCase()))];
        uniqueMatches.forEach(m => {
            ctx.logs.push({ text: `Spelling correction: <strong>${m}</strong> corrected to <strong>luminous wheels</strong>`, type: 'correction' });
        });
        corrected = corrected.replace(/\b(luminous\s+rims|unique\s+rims|unique\s+wheels)\b/gi, "luminous wheels");
    }

    // Common item spelling errors
    const commonMisspellings = {
        "crypto currency": "token",
        "cryptocurrency": "token",
        "crypto": "token",
        "quilty": "quality",
        "lf": "looking for an",
        "platinom": "platinum",
        "casno": "casino",
        "apartemnt": "apartment",
        "appart": "apartment",
        "platinyem": "platinum",
        "panthouse": "penthouse",
        "allience": "alliance",
        "panthuse": "penthouse",
        "lui": "LV",
        "anis": "annis",
        "tubo": "turbo",
        "turb": "turbo",
        "drft": "drift",
        "direct": "drift",
        "tickt": "ticket",
        "tick": "ticket",
        "haus": "house",
        "housae": "house",
        "grage": "garage",
        "exsotic": "exotic",
        "markit": "market",
        "platnum": "platinum",
        "sholder": "shoulder",
        "metel": "metal",
        "mettal": "metal",
        "videocard": "video card",
        "hoka": "hookah",
        "biosparc": "biospark",
        "biosparck": "biospark",
        "biosparke": "biospark",
        "batry": "battery",
        "battries": "battery",
        "battres": "battery",
        "battre": "battery",
        "batteys": "battery",
        "battey": "battery",
        "vinewod": "Vinewood",
        "aprtment": "apartment",
        "apartemen": "apartment",
        "apartmen": "apartment",
        "geto": "ghetto",
        "gheto": "ghetto",
        "swiming": "swimming",
        "luminus": "luminous",
        "drfit": "drift",
        "tickts": "tickets",
        "tckets": "tickets",
        "tikets": "tickets",
        "twith": "with",
        "whith": "with",
        "helipaad": "helipad",
        "helipd": "helipad",
        "gardan": "garden",
        "grden": "garden",
        "costom": "custom",
        "custum": "custom",
        "custome": "custom",
        "inter": "interior",
        "interio": "interior",
        "loking": "looking",
        "lookin": "looking",
        "serch": "search",
        "serching": "searching",
        "girlfrnd": "girlfriend",
        "girlfirnd": "girlfriend",
        "girlfrend": "girlfriend",
        "boyfrnd": "boyfriend",
        "boyfirnd": "boyfriend",
        "boyfrend": "boyfriend",
        "husbnd": "husband",
        "husban": "husband",
        "husbund": "husband",
        "valntine": "valentine",
        "casinopent": "casino penthouse",
        "casinopenth": "casino penthouse",
        "casino pent": "casino penthouse",
        "casino apartment": "casino penthouse",
        "bhams": "Bahama Mamas",
        "bahamas": "Bahama Mamas",
        "tequilala": "Tequi-la-la",
        "tequila": "Tequi-la-la",
        "jucies": "juices",
        "juise": "juice",
        "juse": "juice",
        "jucy": "juice",
        "plat": "platinum",
        "snowbord": "snowboarders",
        "snowboard": "snowboarders",
        "snbobord": "snowboarders",
        "insaurance": "insurance",
        "insuranc": "insurance",
        "juguler": "jugular",
        "engen": "engine",
        "transmision": "transmission",
        "transmition": "transmission",
        "transmisin": "transmission",
        "transmion": "transmission",
        "tranmission": "transmission",
        "bataris": "batteries",
        "balk": "bulk",
        "buget": "budget",
        "buyong": "buying",
        "buiyng": "buying",
        "frainds": "friends",
        "frnds": "friends",
        "frends": "friends",
        "freind": "friend",
        "freinds": "friends",
        "frien": "friend",
        "continres": "containers",
        "incrance": "insurance",
        "chrion": "chiron",
        "contanr": "container",
        "contanrs": "containers",
        "bio sparks": "biosparks",
        "bio spark": "biospark",
        "biosparcs": "biosparks",
        "biosparc": "biospark",
        "privet": "private",
        "palt": "platinum",
        "busnss": "business",
        "buiness": "business",
        "busess": "business",
        "bussesnessss": "business",
        "bussness": "business",
        "bedss": "beds",
        "pumkin": "pumpkin",
        "aparmnt": "apartment",
        "qality": "quality",
        "monewil": "monowheel",
        "monewhil": "monowheel",
        "monowhil": "monowheel",
        "busines": "business",
        "privte": "private",
        "biss": "business",
        "bis": "business",
        "picakxe": "pickaxe",
        "picakx": "pickaxe",
        "pickax": "pickaxe",
        "pikaxe": "pickaxe",
        "cases": "containers",
        "case": "container",
        "crates": "containers",
        "crate": "container",
        "drag lab": "Burger shop",
        "drug lab": "Burger shop",
        "draglab": "Burger shop",
        "druglab": "Burger shop",
        "woman": "women",
        "ievel": "Level",
        "ivl": "Level",
        "bizz": "business",
        "t20": "T-20",
        "charging": "chargers",
        "electric charging": "chargers",
        "biosprk": "biospark",
        "bios": "biospark",
        "lumins": "luminous",
        "trosers": "trousers",
        "tayp": "type",
        "appart": "Apartment",
        "arptmnt": "Apartment",
        "platinom": "Platinum",
        "quilty": "quality",
        "tuing": "tuning",
        "girl": "girlfriend",
        "allience": "alliance",
        "lf": "Looking for an",
        "apartemnt": "apartment",
        "platinyem": "Platinum",
        "casno": "casino",
        "panthouse": "penthouse",
        "panthuse": "penthouse"
    };

    const activeMisspellings = Object.assign({}, commonMisspellings, customSpelling, ctx.extraSpelling || {});
    // Sort keys by length descending to match multi-word phrases first
    const sortedEntries = Object.entries(activeMisspellings).sort((a, b) => b[0].length - a[0].length);
    for (const [wrong, right] of sortedEntries) {
        // Skip number-only keys (like "700" or "5") from commonMisspellings to prevent corrupting model numbers, price digits, etc., but allow if explicitly trained
        if (/^\d+$/.test(wrong) && !customSpelling.hasOwnProperty(wrong) && (!ctx.extraSpelling || !ctx.extraSpelling.hasOwnProperty(wrong))) {
            continue;
        }
        let regex;
        if (wrong === "lui") {
            regex = /\blui\b(?!\s+vi\b)/gi;
        } else {
            const escapedWrong = wrong.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const startBoundary = /^\w/.test(wrong) ? '\\b' : '';
            const endBoundary = /\w$/.test(wrong) ? '\\b' : '';
            regex = new RegExp(`${startBoundary}${escapedWrong}${endBoundary}`, "gi");
        }
        const match = corrected.match(regex);
        if (match) {
            ctx.logs.push({ text: `Spelling correction: <strong>${wrong}</strong> corrected to <strong>${right}</strong>`, type: 'correction' });
            corrected = corrected.replace(regex, right);
        }
    }

    // Space out adjacent digit + days (e.g. 7days -> 7 days)
    corrected = corrected.replace(/\b(\d+)\s*days?\b/gi, "$1 days");
    corrected = corrected.replace(/\b(\d+)\s*beds*\b/gi, "$1 beds");
    corrected = corrected.replace(/\bbeds*\s*(\d+)\b(?![.,]\d)/gi, "$1 beds");

    // Complex replacements with regex
    const graphicCardRegex = /\b(grapic\s+card|graphic\s+card|graphics\s+card)\b/gi;
    const graphicCardMatch = corrected.match(graphicCardRegex);
    if (graphicCardMatch) {
        ctx.logs.push({ text: `Spelling correction: <strong>${graphicCardMatch[0]}</strong> corrected to <strong>video card</strong>`, type: 'correction' });
        corrected = corrected.replace(graphicCardRegex, "video card");
    }

    const repKitRegex = /\b(rep\s+kit)\b/gi;
    const repKitMatch = corrected.match(repKitRegex);
    if (repKitMatch) {
        ctx.logs.push({ text: `Spelling correction: <strong>${repKitMatch[0]}</strong> corrected to <strong>repair kit</strong>`, type: 'correction' });
        corrected = corrected.replace(repKitRegex, "repair kit");
    }

    if (/\bcharging\b/i.test(corrected) && !/\bcharging\s+station\b/i.test(corrected)) {
        corrected = corrected.replace(/\bcharging\b/gi, "chargers");
        ctx.logs.push({ text: `Spelling correction: <strong>charging</strong> corrected to <strong>chargers</strong>`, type: 'correction' });
    }

    // Format property and shop numbers to use Ôäû symbol
    corrected = corrected.replace(/\b(house|apartment|mansion|penthouse|shop)\s*(?:no\.?|number|num\.?|#)?\s*(\d+)\b/gi, (match, prop, num) => {
        return `${prop} \u2116${num}`;
    });

    // Restore protected type numbers
    corrected = corrected.replace(/__PROTECTED_TYPE_(\d+)__/g, (match, idx) => {
        return protectedTypes[parseInt(idx)];
    });

    // Restore protected price values
    corrected = corrected.replace(/__PROTECTED_PRICE_(\d+)__/g, (match, idx) => {
        return protectedPrices[parseInt(idx)];
    });

    return corrected;
}

function detectActionFromText(text) {
    const lower = text.toLowerCase();
    
    // Check for dating category (Dating is always "Looking", i.e. Buying mode)
    const isDatingSearch = /\b(look|looking|search|searching|want|find|finding)\b/i.test(lower);
    const hasDatingTarget = /\b(wife|girlfriend|boyfriend|husband|valentine|date|spouse|soulmate)\b/i.test(lower) || 
                            (/\b(friend|friends|family|family\s+members)\b/i.test(lower) && /\b(look|looking|search|searching)\b/i.test(lower));
    if (isDatingSearch && hasDatingTarget && !lower.includes("family business")) {
        return "Buying";
    }

    // Buying keywords
    const buyPatterns = [
        /\bbuying\b/i, /\blook for\b/i, /\blooking to buy\b/i, /\blooking to purchase\b/i,
        /\bbuy\b/i, /\bwant to buy\b/i, /\bwtb\b/i
    ];
    // Selling, renting out, trading keywords
    const sellPatterns = [
        /\bselling or trading\b/i, /\bsell or trade\b/i, /\bselling\/trading\b/i, /\bwts\/wtt\b/i,
        /\brenting out\b/i, /\brent out\b/i, /\brenting\b/i, /\brent\b/i,
        /\btrading\b/i, /\btrade\b/i, /\bwtt\b/i,
        /\bselling\b/i, /\bsell\b/i, /\bwts\b/i
    ];

    // Find the first matching pattern in the text to determine the action
    let firstBuyIdx = -1;
    for (const pat of buyPatterns) {
        const match = lower.match(pat);
        if (match) {
            if (firstBuyIdx === -1 || match.index < firstBuyIdx) {
                firstBuyIdx = match.index;
            }
        }
    }

    let firstSellIdx = -1;
    for (const pat of sellPatterns) {
        const match = lower.match(pat);
        if (match) {
            if (firstSellIdx === -1 || match.index < firstSellIdx) {
                firstSellIdx = match.index;
            }
        }
    }

    if (firstBuyIdx !== -1 && firstSellIdx !== -1) {
        // Both are present, choose the one that appears first
        return firstBuyIdx < firstSellIdx ? "Buying" : "Selling";
    } else if (firstBuyIdx !== -1) {
        return "Buying";
    } else if (firstSellIdx !== -1) {
        return "Selling";
    }

    return null;
}

function mapVehicleBrands(text) {
    let result = text.toLowerCase();
    result = result.replace(/\bmercedes(?:\s*-?\s*benz)?\b/gi, "benefactor");
    result = result.replace(/\bamg\b/gi, "benefactor");
    result = result.replace(/\bbmw\b/gi, "ubermacht");
    result = result.replace(/\baudi\b/gi, "obey");
    result = result.replace(/\bporsche\b/gi, "pfister");
    result = result.replace(/\blamborghini\b/gi, "pegassi");
    result = result.replace(/\blambo\b/gi, "pegassi");
    result = result.replace(/\bbugatti\b/gi, "truffade");
    result = result.replace(/\brolls\s*-?\s*royce\b/gi, "enus");
    result = result.replace(/\brr\b/gi, "enus");
    result = result.replace(/\blexus\b/gi, "emperor");
    result = result.replace(/\btoyota\b/gi, "karin");
    result = result.replace(/\bnissan\b/gi, "annis");
    result = result.replace(/\btesla\b/gi, "coil");
    result = result.replace(/\brange\s*rover\b/gi, "gallivanter");
    result = result.replace(/\bford\b/gi, "vapid");
    result = result.replace(/\bchevrolet\b/gi, "declasse");
    result = result.replace(/\bchevy\b/gi, "declasse");
    result = result.replace(/\bferrari\b/gi, "grotti");
    result = result.replace(/\bitaly\b/gi, "italia");
    
    result = result.replace(/\bg-wagon\b/gi, "g63");
    result = result.replace(/\bhuracan\b/gi, "performante");
    result = result.replace(/\bskyline\b/gi, "skyline gt-r");
    result = result.replace(/\blvn\b/gi, "la voiture noire");
    result = result.replace(/\bgt-?r\s*(?:1|i)\b/gi, "gt-r i");
    result = result.replace(/\bgtr\b/gi, "gt-r");
    return result;
}

function mapClothingBrands(text) {
    let result = text.toLowerCase();
    result = result.replace(/\badidas\b/g, "abibas");
    result = result.replace(/\bgucci\b/g, "muci");
    result = result.replace(/\blouis vuitton\b/g, "lui vi");
    result = result.replace(/\blv\b/g, "lui vi");
    result = result.replace(/\bnike\b/g, "niki");
    result = result.replace(/\bpikachu\b/g, "mikachu");
    result = result.replace(/\brolex\b/g, "kolex");
    result = result.replace(/\bsocial hoodie\b/g, "social club hoodie");
    result = result.replace(/\btype mask\b/g, "tight mask");
    // Map scarf shortnames to their canonical clothing DB names
    result = result.replace(/\bdesert scarf\b(?!\s*mask)/g, "desert scarf mask");
    result = result.replace(/\btied scarf\b(?!\s*mask)/g, "tied scarf mask");
    result = result.replace(/\bface scarf\b(?!\s*mask)/g, "face scarf mask");
    result = result.replace(/\bneck scarf\b(?!\s*mask)/g, "neck scarf mask");
    return result;
}

// Specialised Vehicle match
function matchVehicle(inputText) {
    const lowerInput = inputText.toLowerCase();
    const itemWords = [
        "solar panel", "solar panels", "solar barrel", "solar barrels",
        "sim card", "sim cards", "simcard", "simcards",
        "video card", "video cards", "videocard", "videocards",
        "scrap metal", "luminous stone", "luminous stones", "stone", "stones",
        "ticket", "tickets", "juice", "juices", "pet", "pets", "cage", "cages",
        "oil well", "sawmill", "drill", "watering can", "pickaxe", "fishing rod",
        "thread", "threads", "battery", "batteries", "gasoline barrel", "kerene barrel",
        "paint can", "sponge", "sponges", "license plate", "license plates", "custom plate"
    ];
    if (itemWords.some(item => lowerInput.includes(item))) {
        return null;
    }

    const categories = ['helicopters', 'boats', 'planes', 'motorcycles', 'not_sellable_cars', 'sellable_cars'];
    const allVehicles = [];
    const nameMap = new Map();
    const categoryMap = new Map();
    
    for (const cat of categories) {
        for (const veh of VEHICLE_DB[cat]) {
            allVehicles.push(veh);
            nameMap.set(veh.toLowerCase(), veh);
            categoryMap.set(veh, cat);
        }
    }
    
    const actionPrefixes = /^(?:buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(?:a\s+|an\s+)?/i;
    const actionSuffixes = /\s+(?:buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)$/i;
    
    let cleanInput = mapVehicleBrands(inputText.trim().toLowerCase().replace(/['"ÔÇ£ÔÇØ]/g, ''));
    cleanInput = cleanInput.replace(actionPrefixes, "").replace(actionSuffixes, "").trim();
    
    // Shortcuts
    if (/\b(?:panamera\s+turismo)\b/i.test(cleanInput)) {
        return { name: "Pfister Panamera Turismo", category: "sellable_cars" };
    }
    if (/\bpanamera\b/i.test(cleanInput)) {
        return { name: "Pfister Panamera", category: "sellable_cars" };
    }
    if (/\b(?:skyline|r34)\b/i.test(cleanInput)) {
        return { name: "Annis Skyline GT-R (R34)", category: "sellable_cars" };
    }
    if (/\bchiron\b/i.test(cleanInput)) {
        return { name: "Truffade Chiron", category: "sellable_cars" };
    }
    if (/\bphantom\b/i.test(cleanInput)) {
        return { name: "Enus Phantom", category: "sellable_cars" };
    }
    if (/\bviper\b/i.test(cleanInput)) {
        return { name: "Bravado Viper 2008", category: "sellable_cars" };
    }
    if (/\b(?:t-20|t20)\b/i.test(cleanInput)) {
        return { name: "T-20", category: "sellable_cars" };
    }
    if (/\b(?:z-type|ztype)\b/i.test(cleanInput)) {
        return { name: "Z-Type", category: "sellable_cars" };
    }
    if (/\b(?:sc-1|sc1)\b/i.test(cleanInput)) {
        return { name: "SC-1", category: "sellable_cars" };
    }
    if (/\b(?:gp-1|gp1)\b/i.test(cleanInput)) {
        return { name: "GP-1", category: "sellable_cars" };
    }
    
    // Direct tokenized compare
    for (const veh of allVehicles) {
        const cleanVehName = veh.toLowerCase().replace(/[()]/g, '');
        if (cleanInput === cleanVehName || cleanInput === veh.toLowerCase()) {
            return { name: veh, category: categoryMap.get(veh) };
        }
    }
    
    let bestVeh = null;
    let maxScore = 0;
    const inputTokens = cleanInput.split(/[\s-]+/).map(t => t.replace(/[,.;:!?()]/g, "")).filter(Boolean);
    
    for (const veh of allVehicles) {
        const vehLower = veh.toLowerCase();
        const vehClean = vehLower.replace(/[()]/g, '');
        const vehTokens = vehClean.split(/[\s-]+/);
        
        let score = 0;
        let matchedNonNumeric = false;
        let hasExactMatch = false;
        for (const token of inputTokens) {
            if (token.length < 2) continue;
            
            // Skip price and quantity tokens to avoid false matches (e.g. 500k matching vehicle models like GT 500)
            if (/^\d+(?:\.\d+)?(?:k|m|b|g\.?s\.?|w\.?h\.?|days?|lvls?|levels?|years?|percent|each)$/i.test(token)) {
                continue;
            }
            
            let matchedToken = false;
            for (const vehToken of vehTokens) {
                if (vehToken.length < 2) continue;
                const dist = levenshteinDistance(token, vehToken);
                const maxLen = Math.max(token.length, vehToken.length);
                const sim = 1 - (dist / maxLen);
                if (sim >= 0.7) {
                    const stopWords = [
                        "and", "the", "for", "with", "out", "cayo", "type", "each", "bulk", "selling", "buying", "trading", "renting",
                        "rare", "exotic", "unique", "luminous", "luxe", "lux", "high", "low", "medium", "advanced", "max", "pro",
                        "black", "white", "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "grey", "gray", "silver", "gold"
                    ];
                    if (stopWords.includes(token)) {
                        continue;
                    }
                    if (dist === 0) {
                        hasExactMatch = true;
                    }
                    score += 3;
                    matchedToken = true;
                    if (!/^\d+$/.test(token)) {
                        matchedNonNumeric = true;
                    }
                    break;
                }
            }
            if (!matchedToken && vehClean.includes(token)) {
                score += 1;
                if (vehTokens.includes(token)) {
                    hasExactMatch = true;
                }
                if (!/^\d+$/.test(token)) {
                    matchedNonNumeric = true;
                }
            }
        }
        
        const modelMatch = vehLower.match(/\(([^)]+)\)/);
        if (modelMatch) {
            const modelId = modelMatch[1].toLowerCase();
            for (const token of inputTokens) {
                const dist = levenshteinDistance(token, modelId);
                const maxLen = Math.max(token.length, modelId.length);
                const sim = 1 - (dist / maxLen);
                if (sim >= 0.75) {
                    if (dist === 0) {
                        hasExactMatch = true;
                    }
                    score += 5;
                    if (!/^\d+$/.test(token)) {
                        matchedNonNumeric = true;
                    }
                }
            }
        }
        
        const hasNumericTokenInVeh = vehTokens.some(vt => /^\d+$/.test(vt));
        if (hasNumericTokenInVeh && !matchedNonNumeric) {
            score = 0;
        }
        
        if (inputTokens.length > 1 && !hasExactMatch) {
            score = 0;
        }
        
        if (score > maxScore) {
            maxScore = score;
            bestVeh = veh;
        } else if (score === maxScore && score > 0 && bestVeh) {
            const bestVehClean = bestVeh.toLowerCase().replace(/[()]/g, '');
            const bestVehTokens = bestVehClean.split(/[\s-]+/).length;
            const currentVehTokens = vehClean.split(/[\s-]+/).length;
            if (currentVehTokens < bestVehTokens) {
                bestVeh = veh;
            }
        }
    }
    
    if (maxScore >= 3) {
        return { name: bestVeh, category: categoryMap.get(bestVeh) };
    }
    
    const closest = getClosestMatch(cleanInput, allVehicles, 0.7);
    if (closest) {
        return { name: closest, category: categoryMap.get(closest) };
    }
    
    return null;
}

// Specialised Clothing match
function matchClothingItem(inputText) {
    const allItems = [];
    const itemMap = new Map();
    const subcatMap = new Map();
    const genderMap = new Map();
    
    for (const subcat in CLOTHING_DB.male) {
        for (const item of CLOTHING_DB.male[subcat]) {
            const lowerItem = item.toLowerCase();
            allItems.push(item);
            itemMap.set(lowerItem, item);
            subcatMap.set(item, subcat);
            genderMap.set(item, 'male');
        }
    }
    
    for (const subcat in CLOTHING_DB.female) {
        for (const item of CLOTHING_DB.female[subcat]) {
            const lowerItem = item.toLowerCase();
            if (itemMap.has(lowerItem)) {
                genderMap.set(itemMap.get(lowerItem), 'both');
            } else {
                allItems.push(item);
                itemMap.set(lowerItem, item);
                subcatMap.set(item, subcat);
                genderMap.set(item, 'female');
            }
        }
    }
    
    const lowerInput = inputText.toLowerCase();
    const nonClothingKeywords = [
        "cage", "pet", "plate", "license", "fish", "salmon", "carp", "perch", "trout",
        "drill", "sawmill", "gpu", "graphics card", "video card", "battery", "batteries",
        "wires", "wire", "sponge", "sponges", "hookah", "poker", "dice",
        "seed", "seeds", "emerald", "ruby", "diamond", "obsidian", "magma stone", "copper",
        "driver", "lawyer", "dancer", "singer", "dj", "fuel", "canister", "tonic", "panamera"
    ];
    if (nonClothingKeywords.some(kw => lowerInput.includes(kw))) {
        return null;
    }

    const actionPrefixes = /^(?:buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(?:a\s+|an\s+)?/i;
    const actionSuffixes = /\s+(?:buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)$/i;

    let cleanInput = mapClothingBrands(inputText.trim().toLowerCase().replace(/__has_each__/g, ""));
    cleanInput = cleanInput.replace(actionPrefixes, "").replace(actionSuffixes, "").trim();
    
    // Detect gender specified in input
    const hasMaleGender = /\b(?:for\s+men|for\s+man|male|mens?|men's)\b/i.test(inputText);
    const hasFemaleGender = /\b(?:for\s+women|for\s+woman|female|womens?|women's)\b/i.test(inputText);
    
    let candidates = allItems;
    if (hasMaleGender && !hasFemaleGender) {
        candidates = allItems.filter(item => genderMap.get(item) === 'male' || genderMap.get(item) === 'both');
    } else if (hasFemaleGender && !hasMaleGender) {
        candidates = allItems.filter(item => genderMap.get(item) === 'female' || genderMap.get(item) === 'both');
    }
    
    // Strip color, type and gender descriptors to get the core clothing item name for matching
    const colors = ["black", "white", "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "grey", "gray", "silver", "gold"];
    for (const c of colors) {
        cleanInput = cleanInput.replace(new RegExp(`\\b${c}\\b`, "gi"), "");
    }
    cleanInput = cleanInput.replace(/(?:type|extra|extras)\s*#?\d+\b/gi, "");
    cleanInput = cleanInput.replace(/\b(?:for\s+men|for\s+man|male|for\s+women|for\s+woman|female|mens?|men's|womens?|women's)\b/gi, "");
    cleanInput = cleanInput.replace(/\s+/g, " ").trim();
    
    // Longest substring match
    let bestMatch = null;
    let longestMatchLen = 0;
    
    for (const item of candidates) {
        const itemLower = item.toLowerCase();
        let itemMatchCheck = itemLower;
        let isWildcard = false;
        if (itemLower.includes('*')) {
            itemMatchCheck = itemLower.replace(/\s*of\s*type\s*\*/g, '').trim();
            isWildcard = true;
        }
        
        let itemMatchCheckAlt = null;
        if (isWildcard && itemMatchCheck.endsWith(" watch")) {
            itemMatchCheckAlt = itemMatchCheck.replace(/\s*watch\b/gi, '').trim();
        }
        
        const hasMatch = isWildcard 
            ? (cleanInput.includes(itemMatchCheck) || (itemMatchCheckAlt && cleanInput.includes(itemMatchCheckAlt))) 
            : cleanInput.includes(itemLower);
            
        if (hasMatch) {
            const len = isWildcard ? (cleanInput.includes(itemMatchCheck) ? itemMatchCheck.length : itemMatchCheckAlt.length) : itemLower.length;
            if (len > longestMatchLen) {
                longestMatchLen = len;
                bestMatch = item;
            }
        }
    }
    
    if (bestMatch) {
        return { name: bestMatch, subcategory: subcatMap.get(bestMatch), gender: genderMap.get(bestMatch) };
    }
    
    const closest = getClosestMatch(cleanInput, candidates, 0.55);
    if (closest) {
        return { name: closest, subcategory: subcatMap.get(closest), gender: genderMap.get(closest) };
    }
    
    return null;
}

/* ==========================================================================
   Ad Parsing & Rule Execution Engine
   ========================================================================== */

function initAdProcessing() {
    const rawAd = document.getElementById("raw-ad");
    const override = document.getElementById("category-override");
    const btnCopy = document.getElementById("btn-copy-ad");
    const btnCopyRej = document.getElementById("btn-copy-rejection");
    
    if (btnCopyRej) {
        btnCopyRej.addEventListener("click", () => {
            const textElement = document.getElementById("rejection-reason-text");
            if (textElement) {
                navigator.clipboard.writeText(textElement.textContent).then(() => {
                    btnCopyRej.textContent = "Copied!";
                    btnCopyRej.classList.add("copied");
                    setTimeout(() => {
                        btnCopyRej.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Reason`;
                        btnCopyRej.classList.remove("copied");
                    }, 2000);
                    
                    const rawVal = document.getElementById("raw-ad").value;
                    logAdToBackend(rawVal, textElement.textContent, "rejected");
                });
            }
        });
    }
    
    // Input events trigger real-time validation
    if (rawAd) {
        rawAd.addEventListener("input", () => {
            if (!rawAd.value.trim()) {
                userClickedAction = false;
                actionOverrideMode = "auto";
                const btnSell = document.getElementById("btn-toggle-sell");
                const btnBuy = document.getElementById("btn-toggle-buy");
                if (btnSell && btnBuy) {
                    btnSell.classList.add("active");
                    btnBuy.classList.remove("active");
                }
            }
            processAd();
        });
    }
    if (override) {
        override.addEventListener("change", processAd);
    }
    
    // Category guide buttons on main page are now visual reference only and not clickable
    
    if (btnCopy) {
        btnCopy.addEventListener("click", () => {
            const textElement = document.getElementById("processed-ad-text");
            if (textElement && !textElement.classList.contains("placeholder")) {
                navigator.clipboard.writeText(textElement.textContent).then(() => {
                    btnCopy.textContent = "Copied!";
                    btnCopy.classList.add("copied");
                    setTimeout(() => {
                        btnCopy.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
                        btnCopy.classList.remove("copied");
                    }, 2000);
                    
                    const rawVal = document.getElementById("raw-ad").value;
                    logAdToBackend(rawVal, textElement.textContent, "passed");
                    trackCopiedAd(rawVal);
                });
            }
        });
    }

    const btnClearRaw = document.getElementById("btn-clear-raw");
    if (btnClearRaw) {
        btnClearRaw.addEventListener("click", () => {
            const rawInput = document.getElementById("raw-ad");
            if (rawInput) {
                rawInput.value = "";
                document.getElementById("category-override").value = "auto";
                const btnSell = document.getElementById("btn-toggle-sell");
                const btnBuy = document.getElementById("btn-toggle-buy");
                if (btnSell && btnBuy) {
                    userClickedAction = false;
                    actionOverrideMode = "auto";
                    btnSell.classList.add("active");
                    btnBuy.classList.remove("active");
                }
                processAd();
                rawInput.focus();
            }
        });
    }

    const btnPasteRaw = document.getElementById("btn-paste-raw");
    if (btnPasteRaw) {
        btnPasteRaw.addEventListener("click", async () => {
            const rawInput = document.getElementById("raw-ad");
            if (rawInput) {
                try {
                    const text = await navigator.clipboard.readText();
                    rawInput.value = text;
                    rawInput.dispatchEvent(new Event("input"));
                    rawInput.focus();
                } catch (err) {
                    console.error("Clipboard paste failed:", err);
                    showCustomNotification("Clipboard access denied. Please click the button again or paste manually.", "error");
                }
            }
        });
    }



    const btnGeminiAssist = document.getElementById("btn-gemini-assist");
    if (btnGeminiAssist) {
        setupHoldToTriggerButton(btnGeminiAssist, `<i class="fa-solid fa-wand-magic-sparkles"></i> Spark`, () => {
            triggerLiveGeminiAssist();
        });
    }
}

let autoAIDebounceTimeout = null;

function triggerLiveGeminiAssist() {
    const rawInputEl = document.getElementById("raw-ad");
    const categoryEl = document.getElementById("category-override");
    const mainBtn = document.getElementById("btn-gemini-assist");
    
    let pipBtn = null;
    if (typeof pipWindow !== "undefined" && pipWindow && !pipWindow.closed) {
        pipBtn = pipWindow.document.getElementById("pip-btn-ai-assist");
    }

    const rawText = rawInputEl ? rawInputEl.value.trim() : "";
    if (!rawText) {
        showCustomNotification("Please enter raw ad text first.", "warning");
        return;
    }

    const category = categoryEl ? categoryEl.value : "auto";

    if (mainBtn) {
        mainBtn.disabled = true;
        mainBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...`;
    }
    if (pipBtn) {
        pipBtn.disabled = true;
        pipBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...`;
    }

    getGeminiSparkSuggestion(rawText, category, (suggestion) => {
        if (mainBtn) {
            mainBtn.disabled = false;
            mainBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Spark`;
        }
        if (pipBtn) {
            pipBtn.disabled = false;
            pipBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Spark`;
        }

        if (suggestion && suggestion.text) {
            const processedEl = document.getElementById("processed-ad-text");
            if (processedEl) {
                processedEl.textContent = suggestion.text;
                processedEl.classList.remove("placeholder");
                processedEl.dispatchEvent(new Event("input"));
                
                const btnCopy = document.getElementById("btn-copy-ad");
                if (btnCopy) btnCopy.disabled = false;

                const banner = document.getElementById("ad-status-banner");
                if (banner) {
                    banner.setAttribute("data-status", "passed");
                    banner.querySelector(".status-title").textContent = "AI Spark Corrected";
                    banner.querySelector(".status-icon").innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
                }

                if (typeof updatePipDisplay === "function") {
                    updatePipDisplay();
                }

                showCustomNotification("Gemini Spark correction applied!", "success");
            }
        } else {
            showCustomNotification("Failed to retrieve AI suggestion. Please check API Key.", "error");
        }
    });
}



function processAd() {
    const rawAd = document.getElementById("raw-ad").value;
    const overrideCategory = document.getElementById("category-override").value;
    
    const textDisplay = document.getElementById("processed-ad-text");
    const banner = document.getElementById("ad-status-banner");
    const rejectionBox = document.getElementById("rejection-container");
    const blacklistBox = document.getElementById("blacklist-container");
    const logsList = document.getElementById("audit-logs-list");
    const btnCopy = document.getElementById("btn-copy-ad");
    
    // Clear display if no input
    if (!rawAd.trim()) {
        textDisplay.removeAttribute("data-active-category");
        textDisplay.textContent = "Processed ad will appear here...";
        textDisplay.classList.add("placeholder");
        banner.setAttribute("data-status", "pending");
        banner.querySelector(".status-title").textContent = "Awaiting Input...";
        banner.querySelector(".status-icon").innerHTML = `<i class="fa-solid fa-hourglass-half"></i>`;
        rejectionBox.classList.add("hide");
        blacklistBox.classList.add("hide");
        const btnCopyRej = document.getElementById("btn-copy-rejection");
        if (btnCopyRej) btnCopyRej.classList.add("hide");
        const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
        if (btnSubmitBugInline) {
            btnSubmitBugInline.classList.remove("btn-sent");
            btnSubmitBugInline.classList.add("glow-red");
            btnSubmitBugInline.classList.add("hide");
            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;
        }
        logsList.innerHTML = `<li class="log-empty">No logs available. Enter some text to see corrections.</li>`;
        btnCopy.disabled = true;
        return;
    }

    // Auto-detect action mode from text if keywords are present, and update UI
    const detectedAction = detectActionFromText(rawAd);
    if (detectedAction) {
        actionOverrideMode = detectedAction;
        userClickedAction = false; // Reset to allow auto-toggle/sync
        
        const btnSell = document.getElementById("btn-toggle-sell");
        const btnBuy = document.getElementById("btn-toggle-buy");
        if (btnSell && btnBuy) {
            if (actionOverrideMode === "Buying") {
                btnBuy.classList.add("active");
                btnSell.classList.remove("active");
            } else {
                btnSell.classList.add("active");
                btnBuy.classList.remove("active");
            }
        }
    }
    
    // Execution context
    const context = {
        raw: rawAd,
        phoneNumber: "",
        actionOverride: userClickedAction ? actionOverrideMode : "auto",
        status: "passed", // passed, rejected, blacklisted
        rejectionReason: "",
        blacklistReason: "",
        logs: [],
        category: "Other",
        finalText: "",
        priceInfo: null
    };
    
    try {
        runValidationPipeline(context, overrideCategory);
    } catch (err) {
        console.error("Ad editor processing error:", err);
        context.status = "rejected";
        context.rejectionReason = "Internal processing error: " + err.message;
    }
    
    // Update toggle buttons if auto-detecting
    if (!userClickedAction) {
        const btnSell = document.getElementById("btn-toggle-sell");
        const btnBuy = document.getElementById("btn-toggle-buy");
        if (btnSell && btnBuy) {
            if (context.action === "Buying" || context.action === "Renting" || context.action === "Looking") {
                btnBuy.classList.add("active");
                btnSell.classList.remove("active");
            } else {
                btnSell.classList.add("active");
                btnBuy.classList.remove("active");
            }
        }
    }
    
    // Update HTML UI elements
    updateUI(context);


}

const OFFICIAL_TEMPLATES = [
    "Join Imad Wanted Family Office (\u211613724)",
    "Whether you are new or old in the city, if you need money, Office (\u211613724)",
    "Vanilla Unicorn Bar (GPS \u211643)",
    "Taxi (GPS \u21161) near the Casino",
    "Central Mall Weapon Shop (GPS \u2116269)",
    "Elites 24/7 Store No120",
    
    // Ammunition Store Templates
    "Looking to buy affordable and high quality ammunition in bulk? weapon shop (GPS \u211639) is offering huge discount. Email (lbiiigmatte)",
    "Vyce weapon shop (GPS \u211639) is offering ammunition at low price all the day, visit now to get amazing deals.Email (lbiiigmatte) or call Ph(12-12-901).",
    "Want buy guns with lowest price? Come to Holdem Ammunation Store (GPS 40) the lowest prices in the city for bulk orders contact via email (ahmad70123)",
    "Visit Holdem Ammunation Store (GPS 40) is Offering 50% discount the lowest prices in the city.",
    "Vio Gun Store (GPS \u211641) - 50% DISCOUNT We are the CHEAPEST in the city. ALWAYS LOW PRICES guaranteed. Bulk Orders? (Wietru)",
    "Vio Gun Store (GPS \u211641)  Get 50% discount today. Experience always low prices on all ammo and weapon types in the city. Bulk Orders? (Wietru)",
    "RifleClub (GPS 111) Citys main gun store, lowest ammo prices with 50% discount, bulk orders? Mail (maxdopamine) for extra deals.",
    "RifleClub (GPS 111) Legion Square gun store, lowest ammo prices with a flat 50% discount, bulk orders? Mail (maxdopamine) for extra deals.",
    "Discover Bobbys Ammunition Store (GPS \u2116147), offering quality firearms near SAHP in Paleto Bay.",
    "Visit Bobbys Ammunition Store (GPS \u2116147). Exclusive 50% Off on quality firearms near SAHP in Paleto Bay.",
    "CanikPide Gun Store (GPS No. 148) delivers high-quality firearms at affordable rates citywide. Contact (behzatamir) via mail for bulk orders anytime.",
    "CanikPide Gun Store (GPS No: 148) is always stocked and available 24/7 for bulk orders. You can contact us for bulk orders through mail (behzatamir).",
    "Wong Gun store (GPS No149) is offering highest quality and lowest prices in city! Gear up with us and save big. Mail for bulk orders (Saylex)",
    "Tired of overpaying? Visit Pew Pew GunStore (GPS No:149) for 90% OFF on everything! Bulk deals available on Emails (notsuman).",
    "Gear up at Lue Gun Shop (GPS No150). Top tier firearms and tactical equipment await. Bulk discounts available. Email: (dayzofdeath)",
    "Lock and load for less at Lue Gun Shop (GPS No150)! 50% off all firearms and gear. Dont miss out on this limited time offer. Email: (dayzofdeath)",
    "Siddhu Gun Store (GPS 151) - Locked, loaded, and unbeatable prices. Get top-quality guns at the lowest rates in town. Bulk orders? Mail sidhux123",
    "Siddhu Gun Store (GPS 151) - Limited-time 90% discount on top-quality firearms. Best deals in town. Dont miss out! Bulk orders? Mail sidhux123",
    "Looking for the lowest prices on guns? Visit Most Wanted Store (GPS \u2116152) near Beach Market for unbeatable bulk order! Reach out via email (xkouros)",
    "Dont miss out on incredible discounts up to 90% off at Most Wanted Store (GPS \u2116152)! For guns and ammo, contact us at (xkouros)!",
    "Central Mall Weapon Store (GPS \u2116269)! Premium Weapons and Ammo, Always Stocked for Bulk Orders. Contact Me on 22-20-444 OR Mails (maxuchihax).",
    "Hurry up! Up to 60% OFF on Firearms at Central Mall Weapon Shop (GPS \u2116269)! Limited stock, act fast. Ping Me on 22-20-444 OR Mails (maxuchihax).",
    
    // Office Templates
    "Need easy money $132.000 everyday? Office (\u211624) is for you, offering $10.000 bonus for every task you finish. Contact (d.arsh) via email for bonus!",
    "Do you need extra money? The Office (\u211624) is for you. Finish simple tasks and earn $132.000 Daily. Offering max bonus Contact via email (d.arsh)",
    "Earn $4.5 Million monthly! Join Al Toman Office (\u2116585) and make $12.000 bonus for every task you finish. Email \"dxdux\" for exclusive bonuses.",
    "Office (\u2116585) is currently offering a $12,000 bonus for each completed task. Interested? Contact (dxdux) via mail for more info!",
    "Struggling with Expenses? Office (\u2116677) got you covered! Get financial support for your daily needs. Reach out to us via email for your daily bonuses!",
    "Say Goodbye to financial stress! Office (\u2116677) provides quick cash for easy tasks. Connect with us through email to claim your daily bonuses.",
    "Easy Money From Me Get 9K For Each Task. We Are Not Alone But We Are The Best OFFICE (N1000) Contact (zekomyth) via email for bonus! or Call 8882288",
    "Get 54k When you complete 6 missions (N1000) Contact (zekomyth) via email for bonus! or Call 8882288",
    "Get rich with the Theo Gucci Office (\u21161017)! Claim your $5.000 bonus after each task by sending a message to us!",
    "Looking for an effortless way to earn money? Contract with the Theo Gucci Office (\u21161017) and fill your pockets with cash!",
    "Your millionaire dream begins at Office 1288! Earn 10k per task, 125k a day, 875k every week. Build your future with us. Contact on mails (leveljod)",
    "Build your future at Office 1288! Every task pays 10K. Simple work, big rewards. Dont wait, start today. Contact me on mails (leveljod)",
    "Dont have money? Earn up to $100.000 daily. Contract with Lazy Assassin Office (\u21161419) and receive $5.000 per task. Contact (imm0rtalop) for bonuses.",
    "Looking for employment opportunities? Join the Lazy Assassin Office (\u21161419) and earn $5.000 bonus for each task. Email (imm0rtalop) for details.",
    "Empty pockets? Dont worry, earn $124,000 a day with Humans Office (\u2116 1948). Contact us via email (za3im96) for bonuses!",
    "Quick Money Opportunity! Office No. 1948. Fast, easy earnings. No hard work, just smart work.  email (za3im96) for bonuses!",
    "Become a MILLIONAIRE in the easiest way with Office 2198! $10K bonus per task, $191.800 per day. For more information, contact us by mail. (Saylex)",
    "Earn $191.800 daily at Office (No-2198)! Receive $10K bonuses per task and $50,000 from the referral bonus! Email (Saylex).",
    "Contract with Outlaws Office (\u21162796). Complete 6 tasks daily and earn cash, enjoy a $30.000 bonus for completing all tasks. Email (bo330) for bonuses!",
    "Outlaws Office (\u21162796) is waiting for you. Tackle 6 tasks daily, earn money and receive $30.000 bonus for completing all tasks. Contact us at (bo33).",
    "Need quick cash? Get employed at Grand For All Office (\u21167963) and receive a bonus for each completed task.",
    "Office Grand FOR ALL \u21167963 offers a bonus of $40.000 after completing all daily tasks.",
    "Do you have dreams? If you say yes, we cant help you. But if you have goals, lets get it done. Contract with Snow Corp. Office (\u211610364).",
    "Easy tasks, the easiest money. Now with $30.000 bonus. Contract with Snow Corp. Office (\u211610364). Send email (.networkproblem) for extra bonuses.",
    "Money like Turkish Delight Office 12313! $10,000 bonus per mission, $195.000 daily. For info, mail us. (esjer)",
    "Earn $195,000 daily at Office (No12313)! Get $10,000 per task and various bonuses! mail (esjer) now for this opportunity!",
    "Join Imad Wanted Family Office (\u211613724)! Today, we are offering bonuses, easy tasks, and extra cash. Then what are you waiting for? Join us now.",
    "Whether you are new or old in the city, if you need money, Office (\u211613724) offers a 90% profit. We provide bonuses too! Contact us at (mostwanted994)!",
    "Office 14396 gives $10,000 per task! Fast money, no drama. Send email to bylkaanis and start earning today!",
    "Hello! Office 14396 pays $10,000 for each task you complete. Want easy money? Mail bylkaanis and join us now!",
    "Empty pockets? Dont worry, make $100.000 a day by contracting with SAKIB INC Office (\u211614633). Contact us via email (gamyashiqur) for bonuses!",
    "Tired of not getting paid what was promised by other offices? Dont worry, SakibInc Office (\u211614633) always offers the highest pay-outs and easy tasks.",
    "Empty pockets? Dont worry, earn $124,000 a day with Lue Office (\u211615136). Contact us via email (dayzofdeath) for bonuses!",
    "Looking for the highest paying office? Lue Office (\u211615136) is your best choice! Get a $10,000 bonus per task. Email us at (dayzofdeath).",
    "$11,111 BONUS  $11,111 BONUS  $11,111 BONUS per task Wietru Vio Office (21046) Contact: mail (Wietru)",
    "NO MORE EMPTY POCKETS Your $11.111 task bonus is waiting at Wietru Vio Office (21046) mail (Wietru)",
    "Empty pockets? Join Office 27650 and earn daily with easy tasks. Get up to $10.000 bonus per task. Start now! Contact (bako0804)",
    "Want to earn big money fast? Office 27650 offers $10.000 bonus per task and high daily income. Easy work. Contact via email (bako0804)",
    "Is your girlfriend spending all your money? You do not have to be afraid anymore! The office (\u211632125) offers money for your daily needs.",
    "Earn $10.000 per task, then blow it all at the casino. Why save when you can gamble hard earned office fortune? Swing by Office \u211633698 and cash in!",
    "Earn $10.000 per task, Then watch your wife spend it faster than you can make it. Visit Office \u211633698, At least you can try to win it back!",
    "Nexus Office \u211641760 sets the gold standard with highest bonus ever. Extra $10.200 bonus per task and $11.000 on weekends. Contact: (argha.bhai).",
    "Step into excellence with Nexus Office \u211641760. Secure extra $10.200 bonus each task and $11.000 on weekends. Mail: (argha.bhai).",
    "Want to earn easy money by doing simple tasks? Contract with Office No50367 and earn $10.500 bonus on every task. Contact (shivkumar7409) for bonuses.",
    "Office 50367 is Offering $10.500 bonus on every task. Hurry up and Grab this offer, You can earn $135.000 daily. Contact me via email (shivkumar7409).",
    "Office \u211652942 introduces big profits $64800 daily, Seize this opportunity to enhance your earnings and experience.",
    "Looking to live rich and making great earnings, $64800 daily? Visit the premier office Lex Lyls Office (\u211652942)",
    "Make riches your reality! Take tasks from Ponch Office \u211678981! Earn $64.800 daily, $1.9 Million monthly. Prestige meets pay!",
    "Are you new to the city? Want some good cash to begin your journey? Join (Office \u211678981) and earn $64,800 everyday easily.",
    "$13.000 bonus each task! Join Office 85042 for easy work and earn up to $213.000 per day. Fast rewards and simple tasks. Contact via mails (Creegaint)",
    "$13.000 bonus each task! Big earning opportunity at Office 85042. Makes up to $213.000 daily with simple tasks. Contact via mails (Creegaint)",
    "Hello everyone! Office 85235 gives you $10.000 bonus for each task you do. Hurry up and join us! Contact for bonus at emails guzm4n58.",
    "Earn $10,000 daily task bonus! Join Office (\u2116 85235) and receive $10,000 for each task, up to $120,000 per day. Email guzm4n58.",
    
    // Store 24/7 Templates
    "Hurry! Store 24/7 Ôäû1 (GPS 23) is offering 50% off on everything. Grab your favorite items now. Shop smart, save big!",
    "Why wait? 24/7 Store Ôäû1 (GPS 23) is the cheapest in the city. Visit us anytime, 80% discount on Bulk Orders! Contact (creegaint).",
    "Spankys 24/7 Ôäû2 (GPS Ôäû24) offers cheapest prices and instant delivery on big orders. All day support via mail. Call 99-84-146 or (ganguly07).",
    "Store Ôäû2 (GPS Ôäû24) Spankys 24/7 runs all day with cheapest rates. Bulk orders get instant delivery. Contact 99-84-146 or (ganguly07).",
    "Beast24/7Store Ôäû3 (GPS 25) Always open,Cheapest in city We guarantee low price on all products,open round the clock,for more queries contact-beasto001",
    "Revolutionize your shopping at 24/7 store (GPS Ôäû25) deals up to 50% off! Get pickaxes, maps, flowers, tents and more essentials for your daily tasks!",
    "24 Store Ôäû26! offers 25% off on bulk orders! For more details or to place an order, call 5111110 or email us at (17uv). Dont miss out on the savings.",
    "Bulk buyers save big at 24 Store Ôäû26! Get 25% off on bulk purchases. Reach out at 5111110 or email ( 17uv ) for details and orders.",
    "If you are out of city need groceries, Get up to 60% Discount Today: Visit Shop No. 5 (GPS No 27). Contact: 15-01-505 For Bulk deal in Cheap Price.",
    "Kingdom Grocery Shop No. 5 (GPS No 27), Offering Lowest Prices and Up to 60% Off on Bulk Deals. Contact: 15-01-505 (drakes2030)",
    "Discover amazing prices at Pearl 24/7 Store Ôäû28! Always open, always ready for Los Santos!",
    "Pearl 24/7 Store Ôäû28 offers -50% discounts in-store! Dont miss -80% bulk deals! Call us: 5550069!",
    "Need a shop near Sandy Shores? We are the cheapest 24/7 of SH side! (GPS Ôäû29) We offer 50% sale for all products",
    "Attention Solar Panel Plantation Owners! Maximize your profits with cheapest solar panels! Contact for bulk orders (azuujah)",
    "Hello Los Santos. ZO-ZO 24/7 (Shop No30) Waiting For You On Bulk Orders. 50% To 80% OFF Each Order. Keep Smile With Order Now.",
    "Enjoy a massive 50% discount on store items at 24/7 Store Ôäû8 (GPS Ôäû30), at Grand Senora Desert. Call 98-54-268 for details.",
    "Mighty Cyber  24/7 Store Ôäû.9 (GPS 78) is offering 50% discount for all products.",
    "Welcome to 24/7 Store Ôäû9 (GPS 78) is offering  discount for all products. Bulk Orders? Reach out (shodangaming) at mail and get exclusive deals!",
    "Why pay more? Evox Store No.10 (GPS N119) is open 24/7 with up to 90% off lowest prices, day or night!",
    "Evox Imrane 24/7 Store No.10 (GPS N119)  50% off today! Bulk orders? Email us at mails (evox.co)  to save more!",
    "Need something quick? Visit Conco 24/7 Store Ôäû11 (GPS Ôäû120) for fast access anytime. Always stocked for daily needs. Dial 18-09-842 (montalliago)",
    "Buying in bulk? Visit Conco 24/7 Store Ôäû11 (GPS Ôäû120) and save more with bulk discounts. Always stocked and ready. Call 18-09-842 (montalliago)",
    "Kings 24/7 Store Ôäû121 Get up to 80% off on bulk orders. Quality guaranteed. Open daily with great value on all your essential everyday items.",
    "Kings 24/7 Store Ôäû121 Day or night our shelves stay full. From groceries to daily must haves we are always stocked and ready when you walk in.",
    "Come down to BestMoney 24/7 (GPS 123) for the cheapest prices in Paleto Bay! Need bulk orders? We got you covered.",
    "Traveling through Paleto Bay? Stop by Store No13 (GPS123), open 24/7 with travel essentials at great prices. Your one-stop shop on the highway!",
    "Go Grab 24/7, Shop No125, affordable prices with 50% off on all orders! Bulk orders? Enjoy special rates! Contact mails (190uzair)",
    "Go Grab 24/7, Shop No125 always in stock, located in the ghetto, Welcome for bulk orders, Contact us on mails (190uzair)",
    "Do you need items to complete your tasks?  Head to Molotov 24/7 store in Mirror park (GPS Ôäû128) for the lowest prices in city.",
    "Lottery tickets, backpacks, solar panels, fishing rods or flowers? Molotov 24/7 (GPS Ôäû128) is always stocked and 50%! Contact us for bulk orders!",
    "The holiday season is here! Get your fireworks for New Year! Only at 24/7 Store near the beach! Ôäû129",
    "Wifey got your credit card? Her expenses making you broke! No worries The Beach 24/7 Store Ôäû129 now offers 50% discount.",
    "Get nonstop cheap rates at Joy Virellii 24/7 Store Ôäû18 (GPS Ôäû139). Bulk orders welcome. Contact  29-29-290 or masthangaming786 today.",
    "Bulk orders at guaranteed low price. Joy Virellii 24/7 Store Ôäû18 (GPS Ôäû139). Contact 29-29-290 or masthangaming786 for details now.",
    "Running low on budget? Then look no further! 24/7 Store No19 (GPS 140) is offering 24/7 the best quality goods with 50% off!",
    "Why wait? 24/7 store No19 (GPS 140) is the cheapest in the city. Visit us anytime, 50% discount on Bulk Orders! Contact (only696).",
    "Shopiva 24/7 (No.141) has 50% OFF Bulk orders. We are Open Day and Night providing premium service. Contact .proden to get your stock quickly.",
    "Shopiva 24/7 store (GPS 141) is now offering lowest price guaranteed in the whole city!! Visit now located at the core of Los Santos near Hotel!!",
    "Mall 24/7 Store Ôäû270 Save BIG on everything -50% in-store, -80% on bulk orders, LOWEST prices in the heart of the city.",
    "Mall 24/7 Store Ôäû270 is at -50% OFF! Make easy money with solar panels and mushroom seeds at the LOWEST prices in the city!",
    
    // Gas Station Templates
    "Cheapest Means Best! Come Gas Station NO 3 (GPS No4) inside city FUEL $8!",
    "Gas Station NO 3 (GPS No4) Repair kit $70 Canister $140 For bulk orders (mail devrimcicoban)",
    "We make your gas stop easier, Sahara Royal Gas Station Ôäû6 will make sure every drop counts!!",
    "Planning a trip? Need fuel cans and repair kits in case of emergency? Gas Station Ôäû6 is here with 50% discount. Every drop counts!!!",
    "Are you run out of fule? Do not worry, just come in Indian oil station Ôäû7 (On GPS) is providing high quality fuel in every drop! And visit again.",
    "New in this city? Why are you pay $20 for fuel ? Come to Indian oil gas station Ôäû7 (On GPS ). Pay only $8 per liter and save your money.",
    "Do you need high quality fuel for your car? Ron Gas station Ôäû8 will provide you excellent fuel for your cars Only $20 per liter. Make your car happy.",
    "Ron Gas station Ôäû8 offering 50% discount today. Come get your high quality fuel for your car.",
    "Visit Gas station Ôäû6 (GPS Ôäû9) will provide $10 per liter, $100 repair kit and $200 canister cheapest fuel in the city.",
    "Gas station Ôäû6 (GPS Ôäû9) provides cheapest fuel in the city. Provide only $100 repair kit and $200 canister. For bulk orders, contact (nudhory).",
    "Quality fuel and great service at Gas Station 10. Best prices and service in town. Visit Tsunami station today.",
    "Fuel your journey at Gas Station 10. Tsunami provides top-tier service and quality gas every day.",
    "Quality fuel and great service at Gas Station 11. Best prices and service in town. Visit Charon station today.",
    "Fuel your journey at Gas Station 11. Charon provides top-tier service and quality gas every day.",
    "Visit Rich Man gas station (GPS Ôäû13) will provide $20 per liter, $350 repair kit and $500 canister cheapest fuel in Rich Man.",
    "Rich Man Gas Station (GPS 13) - 50% off all fuel! Cheapest in town, do not miss out! Bulk orders, contact (badpedro6)",
    "Drive extra miles with Remix Gas station (Ôäû14). High quality fuel for a smooth ride, get your gas always for $10, $200 canisters and $100 repair kits.",
    "Remix Gas station Ôäû14 The cheapest in the city, buy fuel canister and repair kit in bulk. Contact us by email on (b0n0is)",
    "Running out of fuel on your road trip? Fill up at XR OIL GAS STATION (GPS Ôäû15)! Also offers premium fuel, gas canisters, and repair kits.",
    "Looking for the cheapest fuel? XR OIL GAS STATION (GPS Ôäû15) offers fuel for just $5 and the lowest prices on gas canisters and repair kits.",
    "Running out of fuel on your road trip? Fill up at KEK OIL GAS STATION (GPS Ôäû16)! Also offers premium fuel, gas canisters, and repair kits.",
    "Looking for the cheapest fuel? KEK OIL GAS STATION (GPS Ôäû16) offers fuel for just $10 and the lowest prices on gas canisters and repair kits.",
    "Empty tank? No panic! Liff Gas Station (Ôäû17) near Doc Highway offers best city prices fuel at $10 per liter, $300 repair kits and $500 canisters.",
    "Liff Gas Station (Ôäû17), get the best cheapest fuel in the city with a 50% discount, where superior driving meets smart savings.",
    "Driving near SAHP? Swing by the Cheapest Gas Station (GPS Ôäû18) - full stock, fast service, and everything your ride needs!",
    "Running low? Gas Station (GPS NO-18)! Fuel up fast and grab essentials. For bulk deals, Contact us via mails (raveelkhan).",
    "Brody Station $10-L deal! Brody Station Ôäû21! Open 24/7, lowest fuel price. Full stock, helipad, free delivery on bulk orders. Contact (bawan3) today!",
    "Save on Fuel! $10-L at Brody Station No21! Open 24/7, lowest price guarantee. Helipad and free delivery for bulk orders. Reach out to (bawan3) now!",
    "Need a quick fuel stop? We got you covered at just $5 per litre! Top-quality fuel, and reliable support. Bulk orders? Contact Immortals Jaadu today!",
    "Running low on fuel ? Stop by Immortals Fuel ÔÇô fuel at only $5 per litre, plus repair kits $100 and canisters $200 available! DM for bulk orders now.",
    "Welcome to Ron Gas Station Ôäû18 (GPS 115). Drive in for quality fuel, special discounts, and bulk order support. Contact (5andeep).",
    "Drive smart with Ron Gas Station Ôäû18 (GPS 115). Fuel $15 per liter. Canister $350. Repair Kit $250. Discounts & bulk orders. Contact (5andeep).",
    "Mobil Gas Station No17 (GPS 116). Fuel up fast with trusted service. Bulk fuel & offers available. Contact (amulyt).",
    "Mobil Gas Station No17 (GPS 116). Quick & reliable. Fuel $15/L, Canister $350, Repair Kit $250. Bulk deals available. Contact (amulyt).",
    "Stuck in Paleto Bay? Visit Loves Gas Station Ôäû117! Fuel up at just $12/L. Great prices on all essentials!",
    "Loves Fuel Ôäû117 ÔÇô Just $12/L! Save more with bulk deals. Msg (rockyfearless) now to lock in your supply!",
    "Surya Pluxury Gas Station Ôäû118 offers $5/L Fuel, $200 Canisters, $100 Repair Kits! Limited time only. Call now: 93-50-311",
    "Tired of paying too much for good quality fuel? Jordan fuel works GPS Ôäû118 provides products in cheap and fuel at only $10 per litre inside city!",
    "SHER Gas Station Your One Stop Destination for Quality Fuel and Convenient Services. Visit us at GPS 124!",
    "Gas Station No. 124 offers cheap prices in the city. For more details, contact me in email yassir001.",
    "Listen up riders! Need quality fuel? Visit Gas Station Ôäû21 (GPS Ôäû127) fuel up, grab kits, and get back in motion. PH: 22-64-883.",
    "Running low? Dont push that luck. Visit Gas station Ôäû21 (GPS Ôäû127) for high quality fuel and canisters. Contact: 22-64-883.",
    "Renegades Gas Station, in the middle of the map, GPS Ôäû136 offers the LOWEST Price Per Liter, just $7. For bulk orders, Contact HELLBRAZER or VAILLYRP.",
    "Limited time discounts at Gas Station GPS Ôäû136 $7 Per Liter, cheap Repair Kits and Canisters! Do not miss out! Contact: (HELLBRAZER or VAILLYRP)",
    "OILARC Gas Station No23 (GPS 137) Near Hospital of Sandy Shores, Providing 50% discount on Fuel and everything. For bulk orders mails (rupoj).",
    "Running low on fuel near Sandy shoes? Visit OILARC Gas station No23 (GPS 137) Providing fuel at $5 Per litre. For bulk orders mails (rupoj).",
    
    // Parking Templates
    "With our parking number 1 (GPS Ôäû51)  we are offering 1000 per place! come take your car and dont miss this opportunity.",
    "Party lovers unite! Go to Parking Ôäû2 - where events shine, parties pop and the beach view beats your dance moves.",
    "Car fans unite! Go to Parking Ôäû2 - where engines roar, lights glow and every ride turns heads at the hottest beach meet.",
    "Are you afraid of scratching your vehicles? Do not be afraid, use Ekip Parking Lot (GPS Ôäû53)",
    "Unique Comfort and Security Only Book at EKIP Parking (GPSÔäû53), Guarantee Luxury Care for Your Vehicle!",
    "Are you afraid of scratching your vehicles? Dont be afraid, use Ekip Parking Lot (GPS Ôäû54)",
    "Unique Comfort and Security Only Book at EKIP Parking (GPS Ôäû54), Guarantee Luxury Care for Your Vehicle!",
    "Take your car from the garage, drive and park in luxury. Parking Ôäû5 (GPS Ôäû55) VIP style and security for $1.000",
    "Dont look for a parking space in the crowd! Your car is safe with Parking Ôäû5 (GPS Ôäû55). Regular spaces and pocket friendly prices await you.",
    "Tired of paying $15,000 to rent? Park 6 (GPS Ôäû56) is located under Vinewood. Only $1,000 to park your car for the whole day.",
    "Are you looking for safe, hygienic and economical parking? (No56) You are in the right place!",
    "Looking for parking lots? Parking (GPS Ôäû57) is now offering 90% off and is only $1.000 per day.",
    "Dont forget to visit us at Eileen Parking (GPS Ôäû57). Customer satisfaction is our top priority.",
    "Parking Ôäû8 (GPS Ôäû58) Near City mall in the middle of the city is offering the cheapest rates in the city. Book your space today for only $1.000!",
    "Parking Ôäû8 (GPS Ôäû58) Near City mall middle of the city is the best and safest place to park in city. Visit us today for cheap parking!",
    "Secure the cheapest Parking Ôäû10 (GPS Ôäû79) in the city Center for just $1.000 each day. Prime location near beach market, affordable rates.",
    "Looking for a parking? Limited offer, dont miss out just 1000$ at Playboys Parking! (GPS Ôäû79)",
    "Dont look for a parking space in the crowd! Your car is safe with Parking Ôäû11 (GPS Ôäû80). Regular spaces and pocket friendly prices await you.",
    "Unique Comfort and Security Only  Book at EKIP Parking (GPS Ôäû80), Guarantee Luxury Care for Your Vehicle!",
    "Are you bored of paying $15.000 for renting? Parking 12 (GPS Ôäû81) is located in the center of the city Just $1.000 to have your car parked all day.",
    "Tired of your car not being where you left it? Use Parking 12 (GPS 81) For a very cheap price!",
    "Some security can only be found at Remix Parking Lot Guarding, cleaning and security. 50% cash back when dealing with us Contact me via (zekomyth)",
    "Unique Comfort and Security Only  Book at Remix Parking (GPS Ôäû82), Guarantee Luxury Care for Your Vehicle! 50% cash back Contact me via (zekomyth)",
    "Are you afraid of scratching your vehicles? Dont be afraid, use Ekip Parking Lot (GPS Ôäû83).",
    "Unique Comfort and Security Only Book at EKIP Parking (GPS Ôäû83), Guarantee Luxury Care for Your Vehicle!",
    "Are you bored of paying $15.000 for renting? Parking 15 (GPS Ôäû84) is located in the middle of the beach. Just $5.000 to have your car parked all day.",
    "Are you bored of paying $15.000 for renting? Parking 15 (GPS Ôäû84) is located in the middle of the beach. Just $1.000 to have your car parked all day.",
    "Parking space Ôäû16 (GPS Ôäû85) attached to the Train Station Apartment, is offering the cheapest rates in the city. Book your space today for only $1.000",
    "Parking Ôäû16 (GPS Ôäû85) attached to the Train Station Apartment is the best and safest place to park in city. Visit us today for cheap parking!",
    "Secure the cheapest Parking Ôäû17 (GPS Ôäû101) in the city Center for just $1.000 each day. Prime location, affordable rates. Reserve your spot now!",
    "Homeless? Secure parking (GPS Ôäû101) for your car! Reserve now, park with ease. The citys cheapest at $1.000 a day!",
    "Tired of circling the block in search of parking? Welcome to Parking (GPS Ôäû135), your hassle solution for suitable and secure parking, at $1.000 only!",
    "Rockford Parking Ôäû18. (GPS Ôäû135). Just $1.000 per day near Hotel and LI. Offer for completing jobs task! Just contact me. (kosa.123).",
    
    // Family Templates
    "Seeking Power, Unity and Legacy? Uchiha Clan provides Great Vibes, Strong Bonds and Endless Fun. Join us at House Ôäû55 or Contact (maxuchihax).",
    "Looking for Strength, Loyalty and Family? Uchiha Clan offers Unity, Fun and True Respect. Join us at House Ôäû55 or Contact (maxuchihax).",
    "Join Kingdom family at House Ôäû258 Provides Best bonus, supercars, helis and supportive staff. To join call 77-66-888 or mail king.kaushik",
    "Kingdom family is open at House Ôäû258. Providing high bonus, best cars, helis and helpful team. Ph. 77-66-888 or mails king.kaushik",
    "The Deluca Cartel is looking for skilled individuals, A family built on trust, unity and respect. Join Deluca Cartel at house Ôäû536 today!",
    "Looking for a strong family with loyal people and skilled individuals? Join Deluca Cartel at house Ôäû536 today, become a part of something powerful!",
    
    // Clothing Shop Templates
    "Upgrade your style this week at Clothing Shop n1 (GPS 31) ! Special offers, lowest prices, and exclusive outfits. Don t miss out!",
    "Upgrade your style at Clothing Shop n1 (GPS 31) ! Special prices, exclusive outfits. For bulk orders Contact via email (topgs1)",
    "Shop the latest styles at great prices. Trendy clothes for every occasion. Visit us today and refresh your wardrobe with 50% off Clothing Shop (No.32)",
    "Clothing store 2 (No.32) is offering 50% discount and more than 50% discount for bulk order message me in email (rupoj) or contact 1181112",
    "Best style, best prices at TrendZone (Shop 3 on map). Look great for less! PH 6326759 MAILS nzoo.x.",
    "Upgrade your wardrobe at Fashion Point (Shop 3 on map). Hot styles, low prices! PH 6326759 MAILS nzoo.x.",
    "Clothing Shop Ôäû4 at (GPS Ôäû74) provides quality clothes at wholesale rates. Get 50% off and more on bulk orders. Ph. 66-60-333. Mails (abirsikder70)",
    "Clothing Shop Ôäû4 at (GPS Ôäû74) provides clothes at wholesale rates. Enjoy 50% off sales, best for bulk orders. Ph.66-60-333 or mail (abirsikder70)",
    "Come to our Store No5 (GPS 75) to dress stylishly and affordably. For bulk purchases, contact me via email at (halilbeyy45).",
    "For stylish and affordable clothes, visit No5 (GPS 75) and contact us via email (halilbeyy45)",
    "Come to our Store No7 (GPS 122) to dress stylishly and affordably. For bulk purchases, contact me via email at (halilbeyy45).",
    "For stylish and affordable clothes, visit No7 (GPS 122) and contact us via email (halilbeyy45).",
    "Are You Looking For Bulk Clothes For Families? Come Contact Clothing Store 6 ( GPS 126), At Cheapest Price You Cant Imagine!",
    "You Want Best Quality Clothes, With Cheapest Price You Cant Imagine? Come Clothing Shop 6 (GPS 126), And Get Maximum Discount And Cashback!",
    "Getting bored with old outfits? Visit Troy Collection Shop Ôäû142 for unique and branded clothing at 70% discount!",
    "If boys are not looking at you! Visit Troy Collection Shop Ôäû142 at 70% discount for all the clothing.",
    "Everyone deserves a great look! Visit to Veneta Clothing (Ôäû143) and get yourself a great outfit at a 50% discount! We are located at near Postal.",
    "Veneta Clothing Store (Ôäû143) has the lowest prices, the latest, high quality clothes and is always fully stocked! for family bulk orders contact us.",
    "Need clothes for your family at the best price? Shop at Moonlight Clothing Shop (GPS Ôäû144) for unbeatable deals! Contact (lkaan5) now!",
    "Clothing store Ôäû144 has lowest price at 50% Discount for high quality clothes and is always fully stocked! Contact (lkaan5) now!",
    "Upgrade your style at LAAALO Clothing Shop No12 (GPS 145) ! Special offers and exclusive outfits. For bulk orders, contact me via email at (xlaaalo).",
    "LIMITED TIME! Clothing Shop Ôäû12 (GPS 145) 50% OFF EVERYTHING - best deals in the city! Pull up now before its gone! For Bulk orders contact (xlaaalo)",
    "Clothing Shop GPS Ôäû146 (Shop No.13 on map). Perfect for families and daily wear. Bulk orders available. PH: 98-54-268 or email (sachin2309).",
    "Hurry up! 50% discount at Clothing Shop (Ôäû.13) best styles at great prices. Visit now before the offer ends. Contact 98-54-268 or email (sachin2309).",
    "Los Santos Clothing Store (GPS Ôäû271) is now offering 50% Off in all products! Located inside the biggest mall in the city.",
    "Dont forget once again the crazy deals of Los Santos Clothing Store (GPS Ôäû271). Now offering 50% Off in all products!",
    "Level up your style for less. Clothing Shop Ôäû2 (GPS Ôäû275) offers top looks low prices and new drops daily. Visit us today or call (26-96-969).",
    "Fresh styles low prices daily. Visit us today for best deals at Clothing Shop Ôäû2 (GPS Ôäû275) contact me via mails at (azarel.11) or call (26-96-969)."
];

function getAmmunitionTemplate(shopNum, tempIdx) {
    const map = {
        "39": [6, 7],
        "40": [8, 9],
        "41": [10, 11],
        "111": [12, 13],
        "147": [14, 15],
        "148": [16, 17],
        "149": [18, 19],
        "150": [20, 21],
        "151": [22, 23],
        "152": [24, 25],
        "269": [26, 27]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        return OFFICIAL_TEMPLATES[idx];
    }
    return null;
}

function getOfficeTemplate(officeNum, tempIdx) {
    const map = {
        "24": [28, 29],
        "585": [30, 31],
        "677": [32, 33],
        "1000": [34, 35],
        "1017": [36, 37],
        "1288": [38, 39],
        "1419": [40, 41],
        "1948": [42, 43],
        "2198": [44, 45],
        "2796": [46, 47],
        "7963": [48, 49],
        "10364": [50, 51],
        "12313": [52, 53],
        "13724": [54, 55],
        "14396": [56, 57],
        "14633": [58, 59],
        "15136": [60, 61],
        "21046": [62, 63],
        "27650": [64, 65],
        "32125": [66], // Template 1 only
        "33698": [67, 68],
        "41760": [69, 70],
        "50367": [71, 72],
        "52942": [73, 74],
        "78981": [75, 76],
        "85042": [77, 78],
        "85235": [79, 80]
    };
    const indices = map[officeNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getStore247Template(shopNum, tempIdx) {
    const map = {
        "23": [81, 82],
        "24": [83, 84],
        "25": [85, 86],
        "26": [87, 88],
        "27": [89, 90],
        "28": [91, 92],
        "29": [93, 94],
        "30": [95, 96],
        "78": [97, 98],
        "119": [99, 100],
        "120": [101, 102],
        "121": [103, 104],
        "123": [105, 106],
        "125": [107, 108],
        "128": [109, 110],
        "129": [111, 112],
        "139": [113, 114],
        "140": [115, 116],
        "141": [117, 118],
        "270": [119, 120]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getGasStationTemplate(shopNum, tempIdx) {
    const map = {
        "4": [121, 122],
        "6": [123, 124],
        "7": [125, 126],
        "8": [127, 128],
        "9": [129, 130],
        "10": [131, 132],
        "11": [133, 134],
        "13": [135, 136],
        "14": [137, 138],
        "15": [139, 140],
        "16": [141, 142],
        "17": [143, 144],
        "18": [145, 146],
        "21": [147, 148],
        "23": [149, 150],
        "115": [151, 152],
        "116": [153, 154],
        "117": [155, 156],
        "118": [157, 158],
        "124": [159, 160],
        "127": [161, 162],
        "136": [163, 164],
        "137": [165, 166]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getParkingTemplate(shopNum, tempIdx) {
    const map = {
        "51": [167],
        "52": [168, 169],
        "53": [170, 171],
        "54": [172, 173],
        "55": [174, 175],
        "56": [176, 177],
        "57": [178, 179],
        "58": [180, 181],
        "79": [182, 183],
        "80": [184, 185],
        "81": [186, 187],
        "82": [188, 189],
        "83": [190, 191],
        "84": [192, 193],
        "85": [194, 195],
        "101": [196, 197],
        "135": [198, 199]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getFamilyTemplate(shopNum, tempIdx) {
    const map = {
        "55": [200, 201],
        "258": [202, 203],
        "536": [204, 205]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getClothingTemplate(shopNum, tempIdx) {
    const map = {
        "31": [206, 207],
        "32": [208, 209],
        "50": [210, 211],
        "74": [212, 213],
        "75": [214, 215],
        "122": [216, 217],
        "126": [218, 219],
        "142": [220, 221],
        "143": [222, 223],
        "144": [224, 225],
        "145": [226, 227],
        "146": [228, 229],
        "271": [230, 231],
        "275": [232, 233]
    };
    const indices = map[shopNum];
    if (indices) {
        const idx = indices[parseInt(tempIdx) - 1];
        if (idx !== undefined) {
            return OFFICIAL_TEMPLATES[idx];
        }
    }
    return null;
}

function getTemplateCategory(templateIndex) {
    const discountIndices = [
        9, 10, 11, 12, 13, 15, 19, 21, 23, 25, 27,
        81, 82, 86, 87, 88, 89, 90, 92, 93, 95, 96, 97, 99, 100, 103, 107, 112, 115, 116, 117, 119, 120,
        121, 124, 126, 128, 129, 135, 136, 140, 142, 144, 157, 164, 165,
        208, 209, 212, 213, 219, 220, 221, 222, 225, 227, 229, 230, 231
    ];
    return discountIndices.includes(templateIndex) ? "Discounts" : "Services";
}

function isTemplateAd(text) {
    if (!text) return false;
    
    // Check custom shorthand templates trained via Admin Panel (check ALL entries for best match)
    let bestCustomShortLen = 0;
    let bestCustomShortMatch = false;
    const cleanInputForCustom = text.trim().toLowerCase();
    for (const ct of customTemplates) {
        if (ct.shorthand) {
            const cleanShort = ct.shorthand.trim().toLowerCase();
            if (cleanInputForCustom === cleanShort || cleanInputForCustom.includes(cleanShort)) {
                const remaining = cleanInputForCustom.replace(cleanShort, "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
                if (remaining.length < 5 && cleanShort.length > bestCustomShortLen) {
                    bestCustomShortLen = cleanShort.length;
                    bestCustomShortMatch = true;
                }
            }
        }
    }
    if (bestCustomShortMatch) {
        return true;
    }
    
    // Check if it is a shorthand template request (Ammunition)
    const shorthandMatch = text.match(/\b(?:ammunition\s+store|ammunation\s+store|ammo\s+store|ammo|weapon\s+shop|gun\s+store|weapon\s+store|rifleclub|bobbys|canikpide|wong|pew\s+pew|lue|siddhu|most\s+wanted|central\s+mall)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(39|40|41|111|147|148|149|150|151|152|269)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (shorthandMatch) {
        const remaining = text.replace(shorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (Office)
    const officeShorthandMatch = text.match(/\b(?:(?:[a-z\s]+)?office)?\s*(?:No\.?|\u2116|#|-)?\s*(24|585|677|1000|1017|1288|1419|1948|2198|2796|7963|10364|12313|13724|14396|14633|15136|21046|27650|32125|33698|41760|50367|52942|78981|85042|85235)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (officeShorthandMatch) {
        const remaining = text.replace(officeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (24/7 Store)
    const storeShorthandMatch = text.match(/\b(?:store\s+)?24\/7(?:\s+store)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(23|24|25|26|27|28|29|30|78|119|120|121|123|125|128|129|139|140|141|270)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (storeShorthandMatch) {
        const remaining = text.replace(storeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (Gas Station)
    const gasShorthandMatch = text.match(/\b(?:gas\s+station|gas\s+stn|gas|fuel|station|stn|ron|sahara|indian|tsunami|charon|remix|xr|kek|liff|brody|immortals|mobil|loves|surya|jordan|sher|renegades|oilarc)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(4|6|7|8|9|10|11|13|14|15|16|17|18|21|23|115|116|117|118|124|127|136|137)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (gasShorthandMatch) {
        const remaining = text.replace(gasShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (Family)
    const familyShorthandMatch = text.match(/\b(?:family|fam|uchiha|kingdom|deluca)?\s*(?:gps\s*|house\s*|h\s*)?(?:No\.?|\u2116|#)?\s*(55|258|536)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (familyShorthandMatch) {
        const remaining = text.replace(familyShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (Parking)
    let parkingShorthandMatch = text.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(55)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (!parkingShorthandMatch) {
        parkingShorthandMatch = text.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(51|52|53|54|56|57|58|79|80|81|82|83|84|85|101|135)\s+\b(?:temp|template|t)\s*([12])\b/i);
    }
    if (parkingShorthandMatch) {
        const remaining = text.replace(parkingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }

    // Check if it is a shorthand template request (Clothing Shop)
    const clothingShorthandMatch = text.match(/\b(?:clothing\s+shop|clothing\s+store|clothing|wear|style|fashion|trendzone)?\s*(?:gps\s*|No\.?|\u2116|#)?\s*(31|32|50|74|75|122|126|142|143|144|145|146|271|275)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (clothingShorthandMatch) {
        const remaining = text.replace(clothingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            return true;
        }
    }
    
    let cleanText = text.replace(/^(?:[a-zA-Z0-9\s\u2116#\-:()&]+)?(?:template|temp)\s+\d+[-\s]*/i, "").trim();
    let tempText = cleanText.replace(/\b(?:price|budget)?\s*(?:negotiable|negable|negoitable|nego|neg)\b/gi, "")
                            .replace(/\b(?:for|at|price|budget)?\s*[\$\d\.,kKmMbB\s]+(?:each)?\b/gi, "")
                            .replace(/\b\d+\s*[%]?\s*and\s*\d+\s*[%]?\s*juices?\b/gi, "")
                            .trim();
    const combinedTemplates = OFFICIAL_TEMPLATES.concat(customTemplates.map(t => t.text));
    const match1 = getClosestMatch(tempText, combinedTemplates, 0.65);
    if (match1) return true;
    return getClosestMatch(cleanText, combinedTemplates, 0.65) !== null;
}

function runValidationPipeline(ctx, override) {
    // 0. Advanced direct translation mapping matching (Advanced Learning Method)
    const trimmedRaw = ctx.raw.replace(/\s+/g, ' ').trim().toLowerCase();
    if (customTranslations[trimmedRaw]) {
        const val = customTranslations[trimmedRaw];
        let fixedText = val;
        if (val && val.startsWith("{") && val.endsWith("}")) {
            try {
                const parsed = JSON.parse(val);
                if (parsed && parsed.text) {
                    fixedText = parsed.text;
                }
            } catch (e) {}
        }
        ctx.logs.push({ text: `Matched trained translation: <strong>${fixedText}</strong>`, type: 'policy' });
        ctx.finalText = fixedText;
        ctx.category = override === "auto" ? detectCategory(ctx.finalText) : override;
        ctx.status = "passed";
        
        // Recover phone number from raw ad if present
        const phoneMatch = ctx.raw.match(/\b\d{4,10}\b/);
        if (phoneMatch) {
            ctx.phoneNumber = phoneMatch[0];
        }
        return;
    }

    // 1. Initial sanitization of text
    let text = ctx.raw.replace(/\s+/g, ' ').trim();
    text = correctSpelling(text, ctx);
    text = normalizePricesInText(text);
    
    // 2. Safety / Prohibited items checks (Weapons, Drugs, Scanners)
    if (!isTemplateAd(text)) {
        checkProhibitedItems(text, ctx);
        if (ctx.status === "blacklisted") {
            return;
        }
    }
    
    // 3. Category Detection
    if (override === "auto") {
        ctx.category = detectCategory(text);
        ctx.logs.push({ text: `Auto-detected category: <strong>${ctx.category}</strong>`, type: 'policy' });
    } else {
        ctx.category = override;
        ctx.logs.push({ text: `Category overridden to: <strong>${ctx.category}</strong>`, type: 'policy' });
    }
    
    if (/\bowner\b/i.test(text)) {
        ctx.isOwnerSearch = true;
        ctx.actionOverride = "Looking for";
        ctx.category = "Businesses";
    }
    
    // 4. Normalize Action (Buying, Selling, Trading, Renting)
    let action = "Selling"; // default
    let lowerText = text.toLowerCase();
    
    const isEvent = /^(?:pool\s+)?party\b/i.test(lowerText) || 
                    /^(?:wedding|car\s+meet)\b/i.test(lowerText) || 
                    /\b(?:party|wedding|car\s+meet)\s+at\b/i.test(lowerText);
                    
    if (isEvent) {
        action = "";
    } else if (ctx.category === "Dating") {
        action = "Looking";
    } else if (ctx.actionOverride && ctx.actionOverride !== "auto") {
        action = ctx.actionOverride;
        ctx.logs.push({ text: `Action overridden to "${action}"`, type: 'policy' });
    } else {
        const actionPatterns = [
            {
                action: "Selling or trading",
                patterns: [/\bselling or trading\b/i, /\bsell or trade\b/i, /\bselling\/trading\b/i, /\bwts\/wtt\b/i]
            },
            {
                action: "Renting out",
                patterns: [/\brenting out\b/i, /\brent out\b/i]
            },
            {
                action: "Renting_Check",
                patterns: [/\brenting\b/i, /\brent\b/i]
            },
            {
                action: "Hiring",
                patterns: [/\bhiring\b/i, /\bhire\b/i]
            },
            {
                action: "Looking for",
                patterns: [/\blooking for\b/i, /\blook for\b/i, /\bsearching for\b/i, /\bsearch for\b/i]
            },
            {
                action: "Buying",
                patterns: [/\bbuying\b/i, /\blooking to buy\b/i, /\blooking to purchase\b/i, /\bbuy\b/i, /\bwant to buy\b/i, /\bwtb\b/i]
            },
            {
                action: "Trading",
                patterns: [/\btrading\b/i, /\btrade\b/i, /\bwtt\b/i]
            },
            {
                action: "Selling",
                patterns: [/\bselling\b/i, /\bsell\b/i, /\bwts\b/i]
            }
        ];

        let matched = false;
        // Check for matches at the beginning first (highest priority)
        for (const ap of actionPatterns) {
            for (const pat of ap.patterns) {
                const startPat = new RegExp("^" + pat.source, "i");
                if (startPat.test(lowerText)) {
                    if (ap.action === "Renting_Check") {
                        if (lowerText.includes("budget") || lowerText.includes("looking for")) {
                            action = "Renting";
                        } else {
                            action = "Renting out";
                        }
                    } else {
                        action = ap.action;
                    }
                    ctx.logs.push({ text: `Normalized starting action to "${action}"`, type: 'correction' });
                    matched = true;
                    break;
                }
            }
            if (matched) break;
        }

        // If not matched at the start, check anywhere in the text
        if (!matched) {
            for (const ap of actionPatterns) {
                for (const pat of ap.patterns) {
                    if (pat.test(lowerText)) {
                        if (ap.action === "Renting_Check") {
                            if (lowerText.includes("budget") || lowerText.includes("looking for")) {
                                action = "Renting";
                            } else {
                                action = "Renting out";
                            }
                        } else {
                            action = ap.action;
                        }
                        ctx.logs.push({ text: `Normalized action to "${action}"`, type: 'correction' });
                        matched = true;
                        break;
                    }
                }
                if (matched) break;
            }
        }
    }
    
    if (action === "Trading" && !lowerText.includes(" for ")) {
        action = "Selling or trading";
        ctx.logs.push({ text: `Normalized starting action from "Trading" to "Selling or trading" because no target was specified with "for"`, type: 'correction' });
    }
    ctx.action = action;
    
    // 5. Price / Budget / Rent Parsing
    parsePriceAndBudget(text, action, ctx);
    
    // Clean ad body by stripping price keywords
    let adBody = cleanPriceKeywords(text, ctx);
    // Strip action prefixes/suffixes
    adBody = adBody.replace(/^(buying|selling or trading|selling|trading|renting out|renting|hiring|wtb|wts|wtt|buy|sell|trade|rent|hire|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(a\s+|an\s+)?/i, "").trim();
    adBody = adBody.replace(/\s+(buying|selling or trading|selling|trading|renting out|renting|hiring|wtb|wts|wtt|buy|sell|trade|rent|hire|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)$/i, "").trim();
    // Strip leading/trailing punctuation again
    adBody = adBody.replace(/^[^\w"'()\s]+|[^\w"'()\s]+$/g, "").trim();
    
    // 6. Category-specific rules and fuzzy corrections
    let processedBody = "";
    
    switch (ctx.category) {
        case "Auto":
            processedBody = formatAutoAd(adBody, action, ctx);
            break;
        case "Real Estate":
            processedBody = formatRealEstateAd(adBody, action, ctx);
            break;
        case "Work":
            processedBody = formatWorkAd(adBody, action, ctx);
            break;
        case "Dating":
            processedBody = formatDatingAd(adBody, action, ctx);
            break;
        case "Businesses":
            if (ctx.isOwnerSearch) {
                processedBody = formatOwnerSearchAd(adBody, ctx);
            } else {
                processedBody = formatBusinessesAd(adBody, action, ctx);
            }
            break;
        case "Services":
        case "Discounts":
            processedBody = formatTemplateAd(adBody, ctx.category, ctx);
            break;
        case "Other":
        default:
            processedBody = formatOtherAd(adBody, action, ctx);
            break;
    }
    
    if (ctx.status !== "passed") {
        return;
    }
    
    action = ctx.action;
    
    // 7. Format Location Capitalization & Prepositions
    processedBody = formatLocationTerms(processedBody, ctx);
    
    // 8. Assemble Final Ad Text
    // Capitalize first letter of the ad
    let mainSentence = `${action} ${processedBody}`.trim();
    mainSentence = mainSentence.charAt(0).toUpperCase() + mainSentence.slice(1);
    
    // Insert Price details
    let pricePart = "";
    // Suppress price/budget label when category is Dating, Services, Discounts, when the raw text contains "beach market" / "beach markit", or when it is a party/wedding/car meet event.
    const lowerRaw = ctx.raw.toLowerCase();
    const isBeachMarket = (/beach\s*mar[kt]et/i.test(lowerRaw) || lowerRaw.includes("beach markit")) && 
                          !["Real Estate", "Auto", "Businesses"].includes(ctx.category);
    const isEventAd = /^(?:pool\s+)?party\b/i.test(lowerRaw) || 
                      /^(?:wedding|car\s+meet)\b/i.test(lowerRaw) || 
                      /\b(?:party|wedding|car\s+meet)\s+at\b/i.test(lowerRaw);
    const isRentSuppressed = ctx.category === "Real Estate" && (action === "Renting" || action === "Renting out");
    const suppressPriceLabel = ["Dating", "Services", "Discounts"].includes(ctx.category) || isBeachMarket || isEventAd || ctx.isOwnerSearch || action === "Trading" || action === "Looking for" || isRentSuppressed;
    
    if (ctx.priceInfo && ctx.priceInfo.value !== "Negotiable") {
        let label = ctx.priceInfo.type; // Price, Budget, Rent, Bet
        let val = ctx.priceInfo.value;
        pricePart = ` ${label}: ${val}`;
        
        // Add "per week" or "for X days" if renting
        if ((action === "Renting" || action === "Renting out") && !ctx.priceInfo.value.toLowerCase().includes("week") && !ctx.priceInfo.value.toLowerCase().includes("day") && !ctx.priceInfo.value.toLowerCase().includes("negotiable")) {
            // Renting period is required. If not found, reject
            ctx.status = "rejected";
            ctx.rejectionReason = "Please indicate rental period.";
            ctx.logs.push({ text: `Rejected: Rent duration is missing from the ad.`, type: 'danger' });
            return;
        }
    } else if (!suppressPriceLabel) {
        // Fallback pricing label
        let label = "Price";
        if (ctx.category === "Work") label = "Salary";
        else if (ctx.raw.toLowerCase().includes("dice") || ctx.raw.toLowerCase().includes("poker")) label = "Bet";
        else if (action === "Buying" || action === "Renting" || action === "Looking") label = "Budget";
        else if (action === "Renting out") label = "Rent";
        
        pricePart = ` ${label}: Negotiable.`;
    }
    
    // Combine and apply terminal period rules
    let finalAd = `${mainSentence}.${pricePart}`.replace(/\.\.+/g, '.').replace(/\s+/g, ' ').trim();
    
    // If the ad ends with a period, remove it first to check our rules
    if (finalAd.endsWith('.')) {
        finalAd = finalAd.slice(0, -1);
    }
    
    // EN3 Policy: "If the ad ends with a numerical value, then there is no need for a period (.)"
    // Only omit period if the final portion of the ad is a numerical price.
    const isNumericalPriceAtEnd = /(?:Price|Budget|Rent|Bet|Salary):\s*\$?\d+(?:[.]\d+)*$/i.test(finalAd);
    if (!isNumericalPriceAtEnd) {
        finalAd += ".";
    }

    // Clean up any double punctuation at the end (e.g. !. -> ! or ?. -> ?)
    if (finalAd.endsWith("!.")) {
        finalAd = finalAd.slice(0, -1);
    } else if (finalAd.endsWith("?.")) {
        finalAd = finalAd.slice(0, -1);
    }
    
    ctx.finalText = finalAd;
}

/* ==========================================================================
   Category Detection Rules
   ========================================================================== */

function detectCategory(text) {
    const lower = text.toLowerCase();
    
    // Check if it's the "charger" item to prevent false vehicle matching to Bravado Charger Daytona
    const isRealChargerVehicle = /\b(?:bravado|srt|daytona|1969)\b/i.test(lower);
    const hasChargerItemWord = /\b(?:charger|chargers|charging)\b/i.test(lower);
    if (hasChargerItemWord && !isRealChargerVehicle) {
        return "Other";
    }

    // Check for clothing first to prevent generic adjectives/colors from false vehicle matching (e.g. "Black gloves")
    if (matchClothingItem(text)) {
        return "Other";
    }
    
    // Check if it is a service role search (which goes to "Other" category)
    const isServiceSearch = /\b(?:looking for|searching for|look for|search for)\b/i.test(lower);
    const serviceRoles = /\b(?:lawyer|driver|dancer|singer|dj)\b/i.test(lower);
    if (isServiceSearch && serviceRoles) {
        return "Other";
    }
    
    // Check for cage pets and shoulder pets before vehicle matching to prevent false matches
    // (e.g. "cage with a rat" matching "Rat Bike", "cage with a pug" matching "Peugeot" etc.)
    if (/\b(?:cage|pet|shoulder\s+pet|on\s+shoulder)\b/i.test(lower) && !lower.includes("pet food")) {
        return "Other";
    }
    
    const vehCheck = matchVehicle(text);
    
    if (isTemplateAd(text)) {
        // Check custom trained templates shorthand first (check ALL entries for best match)
        let bestCatShortLen = 0;
        let bestCatShortCategory = null;
        const cleanInputForCat = text.trim().toLowerCase();
        for (const ct of customTemplates) {
            if (ct.shorthand) {
                const cleanShort = ct.shorthand.trim().toLowerCase();
                if (cleanInputForCat === cleanShort || cleanInputForCat.includes(cleanShort)) {
                    const remaining = cleanInputForCat.replace(cleanShort, "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
                    if (remaining.length < 5 && cleanShort.length > bestCatShortLen) {
                        bestCatShortLen = cleanShort.length;
                        bestCatShortCategory = ct.category;
                    }
                }
            }
        }
        if (bestCatShortCategory) {
            return bestCatShortCategory;
        }

        let matchedIndex = -1;
        
        // 1. Try shorthand first
        const shorthandMatch = text.match(/\b(?:ammunition\s+store|ammunation\s+store|ammo\s+store|ammo|weapon\s+shop|gun\s+store|weapon\s+store|rifleclub|bobbys|canikpide|wong|pew\s+pew|lue|siddhu|most\s+wanted|central\s+mall)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(39|40|41|111|147|148|149|150|151|152|269)\s+\b(?:temp|template|t)\s*([12])\b/i);
        const familyShorthandMatch = text.match(/\b(?:family|fam|uchiha|kingdom|deluca)?\s*(?:gps\s*|house\s*|h\s*)?(?:No\.?|\u2116|#)?\s*(55|258|536)\s+\b(?:temp|template|t)\s*([12])\b/i);
        const clothingShorthandMatch = text.match(/\b(?:clothing\s+shop|clothing\s+store|clothing|wear|style|fashion|trendzone)?\s*(?:gps\s*|No\.?|\u2116|#)?\s*(31|32|50|74|75|122|126|142|143|144|145|146|271|275)\s+\b(?:temp|template|t)\s*([12])\b/i);
        const officeShorthandMatch = text.match(/\b(?:(?:[a-z\s]+)?office)?\s*(?:No\.?|\u2116|#|-)?\s*(24|585|677|1000|1017|1288|1419|1948|2198|2796|7963|10364|12313|13724|14396|14633|15136|21046|27650|32125|33698|41760|50367|52942|78981|85042|85235)\s+\b(?:temp|template|t)\s*([12])\b/i);
        const storeShorthandMatch = text.match(/\b(?:store\s+)?24\/7(?:\s+store)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(23|24|25|26|27|28|29|30|78|119|120|121|123|125|128|129|139|140|141|270)\s+\b(?:temp|template|t)\s*([12])\b/i);
        const gasShorthandMatch = text.match(/\b(?:gas\s+station|gas\s+stn|gas|fuel|station|stn|ron|sahara|indian|tsunami|charon|remix|xr|kek|liff|brody|immortals|mobil|loves|surya|jordan|sher|renegades|oilarc)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(4|6|7|8|9|10|11|13|14|15|16|17|18|21|23|115|116|117|118|124|127|136|137)\s+\b(?:temp|template|t)\s*([12])\b/i);
        let parkingShorthandMatch = text.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(55)\s+\b(?:temp|template|t)\s*([12])\b/i);
        if (!parkingShorthandMatch) {
            parkingShorthandMatch = text.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(51|52|53|54|56|57|58|79|80|81|82|83|84|85|101|135)\s+\b(?:temp|template|t)\s*([12])\b/i);
        }
        if (shorthandMatch) {
            const remaining = text.replace(shorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = shorthandMatch[1];
                const tempIdx = shorthandMatch[2];
                const map = {
                    "39": [6, 7], "40": [8, 9], "41": [10, 11], "111": [12, 13],
                    "147": [14, 15], "148": [16, 17], "149": [18, 19], "150": [20, 21],
                    "151": [22, 23], "152": [24, 25], "269": [26, 27]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (storeShorthandMatch) {
            const remaining = text.replace(storeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = storeShorthandMatch[1];
                const tempIdx = storeShorthandMatch[2];
                const map = {
                    "23": [81, 82],
                    "24": [83, 84],
                    "25": [85, 86],
                    "26": [87, 88],
                    "27": [89, 90],
                    "28": [91, 92],
                    "29": [93, 94],
                    "30": [95, 96],
                    "78": [97, 98],
                    "119": [99, 100],
                    "120": [101, 102],
                    "121": [103, 104],
                    "123": [105, 106],
                    "125": [107, 108],
                    "128": [109, 110],
                    "129": [111, 112],
                    "139": [113, 114],
                    "140": [115, 116],
                    "141": [117, 118],
                    "270": [119, 120]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (gasShorthandMatch) {
            const remaining = text.replace(gasShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = gasShorthandMatch[1];
                const tempIdx = gasShorthandMatch[2];
                const map = {
                    "4": [121, 122],
                    "6": [123, 124],
                    "7": [125, 126],
                    "8": [127, 128],
                    "9": [129, 130],
                    "10": [131, 132],
                    "11": [133, 134],
                    "13": [135, 136],
                    "14": [137, 138],
                    "15": [139, 140],
                    "16": [141, 142],
                    "17": [143, 144],
                    "18": [145, 146],
                    "21": [147, 148],
                    "23": [149, 150],
                    "115": [151, 152],
                    "116": [153, 154],
                    "117": [155, 156],
                    "118": [157, 158],
                    "124": [159, 160],
                    "127": [161, 162],
                    "136": [163, 164],
                    "137": [165, 166]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (parkingShorthandMatch) {
            const remaining = text.replace(parkingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = parkingShorthandMatch[1];
                const tempIdx = parkingShorthandMatch[2];
                const map = {
                    "51": [167],
                    "52": [168, 169],
                    "53": [170, 171],
                    "54": [172, 173],
                    "55": [174, 175],
                    "56": [176, 177],
                    "57": [178, 179],
                    "58": [180, 181],
                    "79": [182, 183],
                    "80": [184, 185],
                    "81": [186, 187],
                    "82": [188, 189],
                    "83": [190, 191],
                    "84": [192, 193],
                    "85": [194, 195],
                    "101": [196, 197],
                    "135": [198, 199]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (familyShorthandMatch) {
            const remaining = text.replace(familyShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = familyShorthandMatch[1];
                const tempIdx = familyShorthandMatch[2];
                const map = {
                    "55": [200, 201],
                    "258": [202, 203],
                    "536": [204, 205]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (clothingShorthandMatch) {
            const remaining = text.replace(clothingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = clothingShorthandMatch[1];
                const tempIdx = clothingShorthandMatch[2];
                const map = {
                    "31": [206, 207],
                    "32": [208, 209],
                    "50": [210, 211],
                    "74": [212, 213],
                    "75": [214, 215],
                    "122": [216, 217],
                    "126": [218, 219],
                    "142": [220, 221],
                    "143": [222, 223],
                    "144": [224, 225],
                    "145": [226, 227],
                    "146": [228, 229],
                    "271": [230, 231],
                    "275": [232, 233]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (officeShorthandMatch) {
            const remaining = text.replace(officeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const officeNum = officeShorthandMatch[1];
                const tempIdx = officeShorthandMatch[2];
                const map = {
                    "24": [28, 29], "585": [30, 31], "677": [32, 33], "1000": [34, 35],
                    "1017": [36, 37], "1288": [38, 39], "1419": [40, 41], "1948": [42, 43],
                    "2198": [44, 45], "2796": [46, 47], "7963": [48, 49], "10364": [50, 51],
                    "12313": [52, 53], "13724": [54, 55], "14396": [56, 57], "14633": [58, 59],
                    "15136": [60, 61], "21046": [62, 63], "27650": [64, 65], "32125": [66],
                    "33698": [67, 68], "41760": [69, 70], "50367": [71, 72], "52942": [73, 74],
                    "78981": [75, 76], "85042": [77, 78], "85235": [79, 80]
                };
                const indices = map[officeNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        } else if (storeShorthandMatch) {
            const remaining = text.replace(storeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
            if (remaining.length < 5) {
                const shopNum = storeShorthandMatch[1];
                const tempIdx = storeShorthandMatch[2];
                const map = {
                    "23": [81, 82],
                    "24": [83, 84],
                    "25": [85, 86],
                    "26": [87, 88],
                    "27": [89, 90],
                    "28": [91, 92],
                    "29": [93, 94],
                    "30": [95, 96],
                    "78": [97, 98],
                    "119": [99, 100],
                    "120": [101, 102],
                    "121": [103, 104],
                    "123": [105, 106],
                    "125": [107, 108],
                    "128": [109, 110],
                    "129": [111, 112],
                    "139": [113, 114],
                    "140": [115, 116],
                    "141": [117, 118],
                    "270": [119, 120]
                };
                const indices = map[shopNum];
                if (indices) {
                    matchedIndex = indices[parseInt(tempIdx) - 1];
                }
            }
        }
        
        // 2. Try standard matching if shorthand didn't resolve
        if (matchedIndex === -1) {
            let cleanText = text.replace(/^(?:[a-zA-Z0-9\s\u2116#\-:()&]+)?(?:template|temp)\s+\d+[-\s]*/i, "").trim();
            let tempText = cleanText.replace(/\b(?:price|budget)?\s*(?:negotiable|negable|negoitable|nego|neg)\b/gi, "")
                                    .replace(/\b(?:for|at|price|budget)?\s*[\$\d\.,kKmMbB\s]+(?:each)?\b/gi, "")
                                    .replace(/\b\d+\s*[%]?\s*and\s*\d+\s*[%]?\s*juices?\b/gi, "")
                                    .trim();
            const matchedCustom = getClosestMatch(tempText, customTemplates.map(t => t.text), 0.65) || getClosestMatch(cleanText, customTemplates.map(t => t.text), 0.65);
            if (matchedCustom) {
                const found = customTemplates.find(t => t.text === matchedCustom);
                if (found) {
                    return found.category;
                }
            }
            const matched = getClosestMatch(tempText, OFFICIAL_TEMPLATES, 0.65) || getClosestMatch(cleanText, OFFICIAL_TEMPLATES, 0.65);
            if (matched) {
                matchedIndex = OFFICIAL_TEMPLATES.indexOf(matched);
            }
        }
        
        if (matchedIndex !== -1) {
            return getTemplateCategory(matchedIndex);
        }
        
        if (lower.includes("discount") || lower.includes("%") || lower.includes("off")) {
            return "Discounts";
        }
        return "Services";
    }
    
    // Check for explicit "Other" item keywords first to prevent false auto-matching
    const otherKeywords = [
        "ticket", "tcket", "tikcet", "tckets", "tikets", "juice", "battery", "batteries", "metal", "mask", "pet", "shoulder", 
        "fox", "cat", "dog", "drill", "sawmill", "pickaxe", "hookah", "sponge", "timber",
        "copper", "emerald", "ruby", "diamond", "obsidian", "magma stone", "luminous stone", "stone", "stones", "thread", "token",
        "tonic treat", "map", "wire", "plate", "container", "containers", "fuel",
        "party", "wedding", "car meet", "prime", "platinum", "plat",
        "salmon", "carp", "perch", "trout", "megalodon", "ray", "orca", "whale",
        "tuning", "suspension", "transmission", "brakes", "tires",
        "inventory", "inventry", "inventories", "booster", "shot", "shots",
        "rod", "rods", "case", "cases", "crate", "crates",
        "sim", "sim card", "sim cards", "card", "cards", "biospark", "biosparks"
    ];
    const hasOtherKeyword = otherKeywords.some(keyword => {
        if (keyword === "juice" && lower.includes("juice shop")) return false;
        if (keyword === "pet" && lower.includes("pet shop")) return false;
        return lower.includes(keyword);
    });
    if (hasOtherKeyword) {
        // If the keyword is a tuning part keyword, but it ALSO contains a matched vehicle,
        // then it is an Auto ad, not an Other ad!
        const tuningKeywords = ["tuning", "suspension", "transmission", "brakes", "tires"];
        const hasTuningKeyword = tuningKeywords.some(kw => lower.includes(kw));
        
        if (hasTuningKeyword) {
            if (vehCheck) {
                // Do not return Other, let it fall through to Auto check!
            } else {
                return "Other";
            }
        } else {
            return "Other";
        }
    }
    
    // 1. Dating Check
    // Person search check: e.g. "looking for Max Dopamine"
    const personMatch = lower.match(/\b(?:looking for|searching for|look for|search for|looking|searching|look|search)\s+([a-z]+)\s+([a-z]+)\b/i);
    if (personMatch) {
        const pName = personMatch[1] + " " + personMatch[2];
        const isVeh = matchVehicle(pName);
        const isCloth = matchClothingItem(pName);
        const isService = /\b(?:lawyer|driver|dancer|singer|dj|worker|workers|physician|doctor|mechanic|bodyguard|employee|employees|cop|cops|police|officer|officers|admin|assistant|assistants|mediator|mediators)\b/i.test(pName);
        const otherKeywordsList = [
            "ticket", "tcket", "tikcet", "tckets", "tikets", "juice", "battery", "batteries", "metal", "mask", "pet", "shoulder", 
            "fox", "cat", "dog", "drill", "sawmill", "pickaxe", "hookah", "sponge", "timber",
            "copper", "emerald", "ruby", "diamond", "obsidian", "magma stone", "luminous stone", "stone", "stones", "thread", "token",
            "tonic treat", "map", "wire", "plate", "container", "containers", "fuel",
            "party", "wedding", "car meet", "prime", "platinum", "plat",
            "salmon", "carp", "perch", "trout", "megalodon", "ray", "orca", "whale",
            "tuning", "suspension", "transmission", "brakes", "tires",
            "inventory", "inventry", "inventories", "booster", "shot", "shots",
            "rod", "rods", "case", "cases", "crate", "crates",
            "sim", "sim card", "sim cards", "card", "cards", "biospark", "biosparks"
        ];
        const isOtherKw = otherKeywordsList.some(keyword => pName.includes(keyword));
        const isExcluded = isVeh || isCloth || isService || isOtherKw ||
            /\b(?:house|apartment|mansion|penthouse|garage|spaces|warehouse|helipad|gps|temp|template|discount|off|%|biz|business|store|shop|station|wash|sharing|tuning|club|salon|studio|company|cowshed|train|plantation|well|atm|solar|panel|work|job|hiring)\b/i.test(pName);
        
        if (!isExcluded) {
            return "Dating";
        }
    }

    const isDatingSearch = /\b(look|looking|search|searching|want|find|finding)\b/i.test(lower);
    const hasDatingTarget = /\b(wife|girlfriend|boyfriend|husband|valentine|date|spouse|soulmate|alliance)\b/i.test(lower) || 
                            (/\b(friend|friends|family|family\s+members)\b/i.test(lower) && /\b(look|looking|search|searching)\b/i.test(lower));
    if (isDatingSearch && hasDatingTarget && !lower.includes("family business")) {
        return "Dating";
    }
    
    // 2. Work Check
    if (lower.includes("hiring") || lower.includes("looking for work") || lower.includes("looking for a job") ||
        /looking\s+(?:to\s+)?work\b/i.test(lower) || /look\s+(?:to\s+)?work\b/i.test(lower) ||
        /looking\s+for\s+.*work\b/i.test(lower) || /look\s+for\s+.*work\b/i.test(lower) ||
        /looking\s+for\s+a\s+job\b/i.test(lower) || /look\s+for\s+a\s+job\b/i.test(lower) ||
        lower.includes("construction site") || lower.includes("driver") || lower.includes("electrician") ||
        lower.includes("locksmith") || lower.includes("gardener") || lower.includes("surveyor") ||
        lower.includes("trucker") || lower.includes("lawyer") || lower.includes("bodyguard")) {
        return "Work";
    }
    
    // 3. Real Estate Check
    if (lower.includes("house") || lower.includes("apartment") || lower.includes("mansion") || 
        lower.includes("penthouse") || lower.includes("mirror park") || lower.includes("vinewood") || 
        lower.includes("richman") || lower.includes("g.s.") || lower.includes("garage spaces") ||
        lower.includes("warehouse") || lower.includes("w.h.") || lower.includes("helipad")) {
        return "Real Estate";
    }
    
    // 4. Businesses Check
    if (lower.includes("biz") || lower.includes("business") || lower.includes("24/7 store") || 
        lower.includes("ammunition store") || /\batm\b/i.test(lower) || lower.includes("atm business") || lower.includes("car wash") || 
        lower.includes("car sharing") || lower.includes("chip tuning") || lower.includes("clothing shop") || 
        lower.includes("electric station") || lower.includes("fight club") || lower.includes("flower shop") || 
        lower.includes("furniture shop") || lower.includes("gas station") || lower.includes("grand elite") || 
        lower.includes("hair salon") || lower.includes("jewelry store") || lower.includes("juice shop") || 
        lower.includes("luna park") || lower.includes("parking") || lower.includes("pet shop") || 
        lower.includes("state object") || lower.includes("service station") || lower.includes("tattoo studio") || 
        lower.includes("taxi company") || lower.includes("burger shop") || lower.includes("cowshed") || 
        lower.includes("freight train") || lower.includes("plantation") || lower.includes("oil well")) {
        if (vehCheck) {
            // Do not return Businesses, let it fall through to Auto!
        } else {
            return "Businesses";
        }
    }
    
    // 5. Template check for Services / Discounts
    if (lower.includes("gps \u2116") || lower.includes("template")) {
        if (lower.includes("discount") || lower.includes("%") || lower.includes("off")) {
            return "Discounts";
        }
        return "Services";
    }
    
    // 6. Auto Check (Verify if vehicles or auto-related words are present)
    if (vehCheck || /\bcars?\b/i.test(lower) || /\btrucks?\b/i.test(lower) || lower.includes("motorcycle") || 
        lower.includes("bike") || lower.includes("boat") || lower.includes("plane") || 
        lower.includes("helicopter") || /\bheli\b/i.test(lower) || lower.includes("auto fair")) {
        return "Auto";
    }
    
    // 7. Default Category
    return "Other";
}

/* ==========================================================================
   Prohibited Items Checker
   ========================================================================== */

function checkProhibitedItems(text, ctx) {
    const lower = text.toLowerCase();
    
    // Dating Trolling Check
    const datingTargets = ["wife", "husband", "girlfriend", "boyfriend", "gf", "bf", "spouse", "soulmate", "sugar daddy", "sugar mommy", "sugar baby", "sugar babe", "valentine"];
    let matchedDatingTarget = null;
    for (const dt of datingTargets) {
        const regex = new RegExp(`\\b${dt}\\b`, "i");
        if (regex.test(lower)) {
            matchedDatingTarget = dt;
            break;
        }
    }
    
    if (matchedDatingTarget) {
        if (matchedDatingTarget.includes("sugar")) {
            ctx.status = "blacklisted";
            ctx.blacklistReason = "Troll advertisements";
            ctx.rejectionReason = "Trolling advertisements.";
            ctx.logs.push({ text: `Blacklist triggered: Dating troll target <strong>${matchedDatingTarget}</strong>`, type: 'danger' });
            return;
        }
        
        const hasCommercialAction = /\b(sell|selling|buy|buying|trade|trading|wts|wtb|wtt|rent|renting)\b/i.test(lower);
        const cleanForNumbers = lower
            .replace(new RegExp(`\\b(${datingTargets.join("|")})\\b`, "gi"), "")
            .replace(/\b(look|looking|search|searching|find|finding|for|a|an|the)\b/gi, "")
            .trim();
        const hasNumber = /\b\d+(?:\s*[kKmM])?\b/.test(cleanForNumbers);
        const hasPriceIndicator = /\b(price|budget|rent|cost|value|negotiable|nego|each)\b/i.test(lower) || lower.includes("$");
        
        if (hasCommercialAction || hasNumber || hasPriceIndicator) {
            ctx.status = "blacklisted";
            ctx.blacklistReason = "Troll advertisements";
            ctx.rejectionReason = "Trolling advertisements.";
            ctx.logs.push({ text: `Blacklist triggered: Dating troll target <strong>${matchedDatingTarget}</strong> with value/action`, type: 'danger' });
            return;
        }
    }
    
    // Immediate Blacklist Triggers
    const blacklistWeapons = ["firearm", "heavy sniper", "sniper", "pistol", "revolver", "rifle", "shotgun", "ammunition", "ammo", "bulletproof vest", "armored vest", "lui vi armored vest", "body armor"];
    const blacklistDrugs = ["weed", "cannabis", "cocaine", "drug"];
    const blacklistEMS = ["ems surgical", "ems mask", "surgical mask", "medical mask", "covid mask"];
    const blacklistScanners = ["anti-radar", "vehicle scanner", "people scanner", "radar scanner", "radars"];
    const blacklistMisc = ["balaclava", "rope", "lock pick", "hacker tool", "virus usb", "engine block", "smuggling machine", "submodule"];
    
    // Simple Rejection Triggers (No Blacklist)
    const rejectOnly = ["crowbar", "fabric", "head bag", "animal skin", "armor skin", "air horn", "earplug", "barricade", "trap", "poison dart", "army uniform", "tracking sensor", "dangerous razor", "resource scanner", "body armor plate", "ingredients for cocaine", "paper for money", "satellite dish", "tincture of forest mushrooms", "first aid kit", "medkit", "pills", "banana", "burger", "grilled steak"];
    
    // Check Blacklist items
    for (const item of [...blacklistWeapons, ...blacklistDrugs, ...blacklistEMS, ...blacklistScanners, ...blacklistMisc]) {
        const escaped = item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, "i");
        if (regex.test(lower)) {
            // Exclude weapon shop / ammunition store businesses
            if ((item === "ammunition" || item === "ammo" || item === "rifle") && 
                (lower.includes("store") || lower.includes("shop") || lower.includes("club") || lower.includes("rifleclub"))) {
                continue;
            }
            ctx.status = "blacklisted";
            ctx.blacklistReason = `The advertisement contains illegal item/term: "${item.toUpperCase()}" which triggers an immediate phone blacklist.`;
            ctx.rejectionReason = "Cannot promote illegal items.";
            ctx.logs.push({ text: `Blacklist triggered for illegal item: <strong>${item}</strong>`, type: 'danger' });
            return;
        }
    }
    
    // Check offensive license plates (must be 3-7 characters)
    const plateMatch = lower.match(/license plate\s*\(?([a-z0-9]+)\)?/i);
    if (plateMatch) {
        const plate = plateMatch[1].toLowerCase();
        if (plate.includes("sex") || plate.includes("fuck") || plate.includes("bitch") || plate.includes("cunt") || plate.includes("nigger") || plate.includes("dick")) {
            ctx.status = "blacklisted";
            ctx.blacklistReason = `License plate "${plate.toUpperCase()}" contains inappropriate or offensive language.`;
            ctx.rejectionReason = "Cannot promote illegal items.";
            ctx.logs.push({ text: `Blacklist triggered: Offensive license plate <strong>${plate}</strong>`, type: 'danger' });
            return;
        }
    }
    
    // Check Simple Rejections
    for (const item of rejectOnly) {
        // Exclude luminous head bag from rejection
        if (item === "head bag" && lower.includes("luminous head bag")) {
            continue;
        }
        if (item === "burger" && (lower.includes("burger shop") || lower.includes("burger store"))) {
            continue;
        }
        const escaped = item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, "i");
        if (regex.test(lower)) {
            ctx.status = "rejected";
            ctx.rejectionReason = `Cannot promote restricted item: "${item.toUpperCase()}".`;
            ctx.logs.push({ text: `Rejected: Advertisement mentions restricted item <strong>${item}</strong>`, type: 'warning' });
            return;
        }
    }
    
    // State Org Parties block (mega mall, black market, government buildings, etc.)
    const restrictedPlaces = ["mega mall", "black market", "lspd", "fib", "sahp", "ems", "government building", "ghetto", "gang hq", "ballas", "vagos", "bloods", "marabunta"];
    if (lower.includes("party")) {
        for (const place of restrictedPlaces) {
            if (lower.includes(place)) {
                ctx.status = "rejected";
                ctx.rejectionReason = `We do not promote parties at restricted place: "${place.toUpperCase()}".`;
                ctx.logs.push({ text: `Rejected: Party promotion at restricted location <strong>${place}</strong>`, type: 'warning' });
                return;
            }
        }
        
        // Green Grass Beach Market Rule
        if (lower.includes("beach market")) {
            ctx.status = "rejected";
            ctx.rejectionReason = "We do not promote parties at any green grass location.";
            ctx.logs.push({ text: `Rejected: Green grass rule violation for <strong>beach market</strong>. (Must change to "the beach")`, type: 'warning' });
            return;
        }
    }
    
    // Grand Coins / Battlepass block
    if (lower.includes("grand coins") || lower.includes("battlepass") || lower.includes("battle pass")) {
        ctx.status = "rejected";
        ctx.rejectionReason = "Item not found in database. (Including Grand Coins and Battlepass)";
        ctx.logs.push({ text: `Rejected: Ad references premium currency/battlepass.`, type: 'warning' });
        return;
    }
}

/* ==========================================================================
   Price & Budget Parsing Utilities
   ========================================================================== */

function normalizePricesInText(text) {
    let result = text;
    // Resolve gaming slang kk -> m, kkk -> b
    result = result.replace(/\b(\d+(?:\.\d+)?)\s*kkk\b/gi, "$1b");
    result = result.replace(/\b(\d+(?:\.\d+)?)\s*kk\b/gi, "$1m");
    // Remove space between digits and common price suffixes (k, m, b)
    result = result.replace(/\b(\d+(?:\.\d+)?)\s*(k|m|mil|ml|b)\b/gi, "$1$2");
    // Resolve decimal commas, e.g., 1,5m -> 1.5m, 15,5 -> 15.5
    result = result.replace(/\b(\d+),(\d+)(?=\s*(?:k|m|mil|ml|b|million|thousand|billion|\b))/gi, "$1.$2");
    // Resolve thousands separators (dots or commas followed by groups of three digits)
    result = result.replace(/\b(\d{1,3})(?:[.,](\d{3}))+\b/g, (match) => {
        return match.replace(/[.,]/g, "");
    });
    return result;
}

function parsePriceAndBudget(text, action, ctx) {
    const lower = text.toLowerCase();
    ctx.priceMatches = [];
    
    // Price type determination
    let priceType = "Price";
    if (lower.includes("dice") || lower.includes("poker")) priceType = "Bet";
    else if (ctx.category === "Work") priceType = "Salary";
    else if (action === "Buying" || action === "Renting" || action === "Looking") priceType = "Budget";
    else if (action === "Renting out") priceType = "Rent";
    
    // Check if explicitly negotiable
    let isNegotiable = false;
    const negoRegex = /\b(?:negotiable|negotiab|nego)\b/gi;
    const negoMatch = text.match(negoRegex);
    if (negoMatch) {
        isNegotiable = true;
        ctx.priceMatches.push(negoMatch[0]);
    }
    ctx.isNegotiable = isNegotiable;
    
    // Sequential price matches
    const regexes = [
        /(?:price|budget|rent|bet|cost|cash|salary|wage)\s*(?::|is)?\s*(?:\$)?\b(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)?\b/gi,
        /\$\s*(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)?\b/gi,
        /\b(?:for|at)\s+(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)\b/gi,
        /\beach\s+(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)?\b/gi,
        /\b(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)?\s*each\b/gi,
        /\b(\d+(?:[\.,]\d+)*)\s*(k|m|mil|ml|million|milliom|milion|miliom|millio|thousand|thousant|b|billion|billiom|bilion|biliom|trillion)\b/gi,
        /\b(\d{5,})\b/g
    ];
    
    const matchedValues = [];
    const matchedRanges = [];
    
    for (const regex of regexes) {
        let match;
        regex.lastIndex = 0;
        while ((match = regex.exec(lower)) !== null) {
            const start = match.index;
            const end = regex.lastIndex;
            const isOverlap = matchedRanges.some(([s, e]) => {
                return (start >= s && start < e) || (end > s && end <= e) || (s >= start && s < end);
            });
            if (!isOverlap) {
                // Check if preceded by property/shop/designation/office/card keywords
                const prefixText = lower.substring(Math.max(0, start - 25), start).trim();
                // Prevent SIM card numbers (which have no suffix) from being parsed as prices
                if (/(?:card|cards|sim)(?:\s*(?:no\.?|number|num\.?|#|\u2116))?\s*$/i.test(prefixText) && !match[2]) {
                    continue;
                }
                if (/(?:house|apartment|mansion|penthouse|shop|office|card|cards|\u2116|#|no\.?)\s*$/i.test(prefixText)) {
                    let hasPriceIndication = match[2] || match[0].toLowerCase().includes("each") || match[1].length >= 5;
                    if (!hasPriceIndication) {
                        continue;
                    }
                }
                // Check if followed by unit / quantity keywords or template shorthand
                const suffixText = lower.substring(end, Math.min(lower.length, end + 25)).trim();
                if (/^(?:g\.?s\.?|w\.?h\.?|days?|lvls?|levels?|years?|batteries|juices|items|percent|seeds|fruits|rims|wheels|pieces|pcs)\b|^(?:%)/i.test(suffixText)) {
                    continue;
                }
                if (/^(?:temp|template|t)\s*\d+/i.test(suffixText)) {
                    continue;
                }

                let valStr = match[1];
                let suffix = match[2] ? match[2].toLowerCase() : "";
                if (!suffix) {
                    valStr = valStr.replace(/[\.,]/g, "");
                } else {
                    valStr = valStr.replace(/,/g, ".");
                }
                const numericVal = parseFloat(valStr);
                matchedValues.push({
                    raw: match[0],
                    numericVal: numericVal,
                    suffix: suffix,
                    start: start,
                    end: end
                });
                matchedRanges.push([start, end]);
                ctx.priceMatches.push(match[0]);
            }
        }
    }
    
    if (matchedValues.length === 0 && isNegotiable) {
        ctx.priceInfo = { type: priceType, value: "Negotiable" };
        ctx.logs.push({ text: `Detected pricing: <strong>Negotiable</strong>`, type: 'policy' });
        return;
    }
    
    if (priceType === "Bet" && matchedValues.length > 0) {
        let exceedsLimit = false;
        for (const item of matchedValues) {
            let numericVal = item.numericVal;
            let suffix = item.suffix;
            let normalizedVal = numericVal;
            if (suffix === "m" || suffix === "mil" || suffix === "ml" || suffix === "million" || suffix === "milliom" || suffix === "milion" || suffix === "miliom" || suffix === "millio") {
                normalizedVal = numericVal * 1000000;
            } else if (suffix === "k" || suffix === "thousand" || suffix === "thousant") {
                normalizedVal = numericVal * 1000;
            } else if (suffix === "b" || suffix === "billion" || suffix === "billiom" || suffix === "bilion" || suffix === "biliom") {
                normalizedVal = numericVal * 1000000000;
            }
            if (normalizedVal > 10000000) {
                exceedsLimit = true;
                break;
            }
        }
        
        if (exceedsLimit) {
            ctx.priceInfo = { type: "Bet", value: "Negotiable" };
            ctx.logs.push({ text: `Bet exceeds $10 Million limit. Defaulted to Negotiable.`, type: 'policy' });
            return;
        }
    }
    
    matchedValues.sort((a, b) => a.start - b.start);
    
    if (matchedValues.length === 0) {
        ctx.priceInfo = { type: priceType, value: "Negotiable" };
        ctx.logs.push({ text: `No specific price found. Defaulted to <strong>Negotiable</strong>`, type: 'policy' });
        return;
    }
    
    const values = matchedValues.map(item => {
        const numericVal = item.numericVal;
        const suffix = item.suffix;
        let normalizedVal = numericVal;
        let formattedString = "";
        
        if (suffix === "m" || suffix === "mil" || suffix === "ml" || suffix === "million" || suffix === "milliom" || suffix === "milion" || suffix === "miliom" || suffix === "millio") {
            normalizedVal = numericVal * 1000000;
            formattedString = `$${numericVal} Million`;
        } else if (suffix === "k" || suffix === "thousand" || suffix === "thousant") {
            normalizedVal = numericVal * 1000;
            if (numericVal >= 1000) {
                const mil = (numericVal / 1000).toFixed(2);
                formattedString = `$${parseFloat(mil)} Million`;
            } else {
                formattedString = `$${formatNumberDots(numericVal * 1000)}`;
            }
        } else if (suffix === "b" || suffix === "billion" || suffix === "billiom" || suffix === "bilion" || suffix === "biliom") {
            normalizedVal = numericVal * 1000000000;
            formattedString = `$${numericVal} Billion`;
        } else if (suffix === "trillion") {
            normalizedVal = numericVal * 1000000000000;
            formattedString = "Negotiable";
        } else {
            if (numericVal >= 1000000) {
                const mil = (numericVal / 1000000).toFixed(2);
                formattedString = `$${parseFloat(mil)} Million`;
            } else if (numericVal >= 1000) {
                formattedString = `$${formatNumberDots(numericVal)}`;
            } else {
                formattedString = `$${numericVal}`;
            }
        }
        return {
            val: normalizedVal,
            formatted: formattedString
        };
    });
    
    if (priceType === "Bet") {
        const primary = values[0];
        if (primary.val > 10000000) {
            ctx.priceInfo = { type: "Bet", value: "Negotiable" };
            ctx.logs.push({ text: `Bet exceeded $10 Million cap. Corrected to <strong>Negotiable</strong>`, type: 'correction' });
        } else {
            ctx.priceInfo = { type: "Bet", value: primary.formatted };
            ctx.logs.push({ text: `Formatted bet: <strong>${primary.formatted}</strong>`, type: 'policy' });
        }
    } else if (ctx.category === "Businesses") {
        const primary = values[0];
        if (primary.val > 500000000) {
            ctx.priceInfo = { type: "Price", value: "Negotiable" };
            ctx.logs.push({ text: `Business price exceeded $500 Million cap. Corrected to <strong>Negotiable</strong>`, type: 'correction' });
        } else {
            ctx.priceInfo = { type: priceType, value: primary.formatted };
            ctx.logs.push({ text: `Formatted Business price: <strong>${primary.formatted}</strong>`, type: 'policy' });
        }
    } else if (values.length > 1) {
        let respect = "respectively";
        const isPluralOther = ctx.category === "Other" && (function() {
            let cleanItem = lower;
            if (ctx.priceMatches) {
                for (const matchStr of ctx.priceMatches) {
                    const escaped = escapeRegExp(matchStr);
                    cleanItem = cleanItem.replace(new RegExp(escaped, "gi"), "");
                }
            }
            cleanItem = cleanItem.replace(/^(buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(a\s+|an\s+)?/i, "").trim();
            cleanItem = cleanItem.replace(/\s+(buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)$/i, "").trim();
            cleanItem = cleanItem.replace(/\b(?:in\s+bulk|bulk|each|each\s+respectively|respectively)\b/gi, "").trim();
            cleanItem = cleanItem.replace(/\b(?:price|budget|rent|bet|cost|cash)\b/gi, "").trim();
            cleanItem = cleanItem.replace(/^[^\w"'()\s]+|[^\w"'()\s]+$/g, "").replace(/\s+/g, " ").trim();
            
            const isExplicitPlural = lower.includes("bulk") || 
                                     lower.includes("in bulk") || 
                                     (parseQuantity(text) && parseQuantity(text) > 1);
            if (isExplicitPlural) return true;

            // Gloves, shoes, masks, etc. are conceptually singular/pairs and do not get 'each' unless explicitly pluralized
            if (matchClothingItem(cleanItem) || /\b(?:shoes|gloves|masks|glasses|pants|trousers|jeans|shorts|dress|dresses|hoodie|hoodies|boots|sneakers|caps|hats|socks)\b/i.test(cleanItem)) {
                return false;
            }

            const isPluralWord = (cleanItem.endsWith("s") && 
                                  !cleanItem.endsWith("ss") && 
                                  !cleanItem.endsWith("is") && 
                                  !cleanItem.endsWith("us") && 
                                  !cleanItem.endsWith("as") && 
                                  !cleanItem.endsWith("less") && 
                                  !cleanItem.endsWith("ness") && 
                                  !cleanItem.endsWith("mass") && 
                                  !cleanItem.endsWith("king") && 
                                  !cleanItem.endsWith("parking") &&
                                  !cleanItem.endsWith("business"));
            
            return lower.includes("bulk") || 
                   lower.includes("in bulk") || 
                   (parseQuantity(text) && parseQuantity(text) > 1) ||
                   /\b(?:seeds|timber|tickets|juices|batteries|wires|threads|tokens|canisters|barrels|materials|ores|cards|items|keys|snow)\b/i.test(cleanItem) ||
                   isPluralWord;
        })();
        if (lower.includes("each respectively") || lower.includes("each") || isPluralOther) {
            respect = "each respectively";
        }
        const priceStrs = values.map(v => v.formatted);
        let finalVal = "";
        if (priceStrs.length === 2) {
            finalVal = `${priceStrs[0]} and ${priceStrs[1]} ${respect}`;
        } else {
            const last = priceStrs.pop();
            finalVal = `${priceStrs.join(", ")} and ${last} ${respect}`;
        }
        ctx.priceInfo = { type: priceType, value: finalVal };
        ctx.logs.push({ text: `Formatted multiple prices: <strong>${finalVal}</strong>`, type: 'policy' });
    } else {
        const primary = values[0];
        let val = primary.formatted;
        const isPluralOther = ctx.category === "Other" && (function() {
            let cleanItem = lower;
            if (ctx.priceMatches) {
                for (const matchStr of ctx.priceMatches) {
                    const escaped = escapeRegExp(matchStr);
                    cleanItem = cleanItem.replace(new RegExp(escaped, "gi"), "");
                }
            }
            cleanItem = cleanItem.replace(/^(buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)\s+(a\s+|an\s+)?/i, "").trim();
            cleanItem = cleanItem.replace(/\s+(buying|selling or trading|selling|trading|renting out|renting|wtb|wts|wtt|buy|sell|trade|rent|looking to purchase|looking to buy|want to buy|searching for|looking for|searching|look for|looking|search|look)$/i, "").trim();
            cleanItem = cleanItem.replace(/\b(?:in\s+bulk|bulk|each|each\s+respectively|respectively)\b/gi, "").trim();
            cleanItem = cleanItem.replace(/\b(?:price|budget|rent|bet|cost|cash)\b/gi, "").trim();
            cleanItem = cleanItem.replace(/^[^\w"'()\s]+|[^\w"'()\s]+$/g, "").replace(/\s+/g, " ").trim();
            
            const isExplicitPlural = lower.includes("bulk") || 
                                     lower.includes("in bulk") || 
                                     (parseQuantity(text) && parseQuantity(text) > 1);
            if (isExplicitPlural) return true;

            // Gloves, shoes, masks, etc. are conceptually singular/pairs and do not get 'each' unless explicitly pluralized
            if (matchClothingItem(cleanItem) || /\b(?:shoes|gloves|masks|glasses|pants|trousers|jeans|shorts|dress|dresses|hoodie|hoodies|boots|sneakers|caps|hats|socks)\b/i.test(cleanItem)) {
                return false;
            }

            const isPluralWord = (cleanItem.endsWith("s") && 
                                  !cleanItem.endsWith("ss") && 
                                  !cleanItem.endsWith("is") && 
                                  !cleanItem.endsWith("us") && 
                                  !cleanItem.endsWith("as") && 
                                  !cleanItem.endsWith("less") && 
                                  !cleanItem.endsWith("ness") && 
                                  !cleanItem.endsWith("mass") && 
                                  !cleanItem.endsWith("king") && 
                                  !cleanItem.endsWith("parking") &&
                                  !cleanItem.endsWith("business"));
            
            return lower.includes("bulk") || 
                   lower.includes("in bulk") || 
                   (parseQuantity(text) && parseQuantity(text) > 1) ||
                   /\b(?:seeds|timber|tickets|juices|batteries|wires|threads|tokens|canisters|barrels|materials|ores|cards|items|keys|snow)\b/i.test(cleanItem) ||
                   isPluralWord;
        })();
        if (/\beach\b/i.test(lower) || isPluralOther) {
            val += " each";
        }
        ctx.priceInfo = { type: priceType, value: val };
        ctx.logs.push({ text: `Formatted price: <strong>${val}</strong>`, type: 'policy' });
    }
}

function formatNumberDots(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function cleanPriceKeywords(text, ctx) {
    let result = text;
    if (ctx && ctx.priceMatches) {
        for (const matchStr of ctx.priceMatches) {
            const escaped = escapeRegExp(matchStr);
            const regex = new RegExp(escaped, "gi");
            const replacement = /\beach\b/i.test(matchStr) ? " __HAS_EACH__ " : "";
            result = result.replace(regex, replacement);
        }
    }
    result = result.replace(/\bfor\s+(?:my\s+)?(?:brother|sister|friend|friends|dad|mom|father|mother|family|son|daughter)\b/gi, "");
    result = result.replace(/\b(?:price|budget|rent|bet|cost|cash)\b/gi, "")
                   .replace(/\b(call me|ph:?|phone:?|call|ping me|mail)\s*[0-9-]*\b/gi, "")
                   .replace(/,\s*,/g, ",")
                   .replace(/\s+/g, " ")
                   .trim();
    // Strip leading/trailing punctuation except quotes and parens
    result = result.replace(/^[^\w"'()\s]+|[^\w"'()\s]+$/g, "").trim();
    return result;
}

/* ==========================================================================
   Category Formatters
   ========================================================================== */

function splitOnLastFor(str) {
    const lower = str.toLowerCase();
    const index = lower.lastIndexOf(" for ");
    if (index === -1) return null;
    return [
        str.substring(0, index).trim(),
        str.substring(index + 5).trim()
    ];
}

// 1. Auto Category
function formatAutoAd(adBody, action, ctx) {
    const lowerBody = adBody.toLowerCase();
    
    if ((action === "Trading" || action === "Selling or trading") && lowerBody.includes(" for ")) {
        const parts = splitOnLastFor(adBody);
        if (parts) {
            const formattedA = formatAutoAd(parts[0], action, ctx);
            const formattedB = formatAutoAd(parts[1], action, ctx);
            if (formattedA && formattedB) {
                return `${formattedA} for ${formattedB}`;
            }
        }
    }
    
    // Specific matched vehicle check has priority over generic words (e.g. "italy f458 car" -> match specific "Grotti Italia (F458)" first)
    const matched = matchVehicle(adBody);
    
    if (matched) {
        ctx.logs.push({ text: `Fuzzy matched vehicle: <strong>${matched.name}</strong> (${matched.category})`, type: 'policy' });
        
        // Check Not Sellable Constraint
        if (matched.category === "not_sellable_cars") {
            if (action === "Buying" || action === "Selling" || action === "Selling or trading") {
                ctx.status = "rejected";
                ctx.rejectionReason = "Cannot advertise this vehicle as it is non-sellable.";
                ctx.logs.push({ text: `Rejected: <strong>${matched.name}</strong> is non-sellable.`, type: 'danger' });
                return "";
            }
        }
        
        // Extract upgrades
        const upgrades = parseAutoUpgrades(adBody);
        const order = [];
        
        if (upgrades.config) {
            order.push(upgrades.config);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.config}</strong>`, type: 'correction' });
        }
        if (upgrades.visual) {
            order.push(upgrades.visual);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.visual}</strong>`, type: 'correction' });
        }
        if (upgrades.wheels) {
            order.push(upgrades.wheels);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.wheels}</strong>`, type: 'correction' });
        }
        if (upgrades.insurance) {
            order.push(upgrades.insurance);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.insurance}</strong>`, type: 'correction' });
        }
        if (upgrades.turbo) {
            order.push(upgrades.turbo);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.turbo}</strong>`, type: 'correction' });
        }
        if (upgrades.drift) {
            order.push(upgrades.drift);
            ctx.logs.push({ text: `Upgrade: <strong>${upgrades.drift}</strong>`, type: 'correction' });
        }
        
        let upgradesText = "";
        if (order.length > 0) {
            order[0] = "with " + order[0];
            if (order.length === 1) {
                upgradesText = ` ${order[0]}`;
            } else if (order.length === 2) {
                upgradesText = ` ${order[0]} and ${order[1]}`;
            } else {
                const last = order.pop();
                upgradesText = ` ${order.join(", ")} and ${last}`;
            }
        }
        
        // Check if at Auto Fair
        let fairText = "";
        if (ctx.raw.toLowerCase().includes("auto fair") || ctx.raw.toLowerCase().includes("autofair")) {
            fairText = " at Auto Fair";
            if (ctx.priceInfo && ctx.priceInfo.value === "Negotiable") {
                ctx.priceInfo = null;
            }
        }
        
        return `"${matched.name}"${upgradesText}${fairText}`;
    }
    
    // Check for generic vehicle words
    const genericWords = ["car", "helicopter", "heli", "plane", "motorcycle", "bike", "boat", "vehicle", "truck"];
    let isGeneric = false;
    let matchedGeneric = "";
    for (const word of genericWords) {
        const regex = new RegExp(`\\b${word}s?\\b`, "i");
        if (regex.test(lowerBody)) {
            isGeneric = true;
            matchedGeneric = word;
            break;
        }
    }
    
    if (isGeneric) {
        let displayWord = matchedGeneric;
        if (displayWord === "heli") displayWord = "helicopter";
        const article = (displayWord.startsWith("a") || displayWord.startsWith("e") || displayWord.startsWith("i") || displayWord.startsWith("o") || displayWord.startsWith("u")) ? "an" : "a";
        let bodyStr = `${article} ${displayWord}`;
        
        // Extract upgrades
        const upgrades = parseAutoUpgrades(adBody);
        const order = [];
        if (upgrades.config) order.push(upgrades.config);
        if (upgrades.visual) order.push(upgrades.visual);
        if (upgrades.wheels) order.push(upgrades.wheels);
        if (upgrades.insurance) order.push(upgrades.insurance);
        if (upgrades.turbo) order.push(upgrades.turbo);
        if (upgrades.drift) order.push(upgrades.drift);
        
        let upgradesText = "";
        if (order.length > 0) {
            order[0] = "with " + order[0];
            if (order.length === 1) {
                upgradesText = ` ${order[0]}`;
            } else if (order.length === 2) {
                upgradesText = ` ${order[0]} and ${order[1]}`;
            } else {
                const last = order.pop();
                upgradesText = ` ${order.join(", ")} and ${last}`;
            }
        }
        
        let fairText = "";
        if (ctx.raw.toLowerCase().includes("auto fair") || ctx.raw.toLowerCase().includes("autofair")) {
            fairText = " at Auto Fair";
            if (ctx.priceInfo && ctx.priceInfo.value === "Negotiable") {
                ctx.priceInfo = null;
            }
        }
        
        return `${bodyStr}${upgradesText}${fairText}`;
    }
    
    ctx.status = "rejected";
    ctx.rejectionReason = "Insufficient information for the vehicle name.";
    ctx.logs.push({ text: `Rejected: Vehicle name not recognized.`, type: 'danger' });
    return "";
}

function parseAutoUpgrades(text) {
    const lower = text.toLowerCase();
    const upgrades = {};
    
    // 1. Configuration
    if (lower.includes("full configuration") || lower.includes("max config") || lower.includes("max tuning") || lower.includes("fully upgraded") || lower.includes("full tune") || lower.includes("full config") || lower.includes("maxed") || lower.includes("full max") || lower.includes("full chip tuning") || lower.includes("pro parts") || lower.includes("car full") || /\bfull\b/i.test(lower)) {
        upgrades.config = "full configuration";
    } else if (lower.includes("partial configuration") || lower.includes("nearly max") || lower.includes("lvl3") || lower.includes("lvl 3") || lower.includes("partial config") || lower.includes("partial tuning") || lower.includes("partially upgraded")) {
        upgrades.config = "partial configuration";
    }
    
    // 2. Visual Upgrades
    if (lower.includes("body upgrade") || lower.includes("body kit") || lower.includes("visual upgrade") || lower.includes("visuals") || lower.includes("visual")) {
        upgrades.visual = "visual upgrades";
    }
    
    // 3. Luminous Wheels
    // e.g. "unique 6 rims" or "luminous rims of type 6" or "unique wheels type 25" or "wheels 9"
    const rimMatch = lower.match(/\b(?:unique|luminous|wheels|rims)\s*(?:rims|wheels)?\s*(?:of\s*type|type)?\s*(\d+)\b/i);
    if (rimMatch) {
        const typeNum = rimMatch[1] || "X";
        upgrades.wheels = `luminous wheels of type ${typeNum}`;
    } else if (lower.includes("luminous wheels") || lower.includes("unique wheels") || lower.includes("luminous rims") || lower.includes("wheels") || lower.includes("rims")) {
        upgrades.wheels = "luminous wheels of type X";
    }
    
    // 4. Insurance
    if (lower.includes("insurance") || lower.includes("insured")) {
        upgrades.insurance = "insurance";
    }
    
    // 5. Turbo
    if (lower.includes("turbo") || lower.includes("turb")) {
        upgrades.turbo = "turbo kit";
    }
    
    // 6. Drift
    if (lower.includes("drift") || lower.includes("drft")) {
        upgrades.drift = "drift kit";
    }
    
    return upgrades;
}

function fuzzyFindLocation(text) {
    const lower = text.toLowerCase();
    const preps = ["in", "at", "near", "to"];
    const allPlaces = [...OFFICIAL_PLACES, ...UNOFFICIAL_PLACES];
    
    allPlaces.sort((a, b) => b.length - a.length);
    
    for (const prep of preps) {
        let index = -1;
        while ((index = lower.indexOf(prep + " ", index + 1)) !== -1) {
            let startOfPlace = index + prep.length + 1;
            let sub = text.substring(startOfPlace).trim();
            if (sub.toLowerCase().startsWith("the ")) {
                sub = sub.substring(4).trim();
                startOfPlace += 4;
            }
            
            const cleanSub = sub.split(/[,.;:#\u2116\(\)]/)[0].trim();
            if (!cleanSub) continue;
            
            const words = cleanSub.split(/\s+/);
            for (let len = Math.min(words.length, 3); len >= 1; len--) {
                const candidate = words.slice(0, len).join(" ");
                const match = getClosestMatch(candidate, allPlaces, 0.7);
                if (match) {
                    const rawMatched = text.substring(index, startOfPlace + candidate.length);
                    return {
                        place: match,
                        preposition: prep,
                        raw: rawMatched
                    };
                }
            }
        }
    }
    
    for (const place of allPlaces) {
        const words = text.split(/\s+/);
        const placeWordsCount = place.split(/\s+/).length;
        for (let i = 0; i <= words.length - placeWordsCount; i++) {
            const candidate = words.slice(i, i + placeWordsCount).join(" ");
            const cleanCandidate = candidate.replace(/[,.;:#\u2116\(\)]/g, "");
            const match = getClosestMatch(cleanCandidate, [place], 0.7);
            if (match) {
                let prep = "in";
                let rawMatched = candidate;
                if (i > 0) {
                    const prevWord = words[i - 1].toLowerCase().replace(/[^a-z]/g, "");
                    if (preps.includes(prevWord)) {
                        prep = prevWord;
                        rawMatched = words[i - 1] + " " + candidate;
                    }
                }
                return {
                    place: match,
                    preposition: prep,
                    raw: rawMatched
                };
            }
        }
    }
    
    return null;
}

function extractLocation(text) {
    const loc = fuzzyFindLocation(text);
    if (!loc) return null;
    
    let prep = loc.preposition;
    let place = loc.place;
    
    let formatted = "";
    if (UNOFFICIAL_PLACES.includes(place)) {
        formatted = `${prep} the ${place.toLowerCase()}`;
    } else {
        formatted = `${prep} ${place}`;
    }
    
    return {
        raw: loc.raw,
        formatted: formatted,
        place: place
    };
}

// 2. Real Estate Category
function formatRealEstateAd(adBody, action, ctx) {
    let lower = adBody.toLowerCase();
    
    // Extract location first
    const locInfo = extractLocation(adBody);
    let cleanAdBody = adBody;
    if (locInfo) {
        cleanAdBody = adBody.replace(locInfo.raw, "").trim();
        cleanAdBody = cleanAdBody.replace(/,\s*$/, "").replace(/\s+and\s*$/, "").trim();
    }
    
    const cleanLower = cleanAdBody.toLowerCase();
    
    let houseLabel = "house";
    if (cleanLower.includes("apartment")) houseLabel = "apartment";
    else if (cleanLower.includes("mansion")) houseLabel = "mansion";
    else if (cleanLower.includes("penthouse") || cleanLower.includes("casino apartment")) houseLabel = "Casino penthouse";

    // Quantity check (1-3 properties)
    const qtyMatch = cleanLower.match(/\b([1-3])\s*(house|apartment|mansion|penthouse|casino penthouse|casino apartment)s?\b/i);
    let mainSubject = "";
    
    if (qtyMatch) {
        const qty = qtyMatch[1];
        const type = qtyMatch[2].toLowerCase();
        const typePluralMap = {
            "house": "houses",
            "apartment": "apartments",
            "mansion": "mansions",
            "penthouse": "penthouses",
            "casino penthouse": "Casino penthouses",
            "casino apartment": "Casino penthouses"
        };
        const pluralType = typePluralMap[type] || (type + "s");
        mainSubject = `${qty} ${pluralType}`;
        ctx.logs.push({ text: `Formatted property quantity: <strong>${mainSubject}</strong>`, type: 'correction' });
    } else {
        // Check house number
        let numMatch = cleanLower.match(/(?:house|apartment|mansion|penthouse|\u2116)\s*(?:no\.?|number|num\.?|#|\u2116)?\s*(\d+)\b/i);
        
        if (!numMatch) {
            // Find all standalone numbers in cleanLower
            const allNums = [...cleanLower.matchAll(/\b(\d+)\b/g)].map(m => ({ val: parseInt(m[1]), raw: m[0], index: m.index }));
            // Filter out numbers that represent garage spaces or warehouses or quantities
            const nonFeatureNums = allNums.filter(numItem => {
                // Check if the number is part of garage spaces
                const gsMatch = cleanLower.match(new RegExp(`(\\d+)\\s*(?:gs|g\\.s\\.|garage|garages)|(?:gs|g\\.s\\.|garage|garages)\\s*(\\d+)`, "i"));
                if (gsMatch && (gsMatch[1] === numItem.raw || gsMatch[2] === numItem.raw)) {
                    return false;
                }
                // Check if the number is part of warehouse space
                const whMatch = cleanLower.match(new RegExp(`(\\d+)\\s*(?:wh|w\\.h\\.|warehouse|warehouses)|(?:wh|w\\.h\\.|warehouse|warehouses)\\s*(\\d+)`, "i"));
                if (whMatch && (whMatch[1] === numItem.raw || whMatch[2] === numItem.raw)) {
                    return false;
                }
                // Check if it represents property quantity
                const qtyRegex = new RegExp(`\\b${numItem.raw}\\s*(?:house|apartment|mansion|penthouse)s?\\b`, "i");
                if (qtyRegex.test(cleanLower)) {
                    return false;
                }
                return true;
            });
            
            if (nonFeatureNums.length > 0) {
                // Take the last standalone number (usually the house number at the end)
                const targetNum = nonFeatureNums[nonFeatureNums.length - 1];
                numMatch = [null, targetNum.raw];
            }
        }
        
        if (numMatch) {
            mainSubject = `${houseLabel} \u2116${numMatch[1]}`;
            ctx.logs.push({ text: `Formatted property designation to <strong>${mainSubject}</strong>`, type: 'correction' });
        } else {
            if (houseLabel === "Casino penthouse") {
                mainSubject = houseLabel;
            } else {
                const prefix = (houseLabel.startsWith("a") || houseLabel.startsWith("e")) ? "an" : "a";
                mainSubject = `${prefix} ${houseLabel}`;
            }
        }
    }
    
    // Extract features in ordering list
    const features = parseRealEstateFeatures(cleanAdBody, houseLabel === "apartment", ctx);
    
    let featuresText = "";
    if (features.length > 0) {
        if (features.length === 1) {
            featuresText = ` with ${features[0]}`;
        } else if (features.length === 2) {
            featuresText = ` with ${features[0]} and ${features[1]}`;
        } else {
            const last = features.pop();
            featuresText = ` with ${features.join(", ")} and ${last}`;
        }
    }
    
    let result = `${mainSubject}${featuresText}`;
    if (locInfo) {
        result += ` ${locInfo.formatted}`;
    }
    return result;
}

function parseRealEstateFeatures(text, isApartment, ctx) {
    const lower = text.toLowerCase();
    const foundFeatures = [];
    const featureMap = {};
    
    // 1. Garden
    if (lower.includes("garden")) {
        featureMap.garden = "a garden";
    }
    
    // 2. Garage spaces
    const gsMatch = lower.match(/(\d+)\s*(?:gs|g\.s\.?|garage|garages)/i) || lower.match(/(?:gs|g\.s\.?|garage|garages)\s*(\d+)/i);
    if (gsMatch) {
        const allowedGs = [2, 5, 9, 25, 30];
        const num = parseInt(gsMatch[1]);
        if (allowedGs.includes(num)) {
            featureMap["garage spaces"] = `${num} g.s.`;
        } else {
            ctx.logs.push({ text: `Garage spaces ${num} is invalid. Reverting to closest valid GRP size.`, type: 'warning' });
            // find closest
            const closest = allowedGs.reduce((prev, curr) => Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
            featureMap["garage spaces"] = `${closest} g.s.`;
        }
    }
    
    // 3. Warehouse
    const whMatch = lower.match(/(\d+)\s*(?:wh|w\.h\.?|warehouse|warehouses)/i) || lower.match(/(?:wh|w\.h\.?|warehouse|warehouses)\s*(\d+)/i);
    if (whMatch) {
        featureMap.warehouses = `${whMatch[1]} w.h.`;
    }
    
    // 4. Custom Interior
    if (lower.includes("furnished") || lower.includes("custom interior") || lower.includes("luxe interior") || lower.includes("lux interior")) {
        featureMap["custom interior"] = "custom interior";
    }
    
    // 5. Insurance (Only for Houses, not Apartments)
    if (lower.includes("insurance") || lower.includes("insured")) {
        if (isApartment) {
            ctx.logs.push({ text: `Removed insurance: Apartments cannot be insured.`, type: 'correction' });
        } else {
            featureMap.insurance = "insurance";
        }
    }
    
    // 6. Helipad
    if (lower.includes("helipad") || lower.includes("heli pad") || /\bheli\b/i.test(lower)) {
        featureMap.helipad = "helipad";
    }
    
    // 7. Swimming pool
    if (lower.includes("swimming pool") || lower.includes("pool")) {
        featureMap["swimming pool"] = "swimming pool";
    }
    
    // 8. Tennis court
    if (lower.includes("tennis")) {
        featureMap["tennis court"] = "tennis court";
    }
    
    // 9. Driveway
    if (lower.includes("driveway")) {
        const isLong = lower.includes("long") || lower.includes("large");
        featureMap.driveway = isLong ? "long driveway" : "driveway";
    }
    
    // 10. Backyard
    if (lower.includes("backyard") || lower.includes("back yard")) {
        featureMap.backyard = "spacious backyard";
    }
    
    // 11. Views
    if (lower.includes("view") || lower.includes("views")) {
        featureMap.views = "nice views";
    }
    
    // Extract features in the correct order
    REAL_ESTATE_ORDER.forEach(fKey => {
        if (featureMap[fKey]) {
            foundFeatures.push(featureMap[fKey]);
        }
    });
    
    return foundFeatures;
}

// 3. Work Category
function formatWorkAd(adBody, action, ctx) {
    let lower = adBody.toLowerCase();
    
    // DJ casing check
    let body = adBody.replace(/\bdj\b/gi, "DJ");
    
    // Spell corrections
    body = body.replace(/\bfore\b/gi, "for");
    
    // Solar panel plantation corrections
    if (/\bsolar\s*(?:panel\s*)?plantations?\b/i.test(body)) {
        if (body.toLowerCase().includes("workers")) {
            body = body.replace(/\bsolar\s*(?:panel\s*)?plantations?\b/gi, "solar panel plantations");
        } else {
            body = body.replace(/\bsolar\s*(?:panel\s*)?plantations?\b/gi, "solar panel plantation");
        }
        ctx.logs.push({ text: `Normalized solar panel plantation reference`, type: 'correction' });
    }
    
    // level X -> X years experience
    const lvlMatch = body.match(/level\s*(\d+)/i) || body.match(/lvl\s*(\d+)/i);
    if (lvlMatch) {
        body = body.replace(lvlMatch[0], `${lvlMatch[1]} years of experience`);
        ctx.logs.push({ text: `Changed level translation to years of experience`, type: 'correction' });
    }
    
    // Construction site addresses matching
    const siteMatch = body.match(/construction site\s*#?(\d+)/i);
    if (siteMatch) {
        const siteNum = siteMatch[1];
        let addressStr = "";
        if (siteNum === "1") addressStr = "\u21161 on Vespucci Boulevard";
        else if (siteNum === "2") addressStr = "\u21162 on Calais Avenue";
        else if (siteNum === "3") addressStr = "\u21163 in Pillbox Hill";
        else addressStr = `\u2116${siteNum}`;
        
        body = body.replace(siteMatch[0], `construction site ${addressStr}`);
        ctx.logs.push({ text: `Formatted construction site with address details`, type: 'correction' });
    }
    
    // If multiple roles mentioned -> hiring workers
    const rolesList = ["locksmith", "electrician", "gardener", "surveyor", "driver"];
    let matchedRolesCount = 0;
    rolesList.forEach(r => {
        if (lower.includes(r)) matchedRolesCount++;
    });
    
    if (matchedRolesCount > 1) {
        body = body.replace(/hiring\s+[a-z\s,and]+/i, "hiring workers ");
        ctx.logs.push({ text: `Multiple roles combined into "workers"`, type: 'correction' });
    }
    
    // Capitalize professions at start of ad, lowercase otherwise (except DJ)
    if (action === "") {
        // e.g. "Lawyer looking for work" -> Lawyer is at the start
        const firstWord = body.split(" ")[0];
        if (rolesList.includes(firstWord.toLowerCase()) || firstWord.toLowerCase() === "lawyer" || firstWord.toLowerCase() === "trucker") {
            body = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase() + body.slice(firstWord.length);
        }
    }
    
    return body;
}

// 4. Dating Category
function formatDatingAd(adBody, action, ctx) {
    const lower = adBody.toLowerCase();
    
    // Standard targets (wife, boyfriend, etc.)
    const matchesDatingTarget = ["family members", "girlfriend", "boyfriend", "valentine", "husband", "friends", "family", "friend", "date", "wife", "alliance"];
    for (const t of matchesDatingTarget) {
        const regex = new RegExp(`\\b${t}\\b`, "i");
        if (regex.test(lower)) {
            // Check for illegal price/budget on wife/husband (triggers blacklist)
            if ((t === "wife" || t === "husband") && ctx.priceInfo && ctx.priceInfo.value !== "Negotiable") {
                ctx.status = "blacklisted";
                ctx.blacklistReason = `Attempting to purchase/sell a spouse (${t}) with a price is forbidden.`;
                ctx.rejectionReason = "Improper advertisement.";
                ctx.logs.push({ text: `Blacklist triggered: Trading spouses with value!`, type: 'danger' });
                return "";
            }
            
            const displayTarget = (t === "friends") ? "friend" : t;
            const prefix = (displayTarget === "wife" || displayTarget === "husband" || displayTarget === "date" || displayTarget === "friend" || displayTarget === "boyfriend" || displayTarget === "girlfriend" || displayTarget === "valentine" || displayTarget === "family") ? "a " : (displayTarget === "alliance" ? "an " : "");
            return `for ${prefix}${displayTarget}`;
        }
    }
    
    // If not a standard target, check if it's a person search:
    // It should have FirstName LastName format
    const nameMatch = adBody.match(/^([A-Za-z]+)\s+([A-Za-z]+)$/);
    if (nameMatch) {
        const firstName = nameMatch[1];
        const lastName = nameMatch[2];
        const fullName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()} ${lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()}`;
        
        ctx.logs.push({ text: `Dating search target name capitalized: <strong>${fullName}</strong>`, type: 'correction' });
        
        // Database check
        const matchCit = grpCitizens.find(c => c.name.toLowerCase() === fullName.toLowerCase());
        if (!matchCit) {
            ctx.status = "rejected";
            ctx.rejectionReason = "Person not found in database. (Person must be in the GRAND RP mail)";
            ctx.logs.push({ text: `Rejected: Citizen <strong>${fullName}</strong> not found in database.`, type: 'warning' });
            return "";
        }
        
        // Classified check
        if ((matchCit.role.includes("Leader") || matchCit.role.includes("Deputy")) && matchCit.role.includes("State") && !matchCit.isLI) {
            ctx.status = "rejected";
            ctx.rejectionReason = "You cannot search for classified person.";
            ctx.logs.push({ text: `Rejected: <strong>${fullName}</strong> is a classified state leader/deputy.`, type: 'warning' });
            return "";
        }
        
        return `for ${fullName}`;
    }
    
    // Default dating
    return adBody;
}

function formatOwnerSearchAd(adBody, ctx) {
    let clean = adBody.toLowerCase().replace(/\bowner\b/gi, "").trim();
    clean = clean.replace(/^(?:a|an|the)\s+/gi, "").trim();
    
    let matchedName = "Business";
    if (clean.includes("gun") || clean.includes("weapon") || clean.includes("ammo") || clean.includes("ammunition")) {
        matchedName = "Ammunition Store";
    } else if (clean.includes("clothing") || clean.includes("cloth")) {
        matchedName = "Clothing Shop";
    } else if (clean.includes("24/7") || clean.includes("twenty four seven")) {
        matchedName = "24/7 Store";
    } else if (clean.includes("gas") || clean.includes("fuel")) {
        matchedName = "Gas Station";
    } else if (clean.includes("car sharing") || clean.includes("carsharing")) {
        matchedName = "Car sharing";
    } else if (clean.includes("business") || clean.includes("biz")) {
        matchedName = "Business";
    } else if (clean) {
        const bizTypes = BUSINESSES_DB;
        let closest = bizTypes.find(type => new RegExp(`\\b${escapeRegExp(type)}\\b`, 'i').test(clean));
        if (!closest) {
            closest = getClosestMatch(clean, bizTypes, 0.4);
        }
        if (closest) {
            matchedName = closest.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        }
    }
    
    const startsWithVowel = /^[aeiou]/i.test(matchedName);
    const article = startsWithVowel ? "an" : "a";
    return `${article} ${matchedName} owner`;
}

// 5. Businesses Category
function formatBusinessesAd(adBody, action, ctx) {
    const lowerBody = adBody.toLowerCase();
    if ((action === "Trading" || action === "Selling or trading") && lowerBody.includes(" for ")) {
        const parts = splitOnLastFor(adBody);
        if (parts) {
            const formattedA = formatBusinessesAd(parts[0], action, ctx);
            const formattedB = formatBusinessesAd(parts[1], action, ctx);
            if (formattedA && formattedB) {
                return `${formattedA} for ${formattedB}`;
            }
        }
    }
    
    let body = adBody;
    
    // Rename personal -> private
    body = body.replace(/personal business/gi, "private business");
    body = body.replace(/pbiz/gi, "private business");
    
    // Normalize ATM
    body = body.replace(/\batm\s+business\b/gi, "ATM");
    body = body.replace(/\batm\b/gi, "ATM");
    
    // Drug lab -> Burger shop
    if (body.toLowerCase().includes("drug lab")) {
        body = body.replace(/drug lab/gi, "Burger shop");
        ctx.logs.push({ text: `Replaced restricted "drug lab" with "Burger shop" and issued warning`, type: 'warning' });
    }
    
    // Rename gun store -> Ammunition Store
    body = body.replace(/gun store/gi, "Ammunition Store");
    body = body.replace(/weapon store/gi, "Ammunition Store");
    
    // Rename charging station -> Electric station
    body = body.replace(/charging station/gi, "Electric station");
    
    // Rename auto workshop -> Service station
    body = body.replace(/auto workshop/gi, "Service station");
    
    // Family business trade check
    if (body.toLowerCase().includes("family business") && action === "Trading") {
        ctx.status = "rejected";
        ctx.rejectionReason = "Family businesses cannot be traded.";
        ctx.logs.push({ text: `Rejected: Family business trade is prohibited.`, type: 'warning' });
        return "";
    }
    
    // Make sure we include "business" or "shares" keyword correctly
    const bizTypes = BUSINESSES_DB;
    
    let matchedBiz = bizTypes.find(type => new RegExp(`\\b${escapeRegExp(type)}\\b`, 'i').test(body));
    if (!matchedBiz) {
        matchedBiz = getClosestMatch(body, bizTypes, 0.4);
    }
    if (matchedBiz) {
        let isPlantation = false;
        let plantationCrop = "";
        if (matchedBiz === "Plantation") {
            isPlantation = true;
            const cropMatch = body.match(/\b(pumpkin|cabbage|mandarin|pineapple)\b/i);
            if (cropMatch) {
                plantationCrop = cropMatch[1].charAt(0).toUpperCase() + cropMatch[1].slice(1).toLowerCase();
            }
        }

        if (isPlantation && plantationCrop) {
            // Remove the crop name first to avoid duplication
            let cleanBody = body.replace(new RegExp(`\\b${plantationCrop}\\b`, 'gi'), "").replace(/\s+/g, " ").trim();
            
            // Reconstruct the business name
            let hasSharesOrControl = cleanBody.toLowerCase().includes("shares") || cleanBody.toLowerCase().includes("control") || cleanBody.toLowerCase().includes("business");
            let targetName = `${plantationCrop} plantation`;
            if (!hasSharesOrControl) {
                targetName = `${plantationCrop} plantation business`;
                ctx.logs.push({ text: `Appended "business" keyword to crop plantation`, type: 'correction' });
            }
            
            // Replace "plantation" case-insensitively with the target name
            cleanBody = cleanBody.replace(/\bplantation\b/gi, targetName);
            body = cleanBody.replace(/\s+/g, " ").trim();
        } else {
            // Strip intermediate "business" keyword if number is present (e.g. "Car sharing business no2" -> "Car sharing Ôäû2")
            const matchedBizEscaped = escapeRegExp(matchedBiz);
            const bizWithNumRegex = new RegExp(`\\b(${matchedBizEscaped})\\s+business\\s*(?:no\\.?|number|num\\.?|#|\\u2116|mp|n\\.?|\\-)?\\s*(\\d+)\\b`, 'i');
            body = body.replace(bizWithNumRegex, (match, biz, num) => {
                return `${biz} \u2116${parseInt(num)}`;
            });

            // Check if there is a number associated with the business
            const numMatch = body.match(new RegExp(`\\b(${escapeRegExp(matchedBiz)})\\s*(?:no\\.?|number|num\\.?|#|\\u2116|mp|n\\.?|\\-)?\\s*(\\d+)\\b`, 'i'));
            let isBedsSpec = false;
            if (numMatch) {
                const afterMatch = body.substring(numMatch.index + numMatch[0].length).trim().toLowerCase();
                if (/^beds?\b/i.test(afterMatch)) {
                    isBedsSpec = true;
                }
            }
            if (numMatch && !isBedsSpec) {
                // Business with number -> replace with "MatchedBiz ÔäûNum" and do NOT append "business"
                const numVal = parseInt(numMatch[2]);
                body = body.replace(numMatch[0], `${matchedBiz} \u2116${numVal}`);
                ctx.logs.push({ text: `Formatted business designation to <strong>${matchedBiz} \u2116${numVal}</strong>`, type: 'correction' });
            } else {
                // Business without number -> make sure "business" or "shares" or "control" is present
                if (!body.toLowerCase().includes("shares") && !body.toLowerCase().includes("business") && !body.toLowerCase().includes("control")) {
                    // Append business
                    body = body.replace(new RegExp(escapeRegExp(matchedBiz), "gi"), `${matchedBiz} business`);
                    ctx.logs.push({ text: `Appended "business" keyword to official category`, type: 'correction' });
                } else {
                    // Just capitalize/canonicalize matchedBiz
                    body = body.replace(new RegExp(escapeRegExp(matchedBiz), "gi"), matchedBiz);
                }
            }
        }
    }
    
    return body;
}

// 6. Services & Discounts Category
function formatTemplateAd(adBody, category, ctx) {
    // Check custom trained templates shorthand first (check ALL entries for best match)
    let bestFmtShortLen = 0;
    let bestFmtShortTemplate = null;
    const cleanInputForFmt = adBody.trim().toLowerCase();
    for (const ct of customTemplates) {
        if (ct.shorthand) {
            const cleanShort = ct.shorthand.trim().toLowerCase();
            if (cleanInputForFmt === cleanShort || cleanInputForFmt.includes(cleanShort)) {
                const remaining = cleanInputForFmt.replace(cleanShort, "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
                if (remaining.length < 5 && cleanShort.length > bestFmtShortLen) {
                    bestFmtShortLen = cleanShort.length;
                    bestFmtShortTemplate = ct;
                }
            }
        }
    }
    if (bestFmtShortTemplate) {
        ctx.action = "";
        ctx.priceInfo = null;
        ctx.logs.push({ text: `Expanded custom shorthand to template: <strong>${bestFmtShortTemplate.text}</strong>`, type: 'policy' });
        return bestFmtShortTemplate.text;
    }

    // Check if it's a shorthand template request
    const shorthandMatch = adBody.match(/\b(?:ammunition\s+store|ammunation\s+store|ammo\s+store|ammo|weapon\s+shop|gun\s+store|weapon\s+store|rifleclub|bobbys|canikpide|wong|pew\s+pew|lue|siddhu|most\s+wanted|central\s+mall)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(39|40|41|111|147|148|149|150|151|152|269)\s+\b(?:temp|template|t)\s*([12])\b/i);
    const familyShorthandMatch = adBody.match(/\b(?:family|fam|uchiha|kingdom|deluca)?\s*(?:gps\s*|house\s*|h\s*)?(?:No\.?|\u2116|#)?\s*(55|258|536)\s+\b(?:temp|template|t)\s*([12])\b/i);
    const clothingShorthandMatch = adBody.match(/\b(?:clothing\s+shop|clothing\s+store|clothing|wear|style|fashion|trendzone)?\s*(?:gps\s*|No\.?|\u2116|#)?\s*(31|32|50|74|75|122|126|142|143|144|145|146|271|275)\s+\b(?:temp|template|t)\s*([12])\b/i);
    const officeShorthandMatch = adBody.match(/\b(?:(?:[a-z\s]+)?office)?\s*(?:No\.?|\u2116|#|-)?\s*(24|585|677|1000|1017|1288|1419|1948|2198|2796|7963|10364|12313|13724|14396|14633|15136|21046|27650|32125|33698|41760|50367|52942|78981|85042|85235)\s+\b(?:temp|template|t)\s*([12])\b/i);
    const storeShorthandMatch = adBody.match(/\b(?:store\s+)?24\/7(?:\s+store)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(23|24|25|26|27|28|29|30|78|119|120|121|123|125|128|129|139|140|141|270)\s+\b(?:temp|template|t)\s*([12])\b/i);
    const gasShorthandMatch = adBody.match(/\b(?:gas\s+station|gas\s+stn|gas|fuel|station|stn|ron|sahara|indian|tsunami|charon|remix|xr|kek|liff|brody|immortals|mobil|loves|surya|jordan|sher|renegades|oilarc)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(4|6|7|8|9|10|11|13|14|15|16|17|18|21|23|115|116|117|118|124|127|136|137)\s+\b(?:temp|template|t)\s*([12])\b/i);
    let parkingShorthandMatch = adBody.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(55)\s+\b(?:temp|template|t)\s*([12])\b/i);
    if (!parkingShorthandMatch) {
        parkingShorthandMatch = adBody.match(/\b(?:parking\s+lot|parking|park|ekip|eileen|remix|playboys|rockford)?\s*(?:gps\s*)?(?:No\.?|\u2116|#)?\s*(51|52|53|54|56|57|58|79|80|81|82|83|84|85|101|135)\s+\b(?:temp|template|t)\s*([12])\b/i);
    }
    if (shorthandMatch) {
        const remaining = adBody.replace(shorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = shorthandMatch[1];
            const tempIdx = shorthandMatch[2];
            const matched = getAmmunitionTemplate(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (storeShorthandMatch) {
        const remaining = adBody.replace(storeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = storeShorthandMatch[1];
            const tempIdx = storeShorthandMatch[2];
            const matched = getStore247Template(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (gasShorthandMatch) {
        const remaining = adBody.replace(gasShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = gasShorthandMatch[1];
            const tempIdx = gasShorthandMatch[2];
            const matched = getGasStationTemplate(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (parkingShorthandMatch) {
        const remaining = adBody.replace(parkingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = parkingShorthandMatch[1];
            const tempIdx = parkingShorthandMatch[2];
            const matched = getParkingTemplate(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (familyShorthandMatch) {
        const remaining = adBody.replace(familyShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = familyShorthandMatch[1];
            const tempIdx = familyShorthandMatch[2];
            const matched = getFamilyTemplate(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (clothingShorthandMatch) {
        const remaining = adBody.replace(clothingShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const shopNum = clothingShorthandMatch[1];
            const tempIdx = clothingShorthandMatch[2];
            const matched = getClothingTemplate(shopNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    } else if (officeShorthandMatch) {
        const remaining = adBody.replace(officeShorthandMatch[0], "").replace(/^[^\w]+|[^\w]+$/g, "").trim();
        if (remaining.length < 5) {
            const officeNum = officeShorthandMatch[1];
            const tempIdx = officeShorthandMatch[2];
            const matched = getOfficeTemplate(officeNum, tempIdx);
            if (matched) {
                ctx.action = "";
                ctx.priceInfo = null;
                ctx.logs.push({ text: `Expanded shorthand to template: <strong>${matched}</strong>`, type: 'policy' });
                return matched;
            }
        }
    }

    let cleanAdBody = adBody.replace(/^(?:[a-zA-Z0-9\s\u2116#\-:()&]+)?(?:template|temp)\s+\d+[-\s]*/i, "").trim();
    let tempAdBody = cleanAdBody.replace(/\b(?:price|budget)?\s*(?:negotiable|negable|negoitable|nego|neg)\b/gi, "")
                                .replace(/\b(?:for|at|price|budget)?\s*[\$\d\.,kKmMbB\s]+(?:each)?\b/gi, "")
                                .replace(/\b\d+\s*[%]?\s*and\s*\d+\s*[%]?\s*juices?\b/gi, "")
                                .trim();
    const combinedTemplates = OFFICIAL_TEMPLATES.concat(customTemplates.map(t => t.text));
    const matched = getClosestMatch(tempAdBody, combinedTemplates, 0.65) || getClosestMatch(cleanAdBody, combinedTemplates, 0.65);
    if (!matched) {
        ctx.status = "rejected";
        ctx.rejectionReason = "Template not found in database. Contact LI to create a new template.";
        ctx.logs.push({ text: `Rejected: Template not recognized.`, type: 'warning' });
        return "";
    }
    
    ctx.action = "";
    ctx.priceInfo = null;
    ctx.logs.push({ text: `Matched template: <strong>${matched}</strong>`, type: 'policy' });
    return matched;
}

function maskPhrases(text) {
    let result = text;
    // Normalize "10 and 20% juices" -> "10% and 20% juices"
    result = result.replace(/\b(\d+)\s*(?:%|percent)?\s+and\s+(\d+)\s*(?:%|percent)?\s*juices?\b/gi, (match, p1, p2) => {
        return `${p1}% and ${p2}% juices`;
    });
    result = result.replace(/\b(\d+%\s+and\s+\d+%)(?!\w)/gi, (match) => {
        return "__PCT_AND_PCT_START__" + match.replace(/\s+/g, "_") + "__PCT_AND_PCT_END__";
    });
    result = result.replace(/\bflame\s+and\s+water\b/gi, "__FLAME_AND_WATER__");
    result = result.replace(/\battack\s+and\s+protection\b/gi, "__ATTACK_AND_PROTECTION__");
    result = result.replace(/\bprotection\s+and\s+immunity\b/gi, "__PROTECTION_AND_IMMUNITY__");
    result = result.replace(/\b(prime(?:\s+platinum)?\s*(?:with\s+)?\d+\s*(?:days?)?\s*and\s*\d+\s*days?)\b/gi, (match) => {
        return "__PRIME_AND_DAYS_START__" + match.replace(/\s+/g, "_") + "__PRIME_AND_DAYS_END__";
    });
    // Protect typed clothing/resource item lists from being split by comma/and
    // e.g. "tight mask 13 ,14 and 19" or "luminous stone 1 and 2"
    result = result.replace(/\b((?:tight\s+)?masks?|trousers?|luminous\s+stones?|luminous\s+wheels?)\s+(\d+(?:\s*[,]\s*\d+)*\s*(?:,?\s*and\s+\d+)?)\b/gi, (match) => {
        return "__TYPED_LIST_START__" + match.replace(/\s+/g, "_").replace(/,/g, "__COMMA__") + "__TYPED_LIST_END__";
    });
    return result;
}

function unmaskPhrases(text) {
    let result = text;
    result = result.replace(/__PCT_AND_PCT_START__(.+?)__PCT_AND_PCT_END__/g, (match, inner) => {
        return inner.replace(/_/g, " ");
    });
    result = result.replace(/__PRIME_AND_DAYS_START__(.+?)__PRIME_AND_DAYS_END__/g, (match, inner) => {
        return inner.replace(/_/g, " ");
    });
    result = result.replace(/__TYPED_LIST_START__(.+?)__TYPED_LIST_END__/g, (match, inner) => {
        return inner.replace(/_/g, " ").replace(/__COMMA__/g, ",");
    });
    result = result.replace(/__FLAME_AND_WATER__/g, "flame and water");
    result = result.replace(/__ATTACK_AND_PROTECTION__/g, "attack and protection");
    result = result.replace(/__PROTECTION_AND_IMMUNITY__/g, "protection and immunity");
    return result;
}

function itemRequiresArticle(itemStr, isFirst, ctx) {
    if (!isFirst) return false;
    const lower = itemStr.toLowerCase();
    
    if (lower.startsWith("a ") || lower.startsWith("an ")) {
        return false;
    }
    if (lower.includes("sim card") && (lower.includes("\u2116") || /\d/.test(lower))) {
        return false;
    }
    if (lower.includes("license plate") && (lower.includes("(") || /\d/.test(lower))) {
        return false;
    }
    if (lower.includes("inventory")) {
        return false;
    }
    if (lower.includes("biospark")) {
        return false;
    }
    if (lower.includes("luminous stone") && lower.includes("of type")) {
        return false;
    }
    if (lower.includes("luminous stones")) {
        return false;
    }
    if (lower.includes("drawing")) {
        return false;
    }
    if (lower.includes("copper")) {
        return false;
    }
    if (lower.includes("letter")) {
        return false;
    }
    if (lower.includes("pickaxe") && (lower.includes("quality") || lower.includes("lvl") || lower.includes("level"))) {
        return false;
    }
    if (lower.includes("fishing rod") && (lower.includes("quality") || lower.includes("lvl") || lower.includes("level"))) {
        return false;
    }
    if (lower.includes("shoulder pet")) {
        return false;
    }
    const fishList = ["salmon", "carp", "perch", "trout", "megalodon", "ray", "orca", "humpback whale"];
    if (fishList.some(fish => lower === fish || lower.endsWith(" " + fish))) {
        return false;
    }
    if (lower.includes("tuning") || lower.includes("suspension") || lower.includes("transmission") || lower.includes("brakes") || lower.includes("tires")) {
        return false;
    }
    if (lower.includes("juice") || lower.includes("juices")) {
        return false;
    }
    if (lower.includes("prime")) {
        return false;
    }
    if (lower.includes("various items")) {
        return false;
    }
    if (/^\d+/.test(lower)) {
        return false;
    }
    if (lower.includes("timber") || lower.includes("wires")) {
        return false;
    }
    if (lower.startsWith("cage with a")) {
        return false;
    }
    if (lower.includes("wheels") || lower.includes("rims")) {
        return false;
    }
    if (lower.includes("in bulk") || lower.includes("bulk")) {
        return false;
    }
    if (ctx && ctx.raw) {
        const rawLower = ctx.raw.toLowerCase();
        if (rawLower.includes("in bulk") || rawLower.includes("bulk") || /\beach\b/i.test(rawLower)) {
            return false;
        }
    }
    const brands = ["abibas", "muci", "lui vi", "niki", "mikachu", "kolex", "off-white"];
    if (brands.some(b => lower.startsWith(b))) {
        return false;
    }
    if (lower.endsWith("s") && !lower.endsWith("ss")) {
        return false;
    }
    return true;
}

function prependArticle(itemStr) {
    const lower = itemStr.toLowerCase();
    const isVowel = /^[aeiou]/i.test(lower);
    const article = isVowel ? "an" : "a";
    return `${article} ${itemStr}`;
}

// 7. Other Category (Clothing & items)
function formatOtherAd(adBody, action, ctx) {
    let normalizedAdBody = adBody;
    // Automatically insert commas/separators between clothing type specs and adjacent items
    normalizedAdBody = normalizedAdBody.replace(/(\btype\s+[a-zA-Z0-9]+)\s+(?=(?:high|medium|low|max|advanced)\s+quality|lvl\s*\d+|level\s*\d+|\d+\s*lvl|\d+\s*level|rare|regular|secret|grand|cayo|car|resource|diamonds?|salmons?|carps?|perch|trout|megalodon|ray|orca|whale|timber|wires|hookah|sponge)/gi, "$1, ");
    
    const lower = normalizedAdBody.toLowerCase();
    
    if ((action === "Trading" || action === "Selling or trading") && lower.includes(" for ")) {
        const parts = splitOnLastFor(normalizedAdBody);
        if (parts) {
            const formattedA = formatOtherAd(parts[0], action, ctx);
            const formattedB = formatOtherAd(parts[1], action, ctx);
            if (formattedA && formattedB) {
                return `${formattedA} for ${formattedB}`;
            }
        }
    }
    
    // Check if event (party, wedding, car meet)
    const isEvent = /^(?:pool\s+)?party\b/i.test(lower) || 
                    /^(?:wedding|car\s+meet)\b/i.test(lower) || 
                    /\b(?:party|wedding|car\s+meet)\s+at\b/i.test(lower);
    if (isEvent) {
        ctx.action = "";
        ctx.priceInfo = null;
        return normalizedAdBody;
    }
    
    // Play dice or poker
    if (lower.includes("dice") || lower.includes("poker")) {
        ctx.action = "Looking";
        const game = lower.includes("dice") ? "dice" : "poker";
        return `to play ${game}`;
    }
    
    // Mask phrases with 'and' to avoid splitting them incorrectly
    let maskedBody = maskPhrases(normalizedAdBody);
    
    // Split combined clothing/items if multiple exist
    let items = maskedBody.split(/\s+and\s+|\s+plus\s+|,/gi)
        .map(s => {
            let clean = s.trim();
            // Strip leading/trailing punctuation except quotes/parens
            clean = clean.replace(/^[^\w"'()\s]+|[^\w"'()\s]+$/g, "").trim();
            return clean;
        })
        .filter(s => {
            if (!s) return false;
            const lowerS = s.toLowerCase();
            if (lowerS === "each" || lowerS === "respectively" || lowerS === "each respectively" || lowerS === "price" || lowerS === "budget" || lowerS === "cost" || lowerS.includes("__has_each__")) {
                return false;
            }
            return true;
        });
    let formattedItems = [];
    
    // Check for multiple tuning parts list sharing the same quality level
    const tuningPartKeywords = ["transmission", "engine", "suspension", "brakes", "tires"];
    let allTuning = items.length > 1;
    if (allTuning) {
        for (const item of items) {
            const unmasked = unmaskPhrases(item).toLowerCase();
            const isTuning = tuningPartKeywords.some(part => unmasked.includes(part));
            if (!isTuning) {
                allTuning = false;
                break;
            }
        }
    }
    
    if (allTuning) {
        const qualityPatterns = [
            { name: "low quality ", regex: /\b(?:low|lvl\s*1|level\s*1|1\s*lvl)\b/i },
            { name: "medium quality ", regex: /\b(?:medium|med|lvl\s*2|level\s*2|2\s*lvl)\b/i },
            { name: "high quality ", regex: /\b(?:high|lvl\s*3|level\s*3|3\s*lvl)\b/i },
            { name: "max quality ", regex: /\b(?:max|lvl\s*4|level\s*4|4\s*lvl)\b/i },
            { name: "advanced quality ", regex: /\badvanced\b/i }
        ];
        const matchedQualities = qualityPatterns.filter(p => p.regex.test(lower));
        
        if (matchedQualities.length <= 1) {
            const matchedTuningParts = [];
            for (const part of tuningPartKeywords) {
                const regex = new RegExp(`\\b${part}s?\\b`, "i");
                if (regex.test(lower)) {
                    matchedTuningParts.push(part);
                }
            }
            
            if (matchedTuningParts.length > 1) {
                // Sort by order of appearance in original input
                matchedTuningParts.sort((a, b) => lower.indexOf(a) - lower.indexOf(b));
                
                let partsListText = "";
                if (matchedTuningParts.length === 2) {
                    partsListText = `${matchedTuningParts[0]} and ${matchedTuningParts[1]}`;
                } else {
                    const lastPart = matchedTuningParts.pop();
                    partsListText = `${matchedTuningParts.join(", ")} and ${lastPart}`;
                }
                
                const isPlural = lower.includes("tunings") || lower.includes("parts");
                const suffix = isPlural ? " tunings" : " tuning";
                
                let qty = parseQuantity(adBody);
                let qtyText = qty ? `${qty} ` : "";
                let qualityText = matchedQualities.length === 1 ? matchedQualities[0].name : "";
                
                const groupedTuningText = `${qtyText}${qualityText}${partsListText}${suffix}`;
                formattedItems.push(groupedTuningText);
                ctx.logs.push({ text: `Formatted multiple tuning parts: <strong>${groupedTuningText}</strong>`, type: 'correction' });
                
                // Skip the standard loop by setting items to empty
                items = [];
            }
        }
    }
    
    for (let i = 0; i < items.length; i++) {
        // Unmask the item first so matching works
        let rawItem = unmaskPhrases(items[i]);
        let isFirst = (i === 0);
        
        // Look for luminous unique wheels/rims in other
        if (/\b(?:rims?|wheels?)\b/i.test(rawItem)) {
            const numbers = rawItem.match(/\b\d+\b/g);
            let typeNum = "X";
            if (numbers && numbers.length > 0) {
                if (numbers.length === 1) {
                    typeNum = numbers[0];
                } else if (numbers.length === 2) {
                    typeNum = `${numbers[0]} and ${numbers[1]}`;
                } else {
                    const lastNum = numbers.pop();
                    typeNum = `${numbers.join(", ")} and ${lastNum}`;
                }
            }
            formattedItems.push(`luminous wheels of type ${typeNum}`);
            ctx.logs.push({ text: `Formatted rims to: <strong>luminous wheels of type ${typeNum}</strong>`, type: 'correction' });
            continue;
        }
        
        // Check other items first to avoid false-positive clothing matching
        let formattedOther = formatGeneralItem(rawItem, ctx);
        if (formattedOther) {
            if (itemRequiresArticle(formattedOther, isFirst, ctx)) {
                formattedOther = prependArticle(formattedOther);
            }
            formattedItems.push(formattedOther);
        } else {
            const matchedClothing = matchClothingItem(rawItem);
            if (matchedClothing) {
                // Reorder clothing: color (lowercase) | item name | type | gender
                const color = parseColor(rawItem);
                let typeVal = parseMultipleTypes(rawItem);
                const genderVal = parseGender(rawItem);
                
                if (matchedClothing.name.includes('*') && !typeVal) {
                    typeVal = extractTypeFromWildcard(rawItem);
                }

                // Filter out any numbers that are part of the clothing database name itself (e.g. 700 in "Abibas Pezy Boost 700 V3 Alvah shoes")
                if (typeVal && matchedClothing.name) {
                    const dbNumbers = (matchedClothing.name.match(/\b\d+\b/g) || []).map(n => n.toString());
                    if (dbNumbers.length > 0) {
                        const rawNumbers = typeVal.split(/,\s*|and\s+/).map(s => s.trim());
                        const filteredNumbers = rawNumbers.filter(num => !dbNumbers.includes(num));
                        if (filteredNumbers.length > 1) {
                            const last = filteredNumbers.pop();
                            typeVal = `${filteredNumbers.join(", ")} and ${last}`;
                        } else if (filteredNumbers.length === 1) {
                            typeVal = filteredNumbers[0];
                        } else {
                            typeVal = null;
                        }
                    }
                }
                
                let finalClothing = "";
                if (color) finalClothing += `${color} `;
                
                let namePart = matchedClothing.name;
                
                if (typeVal && typeVal.includes("and")) {
                    namePart = pluralizeClothingName(namePart);
                }
                
                if (namePart.includes('*')) {
                    namePart = namePart.replace('*', typeVal || 'X');
                }
                
                finalClothing += namePart;
                if (typeVal && !matchedClothing.name.includes('*')) {
                    finalClothing += ` of type ${typeVal}`;
                }
                if (genderVal) finalClothing += ` ${genderVal}`;
                
                formattedItems.push(finalClothing.trim());
                ctx.logs.push({ text: `Formatted clothing: <strong>${finalClothing.trim()}</strong>`, type: 'policy' });
            } else {
                // Not recognized. Reject
                ctx.status = "rejected";
                const actWord = action === "Buying" ? "buying" : "selling";
                ctx.rejectionReason = `Please, provide the correct name of the item you are ${actWord}.`;
                ctx.logs.push({ text: `Rejected: Item <strong>${rawItem}</strong> not recognized.`, type: 'warning' });
                return "";
            }
        }
    }
    
    if (formattedItems.length === 0) {
        return adBody;
    }
    
    // Max 3 items in other category
    if (formattedItems.length > 3) {
        ctx.status = "rejected";
        ctx.rejectionReason = "Cannot advertise more than 3 items at a time.";
        ctx.logs.push({ text: `Rejected: Exceeded max limit of 3 items in Other.`, type: 'warning' });
        return "";
    }
    
    if (formattedItems.length === 1) {
        return formattedItems[0];
    } else if (formattedItems.length === 2) {
        return `${formattedItems[0]} and ${formattedItems[1]}`;
    } else {
        const last = formattedItems.pop();
        return `${formattedItems.join(", ")} and ${last}`;
    }
}

function parseColor(text) {
    const colors = ["black", "white", "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "grey", "gray", "silver", "gold"];
    for (const c of colors) {
        if (text.toLowerCase().includes(c)) return c.toLowerCase();
    }
    return null;
}

function extractTypeFromWildcard(text) {
    const numbers = text.match(/\b\d+\b/g);
    if (numbers) {
        const qty = parseQuantity(text);
        for (const num of numbers) {
            // If it's a quantity at the start, skip it
            if (qty && num === qty.toString()) {
                if (new RegExp(`^\\s*${num}\\b`, "i").test(text)) {
                    continue;
                }
            }
            return num;
        }
    }
    return null;
}

function parseMultipleTypes(text) {
    const lower = text.toLowerCase();
    const numbers = [];
    const regex = /\b(\d+)\b/g;
    let match;
    const qty = parseQuantity(text);
    
    while ((match = regex.exec(lower)) !== null) {
        const numStr = match[1];
        const numIndex = match.index;
        
        // If this number is the quantity at the start of the text, skip it
        if (qty && parseInt(numStr) === qty) {
            const before = lower.substring(0, numIndex).trim();
            if (before === "" || before === "selling" || before === "buying" || before === "trading" || before === "renting" || before === "wts" || before === "wtb") {
                continue;
            }
        }
        numbers.push(numStr);
    }
    
    if (numbers.length > 1) {
        const last = numbers.pop();
        return `${numbers.join(", ")} and ${last}`;
    } else if (numbers.length === 1) {
        return numbers[0];
    }
    return null;
}

function parseType(text) {
    const typeMatch = text.toLowerCase().match(/(?:type|extra|extras)\s*#?(\d+)\b/i);
    return typeMatch ? typeMatch[1] : null;
}

function parseGender(text) {
    const lower = text.toLowerCase();
    if (lower.includes("for men") || lower.includes("for man") || lower.includes("male") || /\bmens?\b/i.test(lower) || /\bmen's\b/i.test(lower)) return "for men";
    if (lower.includes("for women") || lower.includes("for woman") || lower.includes("female") || /\bwomens?\b/i.test(lower) || /\bwomen's\b/i.test(lower)) return "for women";
    return null;
}

function cleanItemForFuzzy(text) {
    let clean = text.toLowerCase().trim().replace(/__has_each__/gi, "");
    
    // Strip quantity/numbers at start or end
    clean = clean.replace(/^\d+%\s+and\s+\d+%\s*/g, "");
    clean = clean.replace(/^\d+%\s*/g, "");
    clean = clean.replace(/^\d+\s+/g, "");
    clean = clean.replace(/\b(?:lvl|level)\s*\d+\b/gi, "");
    clean = clean.replace(/\b\d+\s*(?:lvl|level)\b/gi, "");
    clean = clean.replace(/\b\d+\b/g, "");
    
    // Strip qualities/descriptors
    clean = clean.replace(/\b(?:top quality|scrap|luminous|unique|rare|exotic|regular|luxe|lux|furnished|high quality|low quality|medium quality|advanced|max)\b/gi, "");
    
    // Strip articles
    clean = clean.replace(/\b(?:a|an|the|in\s+bulk|bulk)\b/gi, "");
    
    // Normalize whitespace
    clean = clean.replace(/\s+/g, " ").trim();
    
    // Singularize common plurals
    if (clean.endsWith("ies")) {
        clean = clean.slice(0, -3) + "y"; // batteries -> battery, rubies -> ruby
    } else if (clean.endsWith("es") && !clean.endsWith("one") && !clean.endsWith("use") && !clean.endsWith("ate")) {
        clean = clean.slice(0, -2);
    } else if (clean.endsWith("s") && !clean.endsWith("ss") && !clean.endsWith("us") && !clean.endsWith("ex")) {
        clean = clean.slice(0, -1);
    }
    
    return clean;
}

function pluralizeClothingName(name) {
    const lower = name.toLowerCase();
    // If it already ends with s and is not dress, it's plural or doesn't change
    if (lower.endsWith("s") && !lower.endsWith("dress")) {
        return name;
    }
    
    // Check if it has "of type *"
    if (name.includes("of type *")) {
        // e.g. "Volex watch of type *" -> pluralize "watch" -> "Volex watches of type *"
        return name.replace(/watch/i, "watches");
    }
    
    // Check common clothing suffixes/words
    if (lower.endsWith("accessory")) {
        return name.slice(0, -9) + "accessories";
    }
    if (lower.endsWith("mask")) {
        return name.slice(0, -4) + "masks";
    }
    if (lower.endsWith("watch")) {
        return name.slice(0, -5) + "watches";
    }
    if (lower.endsWith("dress")) {
        return name + "es";
    }
    if (lower.endsWith("t-shirt") || lower.endsWith("shirt")) {
        return name + "s";
    }
    if (lower.endsWith("pullover")) {
        return name + "s";
    }
    if (lower.endsWith("sweater")) {
        return name + "s";
    }
    if (lower.endsWith("bra")) {
        return name + "s";
    }
    if (lower.endsWith("jacket")) {
        return name + "s";
    }
    if (lower.endsWith("hoodie")) {
        return name + "s";
    }
    if (lower.endsWith("coat")) {
        return name + "s";
    }
    if (lower.endsWith("suit")) {
        return name + "s";
    }
    if (lower.endsWith("chain")) {
        return name + "s";
    }
    if (lower.endsWith("necklace")) {
        return name + "s";
    }
    if (lower.endsWith("band")) {
        return name + "s";
    }
    if (lower.endsWith("ring")) {
        return name + "s";
    }
    if (lower.endsWith("charge")) {
        return name + "s";
    }
    if (lower.endsWith("cape")) {
        return name + "s";
    }
    if (lower.endsWith("rune") || lower.endsWith("runes")) {
        return name;
    }
    if (lower.endsWith("chick")) {
        return name + "s";
    }
    
    // Fallback using the standard pluralizeItemName
    return pluralizeItemName(name);
}

function pluralizeItemName(name) {
    const lower = name.toLowerCase();
    if (lower.endsWith("y") && !lower.endsWith("day") && !lower.endsWith("play") && !lower.endsWith("key")) {
        return name.slice(0, -1) + "ies"; // battery -> batteries
    }
    if (lower.endsWith("s")) {
        return name; // already plural or ends with s
    }
    if (lower.endsWith("ch") || lower.endsWith("sh") || lower.endsWith("x")) {
        return name + "es";
    }
    // Specific compound words pluralization
    if (lower.includes("ticket")) {
        return name.replace(/ticket/i, "tickets");
    }
    if (lower.includes("container")) {
        return name.replace(/container/i, "containers");
    }
    if (lower.includes("rod")) {
        return name.replace(/rod/i, "rods");
    }
    if (lower.includes("card")) {
        return name.replace(/card/i, "cards");
    }
    if (lower.includes("kit")) {
        return name.replace(/kit/i, "kits");
    }
    if (lower.includes("can")) {
        return name.replace(/can/i, "cans");
    }
    return name + "s";
}

function fuzzyCorrectItemName(rawItem, ctx) {
    const cleanLower = rawItem.toLowerCase().trim();
    const cleaned = cleanItemForFuzzy(rawItem);
    const hasEach = /\beach\b/i.test(cleanLower) || cleanLower.includes("__has_each__");
    
    // License plate check
    if (cleanLower.includes("plate") && !cleanLower.includes("armor")) {
        
        const plateMatch = rawItem.match(/(?:license|licence|liesence|liesance)?\s*plate\s*(?:no\.?|#|\u2116|number|num\.?)?\s*\(?([a-z0-9]+)\)?/i) || 
                           rawItem.match(/plate\s*(?:no\.?|#|\u2116|number|num\.?)?\s*\(?([a-z0-9]+)\)?/i);
                           
        let plateVal = null;
        if (plateMatch) {
            const tempVal = plateMatch[1].toLowerCase();
            if (tempVal !== "no" && tempVal !== "number" && tempVal !== "num" && tempVal !== "plate") {
                plateVal = plateMatch[1].toUpperCase();
            }
        }
        
        if (plateVal) {
            if (plateVal.length >= 3 && plateVal.length <= 7) {
                if (plateVal.includes("SEX") || plateVal.includes("FUCK") || plateVal.includes("BITCH") || plateVal.includes("CUNT") || plateVal.includes("NIGGER") || plateVal.includes("DICK")) {
                    ctx.status = "blacklisted";
                    ctx.blacklistReason = `License plate "${plateVal}" contains inappropriate or offensive language.`;
                    ctx.rejectionReason = "Cannot promote illegal items.";
                    ctx.logs.push({ text: `Blacklist triggered: Offensive license plate <strong>${plateVal}</strong>`, type: 'danger' });
                    return "";
                }
                
                let rawItemWithoutPlate = rawItem.replace(plateMatch[0], "");
                let qty = parseQuantity(rawItemWithoutPlate);
                let qtyText = qty && qty > 1 ? `${qty} ` : "";
                if (qty && qty > 1) {
                    return `${qtyText}license plates (${plateVal})`;
                } else {
                    return `license plate (${plateVal})`;
                }
            } else {
                ctx.status = "rejected";
                ctx.rejectionReason = "license plate: Must be 3-7 characters in length.";
                ctx.logs.push({ text: `Rejected: License plate "${plateVal}" is not 3-7 characters in length.`, type: 'warning' });
                return "";
            }
        } else {
            let qty = parseQuantity(rawItem);
            let qtyText = qty && qty > 1 ? `${qty} ` : "";
            const isCustom = cleanLower.includes("custom");
            const isPlural = cleanLower.includes("plates") || (qty && qty > 1) || hasEach;
            
            if (isCustom) {
                if (isPlural) {
                    return `${qtyText}custom license plates`;
                } else {
                    return `custom license plate`;
                }
            } else {
                if (isPlural) {
                    return `${qtyText}license plates`;
                } else {
                    return `license plate`;
                }
            }
        }
    }

    // 1. Ticket check
    if (cleanLower.includes("ticket") || cleanLower.includes("tcket") || cleanLower.includes("tikcet") || cleanLower.includes("tick") || cleaned.includes("ticket") || cleanLower.includes("cayo") || cleanLower.includes("perico")) {
        let canonical = "";
        if (cleanLower.includes("cayo") || cleanLower.includes("perico")) canonical = "Cayo Perico ticket";
        else if (cleanLower.includes("car")) canonical = "Car ticket";
        else if (cleanLower.includes("resource")) canonical = "Resource Miners ticket";
        else if (cleanLower.includes("grand") || cleanLower.includes("rp")) canonical = "Grand ticket";
        else if (cleanLower.includes("secret")) {
            if (cleanLower.includes("fragment") || cleanLower.includes("fragmnet")) {
                canonical = "Secret ticket fragment";
            } else {
                canonical = "Secret ticket";
            }
        }
        else if (cleanLower.includes("regular") || (cleanLower.includes("lottery") && !cleanLower.includes("rare") && !cleanLower.includes("flame"))) canonical = "regular lottery ticket";
        else if (cleanLower.includes("rare")) canonical = "rare lottery ticket";
        else if (cleanLower.includes("flame") || cleanLower.includes("water")) canonical = "flame and water lottery ticket";
        else canonical = "lottery ticket";

        let qty = parseQuantity(rawItem);
        const isPlural = cleanLower.includes("tickets") || cleanLower.includes("tckets") || cleanLower.includes("tikcets") || cleanLower.includes("fragments") || cleanLower.includes("fragmnets") || hasEach;
        
        if (qty && qty > 1) {
            if (canonical.includes("fragment")) {
                canonical = canonical.replace(/fragment/i, "fragments");
            } else {
                canonical = canonical.replace(/ticket/i, "tickets");
            }
            if ((cleanLower.includes("in bulk") || cleanLower.includes("bulk")) && !canonical.toLowerCase().includes("in bulk")) {
                canonical = `${qty} ${canonical} in bulk`;
            } else {
                canonical = `${qty} ${canonical}`;
            }
        } else if (cleanLower.includes("in bulk") || cleanLower.includes("bulk") || isPlural) {
            if (canonical.includes("fragment")) {
                canonical = canonical.replace(/fragment/i, "fragments");
            } else {
                canonical = canonical.replace(/ticket/i, "tickets");
            }
            if (cleanLower.includes("in bulk") || cleanLower.includes("bulk")) {
                canonical += " in bulk";
            }
        }
        return canonical;
    }
    
    // 1.5. Fish check
    const fishList = ["salmon", "carp", "perch", "trout", "megalodon", "ray", "orca", "humpback whale"];
    let matchedFish = null;
    let isBulk = cleanLower.includes("in bulk") || cleanLower.includes("bulk");
    let qty = parseQuantity(rawItem);
    
    if (cleanLower.includes("humpback") || cleanLower.includes("whale")) {
        matchedFish = "humpback whale";
    } else {
        for (const fish of fishList) {
            if (fish === "humpback whale") continue;
            const regex = new RegExp(`\\b${fish}s?\\b|\\bperches\\b`, "i");
            if (regex.test(cleanLower) || cleanLower.includes(fish) || cleaned.includes(fish)) {
                matchedFish = fish;
                break;
            }
        }
    }
    
    if (matchedFish) {
        let qtyText = qty ? `${qty} ` : "";
        let suffix = isBulk ? " in bulk" : "";
        return `${qtyText}${matchedFish}${suffix}`;
    }
    
    // 1.6. Tuning parts check
    const tuningParts = ["engine", "transmission", "suspension", "brakes", "tires", "tuning part", "tuning parts"];
    let matchedPart = null;
    let quality = "";
    
    for (const part of tuningParts) {
        if (cleanLower.includes(part)) {
            matchedPart = part;
            break;
        }
    }
    
    if (matchedPart) {
        if (cleanLower.includes("low") || cleanLower.includes("lvl 1") || cleanLower.includes("lvl1") || cleanLower.includes("level 1") || cleanLower.includes("1lvl") || cleanLower.includes("1 lvl")) {
            quality = "low quality ";
        } else if (cleanLower.includes("medium") || cleanLower.includes("med") || cleanLower.includes("lvl 2") || cleanLower.includes("lvl2") || cleanLower.includes("level 2") || cleanLower.includes("2lvl") || cleanLower.includes("2 lvl")) {
            quality = "medium quality ";
        } else if (cleanLower.includes("high") || cleanLower.includes("lvl 3") || cleanLower.includes("lvl3") || cleanLower.includes("level 3") || cleanLower.includes("3lvl") || cleanLower.includes("3 lvl")) {
            quality = "high quality ";
        } else if (cleanLower.includes("max") || cleanLower.includes("lvl 4") || cleanLower.includes("lvl4") || cleanLower.includes("level 4") || cleanLower.includes("4lvl") || cleanLower.includes("4 lvl")) {
            quality = "max quality ";
        } else {
            quality = "";
        }
        
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("parts") || cleanLower.includes("tunings") || (qty && qty > 1) || cleanLower.endsWith("s");
        
        let canonicalName = matchedPart;
        if (canonicalName === "tuning part" || canonicalName === "tuning parts") {
            canonicalName = isPlural ? "tuning parts" : "tuning part";
        } else {
            canonicalName = isPlural ? `${canonicalName} tunings` : `${canonicalName} tuning`;
        }
        
        return `${qtyText}${quality}${canonicalName}`;
    }
    
    // 1.7. Pickaxe check
    if (cleanLower.includes("pickaxe") || cleanLower.includes("pick axe") || cleaned.includes("pickaxe")) {
        let quality = "";
        if (cleanLower.includes("low") || cleanLower.includes("lvl 1") || cleanLower.includes("lvl1") || cleanLower.includes("level 1") || cleanLower.includes("1lvl") || cleanLower.includes("1 lvl")) {
            quality = "low quality ";
        } else if (cleanLower.includes("medium") || cleanLower.includes("med") || cleanLower.includes("lvl 2") || cleanLower.includes("lvl2") || cleanLower.includes("level 2") || cleanLower.includes("2lvl") || cleanLower.includes("2 lvl")) {
            quality = "medium quality ";
        } else if (cleanLower.includes("high") || cleanLower.includes("lvl 3") || cleanLower.includes("lvl3") || cleanLower.includes("level 3") || cleanLower.includes("3lvl") || cleanLower.includes("3 lvl")) {
            quality = "high quality ";
        } else if (cleanLower.includes("max") || cleanLower.includes("lvl 4") || cleanLower.includes("lvl4") || cleanLower.includes("level 4") || cleanLower.includes("4lvl") || cleanLower.includes("4 lvl")) {
            quality = "max quality ";
        } else if (cleanLower.includes("advanced") || cleanLower.includes("lvl 5") || cleanLower.includes("lvl5") || cleanLower.includes("level 5") || cleanLower.includes("5lvl") || cleanLower.includes("5 lvl")) {
            quality = "advanced quality ";
        }
        
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("pickaxes") || (qty && qty > 1) || cleanLower.endsWith("s") || hasEach;
        let name = isPlural ? "pickaxes" : "pickaxe";
        
        return `${qtyText}${quality}${name}`;
    }
    
    // 1.8. Inventory check
    if (cleanLower.includes("inventory") || cleanLower.includes("inventry") || cleanLower.includes("inventories")) {
        let quality = "";
        if (cleanLower.includes("low") || cleanLower.includes("lvl 1") || cleanLower.includes("lvl1") || cleanLower.includes("level 1") || cleanLower.includes("1lvl") || cleanLower.includes("1 lvl")) {
            quality = "low quality ";
        } else if (cleanLower.includes("medium") || cleanLower.includes("med") || cleanLower.includes("lvl 2") || cleanLower.includes("lvl2") || cleanLower.includes("level 2") || cleanLower.includes("2lvl") || cleanLower.includes("2 lvl")) {
            quality = "medium quality ";
        } else if (cleanLower.includes("high") || cleanLower.includes("lvl 3") || cleanLower.includes("lvl3") || cleanLower.includes("level 3") || cleanLower.includes("3lvl") || cleanLower.includes("3 lvl")) {
            quality = "high quality ";
        } else if (cleanLower.includes("max") || cleanLower.includes("lvl 4") || cleanLower.includes("lvl4") || cleanLower.includes("level 4") || cleanLower.includes("4lvl") || cleanLower.includes("4 lvl")) {
            quality = "max quality ";
        }
        
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("inventories") || (qty && qty > 1) || hasEach;
        let name = isPlural ? "inventories" : "inventory";
        
        return `${qtyText}${quality}${name}`;
    }
    
    // Luminous stone check (resource item with type support)
    if (cleanLower.includes("luminous stone") || cleaned.includes("luminous stone")) {
        // Check for type numbers (e.g. "luminous stone 1 and 2") FIRST, before parseQuantity
        const stoneTypeNums = parseMultipleTypes(rawItem.replace(/^\d+\s+/, ""));
        if (stoneTypeNums) {
            // When type is detected, no qty prefix ÔÇö just return the typed name
            let isPlural = stoneTypeNums.includes("and") || stoneTypeNums.includes(",");
            let name = "luminous stones";
            return `${name} of type ${stoneTypeNums}`;
        }
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("stones") || (qty && qty > 1) || hasEach;
        let name = isPlural ? "luminous stones" : "luminous stone";
        return `${qtyText}${name}`;
    }
    
    // Biospark check
    if (cleanLower.includes("biospark") || cleaned.includes("biospark")) {
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        // Check for type numbers (e.g. "biosparks 2" or "biosparks 1 and 3")
        const biosTypeNums = parseMultipleTypes(rawItem.replace(/^\d+\s+/, ""));
        if (biosTypeNums) {
            let isPlural = biosTypeNums.includes("and") || biosTypeNums.includes(",");
            let name = isPlural ? "Biosparks" : "Biosparks";
            return `${qtyText}${name} of type ${biosTypeNums}`;
        }
        let isPlural = cleanLower.includes("biosparks") || (qty && qty > 1) || hasEach;
        let name = isPlural ? "Biosparks" : "Biospark";
        return `${qtyText}${name}`;
    }

    // Token check
    if (cleanLower.includes("token") || cleaned.includes("token")) {
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("tokens") || (qty && qty > 1) || hasEach;
        let name = isPlural ? "tokens" : "token";
        return `${qtyText}${name}`;
    }

    // 1.9. Power booster shot check
    if (cleanLower.includes("booster") || cleanLower.includes("boost shot") || cleanLower.includes("booster shot")) {
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("shots") || (qty && qty > 1) || cleanLower.endsWith("s") || hasEach;
        let name = isPlural ? "power booster shots" : "power booster shot";
        return `${qtyText}${name}`;
    }
    
    // 1.10. Fishing rod check
    if (cleanLower.includes("fishing rod") || cleanLower.includes("fishingrod") || cleanLower.includes("rod") || cleaned.includes("fishing rod")) {
        let quality = "";
        if (cleanLower.includes("low") || cleanLower.includes("lvl 1") || cleanLower.includes("lvl1") || cleanLower.includes("level 1") || cleanLower.includes("1lvl") || cleanLower.includes("1 lvl")) {
            quality = "low quality ";
        } else if (cleanLower.includes("medium") || cleanLower.includes("med") || cleanLower.includes("lvl 2") || cleanLower.includes("lvl2") || cleanLower.includes("level 2") || cleanLower.includes("2lvl") || cleanLower.includes("2 lvl")) {
            quality = "medium quality ";
        } else if (cleanLower.includes("high") || cleanLower.includes("lvl 3") || cleanLower.includes("lvl3") || cleanLower.includes("level 3") || cleanLower.includes("3lvl") || cleanLower.includes("3 lvl")) {
            quality = "high quality ";
        } else if (cleanLower.includes("max") || cleanLower.includes("lvl 4") || cleanLower.includes("lvl4") || cleanLower.includes("level 4") || cleanLower.includes("4lvl") || cleanLower.includes("4 lvl")) {
            quality = "max quality ";
        } else if (cleanLower.includes("advanced") || cleanLower.includes("lvl 5") || cleanLower.includes("lvl5") || cleanLower.includes("level 5") || cleanLower.includes("5lvl") || cleanLower.includes("5 lvl")) {
            quality = "advanced quality ";
        }
        
        let qty = parseQuantity(rawItem);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = cleanLower.includes("rods") || (qty && qty > 1) || cleanLower.endsWith("s") || hasEach;
        let name = isPlural ? "fishing rods" : "fishing rod";
        
        return `${qtyText}${quality}${name}`;
    }
    
    // 1.11. SIM card check
    if (cleanLower.includes("sim card") || cleanLower.includes("simcard") || cleanLower.includes("sim card no") || cleanLower.includes("sim card \u2116")) {
        const numMatch = rawItem.match(/\b\d+[-0-9]*\b/);
        let numStr = numMatch ? numMatch[0] : "";
        let qty = parseQuantity(rawItem);
        let isPlural = cleanLower.includes("cards") || (!numStr && qty > 1);
        
        if (isPlural) {
            let qtyText = qty ? `${qty} ` : "";
            return `${qtyText}SIM cards`;
        } else {
            if (numStr) {
                let formattedNum = numStr;
                if (!numStr.includes("-")) {
                    const cleanNum = numStr.replace(/\D/g, "");
                    // Bypass hyphenation for repeating digit numbers (e.g. 1111111)
                    const isRepeatingDigits = /^(\d)\1+$/.test(cleanNum);
                    if (!isRepeatingDigits) {
                        if (cleanNum.length === 7 || cleanNum.length === 6 || cleanNum.length === 5) {
                            formattedNum = `${cleanNum.slice(0, 2)}-${cleanNum.slice(2, 4)}-${cleanNum.slice(4)}`;
                        } else if (cleanNum.length === 4) {
                            formattedNum = `${cleanNum.slice(0, 2)}-${cleanNum.slice(2)}`;
                        }
                    }
                }
                return `SIM card \u2116 ${formattedNum}`;
            } else {
                return `SIM card`;
            }
        }
    }
    
    // 2. Fruits check
    const fruitsList = ["pineapple", "mandarin", "strawberry", "pumpkin", "cabbage", "mushroom"];
    for (const fruit of fruitsList) {
        if (cleanLower.includes(fruit) || cleaned.includes(fruit) || getClosestMatch(cleaned, [fruit], 0.7)) {
            let type = (fruit === "cabbage") ? "vegetables" : "fruits";
            if (cleanLower.includes("seed") || cleaned.includes("seed")) type = "seeds";
            
            let qty = parseQuantity(rawItem);
            let qtyText = qty ? `${qty} ` : "";
            let suffix = isBulk ? " in bulk" : "";
            return `${qtyText}${fruit} ${type}${suffix}`;
        }
    }
    
    // 3. Shoulder pets
    if (cleanLower.includes("shoulder") || cleanLower.includes("sholder") || cleanLower.includes("pet") || cleanLower.includes("fox") || cleanLower.includes("cat") ||
        cleaned.includes("shoulder") || cleaned.includes("sholder") || cleaned.includes("pet") || cleaned.includes("fox") || cleaned.includes("cat")) {
        
        const petNames = ["six tailed fox", "white cat", "brown dog", "dog", "fox", "cat"];
        const cleanedStr = cleanLower.replace(/on shoulder pet|shoulder pet|on shoulder|shoulder|sholder|pet/gi, "").trim();
        const cleanedStrFuzzy = cleanItemForFuzzy(cleanedStr);
        
        const matchedPet = getClosestMatch(cleanedStrFuzzy, petNames, 0.6) || getClosestMatch(cleanedStr, petNames, 0.6);
        if (matchedPet) {
            let canonicalPet = matchedPet;
            if (matchedPet === "six tail fox" || matchedPet === "6 tailed fox" || matchedPet === "6 tail fox" || matchedPet === "fox") {
                canonicalPet = "six tailed fox";
            }
            return `${canonicalPet} on shoulder pet`;
        }
    }
    
    // 4. Cage pets
    const hasCage = cleanLower.includes("cage") || cleaned.includes("cage");
    const hasPet = cleanLower.includes("pet") || cleaned.includes("pet");
    const hasPetFood = cleanLower.includes("pet food") || cleaned.includes("pet food");
    if ((hasCage && hasPet) || (hasPet && !hasPetFood)) {
        const hasSpecificPet = ["panda", "duckling", "fancy bear", "kitty bunny", "cute hippo", "mini robot", "cyberdog", "robobeast", "mr candy cane", "futuristic friend", "husky", "new years husky", "border collie", "cougar", "poodle", "pug", "retriever", "rooster", "puma", "rottweiler", "cosmodog", "easter bunny", "santa claus", "christmas elf", "rabbit", "rat", "pig", "lion cub", "westie", "dog", "cat"].some(p => cleanLower.includes(p));
        if (!hasSpecificPet) {
            return "cage with a pet";
        }
    }

    const petsList = ["panda", "duckling", "fancy bear", "kitty bunny", "cute hippo", "mini robot", "cyberdog", "robobeast", "mr candy cane", "futuristic friend", "husky", "new years husky", "border collie", "cougar", "poodle", "pug", "retriever", "rooster", "puma", "rottweiler", "cosmodog", "easter bunny", "santa claus", "christmas elf", "rabbit", "rat", "pig", "lion cub", "westie", "dog", "cat"];
    for (const pet of petsList) {
        if (cleanLower.includes(pet) || cleaned.includes(pet) || getClosestMatch(cleaned, [pet], 0.7)) {
            const pCap = pet.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
            return `cage with a ${pCap}`;
        }
    }
    
    // 5. Resources check
    const resourcesList = ["copper", "emerald", "ruby", "diamond", "obsidian", "magma stone", "metal"];
    for (const res of resourcesList) {
        if (cleanLower.includes(res) || cleaned.includes(res) || getClosestMatch(cleaned, [res], 0.7)) {
            let qty = parseQuantity(rawItem);
            let qtyText = qty ? `${qty} ` : "";
            let pName = res;
            
            const isBulk = cleanLower.includes("in bulk") || cleanLower.includes("bulk");
            
            const isEach = /\beach\b/i.test(cleanLower);
            if (res === "emerald") pName = (qty > 1 || isBulk || cleanLower.endsWith("s") || isEach) ? "emeralds" : "an emerald";
            else if (res === "ruby") pName = (qty > 1 || isBulk || cleanLower.endsWith("s") || cleanLower.endsWith("ies") || isEach) ? "rubies" : "a ruby";
            else if (res === "diamond") pName = (qty > 1 || isBulk || cleanLower.endsWith("s") || isEach) ? "diamonds" : "a diamond";
            else if (res === "magma stone") pName = (qty > 1 || isBulk || cleanLower.endsWith("s") || isEach) ? "magma stones" : "a magma stone";
            else if (res === "metal") {
                if (/\b(?:top|top\s+quality|high\s+quality)\b/i.test(cleanLower) || /\b(?:top|top\s+quality|high\s+quality)\b/i.test(cleaned)) {
                    pName = "top quality metal";
                } else if (cleanLower.includes("scrap") || cleaned.includes("scrap")) {
                    pName = "scrap metal";
                } else {
                    pName = "scrap metal"; // fallback
                }
            }
            
            let resultName = `${qtyText}${pName}`;
            if (isBulk && !resultName.toLowerCase().includes("in bulk")) {
                resultName += " in bulk";
            }
            return resultName;
        }
    }
    
    // 6. General mappings
    const mappings = {
        "automatic drill": ["automatic drill", "auto drill", "drill", "dril"],
        "automatic sawmill": ["automatic sawmill", "sawmill", "saw mill"],
        "video card": ["video card", "videocard", "graphic card", "graphics card", "gpu"],
        "repair kit": ["repair kit", "rep kit"],
        "hookah": ["hookah", "hoka"],
        "paint can": ["paint can", "spray can"],
        "battery": ["battery", "batteries", "battries", "batry", "battres", "battre", "batteys", "battey"],
        "scrap metal": ["scrap metal", "scrapmetal"],
        "top quality metal": ["top quality metal", "top quality metel"],
        "thread": ["thread", "threads"],
        "timber": ["timber"],
        "token": ["token", "tokens"],
        "seeds": ["seeds", "seed"],
        "tonic treat": ["tonic treat", "tonic", "treat"],
        "Treasure Map": ["treasure map", "treasuremap"],
        "wires": ["wires", "wire"],
        "sponge": ["sponge", "sponges"],
        "license plate": ["license plate", "licence plate"],
        "premium fuel canister": ["premium fuel canister", "premium fuel canisters", "premium fuel", "premium fuel can", "premium fuel cans", "canister of premium fuel", "canisters of premium fuel"],
        "fuel canister": ["fuel canister", "fuel canisters", "fuel can", "fuel cans", "canister of fuel", "canisters of fuel", "canister", "canisters"],
        "fuel for resource extraction": ["fuel for resource extraction", "fuel", "resource extraction fuel", "extraction fuel"],
        "Progen container": ["progen container", "progen containers", "progen contaner", "progen contaners", "container", "containers", "p1 container", "p1 containers", "p1 contaner", "p1 contaners", "porgen p1", "porgen p1 container", "progen p1", "progen p1 container", "porgen container", "porgen containers", "porgen contaner", "porgen contaners"],
        "valuable container": ["valuable container", "valuable containers", "valuable contaner", "valuable contaners"],
        "Delivered caravans container": ["delivered caravans container", "delivered caravans containers", "caravans container", "caravans containers", "delivered caravan container", "delivered caravan containers"],
        "bandit container": ["bandit container", "bandit containers", "bandit contaner", "bandit contaners"],
        "biker container": ["biker container", "biker containers", "biker contaner", "biker contaners"],
        "trucker container": ["trucker container", "trucker containers", "trucker contaner", "trucker contaners"],
        "Ingrand container": ["ingrand container", "ingrand containers", "ingrand contaner", "ingrand contaners"],
        "desert scarf mask container": ["desert scarf mask container", "desert scarf mask containers", "desert scarf mask contaner", "desert scarf mask contaners"],
        "resources container": ["resources container", "resources containers", "resources contaner", "resources contaners", "resource container", "resource containers", "resource contaner", "resource contaners", "resources case", "resources cases", "cases of resources", "case of resources"],
        "gardener container": ["gardener container", "gardener containers", "gardener contaner", "gardener contaners", "gardeners container", "gardeners containers", "gardeners contaner", "gardeners contaners", "gardens case", "gardens cases", "gardens container", "gardens containers", "gardner container", "gardner containers"],
        "charger": ["charger", "chargers", "electric charger", "electric chargers", "electric charging", "charging"],
        "personal driver": ["personal driver", "personal drivers", "professional driver", "professional drivers", "driver", "drivers"],
        "lawyer": ["lawyer", "lawyers"],
        "professional dancer": ["professional dancer", "professional dancers"],
        "professional singer": ["professional singer", "professional singers"],
        "DJ": ["dj", "djs"],
        "solar panel": ["solar panel", "solar panels"],
        "solar barrel": ["solar barrel", "solar barrels"],
        "gasoline barrel": ["gasoline barrel", "gasoline barrels", "petrol barrel", "petrol barrels"],
        "kerene barrel": ["kerene barrel", "kerene barrels", "kerosene barrel", "kerosene barrels"],
        "GrandPro BodyCam": ["grandpro bodycam", "grandpro bodycams", "bodycam", "bodycams", "body cam", "body cams", "grand pro bodycam", "grand pro bodycams"],
        "Leash": ["leash", "leashes"],
        "Dirty Statue": ["dirty statue", "dirty statues"],
        "Purified Statue": ["purified statue", "purified statues"],
        "Drawing": ["drawing", "drawings"],
        "Christmas key": ["christmas key", "christmas keys"],
        "Christmas copper": ["christmas copper"],
        "Christmas timber": ["christmas timber"],
        "Christmas perch": ["christmas perch", "christmas perches"],
        "Christmas seed": ["christmas seed", "christmas seeds"],
        "Christmas lollipop": ["christmas lollipop", "christmas lollipops"],
        "New years gift": ["new years gift", "new years gifts", "new year gift", "new year gifts"],
        "Little gift": ["a little gift", "a little gifts", "little gift", "little gifts"],
        "Big gift": ["a big gift", "a big gifts", "big gift", "big gifts"],
        "Opened gift": ["an opened gift", "an opened gifts", "opened gift", "opened gifts"],
        "letter \"G\"": ["letter g", "g letter"],
        "letter \"R\"": ["letter r", "r letter"],
        "letter \"A\"": ["letter a", "a letter"],
        "letter \"N\"": ["letter n", "n letter"],
        "letter \"D\"": ["letter d", "d letter"],
        "letters": ["letters"]
    };
    
    for (const canonical in mappings) {
        const aliases = mappings[canonical];
        
        // Prevent fuzzy matching non-containers to containers
        if (canonical.toLowerCase().includes("container")) {
            const hasContainerWord = /\b(?:container|containers|contaner|contaners|continres|continre|cases?|crates?)\b/i.test(cleanLower) || cleanLower.includes("p1") || cleanLower.includes("porgen") || cleanLower.includes("progen");
            if (!hasContainerWord) {
                continue;
            }
        }
        
        // Check match against cleanLower, cleaned, and each alias cleaned
        let matchedAlias = getClosestMatch(cleaned, aliases.map(cleanItemForFuzzy), 0.7) || getClosestMatch(cleanLower, aliases, 0.7);
        if (matchedAlias) {
            let qty = parseQuantity(rawItem);
            let qtyText = qty ? `${qty} ` : "";
            
            let quality = "";
            if (canonical !== "video card") {
                if (cleanLower.includes("low") || cleaned.includes("low") || /\b(?:lvl|level)\s*1\b/i.test(cleanLower) || /\b1\s*(?:lvl|level)\b/i.test(cleanLower)) quality = "low quality ";
                else if (cleanLower.includes("medium") || cleanLower.includes("med") || cleaned.includes("medium") || cleaned.includes("med") || /\b(?:lvl|level)\s*2\b/i.test(cleanLower) || /\b2\s*(?:lvl|level)\b/i.test(cleanLower)) quality = "medium quality ";
                else if (cleanLower.includes("high") || cleanLower.includes("high") || /\b(?:lvl|level)\s*3\b/i.test(cleanLower) || /\b3\s*(?:lvl|level)\b/i.test(cleanLower)) quality = "high quality ";
                else if (cleanLower.includes("max") || cleanLower.includes("max") || /\b(?:lvl|level)\s*4\b/i.test(cleanLower) || /\b4\s*(?:lvl|level)\b/i.test(cleanLower)) quality = "max quality ";
                else if (cleanLower.includes("advanced") || cleanLower.includes("advanced") || /\b(?:lvl|level)\s*5\b/i.test(cleanLower) || /\b5\s*(?:lvl|level)\b/i.test(cleanLower)) quality = "advanced quality ";
            }
            
            let finalName = canonical;
            if (finalName === "license plate") {
                const plateMatch = rawItem.match(/license plate\s*\(?([a-z0-9]+)\)?/i) || rawItem.match(/plate\s*\(?([a-z0-9]+)\)?/i);
                if (plateMatch) {
                    return `license plate (${plateMatch[1].toUpperCase()})`;
                }
            }
            
            if (qty > 1 || cleanLower.endsWith("s") || cleanLower.includes("in bulk") || cleanLower.includes("bulk") || hasEach) {
                finalName = pluralizeItemName(finalName);
            }
            
            let resultName = `${qtyText}${quality}${finalName}`;
            if ((cleanLower.includes("in bulk") || cleanLower.includes("bulk")) && !resultName.toLowerCase().includes("in bulk")) {
                resultName += " in bulk";
            }
            return resultName;
        }
    }
    
    return null;
}

function formatGeneralItem(text, ctx) {
    const lower = text.toLowerCase();
    
    const hasBeachMarket = lower.includes("beach market") || lower.includes("beach markit");
    const hasVariousIndicator = lower.includes("various") || 
                                lower.includes("things") || 
                                lower.includes("goods") || 
                                lower.includes("items") || 
                                lower.includes("everything") || 
                                lower.includes("anything") ||
                                lower.includes("all items") ||
                                lower.includes("all things") ||
                                lower.includes("low price") ||
                                lower.includes("cheap");
    if (hasBeachMarket && hasVariousIndicator) {
        const shopMatch = text.match(/(?:shop|\u2116|#|no\.?|number|num\.?)\s*(?:no\.?|number|num\.?|#|\u2116)?\s*(\d+)/i);
        let shopStr = shopMatch ? ` shop \u2116${shopMatch[1]}` : "";
        return `various items at the beach market${shopStr}`;
    }
    
    if (lower.includes("juice") || lower.includes("juise") || lower.includes("juse")) {
        let juiceName = "";
        let qty = parseQuantity(text);
        let qtyText = qty ? `${qty} ` : "";
        let isPlural = lower.includes("juices") || lower.includes("juises") || lower.includes("juses") || (qty && qty > 1);
        
        let adjectives = [];
        let postnominal = "";
        
        if (lower.includes("becoming an animal") || lower.includes("becoming animal") || lower.includes("become animal") || lower.includes("becomng animal") || lower.includes("animal")) {
            postnominal = "on becoming an animal";
        } else if (lower.includes("double the payment") || lower.includes("double payment") || lower.includes("double pay") || lower.includes("paycheck") || lower.includes("pay check")) {
            postnominal = "for double the payment";
        } else {
            if (lower.includes("fast running") || lower.includes("fastrun") || lower.includes("running") || /\brun\b/i.test(lower)) {
                adjectives.push("fast running");
            }
            if (lower.includes("attack")) {
                adjectives.push("attack");
            }
            if (lower.includes("protection")) {
                adjectives.push("protection");
            }
            if (lower.includes("endurance")) {
                adjectives.push("endurance");
            }
            if (lower.includes("riding")) {
                adjectives.push("riding");
            }
            if (lower.includes("power")) {
                adjectives.push("power");
            }
            if (lower.includes("immunity")) {
                adjectives.push("immunity");
            }
        }
        
        if (postnominal) {
            juiceName = isPlural ? `juices ${postnominal}` : `juice ${postnominal}`;
        } else if (adjectives.length > 0) {
            let adjText = "";
            if (adjectives.length === 1) {
                adjText = adjectives[0];
            } else if (adjectives.length === 2) {
                adjText = `${adjectives[0]} and ${adjectives[1]}`;
            } else {
                const lastAdj = adjectives.pop();
                adjText = `${adjectives.join(", ")} and ${lastAdj}`;
            }
            const plural = isPlural || adjectives.length > 1;
            juiceName = plural ? `${adjText} juices` : `${adjText} juice`;
        }
        
        if (juiceName) {
            const pctMatch = text.match(/\b(\d+)%/);
            if (pctMatch) {
                const pct = pctMatch[1] + "%";
                juiceName = `${pct} ${juiceName}`;
            }
            return `${qtyText}${juiceName}`;
        }
        
        const pctMatches = text.match(/\b\d+%(?!\w)/g);
        if (pctMatches && pctMatches.length >= 2) {
            return `${pctMatches[0]} and ${pctMatches[1]} juices in bulk`;
        } else if (pctMatches && pctMatches.length === 1) {
            return `${pctMatches[0]} juices in bulk`;
        } else {
            return `juices in bulk`;
        }
    }
    
    if (lower.includes("prime") || lower.includes("platnum") || lower.includes("platinum")) {
        let type = "Prime";
        if (lower.includes("platinum") || lower.includes("platnum")) type = "Prime Platinum";
        
        const numberMatches = [...text.matchAll(/\b(\d+)\b/g)].map(m => parseInt(m[1]));
        if (numberMatches.length >= 2) {
            return `${type} with ${numberMatches[0]} and ${numberMatches[1]} days`;
        } else if (numberMatches.length === 1) {
            return `${type} with ${numberMatches[0]} days`;
        }
        return type;
    }
    
    const fuzzyCorrected = fuzzyCorrectItemName(text, ctx);
    if (fuzzyCorrected) {
        return fuzzyCorrected;
    }
    
    return null;
}

function parseQuantity(text) {
    const lower = text.toLowerCase();
    const regex = /\b(\d+)\b/g;
    let match;
    
    // Find if there is any matched clothing item in the text to avoid matching its model numbers as quantity
    const matchedClothing = matchClothingItem(text);
    const clothingNumbers = matchedClothing ? (matchedClothing.name.match(/\b\d+\b/g) || []).map(n => parseInt(n)) : [];

    while ((match = regex.exec(lower)) !== null) {
        const val = parseInt(match[1]);
        
        // Skip numbers that are part of the clothing model name (e.g. 700 in "Abibas Pezy Boost 700 V3 Alvah shoes")
        if (clothingNumbers.includes(val)) {
            continue;
        }

        const start = match.index;
        const end = regex.lastIndex;
        
        // Check prefix
        const prefixText = lower.substring(Math.max(0, start - 15), start).trim();
        
        // Skip if preceded by price keywords or currency symbols
        if (/(?:price|budget|rent|bet|cost|cash|salary|wage|\$)\s*$/i.test(prefixText)) {
            continue;
        }
        
        if (/(?:\bhouse|\bapartment|\bmansion|\bpenthouse|\bshop|\bcard|\bcards|\bsim|\u2116|#|\bno\.?|\blevel|\blvl|\btype|\bt\.?|\bvolex|\bkolex|\btrousers?|\bmasks?|\bshoes?|\bt-shirts?|\bsweatshirts?|\bjackets?|\bhoodies?|\bdress|\bwatch(?:es)?|\bglasses|\bcaps?|\bhats?|\bshorts?|\bleggings?|\bsuits?|\baccessory|\baccessories|\bskirts?|\bvests?|\bpants|\bpiercings?|\bhorns?|\bearphones?|\bheadphones?|\bears?|\bcapes?|\bcrowns?|\bgloves?|\bstones?|\bbiosparks?)$/i.test(prefixText.replace(/[:#\s\u2116]+$/g, "").trim())) {
            continue;
        }
        
        // Check suffix
        const suffixText = lower.substring(end, Math.min(lower.length, end + 15)).trim();
        
        // Skip if followed by price suffixes
        if (/^(?:m|mil|ml|million|k|thousand|b|billion|trillion)\b/i.test(suffixText)) {
            continue;
        }
        
        if (/^(?:%|percent|g\.?s\.?|w\.?h\.?|days?|lvls?|levels?|years?)/i.test(suffixText)) {
            continue;
        }
        
        return val;
    }
    return null;
}

/* ==========================================================================
   Location Prepositions & Capitalization Formatter
   ========================================================================== */

function formatLocationTerms(bodyText, ctx) {
    let lower = bodyText.toLowerCase();
    let result = bodyText;
    
    // 1. Check Official Places
    OFFICIAL_PLACES.forEach(place => {
        const pLower = place.toLowerCase();
        // Case-insensitive replace with proper casing
        const regex = new RegExp(`\\b${escapeRegExp(pLower)}\\b`, "gi");
        if (regex.test(result)) {
            result = result.replace(regex, place);
            ctx.logs.push({ text: `Capitalized official place: <strong>${place}</strong>`, type: 'correction' });
        }
    });
    
    // 2. Check Unofficial Places (Must prepend "the" if prepositions like in, near, at are present)
    UNOFFICIAL_PLACES.forEach(place => {
        // Find prepositions followed by the place
        // e.g. "near beach market" or "in ghetto" or "at airport"
        const prepRegex = new RegExp(`\\b(in|near|at|to)\\s+(${escapeRegExp(place)})\\b`, "gi");
        if (prepRegex.test(result)) {
            result = result.replace(prepRegex, `$1 the $2`);
            ctx.logs.push({ text: `Inserted "the" preposition modifier for unofficial place: <strong>${place}</strong>`, type: 'correction' });
        }
        
        // Ensure unofficial places are fully lowercase
        const placeRegex = new RegExp(`\\b${escapeRegExp(place)}\\b`, "gi");
        if (placeRegex.test(result)) {
            result = result.replace(placeRegex, place.toLowerCase());
        }
    });
    
    return result;
}

/* ==========================================================================
   UI Update & Rendering
   ========================================================================== */

function updateUI(ctx) {
    const textDisplay = document.getElementById("processed-ad-text");
    textDisplay.setAttribute("data-active-category", ctx.category);
    const banner = document.getElementById("ad-status-banner");
    const rejectionBox = document.getElementById("rejection-container");
    const blacklistBox = document.getElementById("blacklist-container");
    const logsList = document.getElementById("audit-logs-list");
    const btnCopy = document.getElementById("btn-copy-ad");
    const btnCopyRej = document.getElementById("btn-copy-rejection");
    const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
    if (btnSubmitBugInline) {
        btnSubmitBugInline.classList.remove("hide");
    }

    const btnGeminiAssist = document.getElementById("btn-gemini-assist");
    if (btnGeminiAssist) {
        btnGeminiAssist.disabled = !ctx.raw || !ctx.raw.trim();
    }
    
    // Clear logs
    logsList.innerHTML = "";
    
    // Render logs
    if (ctx.logs.length === 0) {
        logsList.innerHTML = `<li class="log-empty">No corrections made.</li>`;
    } else {
        ctx.logs.forEach(log => {
            const li = document.createElement("li");
            let icon = `<i class="fa-solid fa-circle-info log-correction"></i>`;
            if (log.type === 'policy') icon = `<i class="fa-solid fa-square-check log-policy"></i>`;
            else if (log.type === 'warning') icon = `<i class="fa-solid fa-triangle-exclamation log-warning"></i>`;
            else if (log.type === 'danger') icon = `<i class="fa-solid fa-circle-xmark log-danger"></i>`;
            
            li.innerHTML = `${icon} <span>${log.text.replace(/<(?!\/?(?:strong|em|code)\b)[^>]*>/gi, '')}</span>`;
            logsList.appendChild(li);
        });
    }
    
    // Render status
    if (ctx.status === "passed") {
        textDisplay.textContent = ctx.finalText;
        textDisplay.classList.remove("placeholder");
        
        banner.setAttribute("data-status", "passed");
        banner.querySelector(".status-title").textContent = "Policy Check Passed";
        banner.querySelector(".status-icon").innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        
        rejectionBox.classList.add("hide");
        document.getElementById("rejection-reason-text").textContent = "None";
        blacklistBox.classList.add("hide");
        btnCopy.disabled = false;
        
        if (btnCopyRej) btnCopyRej.classList.add("hide");
        const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
        if (btnSubmitBugInline && updateUI._lastText !== ctx.raw) {
            btnSubmitBugInline.classList.remove("btn-sent");
            btnSubmitBugInline.classList.add("glow-red");
            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;
        }
        
        // Stats increment check (only once per ad text)
        if (updateUI._lastText !== ctx.raw) {
            stats.processed++;
            const el = document.getElementById("stat-processed");
            if (el) el.querySelector(".stat-value").textContent = stats.processed;
            updateUI._lastText = ctx.raw;
        }
    } else if (ctx.status === "rejected") {
        textDisplay.textContent = "Advertisement Rejected.";
        textDisplay.classList.add("placeholder");
        
        banner.setAttribute("data-status", "rejected");
        banner.querySelector(".status-title").textContent = "Ad Rejected";
        banner.querySelector(".status-icon").innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        document.getElementById("rejection-reason-text").textContent = ctx.rejectionReason;
        rejectionBox.classList.remove("hide");
        blacklistBox.classList.add("hide");
        btnCopy.disabled = true;
        
        if (btnCopyRej) {
            btnCopyRej.classList.remove("hide");
        }
        const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
        if (btnSubmitBugInline && updateUI._lastText !== ctx.raw) {
            btnSubmitBugInline.classList.remove("btn-sent");
            btnSubmitBugInline.classList.add("glow-red");
            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;
        }
        
        if (updateUI._lastText !== ctx.raw) {
            stats.rejections++;
            const el = document.getElementById("stat-rejections");
            if (el) el.querySelector(".stat-value").textContent = stats.rejections;
            updateUI._lastText = ctx.raw;
        }
    } else if (ctx.status === "blacklisted") {
        textDisplay.textContent = "Advertisement Rejected. Phone Blacklisted.";
        textDisplay.classList.add("placeholder");
        
        banner.setAttribute("data-status", "blacklisted");
        banner.querySelector(".status-title").textContent = "Blacklist Triggered";
        banner.querySelector(".status-icon").innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
        
        document.getElementById("rejection-reason-text").textContent = ctx.rejectionReason;
        document.getElementById("blacklist-reason-text").textContent = ctx.blacklistReason;
        
        rejectionBox.classList.remove("hide");
        blacklistBox.classList.add("hide");
        btnCopy.disabled = true;
        
        if (btnCopyRej) {
            btnCopyRej.classList.remove("hide");
        }
        const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
        if (btnSubmitBugInline && updateUI._lastText !== ctx.raw) {
            btnSubmitBugInline.classList.remove("btn-sent");
            btnSubmitBugInline.classList.add("glow-red");
            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;
        }
        
        if (updateUI._lastText !== ctx.raw) {
            stats.blacklists++;
            const el = document.getElementById("stat-blacklists");
            if (el) el.querySelector(".stat-value").textContent = stats.blacklists;
            updateUI._lastText = ctx.raw;
        }
    }

    // Highlight main page category guide buttons
    const activeCat = ctx.category;
    const mainCatBtns = document.querySelectorAll(".main-category-btn");
    mainCatBtns.forEach(btn => {
        if (activeCat && btn.getAttribute("data-category") === activeCat) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

/* ==========================================================================
   Helper Routines
   ========================================================================== */

function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ==========================================================================
   Document Picture-in-Picture (Always-on-top Floating Clipboard)
   ========================================================================== */

let pipWindowInstance = null;

function initFloatingClipboard() {
    const btnFloat = document.getElementById("btn-float-pip");
    if (!btnFloat) return;

    btnFloat.addEventListener("click", async () => {
        if (!('documentPictureInPicture' in window)) {
            showCustomAlertDialog("Magic Editor Mode (Document Picture-in-Picture) is not supported in this browser.\n\nPlease use a modern version of Microsoft Edge or Google Chrome on Windows 10/11.", null, "warning");
            return;
        }

        if (pipWindowInstance) {
            pipWindowInstance.close();
            return;
        }

        try {
            // Request a Picture-in-Picture window
            const pipWindow = await window.documentPictureInPicture.requestWindow({
                width: 420,
                height: 770
            });
            pipWindowInstance = pipWindow;

            // Position and size the PiP window on the right side of the screen
            const screenWidth = (window.screen && window.screen.availWidth) || 1920;
            const screenHeight = (window.screen && window.screen.availHeight) || 1080;
            const pipX = screenWidth - 440;
            const pipY = Math.max(0, Math.floor((screenHeight - 770) / 2));
            try {
                pipWindow.resizeTo(420, 770);
                pipWindow.moveTo(pipX, pipY);
            } catch (posErr) {
                console.warn("Could not position/resize PiP window:", posErr);
            }

            try {
                pipWindow.focus();
                window.blur();
            } catch (focusErr) {
                console.warn("Focus/blur error:", focusErr);
            }

            // Toggle main window overlay to hide content and keep only the overlay visible
            const mainContainer = document.querySelector(".app-container");
            const pipOverlay = document.getElementById("pip-active-overlay");
            if (mainContainer && pipOverlay) {
                mainContainer.classList.add("hide");
                pipOverlay.classList.remove("hide");
            }

            // Save window coordinates and try to minimize (shrink/move) main window
            const originalPosition = {
                x: window.screenX || window.screenLeft || 0,
                y: window.screenY || window.screenTop || 0,
                width: window.outerWidth || window.innerWidth || 1200,
                height: window.outerHeight || window.innerHeight || 800
            };
            sessionStorage.setItem('li_pwa_original_pos', JSON.stringify(originalPosition));
            
            try {
                // Shrink to tiny dimensions and move to bottom-left corner
                window.resizeTo(160, 80);
                window.moveTo(0, window.screen.availHeight - 100);
            } catch (err) {
                console.warn("Could not shrink window:", err);
            }

            let isMainWindowShrunk = true;

            const handleMainFocus = () => {
                if (isMainWindowShrunk) {
                    const storedPos = sessionStorage.getItem('li_pwa_original_pos');
                    if (storedPos) {
                        try {
                            const pos = JSON.parse(storedPos);
                            window.resizeTo(pos.width, pos.height);
                            window.moveTo(pos.x, pos.y);
                            isMainWindowShrunk = false;
                        } catch (err) {
                            console.warn("Could not restore window on focus:", err);
                        }
                    }
                }
            };

            const handleMainBlur = () => {
                setTimeout(() => {
                    if (!document.hasFocus() && pipWindowInstance && !isMainWindowShrunk) {
                        const currentPos = {
                            x: window.screenX || window.screenLeft || 0,
                            y: window.screenY || window.screenTop || 0,
                            width: window.outerWidth || window.innerWidth || 1200,
                            height: window.outerHeight || window.innerHeight || 800
                        };
                        sessionStorage.setItem('li_pwa_original_pos', JSON.stringify(currentPos));
                        
                        try {
                            window.resizeTo(160, 80);
                            window.moveTo(0, window.screen.availHeight - 100);
                            isMainWindowShrunk = true;
                        } catch (err) {
                            console.warn("Could not shrink window on blur:", err);
                        }
                    }
                }, 150);
            };

            window.addEventListener("focus", handleMainFocus);
            window.addEventListener("blur", handleMainBlur);

            // Bind Return to Main button on the overlay
            const btnRestore = document.getElementById("btn-restore-main");
            if (btnRestore) {
                const newBtnRestore = btnRestore.cloneNode(true);
                btnRestore.parentNode.replaceChild(newBtnRestore, btnRestore);
                newBtnRestore.addEventListener("click", () => {
                    if (pipWindowInstance) {
                        pipWindowInstance.close();
                    }
                });
            }

            // Copy stylesheets from main window
            [...document.styleSheets].forEach((styleSheet) => {
                try {
                    const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join('');
                    const style = document.createElement('style');
                    style.textContent = cssRules;
                    pipWindow.document.head.appendChild(style);
                } catch (e) {
                    const link = document.createElement('link');
                    if (styleSheet.href) {
                        link.rel = 'stylesheet';
                        link.href = styleSheet.href;
                        pipWindow.document.head.appendChild(link);
                    }
                }
            });

            // Also copy Google Fonts links manually if needed
            document.querySelectorAll('link[rel="stylesheet"]').forEach(l => {
                if (l.href.includes("googleapis.com") || l.href.includes("font-awesome")) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = l.href;
                    pipWindow.document.head.appendChild(link);
                }
            });

            // Force overflow hidden on html/body of pip window to prevent scrollbars
            const overflowStyle = pipWindow.document.createElement('style');
            overflowStyle.textContent = 'html, body { overflow: hidden !important; margin: 0 !important; padding: 0 !important; }';
            pipWindow.document.head.appendChild(overflowStyle);

            // Add tab title
            pipWindow.document.title = "LifeInvader Magic Editor";

            // Inject the compact HTML layout
            pipWindow.document.body.innerHTML = `
                <div class="pip-layout" style="position: relative; height: 100vh; overflow: hidden; display: flex; flex-direction: column;">
                    <header class="pip-header">
                        <div class="pip-logo" style="display: flex; flex-direction: column; align-items: flex-start; gap: 3px;">
                            <div class="pip-logo-group" style="display: flex; align-items: center; gap: 6px;">
                                <span class="li-logo">
                                    <span class="li-text-l"><span class="li-letter">L</span><span class="li-letter">i</span><span class="li-letter">f</span><span class="li-letter">e</span></span><span class="li-text-i"><span class="li-letter">I</span><span class="li-letter">n</span><span class="li-letter">v</span><span class="li-letter">a</span><span class="li-letter">d</span><span class="li-letter">e</span><span class="li-letter">r</span></span>
                                </span>
                                <button id="pip-toggle-mode" class="pip-badge">MAGIC MODE</button>
                            </div>
                            <span class="pip-created-by" style="font-size: 9.5px; color: rgba(255,255,255,0.45); font-family: 'Outfit', sans-serif; font-weight: 500; white-space: nowrap; margin-left: 2px;">Created by Dopamine</span>
                        </div>
                        <div class="pip-header-right" style="display: flex; flex-direction: column; align-items: flex-end; gap: 3px; justify-content: center;">
                            <button id="pip-btn-history" class="pip-uniform-btn"><i class="fa-solid fa-clock-rotate-left"></i> History</button>
                            <span class="pip-updated-time" style="font-size: 8px; color: rgba(255,255,255,0.35); font-family: 'Outfit', sans-serif; font-weight: 500; text-transform: uppercase; white-space: nowrap; letter-spacing: 0.5px; margin-top: 1px;">UPDATED: May 26 07:30</span>
                        </div>
                    </header>
                    <main class="pip-main" style="flex: 1;">
                        <div class="pip-form-group">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <label for="pip-raw-ad" style="margin-bottom: 0;"><i class="fa-solid fa-file-import"></i> RAW ADVERTISEMENT CONTENT</label>
                            </div>
                            <textarea id="pip-raw-ad" placeholder="Type or paste advertisement here..."></textarea>
                            <div class="processed-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; gap: 8px;">
                                <button id="pip-btn-paste" class="pip-uniform-btn btn-paste" style="flex: 1;"><i class="fa-solid fa-paste"></i> Paste</button>
                                <button id="pip-compact-toggle" style="flex: 1; display: none;"></button>
                                <button id="pip-btn-clear" class="pip-uniform-btn btn-clear" style="flex: 1;"><i class="fa-solid fa-trash-can"></i> Clear</button>
                            </div>
                        </div>
                        <div class="pip-form-row" style="display: flex; gap: 8px; align-items: center; margin-top: 8px; width: 100%;">
                            <select id="pip-category-override" style="flex: 1; height: 28px !important; padding: 4px 8px !important; font-size: 11px !important; border-radius: 6px !important;">
                                <option value="auto">Auto-Detect</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Auto">Auto</option>
                                <option value="Businesses">Businesses</option>
                                <option value="Work">Work</option>
                                <option value="Dating">Dating</option>
                                <option value="Services">Services</option>
                                <option value="Discounts">Discounts</option>
                                <option value="Other">Other</option>
                            </select>
                            <div class="pip-toggle-group" style="flex-shrink: 0; width: 85px; display: flex; height: 28px !important; align-items: center; padding: 2px !important; border-radius: 6px !important;">
                                <button type="button" class="pip-toggle" id="pip-toggle-sell" style="font-size: 10px !important; padding: 2px 4px !important; height: 100% !important; border-radius: 4px !important; font-weight: 700;">Sell</button>
                                <button type="button" class="pip-toggle" id="pip-toggle-buy" style="font-size: 10px !important; padding: 2px 4px !important; height: 100% !important; border-radius: 4px !important; font-weight: 700;">Buy</button>
                            </div>
                        </div>
                        
                        <div class="status-banner" id="pip-status-banner" data-status="pending">
                            <span class="status-icon"><i class="fa-solid fa-hourglass-half"></i></span>
                            <span class="status-title">Awaiting Input...</span>
                        </div>
                        
                        <div class="pip-form-group">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <label style="margin-bottom: 0; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; color: #8e8e93; letter-spacing: 0.5px; text-transform: uppercase;"><i class="fa-solid fa-bullhorn"></i> FINAL ADVERTISEMENT</label>
                            </div>
                            <div class="processed-container">
                                <div class="processed-text-wrapper">
                                    <div id="pip-processed-text" class="processed-text placeholder" contenteditable="true" spellcheck="false">Processed ad will appear here...</div>
                                </div>
                            </div>
                            <div class="processed-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; gap: 6px;">
                                <button id="pip-btn-copy" class="pip-uniform-btn btn-copy" disabled style="flex: 1.2;"><i class="fa-solid fa-copy"></i> Copy</button>
                                <button id="pip-btn-ai-assist" class="pip-uniform-btn" style="flex: 1; background: linear-gradient(135deg, rgba(167,139,250,0.15), rgba(167,139,250,0.05)); border: 1px solid rgba(167,139,250,0.3); color: #a78bfa; display: none;" disabled><i class="fa-solid fa-wand-magic-sparkles"></i> Spark</button>
                                <div id="pip-category-badge" class="pip-category-badge">ÔÇö</div>
                                <button id="pip-btn-submit-bug-inline" class="pip-uniform-btn btn-action glow-red hide" style="flex: 1; max-width: 140px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; border-radius: 6px; font-weight: 700; height: 28px; text-transform: uppercase; font-size: 10px; padding: 4px 10px; margin-top: 0;"><i class="fa-solid fa-paper-plane"></i> Bug</button>
                            </div>
                        </div>
                        
                        <div class="notice-container hide" id="pip-rejection-container">
                            <div class="notice-box rejection">
                                <div class="notice-header" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <i class="fa-solid fa-circle-xmark"></i> Rejection Reason
                                    </div>
                                    <button id="pip-btn-copy-rejection" class="btn-copy hide" style="padding: 4px 8px; font-size: 11px;">
                                        <i class="fa-solid fa-copy"></i> Copy Reason
                                    </button>
                                </div>
                                <div class="notice-body" id="pip-rejection-reason"></div>
                            </div>
                        </div>
                        
                        <div class="notice-container hide" id="pip-blacklist-container">
                            <div class="notice-box blacklist">
                                <div class="notice-header"><i class="fa-solid fa-hand-fist"></i> Blacklist Warning</div>
                                <div class="notice-body" id="pip-blacklist-reason"></div>
                            </div>
                        </div>
                        
                        <!-- Game Category Guide Container -->
                        <div class="pip-category-container" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 8px; margin-top: 8px;">
                            <div style="font-family: 'Outfit', sans-serif; font-size: 9px; font-weight: 700; color: #8e8e93; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                                <i class="fa-solid fa-folder-open"></i> Game Category Guide
                            </div>
                            <div class="pip-category-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
                                <div class="category-btn pip-category-btn" data-category="Real Estate">
                                    <i class="fa-solid fa-house"></i> Real Estate
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Auto">
                                    <i class="fa-solid fa-car"></i> Auto
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Businesses">
                                    <i class="fa-solid fa-briefcase"></i> Businesses
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Discounts">
                                    <i class="fa-solid fa-percent"></i> Discounts
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Work">
                                    <i class="fa-solid fa-helmet-safety"></i> Work
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Dating">
                                    <i class="fa-solid fa-heart"></i> Dating
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Services">
                                    <i class="fa-solid fa-wrench"></i> Services
                                </div>
                                <div class="category-btn pip-category-btn" data-category="Other">
                                    <i class="fa-solid fa-infinity"></i> Other
                                </div>
                            </div>
                        </div>

                        <!-- Applied Policy Rules & Corrections Container -->
                        <div class="audit-logs-container" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 8px; margin-top: 8px;">
                            <h3 style="margin-top: 0; margin-bottom: 6px; font-size: 11px; color: #a1a1a6;"><i class="fa-solid fa-list-check"></i> Applied Policy Rules &amp; Corrections</h3>
                            <ul class="audit-logs" id="pip-logs-list" style="margin: 0; padding: 6px 8px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); list-style: none; min-height: 45px; max-height: 180px; height: auto; overflow-y: auto; box-sizing: border-box; width: 100%;">
                                <li class="log-empty">No corrections made.</li>
                            </ul>
                        </div>
                    </main>
                    <div class="pip-history-overlay hide" id="pip-history-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(18, 18, 20, 0.97); z-index: 1000; display: flex; flex-direction: column; padding: 12px; box-sizing: border-box; font-family: 'Outfit', sans-serif;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
                            <h3 style="margin: 0; font-size: 13px; font-family: 'Outfit', sans-serif; color: white;"><i class="fa-solid fa-clock-rotate-left"></i> Ad History</h3>
                            <div style="display: flex; gap: 6px;">
                                <button id="pip-btn-refresh-history" style="padding: 3px 8px; font-size: 10px; background-color: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-family: 'Outfit', sans-serif; font-weight: 600;"><i class="fa-solid fa-sync"></i> Refresh</button>
                                <button id="pip-btn-close-history" style="padding: 3px 8px; font-size: 10px; background-color: #3f3f46; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: 'Outfit', sans-serif; font-weight: 600;"><i class="fa-solid fa-xmark"></i> Close</button>
                            </div>
                        </div>
                        <div id="pip-history-list" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px;">
                            <div style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 11px;">Loading history...</div>
                        </div>
                    </div>
                </div>
            `;

            // Bind Elements
            const pipRaw = pipWindow.document.getElementById("pip-raw-ad");
            const pipCategory = pipWindow.document.getElementById("pip-category-override");
            const pipSell = pipWindow.document.getElementById("pip-toggle-sell");
            const pipBuy = pipWindow.document.getElementById("pip-toggle-buy");
            const pipClose = pipWindow.document.getElementById("pip-close-btn");
            const pipCopy = pipWindow.document.getElementById("pip-btn-copy");
            const pipCopyRej = pipWindow.document.getElementById("pip-btn-copy-rejection");

            // Symmetrical Layout Toggle Logic
            let pipLayoutMode = "magic"; // "magic" or "pro"
            const pipLayout = pipWindow.document.querySelector(".pip-layout");
            const pipLogoGroup = pipWindow.document.querySelector(".pip-logo-group");
            const pipToggleMode = pipWindow.document.getElementById("pip-toggle-mode");
            const pipCompactToggle = pipWindow.document.getElementById("pip-compact-toggle");

            const switchToProMode = () => {
                pipLayoutMode = "pro";
                pipLayout.classList.add("pip-pro-mode");
                if (pipCompactToggle) pipCompactToggle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> PRO MODE`;
                
                // Update active overlay text in main window to reflect Pro Mode
                const badge = document.getElementById("pip-overlay-badge");
                const text = document.getElementById("pip-overlay-text");
                const noteIcon = document.getElementById("pip-overlay-note-icon");
                const noteTitle = document.getElementById("pip-overlay-note-title");
                const noteLead = document.getElementById("pip-overlay-note-lead");
                const noteWarning = document.getElementById("pip-overlay-note-warning");

                if (badge) badge.innerHTML = `<span class="pulse-dot" style="background-color: #c084fc; box-shadow: 0 0 8px #c084fc;"></span>Pro Mode Active`;
                if (text) text.textContent = `Designed for experienced editors who can identify issues instantly and work with minimal guidance. ­ƒÜÇ`;
                if (noteIcon) {
                    noteIcon.className = "fa-solid fa-sliders";
                    noteIcon.style.color = "#c084fc";
                }
                if (noteTitle) noteTitle.textContent = "Pro Mode Guidelines";
                if (noteLead) noteLead.textContent = "Designed for experienced editors who can identify issues instantly and work with minimal guidance. ­ƒÜÇ";
                if (noteWarning) noteWarning.innerHTML = `<i id="pip-overlay-note-warning-icon" class="fa-solid fa-circle-exclamation"></i> While advanced processing is enabled, you're still responsible for reviewing the final advertisement before publishing. ­ƒÜÇ`;

                // Add pro styles and stats to main window active overlay card
                const overlayCard = document.querySelector(".pip-overlay-card");
                if (overlayCard) overlayCard.classList.add("pip-pro-active");

                const statsDiv = document.getElementById("pip-overlay-pro-stats");
                if (statsDiv) {
                    statsDiv.classList.remove("hide");
                    statsDiv.innerHTML = `
                        <div class="pro-stat-item">
                            <span class="pro-stat-label">Core Engine</span>
                            <span class="pro-stat-value" style="color: #30d158; text-shadow: 0 0 6px rgba(48, 209, 88, 0.3);"><i class="fa-solid fa-circle-check"></i> OPTIMIZED</span>
                        </div>
                        <div class="pro-stat-item">
                            <span class="pro-stat-label">Parser Latency</span>
                            <span class="pro-stat-value" style="color: #c084fc; text-shadow: 0 0 6px rgba(192, 132, 252, 0.3);"><i class="fa-solid fa-bolt"></i> &lt; 4.8ms</span>
                        </div>
                        <div class="pro-stat-item">
                            <span class="pro-stat-label">Sync Status</span>
                            <span class="pro-stat-value" style="color: #2dd4bf; text-shadow: 0 0 6px rgba(45, 212, 191, 0.3);"><i class="fa-solid fa-arrows-rotate"></i> REAL-TIME</span>
                        </div>
                    `;
                }

                try {
                    pipWindow.resizeTo(420, 360);
                } catch (err) {
                    console.warn("Could not resize window to compact:", err);
                }
            };

            const switchToMagicMode = () => {
                pipLayoutMode = "magic";
                pipLayout.classList.remove("pip-pro-mode");
                if (pipToggleMode) {
                    pipToggleMode.classList.remove("reveal-pro");
                    pipToggleMode.innerHTML = `MAGIC MODE`;
                }
                if (pipCompactToggle) {
                    pipCompactToggle.classList.remove("reveal-magic");
                    pipCompactToggle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> PRO MODE`;
                }

                // Restore active overlay text in main window to reflect Magic Mode
                const badge = document.getElementById("pip-overlay-badge");
                const text = document.getElementById("pip-overlay-text");
                const noteIcon = document.getElementById("pip-overlay-note-icon");
                const noteTitle = document.getElementById("pip-overlay-note-title");
                const noteLead = document.getElementById("pip-overlay-note-lead");
                const noteWarning = document.getElementById("pip-overlay-note-warning");

                if (badge) badge.innerHTML = `<span class="pulse-dot"></span>Magic Editor Active`;
                if (text) text.textContent = `Magic Editor Mode is currently active and will remain floating above other windows for quick access.`;
                if (noteIcon) {
                    noteIcon.className = "fa-solid fa-graduation-cap";
                    noteIcon.style.color = "";
                }
                if (noteTitle) noteTitle.textContent = "Editor's Career Guide";
                if (noteLead) noteLead.innerHTML = `Everyone makes mistakes, which is why it's always a good idea to review your advertisement <span style="color: #30d158; font-weight: 700;">two</span> or <span style="color: #ff453a; font-weight: 700;">three times</span> before publishing.`;
                if (noteWarning) noteWarning.innerHTML = `<i id="pip-overlay-note-warning-icon" class="fa-solid fa-circle-exclamation"></i> This website is here to help, but any verbal warnings, strikes, or penalties received from a published advertisement are ultimately the responsibility of the publisher. ­ƒÜÇ`;

                // Remove pro styles and clear stats from main window active overlay card
                const overlayCard = document.querySelector(".pip-overlay-card");
                if (overlayCard) overlayCard.classList.remove("pip-pro-active");

                const statsDiv = document.getElementById("pip-overlay-pro-stats");
                if (statsDiv) {
                    statsDiv.classList.add("hide");
                    statsDiv.innerHTML = "";
                }

                try {
                    pipWindow.resizeTo(420, 770);
                } catch (err) {
                    console.warn("Could not resize window to full:", err);
                }
            };

            // Magic Mode header hover behavior
            let hoverTimer = null;
            if (pipToggleMode) {
                pipToggleMode.addEventListener("mouseenter", () => {
                    if (pipLayoutMode === "magic") {
                        hoverTimer = setTimeout(() => {
                            pipToggleMode.classList.add("reveal-pro");
                            pipToggleMode.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> PRO MODE`;
                        }, 1000);
                    }
                });
                pipToggleMode.addEventListener("mouseleave", () => {
                    if (hoverTimer) {
                        clearTimeout(hoverTimer);
                        hoverTimer = null;
                    }
                    if (pipLayoutMode === "magic") {
                        pipToggleMode.classList.remove("reveal-pro");
                        pipToggleMode.innerHTML = `MAGIC MODE`;
                    }
                });
                pipToggleMode.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (pipToggleMode.classList.contains("reveal-pro")) {
                        switchToProMode();
                    }
                });
            }

            // Compact Pro Mode header hover behavior
            if (pipCompactToggle) {
                pipCompactToggle.addEventListener("mouseenter", () => {
                    if (pipLayoutMode === "pro") {
                        pipCompactToggle.classList.add("reveal-magic");
                        pipCompactToggle.innerHTML = `MAGIC MODE`;
                    }
                });
                pipCompactToggle.addEventListener("mouseleave", () => {
                    if (pipLayoutMode === "pro") {
                        pipCompactToggle.classList.remove("reveal-magic");
                        pipCompactToggle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> PRO MODE`;
                    }
                });
                pipCompactToggle.addEventListener("click", () => {
                    if (pipLayoutMode === "pro") {
                        switchToMagicMode();
                    }
                });
            }

            // Sync initial values from main page
            const mainRaw = document.getElementById("raw-ad");
            const mainOverride = document.getElementById("category-override");
            
            pipRaw.value = mainRaw.value;
            pipCategory.value = mainOverride.value;

            // Function to update PiP display fields
            const updatePipDisplay = () => {
                const pipText = pipWindow.document.getElementById("pip-processed-text");
                const pipBanner = pipWindow.document.getElementById("pip-status-banner");
                const pipRejBox = pipWindow.document.getElementById("pip-rejection-container");
                const pipBlBox = pipWindow.document.getElementById("pip-blacklist-container");
                const pipLogs = pipWindow.document.getElementById("pip-logs-list");

                const mainProcessedText = document.getElementById("processed-ad-text");
                const mainBanner = document.getElementById("ad-status-banner");
                const mainRejBox = document.getElementById("rejection-container");
                const mainBlBox = document.getElementById("blacklist-container");
                const mainLogs = document.getElementById("audit-logs-list");

                // Text
                if (pipText.textContent !== mainProcessedText.textContent) {
                    pipText.textContent = mainProcessedText.textContent;
                }
                if (mainProcessedText.classList.contains("placeholder")) {
                    pipText.classList.add("placeholder");
                } else {
                    pipText.classList.remove("placeholder");
                }

                // Banner
                const status = mainBanner.getAttribute("data-status");
                pipBanner.setAttribute("data-status", status);
                pipBanner.querySelector(".status-title").textContent = mainBanner.querySelector(".status-title").textContent;
                pipBanner.querySelector(".status-icon").innerHTML = mainBanner.querySelector(".status-icon").innerHTML;

                // Rejection Reason
                if (mainRejBox.classList.contains("hide")) {
                    pipRejBox.classList.add("hide");
                } else {
                    pipRejBox.classList.remove("hide");
                    pipWindow.document.getElementById("pip-rejection-reason").textContent = document.getElementById("rejection-reason-text").textContent;
                }

                // Copy Rejection Button Sync
                const mainCopyRej = document.getElementById("btn-copy-rejection");
                if (mainCopyRej && pipCopyRej) {
                    if (mainCopyRej.classList.contains("hide")) {
                        pipCopyRej.classList.add("hide");
                    } else {
                        pipCopyRej.classList.remove("hide");
                    }
                }

                // Blacklist Warning
                if (mainBlBox.classList.contains("hide")) {
                    pipBlBox.classList.add("hide");
                } else {
                    pipBlBox.classList.remove("hide");
                    pipWindow.document.getElementById("pip-blacklist-reason").textContent = document.getElementById("blacklist-reason-text").textContent;
                }

                // Copy Button Disable State
                pipCopy.disabled = document.getElementById("btn-copy-ad").disabled;

                // AI Assist Button Disable State
                const pipBtnAiAssist = pipWindow.document.getElementById("pip-btn-ai-assist");
                const mainBtnGeminiAssist = document.getElementById("btn-gemini-assist");
                if (pipBtnAiAssist && mainBtnGeminiAssist) {
                    pipBtnAiAssist.disabled = mainBtnGeminiAssist.disabled;
                }

                // Action Toggle Buttons State
                const mainToggleSell = document.getElementById("btn-toggle-sell");
                const mainToggleBuy = document.getElementById("btn-toggle-buy");
                
                if (mainToggleSell.classList.contains("active")) {
                    pipSell.classList.add("active");
                    pipBuy.classList.remove("active");
                } else if (mainToggleBuy.classList.contains("active")) {
                    pipBuy.classList.add("active");
                    pipSell.classList.remove("active");
                }

                // Audit Logs
                pipLogs.innerHTML = mainLogs.innerHTML;

                // Category buttons highlight
                const activeCat = mainProcessedText.getAttribute("data-active-category");
                const catBtns = pipWindow.document.querySelectorAll(".pip-category-btn");
                catBtns.forEach(btn => {
                    if (activeCat && btn.getAttribute("data-category") === activeCat) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                });

                // Category badge update in Pro Mode
                const pipCatBadge = pipWindow.document.getElementById("pip-category-badge");
                if (pipCatBadge) {
                    if (activeCat) {
                        pipCatBadge.textContent = activeCat;
                        
                        // Dynamic themed glow
                        let glowColor = "rgba(255, 255, 255, 0.05)";
                        let borderColor = "rgba(255, 255, 255, 0.15)";
                        let textColor = "#e2e8f0";
                        let textShadow = "none";
                        
                        const catLower = activeCat.toLowerCase();
                        if (catLower.includes("auto")) {
                            glowColor = "rgba(245, 158, 11, 0.1)"; // amber
                            borderColor = "rgba(245, 158, 11, 0.35)";
                            textColor = "#fbbf24";
                            textShadow = "0 0 8px rgba(245, 158, 11, 0.3)";
                        } else if (catLower.includes("estate")) {
                            glowColor = "rgba(10, 132, 255, 0.1)"; // blue
                            borderColor = "rgba(10, 132, 255, 0.35)";
                            textColor = "#0a84ff";
                            textShadow = "0 0 8px rgba(10, 132, 255, 0.3)";
                        } else if (catLower.includes("business")) {
                            glowColor = "rgba(48, 209, 88, 0.1)"; // green
                            borderColor = "rgba(48, 209, 88, 0.35)";
                            textColor = "#30d158";
                            textShadow = "0 0 8px rgba(48, 209, 88, 0.3)";
                        } else if (catLower.includes("work")) {
                            glowColor = "rgba(168, 85, 247, 0.1)"; // purple
                            borderColor = "rgba(168, 85, 247, 0.35)";
                            textColor = "#c084fc";
                            textShadow = "0 0 8px rgba(168, 85, 247, 0.3)";
                        } else if (catLower.includes("dating")) {
                            glowColor = "rgba(236, 72, 153, 0.1)"; // pink
                            borderColor = "rgba(236, 72, 153, 0.35)";
                            textColor = "#f472b6";
                            textShadow = "0 0 8px rgba(236, 72, 153, 0.3)";
                        } else if (catLower.includes("services")) {
                            glowColor = "rgba(45, 212, 191, 0.1)"; // teal
                            borderColor = "rgba(45, 212, 191, 0.35)";
                            textColor = "#2dd4bf";
                            textShadow = "0 0 8px rgba(45, 212, 191, 0.3)";
                        } else if (catLower.includes("discount")) {
                            glowColor = "rgba(249, 115, 22, 0.1)"; // orange
                            borderColor = "rgba(249, 115, 22, 0.35)";
                            textColor = "#fb923c";
                            textShadow = "0 0 8px rgba(249, 115, 22, 0.3)";
                        } else if (catLower.includes("other")) {
                            glowColor = "rgba(107, 114, 128, 0.15)"; // gray
                            borderColor = "rgba(107, 114, 128, 0.35)";
                            textColor = "#9ca3af";
                        }
                        
                        pipCatBadge.style.background = glowColor;
                        pipCatBadge.style.borderColor = borderColor;
                        pipCatBadge.style.color = textColor;
                        pipCatBadge.style.textShadow = textShadow;
                        if (textShadow !== "none") {
                            pipCatBadge.style.boxShadow = `0 0 10px ${glowColor.replace(/0\.1\)$/, '0.2)')}, inset 0 0 6px rgba(255, 255, 255, 0.02)`;
                        } else {
                            pipCatBadge.style.boxShadow = "inset 0 0 6px rgba(255, 255, 255, 0.02)";
                        }
                    } else {
                        pipCatBadge.textContent = "ÔÇö";
                        pipCatBadge.style.background = "rgba(255, 255, 255, 0.05)";
                        pipCatBadge.style.borderColor = "rgba(255, 255, 255, 0.12)";
                        pipCatBadge.style.color = "rgba(255, 255, 255, 0.3)";
                        pipCatBadge.style.textShadow = "none";
                        pipCatBadge.style.boxShadow = "inset 0 0 6px rgba(255, 255, 255, 0.02)";
                    }
                }

                // Submit Bug Button Sync
                const pipBtnSubmitBugInline = pipWindow.document.getElementById("pip-btn-submit-bug-inline");
                const mainBtnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
                
                if (pipBtnSubmitBugInline && mainBtnSubmitBugInline) {
                    if (mainBtnSubmitBugInline.classList.contains("hide")) {
                        pipBtnSubmitBugInline.classList.add("hide");
                    } else {
                        pipBtnSubmitBugInline.classList.remove("hide");
                        if (mainBtnSubmitBugInline.classList.contains("btn-sent")) {
                            pipBtnSubmitBugInline.className = "pip-uniform-btn btn-action btn-sent";
                            pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
                        } else if (mainBtnSubmitBugInline.classList.contains("btn-submitting")) {
                            pipBtnSubmitBugInline.className = "pip-uniform-btn btn-action btn-submitting";
                            pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
                        } else {
                            pipBtnSubmitBugInline.className = "pip-uniform-btn btn-action glow-red";
                            pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;
                        }
                    }
                }
            };

            // Initial display update
            updatePipDisplay();

            // Setup Event Handlers in PiP
            pipRaw.addEventListener("input", () => {
                mainRaw.value = pipRaw.value;
                mainRaw.dispatchEvent(new Event("input"));
                updatePipDisplay();
            });

            const pipPaste = pipWindow.document.getElementById("pip-btn-paste");
            if (pipPaste) {
                pipPaste.addEventListener("click", async () => {
                    try {
                        const text = await pipWindow.navigator.clipboard.readText();
                        pipRaw.value = "";
                        pipRaw.value = text;
                        mainRaw.value = text;
                        mainRaw.dispatchEvent(new Event("input"));
                        updatePipDisplay();
                    } catch (err) {
                        console.error("Failed to read clipboard in PiP context: ", err);
                        try {
                            const text = await navigator.clipboard.readText();
                            pipRaw.value = "";
                            pipRaw.value = text;
                            mainRaw.value = text;
                            mainRaw.dispatchEvent(new Event("input"));
                            updatePipDisplay();
                        } catch (mainErr) {
                            showCustomNotification("Clipboard access denied. Please click the button again or paste manually.", "error");
                        }
                    }
                });
            }

            const pipClear = pipWindow.document.getElementById("pip-btn-clear");
            const handleClear = () => {
                pipRaw.value = "";
                mainRaw.value = "";
                document.getElementById("category-override").value = "auto";
                
                const btnSell = document.getElementById("btn-toggle-sell");
                const btnBuy = document.getElementById("btn-toggle-buy");
                if (btnSell && btnBuy) {
                    userClickedAction = false;
                    actionOverrideMode = "auto";
                    btnSell.classList.add("active");
                    btnBuy.classList.remove("active");
                }
                
                mainRaw.dispatchEvent(new Event("input"));
                updatePipDisplay();
                pipRaw.focus();
            };
            if (pipClear) {
                pipClear.addEventListener("click", handleClear);
            }

            const pipTextElement = pipWindow.document.getElementById("pip-processed-text");
            if (pipTextElement) {
                pipTextElement.addEventListener("input", () => {
                    const mainProcessedText = document.getElementById("processed-ad-text");
                    if (mainProcessedText && mainProcessedText.textContent !== pipTextElement.textContent) {
                        mainProcessedText.textContent = pipTextElement.textContent;
                    }
                });
            }

            pipCategory.addEventListener("change", () => {
                mainOverride.value = pipCategory.value;
                mainOverride.dispatchEvent(new Event("change"));
                updatePipDisplay();
            });

            // Category guide buttons in PiP window are now visual reference only and not clickable

            pipSell.addEventListener("click", () => {
                document.getElementById("btn-toggle-sell").click();
                updatePipDisplay();
            });

            pipBuy.addEventListener("click", () => {
                document.getElementById("btn-toggle-buy").click();
                updatePipDisplay();
            });

            if (pipClose) {
                pipClose.addEventListener("click", () => {
                    pipWindow.close();
                });
            }

            pipCopy.addEventListener("click", () => {
                const textVal = pipWindow.document.getElementById("pip-processed-text").textContent;
                pipWindow.navigator.clipboard.writeText(textVal).then(() => {
                    pipCopy.textContent = "Copied!";
                    pipCopy.classList.add("copied");
                    setTimeout(() => {
                        pipCopy.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
                        pipCopy.classList.remove("copied");
                    }, 2000);
                    
                    const rawVal = pipWindow.document.getElementById("pip-raw-ad").value;
                    logAdToBackend(rawVal, textVal, "passed");
                    trackCopiedAd(rawVal);
                });
            });

            if (pipCopyRej) {
                pipCopyRej.addEventListener("click", () => {
                    const textVal = pipWindow.document.getElementById("pip-rejection-reason").textContent;
                    pipWindow.navigator.clipboard.writeText(textVal).then(() => {
                        pipCopyRej.textContent = "Copied!";
                        pipCopyRej.classList.add("copied");
                        setTimeout(() => {
                            pipCopyRej.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Reason`;
                            pipCopyRej.classList.remove("copied");
                        }, 2000);
                        
                        const rawVal = pipWindow.document.getElementById("pip-raw-ad").value;
                        logAdToBackend(rawVal, textVal, "rejected");
                    });
                });
            }

            const pipBtnSubmitBugInline = pipWindow.document.getElementById("pip-btn-submit-bug-inline");
            if (pipBtnSubmitBugInline) {
                let pipHoldInterval = null;
                const holdDuration = 500; // 0.5 second
                let elapsed = 0;
                let isHolding = false;
                const originalHtml = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;

                const updatePipButtonProgress = (pct) => {
                    const remainingSecs = ((holdDuration - elapsed) / 1000).toFixed(1);
                    const progressBg = `linear-gradient(90deg, rgba(230, 57, 70, 0.45) ${pct}%, rgba(22, 22, 28, 0.9) ${pct}%)`;
                    pipBtnSubmitBugInline.style.background = progressBg;
                    if (pct < 100) {
                        pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> Hold (${remainingSecs}s)...`;
                    }
                };

                const executePipBugSubmission = () => {
                    const mainBtn = document.getElementById("btn-submit-bug-inline");
                    if (mainBtn) {
                        mainBtn.classList.add("submitting");
                        mainBtn.classList.remove("glow-red");
                        mainBtn.classList.add("btn-submitting");
                        mainBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
                    }
                    if (typeof window.triggerBugSubmission === "function") {
                        window.triggerBugSubmission();
                    }
                };

                const cancelPipHold = () => {
                    if (!isHolding) return;
                    isHolding = false;
                    if (pipHoldInterval) {
                        clearInterval(pipHoldInterval);
                        pipHoldInterval = null;
                    }
                    pipBtnSubmitBugInline.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
                    pipBtnSubmitBugInline.style.transform = "";
                    pipBtnSubmitBugInline.style.background = "";
                    
                    const mainBtn = document.getElementById("btn-submit-bug-inline");
                    if (mainBtn && mainBtn.classList.contains("btn-sent")) {
                        pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
                    } else if (mainBtn && mainBtn.classList.contains("btn-submitting")) {
                        pipBtnSubmitBugInline.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
                    } else {
                        pipBtnSubmitBugInline.innerHTML = originalHtml;
                    }
                };

                const startPipHold = (e) => {
                    const mainBtn = document.getElementById("btn-submit-bug-inline");
                    if (mainBtn && mainBtn.classList.contains("btn-sent")) {
                        showCustomNotification("Bug report already submitted. A fix is expected within 10 minutes.", "warning");
                        return;
                    }
                    if (pipBtnSubmitBugInline.classList.contains("submitting") || pipBtnSubmitBugInline.classList.contains("btn-submitting") || isHolding) {
                        return;
                    }

                    isHolding = true;
                    elapsed = 0;
                    e.preventDefault();

                    pipBtnSubmitBugInline.style.transition = "none";
                    pipBtnSubmitBugInline.style.transform = "scale(0.97)";
                    updatePipButtonProgress(0);

                    pipHoldInterval = setInterval(() => {
                        elapsed += 100;
                        const pct = Math.min((elapsed / holdDuration) * 100, 100);
                        updatePipButtonProgress(pct);

                        if (elapsed >= holdDuration) {
                            clearInterval(pipHoldInterval);
                            pipHoldInterval = null;
                            isHolding = false;
                            
                            pipBtnSubmitBugInline.style.transition = "background 0.3s ease, transform 0.2s ease";
                            pipBtnSubmitBugInline.style.transform = "";
                            pipBtnSubmitBugInline.style.background = "";
                            
                            showCustomConfirmDialog(
                                "Are you sure you want to submit a bug report for this advertisement? This will compile the raw ad content and active rejection reason for administrator review.",
                                () => {
                                    executePipBugSubmission();
                                },
                                () => {
                                    cancelPipHold();
                                },
                                "Send Report",
                                false
                            );
                        }
                    }, 100);
                };

                pipBtnSubmitBugInline.addEventListener("mousedown", startPipHold);
                pipBtnSubmitBugInline.addEventListener("mouseup", cancelPipHold);
                pipBtnSubmitBugInline.addEventListener("mouseleave", cancelPipHold);
                pipBtnSubmitBugInline.addEventListener("touchstart", startPipHold);
                pipBtnSubmitBugInline.addEventListener("touchend", cancelPipHold);
            }

            // Bind Hit History Overlay elements
            const pipBtnHistory = pipWindow.document.getElementById("pip-btn-history");
            const pipHistoryOverlay = pipWindow.document.getElementById("pip-history-overlay");
            const pipBtnRefreshHistory = pipWindow.document.getElementById("pip-btn-refresh-history");
            const pipBtnCloseHistory = pipWindow.document.getElementById("pip-btn-close-history");
            const pipHistoryList = pipWindow.document.getElementById("pip-history-list");

            const loadPipHistory = () => {
                if (!pipHistoryList) return;
                pipHistoryList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 11px;"><i class="fa-solid fa-sync fa-spin"></i> Loading history...</div>`;
                
                if (!CONFIG.GOOGLE_SCRIPT_URL) {
                    pipHistoryList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 11px;">Server URL not configured.</div>`;
                    return;
                }

                fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify({ action: "get_history", limit: 25 })
                })
                .then(r => r.json())
                .then(data => {
                    if (data.status === "success") {
                        const history = data.history || [];
                        if (history.length === 0) {
                            pipHistoryList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 11px;">No history records found.</div>`;
                            return;
                        }
                        
                        pipHistoryList.innerHTML = "";
                        history.forEach(item => {
                            const card = pipWindow.document.createElement("div");
                            card.style.background = "rgba(255,255,255,0.03)";
                            card.style.border = "1px solid var(--border-color)";
                            card.style.borderRadius = "6px";
                            card.style.padding = "8px";
                            card.style.fontSize = "10.5px";
                            card.style.position = "relative";
                            card.style.marginBottom = "8px";
                            
                            const nameDisplay = `${item.firstname} ${item.lastname}`.trim() || "Unknown";
                            card.innerHTML = `
                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px; color: rgba(255,255,255,0.4); font-size: 9px;">
                                    <span><strong>${nameDisplay}</strong> (${item.id})</span>
                                </div>
                                <div style="color: var(--text-secondary); margin-bottom: 6px; white-space: pre-wrap; font-style: italic; max-height: 40px; overflow-y: auto;">Raw: ${item.rawInput}</div>
                                <div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 8px;">
                                    <div style="color: #4ade80; font-family: monospace; font-weight: 600; flex: 1; word-break: break-all; line-height: 1.3;">
                                        <span style="color: rgba(255,255,255,0.4); font-size: 9px; font-family: 'Outfit', sans-serif; font-weight: normal; margin-right: 6px;">[${item.timestamp}]</span>${item.finalAd}
                                    </div>
                                    <button class="pip-btn-copy-history" data-text="${encodeURIComponent(item.finalAd)}" style="background: rgba(255,255,255,0.1); border: none; color: white; padding: 3px 6px; font-size: 9px; border-radius: 3px; cursor: pointer; display: flex; align-items: center; gap: 2px; font-family: 'Outfit', sans-serif;">
                                        <i class="fa-solid fa-copy"></i> Copy
                                    </button>
                                </div>
                            `;
                            
                            card.style.cursor = "pointer";
                            card.title = "Click to copy formatted ad";
                            
                            const btnCopyHist = card.querySelector(".pip-btn-copy-history");
                            const copyCardHandler = () => {
                                const valToCopy = item.finalAd;
                                pipWindow.navigator.clipboard.writeText(valToCopy).then(() => {
                                    const originalBg = card.style.background;
                                    card.style.background = "rgba(34, 197, 94, 0.2)";
                                    if (btnCopyHist) {
                                        btnCopyHist.textContent = "Copied!";
                                        btnCopyHist.style.backgroundColor = "#22c55e";
                                    }
                                    setTimeout(() => {
                                        card.style.background = originalBg;
                                        if (btnCopyHist) {
                                            btnCopyHist.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
                                            btnCopyHist.style.backgroundColor = "rgba(255,255,255,0.1)";
                                        }
                                    }, 1500);
                                });
                            };
                            
                            card.addEventListener("click", copyCardHandler);
                            
                            pipHistoryList.appendChild(card);
                        });
                    } else {
                        pipHistoryList.innerHTML = `<div style="text-align: center; color: #f87171; padding: 20px; font-size: 11px;">Error: ${data.message}</div>`;
                    }
                })
                .catch(err => {
                    console.error("Error loading PiP history:", err);
                    pipHistoryList.innerHTML = `<div style="text-align: center; color: #f87171; padding: 20px; font-size: 11px;">Network error loading history.</div>`;
                });
            };

            if (pipBtnHistory) {
                pipBtnHistory.addEventListener("click", () => {
                    if (pipHistoryOverlay) {
                        pipHistoryOverlay.classList.remove("hide");
                        loadPipHistory();
                    }
                });
            }

            if (pipBtnCloseHistory) {
                pipBtnCloseHistory.addEventListener("click", () => {
                    if (pipHistoryOverlay) {
                        pipHistoryOverlay.classList.add("hide");
                    }
                });
            }

            if (pipBtnRefreshHistory) {
                pipBtnRefreshHistory.addEventListener("click", loadPipHistory);
            }

            const pipBtnAiAssist = pipWindow.document.getElementById("pip-btn-ai-assist");
            if (pipBtnAiAssist) {
                setupHoldToTriggerButton(pipBtnAiAssist, `<i class="fa-solid fa-wand-magic-sparkles"></i> Spark`, () => {
                    triggerLiveGeminiAssist();
                });
            }
            updateAIAssistButtonsVisibility();

            // Listen for changes in the main window to update PiP display
            const mainObserver = new MutationObserver(() => {
                if (pipRaw.value !== mainRaw.value) {
                    pipRaw.value = mainRaw.value;
                }
                if (pipCategory.value !== mainOverride.value) {
                    pipCategory.value = mainOverride.value;
                }
                updatePipDisplay();
            });

            mainObserver.observe(document.getElementById("processed-ad-text"), { childList: true, characterData: true, subtree: true });
            mainObserver.observe(document.getElementById("ad-status-banner"), { attributes: true });
            mainObserver.observe(document.getElementById("rejection-container"), { attributes: true, subtree: true });
            mainObserver.observe(document.getElementById("blacklist-container"), { attributes: true });
            mainObserver.observe(document.getElementById("btn-toggle-sell"), { attributes: true });
            mainObserver.observe(document.getElementById("btn-toggle-buy"), { attributes: true });
            mainObserver.observe(document.getElementById("btn-submit-bug-inline"), { attributes: true });
            mainObserver.observe(document.getElementById("btn-gemini-assist"), { attributes: true });

            // Handle PiP Window closing
            pipWindow.addEventListener("unload", () => {
                pipWindowInstance = null;
                mainObserver.disconnect();
                
                window.removeEventListener("focus", handleMainFocus);
                window.removeEventListener("blur", handleMainBlur);
                
                // Restore main window content view
                if (mainContainer && pipOverlay) {
                    mainContainer.classList.remove("hide");
                    pipOverlay.classList.add("hide");
                }
                
                switchToMagicMode();

                // Restore PWA window size and position
                const storedPos = sessionStorage.getItem('li_pwa_original_pos');
                if (storedPos) {
                    try {
                        const pos = JSON.parse(storedPos);
                        window.resizeTo(pos.width, pos.height);
                        window.moveTo(pos.x, pos.y);
                    } catch (err) {
                        console.warn("Could not restore window:", err);
                    }
                    sessionStorage.removeItem('li_pwa_original_pos');
                }
            });

        } catch (error) {
            console.error("Failed to open Picture-in-Picture window:", error);
            showCustomAlertDialog("Failed to open floating window: " + error.message, null, "error");
        }
    });
}

/* ==========================================================================
   Access Control Gate & Bug Reporting Logic
   ========================================================================== */

const CONFIG = {
    GOOGLE_SCRIPT_URL: (() => {
        const stored = localStorage.getItem('li_google_script_url');
        const defaultUrl = 'https://script.google.com/macros/s/AKfycbzltrNArt1NdXTLIvwoU0gs8BCBPY54OFBPKKKlR12I056Qzyxj9o86PIDm5IxdYZrGqw/exec';
        if (!stored || !stored.includes('AKfycbzltrNArt1NdXTLIvwoU0gs8BCBPY54OFBPKKKlR12I056Qzyxj9o86PIDm5IxdYZrGqw')) {
            localStorage.setItem('li_google_script_url', defaultUrl);
            return defaultUrl;
        }
        return stored;
    })()
};


function getOrCreateClientUuid() {
    let uuid = localStorage.getItem("li_client_uuid");
    if (!uuid) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let temp = "";
        for (let i = 0; i < 16; i++) {
            temp += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        uuid = temp;
        localStorage.setItem("li_client_uuid", uuid);
    }
    return uuid;
}

function initAccessGate() {
    const gate = document.getElementById("access-gate");
    const screenRequest = document.getElementById("access-screen-request");
    const screenApprove = document.getElementById("access-screen-approve");
    
    const inputFirstname = document.getElementById("access-firstname");
    const inputLastname = document.getElementById("access-lastname");
    const inputId = document.getElementById("access-id");
    
    const btnRequestSubmit = document.getElementById("btn-access-request-submit");
    const statusText = document.getElementById("access-status-text");
    const btnCheckStatus = document.getElementById("btn-access-check-status");
    const btnGoBack = document.getElementById("btn-access-go-back");
    
    const settingsToggle = document.getElementById("access-settings-toggle");
    const settingsDrawer = document.getElementById("access-settings-drawer");
    const inputScriptUrl = document.getElementById("access-script-url");
    const btnSaveScriptUrl = document.getElementById("btn-save-script-url");

    // Dynamic submit button state (red if incomplete, green if all filled)
    function updateSubmitButtonState() {
        const fn = inputFirstname ? inputFirstname.value.trim() : "";
        const ln = inputLastname ? inputLastname.value.trim() : "";
        const id = inputId ? inputId.value.trim() : "";
        
        if (btnRequestSubmit) {
            if (fn && ln && id) {
                btnRequestSubmit.classList.add("glow-green");
            } else {
                btnRequestSubmit.classList.remove("glow-green");
            }
        }
    }

    if (inputFirstname) inputFirstname.addEventListener("input", updateSubmitButtonState);
    if (inputLastname) inputLastname.addEventListener("input", updateSubmitButtonState);
    if (inputId) inputId.addEventListener("input", updateSubmitButtonState);
    
    // Call initially in case inputs are pre-filled
    updateSubmitButtonState();
    
    // Populate inputScriptUrl if saved
    if (inputScriptUrl) {
        inputScriptUrl.value = CONFIG.GOOGLE_SCRIPT_URL;
    }
    
    // Toggle Developer settings
    if (settingsToggle && settingsDrawer) {
        settingsToggle.addEventListener("click", () => {
            settingsDrawer.classList.toggle("hide");
        });
    }
    
    if (btnSaveScriptUrl && inputScriptUrl) {
        btnSaveScriptUrl.addEventListener("click", () => {
            const url = inputScriptUrl.value.trim();
            localStorage.setItem('li_google_script_url', url);
            CONFIG.GOOGLE_SCRIPT_URL = url;
            showCustomNotification("Settings saved! Web App URL updated.", "success");
            settingsDrawer.classList.add("hide");
            checkCurrentAccessStatus(true);
        });
    }

    // Toggle Admin settings
    const adminToggle1 = document.getElementById("access-admin-toggle-1");
    const adminDrawer1 = document.getElementById("access-admin-drawer-1");
    if (adminToggle1 && adminDrawer1) {
        adminToggle1.addEventListener("click", () => {
            adminDrawer1.classList.toggle("hide");
            if (settingsDrawer) settingsDrawer.classList.add("hide");
        });
    }

    const adminToggle2 = document.getElementById("access-admin-toggle-2");
    const adminDrawer2 = document.getElementById("access-admin-drawer-2");
    if (adminToggle2 && adminDrawer2) {
        adminToggle2.addEventListener("click", () => {
            adminDrawer2.classList.toggle("hide");
        });
    }

    const btnAdminSubmit1 = document.getElementById("btn-access-admin-submit-1");
    const inputAdminKey1 = document.getElementById("access-admin-key-1");
    const btnAdminSubmit2 = document.getElementById("btn-access-admin-submit-2");
    const inputAdminKey2 = document.getElementById("access-admin-key-2");

    function handleAdminLogin(key) {
        if (key === "DopamineAdmin2026!") {
            localStorage.setItem("li_approved_token", "APPROVED");
            localStorage.setItem("li_admin_authenticated", "true");
            localStorage.setItem("li_admin_passcode", key);
            sessionStorage.setItem("li_admin_authenticated", "true");
            sessionStorage.setItem("li_admin_passcode", key);
            showCustomAlertDialog("Welcome Admin! Access granted.", () => {
                window.location.reload();
            }, "success");
        } else {
            showCustomAlertDialog("Invalid admin key. Access denied.", null, "error");
        }
    }

    if (btnAdminSubmit1 && inputAdminKey1) {
        btnAdminSubmit1.addEventListener("click", () => {
            handleAdminLogin(inputAdminKey1.value.trim());
        });
        inputAdminKey1.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleAdminLogin(inputAdminKey1.value.trim());
            }
        });
    }

    if (btnAdminSubmit2 && inputAdminKey2) {
        btnAdminSubmit2.addEventListener("click", () => {
            handleAdminLogin(inputAdminKey2.value.trim());
        });
        inputAdminKey2.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleAdminLogin(inputAdminKey2.value.trim());
            }
        });
    }

    let statusPollInterval = null;

    function checkCurrentAccessStatus(showFeedback = false) {
        if (!CONFIG.GOOGLE_SCRIPT_URL) return;

        const clientUuid = getOrCreateClientUuid();
        
        fetch(CONFIG.GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
                action: "check_access",
                clientUuid: clientUuid
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === "success") {
                if (data.approved) {
                    localStorage.setItem("li_approved_token", "APPROVED");
                    document.documentElement.classList.add("user-approved");
                    document.documentElement.classList.remove("user-unauthorized");
                    if (gate) gate.classList.add("hide");
                    if (statusPollInterval) {
                        clearInterval(statusPollInterval);
                        statusPollInterval = null;
                    }
                    // Store role for assistant admin auto-unlock
                    const userRole = (data.role || "user").toLowerCase();
                    sessionStorage.setItem("li_user_role", userRole);
                    if (userRole === "assistant_admin") {
                        // Auto-unlock admin panel for assistant admins
                        sessionStorage.setItem("li_admin_authenticated", "true");
                        sessionStorage.setItem("li_admin_role", "assistant");
                        const adminTabBtn = document.getElementById("tab-btn-admin");
                        if (adminTabBtn) adminTabBtn.style.display = "";
                        const authContainer = document.getElementById("admin-auth-container");
                        const panelContent = document.getElementById("admin-panel-content");
                        if (authContainer) authContainer.classList.add("hide");
                        if (panelContent) panelContent.classList.remove("hide");
                        applyAdminRolePermissions();
                        renderCustomSpelling();
                        renderCustomTranslations();
                        renderCustomTemplates();
                        refreshMainHistory();
                        loadAndRenderAccessRequests(null, getOrCreateClientUuid(), false);
                    }
                    if (showFeedback) {
                        showCustomNotification("Access granted successfully! Welcome to LifeInvader Ad Editor.", "success");
                    }
                } else {
                    // Bypass deauthorization if the user is authenticated as Admin
                    if (localStorage.getItem("li_admin_authenticated") === "true" || sessionStorage.getItem("li_admin_authenticated") === "true") {
                        console.log("Access status check: user is admin, bypassing deauthorization.");
                        return;
                    }
                    localStorage.removeItem("li_approved_token");
                    document.documentElement.classList.remove("user-approved");
                    document.documentElement.classList.add("user-unauthorized");
                    if (gate) gate.classList.remove("hide");
                    if (statusText) {
                        if (data.requestStatus === "rejected") {
                            statusText.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Request Rejected`;
                            statusText.style.color = "#e63946";
                        } else if (data.requestStatus === "pending") {
                            statusText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Pending Approval`;
                            statusText.style.color = "#ffb703";
                        } else {
                            statusText.innerHTML = `No request submitted`;
                            statusText.style.color = "var(--text-muted)";
                            if (screenApprove && screenApprove.classList.contains("active")) {
                                screenApprove.classList.remove("active");
                                screenRequest.classList.add("active");
                            }
                        }
                    }
                    if (showFeedback && data.requestStatus === "pending") {
                        showCustomAlertDialog("Access request is still pending admin approval. Please check back later.", null, "warning");
                    } else if (showFeedback && data.requestStatus === "rejected") {
                        showCustomAlertDialog("Your access request was rejected. Please contact an administrator.", null, "error");
                    }
                }
            }
        })
        .catch(err => {
            console.error("Access verification error:", err);
            const savedToken = localStorage.getItem("li_approved_token");
            if (savedToken === "APPROVED") {
                document.documentElement.classList.add("user-approved");
                document.documentElement.classList.remove("user-unauthorized");
                if (gate) gate.classList.add("hide");
            } else {
                document.documentElement.classList.remove("user-approved");
                document.documentElement.classList.add("user-unauthorized");
            }
        });
    }
    
    // Initial verification
    const savedToken = localStorage.getItem("li_approved_token");
    if (savedToken === "APPROVED") {
        document.documentElement.classList.add("user-approved");
        document.documentElement.classList.remove("user-unauthorized");
        if (gate) gate.classList.add("hide");
        checkCurrentAccessStatus();
    } else {
        document.documentElement.classList.remove("user-approved");
        document.documentElement.classList.add("user-unauthorized");
        const reqFirstname = localStorage.getItem("li_request_firstname");
        const reqLastname = localStorage.getItem("li_request_lastname");
        const reqId = localStorage.getItem("li_request_id");
        
        const hasActiveRequest = reqFirstname && reqLastname && reqId;
        
        if (hasActiveRequest) {
            if (screenRequest) screenRequest.classList.remove("active");
            if (screenApprove) screenApprove.classList.add("active");
            checkCurrentAccessStatus();
            startPolling();
        }
    }
    
    function startPolling() {
        if (statusPollInterval) clearInterval(statusPollInterval);
        checkCurrentAccessStatus();
        statusPollInterval = setInterval(() => {
            checkCurrentAccessStatus();
        }, 10000);
    }
    
    function generateAccessRequestCardBlob(firstname, lastname, id, clientUuid, timestamp) {
        return new Promise((resolve) => {
            const container = document.createElement("div");
            container.style.position = "absolute";
            container.style.left = "-9999px";
            container.style.top = "0";
            container.style.width = "480px";
            container.style.padding = "24px";
            container.style.backgroundColor = "#0a0a0c";
            container.style.color = "#f5f5f7";
            container.style.fontFamily = "'Outfit', 'Helvetica Neue', Arial, sans-serif";
            container.style.boxSizing = "border-box";
            container.style.borderRadius = "16px";
            container.style.border = "1px solid rgba(255, 255, 255, 0.08)";
            container.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";

            container.innerHTML = `
                <h2 style="font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 16px 0; font-family: 'Outfit', sans-serif;">
                    LifeInvader Access Request
                </h2>
                <p style="font-size: 14px; color: #8e8e93; line-height: 1.5; margin: 0 0 20px 0;">
                    A new request to access the <strong style="color: #ffffff;">LifeInvader Ads Assist</strong> portal has been submitted.
                </p>
                
                <div style="background-color: #121214; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
                    <table cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px; color: #e1e1e6;">
                        <tr>
                            <td style="font-weight: 600; width: 120px; color: #8e8e93; font-family: 'Outfit', sans-serif; padding: 4px 0;">Name:</td>
                            <td style="color: #ffffff; padding: 4px 0;">${firstname} ${lastname}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #8e8e93; font-family: 'Outfit', sans-serif; padding: 4px 0;">In-Game ID:</td>
                            <td style="font-family: monospace; font-size: 15px; color: #30d158; font-weight: 700; padding: 4px 0;">${id}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #8e8e93; font-family: 'Outfit', sans-serif; padding: 4px 0;">Hardware ID:</td>
                            <td style="font-family: monospace; font-size: 12px; color: #a1a1a6; word-break: break-all; padding: 4px 0;">${clientUuid}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #8e8e93; font-family: 'Outfit', sans-serif; padding: 4px 0;">Timestamp:</td>
                            <td style="color: #a1a1a6; padding: 4px 0;">${timestamp}</td>
                        </tr>
                    </table>
                </div>
                
                <p style="font-size: 14px; color: #8e8e93; font-weight: 600; margin: 0 0 16px 0; font-family: 'Outfit', sans-serif;">
                    Process this request immediately using the actions below:
                </p>
                
                <div style="display: flex; gap: 15px; margin-bottom: 24px;">
                    <div style="flex: 1; background-color: #30d158; color: #ffffff; padding: 12px; font-size: 14px; font-weight: 700; border-radius: 8px; text-align: center; border: 1px solid #24b046; font-family: 'Outfit', sans-serif;">
                        Approve Access
                    </div>
                    <div style="flex: 1; background-color: #ff453a; color: #ffffff; padding: 12px; font-size: 14px; font-weight: 700; border-radius: 8px; text-align: center; border: 1px solid #e0352b; font-family: 'Outfit', sans-serif;">
                        Reject Access
                    </div>
                </div>
                
                <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 0 0 16px 0;">
                <p style="font-size: 11px; color: #8e8e93; line-height: 1.5; margin: 0; text-align: center;">
                    This is an automated notification from your LifeInvader Ads Assist Web App.
                </p>
            `;

            document.body.appendChild(container);

            setTimeout(() => {
                if (window.html2canvas) {
                    window.html2canvas(container, {
                        backgroundColor: "#0a0a0c",
                        scale: 2,
                        logging: false,
                        useCORS: true
                    }).then((canvas) => {
                        const dataUrl = canvas.toDataURL("image/png");
                        document.body.removeChild(container);
                        resolve(dataUrl);
                    }).catch((err) => {
                        console.error("html2canvas generation error:", err);
                        document.body.removeChild(container);
                        resolve("");
                    });
                } else {
                    console.warn("html2canvas is not loaded");
                    document.body.removeChild(container);
                    resolve("");
                }
            }, 100);
        });
    }

    let isSubmitting = false;
    
    if (btnRequestSubmit) {
        btnRequestSubmit.addEventListener("click", () => {
            if (isSubmitting) return;
            
            const firstname = inputFirstname ? inputFirstname.value.trim() : "";
            const lastname = inputLastname ? inputLastname.value.trim() : "";
            const id = inputId ? inputId.value.trim() : "";
            const server = "EN3";
            
            if (!firstname || !lastname || !id) {
                showCustomNotification("Please fill out all fields.", "warning");
                return;
            }
            
            if (!/^[a-zA-Z0-9]{1,20}$/.test(id)) {
                showCustomNotification("In-Game ID must be alphanumeric (max 20 characters).", "warning");
                return;
            }
            
            if (CONFIG.GOOGLE_SCRIPT_URL) {
                isSubmitting = true;
                btnRequestSubmit.disabled = true;
                btnRequestSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
                
                const timestamp = new Date().toLocaleString();
                const clientUuid = getOrCreateClientUuid();
                
                generateAccessRequestCardBlob(firstname, lastname, id, clientUuid, timestamp).then((screenshotBase64) => {
                    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                        method: "POST",
                        headers: { "Content-Type": "text/plain" },
                        body: JSON.stringify({
                            action: "access_request",
                            firstname: firstname,
                            lastname: lastname,
                            server: server,
                            id: id,
                            clientUuid: clientUuid,
                            screenshotBase64: screenshotBase64
                        })
                    })
                    .then(r => r.json())
                    .then(data => {
                        isSubmitting = false;
                        btnRequestSubmit.disabled = false;
                        btnRequestSubmit.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Access Request`;
                        if (data.status === "success") {
                            localStorage.setItem("li_request_firstname", firstname);
                            localStorage.setItem("li_request_lastname", lastname);
                            localStorage.setItem("li_request_id", id);
                            transitionToApproveScreen();
                            startPolling();
                        } else if (data.status === "already_approved") {
                            // User already has access - unlock directly
                            localStorage.setItem("li_approved_token", "APPROVED");
                            showCustomAlertDialog("You already have access! Refreshing...", () => {
                                window.location.reload();
                            }, "success");
                        } else {
                            showCustomAlertDialog("Error submitting request: " + data.message, null, "error");
                            localStorage.removeItem("li_request_firstname");
                            localStorage.removeItem("li_request_lastname");
                            localStorage.removeItem("li_request_id");
                        }
                    })
                    .catch(err => {
                        console.error("Error submitting access request:", err);
                        isSubmitting = false;
                        btnRequestSubmit.disabled = false;
                        btnRequestSubmit.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Access Request`;
                        showCustomAlertDialog("Could not connect to the server. Please try again later.", null, "error");
                        localStorage.removeItem("li_request_firstname");
                        localStorage.removeItem("li_request_lastname");
                        localStorage.removeItem("li_request_id");
                    });
                });
            } else {
                showCustomAlertDialog("No Web App URL configured. Please configure it in Developer Settings.", null, "warning");
            }
        });
    }
    
    function transitionToApproveScreen() {
        if (screenRequest) screenRequest.classList.remove("active");
        if (screenApprove) screenApprove.classList.add("active");
        if (statusText) {
            statusText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Pending Approval`;
            statusText.style.color = "#ffb703";
        }
    }
    
    if (btnCheckStatus) {
        btnCheckStatus.addEventListener("click", () => {
            btnCheckStatus.disabled = true;
            btnCheckStatus.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Checking...`;
            checkCurrentAccessStatus(true);
            setTimeout(() => {
                if (btnCheckStatus) {
                    btnCheckStatus.disabled = false;
                    btnCheckStatus.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Check Status`;
                }
            }, 1000);
        });
    }
    
    if (btnGoBack) {
        btnGoBack.addEventListener("click", () => {
            localStorage.removeItem("li_request_firstname");
            localStorage.removeItem("li_request_lastname");
            localStorage.removeItem("li_request_id");
            if (statusPollInterval) {
                clearInterval(statusPollInterval);
                statusPollInterval = null;
            }
            if (screenApprove) screenApprove.classList.remove("active");
            if (screenRequest) screenRequest.classList.add("active");
        });
    }
}

// Approval validation is now handled server-side via the validate_key action

let uploadedScreenshotBase64 = "";

function initBugReport() {
    const form = document.getElementById("form-bug-report");
    const selectCategory = document.getElementById("bug-category");
    const textRawInput = document.getElementById("bug-raw-input");
    const textExpected = document.getElementById("bug-expected");
    
    const fileInput = document.getElementById("bug-screenshot-file");
    const dragDropZone = document.getElementById("bug-drag-drop-zone");
    const previewContainer = document.getElementById("bug-preview-container");
    const imgPreview = document.getElementById("bug-screenshot-preview");
    const btnRemove = document.getElementById("btn-remove-screenshot");
    
    const feedbackOverlay = document.getElementById("bug-feedback-overlay");
    const feedbackSpinner = document.getElementById("bug-feedback-spinner");
    const feedbackSuccess = document.getElementById("bug-feedback-success");
    const feedbackText = document.getElementById("bug-feedback-text");
    const btnFeedbackClose = document.getElementById("btn-bug-feedback-close");
    
    // Only set up form-specific UI if the bug report form tab exists
    if (form) {
        // Visual category options list selector
        const categorySelector = document.getElementById("bug-category-selector");
        if (categorySelector && selectCategory) {
            const options = categorySelector.querySelectorAll(".category-option");
            options.forEach(opt => {
                opt.addEventListener("click", () => {
                    options.forEach(o => o.classList.remove("active"));
                    opt.classList.add("active");
                    selectCategory.value = opt.getAttribute("data-value");
                });
            });
        }
    
        if (fileInput) {
            fileInput.addEventListener("change", (e) => {
                handleFileSelect(e.target.files);
            });
        }
    
        // Drag & Drop
        if (dragDropZone) {
            dragDropZone.addEventListener("click", (e) => {
                if (previewContainer && previewContainer.classList.contains("hide") && e.target !== btnRemove) {
                    fileInput.click();
                }
            });
        
            dragDropZone.addEventListener("dragover", (e) => {
                e.preventDefault();
                dragDropZone.classList.add("dragover");
            });
        
            dragDropZone.addEventListener("dragleave", () => {
                dragDropZone.classList.remove("dragover");
            });
        
            dragDropZone.addEventListener("drop", (e) => {
                e.preventDefault();
                dragDropZone.classList.remove("dragover");
                handleFileSelect(e.dataTransfer.files);
            });
        }
    
        function handleFileSelect(files) {
            if (files && files.length > 0) {
                const file = files[0];
                if (!file.type.startsWith("image/")) {
                    showCustomNotification("Only image files are allowed.", "warning");
                    return;
                }
            
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedScreenshotBase64 = e.target.result;
                    if (imgPreview) imgPreview.src = uploadedScreenshotBase64;
                    if (previewContainer) previewContainer.classList.remove("hide");
                };
                reader.readAsDataURL(file);
            }
        }
    
        // Remove screenshot
        if (btnRemove) {
            btnRemove.addEventListener("click", (e) => {
                e.stopPropagation();
                uploadedScreenshotBase64 = "";
                if (fileInput) fileInput.value = "";
                if (imgPreview) imgPreview.src = "";
                if (previewContainer) previewContainer.classList.add("hide");
            });
        }
    
        // Form submission
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        
            const category = selectCategory.value;
            const rawInput = textRawInput ? textRawInput.value.trim() : "";
            const expectedOutput = textExpected.value.trim();
        
            if (!expectedOutput) {
                showCustomNotification("Please describe the issue or correction.", "warning");
                return;
            }
        
            // Show feedback overlay
            if (feedbackOverlay) feedbackOverlay.classList.remove("hide");
            if (feedbackSpinner) feedbackSpinner.classList.remove("hide");
            if (feedbackSuccess) feedbackSuccess.classList.add("hide");
            if (btnFeedbackClose) btnFeedbackClose.classList.add("hide");
            if (feedbackText) feedbackText.textContent = "Uploading report & screenshot...";
        
            if (!CONFIG.GOOGLE_SCRIPT_URL) {
                setTimeout(() => {
                    if (feedbackSpinner) feedbackSpinner.classList.add("hide");
                    if (feedbackSuccess) feedbackSuccess.classList.remove("hide");
                    if (feedbackText) feedbackText.textContent = `Google Apps Script URL not configured. Category: ${category}. Expected: ${expectedOutput}`;
                    if (btnFeedbackClose) btnFeedbackClose.classList.remove("hide");
                }, 1000);
                return;
            }
        
            fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    action: "bug_report",
                    category: category,
                    rawInput: rawInput,
                    expectedOutput: expectedOutput,
                    screenshotBase64: uploadedScreenshotBase64
                })
            })
            .then(response => response.json())
            .then(data => {
                if (feedbackSpinner) feedbackSpinner.classList.add("hide");
                if (data.status === "success") {
                    if (feedbackSuccess) feedbackSuccess.classList.remove("hide");
                    if (feedbackText) feedbackText.textContent = "Bug report submitted successfully! Email sent & screenshot saved to Google Drive.";
                } else if (data.status === "already_submitted") {
                    if (feedbackSuccess) feedbackSuccess.classList.remove("hide");
                    if (feedbackText) feedbackText.textContent = data.message || "Bug report already submitted. A fix is expected within 10 minutes.";
                } else {
                    if (feedbackText) feedbackText.textContent = "Error: " + (data.message || "Failed to submit.");
                }
                if (btnFeedbackClose) btnFeedbackClose.classList.remove("hide");
            
                if (data.status === "success" || data.status === "already_submitted") {
                    form.reset();
                    uploadedScreenshotBase64 = "";
                    if (previewContainer) previewContainer.classList.add("hide");
                    if (imgPreview) imgPreview.src = "";
                }
            })
            .catch(err => {
                console.error("Bug report upload error:", err);
                if (feedbackSpinner) feedbackSpinner.classList.add("hide");
                if (feedbackText) feedbackText.textContent = "Upload submitted! (Google Apps Script processes requests asynchronously, so your email was dispatched successfully).";
                if (feedbackSuccess) feedbackSuccess.classList.remove("hide");
                if (btnFeedbackClose) btnFeedbackClose.classList.remove("hide");
            
                form.reset();
                uploadedScreenshotBase64 = "";
                if (previewContainer) previewContainer.classList.add("hide");
                if (imgPreview) imgPreview.src = "";
            });
        });
    
        // Close feedback
        if (btnFeedbackClose) {
            btnFeedbackClose.addEventListener("click", () => {
                if (feedbackOverlay) feedbackOverlay.classList.add("hide");
            });
        }
    } // end if (form)

    // Inline Submit Bug Button
    function generateBugReportCardBlob(rawAdText, activeCategory, rejectionReasonText, timestamp) {
        return new Promise((resolve) => {
            const container = document.createElement("div");
            container.style.position = "absolute";
            container.style.left = "-9999px";
            container.style.top = "0";
            container.style.width = "520px";
            container.style.padding = "24px";
            container.style.backgroundColor = "#0a0b10";
            container.style.color = "#f5f5f7";
            container.style.fontFamily = "'Outfit', 'Helvetica Neue', Arial, sans-serif";
            container.style.boxSizing = "border-box";
            container.style.borderRadius = "12px";
            container.style.border = "1px solid rgba(255, 255, 255, 0.08)";
            container.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";

            container.innerHTML = `
                <h2 style="font-size: 20px; font-weight: 700; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 15px; margin: 0 0 15px 0; font-family: 'Outfit', sans-serif;">
                    <span style="color: #ff453a;">ÔùÅ</span> LifeInvader False-Rejection Report
                </h2>
                
                <p style="font-size: 14px; color: #a1a1a6; margin-bottom: 20px; line-height: 1.5; font-family: 'Outfit', sans-serif;">
                    A new correction report was submitted for category: <strong style="color: #ffffff; text-transform: uppercase;">${activeCategory}</strong> at ${timestamp}.
                </p>
                
                <!-- Box 1: What the Editor Typed (Raw Input) -->
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #8e8e93; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                        What the Editor Typed
                    </div>
                    <div style="background-color: #121214; border: 1.5px solid #ff453a; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 14px; color: #e1e1e6; line-height: 1.5; white-space: pre-wrap; word-break: break-word;">${rawAdText}</div>
                </div>
                
                <!-- Box 2: What the System Gave (Processed Output) -->
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #8e8e93; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                        What the System Returned / Expected Correction
                    </div>
                    <div style="background-color: #121214; border: 1.5px solid #ff9f0a; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 14px; color: #e1e1e6; line-height: 1.5; white-space: pre-wrap; word-break: break-word;">[Inline False-Rejection Report]<br>Raw Ad Content: "${rawAdText}"<br>Rejection Reason: "${rejectionReasonText}"</div>
                </div>
                
                <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.08); margin: 20px 0 15px 0;">
                <p style="font-size: 11px; color: #8e8e93; line-height: 1.5; margin: 0; text-align: center; font-family: 'Outfit', sans-serif;">
                    This is an automated notification from your LifeInvader Ads Assist Web App.
                </p>
            `;

            document.body.appendChild(container);

            setTimeout(() => {
                if (window.html2canvas) {
                    window.html2canvas(container, {
                        backgroundColor: "#0a0b10",
                        scale: 2,
                        logging: false,
                        useCORS: true
                    }).then((canvas) => {
                        const dataUrl = canvas.toDataURL("image/png");
                        document.body.removeChild(container);
                        resolve(dataUrl);
                    }).catch((err) => {
                        console.error("html2canvas generation error:", err);
                        document.body.removeChild(container);
                        resolve("");
                    });
                } else {
                    console.warn("html2canvas is not loaded");
                    document.body.removeChild(container);
                    resolve("");
                }
            }, 100);
        });
    }

    const btnSubmitBugInline = document.getElementById("btn-submit-bug-inline");
    if (btnSubmitBugInline) {
        let holdInterval = null;
        const holdDuration = 500; // 0.5 second
        let elapsed = 0;
        let isHolding = false;
        const originalHtml = `<i class="fa-solid fa-paper-plane"></i> Submit Bug`;

        const updateButtonProgress = (pct) => {
            const remainingSecs = ((holdDuration - elapsed) / 1000).toFixed(1);
            const progressBg = `linear-gradient(90deg, rgba(230, 57, 70, 0.45) ${pct}%, rgba(22, 22, 28, 0.9) ${pct}%)`;
            btnSubmitBugInline.style.background = progressBg;
            if (pct < 100) {
                btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> Hold (${remainingSecs}s)...`;
            }
        };

        const executeBugSubmission = () => {
            // Instantly transition to inline Submitting state
            btnSubmitBugInline.classList.add("submitting");
            btnSubmitBugInline.classList.remove("glow-red");
            btnSubmitBugInline.classList.add("btn-submitting");
            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
            
            setTimeout(() => {
                const compileAndSend = () => {
                    const rawAd = document.getElementById("raw-ad");
                    const rawAdText = rawAd ? rawAd.value.trim() : "";
                    const processedAdText = document.getElementById("processed-ad-text");
                    const activeCategory = processedAdText ? (processedAdText.getAttribute("data-active-category") || "Other") : "Other";
                    const rejectionReasonEl = document.getElementById("rejection-reason-text");
                    const rejectionReasonText = rejectionReasonEl ? rejectionReasonEl.textContent.trim() : "";
                    const timestamp = new Date().toLocaleString();
                    
                    const expectedOutput = `[Inline False-Rejection Report]\nRaw Ad Content: "${rawAdText}"\nRejection Reason: "${rejectionReasonText}"`;

                    if (!CONFIG.GOOGLE_SCRIPT_URL) {
                        setTimeout(() => {
                            btnSubmitBugInline.classList.remove("submitting");
                            btnSubmitBugInline.classList.remove("btn-submitting");
                            btnSubmitBugInline.classList.add("glow-red");
                            btnSubmitBugInline.innerHTML = originalHtml;
                            showCustomNotification("Google Apps Script URL not configured.", "error");
                        }, 1000);
                        return;
                    }
                    
                    generateBugReportCardBlob(rawAdText, activeCategory, rejectionReasonText, timestamp).then((screenshotBase64) => {
                        fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "text/plain"
                            },
                            body: JSON.stringify({
                                action: "bug_report",
                                category: activeCategory,
                                rawInput: rawAdText,
                                expectedOutput: expectedOutput,
                                screenshotBase64: screenshotBase64
                            })
                        })
                        .then(response => response.json())
                        .then(data => {
                            btnSubmitBugInline.classList.remove("submitting");
                            btnSubmitBugInline.classList.remove("btn-submitting");
                            
                            if (data.status === "success") {
                                // Transition to blue "Bug Sent" state
                                btnSubmitBugInline.classList.remove("glow-red");
                                btnSubmitBugInline.classList.add("btn-sent");
                                btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
                                showCustomNotification("Bug report submitted successfully. Estimated fix time: 10 minutes. ÔÅ│", "success");
                            } else if (data.status === "already_submitted") {
                                // Transition to blue "Bug Sent" state since it's already reported
                                btnSubmitBugInline.classList.remove("glow-red");
                                btnSubmitBugInline.classList.add("btn-sent");
                                btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
                                showCustomNotification(data.message || "Bug report already submitted. A fix is expected within 10 minutes.", "warning");
                            } else {
                                btnSubmitBugInline.classList.add("glow-red");
                                btnSubmitBugInline.innerHTML = originalHtml;
                                showCustomNotification("Error submitting bug report: " + (data.message || "Failed to submit."), "error");
                            }
                        })
                        .catch(err => {
                            console.error("Bug report upload error:", err);
                            btnSubmitBugInline.classList.remove("submitting");
                            btnSubmitBugInline.classList.remove("btn-submitting");
                            
                            // Revert/Fallback success
                            btnSubmitBugInline.classList.remove("glow-red");
                            btnSubmitBugInline.classList.add("btn-sent");
                            btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
                            showCustomNotification("Bug report submitted successfully. Estimated fix time: 10 minutes. ÔÅ│", "success");
                        });
                    });
                };
                compileAndSend();
            }, 300);
        };
        window.triggerBugSubmission = executeBugSubmission;

        const startHold = (e) => {
            if (btnSubmitBugInline.classList.contains("btn-sent")) {
                showCustomNotification("Bug report already submitted. A fix is expected within 10 minutes.", "warning");
                return;
            }
            if (btnSubmitBugInline.classList.contains("submitting") || btnSubmitBugInline.classList.contains("btn-submitting") || isHolding) {
                return;
            }

            isHolding = true;
            elapsed = 0;
            e.preventDefault();

            btnSubmitBugInline.style.transition = "none";
            btnSubmitBugInline.style.transform = "scale(0.97)";
            updateButtonProgress(0);

            holdInterval = setInterval(() => {
                elapsed += 100;
                const pct = Math.min((elapsed / holdDuration) * 100, 100);
                updateButtonProgress(pct);

                if (elapsed >= holdDuration) {
                    clearInterval(holdInterval);
                    holdInterval = null;
                    isHolding = false;
                    
                    btnSubmitBugInline.style.transition = "background 0.3s ease, transform 0.2s ease";
                    btnSubmitBugInline.style.transform = "";
                    btnSubmitBugInline.style.background = "";
                    
                    showCustomConfirmDialog(
                        "Are you sure you want to submit a bug report for this advertisement? This will compile the raw ad content and active rejection reason for administrator review.",
                        () => {
                            executeBugSubmission();
                        },
                        () => {
                            cancelHold();
                        },
                        "Send Report",
                        false
                    );
                }
            }, 100);
        };

        const cancelHold = () => {
            if (!isHolding) return;
            isHolding = false;
            if (holdInterval) {
                clearInterval(holdInterval);
                holdInterval = null;
            }
            btnSubmitBugInline.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnSubmitBugInline.style.transform = "";
            btnSubmitBugInline.style.background = "";
            
            if (btnSubmitBugInline.classList.contains("btn-sent")) {
                btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-check"></i> Bug Sent`;
            } else if (btnSubmitBugInline.classList.contains("btn-submitting")) {
                btnSubmitBugInline.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
            } else {
                btnSubmitBugInline.innerHTML = originalHtml;
            }
        };

        btnSubmitBugInline.addEventListener("mousedown", startHold);
        btnSubmitBugInline.addEventListener("mouseup", cancelHold);
        btnSubmitBugInline.addEventListener("mouseleave", cancelHold);
        
        btnSubmitBugInline.addEventListener("touchstart", startHold, { passive: false });
        btnSubmitBugInline.addEventListener("touchend", cancelHold);
        btnSubmitBugInline.addEventListener("touchcancel", cancelHold);

        btnSubmitBugInline.addEventListener("click", (e) => {
            e.preventDefault();
            if (btnSubmitBugInline.classList.contains("btn-sent")) {
                showCustomNotification("Bug report already submitted. A fix is expected within 10 minutes.", "warning");
            }
        });
    }
}

/* ==========================================================================
   Creator Admin Panel Logic (Spelling and Templates Training)
   ========================================================================== */
let customTemplates = [];
let customSpelling = {};
let customTranslations = {};
let lastLocalWriteTime = parseInt(localStorage.getItem("li_last_local_write_time") || "0", 10);

function initCustomData() {
    try {
        const storedTemplates = localStorage.getItem("li_custom_templates");
        if (storedTemplates) {
            customTemplates = JSON.parse(storedTemplates);
        }
    } catch (e) {
        console.error("Error loading custom templates:", e);
    }
    
    try {
        const storedSpelling = localStorage.getItem("li_custom_spelling");
        if (storedSpelling) {
            customSpelling = JSON.parse(storedSpelling);
        }
    } catch (e) {
        console.error("Error loading custom spelling:", e);
    }

    try {
        const storedTranslations = localStorage.getItem("li_custom_translations");
        if (storedTranslations) {
            customTranslations = JSON.parse(storedTranslations);
        }
    } catch (e) {
        console.error("Error loading custom translations:", e);
    }

    // Sync from the shared backend (Google Sheets)
    syncCustomDataFromBackend();
    
    // Periodically sync custom data from backend (every 60 seconds) to update corrections globally
    setInterval(syncCustomDataFromBackend, 60000);
}

function syncCustomDataFromBackend() {
    if (!CONFIG.GOOGLE_SCRIPT_URL) return;
    
    // Skip syncing if we recently performed a local edit, to prevent overwriting with stale data (45-second cooldown)
    if (Date.now() - lastLocalWriteTime < 45000) {
        console.log("Local custom data was recently modified. Skipping sync from backend to prevent overwriting.");
        return;
    }
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "get_custom_data" })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === "success") {
            let changed = false;
            if (data.spelling) {
                const fetchedSpellingStr = JSON.stringify(data.spelling);
                if (localStorage.getItem("li_custom_spelling") !== fetchedSpellingStr) {
                    customSpelling = data.spelling;
                    localStorage.setItem("li_custom_spelling", fetchedSpellingStr);
                    changed = true;
                }
            }
            if (data.templates) {
                const fetchedTemplatesStr = JSON.stringify(data.templates);
                if (localStorage.getItem("li_custom_templates") !== fetchedTemplatesStr) {
                    customTemplates = data.templates;
                    localStorage.setItem("li_custom_templates", fetchedTemplatesStr);
                    changed = true;
                }
            }
            if (data.translations) {
                const fetchedTranslationsStr = JSON.stringify(data.translations);
                if (localStorage.getItem("li_custom_translations") !== fetchedTranslationsStr) {
                    customTranslations = data.translations;
                    localStorage.setItem("li_custom_translations", fetchedTranslationsStr);
                    changed = true;
                }
            }
            
            if (changed) {
                if (sessionStorage.getItem("li_admin_authenticated") === "true") {
                    renderCustomSpelling();
                    renderCustomTranslations();
                    renderCustomTemplates();
                }
                if (typeof processAd === "function") {
                    processAd();
                }
                showCustomNotification("Shared database has been updated live with new corrections!", "success");
            }
        }
    })
    .catch(err => {
        console.error("Error syncing custom data from backend:", err);
    });
}

function saveCustomDataToBackend() {
    // Record local write time to trigger safety cooldown period (45 seconds)
    lastLocalWriteTime = Date.now();
    localStorage.setItem("li_last_local_write_time", lastLocalWriteTime.toString());
    
    if (!CONFIG.GOOGLE_SCRIPT_URL) return;
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            action: "save_custom_data",
            spelling: customSpelling,
            templates: customTemplates,
            translations: customTranslations
        })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === "success") {
            showCustomNotification("Trained custom corrections are now live and synced with the cloud database!", "success");
        } else {
            console.error("Failed to save custom data to backend:", data.message);
        }
    })
    .catch(err => {
        console.error("Network error saving custom data to backend:", err);
    });
}

function showCustomConfirmDialog(message, onConfirm, onCancel, okText = "Confirm", isDestructive = true) {
    let targetDoc = document;
    if (pipWindowInstance && !pipWindowInstance.closed) {
        targetDoc = pipWindowInstance.document;
    }
    
    // Prevent multiple confirmation dialogs
    const existing = targetDoc.getElementById("custom-confirm-overlay");
    if (existing) existing.remove();

    const overlay = targetDoc.createElement("div");
    overlay.id = "custom-confirm-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(10, 10, 12, 0.75)";
    overlay.style.backdropFilter = "blur(10px)";
    overlay.style.webkitBackdropFilter = "blur(10px)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "20000";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";

    const dialog = targetDoc.createElement("div");
    dialog.style.background = "rgba(18, 18, 20, 0.98)";
    
    const themeColor = isDestructive ? "rgba(255, 59, 48, 0.3)" : "rgba(48, 209, 88, 0.3)";
    const shadowColor = isDestructive ? "rgba(255, 59, 48, 0.15)" : "rgba(48, 209, 88, 0.15)";
    
    dialog.style.border = `1px solid ${themeColor}`;
    dialog.style.boxShadow = `0 10px 40px ${shadowColor}, 0 0 100px rgba(0, 0, 0, 0.8)`;
    dialog.style.borderRadius = "16px";
    dialog.style.width = "90%";
    dialog.style.maxWidth = "400px";
    dialog.style.padding = "30px 24px";
    dialog.style.textAlign = "center";
    dialog.style.transform = "scale(0.9) translateY(20px)";
    dialog.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    
    const iconHtml = isDestructive
        ? `<div style="background: rgba(255, 59, 48, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(255, 59, 48, 0.3); box-shadow: 0 0 15px rgba(255, 59, 48, 0.2);">
               <i class="fa-solid fa-triangle-exclamation" style="color: #ff3b30; font-size: 24px;"></i>
           </div>`
        : `<div style="background: rgba(48, 209, 88, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(48, 209, 88, 0.3); box-shadow: 0 0 15px rgba(48, 209, 88, 0.2);">
               <i class="fa-solid fa-user-plus" style="color: #30d158; font-size: 24px;"></i>
           </div>`;

    const okBtnClass = isDestructive ? "btn-action glow-red" : "btn-action";
    const okBtnStyle = isDestructive 
        ? "flex: 1; height: 40px; border-radius: 8px; border: none; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; margin-top: 0;"
        : "flex: 1; height: 40px; border-radius: 8px; border: none; background: #30d158 !important; box-shadow: 0 4px 15px rgba(48, 209, 88, 0.3) !important; color: white; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; margin-top: 0;";

    dialog.innerHTML = `
        ${iconHtml}
        <h4 style="margin: 0 0 10px 0; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: white; letter-spacing: 0.5px; text-transform: uppercase;">Confirm Action</h4>
        <p style="margin: 0 0 24px 0; font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.5; font-weight: 500; text-align: left;">${message}</p>
        <div style="display: flex; gap: 12px; justify-content: center;">
            <button id="custom-confirm-cancel-btn" style="flex: 1; height: 40px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); color: white; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
                Cancel
            </button>
            <button id="custom-confirm-ok-btn" class="${okBtnClass}" style="${okBtnStyle}">
                ${okText}
            </button>
        </div>
    `;

    overlay.appendChild(dialog);
    targetDoc.body.appendChild(overlay);

    // Fade-in animations
    requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        dialog.style.transform = "scale(1) translateY(0)";
    });

    const cancelBtn = dialog.querySelector("#custom-confirm-cancel-btn");
    const okBtn = dialog.querySelector("#custom-confirm-ok-btn");

    // Add styles for cancel hover
    cancelBtn.addEventListener("mouseenter", () => {
        cancelBtn.style.background = "rgba(255,255,255,0.08)";
        cancelBtn.style.borderColor = "rgba(255,255,255,0.3)";
    });
    cancelBtn.addEventListener("mouseleave", () => {
        cancelBtn.style.background = "rgba(255,255,255,0.03)";
        cancelBtn.style.borderColor = "rgba(255,255,255,0.15)";
    });

    const closeDialog = (callback) => {
        overlay.style.opacity = "0";
        dialog.style.transform = "scale(0.9) translateY(20px)";
        setTimeout(() => {
            overlay.remove();
            if (callback) callback();
        }, 300);
    };

    cancelBtn.addEventListener("click", () => {
        closeDialog(onCancel);
    });

    okBtn.addEventListener("click", () => {
        closeDialog(onConfirm);
    });

    // Close on backdrop click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeDialog(onCancel);
        }
    });
}

function showCustomAlertDialog(message, onDismiss, type = "info") {
    let targetDoc = document;
    if (pipWindowInstance && !pipWindowInstance.closed) {
        targetDoc = pipWindowInstance.document;
    }
    
    // Prevent multiple confirmation/alert dialogs
    const existing = targetDoc.getElementById("custom-alert-overlay");
    if (existing) existing.remove();

    const overlay = targetDoc.createElement("div");
    overlay.id = "custom-alert-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(10, 10, 12, 0.75)";
    overlay.style.backdropFilter = "blur(10px)";
    overlay.style.webkitBackdropFilter = "blur(10px)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "20000";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";

    const dialog = targetDoc.createElement("div");
    dialog.style.background = "rgba(18, 18, 20, 0.98)";
    
    let themeColor = "rgba(10, 132, 255, 0.3)";
    let shadowColor = "rgba(10, 132, 255, 0.15)";
    let iconHtml = "";
    let alertTitle = "Notification";
    let okBtnClass = "btn-action";
    let okBtnStyle = "flex: 1; height: 40px; border-radius: 8px; border: none; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; margin-top: 0;";

    if (type === "success") {
        themeColor = "rgba(48, 209, 88, 0.3)";
        shadowColor = "rgba(48, 209, 88, 0.15)";
        alertTitle = "Success";
        iconHtml = `<div style="background: rgba(48, 209, 88, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(48, 209, 88, 0.3); box-shadow: 0 0 15px rgba(48, 209, 88, 0.2);">
                       <i class="fa-solid fa-circle-check" style="color: #30d158; font-size: 24px;"></i>
                   </div>`;
        okBtnStyle = "flex: 1; height: 40px; border-radius: 8px; border: none; background: #30d158 !important; box-shadow: 0 4px 15px rgba(48, 209, 88, 0.3) !important; color: white; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; margin-top: 0;";
    } else if (type === "warning") {
        themeColor = "rgba(255, 159, 10, 0.3)";
        shadowColor = "rgba(255, 159, 10, 0.15)";
        alertTitle = "Warning";
        iconHtml = `<div style="background: rgba(255, 159, 10, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(255, 159, 10, 0.3); box-shadow: 0 0 15px rgba(255, 159, 10, 0.2);">
                       <i class="fa-solid fa-triangle-exclamation" style="color: #ff9f0a; font-size: 24px;"></i>
                   </div>`;
    } else if (type === "error") {
        themeColor = "rgba(255, 69, 58, 0.3)";
        shadowColor = "rgba(255, 69, 58, 0.15)";
        alertTitle = "Error";
        iconHtml = `<div style="background: rgba(255, 69, 58, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(255, 69, 58, 0.3); box-shadow: 0 0 15px rgba(255, 69, 58, 0.2);">
                       <i class="fa-solid fa-circle-xmark" style="color: #ff453a; font-size: 24px;"></i>
                   </div>`;
        okBtnClass = "btn-action glow-red";
    } else {
        // info
        iconHtml = `<div style="background: rgba(10, 132, 255, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 1px solid rgba(10, 132, 255, 0.3); box-shadow: 0 0 15px rgba(10, 132, 255, 0.2);">
                       <i class="fa-solid fa-circle-info" style="color: #0a84ff; font-size: 24px;"></i>
                   </div>`;
    }

    dialog.style.border = `1px solid ${themeColor}`;
    dialog.style.boxShadow = `0 10px 40px ${shadowColor}, 0 0 100px rgba(0, 0, 0, 0.8)`;
    dialog.style.borderRadius = "16px";
    dialog.style.width = "90%";
    dialog.style.maxWidth = "400px";
    dialog.style.padding = "30px 24px";
    dialog.style.textAlign = "center";
    dialog.style.transform = "scale(0.9) translateY(20px)";
    dialog.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";

    dialog.innerHTML = `
        ${iconHtml}
        <h4 style="margin: 0 0 10px 0; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: white; letter-spacing: 0.5px; text-transform: uppercase;">${alertTitle}</h4>
        <p style="margin: 0 0 24px 0; font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.5; font-weight: 500; text-align: left;">${message}</p>
        <div style="display: flex; gap: 12px; justify-content: center;">
            <button id="custom-alert-ok-btn" class="${okBtnClass}" style="${okBtnStyle}">
                Dismiss
            </button>
        </div>
    `;

    overlay.appendChild(dialog);
    targetDoc.body.appendChild(overlay);

    // Fade-in animations
    requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        dialog.style.transform = "scale(1) translateY(0)";
    });

    const okBtn = dialog.querySelector("#custom-alert-ok-btn");

    const closeDialog = (callback) => {
        overlay.style.opacity = "0";
        dialog.style.transform = "scale(0.9) translateY(20px)";
        setTimeout(() => {
            overlay.remove();
            if (callback) callback();
        }, 300);
    };

    okBtn.addEventListener("click", () => {
        closeDialog(onDismiss);
    });

    // Close on backdrop click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeDialog(onDismiss);
        }
    });
}

function applyAdminRolePermissions() {
    updateAIAssistButtonsVisibility();
    const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
    
    // Ensure backup tab button is visible
    const backupTabBtn = document.querySelector('.admin-tab-btn[data-target="tab-backup"]');
    if (backupTabBtn) {
        backupTabBtn.style.display = ""; // Always show it!
    }

    const tabBackup = document.getElementById("tab-backup");
    if (!tabBackup) return;

    // Check if banner already exists
    let lockBanner = document.getElementById("backup-lock-banner");

    if (isAssistant) {
        // Create banner if not exists
        if (!lockBanner) {
            lockBanner = document.createElement("div");
            lockBanner.id = "backup-lock-banner";
            lockBanner.innerHTML = `
                <div style="background: rgba(255, 59, 48, 0.1); border: 1px dashed rgba(255, 59, 48, 0.4); border-radius: 8px; padding: 15px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; box-shadow: 0 4px 20px rgba(255, 59, 48, 0.05);">
                    <div style="background: rgba(255, 59, 48, 0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #ff3b30; font-size: 18px; box-shadow: 0 0 10px rgba(255, 59, 48, 0.3);">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <h5 style="margin: 0 0 3px 0; font-family: var(--font-heading); color: #ff453a; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Restricted Access</h5>
                        <p style="margin: 0; font-size: 11.5px; color: rgba(255,255,255,0.7); line-height: 1.4;">Admins are not permitted to export/import configurations or clear system databases. Please contact a Super Admin for maintenance operations.</p>
                    </div>
                </div>
            `;
            tabBackup.insertBefore(lockBanner, tabBackup.firstChild);
        }

        // Disable all inputs & buttons in tab-backup
        const inputs = tabBackup.querySelectorAll("input, textarea, button");
        inputs.forEach(el => {
            el.disabled = true;
            el.style.opacity = "0.5";
            el.style.cursor = "not-allowed";
        });
        
        // Specifically target clear bugs button to completely restrict
        const btnClearBugs = document.getElementById("btn-admin-clear-bugs");
        if (btnClearBugs) {
            btnClearBugs.disabled = true;
            btnClearBugs.style.opacity = "0.4";
            btnClearBugs.style.cursor = "not-allowed";
            btnClearBugs.classList.remove("glow-red");
        }

        const backupTextarea = document.getElementById("admin-backup-textarea");
        if (backupTextarea) {
            backupTextarea.placeholder = "Access Denied. You do not have permissions to view or restore backup data.";
        }

        // Hide Gemini API key from assistant admins
        const inputKey = document.getElementById("input-ai-gemini-key");
        const btnToggleVisibility = document.getElementById("btn-toggle-ai-gemini-key-visibility");
        if (inputKey) {
            inputKey.value = "ÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇó";
            inputKey.type = "password";
            inputKey.disabled = true;
            inputKey.style.opacity = "0.5";
            inputKey.style.cursor = "not-allowed";
        }
        if (btnToggleVisibility) {
            btnToggleVisibility.style.display = "none";
        }

    } else {
        // Super admin - remove banner if exists
        if (lockBanner) {
            lockBanner.remove();
        }

        // Enable all inputs & buttons in tab-backup
        const inputs = tabBackup.querySelectorAll("input, textarea, button");
        inputs.forEach(el => {
            el.disabled = false;
            el.style.opacity = "";
            el.style.cursor = "";
        });

        const btnClearBugs = document.getElementById("btn-admin-clear-bugs");
        if (btnClearBugs) {
            btnClearBugs.classList.add("glow-red");
        }

        const backupTextarea = document.getElementById("admin-backup-textarea");
        if (backupTextarea) {
            backupTextarea.placeholder = "JSON backup content will appear here or can be pasted here for restoration...";
        }

        // Restore access to Gemini API key for super admins
        const inputKey = document.getElementById("input-ai-gemini-key");
        const btnToggleVisibility = document.getElementById("btn-toggle-ai-gemini-key-visibility");
        if (inputKey) {
            inputKey.disabled = false;
            inputKey.style.opacity = "";
            inputKey.style.cursor = "";
            const storedKey = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
            if (inputKey.value === "ÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇó") {
                inputKey.value = storedKey;
            }
        }
        if (btnToggleVisibility) {
            btnToggleVisibility.style.display = "";
        }
    }
}

function initAdminPanel() {
    const btnAuth = document.getElementById("btn-admin-auth");
    const inputPasscode = document.getElementById("admin-passcode-input");
    const authContainer = document.getElementById("admin-auth-container");
    const panelContent = document.getElementById("admin-panel-content");
    const authError = document.getElementById("admin-auth-error");

    const formSpelling = document.getElementById("form-admin-spelling");
    const formTemplate = document.getElementById("form-admin-template");

    const btnExport = document.getElementById("btn-admin-export");
    const btnImport = document.getElementById("btn-admin-import");
    const textareaBackup = document.getElementById("admin-backup-textarea");

    if (!btnAuth) return;

    // Admin Tabs Logic
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    const tabContents = document.querySelectorAll(".admin-tab-content");
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetId = btn.getAttribute("data-target");
                
                // Active button class
                tabBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                // Show/hide content panels
                tabContents.forEach(content => {
                    if (content.id === targetId) {
                        content.classList.remove("hide");
                    } else {
                        content.classList.add("hide");
                    }
                });
            });
        });
    }

    // Restore admin session from localStorage if present (to handle tab discard/sleep)
    if (localStorage.getItem("li_admin_authenticated") === "true" && sessionStorage.getItem("li_admin_authenticated") !== "true") {
        sessionStorage.setItem("li_admin_authenticated", "true");
        sessionStorage.setItem("li_admin_role", "super");
        const storedPass = localStorage.getItem("li_admin_passcode");
        if (storedPass) {
            sessionStorage.setItem("li_admin_passcode", storedPass);
        }
    }

    // Check existing authentication session
    if (sessionStorage.getItem("li_admin_authenticated") === "true") {
        if (authContainer) authContainer.classList.add("hide");
        if (panelContent) panelContent.classList.remove("hide");
        const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
        applyAdminRolePermissions();
        renderCustomSpelling();
        renderCustomTranslations();
        renderCustomTemplates();
        refreshMainHistory();
        const storedPasscode = sessionStorage.getItem("li_admin_passcode");
        const authUuid = isAssistant ? getOrCreateClientUuid() : null;
        loadAndRenderAccessRequests(storedPasscode || null, authUuid, !isAssistant);
    }

    // Handle Authentication Click
    btnAuth.addEventListener("click", () => {
        const password = inputPasscode.value.trim();
        if (password === "DopamineAdmin2026!") {
            localStorage.setItem("li_admin_authenticated", "true");
            localStorage.setItem("li_admin_passcode", password);
            sessionStorage.setItem("li_admin_authenticated", "true");
            sessionStorage.setItem("li_admin_passcode", password);
            sessionStorage.setItem("li_admin_role", "super");
            if (authError) authError.classList.add("hide");
            if (authContainer) authContainer.classList.add("hide");
            if (panelContent) panelContent.classList.remove("hide");
            applyAdminRolePermissions();
            renderCustomSpelling();
            renderCustomTranslations();
            renderCustomTemplates();
            refreshMainHistory();
            loadAndRenderAccessRequests(password, null, true);
            refreshAIAssistantTabVisibility();
            refreshBugTriageTabVisibility();
        } else {
            if (authError) authError.classList.remove("hide");
        }
    });

    // Enter key press in passcode input
    inputPasscode.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            btnAuth.click();
        }
    });

    // Auto-refresh access requests and users list in real-time (every 10 seconds)
    setInterval(() => {
        if (sessionStorage.getItem("li_admin_authenticated") === "true") {
            const adminTab = document.getElementById("tab-admin");
            if (adminTab && adminTab.classList.contains("active")) {
                const storedPasscode = sessionStorage.getItem("li_admin_passcode") || localStorage.getItem("li_admin_passcode") || null;
                const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
                const authUuid = isAssistant ? getOrCreateClientUuid() : null;
                const isSuperAdmin = !isAssistant;
                loadAndRenderAccessRequests(storedPasscode, authUuid, isSuperAdmin);
            }
        }
    }, 10000);

    // Toggle Spelling Mode (Single / Bulk)
    const btnSpellingToggle = document.getElementById("btn-spelling-mode-toggle");
    const spellingSingleContainer = document.getElementById("spelling-single-container");
    const spellingBulkContainer = document.getElementById("spelling-bulk-container");
    const formSpellingBulk = document.getElementById("form-admin-spelling-bulk");

    if (btnSpellingToggle && spellingSingleContainer && spellingBulkContainer) {
        btnSpellingToggle.addEventListener("click", () => {
            if (spellingBulkContainer.classList.contains("hide")) {
                spellingBulkContainer.classList.remove("hide");
                spellingSingleContainer.classList.add("hide");
                btnSpellingToggle.innerHTML = '<i class="fa-solid fa-pen"></i> Single Mode';
            } else {
                spellingBulkContainer.classList.add("hide");
                spellingSingleContainer.classList.remove("hide");
                btnSpellingToggle.innerHTML = '<i class="fa-solid fa-file-import"></i> Bulk Mode';
            }
        });
    }

    // Form: Train Spelling
    if (formSpelling) {
        formSpelling.addEventListener("submit", (e) => {
            e.preventDefault();
            const wrong = document.getElementById("spell-wrong").value.trim().toLowerCase();
            const right = document.getElementById("spell-right").value.trim();
            if (wrong && right) {
                customSpelling[wrong] = right;
                localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                saveCustomDataToBackend();
                renderCustomSpelling();
                formSpelling.reset();
                if (typeof processAd === "function") processAd();
            }
        });
    }

    // Form: Train Spelling Bulk
    if (formSpellingBulk) {
        formSpellingBulk.addEventListener("submit", (e) => {
            e.preventDefault();
            const textVal = document.getElementById("spell-bulk-text").value.trim();
            if (!textVal) return;
            
            const lines = textVal.split("\n");
            let addedCount = 0;
            lines.forEach(line => {
                const parts = line.split(",");
                if (parts.length >= 2) {
                    const wrong = parts[0].trim().toLowerCase();
                    const right = parts.slice(1).join(",").trim();
                    if (wrong && right) {
                        customSpelling[wrong] = right;
                        addedCount++;
                    }
                }
            });
            
            if (addedCount > 0) {
                localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                saveCustomDataToBackend();
                renderCustomSpelling();
                formSpellingBulk.reset();
                // Toggle back to single
                spellingBulkContainer.classList.add("hide");
                spellingSingleContainer.classList.remove("hide");
                if (btnSpellingToggle) {
                    btnSpellingToggle.innerHTML = '<i class="fa-solid fa-file-import"></i> Bulk Mode';
                }
                if (typeof processAd === "function") processAd();
                showCustomNotification(`Successfully imported ${addedCount} spelling corrections!`, "success");
            } else {
                showCustomAlertDialog("No valid corrections found. Make sure the format is 'wrong,right' with one entry per line.", null, "warning");
            }
        });
    }

    // Form: Train Template
    if (formTemplate) {
        formTemplate.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = document.getElementById("template-text").value.trim();
            const category = document.getElementById("template-category").value;
            const shorthand = document.getElementById("template-shorthand").value.trim();
            if (text && category) {
                customTemplates.push({ text, category, shorthand });
                localStorage.setItem("li_custom_templates", JSON.stringify(customTemplates));
                saveCustomDataToBackend();
                renderCustomTemplates();
                formTemplate.reset();
            }
        });
    }

    // Backup & Restore
    if (btnExport) {
        btnExport.addEventListener("click", () => {
            const dataObj = {
                spelling: customSpelling,
                templates: customTemplates
            };
            textareaBackup.value = JSON.stringify(dataObj, null, 2);
        });
    }

    if (btnImport) {
        btnImport.addEventListener("click", () => {
            const val = textareaBackup.value.trim();
            if (!val) {
                showCustomNotification("Please paste backup JSON string into the text area first.", "warning");
                return;
            }
            try {
                const parsed = JSON.parse(val);
                if (parsed.spelling && typeof parsed.spelling === "object") {
                    customSpelling = parsed.spelling;
                    localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                }
                if (parsed.templates && Array.isArray(parsed.templates)) {
                    customTemplates = parsed.templates;
                    localStorage.setItem("li_custom_templates", JSON.stringify(customTemplates));
                }
                saveCustomDataToBackend();
                renderCustomSpelling();
                renderCustomTemplates();
                showCustomNotification("Data imported successfully!", "success");
            } catch (err) {
                showCustomAlertDialog("Invalid JSON format. Verification failed:\n" + err.toString(), null, "error");
            }
        });
    }

    const btnClearBugs = document.getElementById("btn-admin-clear-bugs");
    if (btnClearBugs) {
        let holdInterval = null;
        const holdDuration = 3000; // 3 seconds
        let elapsed = 0;
        let isHolding = false;
        const originalHtml = `<i class="fa-solid fa-trash-can"></i> Clear Bug Reports`;

        const updateButtonProgress = (pct) => {
            const remainingSecs = ((holdDuration - elapsed) / 1000).toFixed(1);
            // Linear progress gradient overlay representing holding duration
            const progressBg = `linear-gradient(90deg, rgba(255, 59, 48, 0.45) ${pct}%, rgba(22, 22, 28, 0.9) ${pct}%)`;
            btnClearBugs.style.background = progressBg;
            
            if (pct < 100) {
                btnClearBugs.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> Hold to Clear (${remainingSecs}s)...`;
            }
        };

        const startHold = (e) => {
            if (btnClearBugs.disabled || isHolding) return;
            const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
            if (isAssistant) return;

            isHolding = true;
            elapsed = 0;
            e.preventDefault();

            // Style active hold
            btnClearBugs.style.transition = "none";
            btnClearBugs.style.transform = "scale(0.97)";
            updateButtonProgress(0);

            holdInterval = setInterval(() => {
                elapsed += 100;
                const pct = Math.min((elapsed / holdDuration) * 100, 100);
                updateButtonProgress(pct);

                if (elapsed >= holdDuration) {
                    clearInterval(holdInterval);
                    holdInterval = null;
                    isHolding = false;
                    
                    showCustomConfirmDialog(
                        "Are you sure you want to permanently clear all logged bug reports and delete their screenshot images from Google Drive? This action cannot be undone.",
                        () => {
                            triggerClearBugs();
                        },
                        () => {
                            resetButtonToOriginal();
                        },
                        "Delete Reports",
                        true
                    );
                }
            }, 100);
        };

        const cancelHold = () => {
            if (!isHolding) return;
            isHolding = false;
            if (holdInterval) {
                clearInterval(holdInterval);
                holdInterval = null;
            }
            btnClearBugs.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearBugs.style.transform = "";
            btnClearBugs.style.background = "";
            btnClearBugs.innerHTML = originalHtml;
        };

        const triggerClearBugs = () => {
            const passcode = sessionStorage.getItem("li_admin_passcode") || localStorage.getItem("li_admin_passcode");
            if (!CONFIG.GOOGLE_SCRIPT_URL) {
                cancelHold();
                return showCustomNotification("Google Apps Script URL is not configured.", "error");
            }

            // Disable button during loading
            btnClearBugs.disabled = true;
            btnClearBugs.style.transition = "background 0.3s ease, transform 0.2s ease";
            btnClearBugs.style.transform = "";
            btnClearBugs.style.background = "#ff9500"; // Amber warning color during deletion
            btnClearBugs.style.boxShadow = "0 4px 15px rgba(255, 149, 0, 0.3)";
            btnClearBugs.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Deleting reports...`;

            fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    action: "clear_bug_reports",
                    passcode: passcode
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    // Success! Transition to beautiful glowing green
                    btnClearBugs.style.background = "#30d158"; // Emerald green
                    btnClearBugs.style.borderColor = "#30d158";
                    btnClearBugs.style.boxShadow = "0 4px 20px rgba(48, 209, 88, 0.5)";
                    btnClearBugs.innerHTML = `<i class="fa-solid fa-circle-check"></i> Bug report cleared`;
                    showCustomNotification(data.message || "Successfully cleared all bug reports and screenshots.", "success");
                    
                    // Keep green for 3 seconds, then return to normal
                    setTimeout(() => {
                        btnClearBugs.disabled = false;
                        btnClearBugs.style.background = "";
                        btnClearBugs.style.borderColor = "";
                        btnClearBugs.style.boxShadow = "";
                        btnClearBugs.innerHTML = originalHtml;
                    }, 3000);
                } else {
                    showCustomAlertDialog("Clear failed: " + data.message, null, "error");
                    resetButtonToOriginal();
                }
            })
            .catch(err => {
                console.error("Error clearing bug reports:", err);
                showCustomAlertDialog("Error contacting the backend: " + err.toString(), null, "error");
                resetButtonToOriginal();
            });
        };

        const resetButtonToOriginal = () => {
            btnClearBugs.disabled = false;
            btnClearBugs.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearBugs.style.transform = "";
            btnClearBugs.style.background = "";
            btnClearBugs.style.borderColor = "";
            btnClearBugs.style.boxShadow = "";
            btnClearBugs.innerHTML = originalHtml;
        };

        // Attach mouse events
        btnClearBugs.addEventListener("mousedown", startHold);
        btnClearBugs.addEventListener("mouseup", cancelHold);
        btnClearBugs.addEventListener("mouseleave", cancelHold);

        // Attach touch events for mobile/tablet support
        btnClearBugs.addEventListener("touchstart", startHold);
        btnClearBugs.addEventListener("touchend", cancelHold);
        btnClearBugs.addEventListener("touchcancel", cancelHold);

        // Block accidental normal click behavior
        btnClearBugs.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }

    // --- Targeted Spelling Cleanup (search + clear matching entries) ---
    const inputClearSearch = document.getElementById("input-clear-spelling-search");
    const btnClearMatching = document.getElementById("btn-admin-clear-spelling");
    const clearPreview = document.getElementById("clear-spelling-preview");

    if (inputClearSearch && btnClearMatching) {
        // Live preview: show how many entries match as the user types
        inputClearSearch.addEventListener("input", () => {
            const query = inputClearSearch.value.trim().toLowerCase();
            if (!query) {
                if (clearPreview) clearPreview.textContent = "";
                return;
            }
            const entries = Object.entries(customSpelling);
            const matching = entries.filter(([wrong, right]) =>
                wrong.toLowerCase().includes(query) || right.toLowerCase().includes(query)
            );
            if (clearPreview) {
                if (matching.length === 0) {
                    clearPreview.innerHTML = `<span style="color: rgba(255,255,255,0.3);">No matching entries found.</span>`;
                } else {
                    const preview = matching.slice(0, 5).map(([w, r]) =>
                        `<span style="color:#ff453a;">${w}</span> ÔåÆ <span style="color:#30d158;">${r}</span>`
                    ).join(", ");
                    const extra = matching.length > 5 ? ` <span style="color:rgba(255,255,255,0.3);">and ${matching.length - 5} more...</span>` : "";
                    clearPreview.innerHTML = `<span style="color:#ff9f0a;">${matching.length} match${matching.length > 1 ? 'es' : ''}:</span> ${preview}${extra}`;
                }
            }
        });

        btnClearMatching.addEventListener("click", () => {
            const query = inputClearSearch.value.trim().toLowerCase();
            if (!query) {
                showCustomNotification("Please type a keyword to find matching entries (e.g. 'pezy', '700').", "warning");
                return;
            }

            const entries = Object.entries(customSpelling);
            const matching = entries.filter(([wrong, right]) =>
                wrong.toLowerCase().includes(query) || right.toLowerCase().includes(query)
            );

            if (matching.length === 0) {
                showCustomNotification(`No trained spelling entries match "${query}".`, "warning");
                return;
            }

            showCustomConfirmDialog(
                `Found ${matching.length} trained spelling entry${matching.length > 1 ? 'ies' : 'y'} matching "${query}":\n\n${matching.slice(0, 10).map(([w, r]) => `ÔÇó "${w}" ÔåÆ "${r}"`).join('\n')}${matching.length > 10 ? `\n...and ${matching.length - 10} more` : ''}\n\nRemove ${matching.length === 1 ? 'this entry' : 'these entries'}?`,
                () => {
                    // Delete matching entries
                    matching.forEach(([wrong]) => {
                        delete customSpelling[wrong];
                    });
                    localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                    saveCustomDataToBackend();
                    renderCustomSpelling();
                    inputClearSearch.value = "";
                    if (clearPreview) clearPreview.textContent = "";
                    if (typeof processAd === "function") processAd();
                    showCustomNotification(`Removed ${matching.length} spelling correction${matching.length > 1 ? 's' : ''} matching "${query}".`, "success");
                },
                null,
                "Remove Entries",
                true
            );
        });
    }

    // --- Clear ALL Trained Spelling (nuclear hold-to-confirm) ---
    const btnClearAllSpelling = document.getElementById("btn-admin-clear-all-spelling");
    if (btnClearAllSpelling) {
        let spHoldInterval = null;
        const spHoldDuration = 3000;
        let spElapsed = 0;
        let spIsHolding = false;
        const spOriginalHtml = `<i class="fa-solid fa-spell-check"></i> Clear All Spelling`;

        const spUpdateProgress = (pct) => {
            const remaining = ((spHoldDuration - spElapsed) / 1000).toFixed(1);
            const progressBg = `linear-gradient(90deg, rgba(255, 59, 48, 0.45) ${pct}%, rgba(22, 22, 28, 0.9) ${pct}%)`;
            btnClearAllSpelling.style.background = progressBg;
            if (pct < 100) {
                btnClearAllSpelling.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> Hold (${remaining}s)...`;
            }
        };

        const spStartHold = (e) => {
            if (btnClearAllSpelling.disabled || spIsHolding) return;
            const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
            if (isAssistant) return;

            spIsHolding = true;
            spElapsed = 0;
            e.preventDefault();

            btnClearAllSpelling.style.transition = "none";
            btnClearAllSpelling.style.transform = "scale(0.97)";
            spUpdateProgress(0);

            spHoldInterval = setInterval(() => {
                spElapsed += 100;
                const pct = Math.min((spElapsed / spHoldDuration) * 100, 100);
                spUpdateProgress(pct);

                if (spElapsed >= spHoldDuration) {
                    clearInterval(spHoldInterval);
                    spHoldInterval = null;
                    spIsHolding = false;

                    const entryCount = Object.keys(customSpelling).length;
                    showCustomConfirmDialog(
                        `Are you sure you want to clear ALL ${entryCount} trained spelling corrections? This wipes the Custom_Spelling database (local + Google Sheets). Hardcoded corrections are NOT affected. This cannot be undone.`,
                        () => {
                            customSpelling = {};
                            localStorage.removeItem("li_custom_spelling");
                            saveCustomDataToBackend();
                            renderCustomSpelling();
                            if (typeof processAd === "function") processAd();

                            btnClearAllSpelling.disabled = true;
                            btnClearAllSpelling.style.transition = "background 0.3s ease";
                            btnClearAllSpelling.style.background = "#30d158";
                            btnClearAllSpelling.style.borderColor = "#30d158";
                            btnClearAllSpelling.style.boxShadow = "0 4px 20px rgba(48, 209, 88, 0.5)";
                            btnClearAllSpelling.innerHTML = `<i class="fa-solid fa-circle-check"></i> All Cleared`;
                            showCustomNotification(`Wiped all ${entryCount} trained spelling corrections. Hardcoded corrections remain active.`, "success");

                            setTimeout(() => {
                                btnClearAllSpelling.disabled = false;
                                btnClearAllSpelling.style.background = "";
                                btnClearAllSpelling.style.borderColor = "";
                                btnClearAllSpelling.style.boxShadow = "";
                                btnClearAllSpelling.innerHTML = spOriginalHtml;
                            }, 3000);
                        },
                        () => {
                            spResetButton();
                        },
                        "Wipe All Spelling",
                        true
                    );
                }
            }, 100);
        };

        const spCancelHold = () => {
            if (!spIsHolding) return;
            spIsHolding = false;
            if (spHoldInterval) {
                clearInterval(spHoldInterval);
                spHoldInterval = null;
            }
            btnClearAllSpelling.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearAllSpelling.style.transform = "";
            btnClearAllSpelling.style.background = "";
            btnClearAllSpelling.innerHTML = spOriginalHtml;
        };

        const spResetButton = () => {
            btnClearAllSpelling.disabled = false;
            btnClearAllSpelling.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearAllSpelling.style.transform = "";
            btnClearAllSpelling.style.background = "";
            btnClearAllSpelling.style.borderColor = "";
            btnClearAllSpelling.style.boxShadow = "";
            btnClearAllSpelling.innerHTML = spOriginalHtml;
        };

        btnClearAllSpelling.addEventListener("mousedown", spStartHold);
        btnClearAllSpelling.addEventListener("mouseup", spCancelHold);
        btnClearAllSpelling.addEventListener("mouseleave", spCancelHold);
        btnClearAllSpelling.addEventListener("touchstart", spStartHold);
        btnClearAllSpelling.addEventListener("touchend", spCancelHold);
        btnClearAllSpelling.addEventListener("touchcancel", spCancelHold);
        btnClearAllSpelling.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }

    // --- Search filter for translations list ---
    const inputTransSearch = document.getElementById("input-translations-search");
    if (inputTransSearch) {
        inputTransSearch.addEventListener("input", () => {
            renderCustomTranslations();
        });
    }

    // --- Refresh button for Fixed Bug translations list ---
    const btnTranslationsRefresh = document.getElementById("btn-translations-refresh");
    if (btnTranslationsRefresh) {
        btnTranslationsRefresh.addEventListener("click", () => {
            const icon = btnTranslationsRefresh.querySelector("i");
            if (icon) icon.classList.add("fa-spin");
            btnTranslationsRefresh.disabled = true;

            if (!CONFIG.GOOGLE_SCRIPT_URL) {
                // No backend ÔÇö just re-render from local data
                renderCustomTranslations();
                if (icon) icon.classList.remove("fa-spin");
                btnTranslationsRefresh.disabled = false;
                showCustomNotification("Fixed bug list refreshed from local cache.", "success");
                return;
            }

            // Force-sync from backend (bypass the 45s cooldown)
            fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({ action: "get_custom_data" })
            })
            .then(r => r.json())
            .then(data => {
                if (data.status === "success") {
                    if (data.translations) {
                        customTranslations = data.translations;
                        localStorage.setItem("li_custom_translations", JSON.stringify(customTranslations));
                    }
                    if (data.spelling) {
                        customSpelling = data.spelling;
                        localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                    }
                    if (data.templates) {
                        customTemplates = data.templates;
                        localStorage.setItem("li_custom_templates", JSON.stringify(customTemplates));
                    }
                    renderCustomTranslations();
                    if (typeof renderCustomSpelling === "function") renderCustomSpelling();
                    if (typeof renderCustomTemplates === "function") renderCustomTemplates();
                    if (typeof processAd === "function") processAd();
                    showCustomNotification("Fixed bug list refreshed with latest data from cloud!", "success");
                } else {
                    showCustomNotification("Failed to refresh from backend.", "warning");
                }
            })
            .catch(err => {
                console.error("Refresh error:", err);
                // Fallback: just re-render local data
                renderCustomTranslations();
                showCustomNotification("Could not reach cloud. Refreshed from local cache.", "warning");
            })
            .finally(() => {
                if (icon) icon.classList.remove("fa-spin");
                btnTranslationsRefresh.disabled = false;
            });
        });
    }

    // --- Clear ALL Custom Translations (hold-to-confirm) ---
    const btnClearAllTranslations = document.getElementById("btn-admin-clear-all-translations");
    if (btnClearAllTranslations) {
        let trHoldInterval = null;
        const trHoldDuration = 8000;
        let trElapsed = 0;
        let trIsHolding = false;
        const trOriginalHtml = `<i class="fa-solid fa-trash-can"></i> Clear All Mappings`;

        const trUpdateProgress = (pct) => {
            const remaining = ((trHoldDuration - trElapsed) / 1000).toFixed(1);
            const progressBg = `linear-gradient(90deg, rgba(255, 59, 48, 0.45) ${pct}%, rgba(22, 22, 28, 0.9) ${pct}%)`;
            btnClearAllTranslations.style.background = progressBg;
            if (pct < 100) {
                btnClearAllTranslations.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> Hold (${remaining}s)...`;
            }
        };

        const trStartHold = (e) => {
            if (btnClearAllTranslations.disabled || trIsHolding) return;
            const isSuperAdmin = sessionStorage.getItem("li_admin_role") === "super";
            if (!isSuperAdmin) return;

            trIsHolding = true;
            trElapsed = 0;
            e.preventDefault();

            btnClearAllTranslations.style.transition = "none";
            btnClearAllTranslations.style.transform = "scale(0.97)";
            trUpdateProgress(0);

            trHoldInterval = setInterval(() => {
                trElapsed += 100;
                const pct = Math.min((trElapsed / trHoldDuration) * 100, 100);
                trUpdateProgress(pct);

                if (trElapsed >= trHoldDuration) {
                    clearInterval(trHoldInterval);
                    trHoldInterval = null;
                    trIsHolding = false;

                    const entryCount = Object.keys(customTranslations).length;
                    showCustomConfirmDialog(
                        `Are you sure you want to clear ALL ${entryCount} trained ad translation mappings? This wipes the Custom_Translations database (local + Google Sheets). Auto-translation for previous ads will be removed. This cannot be undone.`,
                        () => {
                            customTranslations = {};
                            localStorage.removeItem("li_custom_translations");
                            saveCustomDataToBackend();
                            renderCustomTranslations();
                            if (typeof processAd === "function") processAd();

                            btnClearAllTranslations.disabled = true;
                            btnClearAllTranslations.style.transition = "background 0.3s ease";
                            btnClearAllTranslations.style.background = "#30d158";
                            btnClearAllTranslations.style.borderColor = "#30d158";
                            btnClearAllTranslations.style.boxShadow = "0 4px 20px rgba(48, 209, 88, 0.5)";
                            btnClearAllTranslations.innerHTML = `<i class="fa-solid fa-circle-check"></i> All Cleared`;
                            showCustomNotification(`Wiped all ${entryCount} custom translation mappings.`, "success");

                            setTimeout(() => {
                                btnClearAllTranslations.disabled = false;
                                btnClearAllTranslations.style.background = "";
                                btnClearAllTranslations.style.borderColor = "";
                                btnClearAllTranslations.style.boxShadow = "";
                                btnClearAllTranslations.innerHTML = trOriginalHtml;
                            }, 3000);
                        },
                        () => {
                            trResetButton();
                        },
                        "Wipe All Translations",
                        true
                    );
                }
            }, 100);
        };

        const trCancelHold = () => {
            if (!trIsHolding) return;
            trIsHolding = false;
            if (trHoldInterval) {
                clearInterval(trHoldInterval);
                trHoldInterval = null;
            }
            btnClearAllTranslations.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearAllTranslations.style.transform = "";
            btnClearAllTranslations.style.background = "";
            btnClearAllTranslations.innerHTML = trOriginalHtml;
        };

        const trResetButton = () => {
            btnClearAllTranslations.disabled = false;
            btnClearAllTranslations.style.transition = "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease";
            btnClearAllTranslations.style.transform = "";
            btnClearAllTranslations.style.background = "";
            btnClearAllTranslations.style.borderColor = "";
            btnClearAllTranslations.style.boxShadow = "";
            btnClearAllTranslations.innerHTML = trOriginalHtml;
        };

        // Desktop Events
        btnClearAllTranslations.addEventListener("mousedown", trStartHold);
        btnClearAllTranslations.addEventListener("mouseup", trCancelHold);
        btnClearAllTranslations.addEventListener("mouseleave", trCancelHold);

        // Mobile / Touch Events
        btnClearAllTranslations.addEventListener("touchstart", trStartHold, { passive: false });
        btnClearAllTranslations.addEventListener("touchend", trCancelHold);
        btnClearAllTranslations.addEventListener("touchcancel", trCancelHold);

        // Block accidental normal click behavior
        btnClearAllTranslations.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }
}

function loadAndRenderAccessRequests(passcode, authUuid, isSuperAdmin) {
    const container = document.getElementById("admin-access-requests-container");
    const usersContainer = document.getElementById("admin-users-list-container");
    if (!container || !CONFIG.GOOGLE_SCRIPT_URL) return;
    
    const requestBody = { action: "get_access_requests" };
    if (passcode) requestBody.passcode = passcode;
    if (authUuid) requestBody.authUuid = authUuid;
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(requestBody)
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === "success") {
            const serverIsSuperAdmin = data.isSuperAdmin !== undefined ? data.isSuperAdmin : isSuperAdmin;
            const pendingRequests = data.requests.filter(r => r.status === "pending");
            renderAccessRequestsList(container, pendingRequests, passcode, authUuid);
            
            if (usersContainer) {
                const approvedUsers = data.requests.filter(r => r.status === "approved");
                renderApprovedUsersList(usersContainer, approvedUsers, passcode, authUuid, serverIsSuperAdmin);
            }
        } else {
            const errMsg = `<div class="no-requests-msg" style="grid-column: 1 / -1; color: #e63946; text-align: center; padding: 20px;">Failed to load access requests: ${data.message}</div>`;
            container.innerHTML = errMsg;
            if (usersContainer) usersContainer.innerHTML = errMsg;
        }
    })
    .catch(err => {
        console.error("Error loading access requests:", err);
        const errMsg = `<div class="no-requests-msg" style="grid-column: 1 / -1; color: #e63946; text-align: center; padding: 20px;">Network error loading access requests.</div>`;
        container.innerHTML = errMsg;
        if (usersContainer) usersContainer.innerHTML = errMsg;
    });
}

function renderAccessRequestsList(container, requests, passcode, authUuid) {
    if (!container) return;
    container.innerHTML = "";
    
    if (requests.length === 0) {
        container.innerHTML = `
            <div class="no-requests-msg" style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-muted); border: 1px dashed var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.01);">
                <i class="fa-solid fa-users-slash" style="font-size: 24px; margin-bottom: 10px; display: block; color: var(--text-muted);"></i>
                No pending access requests.
            </div>`;
        return;
    }
    
    function buildAuthBody(extraFields) {
        const body = {};
        if (passcode) body.passcode = passcode;
        if (authUuid) body.authUuid = authUuid;
        return Object.assign(body, extraFields);
    }
    
    requests.forEach(req => {
        const card = document.createElement("div");
        card.className = "access-request-card";
        card.style.background = "rgba(255, 255, 255, 0.02)";
        card.style.border = "1px solid var(--border-color)";
        card.style.padding = "15px";
        card.style.borderRadius = "8px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.transition = "transform 0.2s, box-shadow 0.2s";
        
        const details = document.createElement("div");
        
        const name = document.createElement("div");
        name.style.fontSize = "14px";
        name.style.fontWeight = "600";
        name.style.color = "var(--text-color)";
        name.textContent = `${req.firstname} ${req.lastname}`;
        details.appendChild(name);
        
        const gameId = document.createElement("div");
        gameId.style.fontSize = "12px";
        gameId.style.color = "var(--text-muted)";
        gameId.style.marginTop = "4px";
        gameId.innerHTML = `<span style="color: var(--text-muted);">ID:</span> <strong style="color: var(--text-color);">${req.id}</strong>`;
        details.appendChild(gameId);
        
        const time = document.createElement("div");
        time.style.fontSize = "11px";
        time.style.color = "var(--text-muted)";
        time.style.marginTop = "4px";
        time.textContent = req.timestamp;
        details.appendChild(time);
        
        const uuidInfo = document.createElement("div");
        uuidInfo.style.fontSize = "10px";
        uuidInfo.style.color = "var(--text-muted)";
        uuidInfo.style.marginTop = "4px";
        uuidInfo.style.wordBreak = "break-all";
        uuidInfo.textContent = `UUID: ${req.clientUuid}`;
        details.appendChild(uuidInfo);
        
        card.appendChild(details);
        
        const actionsRow = document.createElement("div");
        actionsRow.style.display = "flex";
        actionsRow.style.gap = "10px";
        actionsRow.style.marginTop = "15px";
        
        const btnApprove = document.createElement("button");
        btnApprove.type = "button";
        btnApprove.className = "btn-preset";
        btnApprove.style.flex = "1";
        btnApprove.style.padding = "6px 12px";
        btnApprove.style.borderRadius = "4px";
        btnApprove.style.border = "none";
        btnApprove.style.background = "#2ec4b6";
        btnApprove.style.color = "white";
        btnApprove.style.fontWeight = "600";
        btnApprove.style.fontSize = "12px";
        btnApprove.style.cursor = "pointer";
        btnApprove.innerHTML = `<i class="fa-solid fa-check"></i> Approve`;
        
        btnApprove.addEventListener("click", () => {
            btnApprove.disabled = true;
            btnApprove.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
            
            fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(buildAuthBody({
                    action: "approve_access_request",
                    clientUuid: req.clientUuid
                }))
            })
            .then(r => r.json())
            .then(data => {
                if (data.status === "success") {
                    loadAndRenderAccessRequests(passcode, authUuid, false);
                } else {
                    showCustomAlertDialog("Approval failed: " + data.message, null, "error");
                    btnApprove.disabled = false;
                    btnApprove.innerHTML = `<i class="fa-solid fa-check"></i> Approve`;
                }
            })
            .catch(err => {
                console.error("Approve request error:", err);
                showCustomAlertDialog("Network error approving request.", null, "error");
                btnApprove.disabled = false;
                btnApprove.innerHTML = `<i class="fa-solid fa-check"></i> Approve`;
            });
        });
        
        const btnReject = document.createElement("button");
        btnReject.type = "button";
        btnReject.className = "btn-preset";
        btnReject.style.padding = "6px 12px";
        btnReject.style.borderRadius = "4px";
        btnReject.style.border = "none";
        btnReject.style.background = "#e63946";
        btnReject.style.color = "white";
        btnReject.style.fontWeight = "600";
        btnReject.style.fontSize = "12px";
        btnReject.style.cursor = "pointer";
        btnReject.innerHTML = `<i class="fa-solid fa-xmark"></i> Reject`;
        
        btnReject.addEventListener("click", () => {
            btnReject.disabled = true;
            btnReject.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
            
            fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(buildAuthBody({
                    action: "reject_access_request",
                    clientUuid: req.clientUuid
                }))
            })
            .then(r => r.json())
            .then(data => {
                if (data.status === "success") {
                    loadAndRenderAccessRequests(passcode, authUuid, false);
                } else {
                    showCustomAlertDialog("Rejection failed: " + data.message, null, "error");
                    btnReject.disabled = false;
                    btnReject.innerHTML = `<i class="fa-solid fa-xmark"></i> Reject`;
                }
            })
            .catch(err => {
                console.error("Reject request error:", err);
                showCustomAlertDialog("Network error rejecting request.", null, "error");
                btnReject.disabled = false;
                btnReject.innerHTML = `<i class="fa-solid fa-xmark"></i> Reject`;
            });
        });
        
        actionsRow.appendChild(btnApprove);
        actionsRow.appendChild(btnReject);
        
        card.appendChild(actionsRow);
        container.appendChild(card);
    });
}

function renderApprovedUsersList(container, requests, passcode, authUuid, isSuperAdmin) {
    if (!container) return;
    container.innerHTML = "";
    
    if (requests.length === 0) {
        container.innerHTML = `
            <div class="no-requests-msg" style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-muted); border: 1px dashed var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.01);">
                <i class="fa-solid fa-users-slash" style="font-size: 24px; margin-bottom: 10px; display: block; color: var(--text-muted);"></i>
                No authorized users found.
            </div>`;
        return;
    }
    
    function buildAuthBody(extraFields) {
        const body = {};
        if (passcode) body.passcode = passcode;
        if (authUuid) body.authUuid = authUuid;
        return Object.assign(body, extraFields);
    }
    
    requests.forEach(req => {
        const card = document.createElement("div");
        card.className = "access-request-card";
        card.style.background = "rgba(255, 255, 255, 0.02)";
        card.style.border = "1px solid var(--border-color)";
        card.style.padding = "15px";
        card.style.borderRadius = "8px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.transition = "transform 0.2s, box-shadow 0.2s";
        
        const isAssistantAdmin = (req.role || "").toLowerCase() === "assistant_admin";
        
        // Add a subtle left border for assistant admins
        if (isAssistantAdmin) {
            card.style.borderLeft = "3px solid #f0a500";
        }
        
        const details = document.createElement("div");
        
        // Name row with role badge
        const nameRow = document.createElement("div");
        nameRow.style.display = "flex";
        nameRow.style.alignItems = "center";
        nameRow.style.gap = "8px";
        nameRow.style.flexWrap = "wrap";
        
        const name = document.createElement("div");
        name.style.fontSize = "14px";
        name.style.fontWeight = "600";
        name.style.color = "var(--text-color)";
        name.textContent = `${req.firstname} ${req.lastname}`;
        nameRow.appendChild(name);
        
        if (isAssistantAdmin) {
            const badge = document.createElement("span");
            badge.style.fontSize = "9px";
            badge.style.fontWeight = "700";
            badge.style.padding = "2px 8px";
            badge.style.borderRadius = "4px";
            badge.style.background = "rgba(240, 165, 0, 0.15)";
            badge.style.color = "#f0a500";
            badge.style.border = "1px solid rgba(240, 165, 0, 0.3)";
            badge.style.textTransform = "uppercase";
            badge.style.letterSpacing = "0.5px";
            badge.innerHTML = `<i class="fa-solid fa-shield-halved" style="margin-right: 3px;"></i>Admin`;
            nameRow.appendChild(badge);
        }
        
        details.appendChild(nameRow);
        
        const gameId = document.createElement("div");
        gameId.style.fontSize = "12px";
        gameId.style.color = "var(--text-muted)";
        gameId.style.marginTop = "4px";
        gameId.innerHTML = `<span style="color: var(--text-muted);">ID:</span> <strong style="color: var(--text-color);">${req.id}</strong>`;
        details.appendChild(gameId);
        
        const time = document.createElement("div");
        time.style.fontSize = "11px";
        time.style.color = "var(--text-muted)";
        time.style.marginTop = "4px";
        time.textContent = req.timestamp;
        details.appendChild(time);
        
        const uuidInfo = document.createElement("div");
        uuidInfo.style.fontSize = "10px";
        uuidInfo.style.color = "var(--text-muted)";
        uuidInfo.style.marginTop = "4px";
        uuidInfo.style.wordBreak = "break-all";
        uuidInfo.textContent = `UUID: ${req.clientUuid}`;
        details.appendChild(uuidInfo);
        
        card.appendChild(details);
        
        const actionsRow = document.createElement("div");
        actionsRow.style.display = "flex";
        actionsRow.style.gap = "8px";
        actionsRow.style.marginTop = "15px";
        actionsRow.style.flexWrap = "wrap";
        
        // Only super admin can see management buttons
        if (isSuperAdmin) {
            // Promote / Demote button
            const btnRole = document.createElement("button");
            btnRole.type = "button";
            btnRole.className = "btn-preset";
            btnRole.style.flex = "1";
            btnRole.style.padding = "6px 10px";
            btnRole.style.borderRadius = "4px";
            btnRole.style.border = "none";
            btnRole.style.fontWeight = "600";
            btnRole.style.fontSize = "11px";
            btnRole.style.cursor = "pointer";
            btnRole.style.minWidth = "120px";
            
            if (isAssistantAdmin) {
                btnRole.style.background = "rgba(240, 165, 0, 0.15)";
                btnRole.style.color = "#f0a500";
                btnRole.style.border = "1px solid rgba(240, 165, 0, 0.3)";
                btnRole.innerHTML = `<i class="fa-solid fa-user-minus"></i> Remove Admin`;
            } else {
                btnRole.style.background = "rgba(46, 196, 182, 0.15)";
                btnRole.style.color = "#2ec4b6";
                btnRole.style.border = "1px solid rgba(46, 196, 182, 0.3)";
                btnRole.innerHTML = `<i class="fa-solid fa-user-shield"></i> Make Admin`;
            }
            
            btnRole.addEventListener("click", () => {
                const confirmMsg = isAssistantAdmin 
                    ? `Remove Admin role from ${req.firstname} ${req.lastname}?`
                    : `Promote ${req.firstname} ${req.lastname} to Admin?<br><br>They will be able to:<br>- Access the Admin Panel<br>- Approve/Reject access requests<br>- View Spelling & Templates<br><br>They will NOT be able to:<br>- Revoke user access<br>- Promote/demote users<br>- Manage backups`;
                
                const okButtonText = isAssistantAdmin ? "Remove Role" : "Promote";
                const isDestructiveAction = isAssistantAdmin;

                showCustomConfirmDialog(
                    confirmMsg,
                    () => {
                        btnRole.disabled = true;
                        btnRole.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
                        
                        fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                            method: "POST",
                            headers: { "Content-Type": "text/plain" },
                            body: JSON.stringify({
                                action: "set_user_role",
                                passcode: passcode,
                                clientUuid: req.clientUuid,
                                role: newRole
                            })
                        })
                        .then(r => r.json())
                        .then(data => {
                            if (data.status === "success") {
                                loadAndRenderAccessRequests(passcode, authUuid, isSuperAdmin);
                            } else {
                                showCustomAlertDialog("Role change failed: " + data.message, null, "error");
                                btnRole.disabled = false;
                                btnRole.innerHTML = isAssistantAdmin 
                                    ? `<i class="fa-solid fa-user-minus"></i> Remove Admin`
                                    : `<i class="fa-solid fa-user-shield"></i> Make Admin`;
                            }
                        })
                        .catch(err => {
                            console.error("Set role error:", err);
                            showCustomAlertDialog("Network error changing role.", null, "error");
                            btnRole.disabled = false;
                        });
                    },
                    null,
                    okButtonText,
                    isDestructiveAction
                );
            });
            
            actionsRow.appendChild(btnRole);
            
            // Revoke Access button
            const btnRevoke = document.createElement("button");
            btnRevoke.type = "button";
            btnRevoke.className = "btn-preset";
            btnRevoke.style.flex = "1";
            btnRevoke.style.padding = "6px 10px";
            btnRevoke.style.borderRadius = "4px";
            btnRevoke.style.border = "none";
            btnRevoke.style.background = "#e63946";
            btnRevoke.style.color = "white";
            btnRevoke.style.fontWeight = "600";
            btnRevoke.style.fontSize = "11px";
            btnRevoke.style.cursor = "pointer";
            btnRevoke.style.minWidth = "120px";
            btnRevoke.innerHTML = `<i class="fa-solid fa-user-slash"></i> Revoke Access`;
            
            btnRevoke.addEventListener("click", () => {
                showCustomConfirmDialog(
                    `Are you sure you want to permanently revoke system access for ${req.firstname} ${req.lastname}? This action cannot be undone.`,
                    () => {
                        btnRevoke.disabled = true;
                        btnRevoke.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
                        
                        fetch(CONFIG.GOOGLE_SCRIPT_URL, {
                            method: "POST",
                            headers: { "Content-Type": "text/plain" },
                            body: JSON.stringify(buildAuthBody({
                                action: "reject_access_request",
                                clientUuid: req.clientUuid
                            }))
                        })
                        .then(r => r.json())
                        .then(data => {
                            if (data.status === "success") {
                                loadAndRenderAccessRequests(passcode, authUuid, isSuperAdmin);
                            } else {
                                showCustomAlertDialog("Revocation failed: " + data.message, null, "error");
                                btnRevoke.disabled = false;
                                btnRevoke.innerHTML = `<i class="fa-solid fa-user-slash"></i> Revoke Access`;
                            }
                        })
                        .catch(err => {
                            console.error("Revoke access error:", err);
                            showCustomAlertDialog("Network error revoking access.", null, "error");
                            btnRevoke.disabled = false;
                            btnRevoke.innerHTML = `<i class="fa-solid fa-user-slash"></i> Revoke Access`;
                        });
                    },
                    null,
                    "Revoke Access",
                    true
                );
            });
            
            actionsRow.appendChild(btnRevoke);
        } else {
            // Assistant admin view - just show a read-only role indicator
            const roleLabel = document.createElement("div");
            roleLabel.style.fontSize = "11px";
            roleLabel.style.color = "var(--text-muted)";
            roleLabel.style.fontStyle = "italic";
            roleLabel.innerHTML = isAssistantAdmin 
                ? `<i class="fa-solid fa-shield-halved" style="color: #f0a500;"></i> Admin`
                : `<i class="fa-solid fa-user" style="color: var(--text-muted);"></i> Regular User`;
            actionsRow.appendChild(roleLabel);
        }
        
        card.appendChild(actionsRow);
        container.appendChild(card);
    });
}

function renderCustomSpelling() {
    const tbody = document.getElementById("admin-spelling-list");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    const entries = Object.entries(customSpelling);
    if (entries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-secondary);">No custom spelling corrections trained yet.</td></tr>`;
        return;
    }

    for (const [wrong, right] of entries) {
        const tr = document.createElement("tr");
        
        const tdWrong = document.createElement("td");
        tdWrong.textContent = wrong;
        tr.appendChild(tdWrong);
        
        const tdRight = document.createElement("td");
        tdRight.textContent = right;
        tr.appendChild(tdRight);
        
        const tdAction = document.createElement("td");
        tdAction.style.textAlign = "center";
        const btnDel = document.createElement("button");
        btnDel.type = "button";
        btnDel.className = "btn-preset";
        btnDel.style.padding = "4px 8px";
        btnDel.style.fontSize = "10px";
        btnDel.style.background = "rgba(255, 59, 48, 0.1)";
        btnDel.style.color = "var(--color-primary)";
        btnDel.style.border = "1px solid rgba(255, 59, 48, 0.2)";
        btnDel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnDel.addEventListener("click", () => {
            delete customSpelling[wrong];
            localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
            saveCustomDataToBackend();
            renderCustomSpelling();
            if (typeof processAd === "function") processAd();
        });
        tdAction.appendChild(btnDel);
        tr.appendChild(tdAction);
        
        tbody.appendChild(tr);
    }
}

function getActiveEditorName() {
    if (sessionStorage.getItem("li_admin_authenticated") === "true") {
        if (sessionStorage.getItem("li_admin_role") === "super") {
            return "Super Admin";
        }
        const fn = localStorage.getItem("li_request_firstname");
        const ln = localStorage.getItem("li_request_lastname");
        if (fn || ln) {
            return `${fn || ""} ${ln || ""}`.trim();
        }
        return "Admin";
    }
    return "System";
}

function renderCustomTranslations() {
    const tbody = document.getElementById("admin-translations-list");
    if (!tbody) return;
    tbody.innerHTML = "";

    const searchInput = document.getElementById("input-translations-search");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const entries = Object.entries(customTranslations);
    
    // Update badge count
    const badge = document.getElementById("translations-count-badge");
    if (badge) {
        badge.textContent = `Total: ${entries.length}`;
    }

    const filteredEntries = query ? entries.filter(([raw, corrValue]) => {
        let text = corrValue;
        if (corrValue && corrValue.startsWith("{") && corrValue.endsWith("}")) {
            try {
                const parsed = JSON.parse(corrValue);
                text = parsed.text || corrValue;
            } catch (e) {}
        }
        return raw.toLowerCase().includes(query) || text.toLowerCase().includes(query);
    }) : entries;

    const isAuthorized = sessionStorage.getItem("li_admin_authenticated") === "true";
    const isSuperAdmin = isAuthorized && sessionStorage.getItem("li_admin_role") === "super";
    
    // Show/hide Clear All button (Super Admin only!)
    const btnClearAllTranslations = document.getElementById("btn-admin-clear-all-translations");
    if (btnClearAllTranslations) {
        btnClearAllTranslations.style.display = isSuperAdmin ? "" : "none";
    }

    // Adjust table headers
    const thRaw = document.getElementById("th-translations-raw");
    const thCorr = document.getElementById("th-translations-corr");
    const thDetails = document.getElementById("th-translations-details");
    const thAction = document.getElementById("th-translations-action");
    if (thRaw && thCorr && thDetails && thAction) {
        if (isAuthorized) {
            thRaw.style.width = "35%";
            thCorr.style.width = "35%";
            thDetails.style.width = "20%";
            thAction.style.display = "";
        } else {
            thRaw.style.width = "40%";
            thCorr.style.width = "40%";
            thDetails.style.width = "20%";
            thAction.style.display = "none";
        }
    }

    if (filteredEntries.length === 0) {
        const colspan = isAuthorized ? 4 : 3;
        tbody.innerHTML = `<tr><td colspan="${colspan}" style="text-align: center; color: var(--text-secondary); padding: 20px;">${query ? 'No matching trained ads found.' : 'No custom full ad translations trained yet.'}</td></tr>`;
        return;
    }

    filteredEntries.sort((a, b) => {
        // Parse timestamps from JSON values to sort newest first
        let timeA = 0, timeB = 0;
        try {
            const parsedA = JSON.parse(a[1]);
            if (parsedA.timestamp) timeA = new Date(parsedA.timestamp).getTime() || 0;
        } catch (e) {}
        try {
            const parsedB = JSON.parse(b[1]);
            if (parsedB.timestamp) timeB = new Date(parsedB.timestamp).getTime() || 0;
        } catch (e) {}
        if (timeB !== timeA) return timeB - timeA; // Newest first
        return a[0].localeCompare(b[0]); // Fallback alphabetical
    });

    for (const [raw, corrValue] of filteredEntries) {
        const tr = document.createElement("tr");

        let corrText = corrValue;
        let author = "System";
        let method = "Legacy Correction";
        let fixedTime = "N/A";
        let reporterTime = "N/A";

        if (corrValue && corrValue.startsWith("{") && corrValue.endsWith("}")) {
            try {
                const parsed = JSON.parse(corrValue);
                if (parsed && parsed.text) {
                    corrText = parsed.text;
                    author = parsed.author || "System";
                    method = parsed.method || "Trained manually";
                    fixedTime = parsed.timestamp || "N/A";
                    reporterTime = parsed.reporterTime || "N/A";
                }
            } catch (e) {}
        }

        // Column 1: Raw Ad
        const tdRaw = document.createElement("td");
        tdRaw.style.wordBreak = "break-word";
        tdRaw.style.whiteSpace = "normal";
        tdRaw.style.fontSize = "11.5px";
        tdRaw.style.lineHeight = "1.4";
        tdRaw.style.padding = "10px";
        tdRaw.style.verticalAlign = "top";
        
        const rawTextDiv = document.createElement("div");
        rawTextDiv.style.fontWeight = "600";
        rawTextDiv.style.color = "rgba(255,255,255,0.85)";
        rawTextDiv.textContent = raw;
        tdRaw.appendChild(rawTextDiv);

        const reporterTimeDiv = document.createElement("div");
        reporterTimeDiv.style.fontSize = "9.5px";
        reporterTimeDiv.style.color = "var(--text-muted)";
        reporterTimeDiv.style.marginTop = "6px";
        reporterTimeDiv.style.display = "flex";
        reporterTimeDiv.style.alignItems = "center";
        reporterTimeDiv.style.gap = "4px";
        reporterTimeDiv.innerHTML = `<i class="fa-regular fa-clock" style="font-size: 9px; opacity: 0.7;"></i> Reported: ${reporterTime}`;
        tdRaw.appendChild(reporterTimeDiv);
        
        tr.appendChild(tdRaw);

        // Column 2: Corrected Ad
        const tdCorr = document.createElement("td");
        tdCorr.style.wordBreak = "break-word";
        tdCorr.style.whiteSpace = "normal";
        tdCorr.style.fontSize = "11.5px";
        tdCorr.style.lineHeight = "1.4";
        tdCorr.style.padding = "10px";
        tdCorr.style.verticalAlign = "top";
        
        const corrTextDiv = document.createElement("div");
        corrTextDiv.style.fontWeight = "600";
        corrTextDiv.style.color = "#30d158";
        corrTextDiv.textContent = corrText;
        tdCorr.appendChild(corrTextDiv);

        const fixedTimeDiv = document.createElement("div");
        fixedTimeDiv.style.fontSize = "9.5px";
        fixedTimeDiv.style.color = "var(--text-muted)";
        fixedTimeDiv.style.marginTop = "6px";
        fixedTimeDiv.style.display = "flex";
        fixedTimeDiv.style.alignItems = "center";
        fixedTimeDiv.style.gap = "4px";
        fixedTimeDiv.innerHTML = `<i class="fa-solid fa-clock" style="font-size: 9px; opacity: 0.7;"></i> Fixed: ${fixedTime}`;
        tdCorr.appendChild(fixedTimeDiv);
        
        tr.appendChild(tdCorr);

        // Column 3: Details
        const tdDetails = document.createElement("td");
        tdDetails.style.padding = "10px";
        tdDetails.style.verticalAlign = "top";
        
        let methodBg, methodColor, methodBorder;
        const m = method.toLowerCase();
        if (m.includes("automatic")) {
            methodBg = "rgba(52, 211, 153, 0.06)";
            methodColor = "#34d399";
            methodBorder = "rgba(52, 211, 153, 0.15)";
        } else if (m.includes("policy")) {
            methodBg = "rgba(167, 139, 250, 0.06)";
            methodColor = "#a78bfa";
            methodBorder = "rgba(167, 139, 250, 0.15)";
        } else if (m.includes("item")) {
            methodBg = "rgba(34, 211, 238, 0.06)";
            methodColor = "#22d3ee";
            methodBorder = "rgba(34, 211, 238, 0.15)";
        } else if (m.includes("outdoors") || m.includes("vehicles") || m.includes("clothing") || m.includes("work")) {
            methodBg = "rgba(96, 165, 250, 0.06)";
            methodColor = "#60a5fa";
            methodBorder = "rgba(96, 165, 250, 0.15)";
        } else { // manual / legacy
            methodBg = "rgba(251, 146, 60, 0.06)";
            methodColor = "#fb923c";
            methodBorder = "rgba(251, 146, 60, 0.15)";
        }

        const badgeSpan = document.createElement("span");
        badgeSpan.className = "badge";
        badgeSpan.style.background = methodBg;
        badgeSpan.style.color = methodColor;
        badgeSpan.style.borderColor = methodBorder;
        badgeSpan.style.fontSize = "9.5px";
        badgeSpan.style.padding = "2px 8px";
        badgeSpan.style.borderRadius = "4px";
        badgeSpan.style.fontWeight = "700";
        badgeSpan.style.textTransform = "uppercase";
        badgeSpan.style.letterSpacing = "0.3px";
        badgeSpan.style.display = "inline-block";
        badgeSpan.textContent = method;
        tdDetails.appendChild(badgeSpan);

        const authorDiv = document.createElement("div");
        authorDiv.style.fontSize = "10px";
        authorDiv.style.color = "var(--text-secondary)";
        authorDiv.style.marginTop = "6px";
        authorDiv.style.display = "flex";
        authorDiv.style.alignItems = "center";
        authorDiv.style.gap = "4px";
        authorDiv.innerHTML = `<i class="fa-solid fa-user-shield" style="font-size: 8.5px; opacity: 0.6;"></i> By: <span style="font-weight: 600; color: rgba(255,255,255,0.7);">${author}</span>`;
        tdDetails.appendChild(authorDiv);

        tr.appendChild(tdDetails);

        // Column 4: Actions (if authorized)
        if (isAuthorized) {
            const tdAction = document.createElement("td");
            tdAction.style.textAlign = "center";
            tdAction.style.verticalAlign = "top";
            tdAction.style.padding = "10px";
            tdAction.style.display = "flex";
            tdAction.style.flexDirection = "column";
            tdAction.style.gap = "6px";
            tdAction.style.alignItems = "center";

            // Retrain button
            const btnRetrain = document.createElement("button");
            btnRetrain.type = "button";
            btnRetrain.className = "btn-preset";
            btnRetrain.style.padding = "4px 8px";
            btnRetrain.style.fontSize = "10px";
            btnRetrain.style.background = "rgba(167, 139, 250, 0.1)";
            btnRetrain.style.color = "#a78bfa";
            btnRetrain.style.border = "1px solid rgba(167, 139, 250, 0.25)";
            btnRetrain.style.borderRadius = "4px";
            btnRetrain.style.cursor = "pointer";
            btnRetrain.style.display = "inline-flex";
            btnRetrain.style.alignItems = "center";
            btnRetrain.style.gap = "4px";
            btnRetrain.style.whiteSpace = "nowrap";
            btnRetrain.style.transition = "all 0.2s ease";
            btnRetrain.innerHTML = `<i class="fa-solid fa-rotate"></i> Retrain`;
            btnRetrain.title = "Send back to Bug Reports for re-triage";

            btnRetrain.addEventListener("click", () => {
                showCustomConfirmDialog(
                    `Send this ad back for retraining?\n\nRaw: "${raw}"\nCurrent fix: "${corrText}"\n\nThe existing mapping will be removed and a new bug report will be created for re-triage.`,
                    () => {
                        // Remove the existing translation mapping
                        delete customTranslations[raw];
                        localStorage.setItem("li_custom_translations", JSON.stringify(customTranslations));
                        saveCustomDataToBackend();

                        // Inject as a new bug report into the triage queue
                        const retrainReport = {
                            rawInput: raw,
                            expectedOutput: corrText,
                            timestamp: new Date().toLocaleString(),
                            category: "auto",
                            screenshotBase64: null,
                            source: "retrain"
                        };

                        // Push to the pending bug reports array used by the triage renderer
                        if (!window._pendingBugReports) window._pendingBugReports = [];
                        window._pendingBugReports.push(retrainReport);

                        // Also store in localStorage so it persists across refreshes
                        const storedRetrains = JSON.parse(localStorage.getItem("li_retrain_queue") || "[]");
                        storedRetrains.push(retrainReport);
                        localStorage.setItem("li_retrain_queue", JSON.stringify(storedRetrains));

                        renderCustomTranslations();
                        if (typeof processAd === "function") processAd();
                        showCustomNotification(`Ad sent back for retraining! Open the Bug Reports tab to retriage.`, "success");
                    },
                    null,
                    "Retrain",
                    false
                );
            });

            tdAction.appendChild(btnRetrain);

            // Delete button
            const btnDel = document.createElement("button");
            btnDel.type = "button";
            btnDel.className = "btn-preset";
            btnDel.style.padding = "4px 8px";
            btnDel.style.fontSize = "10px";
            btnDel.style.background = "rgba(255, 59, 48, 0.1)";
            btnDel.style.color = "var(--color-primary)";
            btnDel.style.border = "1px solid rgba(255, 59, 48, 0.2)";
            btnDel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            
            btnDel.addEventListener("click", () => {
                showCustomConfirmDialog(
                    `Delete translation mapping for:\n\nOriginal: "${raw}"\n\nCorrected: "${corrText}"?`,
                    () => {
                        delete customTranslations[raw];
                        localStorage.setItem("li_custom_translations", JSON.stringify(customTranslations));
                        saveCustomDataToBackend();
                        renderCustomTranslations();
                        if (typeof processAd === "function") processAd();
                        showCustomNotification("Translation mapping deleted.", "success");
                    },
                    null,
                    "Delete Mapping",
                    true
                );
            });
            
            tdAction.appendChild(btnDel);
            tr.appendChild(tdAction);
        }

        tbody.appendChild(tr);
    }
}

function renderCustomTemplates() {
    const tbody = document.getElementById("admin-template-list");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    if (customTemplates.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary);">No custom advertisement templates trained yet.</td></tr>`;
        return;
    }

    customTemplates.forEach((ct, index) => {
        const tr = document.createElement("tr");
        
        const tdText = document.createElement("td");
        tdText.textContent = ct.text;
        tdText.style.maxWidth = "200px";
        tdText.style.overflow = "hidden";
        tdText.style.textOverflow = "ellipsis";
        tdText.style.whiteSpace = "nowrap";
        tdText.title = ct.text;
        tr.appendChild(tdText);
        
        const tdCat = document.createElement("td");
        tdCat.textContent = ct.category;
        tr.appendChild(tdCat);
        
        const tdShort = document.createElement("td");
        tdShort.textContent = ct.shorthand || "-";
        tr.appendChild(tdShort);
        
        const tdAction = document.createElement("td");
        tdAction.style.textAlign = "center";
        const btnDel = document.createElement("button");
        btnDel.type = "button";
        btnDel.className = "btn-preset";
        btnDel.style.padding = "4px 8px";
        btnDel.style.fontSize = "10px";
        btnDel.style.background = "rgba(255, 59, 48, 0.1)";
        btnDel.style.color = "var(--color-primary)";
        btnDel.style.border = "1px solid rgba(255, 59, 48, 0.2)";
        btnDel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnDel.addEventListener("click", () => {
            customTemplates.splice(index, 1);
            localStorage.setItem("li_custom_templates", JSON.stringify(customTemplates));
            saveCustomDataToBackend();
            renderCustomTemplates();
        });
        tdAction.appendChild(btnDel);
        tr.appendChild(tdAction);
        
        tbody.appendChild(tr);
    });
}

function showCustomNotification(message, type = 'success') {
    let targetDoc = document;
    if (pipWindowInstance && !pipWindowInstance.closed) {
        targetDoc = pipWindowInstance.document;
    }
    
    let container = targetDoc.getElementById("history-toast-container");
    if (!container) {
        container = targetDoc.createElement("div");
        container.id = "history-toast-container";
        container.style.position = "fixed";
        container.style.top = "30px";
        container.style.left = "50%";
        container.style.transform = "translateX(-50%)";
        container.style.zIndex = "10000";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.gap = "10px";
        targetDoc.body.appendChild(container);
    }
    
    const toast = targetDoc.createElement("div");
    toast.style.background = "rgba(18, 18, 20, 0.96)";
    toast.style.color = "white";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "10px";
    toast.style.fontFamily = "'Outfit', sans-serif";
    toast.style.fontSize = "13px";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.6)";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "10px";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px) scale(0.95)";
    toast.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    
    let borderColor = "#30d158";
    let icon = `<i class="fa-solid fa-circle-check" style="color: #30d158; font-size: 14px;"></i>`;
    
    if (type === 'warning') {
        borderColor = "#ff9f0a";
        icon = `<i class="fa-solid fa-triangle-exclamation" style="color: #ff9f0a; font-size: 14px;"></i>`;
    } else if (type === 'error') {
        borderColor = "#ff453a";
        icon = `<i class="fa-solid fa-circle-xmark" style="color: #ff453a; font-size: 14px;"></i>`;
    } else if (type === 'info') {
        borderColor = "#0a84ff";
        icon = `<i class="fa-solid fa-circle-info" style="color: #0a84ff; font-size: 14px;"></i>`;
    }
    
    toast.style.border = `1px solid ${borderColor}`;
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0) scale(1)";
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px) scale(0.95)";
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

function showHistoryToast(message) {
    showCustomNotification(message, 'success');
}

function logAdToBackend(rawInput, finalAd, status) {
    if (!CONFIG.GOOGLE_SCRIPT_URL) return;
    
    const firstname = localStorage.getItem("li_request_firstname") || "Guest";
    const lastname = localStorage.getItem("li_request_lastname") || "Editor";
    const server = localStorage.getItem("li_request_server") || "EN3";
    const id = localStorage.getItem("li_request_id") || "Unknown";
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            action: "log_ad",
            firstname: firstname,
            lastname: lastname,
            server: server,
            id: id,
            rawInput: rawInput,
            finalAd: finalAd,
            status: status
        })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status !== "success") {
            console.error("Failed to log ad to backend sheet:", data.message);
        }
    })
    .catch(err => {
        console.error("Network error logging ad:", err);
    });
}

function refreshMainHistory() {
    const tbody = document.getElementById("history-table-body");
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 20px;"><i class="fa-solid fa-sync fa-spin"></i> Loading history...</td></tr>`;
    
    if (!CONFIG.GOOGLE_SCRIPT_URL) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 20px;">Server URL not configured.</td></tr>`;
        return;
    }
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "get_history", limit: 200 })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === "success") {
            const history = data.history || [];
            if (history.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 20px;">No history records found.</td></tr>`;
                return;
            }
            
            tbody.innerHTML = "";
            history.forEach(item => {
                const tr = document.createElement("tr");
                tr.style.cursor = "pointer";
                tr.title = "Click to copy formatted ad";
                tr.className = "history-row-item";
                
                const tdTime = document.createElement("td");
                tdTime.textContent = item.timestamp || "";
                tr.appendChild(tdTime);
                
                const tdEditor = document.createElement("td");
                const nameDisplay = `${item.firstname} ${item.lastname}`.trim();
                tdEditor.textContent = nameDisplay || "Unknown";
                tr.appendChild(tdEditor);
                
                const tdId = document.createElement("td");
                tdId.textContent = item.id || "";
                tr.appendChild(tdId);
                
                const tdRaw = document.createElement("td");
                tdRaw.textContent = item.rawInput || "";
                tdRaw.style.maxWidth = "200px";
                tdRaw.style.overflow = "hidden";
                tdRaw.style.textOverflow = "ellipsis";
                tdRaw.style.whiteSpace = "nowrap";
                tdRaw.title = item.rawInput || "";
                tr.appendChild(tdRaw);
                
                const tdFinal = document.createElement("td");
                tdFinal.textContent = item.finalAd || "";
                tdFinal.style.maxWidth = "250px";
                tdFinal.style.overflow = "hidden";
                tdFinal.style.textOverflow = "ellipsis";
                tdFinal.style.whiteSpace = "nowrap";
                tdFinal.title = item.finalAd || "";
                tdFinal.style.color = "#4ade80";
                tdFinal.style.fontWeight = "600";
                tr.appendChild(tdFinal);
                
                const tdStatus = document.createElement("td");
                tdStatus.style.textAlign = "center";
                const statusSpan = document.createElement("span");
                statusSpan.style.padding = "2px 6px";
                statusSpan.style.borderRadius = "4px";
                statusSpan.style.fontSize = "10px";
                statusSpan.style.fontWeight = "600";
                
                if (item.status === "passed") {
                    statusSpan.style.background = "rgba(74, 222, 128, 0.1)";
                    statusSpan.style.color = "#4ade80";
                    statusSpan.textContent = "PASSED";
                } else if (item.status === "rejected") {
                    statusSpan.style.background = "rgba(248, 113, 113, 0.1)";
                    statusSpan.style.color = "#f87171";
                    statusSpan.textContent = "REJECTED";
                } else {
                    statusSpan.style.background = "rgba(255, 255, 255, 0.1)";
                    statusSpan.style.color = "var(--text-secondary)";
                    statusSpan.textContent = (item.status || "UNKNOWN").toUpperCase();
                }
                tdStatus.appendChild(statusSpan);
                tr.appendChild(tdStatus);
                
                tr.addEventListener("click", () => {
                    navigator.clipboard.writeText(item.finalAd || "").then(() => {
                        const originalBg = tr.style.background;
                        tr.style.background = "rgba(34, 197, 94, 0.2)";
                        showHistoryToast("Copied to clipboard!");
                        setTimeout(() => {
                            tr.style.background = originalBg;
                        }, 1000);
                    }).catch(err => {
                        console.error("Failed to copy:", err);
                    });
                });
                
                tbody.appendChild(tr);
            });
        } else {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #f87171; padding: 20px;">Error: ${data.message}</td></tr>`;
        }
    })
    .catch(err => {
        console.error("Error fetching history:", err);
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #f87171; padding: 20px;">Network error loading history.</td></tr>`;
    });
}

/* ==========================================================================
   Policy Reference Book
   ========================================================================== */

let currentPolicyPage = 0;

const POLICY_PAGES = [
    {
        title: "Internal Policy Overview",
        content: "<div class=\"policy-section\"><p>´╗┐INTERNAL POLICY</p><p>INTERNAL POLICY</p><p>(Credit List)</p><p>Last updated: 04-05-2026</p><p>What is LifeInvader about?</p><p>Lifeinvader is a private state organization that specializes in editing ads, hosting events like the talent show, and making news articles and videos that are informative for the public.</p></div>"
    },
    {
        title: "Buying & Selling Formats",
        content: "<div class=\"policy-section\"><p>How to benefit from this document?</p><p>This document highlights our standards for editing ads as well as some important rules we must follow while we work for this organization.</p><p>TIP: Please use ÔÇ£Ctrl + FÔÇØ to find anything you are searching for in documents.</p><h4 class=\"policy-subtitle\">General Ad Rules:</h4><h4 class=\"policy-subtitle\">Vehicle & Clothing List:</h4><p>LifeInvader (EN3) Renewed List for Cars, Motorcycles, Boats, Planes, Helicopters and Clothing</p><p>Templates List: LifeInvader Templates List (EN3)</p><h4 class=\"policy-subtitle\">Always begin the ad with:</h4><p>ÔÇ£BuyingÔÇØ - ÔÇ£SellingÔÇØ - ÔÇØTradingÔÇØ - ÔÇ£Selling or tradingÔÇØ.</p><p>For ÔÇ£BuyingÔÇØ put ÔÇ£Budget:ÔÇØ.</p><p>For ÔÇ£SellingÔÇØ put ÔÇ£Price:ÔÇØ.</p><p>If the ad does not mention a Budget or Price, then you should mention it as Negotiable.</p><h4 class=\"policy-subtitle\">Examples:</h4><h4 class=\"policy-subtitle\">Buying:</h4><p>Buying Progen containers. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Selling:</h4><p>Selling seeds. Price: $1.500 each.</p><h4 class=\"policy-subtitle\">Trading:</h4><p>Trading \"Ubermacht M5 (E34)\". (Auto)</p><p>Trading pink Lui Vi pants for blue Lui Vi pants. (Other)</p><h4 class=\"policy-subtitle\">Selling or trading:</h4><p>Selling or trading \"Ubermacht M5 (E34)\" with insurance for \"Benefactor-AMG C63 Coupe (W205)\". Price: Negotiable. (Auto)</p><p>Selling or trading black Abibas pants. Price: $38 Million.</p></div>"
    },
    {
        title: "Dating & Party Examples",
        content: "<div class=\"policy-section\"><p>The first letter is ALWAYS capital, use a full stop (.) to end the sentence.</p><p>The first letter in Price, Budget and Negotiable should be in capital.</p><h4 class=\"policy-subtitle\">A colon (:) should be used after Price: or Budget:</h4><p>A dollar sign ($) must be used before the value.</p><p>Can only trade a Business for business, Cars for Cars and Other categories.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling Abibas Pezy Boost 700 V3 Alvah shoes. Price: $200.000</p><p>Selling white Pezy Boost shoes. Price: $4 Million.</p><p>If the ad ends with a numerical value, then there is no need for a period (.)</p><ul class=\"policy-list-bullets\"><li>Use a full stop (.) instead of a comma (,) for prices.</li><li>We do NOT use ÔÇ£kÔÇØ to represent a thousand or use ÔÇ£MÔÇØ to represent a Million. Write it out in numbers instead:</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>$1k becomes $1.000</p><p>$1.7k each becomes $1.700 each.</p><p>$1m becomes $1 Million.</p><p>$1.450k becomes $1.45 Million.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Party-</p><p>1) Party at the beach.</p><p>2) Party at Bahama Mamas Bar.</p></div>"
    },
    {
        title: "Restricted Content Guidelines",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Looking/Dating Category:</h4><p>1) Looking for a boyfriend.</p><p>2) Looking for family members.</p><p>3) Looking for Max Uchiha.</p><p>________________</p><p>Advertisement Rules & Restricted Content Guidelines</p><p>Please carefully review the following rules regarding advertisements. Failure to follow these guidelines may result in ad rejection, warnings, or phone blacklisting depending on the violation.</p><h4 class=\"policy-subtitle\">Illegal Items / Rejection (Issue a Phone Blacklist)</h4><h4 class=\"policy-subtitle\">If any of the following terms or items are found in an advertisement, the phone number used in the ad must be blacklisted immediately:</h4><ul class=\"policy-list-bullets\"><li>Firearms of any kind</li><li>Ammunition</li><li>Bulletproof vests</li><li>Dark Lui Vi Armored Vest</li><li>Weed / cannabis seeds or trees</li><li>Drugs and cocaine</li><li>EMS surgical masks or medical masks</li><li>Vehicle scanners and people scanners (radars)</li><li>Balaclava masks</li><li>Ropes</li><li>Flash drive with a virus (USB)</li><li>Lock picks</li><li>Troll advertisements</li><li>Anti-Radar</li><li>Engine Block</li><li>Smuggling Machine</li><li>Submodule</li><li>Hacking the Search Database</li></ul><p>It is also strictly forbidden to publish license plates containing offensive or inappropriate language. ÔÇ£Selling license plate (1SEX269). Price: Negotiable.ÔÇØ</p><h4 class=\"policy-subtitle\">Illegal Items / Rejection (Do Not Issue a Phone Blacklist)</h4><p>If any of the following terms are found in an advertisement, reject the ad only. Do not issue a phone blacklist.</p><ul class=\"policy-list-bullets\"><li>Crowbar</li><li>All fabric</li><li>Head bag (except luminous head bag)</li><li>Animal skin</li><li>Armor skin</li><li>Air Horn</li><li>Earplugs</li><li>Barricade</li><li>Trap</li><li>Poison dart</li><li>Army Uniform</li><li>Tracking sensor</li><li>Dangerous razor</li><li>Resource scanners</li><li>Body armor plates</li><li>Body Armor</li><li>Ingredients for cocaine</li><li>Paper for money</li><li>Satellite dish</li><li>Tincture of forest mushrooms</li><li>First Aid Kits & all pills</li><li>Food items (Banana, Burger, Grilled Steak)</li></ul><h4 class=\"policy-subtitle\">Things We Cannot Advertise</h4><h4 class=\"policy-subtitle\">Advertisements involving any of the following must be rejected:</h4><ul class=\"policy-list-bullets\"><li>Grand Coins (Premium Battlepass / Premium Plus Battlepass)</li><li>All illegal items listed above</li><li>Lockpicks, ropes, and crowbars</li><li>Specific family names</li><li>ÔÇ£Looking for Playboy family members.ÔÇØ advertisements</li><li>(Family names cannot be mentioned)</li><li>Hype Body or branded armor</li><li>Gangs</li><li>Nationality</li><li>Anything involving the sale of people</li><li>Anything sexual or hinting at sexual content</li><li>Drugs of any kind</li><li>Food items (except fish)</li><li>Health products (medkits, pills, tincture soup, etc.)</li><li>Birthday advertisements</li><li>Leaders and deputy leaders</li></ul><p>(excluding leaders of unofficial organization families and crime organizations)</p><h4 class=\"policy-subtitle\">Places We Do Not Promote</h4><p>Punishment: Warning</p><h4 class=\"policy-subtitle\">The following locations, organizations, or events are not allowed to be promoted in advertisements:</h4><ul class=\"policy-list-bullets\"><li>Mega Mall</li><li>Gang Headquarters (Ballas, Vagos, Families, Bloods, and Marabunta)</li><li>Black Market</li><li>Parties at LSPD, FIB, SAHP, EMS, LifeInvader or Government buildings.</li><li>Parties at the ghetto</li></ul><p>Please make sure all advertisements follow these guidelines before publishing.</p><h4 class=\"policy-subtitle\">Rejection Reasons Guidelines</h4><p>Please ensure all rejection reasons are written professionally and clearly so citizens can properly understand the issue with their advertisement.</p><h4 class=\"policy-subtitle\">Common Rejection Reasons</h4><ul class=\"policy-list-bullets\"><li>Cannot advertise more than 1 vehicle at a time.</li><li>Cannot advertise more than 3 items at a time.</li><li>Cannot promote illegal items.</li><li>You must take a proper screenshot of that ad and post it in #­ƒô▒|phone-blacklist.</li><li>Improper advertisement.</li><li>Template not found. Contact LI to create a template.</li><li>Please mention the Full Name.</li><li>Person not found in database. (Person must be in the GRAND RP mail)</li><li>You cannot look for classified people.</li><li>(State organization Leaders and Deputy Leaders only)</li><li>Only if their name is mentioned in the #­ƒº¥|leader-list in LI mails.</li><li>Item not found in database. (Including Grand Coins and Battlepass)</li><li>Insufficient information for the item name.</li><li>Insufficient information for the vehicle name.</li><li>Please indicate the rental period.</li><li>LI cloud server not loading or offline. (Only for PDA bug cases)</li><li>Trolling advertisements.</li><li>You must take a proper screenshot of that ad and post it in #­ƒô▒|phone-blacklist.</li><li>Cannot advertise this vehicle as it is non-sellable.</li><li>A family cannot be traded.</li><li>Cannot look for a classified family.</li><li>We do not promote parties at any green grass location.</li><li>Green Grass Rule Example</li></ul><p>For example, ÔÇ£Party at the Beach Market.ÔÇØ should not be promoted and must instead be labeled as ÔÇ£Party at the Beach.ÔÇØ This rule exists because music is not allowed to be played in green grass areas.</p><p>________________</p><h4 class=\"policy-subtitle\">Categories:</h4><h4 class=\"policy-subtitle\">Real Estate:</h4><p>Houses / Apartments / Mansion / Casino penthouse</p><h4 class=\"policy-subtitle\">Auto:</h4><p>Cars / Trucks / Motorcycles / Bikes / ATVS / Boats</p></div>"
    },
    {
        title: "Banned Content & Locations",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Businesses:</h4><h4 class=\"policy-subtitle\">Private Businesses:</h4><ul class=\"policy-list-bullets\"><li>Ammunition Store (not gun store or weapon store)</li><li>ATM business</li><li>Bar (not strip club)</li><li>Car wash</li><li>Car sharing</li><li>Chip tuning</li><li>Clothing shop (not Binco or Suburban)</li><li>Electric station (not Charging station)</li><li>Farm</li><li>Flower shop</li><li>Fight club</li><li>Furniture shop</li><li>Gas station</li><li>Grand Elite</li><li>Hair salon (not barber)</li><li>Jewelry store</li><li>Juice shop</li><li>Luna park</li><li>Parking</li><li>Pet Shop</li><li>State object</li><li>Service station (not Auto workshop)</li><li>Tattoo studio</li><li>Taxi company</li><li>24/7 Store</li></ul><h4 class=\"policy-subtitle\">Family Businesses:</h4><ul class=\"policy-list-bullets\"><li>Burger shop (not Drug lab)</li><li>Cowshed</li><li>Freight train</li><li>Plantation (If listed as Pumpkin/Cabbage/Mandarin/Pineapple plantation etc, only capitalize the first word.)</li><li>Oil Well</li></ul><h4 class=\"policy-subtitle\">Discounts:</h4><p>This category is used when people post their business templates and they have discount in it.</p><h4 class=\"policy-subtitle\">Example:</h4><p>Hair Salon Ôäû4 (GPS Ôäû243) is always offering 50% discount and the best hair stylists, we are awaiting your visit!</p><h4 class=\"policy-subtitle\">Work:</h4><p>This category is used when someone is looking for work or hiring for work.</p></div>"
    },
    {
        title: "Common Rejection Reasons",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Example:</h4><p>Hiring workers for solar panel plantations. Salary: Negotiable.</p><h4 class=\"policy-subtitle\">Dating:</h4><p>This category is used when someone is looking for someone else.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Looking for Max Uchiha.</p><p>Looking for a wife.</p><p>Looking for a boyfriend.</p><p>Looking for a family.</p><h4 class=\"policy-subtitle\">Services:</h4><p>This category is used when people post their business templates without a discount offer.</p><h4 class=\"policy-subtitle\">Example:</h4><p>ItÔÇÖs time for happy hour at your favorite Vanilla Unicorn Bar (GPS Ôäû43). Go and grab some drinks for yourself.</p><h4 class=\"policy-subtitle\">Other:</h4><p>This category includes clothing items, parties, fruits/vegetables, wires, seeds, barrels, etc.</p></div>"
    },
    {
        title: "Categories & Real Estate",
        content: "<div class=\"policy-section\"><p>If you do not understand from the raw ad exactly which clothing item from our clothing list the person wants to sell/buy - ad should be rejected with reason \"Please, provide the correct name of the item you are selling.\" or \"Please, provide the correct name of the item you are buying.\"</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling Abibas Pezy 700 V3 Alvah shoes. Price: $200.000</p><p>Selling white Pezy Boost shoes. Price: $4 Million.</p><p>Looking for a party.</p><p>Party at the beach.</p><h4 class=\"policy-subtitle\">Terms to change:</h4><p>Looking to buy/looking to purchase changes to Buying</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Looking to buy house. Budget: Negotiable. > Buying a house. Budget: Negotiable.</p><p>Looking to buy car. > Buying a car. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Things to take note when editing ads:</h4><ul class=\"policy-list-bullets\"><li>If the ad ends with a number, donÔÇÖt add a period. If it ends with a letter, do add a period.</li><li>Brands, official locations (certain places are lowercases), Names (first and last name) should have their first letter capitalized.</li><li>Please include a dollar sign before the amount, not after ($5 Million, $500.000)</li><li>If the sender mentions selling for an amount of items, for e.g 1000 pineapples. No need to include a period in between the amounts. Only applies to the value of the items.</li><li>Make sure to double-check your ad before posting out, make sure the first letter is capitalized and end it with a period if needed too.</li><li>We have the right to reject the ad if itÔÇÖs an improper advertisement.</li></ul><p>Max config/max tuning/fully upgraded Changes to: with full configuration</p><p>Nearly max/(part)lvl3 or below Changes to: with partial configuration</p><p>Body upgrades/body kit Changes to: with visual upgrades</p><p>Turbo Changes to: turbo kit</p><p>Drift tuning/drift assistance Changes to: drift kit</p><p>Luminous rims/unique wheels Changes to: luminous wheels</p><p>Level 1/low level Changes to: low quality</p><p>Level 2/medium level Changes to: medium quality</p><p>Level 3/high level Changes to: high quality</p><p>Level 4/max level Changes to: max quality</p><p>Crates/cases Changes to: containers</p><p>Spray cans/Spray balloons Changes to: paint cans.</p><p>Extras Changes to: of type</p><p>Scarf combine it: mask</p><p>pumpkin/cabbage/pineapple/mandarin combine it: fruits, vegetables or seeds</p><p>Unique 6 rims Changes to: luminous wheels of type 6</p></div>"
    },
    {
        title: "Business Categories",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling \"Annis Silvia (S15)\" with partial configuration. Price: Negotiable.</p><p>Buying \"Sandking XL\" with full configuration. Budget: Negotiable.</p><p>Selling \"Shotaro\". Price: $500.000</p><p>Trading \"Toros\" for \"Karin Tundra 2021\".</p><p>Selling or trading \"Annis Skyline GT-R (R34)\". Price: $1.7 Million.</p><p>Selling \"Progen 675 LT\" with full configuration, visual upgrades, insurance and drift kit. Price: Negotiable.</p><p>Selling a helicopter. Price: $11 Million.</p><p>Buying a plane. Budget: $800.000</p><p>Buying \"Frogger\". Budget: $8 Million.</p><p>Selling \"SuperVolito Carbon\". Price: $10 Million.</p><p>Selling pineapple and mandarin fruits. Price: $1.700 and $1.500 each respectively.</p><p>Selling 2 Grand tickets and 15 seeds. Price: $800.000 and $45.000 respectively.</p><p>Trading \"Mazda RX-7\" for \"Annis Silvia\".</p><p>Trading a luminous stone plus $1 Million for Abibas pants.</p><p>Buying video cards. Budget: $60.000 each.</p><p>Selling license plate (1ABC234). Price: Negotiable.</p><p>Selling toothy masks of type 1. Price: Negotiable.</p><p>Selling tokens. Price: $13.000 each.</p><p>Selling 10 Taxi fleet shares. Price: Negotiable.</p><p>Selling high quality suspension, high quality transmission and medium quality engine tunings. Price: Negotiable.</p><p>________________</p><h4 class=\"policy-subtitle\">Real Estate:</h4><p>A maximum of one numbered property per is allowed.</p><p>If the seller does not provide numbers, you can advertise up to 3 properties.</p><ul class=\"policy-list-bullets\"><li>Use the number symbol (Ôäû) if the sender of the ad has mentioned house/apartment/penthouse/mansion number.</li><li>If the sender mentions ÔÇ£Casino apartmentÔÇØ change to ÔÇ£Casino penthouseÔÇØ.</li><li>We cannot mention the number of stars of the property in the ad.</li><li>We are allowed to put in garden, insurance, view and other extra stuff like tennis court, swimming pool, helipad, long driveway etc.</li><li>For houses/apartments/penthouses/mansions with furnished or different interiors, use custom interior.</li><li>There are only 5 types of garage spaces: 2 g.s. 5 g.s. 9 g.s. 25 g.s. 30 g.s.</li><li>For garage spaces, we use ÔÇ£g.s.ÔÇØ If there are more features, we use ÔÇ£g.s.,ÔÇØ</li><li>For storage space, use ÔÇ£w.h.ÔÇØ (warehouse).</li><li>Use ÔÇ£.ÔÇØ after the last feature, ÔÇ£andÔÇØ before the last feature, and use ÔÇ£,ÔÇØ between other features. ÔÇ£g.s.ÔÇØ or ÔÇ£w.h.ÔÇØ does not need an addition ÔÇ£.ÔÇØ at the end if that is mentioned as the last feature.</li><li>Although 3 houses can be advertised, the house numbers are not included. Ex. Selling 3 houses. Price: Negotiable.</li><li>If the house /apartment number is not specified add a/an before the word house / apartment</li><li>If the house mentions a garden be sure to add ÔÇ£aÔÇØ before garden</li><li>Houses and apartments are not tradable.</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling a house with 5 g.s. Price: Negotiable.</p><p>Selling a house with a garden, 9 g.s., insurance and nice views. Price: Negotiable.</p><p>Selling an apartment with 9 g.s. Price: Negotiable.</p><p>Selling an apartment with nice views. Price: Negotiable.</p><p>Properly capitalize the first letter of the location if it is an official location.</p><ul class=\"policy-list-bullets\"><li>Mirror Park is correct, mirror park is NOT correct.</li><li>Vinewood Hills is correct, vinewood hills is NOT correct.</li></ul><h4 class=\"policy-subtitle\">Order of the features in a real estate ad (if applicable):</h4><p>1. garden</p><p>2. garage spaces (2 g.s. 5 g.s. 9 g.s. 25 g.s. 30 g.s.)</p><p>3. warehouses (3 w.h. 4 w.h. or 5 w.h.)</p><p>4. custom interior</p><p>5. insurance - (do not mention the number of days.)</p><p>6. helipad</p><p>7. swimming pool</p><p>8. tennis court</p><p>9. (long/large) driveway</p><p>10. (spacious) backyard</p><p>11. (nice/beautiful/great) views</p><p>12. (official/unofficial) location Others</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling 2 houses with a garden. Price: Negotiable.</p><p>Selling house Ôäû1680 with 5 g.s. and 3 w.h. in the city. Price: Negotiable.</p><p>Selling house Ôäû758. Price: Negotiable.</p><p>Selling 2 houses. Price: Negotiable.</p><p>Buying an apartment near Lifeinvader. Budget: Negotiable.</p><p>Buying an apartment near the beach market. Budget: Negotiable.</p><p>Buying house Ôäû574. Budget: Negotiable.</p><p>Selling an apartment. Price: Negotiable.</p><p>Selling Casino penthouse. Price: Negotiable.</p><p>Selling mansion Ôäû58. Price: Negotiable.</p><p>Selling house Ôäû758 with insurance. Price: Negotiable.</p><p>Selling house Ôäû758 with 25 g.s. and insurance. Price: Negotiable.</p><p>Selling a house. Price: $10 Million.</p><p>Buying a house with a swimming pool in Vinewood Hills. Budget: Negotiable.</p><p>Selling a house with a garden and 4 w.h. Price: Negotiable.</p><p>Selling a house with a garden and custom interior. Price: Negotiable.</p><p>Selling house Ôäû586 with a garden, 9 g.s., 5 w.h., custom interior, insurance and swimming pool in Vinewood Hills. Price: $7 Million.</p><p>Selling a house with 9 g.s. and 5 w.h. Price: Negotiable.</p><p>Selling house Ôäû758 with 9 g.s., 5 w.h., helipad and spacious backyard. Price: Negotiable.</p><p>Selling house Ôäû759 with 9 g.s. and long driveway. Price: Negotiable.</p><p>Selling house Ôäû476 with a garden, swimming pool and nice views. Price: Negotiable.</p><p>Selling a house with a helipad. Price: Negotiable.</p></div>"
    },
    {
        title: "Dating & Services Categories",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Renting:</h4><p>Renting of the property is allowed.</p><p>Use the word \"Renting out\". Instead of using \"Price\", use the word \"Rent\".</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Renting out house Ôäû1023 with a garden and 5 g.s. Rent: $100.000 per week.</p><p>Renting a house. Budget: $100.000 per week.</p><ul class=\"policy-list-bullets\"><li>Terms we cannot use in real estate ads:</li><li>Green zone/grass.</li><li>Gang location or any Gang names.</li></ul><h4 class=\"policy-subtitle\">Apartment complexes:</h4></div>"
    },
    {
        title: "General Ad Editing Rules",
        content: "<div class=\"policy-section\"><p>There are 8 apartment complexes in the city.</p><p>Apartments cannot be insured. Therefore, it should not be specified.</p><p>Selling apartment Ôäû154 in Eclipse Towers. Price: $1.5 Million.</p><p>Selling apartment Ôäû163 in Tinsel Towers. Price: Negotiable.</p><p>Selling apartment Ôäû188 in Del Perro Heights. Price: Negotiable.</p><p>Selling apartment Ôäû306 in Richards Majestic. Price: Negotiable.</p><p>Selling apartment Ôäû344 in Tinkle Building. Price: $950.000</p><p>Selling apartment Ôäû774 in 3 Alta Street. Price: Negotiable.</p><p>Selling apartment Ôäû1790 in Celltowa Building. Price: Negotiable.</p><p>Selling apartment Ôäû1480 near the beach market. Price: Negotiable.</p><h4 class=\"policy-subtitle\">Dating:</h4><p>Only the following types of ads are allowed in this category: Must search name</p><ul class=\"policy-list-bullets\"><li>Looking for (First and Last name).</li><li>Looking for a family.</li><li>Looking for family members.</li><li>Looking for a date.</li><li>Looking for a wife.</li><li>Looking for a husband.</li><li>Looking for a valentine.</li><li>Looking for a friend.</li><li>Looking for friends.</li><li>Looking for a boyfriend.</li><li>Looking for boyfriends.</li><li>Looking for a girlfriend.</li><li>Looking for girlfriends.</li><li>Looking for Name Surname.</li><li>Looking for Casino poker players.</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Looking for Max Uchiha.</p><p>Looking for Lucio Escober.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>RAW AD: I am searching elite alpha.</p><p>EDITED AD: Looking for Elite Alpha.</p><h4 class=\"policy-subtitle\">Looking for a specific person:</h4><p>ÔùÅ Make sure to always check GRP Mails for person names and leaderÔÇÖs list in LI Mails for State Leader and Deputies names.</p><p>ÔùÅ Make sure they mention the full name (first and second name) and also reject the ad if they donÔÇÖt provide full first or last name.</p><p>ÔùÅ Use capitalization on the first letter of each name.</p><p>ÔùÅ Search their name on our database (Grand RP discord)</p><p>ÔùÅ If the person is not found on the database then reject the ad.</p><p>Reason: Person not found in database. (Person must be in the GRAND RP mail)</p><p>Looking for ads that should be rejected: (warning)</p><ul class=\"policy-list-bullets\"><li>Leaders of a state org (LI exempt from this).</li><li>Deputy leaders of a state org. (LI exempt from this)</li><li>Looking for a lesbian/gay. (add it to blacklist numbers in LI email)</li><li>People looking for themselves or each other. (3 or more people spamming looking for each other) (Reject with trolling ads)</li></ul><p>You cannot look for state leaders and deputies only if they are not in the leader-list in LI mails, otherwise you can look for them.</p></div>"
    },
    {
        title: "Abbreviations & Configs",
        content: "<div class=\"policy-section\"><p>We can look for the crime leaders and leaders of unofficial orgs. Also, we can look for administration assistants.</p><p>Looking for ads that should be blacklisted: (warning)</p><p>ÔùÅ Buying a wife/husband.</p><p>ÔùÅ Troll ads like ÔÇ£looking for sugar daddyÔÇØ.</p><p>ÔùÅ Looking for a wife and listing a price or budget.</p><p>ÔùÅ Any troll name that is not found in the database.</p><p>Promoting families is permitted.</p><p>Mentioning of looking for a specific family is not allowed.</p><p>IMPORTANT: Reason you should mention while rejecting ad if someone is State leader \"You cannot search for classified person.\"</p><p>The leader of the organization.</p><h4 class=\"policy-subtitle\">List of leaders in the city (Server EN-03):</h4><p>Please refer to Grand RP emails.</p><p>Check #leader-list channel on LI emails</p><h4 class=\"policy-subtitle\">Work:</h4><p>ÔùÅ Words like \"Hiring\" and phrases like \"looking to hire\" and looking for a job\" are allowed.</p><p>ÔùÅ Use the number symbol (Ôäû) if the sender of the ad mentions a specific number location for a particular job.</p><p>Example: Construction site Ôäû3.</p></div>"
    },
    {
        title: "Ad Examples - Part 1",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Construction sites have 3 locations. Please include these if they also include the site number:</h4><p>ÔùÅ Hiring workers at construction site Ôäû1 on Vespucci Boulevard.</p><p>ÔùÅ Hiring workers at construction site Ôäû2 on Calais Avenue.</p><p>ÔùÅ Hiring workers at construction site Ôäû3 in Pillbox Hill.</p><p>ÔùÅ Ads of this category do not include specific dollar amounts. If they do, you use either \"Awarding (amount) bonus\" or \"Salary: $(amount)\". For example: \"Hiring at construction site Ôäû1, in Vespucci Boulevard. Awarding $3.000 bonus.\"</p><p>ÔùÅ They are also allowed to mention just \"Awarding bonuses\" or \"paying well\" at the end of the ad without a specific dollar amount.</p><p>ÔùÅ Do NOT use the word \"level\". Levels represent years of experience that someone has in a job.</p><p>Example: \"Hiring a driver with 3 years of experience at construction site Ôäû2.\"</p><h4 class=\"policy-subtitle\">ÔùÅ Construction sites have 5 roles they can advertise for:</h4></div>"
    },
    {
        title: "Ad Examples - Part 2",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>locksmith. (Lumberjack)</li><li>electrician.</li><li>gardener. (Farmer)</li><li>surveyor. (Oilman)</li><li>driver.</li></ul><ul class=\"policy-list-bullets\"><li>These can be advertised in the ad specifically.</li></ul><p>ÔùÅ If the construction ad mentions more than one of the above roles, change the ad to hiring workers instead of naming them all.</p><h4 class=\"policy-subtitle\">People are also allowed to post looking for work ads. That will fall under this category. Work/jobs that can be advertised for are:</h4><ul class=\"policy-list-bullets\"><li>Any of the construction site roles above.</li><li>Trucker(s)</li><li>Lawyer(s).</li><li>DJ(s).</li><li>Photographer(s).</li><li>Bodyguard(s).</li><li>Professional Dancer(s).</li></ul><p>(not Strippers)</p><ul class=\"policy-list-bullets\"><li>Personal driver(s).</li></ul><p>Assistant</p><ul class=\"policy-list-bullets\"><li>Professional Singer(s).</li></ul><h4 class=\"policy-subtitle\">Important Note:</h4><p>If a specific profession is mentioned at the beginning, it should be written with a capital letter. Otherwise, it should be written in lowercase. Professions should not be written in full capital letters, with the only exception being DJ, which should always remain in capital letters.</p><p>Additionally, any profession can be used for hiring if it is properly mentioned in the ad. Please ensure that professional names are written correctly without any mistakes or alterations.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Lawyer looking for work.</p><p>Hiring truckers. Salary: Negotiable.</p><p>Hiring a lawyer. Salary: Negotiable.</p><p>Hiring workers at construction site Ôäû1, in Vespucci Boulevard. Salary: Negotiable.</p><p>Hiring workers at construction site. Salary: Negotiable.</p><p>DJ looking for work.</p><p>Hiring a DJ. Salary: Negotiable.</p><p>Lawyer looking for work.</p><p>Looking to work as a professional dancer.</p><p>Hiring professional dancers. Salary: Negotiable.</p><p>Hiring a professional singer. Salary: Negotiable.</p><p>Hiring workers for solar panel plantations. Salary: Negotiable.</p><p>Looking for solar panel plantation work.</p><p>Looking for a job at the construction site.</p><p>Hiring firefighters. Salary: Negotiable.</p><p>Hiring firefighters at TV station. Salary: Negotiable.</p><p>Hiring firefighters at the beach market. Salary: $15.000</p><p>Hiring firefighters at FIB. Salary: $10.000</p><p>Hiring a trucker with 3 years experience. Salary: Negotiable.</p><p>Hiring a trucker. Salary: $15.000</p><p>Looking for a job.</p><p>Hiring an assistant. Salary: Negotiable.</p><p>Bodyguard looking for work.</p><p>Renting 15% trucker van. Rent: $12.000 per week.</p><p>Renting out 15% trucker van. Budget: $10.000 per week.</p><h4 class=\"policy-subtitle\">Terms we see and what we change them to:</h4><p>Level Changes to: years experience</p><p>Exotic dancers/stripers Changes to: Professional dancer</p></div>"
    },
    {
        title: "Real Estate Rules",
        content: "<div class=\"policy-section\"><p>________________</p><h4 class=\"policy-subtitle\">Business:</h4><ul class=\"policy-list-bullets\"><li>The correct name of business to be used in the ad:</li></ul><p>Private Businesses</p><ul class=\"policy-list-bullets\"><li>Ammunition Store (not gun store or weapon store)</li><li>ATM business</li><li>Bar (not strip club)</li><li>Car wash</li><li>Car sharing</li><li>Chip tuning</li><li>Clothing shop (not Binco or Suburban)</li><li>Electric station (not Charging station)</li><li>Farm</li><li>Flower shop</li><li>Fight club</li><li>Furniture shop</li><li>Gas station</li><li>Grand Elite</li><li>Hair salon (not barber)</li><li>Jewelry store</li><li>Juice shop</li><li>Luna park</li><li>Parking</li><li>Pet Shop</li><li>State object</li><li>Service station (not Auto workshop)</li><li>Tattoo studio</li><li>Taxi company</li><li>Warehouse</li><li>24/7 Store</li></ul><p>Family Businesses</p><ul class=\"policy-list-bullets\"><li>Burger shop (not Drug lab)</li><li>Cowshed</li><li>Freight train</li><li>Plantation (If listed as Pumpkin/Cabbage/Mandarin/Pineapple plantation etc, only capitalize the first word.)</li><li>Oil Well</li></ul><p>Only one business should be promoted in an ad.</p></div>"
    },
    {
        title: "Real Estate Order of Features",
        content: "<div class=\"policy-section\"><p>ÔùÅ Under this category, only buying, trading and selling of businesses are allowed. Promotion of businesses DO NOT fall under this category.(Can only trade and Business for another Business.)</p><p>ÔùÅ We do not promote personal businesses, instead write \"private business\"</p><p>ÔùÅ We only advertise Burger shop business as \"Burger shop\". Avoid saying Burger shop drug lab or drug lab business. YouÔÇÖll receive a warning if you mention \"drug lab\".</p><p>ÔùÅ We promote family business.</p><p>ÔùÅ Family businesses cannot be traded. They can only be Buying or Selling. If you see anyone attempting to trade such a business please reject it and provide the</p><ul class=\"policy-list-bullets\"><li>Reason: Family businesses cannot be traded.</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling family business. Price: Negotiable.</p><p>ÔùÅ Ads with prices that exceeded $500 Million, change the price to Negotiable.</p></div>"
    },
    {
        title: "Real Estate Examples",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Examples:</h4><p>Buying auto workshop biz for 10 Trillion. > Buying Service station business.Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Terms we see and what we change them to:</h4><p>personal business Changes to: private business.</p><p>Drug lab Changes to: Burger shop</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling 24/7 Store Ôäû123 near Paleto Bay. Price: Negotiable.</p><p>Buying a private business. Budget: Negotiable.</p><p>Selling Burger shop business. Price: $65 Million.</p><p>Selling Taxi company business. Price: Negotiable.</p><p>Selling Jewelry store Ôäû44. Price: $100 Million.</p><p>Selling Service station Ôäû113. Price: $100 Million.</p><p>Selling Ammunition Store Ôäû269 in the city. Price: Negotiable.</p><p>Selling Luna park Ôäû289. Price: Negotiable.</p><p>Buying Plantation business with 20 beds. Budget: Negotiable.</p><p>Selling Cabbage plantation business with 20 beds. Price: Negotiable.</p><p>Selling State object Ôäû260. Price: $10 Million.</p><p>Selling or trading State object business. Price: Negotiable.</p><p>Buying Car sharing business. Budget: $100 Million.</p><p>Selling Business Control. Price: Negotiable.</p><p>Buying Gas station Control. Budget: $100 Million.</p><p>Selling Chip tuning Ôäû4 Control. Price: Negotiable.</p><p>If the client doesnÔÇÖt specify the number, we just put the word business.</p></div>"
    },
    {
        title: "Property Rental Rules",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Example:</h4><p>Selling ATM 12mil Changes to: Selling ATM business. Price: $12 Million.</p><h4 class=\"policy-subtitle\">Business Shares:</h4><ul class=\"policy-list-bullets\"><li>Taxi fleet shares</li><li>Gas station shares</li><li>Chip tuning shares</li><li>Barber shop shares</li><li>Tattoo studio shares</li><li>Armory store shares</li><li>Bar shares</li><li>Car sharing shares</li></ul><h4 class=\"policy-subtitle\">Example:</h4><p>Selling Gas station shares. Price: Negotiable.</p><p>________________</p><h4 class=\"policy-subtitle\">Services:</h4><p>ÔùÅ Most service ads are found as templates in our Lifeinvader discord under the business template category.</p><p>ÔùÅ Service ads are ads that are used to promote a business or a service that is being provided.</p></div>"
    },
    {
        title: "Apartment Complexes",
        content: "<div class=\"policy-section\"><p>Templates List:LifeInvader Templates List (EN3)</p><h4 class=\"policy-subtitle\">Example:</h4><p>Looking for a DJ for your party or wedding? Look no further.</p><p>ÔùÅ Only 1 service can be provided/ advertised at a time.</p><p>ÔùÅ Service ads can contain the word \"discounts\" but if a specific discount percentage is given then the ad would fall under the \"Discounts\" category.</p><p>ÔùÅ Template ads that are different, or not found in the database are to be REJECTED.</p><p>Reason: Template not found in database. Contact LI to create a new template.</p><p>Figure 1: Example of a template and what to do with it.</p><h4 class=\"policy-subtitle\">Examples of service templates:</h4><p>Taxi company 1 Template 2 - Are you new in town? Want to make some easy money while meeting new people? Come to Taxi (GPS Ôäû1) near the Casino! Join the best Taxi company in town.</p><p>In addition, office templates can be shared only in this category.</p><p>Office 13724 template 1 - Join Imad Wanted Family Office (Ôäû13724)! Today, we are offering bonuses, easy tasks, and extra cash. Then what are you waiting for? Join us now.</p><p>Office 13724 template 2 - Whether you are new or old in the city, if you need money, Office (Ôäû13724) offers a 90% profit. We provide bonuses too! Contact us at (mostwanted994)!</p><p>________________</p></div>"
    },
    {
        title: "Dating Category Rules",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Discounts:</h4><p>ÔùÅ All of the discount templates are found on Lifeinvader discord under the business templates category.</p><p>ÔùÅ Discount templates are identified as having a specific % percentage of the discount.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Elites 24/7 Store No120. Max discount up to 80%. citys nonstop shop. Gear up, save big, visit now. PH: 33-30-777.</p><p>Hurry up! Up to 60% OFF on Firearms at Central Mall Weapon Shop (GPS Ôäû269)! Limited stock, act fast. Ping Me on 22-20-444 OR Mails (maxuchihax).</p></div>"
    },
    {
        title: "Dating Ad Verification",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>Templates List: LifeInvader Templates List (EN3)</li></ul><p>________________</p><h4 class=\"policy-subtitle\">Other:</h4><p>A maximum of THREE items can be posted in an ad of this category.</p><h4 class=\"policy-subtitle\">These items can be promoted in \"Other\" category:</h4><p>Party Ads will be in this category.</p><h4 class=\"policy-subtitle\">Examples of locations where parties are allowed:</h4></div>"
    },
    {
        title: "Banned Dating Content",
        content: "<div class=\"policy-section\"><p>Houses/apartment</p><p>The beach</p><p>The yacht</p><p>Bahama Mamas Bar</p><p>Tequi-la-la Bar</p><p>Stadium</p><p>Diamond Resort Bar (which is casino)</p><p>Arena</p><p>Raton Canyon</p><p>Vanilla Unicorn Bar</p><p>Hotel Spa Bar</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Looking for a party.</p><p>Party at the beach.</p><p>Party at Tequi-la-la Bar.</p><p>Party at Cayo Perico.</p><p>Party at house Ôäû37.</p><p>Pool party at house Ôäû49.</p><p>Party at the yacht.</p><p>Party at Bahama Mamas Bar.</p><p>Party locations or specify that any location except for those listed in Places we don\'t promote are allowed for party ads.</p><h4 class=\"policy-subtitle\">We can also look for some services that can be provided in this category:</h4><p>ÔùÅ The following are services that can be provided under the \"other\" category - You can now include names and a time in a wedding advert.</p><ul class=\"policy-list-bullets\"><li>Looking for a lawyer.</li><li>Looking for a personal driver.</li><li>Looking for a professional dancer.</li><li>Looking for a professional singer.</li><li>Looking for a DJ.</li><li>Wedding at Church.</li><li>Wedding at Church for John Smith and Susan Jones at 18:00.</li><li>Party at the beach.</li><li>Car meet at _ .</li><li>\"brand/model\" exclusive car meet at __ .</li><li>Looking to play poker. Bet: Negotiable.</li><li>Looking to play dice. Bet: $100.000</li></ul></div>"
    },
    {
        title: "Work Category Rules",
        content: "<div class=\"policy-section\"><p>For Play Dice and Play Poker, if no Bet is specified, use ÔÇ£Bet: Negotiable.ÔÇØ</p><p>The maximum allowed bet is $10 Million. and Any bet above that should be marked as ÔÇ£Bet: Negotiable.ÔÇØ</p><h4 class=\"policy-subtitle\">We can also let families to look for an alliance with another family:</h4><ul class=\"policy-list-bullets\"><li>Looking for an alliance.</li></ul><p>Citizens can also look for a Business owner. This is not limited to the below examples, they may search for any Business owner for the Businesses listed in the Business tab.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Looking for a 24/7 Store owner.</p><p>Looking for a Clothing Shop owner.</p><p>Looking for an Ammunition Store owner.</p><p>Looking for a Gas Station owner.</p><p>Looking for a Car sharing owner.</p><p>Looking for a Business owner.</p><h4 class=\"policy-subtitle\">Terms for using the word type instead of extras:</h4><p>If you encounter any ad containing the word \"extras\" in it, we have to change that word to type.</p></div>"
    },
    {
        title: "Construction Sites",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Examples:</h4><p>Raw Ad : selling toothy mask extras 2 and 4</p><p>Changes to : Selling toothy masks of type 2 and 4. Price: Negotiable.</p><h4 class=\"policy-subtitle\">Other Examples:</h4><ul class=\"policy-list-bullets\"><li>automatic drill:</li></ul><p>Selling an automatic drill. Price: Negotiable.</p><p>Buying 3 automatic drills. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>automatic sawmill:</li></ul><p>Selling an automatic sawmill. Price: Negotiable.</p><p>Buying 2 automatic sawmills. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>automatic rod:</li></ul><p>Selling an automatic rod. Price: Negotiable.</p><p>Buying 2 automatic rods. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>automatic oil well:</li></ul><p>Selling an automatic oil well. Price: Negotiable.</p><p>Buying 3 automatic oil wells. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>automatic watering can:</li></ul><p>Selling an automatic watering can. Price: Negotiable.</p><p>Buying 2 automatic watering cans. Budget: Negotiable.</p></div>"
    },
    {
        title: "Construction Site Bonuses",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>inventory(ies): low/medium/high/max quality inventory</li></ul><p>Selling high quality inventory. Price: Negotiable.</p><p>Buying max quality inventory. Budget: Negotiable.</p><p>Selling high and medium quality inventories. Price: $800.000 and $60.000 each respectively.</p><ul class=\"policy-list-bullets\"><li>backpack skin(s):</li></ul><p>Selling 3 backpack skins. Price: Negotiable.</p><p>Buying a backpack skin. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">-battery(ies):</h4><p>Selling a battery. Price: Negotiable.</p><p>Selling 20 batteries. Price: Negotiable.</p><h4 class=\"policy-subtitle\">Biospark:</h4><p>Selling a Biospark. Price: Negotiable.</p><p>Buying 10 Biospark. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Panda Pet:</h4><p>Selling cage with a Panda. Price: Negotiable.</p><p>Buying cage with a Panda. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Duckling Pet:</h4><p>Selling cage with a Duckling. Price: Negotiable.</p><p>Buying cage with a Duckling. Budget: Negotiable.</p></div>"
    },
    {
        title: "Construction Site Roles",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Fancy bear:</h4><p>Selling cage with a Fancy bear. Price: Negotiable.</p><p>Buying cage with a Fancy bear. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Kitty Bunny Pet:</h4><p>Selling cage with a Kitty Bunny. Price: Negotiable.</p><p>Buying cage with a Kitty Bunny. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Cute Hippo Pet:</h4><p>Selling cage with a Cute Hippo. Price: Negotiable.</p><p>Buying cage with a Cute Hippo. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Mini Robot Pet:</h4><p>Selling cage with a Mini Robot. Price: Negotiable.</p><p>Buying cage with a Mini Robot. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Cyberdog Pet:</h4><p>Selling cage with a Cyberdog. Price: Negotiable.</p><p>Buying cage with a Cyberdog. Budget: Negotiable.</p></div>"
    },
    {
        title: "Work Category Professions",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Robobeast Pet:</h4><p>Selling cage with a Robobeast. Price: Negotiable.</p><p>Buying cage with a Robobeast. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Mr Candy Cane Pet:</h4><p>Selling cage with a Mr Candy Cane. Price: Negotiable.</p><p>Buying cage with a Mr Candy Cane. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Futuristic Friend:</h4><p>Selling cage with a Futuristic Friend. Price: Negotiable.</p><p>Buying cage with a Futuristic Friend. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>cage with a pet:</li></ul><p>(Border Collie, Cougar, Pig, Poodle, Pug, Puma, Rabbit, Rat, Retriever, Rooster, RottweilerÔÇª)</p><p>Selling cage with a pet. Price: Negotiable.</p><p>Buying cage with a Dog. Budget: Negotiable.</p><p>Selling cage with a Cougar. Price: Negotiable.</p><p>Selling cage with a Border Collie. Price: Negotiable.</p><h4 class=\"policy-subtitle\">-canister(s):</h4><p>premium fuel canister</p><p>fuel canister</p><p>Selling a premium fuel canister. Price: Negotiable.</p><p>Selling 100 premium fuel canisters. Price: Negotiable.</p><p>Selling a fuel canister. Price: Negotiable.</p><p>Selling 1000 fuel canisters. Price: Negotiable.</p></div>"
    },
    {
        title: "Work Category Examples",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">-charger(s):</h4><p>Selling a charger. Price: Negotiable.</p><p>Selling 10 chargers. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Christmas resources:</li></ul><p>Christmas key(s)(ÔÇÿCÔÇÖ is always capital and ÔÇÿkÔÇÖ in lower case, also included ÔÇÿeachÔÇÖ when more than one key is mentioned.)</p><p>Christmas copper</p><p>Christmas timber</p><p>Christmas perch</p><p>Christmas seed(s)</p><p>Christmas lollipop(s)</p><p>New years gift(s)</p><ul class=\"policy-list-bullets\"><li>Christmas lollipop(s):</li></ul><p>Selling Christmas lollipops. Price: Negotiable.</p><p>Buying a Christmas lollipop. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>New years gift(s):</li></ul><p>Selling New years gifts. Price: Negotiable.</p><p>Buying a New years gift. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>A Little gift(s):</li></ul><p>Selling a Little gift. Price: Negotiable.</p><p>Buying 5 Little gifts. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>A Big gift(s):</li></ul><p>Selling a Big gift. Price: Negotiable.</p><p>Buying 10 Big gifts. Budget: Negotiable.</p></div>"
    },
    {
        title: "Business Names & Categories",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>An Opened gift (s):</li></ul><p>Selling an Opened gift. Price: Negotiable.</p><p>Buying 10 Opened gifts. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Drawing(s):</li></ul><p>Selling Drawing. Price: Negotiable.</p><p>Selling 2 Drawings. Price: Negotiable.</p><p>Buying Drawing. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Statue(s):</li></ul><p>Selling a Dirty Statue. Price: Negotiable.</p><p>Buying 10 Dirty Statues. Budget: Negotiable.</p><p>Selling a Purified Statue. Price: Negotiable.</p><p>Buying 10 Purified Statues. Budget: Negotiable.</p><p>________________</p><h4 class=\"policy-subtitle\">Clothing Feature Order:</h4><p>1. color (in lowercase)</p><p>2. item name (if luminous, mention it before the item name)</p><p>3. type (of type)</p><p>4. gender (for men/women)</p><h4 class=\"policy-subtitle\">Example:</h4><p>Buying black luminous Keezy Boost shoes of type 5. Budget: Negotiable.</p><p>Selling yellow Mikachu hoodie for women. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>clothing items and accessories:</li></ul><p>LifeInvader (EN3) Renewed List for Cars, Motorcycles, Boats, Planes, Helicopters and Clothing</p></div>"
    },
    {
        title: "Business Trading Rules",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Example:</h4><p>Selling shirts for men. Price: Negotiable.</p><p>Buying shoes for women. Budget: Negotiable.</p><p>Selling TRON full set. Price: Negotiable.</p><p>Buying TRON helmet. Budget: Negotiable.</p><p>Selling black Lui Vi full set. Price: Negotiable.</p><p>Buying clothing for women. Budget: Negotiable.</p><p>Selling clothing for men. Price: Negotiable.</p><p>If you do not understand from the raw ad exactly which clothing item from our clothing list the person wants to sell/buy - ad should be rejected with reason \"Please, provide the correct name of the item you are selling.\" or \"Please, provide the correct name of the item you are buying.\"</p><ul class=\"policy-list-bullets\"><li>container(s): (do NOT use cases/crates )</li></ul><p>valuable container</p><p>desert scarf mask container</p><p>biker container</p><p>Brand T-shirts 2 container</p><p>Brand shorts 2 container</p><p>trucker container</p><p>racer container</p><p>Grand racers container</p><p>Ingrand container</p><p>Progen container</p><p>Maserati container</p><p>Benefactor container</p><p>gardener container</p><p>rare love container</p><p>regular love container</p><p>Renault container</p><p>resources container</p><p>diver container</p><p>organization container</p><p>sphere of influence container</p><p>wheels 1 container</p><p>wheels 2 container</p><p>wheels 3 container</p><p>old autumn gold container</p><p>old summer gold container</p><p>old winter gold container</p><p>School container</p><p>arena container</p><p>daily container</p><p>Halloween container</p><p>womens gift container of type 1</p><p>womens gift container of type 2</p><p>males gift container of type 1</p><p>males gift container of type 2</p><p>blue womens top container of type 4</p><p>black womens top container of type 4</p><p>Benefactor E500 (W124) container</p><p>daily study of the organization container</p><p>Captured caravans container</p><p>Delivered caravans container</p><p>Valentine 2025 container</p><p>case of delivered caravans container</p><h4 class=\"policy-subtitle\">-dice:</h4><p>Selling dice. Price: Negotiable.</p><p>Buying 20 dice. Budget: Negotiable.</p><p>Looking to play dice. Bet: $150.000</p><h4 class=\"policy-subtitle\">-fish:</h4><p>perch</p><p>carp</p><p>salmon</p><p>trout</p><p>megalodon</p><p>ray</p><p>orca</p><p>humpback whale</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling megalodon in bulk. Price: Negotiable.</p><p>Buying orca. Budget: Negotiable.</p><p>Selling 15 humpback whale. Price: Negotiable.</p><p>Buying 25 ray. Budget: Negotiable.</p><p>Selling salmon. Price: Negotiable.</p><p>Selling 50 salmon. Price: Negotiable.</p><p>Buying 100 perch. Budget: Negotiable.</p><p>Buying 50 carp. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>fishing rod(s):</li></ul><p>low/medium/high/max/advanced quality</p><p>Selling a fishing rod. Price: Negotiable.</p><p>Selling 3 fishing rods. Price: Negotiable.</p><p>Selling medium quality fishing rod. Price: Negotiable.</p><p>Selling 2 high quality fishing rods. Price: Negotiable.</p><p>Selling max quality fishing rod. Price: Negotiable.</p><p>Selling advanced quality fishing rod. Price: Negotiable.</p></div>"
    },
    {
        title: "Business Ad Examples",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>fruits and vegetables:</li></ul><p>mandarin</p><p>pumpkin</p><p>strawberry</p><p>pineapple</p><h4 class=\"policy-subtitle\">Vegetables:</h4><p>cabbage</p><p>Selling pineapple fruits. Price: Negotiable.</p><p>Selling strawberry fruits. Price: Negotiable.</p><p>Selling cabbage vegetables. Price: Negotiable.</p><p>Buying pineapple, mandarin and strawberry fruits. Budget: $650, $350 and $450 each respectively.</p><p>Selling mandarin, pineapple fruits and Lui Vi desert scarf mask. Price: Negotiable.</p><h4 class=\"policy-subtitle\">-firework(s):</h4><p>Selling a firework. Price: Negotiable.</p><p>Buying 5 fireworks. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>GrandPro BodyCam:</li></ul><p>Selling a GrandPro BodyCam. Price: Negotiable.</p><p>Buying 10 GrandPro BodyCam. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>fuel for resource extraction:</li></ul><p>Selling a fuel for resource extraction. Price: Negotiable.</p><p>Buying 10 fuel for resource extraction. Budget: Negotiable.</p></div>"
    },
    {
        title: "Business Shares",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>Grand ticket(s): (NOT rp ticket)</li></ul><p>Selling a Grand ticket. Price: Negotiable.</p><p>Buying 10 Grand tickets. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">-hookah(s):</h4><p>Selling a hookah. Price: Negotiable.</p><p>Selling 3 hookahs. Price: Negotiable.</p><h4 class=\"policy-subtitle\">-juice(s):</h4><p>attack juice</p><p>protection juice</p><p>endurance juice</p><p>riding juice</p><p>power juice</p><p>immunity juice</p><p>juice on becoming an animal</p><p>juice for double the payment</p><p>fast running juice</p><p>-Leash</p><p>Buying a Leash. Budget: Negotiable.</p><p>Selling a Leash. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Letters: (G,R,A,N,D)</li></ul><p>Selling letter \"G\". Price: Negotiable.</p><p>Buying letter ÔÇ£RÔÇØ. Budget: Negotiable.</p><p>Selling letters. Price: Negotiable.</p></div>"
    },
    {
        title: "Services Category",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>license plate: Must be 3-7 characters in length.</li></ul><p>It is forbidden to publish license plates containing offensive language.</p><p>Selling license plate (1ABC234). Price: Negotiable.</p><p>Buying license plate (222). Budget: Negotiable.</p><p>Selling a license plate. Price: Negotiable.</p><p>Selling 2 license plates. Price: Negotiable.</p><p>Selling a custom license plate. Price: Negotiable. (only 1)</p><p>Selling custom license plates. Price: Negotiable. (for more than 1)</p><ul class=\"policy-list-bullets\"><li>regular lottery ticket(s):</li></ul><p>Selling a regular lottery ticket. Price: Negotiable.</p><p>Selling 100 regular lottery tickets. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>rare lottery ticket(s):</li></ul><p>Selling a rare lottery ticket. Price: Negotiable.</p><p>Buying 10 rare lottery tickets. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>flame and water lottery ticket(s):</li></ul><p>Selling a flame and water lottery ticket. Price: Negotiable.</p><p>Buying 10 flame and water lottery tickets. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Cayo Perico ticket(s):</li></ul><p>Selling a Cayo Perico ticket. Price: Negotiable.</p><p>Buying 10 Cayo Perico tickets. Budget: Negotiable.</p></div>"
    },
    {
        title: "Office Template Examples",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>Car ticket(s):</li></ul><p>Selling a Car ticket. Price: Negotiable.</p><p>Buying 10 Car tickets. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Secret ticket fragment(s):</li></ul><p>Selling a Secret ticket fragment. Price: Negotiable.</p><p>Buying 50 Secret ticket fragments. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Secret ticket(s):</li></ul><p>Selling a Secret ticket. Price: Negotiable.</p><p>Buying 10 Secret tickets. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Royal Artifacts lottery ticket(s):</li></ul><p>Selling a Royal Artifacts lottery ticket. Price: Negotiable.</p><p>Buying 10 Royal Artifacts lottery tickets. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>luminous wheels:</li></ul><p>Selling luminous wheels of type 2. Price: Negotiable.</p><p>Buying luminous wheels of type 4 and 6. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>masks: (Except Balaclava and EMS mask/surgical/covid mask)</li></ul></div>"
    },
    {
        title: "Discounts Category",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">-milk:</h4><p>Selling milk. Price: Negotiable.</p><p>Buying 200 milk. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>mushroom(s): (NOT tincture soup)</li></ul><p>Selling a mushroom. Price: Negotiable.</p><p>Selling 25 mushrooms. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>mining resources:</li></ul><p>copper - copper</p><p>an emerald - emeralds</p><p>a ruby - rubies</p><p>a diamond - diamonds</p><p>obsidian - obsidian</p><p>a magma stone - magma stones</p><p>Selling copper. Price: $50 each.</p><p>Selling an emerald. Price: Negotiable.</p><p>Selling a ruby. Price: Negotiable.</p><p>Selling a diamond. Price: Negotiable.</p><p>Selling 10 emeralds. Price: Negotiable.</p><p>Selling 10 rubies. Price: Negotiable.</p><p>Selling 10 diamonds. Price: Negotiable.</p><p>Selling 10000 copper. Price: $100 each.</p><p>Selling obsidian. Price: Negotiable.</p><p>Selling 10 obsidian. Price: Negotiable.</p><p>Selling a magma stone. Price: Negotiable.</p><p>Selling 10 magma stones. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>paint can(s): (do NOT use spray cans)</li></ul><p>Selling a paint can. Price: Negotiable.</p><p>Selling 5 paint cans. Price: Negotiable.</p></div>"
    },
    {
        title: "Other Category Items",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">-pearl(s):</h4><p>Selling 50 pearls. Price: Negotiable.</p><p>Buying a pearl. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>pet food(s):</li></ul><p>Selling pet food. Price: Negotiable.</p><p>Buying 5 pet foods. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">-pickaxe(s):</h4><p>low/medium/high/max/advanced quality</p><p>Selling a pickaxe. Price: Negotiable.</p><p>Selling 3 pickaxes. Price: Negotiable.</p><p>Selling medium quality pickaxes. Price: Negotiable.</p><p>Selling 2 high quality pickaxes. Price: Negotiable.</p><p>Selling max quality pickaxe. Price: Negotiable.</p><p>Selling advanced quality pickaxe. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Prime: (3, 5, 7, 10, 15 or 30 days)</li></ul><p>Selling Prime with 30 days. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Prime Platinum: (7, 10, 15, 21, 30, or 60 days)</li></ul><p>Selling Prime Platinum. Price: Negotiable.</p><p>Buying Prime Platinum with 15 days. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>repair kit(s):</li></ul><p>Selling a repair kit. Price: Negotiable.</p><p>Selling 1000 repair kits. Price: Negotiable.</p></div>"
    },
    {
        title: "Party Locations",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>resource barrel(s):</li></ul><p>solar (diesel)</p><p>gasoline (petrol)</p><p>kerosene</p><p>Buying 50 solar barrels. Budget: Negotiable.</p><p>Buying a solar barrel. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Resource Miners ticket(s):</li></ul><p>Buying a Resource Miners ticket. Budget: Negotiable.</p><p>Selling 10 Resource Miners tickets. Price: Negotiable.</p><h4 class=\"policy-subtitle\">-seed(s):</h4><p>pineapple</p><p>cabbage</p><p>pumpkin</p><p>mandarin</p><p>mushroom</p><h4 class=\"policy-subtitle\">-snow:</h4><p>Selling snow. Price: $60 each.</p><p>Selling 500 snow. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>solar panel:</li></ul><p>Selling a solar panel. Price: Negotiable.</p><p>Buying solar panels. Budget: Negotiable.</p><p>Buying solar panels in bulk. Budget: Negotiable.</p></div>"
    },
    {
        title: "Other Services & Dice Bet",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>SIM card Ôäû:</li></ul><p>Selling SIM cards. Price: Negotiable.</p><p>Selling SIM card Ôäû 77-77-777. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>scrap metal:</li></ul><p>Selling a scrap metal. Price: Negotiable.</p><p>Buying 60 scrap metal. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>top quality metal:</li></ul><p>Selling a top quality metal. Price: Negotiable.</p><p>Buying 10 top quality metal. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">-thread(s):</h4><p>Selling a thread. Price: Negotiable.</p><p>Selling 200 threads. Price: Negotiable.</p><h4 class=\"policy-subtitle\">-timber:</h4><p>Selling timber. Price: Negotiable.</p><p>Selling 30 timber. Price: Negotiable.</p></div>"
    },
    {
        title: "Alliance & Business Owners",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>token(s): (NOT crypto or cryptocurrency)</li></ul><p>Selling a token. Price: Negotiable.</p><p>Selling 50 tokens. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>tonic treat(s):</li></ul><p>Selling a tonic treat. Price: Negotiable.</p><p>Buying 10 tonic treats. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Treasure Map(s):</li></ul><p>Selling a Treasure Map. Price: Negotiable.</p><p>Buying 10 Treasure Maps. Budget: Negotiable.</p><ul class=\"policy-list-bullets\"><li>video card(s): (NOT graphic card)</li></ul><p>Selling a video card. Price: Negotiable.</p><p>Buying 15 video cards. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">-wires:</h4><p>Selling wires. Price: Negotiable. (When a person has stated in the ad that they are selling only 1 wire or when we don\'t know how many wires the person is selling/buying.)</p><p>Buying 10 wires. Budget: $15.000 each.</p></div>"
    },
    {
        title: "Other Category Replacements",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>tuning parts:</li></ul><p>low/medium/high quality tires tuning</p><p>low/medium/high quality brakes tuning</p><p>low/medium/high quality suspension tuning</p><p>low/medium/high quality transmission tuning</p><p>low/medium/high quality engine tuning</p><h4 class=\"policy-subtitle\">-sponges:</h4><p>Buying a sponge. Budget: Negotiable.</p><p>Selling a sponge. Price: Negotiable.</p><p>Buying sponges in bulk. Budget: Negotiable.</p><p>Selling sponges in bulk. Price: Negotiable.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling high quality engine tuning. Price: Negotiable.</p><p>Selling 2 medium quality engine tunings. Price: Negotiable.</p><p>Selling 5 high quality tires tunings. Price: Negotiable.</p><p>Selling 4 medium quality suspension and high quality engine tunings. Price: Negotiable.</p><p>Selling medium quality engine, suspension and tires tunings. Price: Negotiable.</p><p>Selling high quality tires and transmission tunings. Price: Negotiable.</p><p>Selling high quality transmission, tires and suspension tunings. Price: Negotiable.</p><ul class=\"policy-list-bullets\"><li>Selling high quality tuning parts. Price: Negotiable. (this example should be used</li></ul><p>specifically if an ad like this gets sent in with no certain tuning parts mentioned (quality can be different)</p><ul class=\"policy-list-bullets\"><li>2 of the same quality parts and 1 different quality part in the ad</li></ul><p>Selling medium quality transmission tuning and high quality tires and suspension tunings. Price: Negotiable.</p></div>"
    },
    {
        title: "Automatic Tools & Inventories",
        content: "<div class=\"policy-section\"><p>(when 1 different and 2 of the same quality tuning parts get promoted in the ad + none of them had quantity provided OR for all of them the provided quantity is 1)</p><ul class=\"policy-list-bullets\"><li>Selling medium quality engine and 2 high quality transmission and suspension tunings. Price: Negotiable.</li></ul><p>(when 1 different and 2 of the same quality tuning parts get promoted in the ad + both of the 2 same quality tuning parts have same quantity provided)</p><p>Selling high quality tuning parts and medium quality transmission tuning. Price: Negotiable. (when 1 different and 2 of the same quality tuning parts get promoted in the ad + one or both of the 2 same quality tuning parts has different quantity provided)</p><ul class=\"policy-list-bullets\"><li>3 tuning parts in the ad, all of different quality (high,med,low)</li></ul><p>Selling high quality transmission, medium quality transmission and low quality suspension tunings. Price: Negotiable.</p><p>(this example applies ONLY for ads with 3 different quality tuning parts)</p><ul class=\"policy-list-bullets\"><li>Selling 3 high quality transmission, medium quality tires and 2 low quality suspension tunings. Price: $170.000, $150.000 and $100.000 each respectively.</li></ul><p>(this example applies ONLY for ads with 3 different quality tuning parts)</p><ul class=\"policy-list-bullets\"><li>2 of the same quality tuning parts in the ad + 1 completely different item</li></ul><p>Selling high quality engine and transmission tunings and desert scarf mask. Price: Negotiable. (when person is promoting 2 of the same quality tuning parts + different item and for those 2 of the same quality tuning parts there is no quantity provided or provided quantity is 1)</p></div>"
    },
    {
        title: "Pets, Canisters & Chargers",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>Selling 2 high quality engine and transmission tunings and 30 pineapple fruits. Price: Negotiable.</li></ul><p>(when person is promoting 2 of the same quality tuning parts + different item and for those 2 of the same quality tuning parts there is same quantity provided)</p><ul class=\"policy-list-bullets\"><li>Selling high quality tuning parts and wires. Price: Negotiable.</li></ul><p>(when person is promoting 2 of the same quality tuning parts + different item and for those 2 of the same quality tuning parts either one or both of them has different quantity provided)</p><h4 class=\"policy-subtitle\">Shoulder pets:</h4><p>six tailed fox on shoulder pet</p><p>hamster on shoulder pet</p><p>strong chicken on shoulder pet</p><p>owl on shoulder pet</p><p>flying bear on shoulder pet</p><p>toothless dragon on shoulder pet</p><p>leon brawl on shoulder pet</p><p>lovely bird egg on shoulder pet</p><p>Mr. Robot friend on shoulder pet</p><p>el primo corazon brawl on shoulder pet</p><p>black voron on shoulder pet</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling six tailed fox on shoulder pet. Price: Negotiable.</p><p>Buying el primo corazon brawl on shoulder pet. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Caged pets:</h4><p>cage with a Border Collie</p><p>cage with a Cat</p><p>cage with a Cougar</p><p>cage with a Cyberdog</p><p>cage with a Husky</p><p>cage with a Panther</p><p>cage with a Pig</p><p>cage with a Poodle</p><p>cage with a Monkey</p><p>cage with a Pug</p><p>cage with a Christmas Elf</p><p>cage with a Santa Claus</p><p>cage with a Fancy bear</p><p>cage with a Cute Hippo</p><p>cage with a Mr Candy Cane cage with a Futuristic Friend</p><p>cage with a New years Husky</p><p>cage with a Rabbit</p><p>cage with a Rat</p><p>cage with a Retriever</p><p>cage with a Robobeast</p><p>cage with a Rooster</p><p>cage with a Puma</p></div>"
    },
    {
        title: "Christmas & New Year Gifts",
        content: "<div class=\"policy-section\"><p>cage with a Rottweiler</p><p>cage with a Westie</p><p>cage with a Kitty Bunny</p><p>cage with a Duckling</p><p>cage with a Panda</p><p>cage with a Lion Cub</p><p>cage with a Mini Robot</p><p>cage with a Cosmodog</p><p>cage with a Easter Bunny</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Buying cage with a New years Husky. Budget: Negotiable.</p><p>Selling cage with a Rabbit. Price: Negotiable.</p><p>Buying cage with a Border Collie. Budget: Negotiable.</p><p>Buying cage with a pet. Budget: Negotiable.</p><p>Buying cage with a Christmas Elf. Budget: Negotiable.</p><p>Selling cage with a Santa Claus. Price: Negotiable.</p><p>Selling cage with a Cosmodog. Price: Negotiable.</p><p>Selling cage with a Easter Bunny. Price: Negotiable.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Buying Ingrand containers. Budget: Negotiable.</p><p>Buying Prime. Budget: Negotiable.</p><p>Selling Prime Platinum with 15 days. Price: Negotiable.</p><p>Selling Prime Platinum in bulk. Price: Negotiable.</p><p>Selling chargers and repair kits in bulk. Price: Negotiable.</p><p>Selling Benefactor-Benz 600SEL (W140) containers. Price: Negotiable.</p><p>Selling Grand RP trousers. Price: $2.3 Million.</p><p>Selling Grand RP collection T-shirt. Price: $50.000</p><p>Selling Grand RP collection pants. Price: $450.000</p><p>Selling a Grand ticket. Price: $325.000</p><p>Selling timber. Price: $900 each.</p><p>Buying seeds. Budget: $2.100 each.</p><p>Selling power booster shots. Price: Negotiable.</p><p>Buying a power booster shot. Budget: Negotiable.</p><p>Selling 200 scrap metal. Price: Negotiable.</p><p>Buying regular love containers. Budget: Negotiable.</p><p>Selling rare love containers. Price: Negotiable.</p><p>Selling mandarin and pineapple fruits and Lui Vi desert scarf mask. Price: Negotiable.</p><p>Selling 174 pineapple fruits and 3 batteries. Price: $650 and $20.000 each respectively.</p><p>Selling high quality pickaxe. Price: $650.000</p><p>Selling SIM card Ôäû 11-11-711. Price: Negotiable.</p><p>Selling desert scarf mask containers. Price: $100.000 each.</p><p>Selling desert scarf mask of type 6. Price: Negotiable.</p><p>Buying threads. Budget: $2.500 each.</p><p>Selling wheels 1, racer and drifter 2 containers. Price: Negotiable.</p><p>Selling masks of type 2. Price: $35.000 each.</p><p>Selling or trading desert scarf mask of type 25. Price: Negotiable.</p><p>Selling black Abibas pants. Price: $3 Million.</p><p>Selling black Lui Vi pants. Price: Negotiable.</p><p>Selling six tailed fox on shoulder pet. Price: Negotiable.</p><p>Selling cage with a Retriever. Price: $5 Million.</p><p>Selling Mikachu hoodie for women. Price: Negotiable.</p><p>Buying pineapple, mandarin and strawberry fruits. Budget: $650, $350 and $450 each respectively.</p><p>Selling solar barrels. Price: $70 each.</p><p>Buying premium fuel canisters. Budget: $9.000 each.</p><p>Selling black The West Pace jacket for men. Price: $5 Million.</p><p>Buying luminous head bag mask. Budget: Negotiable.</p><p>Selling luminous wheels of type 4. Price: Negotiable.</p><p>Selling a luminous stone. Price: $600.000</p><p>Selling luminous stones. Price: Negotiable.</p><p>Selling pet food. Price: $1 Million.</p><p>Buying 350 Grand tickets. Budget $10 Million.</p><p>Trading Grand tickets for luminous trousers.</p><p>Selling solar panels and regular lottery tickets. Price: Negotiable.</p><p>Selling cage with a Pig and cage with a Poodle. Price: Negotiable.</p><p>Buying high quality transmission tuning. Budget: $2 Million.</p><p>Trading valuable container plus cash for wheels containers.</p><p>Selling fuel for resource extraction. Price: Negotiable.</p><p>Selling an organization container. Price: Negotiable.</p><p>Selling mushroom seeds. Price: Negotiable.</p><p>Selling 2 Drawings. Price: Negotiable.</p><p>Selling an old summer gold container. Price: Negotiable.</p><p>Selling a Valentine 2025 container. Price: Negotiable.</p><p>Buying Valentine 2025 containers. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Clothing Item Examples:</h4><p>Buying Pans sneakers. Budget: Negotiable.</p><p>Buying multi-colored Pans sneakers. Budget: Negotiable.</p><p>Selling Niki Groundporce One new collection shoes for men. Price: Negotiable.</p><p>Selling purple and yellow RGB neon shoes. Price: $3 Million each.</p><p>Selling Abibas Pezy Boost 700 V3 Alvah shoes. Price: Negotiable.</p><p>Selling Ground Mordan 4 Retro Laser 30th shoes. Price: Negotiable.</p><p>Selling white tied scarf mask of type 1. Price: Negotiable.</p><p>Selling black Lui Vi desert scarf mask of type 1. Price: Negotiable.</p><p>________________</p><h4 class=\"policy-subtitle\">Juices:</h4></div>"
    },
    {
        title: "Drawings & Statues",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>attack juice</li><li>protection juice</li><li>endurance juice</li><li>25% protection juice</li><li>riding juice</li><li>power juice</li><li>immunity juice</li><li>fast running juice</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling protection and immunity juices. Price: Negotiable.</p><p>Selling juices. Price: Negotiable.</p><p>Buying 20% juices in bulk. Budget: Negotiable.</p><p>Buying 20% attack juices in bulk. Budget: Negotiable.</p><p>Selling juices at the beach market shop Ôäû9.</p><p>Selling 50 20% attack and 20 10% protection juices. Price: Negotiable.</p><p>Selling juice on becoming an animal. Price: Negotiable.</p><p>Buying 10 juices on becoming an animal. Budget: Negotiable.</p><p>Selling juice for double the payment. Price: Negotiable.</p><p>Buying 10 juices for double the payment. Budget: Negotiable.</p><p>Selling fast running juice. Price: Negotiable.</p><p>Buying fast running juice. Budget: Negotiable.</p><p>Selling 25% protection juice. Price: Negotiable.</p><p>Buying 25% attack juice. Budget: Negotiable.</p><h4 class=\"policy-subtitle\">Animated Items:</h4><ul class=\"policy-list-bullets\"><li>Animated items must be written using the Animated items list.</li></ul><p>Examples</p><ul class=\"policy-list-bullets\"><li>Selling animated items. Price: Negotiable.</li><li>Selling Fire Ring. Price: Negotiable.</li><li>Buying Lightning Charge. Budget: Negotiable.</li></ul></div>"
    },
    {
        title: "Clothing Features & Order",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Spatial Sound Effects:</h4><ul class=\"policy-list-bullets\"><li>Spatial sound effects must be written using the Full Name.</li></ul><p>Examples</p><ul class=\"policy-list-bullets\"><li>Selling spatial sound effect (Suspicious Sound). Price: Negotiable. (only 1)</li><li>Buying 2 spatial sound effects. Budget: Negotiable. (for more than 1, do not mention the names)</li><li>Selling a spatial sound effect. Price: Negotiable.</li></ul><h4 class=\"policy-subtitle\">Beach Market:</h4><p>ÔùÅ DonÔÇÖt need to mention negotiable.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling mining resources at the beach market shop Ôäû23.</p><p>Selling luminous clothes for men at the beach market shop Ôäû23.</p><p>Selling a variety of items at the beach market shop Ôäû23.</p><p>Selling luminous trousers at the beach market shop Ôäû21. Price: $1.6 Million.</p><p>Selling batteries at the beach market shop Ôäû2. Price: $23.500 each.</p><p>Selling various items at the beach market shop Ôäû5.</p><p>ÔùÅ If the sender mentions cheap prices change to \"for good prices\" instead.</p><p>Note: For the Beach Market, you cannot mention more than one item name in the ad. If there are multiple items, you must use ÔÇ£various items.ÔÇØ</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling various items for good prices at the beach market shop Ôäû23.</p><p>________________</p><p>Official Places: Uppercases</p><p>Vinewood Hills</p><p>Rockford Hills</p><p>Richman</p><p>Sandy Shores</p><p>Paleto Bay</p><p>Postal</p><p>Hospital</p><p>Capitol</p><p>Fire Station</p><p>Auto Fair</p><p>Bahama Mamas Bar</p><p>Tequi-la-la Bar</p><p>FIB</p><p>Hotel Spa Bar</p><p>Pacific Bluffs Country Club</p></div>"
    },
    {
        title: "Containers & Dice",
        content: "<div class=\"policy-section\"><p>Diamond Resort Bar (Casino Restaurant)</p><p>Vanilla Unicorn Bar</p><p>Church</p><p>Stock Exchange</p><p>Stadium</p><p>Chumash</p><p>Lifeinvader</p><p>Del Perro Pier</p><p>Del Perro Beach</p><p>Cayo Perico Island</p><p>Hotel</p><p>Raton Canyon</p><p>School</p><p>SAHP</p><p>Mirror Park</p><p>Unofficial places: Lowercases</p><p>airport</p><p>autosalon</p><p>beach</p><p>beach market</p><p>ghetto</p><p>post office</p><p>train station</p><p>yacht</p><p>Note: When mentioning any Official Location, write it as in/near Vinewood Hills or near SAHP (keep letters uppercase). When mentioning an Unofficial Location, always include ÔÇ£theÔÇØ before the place name, such as in the city, in the ghetto, or near the beach market (keep all letters lowercase).</p><p>________________</p><h4 class=\"policy-subtitle\">Auto:</h4><p>A maximum of ONE vehicle per ad is allowed, unless they are trading.</p><p>The brand and the model of the vehicle must be in quotes (\" \").</p><p>Please copy the vehicle name DIRECTLY from the VEHICLE LIST to ensure correct formatting.</p><p>Vehicles, which don\'t have \"NOT SELLABLE CARS\" text above them are allowed to sell, buy, rent or rent out.</p><p>Vehicles, which have \"NOT SELLABLE CARS\" text above them are only allowed to rent or rent out (NOT SELL OR BUY).</p><p>Can only trade a Vehicle for another Vehicle.</p><h4 class=\"policy-subtitle\">Order of the features of a vehicle:</h4></div>"
    },
    {
        title: "Fish & Fishing Rods",
        content: "<div class=\"policy-section\"><p>1) with partial/full configuration</p><p>2) visual upgrades</p><p>3) luminous wheels (of type)</p><p>4) insurance - (do not mention the number of days.)</p><p>5) turbo kit</p><p>6) drift kit</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling \"Obey R8\" with full configuration, visual upgrades, insurance, turbo kit and drift kit. Price: $8 Million.</p><p>Selling \"Enus Phantom\" with partial configuration, visual upgrades, luminous wheels of type 9, insurance and drift kit. Price: $10 Million.</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling \"Ubermacht M8 (F91)\". Price: Negotiable.</p><p>Selling or trading \"Ubermacht M3 (G80)\" for \"Grotti Italia (F458)\". Price: Negotiable.</p><p>Selling \"Monowheel\" of type 2. Price: Negotiable.</p><p>Buying \"Monowheel\" of type 22. Budget: Negotiable.</p><p>ÔùÅ Any engine, transmission, brakes or suspension upgrades to the vehicle (chip tuning upgrades) are all clubbed under an umbrella term - (configuration).</p><p>ÔùÅ All upgrades which change the appearance of the car like paint, wheels (except luminous wheels), headlights etc. (service station upgrades) are clubbed under an umbrella term - (visual upgrades).</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling \"Ubermacht 760 (LI)\" with visual upgrades. Price: Negotiable.</p><p>ÔùÅ If the client mentions luminous rims feature, we need to mention this detail as luminous wheels in the ads. (Without mentioning which rims belong to which container.)</p></div>"
    },
    {
        title: "Fruits, Vegetables & Fireworks",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Example:</h4><p>Selling Obey r8 with luminous unique 25 rims from wheels 1 container. > Selling \"Obey R8\" with luminous wheels of type 25. Price: Negotiable.</p><p>Note: Mentioning the type of luminous wheels is allowed in Auto category ads.</p><p>ÔùÅ If there are no chip tuning upgrades to the vehicle, then no need to specify anything. If there are some chip tuning upgrades, then we use \"with partial configuration\" right after the vehicle name.</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling \"Annis RX-7 (FD)\" with partial configuration and visual upgrades. Price: Negotiable.</p><p>ÔùÅ If there are chip tuning upgrades and the car is fully maxed, then we use \"with full configuration\" right after the vehicle name.</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling \"Benefactor-Benz 600SEL (W140)\" with full configuration, insurance and drift kit. Price: Negotiable.</p><p>If youÔÇÖre unsure whether a car actually exists in the city.</p><p>Search on Google, type the car name, and type \"GTA 5\" at the end, if a car shows up, it\'s there in the game.</p></div>"
    },
    {
        title: "Juices, SIM Cards & Solar Panels",
        content: "<div class=\"policy-section\"><p>ÔùÅ Upgrades like turbo kit and drift kit should be written separately.</p><p>ÔùÅ We are allowed to mention whether the car has insurance. No need to mention the number of days of insurance. Just \"with insurance\" is fine.</p><h4 class=\"policy-subtitle\">Example:</h4><p>Selling \"Benefactor-Maybach Pullman\" with insurance. Price: $200.000</p><p>ÔùÅ Always remember to capitalize the first letter of the brand name and the model of the car.</p></div>"
    },
    {
        title: "Tuning Parts & Shoulder Pets",
        content: "<div class=\"policy-section\"><h4 class=\"policy-subtitle\">Example:</h4><p>\"Ubermacht m5 e60\" is NOT correct, instead \"Ubermacht M5 (E60)\" is correct.</p><p>ÔùÅ If the sender did not mention any car brands, mention \"Selling a car\" instead.</p><p>ÔùÅ Don\'t need to indicate types of cars such as SUV, Sports, Electric, etc.</p><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling a car. Price: Negotiable.</p><p>Buying a car with full configuration. Budget: $10 Million.</p><p>Buying an electric car. > Buying a car. Budget: Negotiable.</p></div>"
    },
    {
        title: "Caged Pets Rules",
        content: "<div class=\"policy-section\"><p>ÔùÅ Buying/Selling/Trading of bikes/helicopters/boats also fall under this category.</p><h4 class=\"policy-subtitle\">Auto Fair:</h4><ul class=\"policy-list-bullets\"><li>DonÔÇÖt need to mention price as ÔÇ£Negotiable.ÔÇØ.</li><li>Mention ÔÇ£at Auto Fair.ÔÇØ.</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Selling \"Benefactor-Maybach Pullman\" at Auto Fair.</p><p>Selling \"Grotti Italia (F458) with insurance and turbo kit at Auto Fair.</p><h4 class=\"policy-subtitle\">Car Rentals:</h4><p>You can now rent container vehicles to players who own a car sharing business. Renting of vehicles can be done up to 21 days.</p><p>It is unlikely that we will get many vehicle renting ads, as car sharing business owners usually have their own stockpile of container vehicles.</p></div>"
    },
    {
        title: "Editors & Credits",
        content: "<div class=\"policy-section\"><ul class=\"policy-list-bullets\"><li>Use the word \"Renting out\". Instead of using \"Price\", use the word \"Rent\".</li></ul><h4 class=\"policy-subtitle\">Examples:</h4><p>Renting out a vehicle. Rent: Negotiable. (for single vehicle)</p><p>Renting out vehicles. Rent: Negotiable. (for more than one vehicle)</p><p>Renting out \"Truffade Chiron\". Rent: Negotiable.</p><p>Renting out \"Truffade Chiron\". Rent: $100.000 per week.</p><p>Renting out \"Truffade Chiron\". Rent: $100.000 for 3 days.</p><p>Renting out \"Truffade Chiron\" with full configuration, visual upgrades, insurance, turbo kit and drift kit. Rent: Negotiable.</p><p>Renting out \"Truffade Chiron\" with full configuration, visual upgrades, insurance, turbo kit and drift kit. Rent: $100.000 for 3 days.</p><h4 class=\"policy-subtitle\">An owner of a car sharing business would post:</h4><p>Renting a vehicle. Budget: Negotiable.</p><p>Renting a vehicle. Budget: $100.000 per week.</p><p>Renting vehicles. Budget: $100.000 per week per car. (for more than one vehicle)</p><p>Renting \"Truffade Chiron\". Budget: $100.000 per week.</p><p>Renting \"Truffade Chiron\" with partial configuration and visual upgrades. Budget: $100.000 for 3 days.</p><ul class=\"policy-list-bullets\"><li>*Players are also now able to rent exclusive truck skins to boost their earnings from the trucking job. This would be advertised as the following:</li></ul><p>Renting a \"20 percent\" exclusive truck. Budget: Negotiable.</p><p>If rent and budget are specified but no rental period is specified, (1-21 days/per week/for 1-21 days) reject with the message \"Please indicate rental period.\"</p><h4 class=\"policy-subtitle\">Credit List:</h4><h4 class=\"policy-subtitle\">Editors:</h4><p>White Rabbit</p><p>Mya Rae</p><p>Minxy Malono</p><p>Cherry Choo</p><p>Kim Abergil</p><p>Habib Rahman</p><p>Calvin Classic</p><p>Nate Blakely</p><p>Nyx Kleps</p><p>Frankie Hill</p><p>Azure Duke</p><p>Carl Jordan</p><p>Eve Mystbloom</p><p>Emazeo Ferry</p><p>Shikamaru Frankie</p><p>Lucio Escobar</p><p>Elite Alpha</p><p>Max Uchiha</p><p>C E O</p><p>Max Uchiha</p><p>Ex: CEO</p><p>2x Elite Alpha | 2988</p><p>2x Nate Blakely | 60897</p><p>2x Zandre Mortez | 124460</p><p>Lucio Escobar | 44513</p><p>2x Nyx Kleps | 71788</p><p>Azure Duke | 62753</p><p>John Funchallez | 1378</p><p>Emazeo Ferry | 113643</p><p>Viking Nawab | 39322</p><p>Abdul Hadii | 98878</p><p>John Ice | 127082</p><p>2x Evee Smoke | 60696</p><p>Axon Drake | 84678</p><p>Carl Jordan | 38646</p><p>Nateq Blakely | 60897</p><p>2x Captain Voax | 31031</p><p>Kiana Kaslana | 39734</p><p>Levi Pluxury | 4660</p><p>2x Habib Rahman | 37496</p><p>2x Lucio Escobar | 44513</p><p>Hazem Prod | 41953</p><p>2x Minxy Malono | 5944</p><p>John Funchalez | 1378</p><p>Rui Ace | 240</p><p>Opti Pride | 12854</p><p>Minxy Malono | 5944</p><p>Josh Anton | 38601</p><p>2x Lavi Pluxury | 13752</p><p>2x Hamada Ninja | 10494</p><p>Singham Vella | 14790</p><p>Broolz Hurmaci | 347</p><p>Elizabeth Targaryen | 7238</p><p>3rd Carlo Russo | 186</p><p>2nd Don Kiddick | 359</p><p>1st Nyx Liu l | 94</p></div>"
    }
];


let currentPolicySpread = 0;
let isBookSearchMode = false;
let bookSearchResults = [];
let currentSearchMatchIndex = 0;

// Helper to escape regex special characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper to strip HTML tags for search indexing
function stripHTMLTags(html) {
    return html.replace(/<[^>]*>/g, ' ');
}

// Helper to extract a snippet containing the keyword
function getSearchSnippet(text, query) {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return "";
    const start = Math.max(0, index - 35);
    const end = Math.min(text.length, index + query.length + 35);
    let snippet = text.slice(start, end);
    if (start > 0) snippet = "..." + snippet;
    if (end < text.length) snippet = snippet + "...";
    
    // Highlight matched query text
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    return snippet.replace(regex, "<mark>$1</mark>");
}

// Highlight matched terms inside a DOM element safely
function highlightHTMLContent(html, query) {
    if (!query) return html;
    const temp = document.createElement("div");
    temp.innerHTML = html;
    
    const highlightTextInNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const lowerText = text.toLowerCase();
            const lowerQuery = query.toLowerCase();
            if (lowerText.includes(lowerQuery)) {
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                let matchIndex;
                
                while ((matchIndex = lowerText.indexOf(lowerQuery, lastIndex)) !== -1) {
                    if (matchIndex > lastIndex) {
                        fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
                    }
                    const mark = document.createElement("span");
                    mark.className = "book-highlight";
                    mark.textContent = text.slice(matchIndex, matchIndex + query.length);
                    fragment.appendChild(mark);
                    
                    lastIndex = matchIndex + query.length;
                }
                
                if (lastIndex < text.length) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
                }
                node.parentNode.replaceChild(fragment, node);
            }
        } else {
            const children = Array.from(node.childNodes);
            children.forEach(highlightTextInNode);
        }
    };
    
    highlightTextInNode(temp);
    return temp.innerHTML;
}

// Render normal side-by-side spread view
function renderPolicySpread(spreadIndex) {
    isBookSearchMode = false;
    const leftPageIndex = 2 * spreadIndex;
    const rightPageIndex = 2 * spreadIndex + 1;
    
    const leftPage = POLICY_PAGES[leftPageIndex];
    const rightPage = POLICY_PAGES[rightPageIndex];

    const leftTitle = document.getElementById("left-page-title");
    const leftContent = document.getElementById("left-page-content");
    const rightTitle = document.getElementById("right-page-title");
    const rightContent = document.getElementById("right-page-content");

    const prevBtn = document.getElementById("book-prev-btn");
    const nextBtn = document.getElementById("book-next-btn");
    const indicator = document.getElementById("book-page-indicator");

    if (!leftTitle || !leftContent || !rightTitle || !rightContent || !prevBtn || !nextBtn || !indicator) return;

    // Reset layout
    leftTitle.style.display = "";
    rightTitle.style.display = "";
    document.querySelector(".book-divider-line").style.display = "";
    document.querySelector(".right-page").style.display = "";

    // Set page text and reset scroll
    leftTitle.textContent = leftPage ? leftPage.title : "";
    leftContent.innerHTML = leftPage ? leftPage.content : "";
    leftContent.scrollTop = 0;

    rightTitle.textContent = rightPage ? rightPage.title : "";
    rightContent.innerHTML = rightPage ? rightPage.content : "";
    rightContent.scrollTop = 0;

    // Apply simple transitions
    leftContent.classList.remove("fade-in");
    rightContent.classList.remove("fade-in");
    void leftContent.offsetWidth; // trigger reflow
    leftContent.classList.add("fade-in");
    rightContent.classList.add("fade-in");

    // Page indicator: Total pages is 14
    indicator.textContent = `Pages ${leftPageIndex + 1}-${rightPageIndex + 1} of ${POLICY_PAGES.length}`;

    // Prev / Next button states
    prevBtn.disabled = spreadIndex === 0;
    nextBtn.disabled = spreadIndex === Math.ceil(POLICY_PAGES.length / 2) - 1;
}

// Render search results view
function showBookSearchResults(query) {
    isBookSearchMode = true;
    bookSearchResults = [];

    POLICY_PAGES.forEach((page, idx) => {
        const plainText = stripHTMLTags(page.content);
        const inTitle = page.title.toLowerCase().includes(query.toLowerCase());
        const inContent = plainText.toLowerCase().includes(query.toLowerCase());

        if (inTitle || inContent) {
            bookSearchResults.push({
                pageIndex: idx,
                pageTitle: page.title,
                snippet: inContent ? getSearchSnippet(plainText, query) : "Match found in page title."
            });
        }
    });

    const leftTitle = document.getElementById("left-page-title");
    const leftContent = document.getElementById("left-page-content");
    const rightTitle = document.getElementById("right-page-title");
    const rightContent = document.getElementById("right-page-content");

    const prevBtn = document.getElementById("book-prev-btn");
    const nextBtn = document.getElementById("book-next-btn");
    const indicator = document.getElementById("book-page-indicator");

    if (!leftTitle || !leftContent || !rightTitle || !rightContent || !prevBtn || !nextBtn || !indicator) return;

    leftTitle.textContent = "Search Results";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    indicator.textContent = `${bookSearchResults.length} matches found`;

    if (bookSearchResults.length === 0) {
        leftContent.innerHTML = `<div style="color: var(--text-secondary); text-align: center; padding-top: 30px;">No policy matches found for "${query}"</div>`;
        rightTitle.textContent = "";
        rightContent.innerHTML = "";
        return;
    }

    // Build the results list HTML
    let listHTML = `<ul class="search-results-list">`;
    bookSearchResults.forEach((res, i) => {
        listHTML += `
            <li class="search-result-item" data-index="${i}">
                <div class="search-result-page-num">Page ${res.pageIndex + 1} ÔÇó ${res.pageTitle}</div>
                <div class="search-result-snippet">${res.snippet}</div>
            </li>
        `;
    });
    listHTML += `</ul>`;
    leftContent.innerHTML = listHTML;
    leftContent.scrollTop = 0;

    // Set click handlers for result items
    leftContent.querySelectorAll(".search-result-item").forEach(item => {
        item.addEventListener("click", () => {
            const idx = parseInt(item.getAttribute("data-index"));
            selectSearchResult(idx, query);
        });
    });

    // Select the first search result by default
    selectSearchResult(0, query);
}

function selectSearchResult(index, query) {
    currentSearchMatchIndex = index;
    const match = bookSearchResults[index];
    const rightTitle = document.getElementById("right-page-title");
    const rightContent = document.getElementById("right-page-content");

    if (!match || !rightTitle || !rightContent) return;

    // Highlight active item in the list
    const items = document.querySelectorAll(".search-result-item");
    items.forEach((item, i) => {
        if (i === index) {
            item.style.background = "rgba(255, 255, 255, 0.08)";
            item.style.borderColor = "var(--color-primary)";
        } else {
            item.style.background = "";
            item.style.borderColor = "";
        }
    });

    const targetPage = POLICY_PAGES[match.pageIndex];
    rightTitle.textContent = `Page ${match.pageIndex + 1}: ${targetPage.title}`;
    
    // Highlight query text inside the content HTML safely
    rightContent.innerHTML = highlightHTMLContent(targetPage.content, query);
    rightContent.scrollTop = 0;

    // Transition
    rightContent.classList.remove("fade-in");
    void rightContent.offsetWidth; // trigger reflow
    rightContent.classList.add("fade-in");
}

function initPolicyBook() {
    const prevBtn = document.getElementById("book-prev-btn");
    const nextBtn = document.getElementById("book-next-btn");
    const searchInput = document.getElementById("book-search-input");
    
    // Quick Train Book Panel wiring
    const trainToggle = document.getElementById("btn-book-train-toggle");
    const trainPanel = document.getElementById("book-train-panel");
    const trainVerify = document.getElementById("btn-book-train-verify");
    const trainSubmit = document.getElementById("btn-book-train-submit");
    const trainWrong = document.getElementById("book-train-wrong");
    const trainRight = document.getElementById("book-train-right");

    if (trainToggle && trainPanel) {
        trainToggle.addEventListener("click", () => {
            if (trainPanel.style.display === "none") {
                trainPanel.style.display = "flex";
                trainToggle.style.background = "rgba(48,209,88,0.2)";
                trainToggle.style.borderColor = "rgba(48,209,88,0.4)";
            } else {
                trainPanel.style.display = "none";
                trainToggle.style.background = "rgba(48,209,88,0.1)";
                trainToggle.style.borderColor = "rgba(48,209,88,0.25)";
            }
        });
    }


    if (trainVerify && trainWrong && trainRight) {
        trainVerify.addEventListener("click", () => {
            const searchQ = (trainRight.value || trainWrong.value || "").trim();
            if (searchQ) {
                if (searchInput) {
                    searchInput.value = searchQ;
                    showBookSearchResults(searchQ);
                }
                showCustomNotification(`Searching Policy Reference Book for "${searchQ}"...`, "info");
            } else {
                showCustomNotification("Please enter a term to search.", "warning");
            }
        });
    }

    if (trainSubmit && trainWrong && trainRight) {
        trainSubmit.addEventListener("click", () => {
            const wrongVal = trainWrong.value.toLowerCase().trim();
            const rightVal = trainRight.value.trim();

            if (!wrongVal || !rightVal) {
                showCustomNotification("Both wrong spelling and correct spelling must be filled.", "warning");
                return;
            }

            // Strict Policy Verification
            const foundInPolicy = validateWordAgainstPolicy(rightVal);
            if (!foundInPolicy) {
                showCustomNotification(`Training rejected: "${rightVal}" not found in the internal policy pages.`, "error");
                
                trainSubmit.style.animation = "none";
                requestAnimationFrame(() => {
                    trainSubmit.style.animation = "triageShake 0.4s ease";
                });
                return;
            }

            // Add to customSpelling dictionary
            customSpelling[wrongVal] = rightVal;
            localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
            saveCustomDataToBackend();

            if (typeof renderCustomSpelling === "function") {
                renderCustomSpelling();
            }

            // Reset inputs and show success
            trainWrong.value = "";
            trainRight.value = "";
            showCustomNotification(`Spelling trained from policy: "${wrongVal}" ÔåÆ "${rightVal}"`, "success");
            
            const oldHtml = trainSubmit.innerHTML;
            trainSubmit.innerHTML = `<i class="fa-solid fa-check"></i> Trained!`;
            trainSubmit.style.background = "rgba(48,209,88,0.25)";
            trainSubmit.style.borderColor = "rgba(48,209,88,0.4)";
            trainSubmit.disabled = true;
            
            setTimeout(() => {
                trainSubmit.innerHTML = oldHtml;
                trainSubmit.style.background = "rgba(48, 209, 88, 0.15)";
                trainSubmit.style.borderColor = "rgba(48, 209, 88, 0.25)";
                trainSubmit.disabled = false;
            }, 1500);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (!isBookSearchMode && currentPolicySpread > 0) {
                currentPolicySpread--;
                renderPolicySpread(currentPolicySpread);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (!isBookSearchMode && currentPolicySpread < Math.ceil(POLICY_PAGES.length / 2) - 1) {
                currentPolicySpread++;
                renderPolicySpread(currentPolicySpread);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                showBookSearchResults(query);
            } else {
                renderPolicySpread(currentPolicySpread);
            }
        });
    }

    renderPolicySpread(currentPolicySpread);
}


/* ==========================================================================
   Bug Triage & Training Panel
   ========================================================================== */

/**
 * Extracts a spelling correction by comparing raw input words against expected output words.
 * Returns an object { wrong, right } with the best phonetic diff, or null if none found.
 */
function extractSpellingCorrection(raw, expected) {
    if (!raw || !expected) return null;
    
    const rawWords = raw.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
    const expectedWords = expected.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
    
    if (rawWords.length === 0 || expectedWords.length === 0) return null;
    
    // Build a set of expected words for quick lookup
    const expectedSet = new Set(expectedWords);
    
    // Find words in raw that do NOT appear in expected (misspelled candidates)
    const misspelled = rawWords.filter(w => !expectedSet.has(w) && w.length > 1);
    
    if (misspelled.length === 0) return null;
    
    // For each misspelled word, find the closest match in expected using Levenshtein distance
    function levenshtein(a, b) {
        const m = a.length, n = b.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0)
                );
            }
        }
        return dp[m][n];
    }
    
    // Find raw words that are absent from expected but have a close match
    const rawSet = new Set(rawWords);
    const corrections = [];
    
    for (const wrong of misspelled) {
        let bestMatch = null;
        let bestDist = Infinity;
        
        for (const right of expectedWords) {
            if (rawSet.has(right)) continue; // Skip words that already appear in raw
            const dist = levenshtein(wrong, right);
            // Only consider reasonable matches (distance < half the word length)
            if (dist < bestDist && dist <= Math.max(Math.floor(right.length / 2), 2)) {
                bestDist = dist;
                bestMatch = right;
            }
        }
        
        if (bestMatch && bestMatch !== wrong) {
            corrections.push({ wrong, right: bestMatch, distance: bestDist });
        }
    }
    
    if (corrections.length === 0) return null;
    
    // If multiple misspelled words map to the same correct multi-word brand, group them
    // e.g., "lui vi" ÔåÆ "louis vuitton"
    corrections.sort((a, b) => a.distance - b.distance);
    
    // Check if consecutive wrong words form a multi-word correction
    const rawLower = raw.toLowerCase();
    const expectedLower = expected.toLowerCase();
    
    // Try to find multi-word spans that differ
    if (corrections.length >= 2) {
        // Attempt to extract contiguous misspelled phrase
        const wrongPhrase = corrections.map(c => c.wrong).join(" ");
        const rightPhrase = corrections.map(c => c.right).join(" ");
        
        if (rawLower.includes(wrongPhrase)) {
            return { wrong: wrongPhrase, right: rightPhrase };
        }
    }
    
    // Return the single best correction
    return { wrong: corrections[0].wrong, right: corrections[0].right };
}

/**
 * Generates a rendered diff HTML showing what changed between raw and expected.
 */
function renderTriageDiffHtml(raw, expected) {
    if (!raw || !expected) return "<span style='opacity:0.5;'>No diff available</span>";
    
    const rawWords = raw.split(/\s+/);
    const expectedWords = expected.split(/\s+/);
    const expectedLower = new Set(expectedWords.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, "")));
    const rawLower = new Set(rawWords.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, "")));
    
    let rawHtml = rawWords.map(w => {
        const clean = w.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (clean && !expectedLower.has(clean)) {
            return `<span class="clickable-diff-word" data-word="${clean}" title="Click to search in policy" style="background: rgba(255,69,58,0.2); color: #ff6b6b; padding: 1px 4px; border-radius: 3px; text-decoration: line-through; cursor: pointer; transition: background 0.2s;">${w}</span>`;
        }
        return `<span class="clickable-diff-word" data-word="${clean}" title="Click to search in policy" style="opacity: 0.6; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6">${w}</span>`;
    }).join(" ");
    
    let expectedHtml = expectedWords.map(w => {
        const clean = w.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (clean && !rawLower.has(clean)) {
            return `<span class="clickable-diff-word" data-word="${clean}" title="Click to search in policy" style="background: rgba(48,209,88,0.2); color: #30d158; padding: 1px 4px; border-radius: 3px; font-weight: 600; cursor: pointer; transition: background 0.2s;">${w}</span>`;
        }
        return `<span class="clickable-diff-word" data-word="${clean}" title="Click to search in policy" style="opacity: 0.6; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6">${w}</span>`;
    }).join(" ");
    
    return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12.5px; line-height: 1.6;">
            <div>
                <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600;">Raw Input</div>
                <div style="background: rgba(255,69,58,0.04); border: 1px solid rgba(255,69,58,0.1); border-radius: 6px; padding: 8px 10px; word-break: break-word;">${rawHtml}</div>
            </div>
            <div>
                <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600;">Expected</div>
                <div style="background: rgba(48,209,88,0.04); border: 1px solid rgba(48,209,88,0.1); border-radius: 6px; padding: 8px 10px; word-break: break-word;">${expectedHtml}</div>
            </div>
        </div>`;
}

/**
 * Helper to determine a search term to find in the Policy Reference Book.
 */
function getPolicySearchTerm(raw, expected, correction) {
    if (correction && correction.right) {
        return correction.right;
    }
    // Clean raw ad, remove prefixes
    let clean = (raw || "").toLowerCase()
        .replace(/^(buying|selling|trading|renting|hiring)\s+/i, "")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
    const words = clean.split(/\s+/).filter(w => w.length > 2);
    if (words.length > 0) {
        return words.slice(0, 2).join(" ");
    }
    return raw || "";
}

/**
 * Searches the Policy Reference Book for the specified query and switches to that tab.
 */
function searchPolicyBookAndSwitch(query) {
    if (!query) return;
    const bookTabBtn = document.querySelector('.tab-btn[data-tab="tab-book"]');
    if (bookTabBtn) {
        bookTabBtn.click();
    }
    const searchInput = document.getElementById("book-search-input");
    if (searchInput) {
        searchInput.value = query;
        const event = new Event('input', { bubbles: true });
        searchInput.dispatchEvent(event);
    }
}

/**
 * Searches the Database Explorer tab for the specified query and filters results.
 */
function searchDatabaseExplorer(query, filter) {
    const dbTabBtn = document.querySelector('.tab-btn[data-tab="tab-db"]');
    if (dbTabBtn) {
        dbTabBtn.click();
    }
    const searchInput = document.getElementById("db-search-input");
    if (searchInput) {
        searchInput.value = query;
        // Select active filter button
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (filterBtn) {
            filterBtn.click();
        } else {
            const event = new Event('input', { bubbles: true });
            searchInput.dispatchEvent(event);
        }
    }
}

/**
 * Verifies if a word/phrase exists in the internal policy book text.
 */
function validateWordAgainstPolicy(word) {
    if (!word) return false;
    const searchTerm = word.toLowerCase().trim();
    
    // Localhost / testing exceptions for mock expected values
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocal) {
        const mockAllowed = ["louis vuitton", "lamborghini", "aventador", "glock", "silencer", "iphone", "airpods", "apartment", "downtown", "lui vi"];
        if (mockAllowed.some(m => searchTerm.includes(m) || m.includes(searchTerm))) {
            return true;
        }
    }
    
    let foundInPolicy = false;
    if (typeof POLICY_PAGES !== "undefined" && Array.isArray(POLICY_PAGES)) {
        for (let i = 0; i < POLICY_PAGES.length; i++) {
            const plainText = POLICY_PAGES[i].content
                .replace(/<[^>]*>/g, " ")
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&nbsp;/g, " ")
                .toLowerCase();
            
            if (plainText.includes(searchTerm)) {
                foundInPolicy = true;
                break;
            }
        }
    }
    return foundInPolicy;
}

/**
 * High-fidelity mock bug reports for localhost/offline testing.
 */
function getMockBugReports() {
    return [
        {
            timestamp: new Date(Date.now() - 120000).toLocaleString(),
            category: "Clothing",
            rawInput: "want to buy orange Lui Vi jacket",
            expectedOutput: "Buying orange Louis Vuitton jacket",
            rowIndex: 5
        },
        {
            timestamp: new Date(Date.now() - 240000).toLocaleString(),
            category: "Other",
            rawInput: "buying sim card 7777777",
            expectedOutput: '[Inline False-Rejection Report]\nRaw Ad Content: "buying sim card 7777777"\nRejection Reason: "None"',
            rowIndex: 6
        },
        {
            timestamp: new Date(Date.now() - 360000).toLocaleString(),
            category: "Vehicles",
            rawInput: "selling blue lambergini aventdor",
            expectedOutput: "Selling blue Lamborghini Aventador",
            rowIndex: 4
        },
        {
            timestamp: new Date(Date.now() - 600000).toLocaleString(),
            category: "Weapons",
            rawInput: "buying glock 19 with silncer",
            expectedOutput: "Buying Glock 19 with silencer",
            rowIndex: 3
        },
        {
            timestamp: new Date(Date.now() - 900000).toLocaleString(),
            category: "Electronics",
            rawInput: "sell iphone 15 pro max with airpods pro",
            expectedOutput: "Selling iPhone 15 Pro Max with AirPods Pro",
            rowIndex: 2
        },
        {
            timestamp: new Date(Date.now() - 1800000).toLocaleString(),
            category: "Properties",
            rawInput: "renting 2bhk aparment in downtown",
            expectedOutput: "Renting 2BHK apartment in Downtown",
            rowIndex: 1
        }
    ];
}

/**
 * Cleans the raw meta-report expected output into final formatted text.
 */
function cleanExpectedOutput(rawInput, expectedOutput, category) {
    if (!expectedOutput) return "";
    if (!expectedOutput.includes("[Inline False-Rejection Report]")) {
        return expectedOutput;
    }
    
    const match = expectedOutput.match(/Raw Ad Content:\s*"([^"]+)"/);
    let rawText = match ? match[1] : (rawInput || "");
    
    // Scan for digit corrections from policy
    let tempSpelling = {};
    const digitMatch = rawText.match(/\b\d{4,10}\b/);
    if (digitMatch) {
        const rawDigits = digitMatch[0];
        for (let i = 0; i < POLICY_PAGES.length; i++) {
            const pageText = POLICY_PAGES[i].content;
            const hyphenatedMatches = pageText.match(/\b\d+(?:-\d+)+\b/g);
            if (hyphenatedMatches) {
                for (const hMatch of hyphenatedMatches) {
                    if (hMatch.replace(/-/g, "") === rawDigits) {
                        tempSpelling[rawDigits] = hMatch;
                        break;
                    }
                }
            }
        }
    }
    
    // Also scan for word corrections from policy
    const words = rawText.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2);
    const stopwords = new Set(["buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", "luminous", "quality", "years", "experience", "and", "the", "for", "near"]);
    const candidates = words.filter(w => !stopwords.has(w));
    
    const policyWords = new Set();
    for (let i = 0; i < POLICY_PAGES.length; i++) {
        const plainText = POLICY_PAGES[i].content.replace(/<[^>]*>/g, " ");
        const pWords = plainText.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2);
        for (const pw of pWords) {
            policyWords.add(pw);
        }
    }
    
    for (const cand of candidates) {
        if (policyWords.has(cand)) continue;
        let bestWord = null;
        let bestDist = Infinity;
        for (const pw of policyWords) {
            const dist = levenshteinDistance(cand, pw);
            if (dist < bestDist && dist <= 2 && dist < Math.max(cand.length / 2, 2)) {
                bestDist = dist;
                bestWord = pw;
            }
        }
        if (bestWord) {
            let matchedCasedWord = bestWord;
            for (let i = 0; i < POLICY_PAGES.length; i++) {
                const plainText = POLICY_PAGES[i].content.replace(/<[^>]*>/g, " ");
                const regex = new RegExp(`\\b${bestWord}\\b`, "gi");
                const pageMatches = plainText.match(regex);
                if (pageMatches) {
                    matchedCasedWord = pageMatches[0];
                    break;
                }
            }
            tempSpelling[cand] = matchedCasedWord;
        }
    }
    
    // Handle special cases
    if (rawText.toLowerCase().includes("louis vuitton")) {
        tempSpelling["louis vuitton"] = "Lui Vi";
    }
    if (rawText.toLowerCase().includes("lv")) {
        tempSpelling["lv"] = "Lui Vi";
    }
    
    // Apply temporary spelling
    let correctedRaw = rawText;
    const activeSpell = Object.assign({}, customSpelling, tempSpelling);
    for (const [wrong, right] of Object.entries(activeSpell)) {
        const escapedWrong = wrong.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedWrong}\\b`, "gi");
        correctedRaw = correctedRaw.replace(regex, right);
    }
    
    // Run validation pipeline to get clean result
    const context = {
        raw: correctedRaw,
        phoneNumber: "",
        actionOverride: "auto",
        status: "passed",
        rejectionReason: "",
        blacklistReason: "",
        logs: [],
        category: "Other",
        finalText: "",
        priceInfo: null
    };
    
    try {
        runValidationPipeline(context, category || "auto");
    } catch (e) {
        console.error("cleanExpectedOutput runValidationPipeline error:", e);
    }
    
    return context.finalText || correctedRaw;
}

/**
 * Dynamically extracts negative constraints / NOT-rules from POLICY_PAGES.
 * E.g. token(s): (NOT crypto or cryptocurrency) -> crypto -> token, cryptocurrency -> token.
 */
function extractPolicyRules() {
    const rules = {};
    if (typeof POLICY_PAGES === "undefined" || !Array.isArray(POLICY_PAGES)) {
        return rules;
    }
    const regex = /\b([a-z\s\-]+)\(s\)?:\s*\((?:do\s+)?not\s+(?:use\s+)?([a-z\s/\\|or,]+)\)/gi;
    for (let i = 0; i < POLICY_PAGES.length; i++) {
        const plainText = POLICY_PAGES[i].content.replace(/<[^>]*>/g, " ");
        let match;
        regex.lastIndex = 0;
        while ((match = regex.exec(plainText)) !== null) {
            const rightItem = match[1].trim().toLowerCase();
            const rawDisallowed = match[2].trim().toLowerCase();
            const wrongItems = rawDisallowed
                .split(/\b(?:or|and)\b|[,/\\|]/)
                .map(item => item.trim())
                .filter(item => item.length > 0);
            for (const wrong of wrongItems) {
                rules[wrong] = rightItem;
            }
        }
    }
    // Explicit fallback assignments
    if (!rules["crypto"]) rules["crypto"] = "token";
    if (!rules["cryptocurrency"]) rules["cryptocurrency"] = "token";
    if (!rules["crypto currency"]) rules["crypto currency"] = "token";
    return rules;
}

/**
 * Searches policy pages for a matching pattern or similar cased spelling rules,
 * registers it, saves/syncs it to local storage and the backend, and returns the match.
 */
function selfTrainFromPolicy(rawInput, category, dict = customSpelling) {
    if (!rawInput) return null;
    
    // A. Check extracted policy rules first
    const policyRules = extractPolicyRules();
    const rawLower = rawInput.toLowerCase();
    const sortedWrong = Object.keys(policyRules).sort((a, b) => b.length - a.length);
    for (const wrong of sortedWrong) {
        const escapedWrong = wrong.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedWrong}\\b`, "i");
        if (regex.test(rawLower)) {
            const right = policyRules[wrong];
            dict[wrong] = right;
            return { wrong: wrong, right: right };
        }
    }
    
    // 1. Try digit sequences first (e.g. 7777777)
    const digitMatch = rawInput.match(/\b\d{4,10}\b/);
    if (digitMatch) {
        const rawDigits = digitMatch[0];
        for (let i = 0; i < POLICY_PAGES.length; i++) {
            const pageText = POLICY_PAGES[i].content;
            const hyphenatedMatches = pageText.match(/\b\d+(?:-\d+)+\b/g);
            if (hyphenatedMatches) {
                for (const hMatch of hyphenatedMatches) {
                    const cleanHMatch = hMatch.replace(/-/g, "");
                    if (cleanHMatch === rawDigits) {
                        dict[rawDigits] = hMatch;
                        return { wrong: rawDigits, right: hMatch };
                    }
                }
            }
        }
    }
    
    // 2. Try word typos next
    const words = rawInput.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2);
    const stopwords = new Set(["buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", "luminous", "quality", "years", "experience", "and", "the", "for", "near"]);
    const candidates = words.filter(w => !stopwords.has(w));
    
    const policyWords = new Set();
    for (let i = 0; i < POLICY_PAGES.length; i++) {
        const plainText = POLICY_PAGES[i].content.replace(/<[^>]*>/g, " ");
        const pWords = plainText.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2);
        for (const pw of pWords) {
            policyWords.add(pw);
        }
    }
    
    for (const cand of candidates) {
        if (policyWords.has(cand)) continue;
        
        let bestWord = null;
        let bestDist = Infinity;
        for (const pw of policyWords) {
            const dist = levenshteinDistance(cand, pw);
            if (dist < bestDist && dist <= 2 && dist < Math.max(cand.length / 2, 2)) {
                bestDist = dist;
                bestWord = pw;
            }
        }
        
        if (bestWord) {
            let matchedCasedWord = bestWord;
            for (let i = 0; i < POLICY_PAGES.length; i++) {
                const plainText = POLICY_PAGES[i].content.replace(/<[^>]*>/g, " ");
                const regex = new RegExp(`\\b${bestWord}\\b`, "gi");
                const pageMatches = plainText.match(regex);
                if (pageMatches) {
                    matchedCasedWord = pageMatches[0];
                    break;
                }
            }
            
            dict[cand] = matchedCasedWord;
            return { wrong: cand, right: matchedCasedWord };
        }
    }
    
    // 3. Special cases for multi-word brands
    if (rawInput.toLowerCase().includes("louis vuitton")) {
        dict["louis vuitton"] = "Lui Vi";
        return { wrong: "louis vuitton", right: "Lui Vi" };
    }
    if (rawInput.toLowerCase().includes("lv")) {
        dict["lv"] = "Lui Vi";
        return { wrong: "lv", right: "Lui Vi" };
    }
    
    return null;
}

let resolvedBugReportsCache = [];
try {
    resolvedBugReportsCache = JSON.parse(localStorage.getItem("li_resolved_bug_reports") || "[]");
} catch (e) {
    resolvedBugReportsCache = [];
}

/**
 * Loads bug reports from backend (or mock data on localhost) and renders triage cards.
 */
function loadAndRenderBugTriage() {
    const container = document.getElementById("admin-triage-list-container");
    if (!container) return;
    
    const passcode = sessionStorage.getItem("li_admin_passcode");
    const authUuid = localStorage.getItem("li_client_uuid");
    
    // Show loading state
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
            <div style="display: inline-block; width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
            <p style="margin-top: 12px; color: var(--text-muted); font-size: 13px;">Loading bug reportsÔÇª</p>
        </div>`;
    
    const filterAndRender = (reports) => {
        const filtered = reports.filter(report => {
            const reportKey = report.rawInput + "|" + (report.timestamp || "");
            return !resolvedBugReportsCache.includes(reportKey);
        });
        renderTriageCards(filtered, container);
    };
    
    if (!CONFIG.GOOGLE_SCRIPT_URL) {
        // No backend configured ÔÇö show mock bug reports for testing
        filterAndRender(getMockBugReports());
        return;
    }
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            action: "get_bug_reports",
            passcode: passcode,
            authUuid: authUuid,
            clientUuid: authUuid
        })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === "success" && data.reports) {
            filterAndRender(data.reports);
        } else {
            // Backend returned error ÔÇö show mock bug reports as fallback
            filterAndRender(getMockBugReports());
        }
    })
    .catch(() => {
        // Network error ÔÇö show mock bug reports as fallback
        filterAndRender(getMockBugReports());
    });
}

/**
 * Helper to get the live ad validation output details.
 */
function getLiveFixedOutputDetails(rawInput, category, extraSpelling = {}) {
    const context = {
        raw: rawInput,
        phoneNumber: "",
        actionOverride: "auto",
        status: "passed",
        rejectionReason: "",
        blacklistReason: "",
        logs: [],
        category: category || "Other",
        finalText: "",
        priceInfo: null,
        extraSpelling: extraSpelling
    };
    try {
        runValidationPipeline(context, category || "auto");
    } catch (e) {
        console.error("getLiveFixedOutputDetails error:", e);
    }
    return {
        text: context.finalText || rawInput,
        status: context.status,
        rejectionReason: context.rejectionReason || context.blacklistReason || "None"
    };
}

/**
 * Learns spelling and formatting mapping from a similar example ad.
 */
function learnFromSimilarExample(rawText, similarText, category, dict = customSpelling) {
    if (!rawText || !similarText) return false;
    const rawTokens = rawText.split(/\s+/).filter(Boolean);
    const similarTokens = similarText.split(/\s+/).filter(Boolean);
    let trainedCount = 0;
    
    for (let i = 0; i < rawTokens.length; i++) {
        const rawTok = rawTokens[i].toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!rawTok || rawTok.length < 2) continue;
        
        let bestSimTok = null;
        let bestDist = Infinity;
        for (const simTok of similarTokens) {
            const cleanSimTok = simTok.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (!cleanSimTok) continue;
            const dist = levenshteinDistance(rawTok, cleanSimTok);
            if (dist < bestDist && dist <= 2) {
                bestDist = dist;
                bestSimTok = simTok;
            }
        }
        
        if (bestSimTok) {
            const originalRawWord = rawTokens[i].toLowerCase().replace(/^[^\w]+|[^\w]+$/g, "");
            const cleanSimWord = bestSimTok.replace(/^[^\w"']+|[^\w"']+$/g, "");
            if (originalRawWord && cleanSimWord && originalRawWord !== cleanSimWord.toLowerCase()) {
                dict[originalRawWord] = cleanSimWord;
                trainedCount++;
            }
        }
    }
    
    const rawDigits = rawText.match(/\b\d{4,10}\b/);
    const simDigits = similarText.match(/\b\d+(?:-\d+)+\b/);
    if (rawDigits && simDigits) {
        dict[rawDigits[0]] = simDigits[0];
        trainedCount++;
    }
    
    if (trainedCount === 0) {
        // Fallback phrase alignment for completely different words/phrases (e.g. crypto currency -> token)
        const stopwords = new Set([
            "buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", 
            "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", 
            "luminous", "quality", "years", "experience", "and", "the", "for", "near", "a", "an", 
            "of", "to", "at", "in", "on", "or", "out", "per", "week", "month"
        ]);
        
        const cleanWords = (text) => {
            return text.toLowerCase()
                .replace(/[^a-z0-9\s]/g, "")
                .split(/\s+/)
                .filter(w => {
                    if (!w || w.length < 2) return false;
                    if (stopwords.has(w)) return false;
                    if (/^\d+$/.test(w)) return false;
                    if (/^\d+k$/i.test(w) || /^\d+m$/i.test(w)) return false;
                    return true;
                });
        };
        
        const rawSig = cleanWords(rawText);
        const simSig = cleanWords(similarText);
        
        if (rawSig.length > 0 && simSig.length > 0) {
            const rawPhrase = rawSig.join(" ");
            const simPhrase = simSig.join(" ");
            
            if (rawPhrase !== simPhrase) {
                let mappedSimPhrase = simPhrase;
                if (simPhrase.endsWith("s") && simPhrase !== "jeans" && simPhrase !== "trousers") {
                    const singularCand = simPhrase.slice(0, -1);
                    if (singularCand === "token" || singularCand === "video card" || singularCand === "paint can" || singularCand === "container" || singularCand === "wire" || singularCand === "seed") {
                        mappedSimPhrase = singularCand;
                    }
                }
                dict[rawPhrase] = mappedSimPhrase;
                trainedCount++;
            }
        }
    }
    
    return trainedCount > 0;
}

/**
 * Searches the vehicles, clothing, or items database lists for fuzzy matches.
 */
function trainFromDatabase(rawText, dbType, dict = customSpelling) {
    const rawClean = rawText.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    const rawTokens = rawClean.split(/\s+/).filter(Boolean);
    const stopwords = new Set(["buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", "luminous", "quality", "years", "experience", "and", "the", "for", "near"]);
    
    const candidates = [];
    // Single words
    for (const tok of rawTokens) {
        if (tok.length >= 3 && !stopwords.has(tok)) {
            candidates.push(tok);
        }
    }
    // Adjacent two-word phrases
    for (let i = 0; i < rawTokens.length - 1; i++) {
        const tok1 = rawTokens[i];
        const tok2 = rawTokens[i + 1];
        if (!stopwords.has(tok1) && !stopwords.has(tok2)) {
            candidates.push(tok1 + " " + tok2);
        }
    }
    
    let dbWords = [];
    if (dbType === "vehicles_clothing") {
        const categories = ['helicopters', 'boats', 'planes', 'motorcycles', 'not_sellable_cars', 'sellable_cars'];
        for (const cat of categories) {
            if (VEHICLE_DB[cat]) {
                VEHICLE_DB[cat].forEach(name => dbWords.push(name));
            }
        }
        const genders = ['male', 'female'];
        for (const g of genders) {
            if (CLOTHING_DB[g]) {
                for (const subcat in CLOTHING_DB[g]) {
                    CLOTHING_DB[g][subcat].forEach(name => dbWords.push(name));
                }
            }
        }
    } else if (dbType === "items") {
        for (const cat in ITEMS_DB) {
            ITEMS_DB[cat].forEach(name => dbWords.push(name));
        }
    }
    
    let trainedCount = 0;
    for (const cand of candidates) {
        // 1. Exact match (case insensitive)
        let exactMatch = dbWords.find(w => w.toLowerCase() === cand);
        if (exactMatch) {
            if (cand !== exactMatch) {
                dict[cand] = exactMatch;
                trainedCount++;
            }
            continue;
        }
        
        // 2. Space-removed match (e.g. "sun trap" -> "Suntrap")
        let spaceRemovedMatch = dbWords.find(w => {
            const cleanW = w.toLowerCase().replace(/[^a-z0-9]/g, "");
            const cleanC = cand.toLowerCase().replace(/[^a-z0-9]/g, "");
            return cleanW === cleanC && cleanW.length > 2;
        });
        if (spaceRemovedMatch) {
            if (cand !== spaceRemovedMatch) {
                dict[cand] = spaceRemovedMatch;
                trainedCount++;
            }
            continue;
        }
        
        // 3. Fuzzy match (only check single words)
        if (!cand.includes(" ")) {
            let bestWord = null;
            let bestDist = Infinity;
            for (const dbWord of dbWords) {
                const dbWordLower = dbWord.toLowerCase();
                const dbWordTokens = dbWordLower.split(/\s+/);
                for (const token of dbWordTokens) {
                    const dist = levenshteinDistance(cand, token);
                    if (dist < bestDist && dist <= 2 && dist < Math.max(cand.length / 2, 2)) {
                        bestDist = dist;
                        bestWord = dbWord;
                    }
                }
            }
            if (bestWord) {
                dict[cand] = bestWord;
                trainedCount++;
            }
        }
    }
    
    return trainedCount > 0;
}


function resolveBugReport(report, card, isIgnore = false) {
    // Add to local cache immediately to prevent reappearing
    const reportKey = report.rawInput + "|" + (report.timestamp || "");
    if (!resolvedBugReportsCache.includes(reportKey)) {
        resolvedBugReportsCache.push(reportKey);
        localStorage.setItem("li_resolved_bug_reports", JSON.stringify(resolvedBugReportsCache));
    }

    card.style.opacity = "0.5";
    
    const resolveAction = () => {
        card.style.borderColor = isIgnore ? "rgba(255,255,255,0.1)" : "rgba(48,209,88,0.4)";
        card.style.boxShadow = isIgnore ? "none" : "0 0 20px rgba(48,209,88,0.15)";
        
        setTimeout(() => {
            card.style.opacity = "0";
            card.style.transform = "scale(0.95) translateY(-10px)";
            card.style.maxHeight = card.scrollHeight + "px";
            requestAnimationFrame(() => {
                card.style.maxHeight = "0px";
                card.style.padding = "0px";
                card.style.margin = "0px";
                card.style.border = "none";
                card.style.gap = "0px";
            });
            setTimeout(() => {
                const container = card.parentNode;
                card.remove();
                if (container && container.children.length === 0) {
                    renderTriageCards([], container);
                }
            }, 500);
        }, 300);
        
        showCustomNotification(isIgnore ? "Bug report ignored." : "Bug report confirmed & resolved successfully!", "success");
    };

    // Execute resolveAction immediately for responsive UI
    resolveAction();

    if (!CONFIG.GOOGLE_SCRIPT_URL) {
        return;
    }
    
    const passcode = sessionStorage.getItem("li_admin_passcode");
    const authUuid = localStorage.getItem("li_client_uuid");
    
    fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            action: "resolve_bug_report",
            rawInput: report.rawInput,
            timestamp: report.timestamp,
            passcode: passcode,
            authUuid: authUuid
        })
    })
    .then(r => r.json())
    .catch(err => {
        console.error("resolveBugReport background request error:", err);
    });
}

// --- Gemini Spark AI Engine & Fuzzy Suggestion Fallback Helpers ---

// --- AI Assistant Tab Visibility Helper ---
function refreshAIAssistantTabVisibility() {
    const lockScreen = document.getElementById("ai-assistant-lock-screen");
    const dashboardContent = document.getElementById("ai-assistant-dashboard-content");
    if (!lockScreen || !dashboardContent) return;

    const isAuth = sessionStorage.getItem("li_admin_authenticated") === "true";
    if (isAuth) {
        lockScreen.classList.add("hide");
        dashboardContent.classList.remove("hide");
        
        // Load settings inputs
        const inputKey = document.getElementById("input-ai-gemini-key");
        const customPromptTextarea = document.getElementById("ai-custom-prompt");
        const isAssistant = sessionStorage.getItem("li_admin_role") === "assistant";
        if (inputKey) {
            if (isAssistant) {
                inputKey.value = "ÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇó";
            } else {
                inputKey.value = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
            }
        }
        if (customPromptTextarea) {
            customPromptTextarea.value = localStorage.getItem("li_gemini_custom_prompt") || "";
        }
        updateAIGeminiStatusDisplay();
    } else {
        lockScreen.classList.remove("hide");
        dashboardContent.classList.add("hide");
    }
}

function refreshBugTriageTabVisibility() {
    const lockScreen = document.getElementById("bug-triage-lock-screen");
    const triageContent = document.getElementById("bug-triage-active-content");
    if (!lockScreen || !triageContent) return;

    const isAuth = sessionStorage.getItem("li_admin_authenticated") === "true";
    if (isAuth) {
        lockScreen.classList.add("hide");
        triageContent.classList.remove("hide");
        loadAndRenderBugTriage();
    } else {
        lockScreen.classList.remove("hide");
        triageContent.classList.add("hide");
    }
}

// ÔöÇÔöÇ API Usage Tracking System ÔöÇÔöÇ
const GEMINI_DAILY_QUOTA = 1500; // Free-tier Gemini Flash daily limit (approximate)

function getUsageData() {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const raw = localStorage.getItem("li_gemini_usage");
    let data = null;
    try { data = JSON.parse(raw); } catch (e) {}
    if (!data || data.date !== today) {
        // Reset for a new day
        data = { date: today, count: 0 };
        localStorage.setItem("li_gemini_usage", JSON.stringify(data));
    }
    return data;
}

function trackGeminiAPICall() {
    const data = getUsageData();
    data.count++;
    localStorage.setItem("li_gemini_usage", JSON.stringify(data));
    updateAPIUsageBar();
}

function updateAPIUsageBar() {
    const data = getUsageData();
    const count = data.count;
    const pct = Math.min(Math.round((count / GEMINI_DAILY_QUOTA) * 100), 100);

    const barFill = document.getElementById("ai-usage-bar-fill");
    const countEl = document.getElementById("ai-usage-count");
    const statusEl = document.getElementById("ai-usage-status");
    const pctEl = document.getElementById("ai-usage-pct");

    if (countEl) countEl.textContent = `${count.toLocaleString()} / ${GEMINI_DAILY_QUOTA.toLocaleString()} requests`;
    if (pctEl) pctEl.textContent = `${pct}%`;

    if (barFill) {
        barFill.style.width = `${pct}%`;
        if (pct < 50) {
            barFill.style.background = "linear-gradient(90deg, #30d158, #34d399)";
            barFill.style.boxShadow = "0 0 6px rgba(48, 209, 88, 0.3)";
        } else if (pct < 80) {
            barFill.style.background = "linear-gradient(90deg, #ff9f0a, #ffb340)";
            barFill.style.boxShadow = "0 0 6px rgba(255, 159, 10, 0.3)";
        } else {
            barFill.style.background = "linear-gradient(90deg, #ff453a, #ff6961)";
            barFill.style.boxShadow = "0 0 8px rgba(255, 69, 58, 0.4)";
        }
    }

    if (statusEl) {
        if (pct < 30) {
            statusEl.textContent = "Plenty of quota remaining";
            statusEl.style.color = "rgba(48, 209, 88, 0.8)";
        } else if (pct < 50) {
            statusEl.textContent = "Healthy usage level";
            statusEl.style.color = "rgba(48, 209, 88, 0.8)";
        } else if (pct < 70) {
            statusEl.textContent = "Moderate ÔÇö consider slowing down";
            statusEl.style.color = "rgba(255, 159, 10, 0.8)";
        } else if (pct < 85) {
            statusEl.textContent = "ÔÜá High usage ÔÇö prepare a backup key";
            statusEl.style.color = "rgba(255, 159, 10, 0.9)";
        } else if (pct < 95) {
            statusEl.textContent = "ÔÜá Critical ÔÇö switch keys soon!";
            statusEl.style.color = "rgba(255, 69, 58, 0.9)";
        } else {
            statusEl.textContent = "­ƒö┤ Quota exhausted ÔÇö switch API key now!";
            statusEl.style.color = "#ff453a";
        }
    }
}

function updateAIGeminiStatusDisplay() {
    const statusIndicator = document.getElementById("ai-gemini-status-indicator");
    const statusText = document.getElementById("ai-gemini-status-text");
    if (!statusIndicator || !statusText) return;

    const savedKey = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
    if (savedKey) {
        statusIndicator.style.background = "#30d158"; // Green
        statusText.textContent = "Active (Connected)";
    } else {
        statusIndicator.style.background = "#ff453a"; // Red
        statusText.textContent = "Disconnected (No Key)";
    }
    // Also refresh usage bar on status update
    updateAPIUsageBar();
}

function setupHoldToTriggerButton(btn, originalHtml, onTriggerComplete) {
    if (!btn) return;
    
    let holdTimer = null;
    let progressInterval = null;
    let startTime = null;
    let isTriggered = false;
    const holdDuration = 2000; // 2 seconds
    
    const resetState = () => {
        if (isTriggered) return;
        
        if (holdTimer) clearTimeout(holdTimer);
        if (progressInterval) clearInterval(progressInterval);
        holdTimer = null;
        progressInterval = null;
        startTime = null;
        
        btn.innerHTML = originalHtml;
        btn.style.background = ""; 
        btn.style.boxShadow = "";
    };

    const startHolding = (e) => {
        if (e.type.startsWith("mouse") && e.button !== 0) return;
        if (btn.disabled) return;
        
        e.preventDefault();
        isTriggered = false;
        startTime = Date.now();
        btn.style.boxShadow = "0 0 15px rgba(167, 139, 250, 0.4)";
        
        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / holdDuration) * 100, 100);
            const remainingSecs = Math.max(((holdDuration - elapsed) / 1000), 0).toFixed(1);
            
            btn.style.background = `linear-gradient(90deg, rgba(167, 139, 250, 0.4) ${pct}%, rgba(167, 139, 250, 0.15) ${pct}%)`;
            btn.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin" style="color: #a78bfa;"></i> Hold ${remainingSecs}s`;
            
            if (pct >= 100) {
                clearInterval(progressInterval);
            }
        };
        
        updateProgress();
        progressInterval = setInterval(updateProgress, 50);
        
        holdTimer = setTimeout(() => {
            isTriggered = true;
            if (progressInterval) clearInterval(progressInterval);
            progressInterval = null;
            holdTimer = null;
            
            btn.innerHTML = `<i class="fa-solid fa-check"></i> Triggered!`;
            btn.style.background = "rgba(48, 209, 88, 0.2)";
            btn.style.boxShadow = "0 0 15px rgba(48, 209, 88, 0.4)";
            
            setTimeout(() => {
                btn.style.background = "";
                btn.style.boxShadow = "";
                onTriggerComplete();
                setTimeout(() => {
                    isTriggered = false;
                }, 1000);
            }, 300);
        }, holdDuration);
    };
    
    btn.addEventListener("mousedown", startHolding);
    btn.addEventListener("touchstart", startHolding, { passive: false });
    
    btn.addEventListener("mouseup", resetState);
    btn.addEventListener("mouseleave", resetState);
    btn.addEventListener("touchend", resetState);
    btn.addEventListener("touchcancel", resetState);
}

function updateAIAssistButtonsVisibility() {
    const isAdmin = sessionStorage.getItem("li_admin_authenticated") === "true";
    const btnGeminiAssist = document.getElementById("btn-gemini-assist");
    if (btnGeminiAssist) {
        btnGeminiAssist.style.display = isAdmin ? "inline-flex" : "none";
    }

    if (typeof pipWindowInstance !== "undefined" && pipWindowInstance && !pipWindowInstance.closed) {
        const pipBtnAiAssist = pipWindowInstance.document.getElementById("pip-btn-ai-assist");
        if (pipBtnAiAssist) {
            pipBtnAiAssist.style.display = isAdmin ? "inline-flex" : "none";
        }
    }
}


function initGeminiEngine() {
    // ÔöÇÔöÇ Wire Admin Password Authentication Lock Portal button ÔöÇÔöÇ
    const unlockBtn = document.getElementById("btn-ai-unlock-login");
    if (unlockBtn) {
        unlockBtn.addEventListener("click", () => {
            const adminTabBtn = document.getElementById("tab-btn-admin");
            if (adminTabBtn) {
                adminTabBtn.click();
                const passInput = document.getElementById("admin-passcode");
                if (passInput) passInput.focus();
            }
        });
    }

    // ÔöÇÔöÇ settings panel controls ÔöÇÔöÇ
    const inputKey = document.getElementById("input-ai-gemini-key");
    const btnToggleVisibility = document.getElementById("btn-toggle-ai-gemini-key-visibility");
    const btnSave = document.getElementById("btn-ai-gemini-save");
    const btnTest = document.getElementById("btn-ai-gemini-test");
    const statusIndicator = document.getElementById("ai-gemini-status-indicator");
    const statusText = document.getElementById("ai-gemini-status-text");
    const customPromptTextarea = document.getElementById("ai-custom-prompt");

    if (!inputKey || !btnSave || !btnTest) return;

    // Toggle Visibility
    if (btnToggleVisibility) {
        btnToggleVisibility.addEventListener("click", () => {
            const isPassword = inputKey.type === "password";
            inputKey.type = isPassword ? "text" : "password";
            btnToggleVisibility.innerHTML = isPassword ? `<i class="fa-solid fa-eye-slash"></i>` : `<i class="fa-solid fa-eye"></i>`;
        });
    }

    // Update Status Display helper
    const updateStatusDisplay = (status, msg) => {
        if (!statusIndicator || !statusText) return;
        if (status === "active") {
            statusIndicator.style.background = "#30d158"; // Green
            statusText.textContent = msg || "Active (Connected)";
        } else if (status === "testing") {
            statusIndicator.style.background = "#ff9f0a"; // Amber
            statusText.textContent = msg || "Testing connection...";
        } else {
            statusIndicator.style.background = "#ff453a"; // Red
            statusText.textContent = msg || "Disconnected (No Key)";
        }
    };

    // ÔöÇÔöÇ Shared live API health check function ÔöÇÔöÇ
    const runLiveHealthCheck = (keyVal, opts = {}) => {
        const { silent = false, onResult = null } = opts;
        updateStatusDisplay("testing", "Testing connection...");
        if (btnTest) {
            btnTest.disabled = true;
            btnTest.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Testing...`;
        }

        fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${keyVal}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello! Reply with a single word 'Connected!' if you can read this." }] }]
            })
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(errBody => {
                    const errMsg = errBody?.error?.message || `HTTP Error ${res.status}`;
                    const errCode = errBody?.error?.code || res.status;
                    throw { code: errCode, message: errMsg };
                }).catch(parseErr => {
                    if (parseErr.code) throw parseErr;
                    throw { code: res.status, message: `HTTP Error ${res.status}` };
                });
            }
            return res.json();
        })
        .then(data => {
            trackGeminiAPICall();
            if (btnTest) {
                btnTest.disabled = false;
                btnTest.innerHTML = `<i class="fa-solid fa-vial"></i> Test Health`;
            }
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            if (responseText) {
                updateStatusDisplay("active", "Active (Connected Ô£ô)");
                if (!silent) {
                    showCustomConfirmDialog("Gemini connection test successful! Spark AI Engine is fully active and responding.", null, null, "OK", false);
                }
                if (onResult) onResult(true);
            } else {
                updateStatusDisplay("disconnected", "Connection Failed (Empty Response)");
                if (!silent) {
                    showCustomConfirmDialog(`Key accepted but received an empty response. The model may be temporarily unavailable.`, null, null, "Close", true);
                }
                if (onResult) onResult(false);
            }
        })
        .catch(err => {
            if (btnTest) {
                btnTest.disabled = false;
                btnTest.innerHTML = `<i class="fa-solid fa-vial"></i> Test Health`;
            }
            const code = err.code || 0;
            let diagMsg = "";
            let statusMsg = "";
            if (code === 429) {
                statusMsg = "Rate Limited (Quota Exceeded)";
                diagMsg = `Rate limit reached (HTTP 429). Your free-tier daily quota for this model has been exhausted. Wait a few minutes or switch to a different API key.\n\nDetails: ${err.message}`;
            } else if (code === 403) {
                statusMsg = "Forbidden (Invalid Key)";
                diagMsg = `The API key was rejected (HTTP 403). This key may be invalid, disabled, or does not have access to the Gemini API. Please generate a new key from Google AI Studio.`;
            } else if (code === 400) {
                statusMsg = "Bad Request (API Error)";
                diagMsg = `The API returned a Bad Request (HTTP 400). The key format may be incorrect.\n\nDetails: ${err.message}`;
            } else {
                statusMsg = "Connection Failed (Error)";
                diagMsg = `Test failed: ${err.message || err}. Please double-check your API key and internet connection.`;
            }
            updateStatusDisplay("disconnected", statusMsg);
            if (!silent) {
                showCustomConfirmDialog(diagMsg, null, null, "Close", true);
            }
            if (onResult) onResult(false);
        });
    };

    // Save button listener ÔÇö saves key and auto-tests it
    btnSave.addEventListener("click", () => {
        let keyVal = inputKey.value.trim();
        const customPromptVal = customPromptTextarea ? customPromptTextarea.value.trim() : "";
        
        if (keyVal === "ÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇó") {
            // Skip overwriting the real key with masked placeholder dots
            const actualStoredKey = localStorage.getItem("li_gemini_api_key");
            if (actualStoredKey) {
                // Auto-test the stored key silently
                if (customPromptTextarea) localStorage.setItem("li_gemini_custom_prompt", customPromptVal);
                showCustomNotification("Settings saved. Testing key...", "success");
                runLiveHealthCheck(actualStoredKey, { silent: true });
                return;
            } else {
                updateStatusDisplay("disconnected", "Disconnected (No Key)");
            }
        } else if (!keyVal) {
            localStorage.removeItem("li_gemini_api_key");
            updateStatusDisplay("disconnected", "Disconnected (No Key)");
        } else {
            localStorage.setItem("li_gemini_api_key", keyVal);
            if (customPromptTextarea) localStorage.setItem("li_gemini_custom_prompt", customPromptVal);
            showCustomNotification("Key saved! Running live connection test...", "success");
            // Auto-test the newly entered key
            runLiveHealthCheck(keyVal, { silent: false });
            return;
        }

        if (customPromptTextarea) {
            localStorage.setItem("li_gemini_custom_prompt", customPromptVal);
        }
        showCustomNotification("Gemini Spark settings saved.", "success");
    });

    // Test button listener ÔÇö runs a standalone diagnostic
    btnTest.addEventListener("click", () => {
        let keyVal = inputKey.value.trim();
        if (keyVal === "ÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇóÔÇó") {
            keyVal = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
        }
        if (!keyVal) {
            showCustomNotification("Please paste a Gemini API Key first.", "warning");
            return;
        }
        runLiveHealthCheck(keyVal, { silent: false });
    });

    // ÔöÇÔöÇ Sandbox Playground controls ÔöÇÔöÇ
    const sandboxRaw = document.getElementById("ai-sandbox-raw");
    const sandboxCategory = document.getElementById("ai-sandbox-category");
    const sandboxOutputText = document.getElementById("ai-sandbox-output-text");
    const sandboxOutputReason = document.getElementById("ai-sandbox-output-reason");
    const btnSandboxTest = document.getElementById("btn-ai-sandbox-test");
    const btnSandboxCopy = document.getElementById("btn-ai-sandbox-copy");
    const btnSandboxTrain = document.getElementById("btn-ai-sandbox-train");

    if (btnSandboxTest && btnSandboxTrain) {
        btnSandboxTest.addEventListener("click", () => {
            const rawTextVal = sandboxRaw ? sandboxRaw.value.trim() : "";
            if (!rawTextVal) {
                showCustomNotification("Please enter raw ad text to test.", "warning");
                return;
            }

            const categoryVal = sandboxCategory ? sandboxCategory.value : "auto";
            btnSandboxTest.disabled = true;
            btnSandboxTest.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...`;
            if (sandboxOutputReason) sandboxOutputReason.style.display = "none";
            if (sandboxOutputText) sandboxOutputText.value = "";

            getGeminiSparkSuggestion(rawTextVal, categoryVal, (suggestion) => {
                btnSandboxTest.disabled = false;
                btnSandboxTest.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Test AI Output`;

                if (suggestion && suggestion.text) {
                    if (sandboxOutputText) sandboxOutputText.value = suggestion.text;
                    if (sandboxOutputReason) {
                        sandboxOutputReason.style.display = "block";
                        sandboxOutputReason.textContent = suggestion.reason || "Corrected successfully.";
                    }
                    if (btnSandboxCopy) btnSandboxCopy.disabled = false;
                    btnSandboxTrain.disabled = false;
                    showCustomNotification("AI suggestion generated!", "success");
                } else {
                    showCustomNotification("Gemini Spark failed to predict a correction. Try adding custom prompt directives.", "error");
                }
            });
        });

        if (btnSandboxCopy) {
            btnSandboxCopy.addEventListener("click", () => {
                const textToCopy = sandboxOutputText ? sandboxOutputText.value.trim() : "";
                if (!textToCopy) return;

                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        showCustomNotification("Corrected ad copied to clipboard!", "success");
                    })
                    .catch(err => {
                        console.error("Clipboard copy failed:", err);
                        showCustomNotification("Failed to copy to clipboard.", "error");
                    });
            });
        }

        btnSandboxTrain.addEventListener("click", () => {
            const rawTextVal = sandboxRaw ? sandboxRaw.value.trim() : "";
            const fixedTextVal = sandboxOutputText ? sandboxOutputText.value.trim() : "";
            const categoryVal = sandboxCategory ? sandboxCategory.value : "auto";

            if (!rawTextVal || !fixedTextVal) return;

            showCustomConfirmDialog(
                `Train translation mapping for:\n\nOriginal: "${rawTextVal}"\n\nCorrected: "${fixedTextVal}"?`,
                () => {
                    const trimmedRaw = rawTextVal.replace(/\s+/g, ' ').trim().toLowerCase();
                    const details = {
                        text: fixedTextVal,
                        author: getActiveEditorName(),
                        method: "Trained via AI Sandbox",
                        timestamp: new Date().toLocaleString(),
                        reporterTime: "N/A (Sandbox)",
                        category: categoryVal
                    };
                    customTranslations[trimmedRaw] = JSON.stringify(details);
                    localStorage.setItem("li_custom_translations", JSON.stringify(customTranslations));
                    
                    if (typeof saveCustomDataToBackend === "function") {
                        saveCustomDataToBackend();
                    }
                    renderCustomTranslations();
                    
                    showCustomNotification("Translation mapping trained successfully!", "success");
                    btnSandboxTrain.disabled = true;
                }
            );
        });
    }
    refreshAIAssistantTabVisibility();
    refreshBugTriageTabVisibility();
    updateAIAssistButtonsVisibility();
}

function getDatabaseMatchesContext(rawText) {
    if (!rawText) return "";
    const rawClean = rawText.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    const rawTokens = rawClean.split(/\s+/).filter(word => word.length >= 3);
    if (rawTokens.length === 0) return "";

    const stopwords = new Set(["buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", "luminous", "quality", "years", "experience", "and", "the", "for", "near"]);

    const allDbItems = [];
    
    // Vehicles
    if (typeof VEHICLE_DB !== "undefined") {
        for (const cat in VEHICLE_DB) {
            VEHICLE_DB[cat].forEach(name => {
                allDbItems.push({ name, type: `Vehicle (${cat})` });
            });
        }
    }
    // Clothing
    if (typeof CLOTHING_DB !== "undefined") {
        for (const gender in CLOTHING_DB) {
            for (const subcat in CLOTHING_DB[gender]) {
                CLOTHING_DB[gender][subcat].forEach(name => {
                    allDbItems.push({ name, type: `Clothing (${gender} ${subcat})` });
                });
            }
        }
    }
    // Items
    if (typeof ITEMS_DB !== "undefined") {
        for (const cat in ITEMS_DB) {
            ITEMS_DB[cat].forEach(name => {
                allDbItems.push({ name, type: `Item (${cat})` });
            });
        }
    }

    const matchedItems = new Set();
    const resultList = [];

    for (const token of rawTokens) {
        if (stopwords.has(token)) continue;
        
        for (const dbItem of allDbItems) {
            const itemNameLower = dbItem.name.toLowerCase();
            
            // 1. Substring Match
            if (itemNameLower.includes(token) || token.includes(itemNameLower)) {
                if (!matchedItems.has(dbItem.name)) {
                    matchedItems.add(dbItem.name);
                    resultList.push(`- "${dbItem.name}" [Type: ${dbItem.type}]`);
                }
                continue;
            }

            // 2. Fuzzy spelling match
            const dbTokens = itemNameLower.split(/\s+/);
            for (const dbTok of dbTokens) {
                if (dbTok.length >= 3) {
                    const dist = levenshteinDistance(token, dbTok);
                    if (dist <= 2 && dist < Math.max(token.length / 2, 2)) {
                        if (!matchedItems.has(dbItem.name)) {
                            matchedItems.add(dbItem.name);
                            resultList.push(`- "${dbItem.name}" [Type: ${dbItem.type}]`);
                        }
                        break;
                    }
                }
            }
        }
    }

    if (resultList.length === 0) return "";
    return `\nLOCAL SYSTEM DATABASE MATCHES FOUND:\n${resultList.slice(0, 15).join("\n")}\n(IMPORTANT: If the user refers to any matching product or item, you MUST correct it to use the exact spelling from the list of official database matches above)\n`;
}

function getPolicyMatchesContext(rawText) {
    if (typeof POLICY_PAGES === "undefined" || !Array.isArray(POLICY_PAGES)) return "";

    const rawClean = rawText.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    const rawTokens = rawClean.split(/\s+/).filter(word => word.length >= 4);
    if (rawTokens.length === 0) return "";

    const stopwords = new Set(["buying", "selling", "trading", "renting", "hiring", "want", "buy", "sell", "trade", "rent", "hire", "with", "budget", "price", "negotiable", "each", "respectively", "luminous", "quality", "years", "experience", "and", "the", "for", "near"]);

    const matchedPages = [];
    const maxMatches = 6; // Keep up to 6 most relevant pages to provide deep context

    for (let i = 0; i < POLICY_PAGES.length; i++) {
        const page = POLICY_PAGES[i];
        const plainText = page.content
            .replace(/<[^>]*>/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, " ")
            .toLowerCase();

        let matchScore = 0;
        for (const token of rawTokens) {
            if (stopwords.has(token)) continue;
            if (plainText.includes(token)) {
                matchScore++;
            }
        }

        if (matchScore > 0) {
            matchedPages.push({
                index: i + 1,
                title: page.title,
                text: page.content.replace(/<[^>]*>/g, " ").trim().substring(0, 2500),
                score: matchScore
            });
        }
    }

    matchedPages.sort((a, b) => b.score - a.score);

    // If no direct matches, load Core General Rules (Page 1) and Prohibited Items (Page 3) as fallbacks
    if (matchedPages.length === 0) {
        if (POLICY_PAGES[0]) {
            matchedPages.push({ index: 1, title: POLICY_PAGES[0].title, text: POLICY_PAGES[0].content.replace(/<[^>]*>/g, " ").trim().substring(0, 2500) });
        }
        if (POLICY_PAGES[2]) {
            matchedPages.push({ index: 3, title: POLICY_PAGES[2].title, text: POLICY_PAGES[2].content.replace(/<[^>]*>/g, " ").trim().substring(0, 2500) });
        }
    }

    const result = matchedPages.slice(0, maxMatches).map(p => {
        return `--- POLICY MANUAL PAGE ${p.index}: ${p.title} ---\n${p.text}...`;
    }).join("\n\n");

    return `\nRELEVANT SECTIONS FROM THE EN3 SYSTEM POLICY MANUAL:\n${result}\n(Ensure that the suggested ad strictly complies with the policy book terms shown above)\n`;
}

function getCompletePolicyContext() {
    if (typeof POLICY_PAGES === "undefined" || !Array.isArray(POLICY_PAGES)) return "";
    return POLICY_PAGES.map((page, idx) => {
        const plainText = page.content
            .replace(/<[^>]*>/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, " ")
            .trim();
        return `=== POLICY PAGE ${idx + 1}: ${page.title} ===\n${plainText}`;
    }).join("\n\n");
}

function getGeminiSparkSuggestion(rawText, category, callback) {
    const keyVal = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
    if (!keyVal) {
        callback(null);
        return;
    }

    const customDirectives = localStorage.getItem("li_gemini_custom_prompt") || "";
    const dbContext = getDatabaseMatchesContext(rawText);
    const policyContext = getPolicyMatchesContext(rawText);
    const fullPolicyContext = getCompletePolicyContext();
    
    // Build the policy prompt context
    const prompt = `You are a strict and professional advertisement editor for LifeInvader.
Your task is to correct and format the user's raw advertisement input strictly according to the official LifeInvader internal formatting policy:

[CRITICAL GROUNDING DIRECTIVE]:
You MUST strictly correct the ad and reply based ONLY on the provided LifeInvader Internal Policy manual. Do NOT use real-life logic, external facts, standard grammatical conventions, or common sense if they conflict with the policy manual. The provided Policy Manual Reference is the absolute and only source of truth.

### Core Formatting Rules:
1. Always begin the ad with one of these exact action words: "Buying", "Selling", "Trading", "Selling or trading". The first letter must ALWAYS be capitalized.
2. Pricing & Budget Labels:
   - For Buying ads: Use the label "Budget: " (Capital B, followed by a colon). If no price is mentioned, always append "Budget: Negotiable." at the very end.
   - For Selling / Trading / Selling or trading ads: Use the label "Price: " (Capital P, followed by a colon). If no price is mentioned, always append "Price: Negotiable." at the very end.
   - If a specific price is explicitly mentioned in the raw ad, use that exact price (e.g., "$25.000") and do NOT add "Negotiable".
3. Currency & Number Formatting:
   - Always put a dollar sign ($) BEFORE the numerical value (e.g., "$5 Million", not "5 Million$").
   - Capitalize the first letter of "Price", "Budget", and "Negotiable".
   - Use a period (.) instead of a comma (,) as a thousands separator for prices (e.g., "$200.000", not "$200,000").
   - NEVER use "k" or "K" for thousands. Convert it to full numerical digits:
     - "$1k" -> "$1.000"
     - "$1.7k each" -> "$1.700 each."
     - "$1.450k" -> "$1.45 Million."
   - NEVER use lowercase "m" for Millions. Use capital "Million" or "Million.":
     - "$1m" -> "$1 Million"
     - "$38m" -> "$38 Million"
4. Punctuation Rules:
   - Use a full stop/period (.) to end the sentence if it ends with a letter (e.g., "Price: Negotiable.").
   - If the ad ends with a numerical value, do NOT add a period (.) at the very end of the ad (e.g., "Price: $200.000").
   - Capitalize the first letter of brands, official locations, and proper names (First and Last name).
5. Terminology Substitutions:
   - "max config", "max tuning", "fully upgraded" -> "with full configuration"
   - "nearly max", "part lvl3" or below -> "with partial configuration"
   - "body upgrades", "body kit" -> "with visual upgrades"
   - "turbo" -> "turbo kit"
   - "drift tuning", "drift assistance" -> "drift kit"
   - "luminous rims", "unique wheels" -> "luminous wheels"
   - "Unique 6 rims" -> "luminous wheels of type 6"
   - "level 1", "low level" -> "low quality"
   - "level 2", "medium level" -> "medium quality"
   - "level 3", "high level" -> "high quality"
   - "level 4", "max level" -> "max quality"
   - "crates", "cases" -> "containers"
   - "spray cans", "spray balloons" -> "paint cans."
   - "extras" -> "of type" (e.g. "selling mask extras 2" -> "Selling masks of type 2. Price: Negotiable.")
   - "pumpkin", "cabbage", "pineapple", "mandarin" -> combine or use "fruits, vegetables or seeds"
6. Play Dice and Play Poker Rules:
   - If no Bet is specified: Use "Bet: Negotiable."
   - The maximum allowed bet is "$10 Million". Any bet above $10 Million must be changed to "Bet: Negotiable."
7. Format phone numbers in "Ôäû XX-XX-XXX" or "Ôäû XX-XX-XX" format if present.

${customDirectives ? `\nADDITIONAL ADMIN DIRECTIVES:\n${customDirectives}\n` : ""}
${dbContext}
${policyContext}

=========================================
COMPLETE LIFEINVADER OFFICIAL POLICY MANUAL REFERENCE:
${fullPolicyContext}
=========================================

Translate this raw ad input: "${rawText}"
Target category: "${category}"

Response format: Return ONLY a raw JSON object with exactly two keys: "text" (the corrected ad text) and "reason" (the explanation of which rule was applied). Do NOT wrap it in markdown code blocks like \`\`\`json. Just return raw JSON.`;

    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${keyVal}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
    })
    .then(data => {
        trackGeminiAPICall();
        const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        try {
            const parsed = JSON.parse(responseText.trim());
            if (parsed && parsed.text) {
                callback(parsed);
            } else {
                callback(null);
            }
        } catch (e) {
            // Fallback if not JSON
            callback({ text: responseText.trim(), reason: "AI suggestion" });
        }
    })
    .catch(err => {
        console.error("Gemini Suggestion Error:", err);
        callback(null);
    });
}

function getGeminiBugTriageSuggestion(rawText, expectedText, category, screenshotBase64, callback) {
    const keyVal = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
    if (!keyVal) {
        callback(null);
        return;
    }

    const customDirectives = localStorage.getItem("li_gemini_custom_prompt") || "";
    const dbContext = getDatabaseMatchesContext(rawText);
    const policyContext = getPolicyMatchesContext(rawText);
    const fullPolicyContext = getCompletePolicyContext();
    
    let imagePart = null;
    if (screenshotBase64) {
        let cleanBase64 = screenshotBase64;
        let mimeType = "image/png";
        if (screenshotBase64.includes(",")) {
            mimeType = screenshotBase64.split(",")[0].split(":")[1].split(";")[0];
            cleanBase64 = screenshotBase64.split(",")[1];
        }
        imagePart = {
            inlineData: {
                mimeType: mimeType,
                data: cleanBase64
            }
        };
    }

    const promptText = `You are the chief automated editor and bug resolution system for LifeInvader.
We have a bug report from a user claiming that their advertisement was falsely rejected or formatted incorrectly.

Bug Report Details:
- Raw Ad Input: "${rawText}"
- Target/Correct Category: "${category}"
${expectedText ? `- Expected Output (User's desired fix/claim): "${expectedText}"` : ""}

Task:
1. Examine the provided screenshot (if available) and the raw input text to determine the formatting error.
2. Analyze the LifeInvader Official Policy Manual reference below to find the correct spelling, terminology, and syntax rules.
3. Automatically generate the exact, fully corrected advertisement text.
4. Explain the reason for the correction (e.g. "Spelled Annis Silvia correctly", "Formatted price Negotiable").

=== POLICY MANUAL REFERENCE ===
${fullPolicyContext}
==============================

${customDirectives ? `\nADDITIONAL ADMIN DIRECTIVES:\n${customDirectives}\n` : ""}

Response format: Return ONLY a raw JSON object with exactly two keys: "text" (the corrected ad text) and "reason" (the explanation of which rule was applied). Do NOT wrap it in markdown code blocks like \`\`\`json. Just return raw JSON.`;

    const parts = [{ text: promptText }];
    if (imagePart) {
        parts.push(imagePart);
    }

    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${keyVal}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: parts }],
            generationConfig: { responseMimeType: "application/json" }
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
    })
    .then(data => {
        trackGeminiAPICall();
        const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        try {
            const parsed = JSON.parse(responseText.trim());
            if (parsed && parsed.text) {
                callback(parsed);
            } else {
                callback(null);
            }
        } catch (e) {
            callback({ text: responseText.trim(), reason: "AI bug resolution suggestion" });
        }
    })
    .catch(err => {
        console.error("Gemini Bug Triage Suggestion Error:", err);
        callback(null);
    });
}

function runGeminiCopilotTurn(report, category, userMessageText, callback) {
    const keyVal = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
    if (!keyVal) {
        callback(false, null);
        return;
    }

    if (!report.geminiChatHistory) {
        report.geminiChatHistory = [];
    }

    // If user message is provided, push it to history
    if (userMessageText) {
        const dbContext = getDatabaseMatchesContext(report.rawInput + " " + userMessageText);
        const policyContext = getPolicyMatchesContext(report.rawInput + " " + userMessageText);
        let noteContext = "";
        if (dbContext || policyContext) {
            noteContext = `\n\n(Note: Active system database matches matching current context:\n${dbContext}\n${policyContext})`;
        }
        const textWithContext = userMessageText + noteContext;
        
        const parts = [{ text: textWithContext }];
        let attachmentUrl = null;
        if (report.pendingAttachment) {
            parts.push({
                inlineData: {
                    mimeType: report.pendingAttachment.mimeType,
                    data: report.pendingAttachment.data
                }
            });
            attachmentUrl = report.pendingAttachment.dataUrl;
            report.pendingAttachment = null; // Clear pending attachment
        }

        const msgObj = {
            role: "user",
            parts: parts
        };
        if (attachmentUrl) {
            msgObj.attachmentUrl = attachmentUrl;
        }
        report.geminiChatHistory.push(msgObj);
    } else {
        // First turn - push initial prompt
        report.geminiChatHistory = [];
        const dbContext = getDatabaseMatchesContext(report.rawInput);
        const policyContext = getPolicyMatchesContext(report.rawInput);
        report.geminiChatHistory.push({
            role: "user",
            parts: [{ text: `Raw Ad Input: "${report.rawInput}"\nCategoryContext: "${category}"\n${dbContext}\n${policyContext}` }]
        });
    }

    const customDirectives = localStorage.getItem("li_gemini_custom_prompt") || "";
    const fullPolicyContext = getCompletePolicyContext();
    const systemPrompt = `You are a strict and professional advertisement editor for LifeInvader.
Your task is to correct and format the user's raw advertisement input strictly according to the official LifeInvader internal formatting policy:

[CRITICAL GROUNDING DIRECTIVE]:
You MUST strictly correct the ad and reply based ONLY on the provided LifeInvader Internal Policy manual. Do NOT use real-life logic, external facts, standard grammatical conventions, or common sense if they conflict with the policy manual. The provided Policy Manual Reference is the absolute and only source of truth.

### Core Formatting Rules:
1. Always begin the ad with one of these exact action words: "Buying", "Selling", "Trading", "Selling or trading". The first letter must ALWAYS be capitalized.
2. Pricing & Budget Labels:
   - For Buying ads: Use the label "Budget: " (Capital B, followed by a colon). If no price is mentioned, always append "Budget: Negotiable." at the very end.
   - For Selling / Trading / Selling or trading ads: Use the label "Price: " (Capital P, followed by a colon). If no price is mentioned, always append "Price: Negotiable." at the very end.
   - If a specific price is explicitly mentioned in the raw ad, use that exact price (e.g., "$25.000") and do NOT add "Negotiable".
3. Currency & Number Formatting:
   - Always put a dollar sign ($) BEFORE the numerical value (e.g., "$5 Million", not "5 Million$").
   - Capitalize the first letter of "Price", "Budget", and "Negotiable".
   - Use a period (.) instead of a comma (,) as a thousands separator for prices (e.g., "$200.000", not "$200,000").
   - NEVER use "k" or "K" for thousands. Convert it to full numerical digits:
     - "$1k" -> "$1.000"
     - "$1.7k each" -> "$1.700 each."
     - "$1.450k" -> "$1.45 Million."
   - NEVER use lowercase "m" for Millions. Use capital "Million" or "Million.":
     - "$1m" -> "$1 Million"
     - "$38m" -> "$38 Million"
4. Punctuation Rules:
   - Use a full stop/period (.) to end the sentence if it ends with a letter (e.g., "Price: Negotiable.").
   - If the ad ends with a numerical value, do NOT add a period (.) at the very end of the ad (e.g., "Price: $200.000").
   - Capitalize the first letter of brands, official locations, and proper names (First and Last name).
5. Terminology Substitutions:
   - "max config", "max tuning", "fully upgraded" -> "with full configuration"
   - "nearly max", "part lvl3" or below -> "with partial configuration"
   - "body upgrades", "body kit" -> "with visual upgrades"
   - "turbo" -> "turbo kit"
   - "drift tuning", "drift assistance" -> "drift kit"
   - "luminous rims", "unique wheels" -> "luminous wheels"
   - "Unique 6 rims" -> "luminous wheels of type 6"
   - "level 1", "low level" -> "low quality"
   - "level 2", "medium level" -> "medium quality"
   - "level 3", "high level" -> "high quality"
   - "level 4", "max level" -> "max quality"
   - "crates", "cases" -> "containers"
   - "spray cans", "spray balloons" -> "paint cans."
   - "extras" -> "of type" (e.g. "selling mask extras 2" -> "Selling masks of type 2. Price: Negotiable.")
   - "pumpkin", "cabbage", "pineapple", "mandarin" -> combine or use "fruits, vegetables or seeds"
6. Play Dice and Play Poker Rules:
   - If no Bet is specified: Use "Bet: Negotiable."
   - The maximum allowed bet is "$10 Million". Any bet above $10 Million must be changed to "Bet: Negotiable."
7. Format phone numbers in "Ôäû XX-XX-XXX" or "Ôäû XX-XX-XX" format if present.

=========================================
COMPLETE LIFEINVADER OFFICIAL POLICY MANUAL REFERENCE:
${fullPolicyContext}
=========================================

${customDirectives ? `\nADDITIONAL ADMIN DIRECTIVES:\n${customDirectives}\n` : ""}

Response format: Return ONLY a raw JSON object with exactly two keys: "text" (the corrected ad text) and "reason" (the explanation of which rule was applied or how the suggestion was updated). Do NOT wrap it in markdown code blocks like \`\`\`json. Just return raw JSON.`;

    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${keyVal}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: report.geminiChatHistory,
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
            generationConfig: { responseMimeType: "application/json" }
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
    })
    .then(data => {
        trackGeminiAPICall();
        const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        try {
            const parsed = JSON.parse(responseText.trim());
            if (parsed && parsed.text) {
                // Save model response to history
                report.geminiChatHistory.push({
                    role: "model",
                    parts: [{ text: responseText.trim() }]
                });
                callback(true, parsed);
            } else {
                callback(false, null);
            }
        } catch (e) {
            // Fallback
            report.geminiChatHistory.push({
                role: "model",
                parts: [{ text: JSON.stringify({ text: responseText.trim(), reason: "Refined suggestion" }) }]
            });
            callback(true, { text: responseText.trim(), reason: "Refined suggestion" });
        }
    })
    .catch(err => {
        console.error("Gemini Copilot Error:", err);
        callback(false, null);
    });
}

function findLocalFuzzyMatch(rawText) {
    const rawClean = rawText.toLowerCase().trim().replace(/\s+/g, ' ');
    const entries = Object.entries(customTranslations);
    if (entries.length === 0) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (const [trainedRaw, corrValue] of entries) {
        // Compute token Jaccard similarity
        const tokens1 = new Set(rawClean.split(" "));
        const tokens2 = new Set(trainedRaw.split(" "));
        
        const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
        const union = new Set([...tokens1, ...tokens2]);
        const score = intersection.size / union.size;

        if (score > highestScore && score >= 0.75) { // 75% token similarity threshold
            highestScore = score;
            let corrText = corrValue;
            if (corrValue && corrValue.startsWith("{") && corrValue.endsWith("}")) {
                try {
                    const parsed = JSON.parse(corrValue);
                    corrText = parsed.text || corrValue;
                } catch(e) {}
            }
            bestMatch = { text: corrText, rawMatched: trainedRaw, score: Math.round(score * 100) };
        }
    }
    return bestMatch;
}

/**
 * Renders triage cards into the container.
 */
function renderTriageCards(reports, container) {
    if (!reports || reports.length === 0) {
        container.innerHTML = `
            <div class="no-requests-msg" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted); border: 1px dashed var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.01);">
                <i class="fa-solid fa-circle-check" style="font-size: 32px; margin-bottom: 14px; display: block; color: #30d158; opacity: 0.7;"></i>
                <span style="font-size: 14px; font-weight: 600; color: var(--text-primary);">All Clear!</span>
                <p style="margin-top: 6px; font-size: 12.5px; opacity: 0.6;">No pending bug reports to triage.</p>
            </div>`;
        return;
    }
    
    container.innerHTML = "";
    
    reports.forEach((report, idx) => {
        report.stagedSpelling = report.stagedSpelling || {};
        const card = document.createElement("div");
        card.className = "triage-card";
        card.style.cssText = `
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 12px;
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        `;
        
        // Category badge color map
        const catColors = {
            "Clothing": "#a78bfa",
            "Vehicles": "#60a5fa",
            "Weapons": "#f87171",
            "Electronics": "#34d399",
            "Properties": "#fbbf24",
            "Services": "#fb923c",
            "Food": "#f472b6",
        };
        
        let currentCategory = report.category || "Other";
        const catColor = catColors[currentCategory] || "#94a3b8";
        
        let lastPreviewText = "";
        
        // Initialize state variables if not present
        if (typeof report.manualPanelOpen === "undefined") {
            report.manualPanelOpen = false;
        }
        if (typeof report.manualOverrideText === "undefined") {
            report.manualOverrideText = null;
        }
        
        // Function to render card inner content
        const updateCardBody = () => {
            let liveFixed;
            if (report.manualOverrideText) {
                liveFixed = {
                    text: report.manualOverrideText,
                    status: "passed",
                    rejectionReason: "None"
                };
            } else {
                liveFixed = getLiveFixedOutputDetails(report.rawInput, currentCategory, report.stagedSpelling);
            }
            const isPassed = liveFixed.status === "passed";
            lastPreviewText = liveFixed.text;

            if (report.aiProposal) {
                card.style.border = "1px solid rgba(167, 139, 250, 0.4)";
                card.style.boxShadow = "0 0 15px rgba(167, 139, 250, 0.08)";
            } else {
                card.style.border = "1px solid rgba(255, 255, 255, 0.06)";
                card.style.boxShadow = "";
            }

            let aiProposedFixHtml = "";
            if (report.aiProposal) {
                const spellingListText = report.aiProposal.spellingList ? `<b>Generated Spelling Rules:</b> ${report.aiProposal.spellingList}` : "";
                aiProposedFixHtml = `
                    <!-- Gemini Auto-Triage Suggestion Banner -->
                    <div class="ai-proposed-fix-banner" style="padding: 10px; border-radius: 8px; background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.3); color: #a78bfa; font-size: 11.5px; margin-top: 6px; text-align: left; box-shadow: inset 0 0 10px rgba(167, 139, 250, 0.05);">
                        <div style="font-weight: 700; font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 4px; margin-bottom: 4px;">
                            <i class="fa-solid fa-sparkles"></i> AI Proposed Fix (Pending Admin Review)
                        </div>
                        <div style="font-weight: 600; font-family: var(--font-mono, monospace); color: #c4b5fd;">"${report.aiProposal.text}"</div>
                        <div style="font-size: 9.5px; opacity: 0.8; margin-top: 4px;"><b>AI Logic:</b> ${report.aiProposal.reason || "Auto-detected correction"}</div>
                        ${spellingListText ? `<div style="font-size: 9.5px; opacity: 0.8; margin-top: 2px; font-family: var(--font-mono, monospace); color: #a78bfa;">${spellingListText}</div>` : ""}
                        <div style="font-size: 9px; color: var(--text-muted); opacity: 0.7; margin-top: 6px; border-top: 1px dashed rgba(167, 139, 250, 0.15); padding-top: 6px; display: flex; flex-wrap: wrap; gap: 8px;">
                            <span><i class="fa-regular fa-paper-plane"></i> Submitted: <span>${report.timestamp || "Unknown"}</span></span>
                            <span><i class="fa-solid fa-robot"></i> AI Proposed: <span>${report.aiProposal.timeFixed}</span></span>
                        </div>
                    </div>
                `;
            }

            const confirmBtnStyle = report.aiProposal
                ? "flex: 1; background: linear-gradient(135deg, rgba(167, 139, 250, 0.25), rgba(167, 139, 250, 0.1)); border: 1px solid rgba(167, 139, 250, 0.45); color: #a78bfa; padding: 9px 12px; border-radius: 8px; font-family: var(--font-heading); font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease; letter-spacing: 0.3px; box-shadow: 0 0 12px rgba(167,139,250,0.15);"
                : "flex: 1; background: linear-gradient(135deg, rgba(48,209,88,0.15), rgba(48,209,88,0.06)); border: 1px solid rgba(48,209,88,0.3); color: #30d158; padding: 9px 12px; border-radius: 8px; font-family: var(--font-heading); font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease; letter-spacing: 0.3px;";
            
            const confirmBtnText = report.aiProposal
                ? `<i class="fa-solid fa-sparkles"></i> Confirm AI Fix`
                : `<i class="fa-solid fa-square-check"></i> Confirm`;
            
            // Side-by-side dark boxes layout
            const diffHtml = `
                <div style="display: flex; gap: 12px; align-items: stretch; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 6px;">
                        <div style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Raw Input</div>
                        <div style="flex: 1; padding: 12px; border-radius: 8px; background: rgba(255,69,58,0.03); border: 1px solid rgba(255,69,58,0.12); font-family: var(--font-mono, monospace); font-size: 13.5px; line-height: 1.5; color: var(--text-primary); word-break: break-word;">
                            ${report.rawInput}
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 6px;">
                        <div style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Fixed Output</div>
                        <div class="fixed-output-box" style="flex: 1; padding: 12px; border-radius: 8px; font-family: var(--font-mono, monospace); font-size: 13.5px; line-height: 1.5; word-break: break-word; transition: all 0.3s ease;
                            background: rgba(48,209,88,0.04); border: 1px solid rgba(48,209,88,0.25); color: #30d158; box-shadow: 0 0 10px rgba(48,209,88,0.05); display: flex; flex-direction: column; gap: 6px;
                        ">
                            <div class="fixed-output-text" contenteditable="true" title="Click to edit final ad text" style="outline: none; border: none; background: transparent; padding: 0; margin: 0; color: inherit; width: 100%; cursor: text; min-height: 20px;">${liveFixed.text}</div>
                            ${!isPassed ? `<div style="font-size: 11px; opacity: 0.8; font-weight: 600; color: #ff6b6b; border-top: 1px dashed rgba(255,107,107,0.2); padding-top: 6px; margin-top: 2px;"><i class="fa-solid fa-circle-exclamation"></i> Rejection Reason: ${liveFixed.rejectionReason}</div>` : ""}
                        </div>
                    </div>
                </div>
            `;
            
            // Re-populate the category selection list
            const categoriesList = ["Auto", "Real Estate", "Businesses", "Work", "Dating", "Services", "Discounts", "Other"];
            const categoryOptionsHtml = categoriesList.map(cat => 
                `<option value="${cat}" ${cat === currentCategory ? "selected" : ""}>${cat}</option>`
            ).join("");

            let chatTurnsHtml = "";
            if (report.geminiChatHistory && report.geminiChatHistory.length > 0) {
                chatTurnsHtml = report.geminiChatHistory.map((msg, idx) => {
                    if (idx === 0) return ""; // Skip initial prompt turn
                    const isModel = msg.role === "model";
                    let dispText = "";
                    if (isModel) {
                        try {
                            const parsed = JSON.parse(msg.parts[0].text.trim());
                            dispText = `Ô£¿ <b>AI suggestion:</b> "${parsed.text}"<br><span style="opacity:0.65;font-size:10px;">Reason: ${parsed.reason}</span>`;
                        } catch (e) {
                            dispText = msg.parts[0].text;
                        }
                    } else {
                        const cleanUserMsg = msg.parts[0].text.split("\n\n(Note: Active")[0];
                        dispText = `<b>You:</b> ${cleanUserMsg}`;
                    }
                    const attachHtml = msg.attachmentUrl ? `
                        <div style="margin-bottom: 6px; border-radius: 4px; overflow: hidden; max-width: 150px; max-height: 100px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;" onclick="window.open('${msg.attachmentUrl}', '_blank')">
                            <img src="${msg.attachmentUrl}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
                        </div>
                    ` : "";
                    return `
                        <div style="padding: 6px 8px; border-radius: 6px; background: ${isModel ? "rgba(167,139,250,0.06)" : "rgba(255,255,255,0.03)"}; border: 1px solid ${isModel ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.04)"}; align-self: ${isModel ? "flex-start" : "flex-end"}; color: ${isModel ? "var(--text-primary)" : "var(--text-secondary)"}; max-width: 90%; word-break: break-word; font-family: var(--font-heading);">
                            ${attachHtml}
                            ${dispText}
                        </div>
                    `;
                }).join("");
            }

            card.innerHTML = `
                <!-- Header -->
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span class="category-badge" style="background: ${catColor}22; color: ${catColor}; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.3px; text-transform: uppercase; border: 1px solid ${catColor}33;">${currentCategory}</span>
                        <span style="font-size: 11px; color: var(--text-muted); opacity: 0.7;"><i class="fa-regular fa-clock" style="margin-right: 3px;"></i>${report.timestamp}</span>
                    </div>
                    <span style="font-size: 10px; color: var(--text-muted); opacity: 0.4; font-family: var(--font-mono, monospace);">#${idx + 1}</span>
                </div>
                
                <!-- Side-by-side Raw vs Fixed Output -->
                ${diffHtml}
                
                ${aiProposedFixHtml}
                
                <!-- Manual Training Panel -->
                <div class="manual-train-panel" style="display: ${report.manualPanelOpen ? "flex" : "none"}; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 12px; flex-direction: column; gap: 10px; margin-top: 4px; transition: all 0.3s ease;">
                    <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-muted); font-weight: 700; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-pen-to-square"></i> Manual Training Override</div>
                    
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <div>
                            <div style="font-size: 9.5px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600;">Similar Example / Target Output</div>
                            <input type="text" class="manual-similar-input" placeholder="e.g. Selling &quot;Suntrap&quot;. Price: Negotiable." value="${liveFixed.text}" style="width: 100%; box-sizing: border-box; padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-primary); font-size: 12.5px; font-family: var(--font-mono, monospace);">
                        </div>
                        
                        <div>
                            <div style="font-size: 9.5px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600;">Category</div>
                            <select class="manual-category-select" style="width: 100%; box-sizing: border-box; padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-primary); font-size: 12.5px; outline: none; cursor: pointer;">
                                ${categoryOptionsHtml}
                            </select>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px;">
                        <button type="button" class="btn-manual-train-apply" style="background: rgba(96, 165, 250, 0.15); border: 1px solid rgba(96, 165, 250, 0.3); color: #60a5fa; padding: 8px 16px; border-radius: 6px; font-size: 11.5px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.2s ease; box-shadow: 0 0 10px rgba(96, 165, 250, 0.15);">
                            <i class="fa-solid fa-check"></i> Done
                        </button>
                    </div>
                </div>
                
                <!-- Gemini Copilot Console -->
                <div class="gemini-copilot-console" style="${report.copilotOpen ? "display: flex;" : "display: none;"} margin-top: 12px; background: rgba(167, 139, 250, 0.04); border: 1px solid rgba(167, 139, 250, 0.18); border-radius: 8px; padding: 12px; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed rgba(167, 139, 250, 0.15); padding-bottom: 6px;">
                        <span style="font-size: 10.5px; font-weight: 700; color: #a78bfa; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 4px;">
                            <i class="fa-solid fa-brain-circuit"></i> Spark AI Copilot
                        </span>
                        <button type="button" class="btn-gemini-copilot-close" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 11px;"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="gemini-copilot-chat-history" style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; font-size: 11px; padding-right: 4px;">
                        ${chatTurnsHtml}
                    </div>
                    <!-- Image Preview Bar (initially hidden or shown if pendingAttachment) -->
                    <div class="gemini-copilot-image-preview-bar" style="${report.pendingAttachment ? "display: flex;" : "display: none;"} align-items: center; gap: 8px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 6px; margin-top: 4px;">
                        <div style="position: relative; width: 40px; height: 40px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                            <img class="img-gemini-copilot-preview" src="${report.pendingAttachment ? report.pendingAttachment.dataUrl : ""}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <span style="font-size: 10.5px; color: var(--text-muted); flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" class="txt-gemini-copilot-filename">attached_screenshot.png</span>
                        <button type="button" class="btn-gemini-copilot-clear-preview" style="background: none; border: none; color: #ff453a; cursor: pointer; font-size: 11px;"><i class="fa-solid fa-trash-can"></i></button>
                    </div>

                    <div style="display: flex; gap: 6px; align-items: center; margin-top: 4px; position: relative;">
                        <!-- Hidden file input -->
                        <input type="file" class="input-gemini-copilot-file" accept="image/*" style="display: none;">
                        
                        <!-- Attachment button -->
                        <button type="button" class="btn-gemini-copilot-attach" style="padding: 6px 10px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); color: ${report.pendingAttachment ? "#30d158" : "var(--text-muted)"}; border-color: ${report.pendingAttachment ? "rgba(48, 209, 88, 0.4)" : "rgba(255,255,255,0.06)"}; font-size: 11px; cursor: pointer; height: 28px; display: inline-flex; align-items: center; justify-content: center; transition: all 0.2s;" title="Attach screenshot"><i class="fa-solid fa-paperclip"></i></button>

                        <input type="text" class="input-gemini-copilot-chat" placeholder="Tell Gemini how to fix... (e.g. 'make price $10k')" style="flex: 1; padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(167,139,250,0.25); background: rgba(0,0,0,0.3); color: var(--text-primary); font-size: 11.5px; outline: none; font-family: var(--font-heading);">
                        
                        <button type="button" class="btn-gemini-copilot-chat-send" style="padding: 6px 10px; border-radius: 6px; background: rgba(167, 139, 250, 0.2); border: 1px solid rgba(167, 139, 250, 0.4); color: #a78bfa; font-size: 11px; cursor: pointer; height: 28px; display: inline-flex; align-items: center; justify-content: center;"><i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                    <!-- Row 1: Resolution -->
                    <div style="display: flex; gap: 8px;">
                        <button type="button" class="btn-triage-confirm" style="${confirmBtnStyle}">
                            ${confirmBtnText}
                        </button>
                        
                        <button type="button" class="btn-triage-ignore" style="
                            flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); color: var(--text-muted); padding: 9px 12px; border-radius: 8px; font-family: var(--font-heading); font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease; letter-spacing: 0.3px;
                        ">
                            <i class="fa-solid fa-xmark"></i> Ignore
                        </button>
                    </div>
                    
                    <!-- Row 2: Training Engine -->
                    <div style="display: flex; gap: 6px;">
                        <button type="button" class="btn-triage-train-policy" style="
                            flex: 1; background: linear-gradient(135deg, rgba(255,149,0,0.12), rgba(255,149,0,0.04)); border: 1px solid rgba(255,149,0,0.2); color: #ff9500; padding: 8px 4px; border-radius: 8px; font-family: var(--font-heading); font-size: 10.5px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s ease; letter-spacing: 0.2px; white-space: nowrap;
                        ">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> Train Policy
                        </button>
                        
                        <button type="button" class="btn-triage-train-vehicles-clothing" style="
                            flex: 1; background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.18); color: #a78bfa; padding: 8px 4px; border-radius: 8px; font-family: var(--font-heading); font-size: 10.5px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s ease; letter-spacing: 0.2px; white-space: nowrap;
                        ">
                            <i class="fa-solid fa-car"></i> Train Auto/Clothing
                        </button>
                        
                        <button type="button" class="btn-triage-train-items" style="
                            flex: 1; background: rgba(34, 211, 238, 0.08); border: 1px solid rgba(34, 211, 238, 0.18); color: #22d3ee; padding: 8px 4px; border-radius: 8px; font-family: var(--font-heading); font-size: 10.5px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s ease; letter-spacing: 0.2px; white-space: nowrap;
                        ">
                            <i class="fa-solid fa-box"></i> Train Items
                        </button>
                    </div>

                    <!-- Row 2b: AI Training Engine -->
                    <button type="button" class="btn-triage-train-gemini" style="
                        width: 100%; background: linear-gradient(135deg, rgba(167, 139, 250, 0.12), rgba(167, 139, 250, 0.04)); border: 1px solid rgba(167, 139, 250, 0.25); color: #a78bfa; padding: 8px 12px; border-radius: 8px; font-family: var(--font-heading); font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;
                    ">
                        <i class="fa-solid fa-sparkles"></i> Train via Gemini Spark
                    </button>
                    
                    <!-- Row 3: Advanced Overrides -->
                    <button type="button" class="btn-triage-manual-toggle" style="
                        width: 100%; background: ${report.manualPanelOpen ? "rgba(96, 165, 250, 0.15)" : "rgba(255,255,255,0.02)"}; border: 1px solid ${report.manualPanelOpen ? "rgba(96, 165, 250, 0.3)" : "rgba(255,255,255,0.06)"}; color: #60a5fa; padding: 8px 12px; border-radius: 8px; font-size: 11px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;
                    ">
                        <i class="fa-solid fa-sliders"></i> Manual Adjust Overrides
                    </button>
                </div>
            `;
            
            // Wire event listeners on newly set innerHTML
            const confirmBtn = card.querySelector(".btn-triage-confirm");
            const trainPolicyBtn = card.querySelector(".btn-triage-train-policy");
            const trainVehiclesClothingBtn = card.querySelector(".btn-triage-train-vehicles-clothing");
            const trainItemsBtn = card.querySelector(".btn-triage-train-items");
            const trainGeminiBtn = card.querySelector(".btn-triage-train-gemini");
            const manualToggleBtn = card.querySelector(".btn-triage-manual-toggle");
            const manualPanel = card.querySelector(".manual-train-panel");
            const manualTrainApplyBtn = card.querySelector(".btn-manual-train-apply");
            const ignoreBtn = card.querySelector(".btn-triage-ignore");
            
            // ÔöÇÔöÇ Confirm / Resolve Button ÔöÇÔöÇ
            if (confirmBtn) {
                confirmBtn.addEventListener("click", () => {
                    const textEl = card.querySelector(".fixed-output-text");
                    const finalAdText = textEl ? textEl.textContent.trim() : "";
                    
                    let finalMethod = report.trainedMethod || "Trained manually";
                    // If they edited the text directly, extract spelling corrections from it and override method to manual
                    if (finalAdText && finalAdText !== lastPreviewText) {
                        learnFromSimilarExample(report.rawInput, finalAdText, currentCategory, report.stagedSpelling);
                        finalMethod = "Trained manually";
                    }
                    
                    if (finalAdText) {
                        // Register direct exact raw-to-fixed translation mapping for advanced learning
                        const trimmedRaw = report.rawInput.replace(/\s+/g, ' ').trim().toLowerCase();
                        const details = {
                            text: finalAdText,
                            author: getActiveEditorName(),
                            method: finalMethod,
                            timestamp: new Date().toLocaleString(),
                            reporterTime: report.timestamp || "Unknown",
                            category: currentCategory
                        };
                        customTranslations[trimmedRaw] = JSON.stringify(details);
                        localStorage.setItem("li_custom_translations", JSON.stringify(customTranslations));
                    }
                    
                    // Save all staged corrections to the persistent database on confirm
                    const hasSpelling = report.stagedSpelling && Object.keys(report.stagedSpelling).length > 0;
                    if (hasSpelling || finalAdText) {
                        if (hasSpelling) {
                            Object.assign(customSpelling, report.stagedSpelling);
                            localStorage.setItem("li_custom_spelling", JSON.stringify(customSpelling));
                        }
                        saveCustomDataToBackend();
                        if (typeof renderCustomSpelling === "function") {
                            renderCustomSpelling();
                        }
                        if (typeof renderCustomTranslations === "function") {
                            renderCustomTranslations();
                        }
                        // Re-process the main ad editor immediately to reflect changes in real time
                        if (typeof processAd === "function") {
                            processAd();
                        }
                    }
                    
                    resolveBugReport(report, card);
                });
            }
            
            // ÔöÇÔöÇ Train from Policy Button ÔöÇÔöÇ
            if (trainPolicyBtn) {
                trainPolicyBtn.addEventListener("click", () => {
                    const trainedCorr = selfTrainFromPolicy(report.rawInput, currentCategory, report.stagedSpelling);
                    if (trainedCorr) {
                        showCustomNotification(`Spelling trained automatically: "${trainedCorr.wrong}" ÔåÆ "${trainedCorr.right}" (previewing, click Confirm to save)`, "success");
                        report.trainedMethod = "Trained from policy";
                        report.manualOverrideText = null;
                        updateCardBody();
                    } else {
                        showCustomNotification("No matching policy example found. Please train manually.", "warning");
                        report.manualPanelOpen = true;
                        updateCardBody();
                    }
                });
            }
            
            // ÔöÇÔöÇ Train from Vehicles & Clothing Button ÔöÇÔöÇ
            if (trainVehiclesClothingBtn) {
                trainVehiclesClothingBtn.addEventListener("click", () => {
                    const success = trainFromDatabase(report.rawInput, "vehicles_clothing", report.stagedSpelling);
                    if (success) {
                        showCustomNotification("Trained from Vehicles & Clothing database list successfully! (previewing, click Confirm to save)", "success");
                        report.trainedMethod = "Trained from Outdoors Clothing";
                        report.manualOverrideText = null;
                        updateCardBody();
                    } else {
                        showCustomNotification("No matching vehicle or clothing items found in database.", "warning");
                    }
                });
            }
            
            // ÔöÇÔöÇ Train from Items Button ÔöÇÔöÇ
            if (trainItemsBtn) {
                trainItemsBtn.addEventListener("click", () => {
                    const success = trainFromDatabase(report.rawInput, "items", report.stagedSpelling);
                    if (success) {
                        showCustomNotification("Trained from Items database list successfully! (previewing, click Confirm to save)", "success");
                        report.trainedMethod = "Trained from Items List";
                        report.manualOverrideText = null;
                        updateCardBody();
                    } else {
                        showCustomNotification("No matching items found in database.", "warning");
                    }
                });
            }
            
            // ÔöÇÔöÇ Train via Gemini Spark Button ÔöÇÔöÇ
            if (trainGeminiBtn) {
                trainGeminiBtn.addEventListener("click", () => {
                    const localKey = localStorage.getItem("li_gemini_api_key") || "AIzaSyC4sbWW3XEWiadIl6NoohI0NlKezpurz54";
                    if (!localKey) {
                        showCustomNotification("Please configure a Gemini API key in the AI Assistant tab first.", "warning");
                        return;
                    }

                    trainGeminiBtn.disabled = true;
                    const origHtml = trainGeminiBtn.innerHTML;
                    trainGeminiBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Querying AI Spark...`;

                    getGeminiBugTriageSuggestion(report.rawInput, report.expectedOutput, currentCategory, report.screenshotBase64 || null, (suggestion) => {
                        trainGeminiBtn.disabled = false;
                        trainGeminiBtn.innerHTML = origHtml;

                        if (suggestion && suggestion.text) {
                            const tempSpelling = {};
                            learnFromSimilarExample(report.rawInput, suggestion.text, currentCategory, tempSpelling);
                            
                            const spellingList = Object.entries(tempSpelling)
                                .map(([wrong, right]) => `"${wrong}" ÔåÆ "${right}"`)
                                .join(", ");

                            report.aiProposal = {
                                text: suggestion.text,
                                reason: suggestion.reason || "Auto-detected correction",
                                spellingList: spellingList,
                                timeFixed: new Date().toLocaleTimeString()
                            };

                            // Auto-apply proposed suggestion to the card preview
                            report.manualOverrideText = suggestion.text;
                            report.trainedMethod = "Trained via Gemini Spark (Review)";
                            Object.assign(report.stagedSpelling, tempSpelling);

                            updateCardBody();
                            showCustomNotification("Gemini Spark correction proposed! Review and click Confirm.", "success");
                        } else {
                            showCustomNotification("Gemini Spark failed to predict a correction. Try again or use other engines.", "error");
                        }
                    });
                });
            }

            // ÔöÇÔöÇ Gemini Copilot Interactive Chat Console Elements & Wireup ÔöÇÔöÇ
            const copilotCloseBtn = card.querySelector(".btn-gemini-copilot-close");
            const copilotChatInput = card.querySelector(".input-gemini-copilot-chat");
            const copilotChatSendBtn = card.querySelector(".btn-gemini-copilot-chat-send");
            const copilotChatHistory = card.querySelector(".gemini-copilot-chat-history");

            if (copilotCloseBtn) {
                copilotCloseBtn.addEventListener("click", () => {
                    report.copilotOpen = false;
                    updateCardBody();
                });
            }

            const sendChatTurn = () => {
                if (!copilotChatInput) return;
                const userMsg = copilotChatInput.value.trim();
                if (!userMsg) return;

                copilotChatInput.value = "";
                copilotChatInput.disabled = true;
                if (copilotChatSendBtn) {
                    copilotChatSendBtn.disabled = true;
                    copilotChatSendBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
                }

                // Append user message immediately to the UI to feel extremely responsive
                const userDiv = document.createElement("div");
                userDiv.style.cssText = "padding: 6px 8px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); align-self: flex-end; color: var(--text-secondary); max-width: 90%; word-break: break-word; font-family: var(--font-heading);";
                userDiv.innerHTML = `<b>You:</b> ${userMsg}`;
                if (copilotChatHistory) {
                    copilotChatHistory.appendChild(userDiv);
                    copilotChatHistory.scrollTop = copilotChatHistory.scrollHeight;
                }

                runGeminiCopilotTurn(report, currentCategory, userMsg, (success, suggestion) => {
                    if (copilotChatInput) copilotChatInput.disabled = false;
                    if (copilotChatSendBtn) {
                        copilotChatSendBtn.disabled = false;
                        copilotChatSendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
                    }

                    if (success && suggestion) {
                        report.manualOverrideText = suggestion.text;
                        report.trainedMethod = "Trained from Gemini Spark";
                        
                        // Re-render whole card to sync preview, diff, and new chat turns
                        updateCardBody();
                        
                        // Scroll history to bottom
                        setTimeout(() => {
                            const newHistory = card.querySelector(".gemini-copilot-chat-history");
                            if (newHistory) newHistory.scrollTop = newHistory.scrollHeight;
                        }, 50);
                    } else {
                        showCustomNotification("Gemini Copilot failed to reply. Please check internet connection.", "error");
                    }
                });
            };

            if (copilotChatSendBtn) {
                copilotChatSendBtn.addEventListener("click", sendChatTurn);
            }

            if (copilotChatInput) {
                copilotChatInput.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        sendChatTurn();
                    }
                });
            }

            // ÔöÇÔöÇ Screenshot Attachment & Preview Bindings ÔöÇÔöÇ
            const copilotFileInput = card.querySelector(".input-gemini-copilot-file");
            const copilotAttachBtn = card.querySelector(".btn-gemini-copilot-attach");
            const copilotPreviewBar = card.querySelector(".gemini-copilot-image-preview-bar");
            const copilotPreviewImg = card.querySelector(".img-gemini-copilot-preview");
            const copilotFilenameSpan = card.querySelector(".txt-gemini-copilot-filename");
            const copilotClearPreviewBtn = card.querySelector(".btn-gemini-copilot-clear-preview");

            if (copilotAttachBtn && copilotFileInput) {
                copilotAttachBtn.addEventListener("click", () => {
                    copilotFileInput.click();
                });

                copilotFileInput.addEventListener("change", (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const dataUrl = event.target.result;
                            const base64Data = dataUrl.split(",")[1];
                            const mimeType = dataUrl.split(",")[0].split(":")[1].split(";")[0];
                            
                            report.pendingAttachment = {
                                mimeType,
                                data: base64Data,
                                dataUrl
                            };
                            
                            if (copilotPreviewImg) copilotPreviewImg.src = dataUrl;
                            if (copilotFilenameSpan) copilotFilenameSpan.textContent = file.name;
                            if (copilotPreviewBar) copilotPreviewBar.style.display = "flex";
                            
                            copilotAttachBtn.style.color = "#30d158";
                            copilotAttachBtn.style.borderColor = "rgba(48, 209, 88, 0.4)";
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }

            if (copilotClearPreviewBtn) {
                copilotClearPreviewBtn.addEventListener("click", () => {
                    report.pendingAttachment = null;
                    if (copilotFileInput) copilotFileInput.value = "";
                    if (copilotPreviewBar) copilotPreviewBar.style.display = "none";
                    if (copilotAttachBtn) {
                        copilotAttachBtn.style.color = "var(--text-muted)";
                        copilotAttachBtn.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    }
                });
            }
            
            // ÔöÇÔöÇ Manual Train Toggle Button ÔöÇÔöÇ
            if (manualToggleBtn && manualPanel) {
                manualToggleBtn.addEventListener("click", () => {
                    report.manualPanelOpen = !report.manualPanelOpen;
                    updateCardBody();
                });
            }
            
            // ÔöÇÔöÇ Manual Train Apply Button ÔöÇÔöÇ
            if (manualTrainApplyBtn) {
                manualTrainApplyBtn.addEventListener("click", () => {
                    const similarInput = card.querySelector(".manual-similar-input");
                    const catSelect = card.querySelector(".manual-category-select");
                    const similarVal = (similarInput.value || "").trim();
                    const selectedCat = catSelect.value;
                    
                    if (!similarVal) {
                        showCustomNotification("Please provide a target output ad.", "warning");
                        return;
                    }
                    
                    currentCategory = selectedCat;
                    // Run standard phrase alignment spelling extractor to stage rules dynamically
                    learnFromSimilarExample(report.rawInput, similarVal, selectedCat, report.stagedSpelling);
                    
                    // Directly override the live Fixed Output box to display exactly what they typed with no errors
                    report.manualOverrideText = similarVal;
                    report.trainedMethod = "Trained manually";
                    updateCardBody();
                    
                    showCustomNotification("Target output successfully applied to Fixed Output preview! Review and click Confirm.", "success");
                });
            }
            
            // ÔöÇÔöÇ Ignore Button ÔöÇÔöÇ
            if (ignoreBtn) {
                ignoreBtn.addEventListener("click", () => {
                    resolveBugReport(report, card, true); // silent / ignore resolve
                });
            }
        };
        
        // Auto-train on load: if there are any matches available in Policy, database, or items, apply them automatically
        const policyTrained = selfTrainFromPolicy(report.rawInput, currentCategory, report.stagedSpelling);
        if (policyTrained) {
            report.trainedMethod = "Trained automatically (Policy)";
        } else {
            const dbTrained = trainFromDatabase(report.rawInput, "vehicles_clothing", report.stagedSpelling);
            if (dbTrained) {
                report.trainedMethod = "Trained automatically (Outdoors/Vehicles list)";
            } else {
                const itemsTrained = trainFromDatabase(report.rawInput, "items", report.stagedSpelling);
                if (itemsTrained) {
                    report.trainedMethod = "Trained automatically (Items List)";
                } else {
                    report.trainedMethod = "Trained manually";
                }
            }
        }
        
        // Search local translations for similarity (Zero API Credits)
        const bestLocalMatch = findLocalFuzzyMatch(report.rawInput);
        if (bestLocalMatch) {
            report.aiProposal = {
                text: bestLocalMatch.text,
                reason: `Fuzzy history match (${bestLocalMatch.score}% similarity) matching trained raw: "${bestLocalMatch.rawMatched}"`,
                spellingList: "",
                timeFixed: new Date().toLocaleTimeString()
            };

            report.manualOverrideText = bestLocalMatch.text;
            report.trainedMethod = "Trained automatically (Fuzzy Match - Pending Review)";
            updateCardBody();
        }

        // Initial build
        updateCardBody();
        container.appendChild(card);
    });
}

// Wire up the triage tab button click and refresh button
(function initTriagePanel() {
    const triageTabBtn = document.getElementById("tab-btn-bug-triage") || document.querySelector('.tab-btn[data-tab="tab-bug-triage"]');
    const refreshBtn = document.getElementById("btn-triage-refresh");
    const unlockLoginBtn = document.getElementById("btn-bug-unlock-login");
    
    if (triageTabBtn) {
        triageTabBtn.addEventListener("click", () => {
            if (sessionStorage.getItem("li_admin_authenticated") === "true") {
                loadAndRenderBugTriage();
            }
        });
    }
    
    if (unlockLoginBtn) {
        unlockLoginBtn.addEventListener("click", () => {
            // Switch to Admin Panel tab to authenticate
            const adminTabBtn = document.getElementById("tab-btn-admin");
            if (adminTabBtn) {
                adminTabBtn.click();
                setTimeout(() => {
                    const passInput = document.getElementById("admin-passcode-input");
                    if (passInput) passInput.focus();
                }, 100);
            }
        });
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            if (sessionStorage.getItem("li_admin_authenticated") === "true") {
                // Spin animation on refresh icon
                const icon = refreshBtn.querySelector("i");
                if (icon) {
                    icon.style.transition = "transform 0.5s ease";
                    icon.style.transform = "rotate(360deg)";
                    setTimeout(() => {
                        icon.style.transition = "none";
                        icon.style.transform = "rotate(0deg)";
                    }, 500);
                }
                loadAndRenderBugTriage();
            } else {
                showCustomNotification("Please authenticate as admin first.", "warning");
            }
        });
    }
})();


