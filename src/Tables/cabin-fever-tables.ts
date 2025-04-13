export const CabinFeverClassTable = [
  "The Mess",
  "The Barnacle",
  "The Sulphur",
  "Powder Keg",
  "Privateer",
  "Angler",
  "Coagulant",
  "Reaper",
  "Shipwright",
  "ASH Dealer",
  "The Tattooed",
  "The Griot"
]

// strength, agility, presence, toughness, spirit
export const CabinFeverClassStatsModifierTable = [ 
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  [0, 0, -1, 2, -1], [2, -2, 0, 0, 0], [0, 1, 1, -1, -1], [0, 1, 1, -2, 0], [0, -1, 2, -1, 0], [0, 0, 1, 1, -2],
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  [0, 0, -1, 2, -1], [0, 2, 0, -2, 0], [0, 0, 2, 0, -2], [-1, 0, 2, -1, 0], [0, 0, -2, 1, 1], [-1, -1, 0, 0, 2] ]

 export const CabinFeverClassDevilsLuckCircleFillTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg" (1), "Privateer", "Angler"
  "1", "1", "2", "0", "1", "1",
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed" (None?), "The Griot" (None?)
  "1", "1", "1", "2", "0", "0" ]

 export const CabinFeverClassHpTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  12, 8, 8, 4, 10, 8,
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  6, 8, 6, 8, 12, 8 ]

 export const CabinFeverClassClothingTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  6, 10, 6, 4, 8, 4, 
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  2, 6, 10, 8, 0, 6 ]

 export const CabinFeverClassHatTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  12, 12, 12, 6, 6, 6,
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  6, 10, 10, 10, 10, 10 ]

 export const CabinFeverClassWeaponTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  0, 10, 10, 0, 8, 2,
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  8, 10, 8, 10, 6, 6 ]

export const messAbilityTable = [
  "Long Pork: Just don't ask what the special be, ya hear? You can harvest d6 rations from recently killed humanoids that aren't too rotten.",
  "Bowl o’ Brown: All the color ya need. You and your allies eating food recovers d6 HP during a Short Rest and d12 HP during a Long Rest.",
  "Catch of the Day: The best that the sea brought in. Once per day, you and each of your allies can ignore a Fumble on an Attack.",
  "There’s Always Hardtack: It ain’t exciting, but will keep you going. During a rest, you can use rations to feed twice as many allies. They only heal d2 during a Short Rest or d4 during a Long Rest, but they won’t go hungry.",
  "Limey: As long as they’re eatin’ yer cookin’, ain’t no one gettin’ scurvy. You and your allies get +4 DR against becoming infected or sick.",
  "Special Grog: Keepin' spirits high with a good swill. Your ship’s crew morale tests are +4." ]

const barnacleDevilsLuckAbility = "Regains +1 Devils Luck";
export const barnacleAbilityTable = [
  barnacleDevilsLuckAbility + "\n\nGain A flintlock pistol and 40 rounds of shot\n\nGain +1 Presence (Not yet adjusted).",
  barnacleDevilsLuckAbility + "\n\nGain 20s, a hat (d12), shovel, and medical kit\n\nGain +1 Presence (Not yet adjusted).",
  barnacleDevilsLuckAbility + "\n\nGain Twenty dried food, two tobacco, and d10 + Presence throwing knives\n\nGain +1 Agility (Not yet adjusted).",
  barnacleDevilsLuckAbility + "\n\nGain d6 + Presence improvised grenades\n\nGain +1 Agility (Not yet adjusted).",
  barnacleDevilsLuckAbility + "\n\nGain A ritual dagger (d4 damage) and a STOLEN Ancient Relic (d20) you don't understand\n\nGain +1 Spirit (Not yet adjusted).",
  barnacleDevilsLuckAbility + "\n\nGain d4 ASH\n\nGain +1 Spirit (Not yet adjusted).\n\nAdd Spirit (minimum +1) when rolling for ASH effects." ]

export const sulphurAbilityTable = [
  "Black Powder Blessing: If you or a nearby ally fumbles with a black powder weapon, you can spend a Devil’s Luck to make it a hit instead. If taken again, it’s a CRIT.",
  "Deadeye Spotter: The next attack from a gun you reloaded is 2 DR. If taken again, you can reload a second gun when you use your action to reload a gun.",
  "Bombardier: Small Arms and Broadsides from your vessel deal an additional +2 damage. If taken again, your vessel's Broadside attacks BURN (roll d6 each turn; on 15 , deal that much damage. The fire goes out on 6).",
  "Cannoneer: You can Fire Broadsides once more than your ship would normally allow. You can’t do this on consecutive rounds. If taken again, you can.",
  "ASH CHYMIST: During a long rest, you can craft 1d4+Presence improvised bombs from ASH. If taken again, you craft 2d4+Presence bombs instead.",
  "Keep Your Powder Dry: You can fire your black powder weapons while swimming or in the rain. If taken again, you take d6 less from explosions." ]

const powderKegDevilsLuckAbility = "Starts with 1 Devils Luck";
export const powderKegAbilityTable = [
  powderKegDevilsLuckAbility + "POWDER FLASK PUNK Add +1 PRESENCE when throwing bombs. You can throw 2 bombs per turn, even if you also move. Also, you can make bombs at half the cost. Bombs are only made while in port. Limit: d4 per stay.",
  powderKegDevilsLuckAbility + "RIGGING RAT Add +1 to AGILITY when maneuvering on a ship. Your movement speed goes up to 40’ (or eight 5-foot squares) while aboard a ship. UNLOCK #6 (CANNONEER).",
  powderKegDevilsLuckAbility + "COCKROACH Your Devil’s Luck increases by 1. You can only get this Feature 3 times. Whenever you would die, instead stay at 1 HP and permanently reduce your Devil’s Luck by 1. You cannot go below 0.",
  powderKegDevilsLuckAbility + "OLD SALT CHUM Each voyage, select another crew member. If you are near them, both of you add d4 to 1 test each day. Each time you get this Feature, the die increase (d4>d6>d8). If both of you choose to take the same Crew Action during combat, you can reroll a test once.",
  powderKegDevilsLuckAbility + "GUNPOWDER HIGH In combat, whenever you fire a gun* or throw a bomb, check a box. 3 boxes = your next attack with a gun/bomb crits on a 16-20. 🔲🔲🔲" ]
  // "[locked] CANNONEER Attack DR is reduced by 2 when you FIRE BROADSIDES in naval combat. If not unlocked, take #2 instead."

// Well funded, you roll additional starting gear, depending on where your allegiance lies: (d3)
export const privateerAbilityTable = [
  "The English: Roll twice on the weapons & fancy gear tables, claiming both results. Gear & ship repairs cost half while in Port Royal.",
  "The Spanish: Roll on the Arcane Rituals table. You learn that divine prayer. Gear & ship repairs cost half while in Havana.",
  "The French: Gain additional silver equal to d20 x 20. Gear & ship repairs cost half while in Guadeloupe." ]

export const anglerAbilityTable = [
  "RAW FISH EATER You’ve stomached the slimy, smelly, and scaly uncooked. All tests to withstand eating diseased food are -2DR for you.",
  "HOOKER You catch an additional D4 fish whenever fishing.",
  "IT WAS THIS BIG! You tell exaggerated stories of massive beasts you catch, giving you -3DR to lying out the ass.",
  "ADVANCED FISHING TECHNIQUES A Book of advanced fishing strategies you only read half of. You can fish in half the usual time.",
  "TIGHT PACKER You can store double the usual amount of things in containers and cargo holds.",
  "COLD STORAGE You gain a never-melting ice block, which prevents fish stored near it from spoiling for 1 week." ]

export const anglerWeaponTable = [
  "Fish-Filled Net (D4 damage)",
  "Harpoon (D8 damage)" ]

const coagulantAbilityFusion = "You can fuse your body with another creature, becoming as one. The target must be of a similar size to you and both humanoid and alive. If unwilling, they may make a DR14 Toughness test."; //to avoid the fusion
export const coagulantAbilityTable = [
  coagulantAbilityFusion + "\n\nGrafted Arms You gain 2 extra arms, taken from another creature to further transcend one’s own flesh. If taken again: D2 more arms",
  coagulantAbilityFusion + "\n\nLeftover Residue You’ve still got some odd bits of flesh from a messy fusion. Once per day, you can absorb these to regain D4 HP. If taken again: regain D6 HP, then D8, etc.",
  coagulantAbilityFusion + "\n\nSuture Needle You gain a suture needle and string, which deals D4 damage, can be thrown, and pulls in creatures it hits. If taken again: damage becomes D6, then D8, etc.",
  coagulantAbilityFusion + "\n\nEyes in the Back of Your Head Literally. You can see in all directions, giving +2 Presence for observing. If taken again: +1 to your side’s initiative",
  coagulantAbilityFusion + "\n\nBest Served Raw You can eat raw meat with no chance of food poisoning, but only raw meat. If taken again: the curse spreads to another PC" ]

export const reaperAbilityTable = [
  "Slip Through You can light a match from your matchbox to disappear and instantly travel through the nearest ventilation or sewage system to a different exit of that system. Deal 3D10 damage to displaced creatures.",
  "Lights Out Turn out all lights in a room D4 times per day. DR16 for enemies to spot you in the dark.",
  "Reaper’s Scythe You gain a scythe. D10 damage, and looks badass.",
  "This Parrot is No More You are accompanied by a ghostly parrot. D4 times per day, it can ghost shit on a creature to let you deal D2 extra damage on all attacks against them.",
  "ASH Burner You immolate any ASH you find. The fumes deal D4 damage and cause undead to flee.",
  "Limbo When you reduce a creature to 0 hit points or less, you can choose to leave them in a catatonic state instead of killing them. They remain alive at 0 hit points, but need to heal to return to life, and die upon taking any more damage." ]

const shipwrightRepairOrders = "You can restore D10 hit points to a ship over an hour spent repairing it, disregarding the limit of half the ship’s hit points."
export const shipwrightAbilityTable = [
  shipwrightRepairOrders + "\n\nShip Optimizer: Once per naval combat, you can take a second Crew action, even if that action has already been taken this round.",
  shipwrightRepairOrders + "\n\nShip Maker: You can create your own ships, requiring enough raw materials and a week of time. You cannot create Man-O-Wars or Ships of the Line.",
  shipwrightRepairOrders + "\n\nShip Breaker: You carry a special hull-smashing cannon, which deals D10 damage in ship combat, but is too unwieldy to wield in melee combat.",
  shipwrightRepairOrders + "\n\nShip Commander: While you are on a ship, its attacks land critical hits on rolls of 19 or 20.",
  shipwrightRepairOrders + "\n\nShip Improviser: Any large-enough piece of wood with two smaller sticks to steer counts as a dinghy when you pilot it. Dinghies you pilot move twice as fast.",
  shipwrightRepairOrders + "\n\nShip Duplicator: In lack of engineering artistry lies the “skill” of plagiarism. Over 1 day with enough raw materials, you can create an exact copy of another ship, as long as you can easily access that ship during that time." ]

export const ashDealerAbilityTable = [
  "CRIME PAYS Gain a permanent 25% discount when trading. Ability tests related to negotiation, intimidation or bribery are -2 DR",
  "HIGH TOLERANCE Must consume ASH daily OR DIE (Toughness DR 12). May reroll result of Effects of Consuming ASH (Pirate Borg pg. 10) once per dose",
  "BONE COLLECTOR Attacks against undead are made with -2 DR and deal +1 damage",
  "HAUNTED Can speak with the dead while under the effects of ASH (Presence DR 12, Mystical Mishap (Pirate Borg pg. 66) on fumble)",
  "TRIP ENDER Can attempt to end the effects of ASH consumption on another individual (Presence DR 12)",
  "RIDE THE LIGHTNING If Devil’s Luck is depleted, can immediately regain d2 when under the effects of ASH" ]

export const tattooedUsesPerDayText = "You may use your tattoos d4+Spirit times each day."
// Roll d12 and d20 for your two tattoos. You may use your tattoos d4+Spirit times each day.
export const tattooedAbilityTable = [
  "COMPASS Always know the way",
  "CRESCENT MOON Cast a soft light for d8 rounds",
  "PARROT Speak in another’s voice",
  "DICE Reroll a roll",
  "TWO BARS AC -2 permanent effect",
  "DAGGER Always have a blade in your hand when you need it",
  "CONCH SHELL Whisper to a known target, no matter the distance",
  "KEY Can open locks or shackles",
  "ANCHOR Target tests Spirit DR12 or is held frozen in place",
  "HARPOON Shoot a ghostly harpoon, Presence test, d10 damage",
  "CRAB Arm transforms into a crab pincher, d8 damage, transformation lasts for d6 rounds",
  "GUST OF WIND Shoot a controlled blast of wind, target tests Toughness DR 14 or is knocked to the ground",
  "WAVE can breathe underwater and swim at double normal rate",
  "SHARK FIN Transform into a half-shark for d4+Spirit rounds. Bite d8, breathe underwater",
  "STORM CLOUD Test Spirit (DR 12) to strike a target with Lightning (d12+2 damage)",
  "SHIP +2 to all sailing crew actions",
  "SSKULL Commune with the dead. You may ask d4+Spirit yes or no questions",
  "CANNON +2 to all ranged attacks",
  "CROSSED SABRES +2 to all attacks with a bladed weapon",
  "THE BLACK SPOT Touch someone to transfer the tattoo to them. They die in 1d4 rounds or 1d4 days (your choice)", ]


const griotStoryteller = "Storyteller: Test Spirit DR 12 to use a story to compel, persuade, or inspire.\n\nSpirit Pact: "
const griotPetition = "\n\nYou may petition them for aid in their domain of influence by making an offering of words, ash, rum, or blood. They may answer. They may not."

export const griotAbilityTable = [
  griotStoryteller + "Gor-Bloodshed, Violence, Warfare" + griotPetition,
  griotStoryteller + "Inkai-Metal, Craftsmanship, Weapons" + griotPetition,
  griotStoryteller + "Siras-Sorcery, Dark magic" + griotPetition,
  griotStoryteller + "Wea So-Water, The Sea" + griotPetition,
  griotStoryteller + "Agai-Life, Death" + griotPetition,
  griotStoryteller + "Huop-Trade, Boundaries, Barter" + griotPetition,
  griotStoryteller + "Feazan-Art, Music, Wisdom" + griotPetition,
  griotStoryteller + "Yosa-Trickery, Deception" + griotPetition, ]

export const cabinFeverClassAbilityTables = [
  messAbilityTable, barnacleAbilityTable, sulphurAbilityTable, powderKegAbilityTable, privateerAbilityTable, anglerAbilityTable,
  coagulantAbilityTable, reaperAbilityTable, shipwrightAbilityTable, ashDealerAbilityTable, tattooedAbilityTable, griotAbilityTable ]
