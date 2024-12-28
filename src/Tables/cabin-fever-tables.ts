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
  [0, 0, -1, 2, -1], [0, -2, 0, -2, 0], [0, 0, 2, -2, 0], [-1, 0, 2, -1, 0], [0, 0, -2, 1, 1], [-1, -1, 0, 0, 2] ]
 
//  export const CabinFeverClassDevilsLuckTable = [
//   // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
//   "d2", "d2+1", "d4", "1", "d2", "d2",
//   // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
//   "d2", "d2", "d2", "d4", "0", "0", ]

 export const CabinFeverClassDevilsLuckCircleFillTable = [
  // "The Mess", "The Barnacle" (TODO + 1), The Sulphur", "Powder Keg" (1), "Privateer", "Angler"
  "1", "1", "2", "0", "1", "1",
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  "1", "1", "1", "2", "0", "0" ]
 
 export const CabinFeverClassHpTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer", "Angler"
  12, 8, 8, 4, 10, 8,
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed", "The Griot"
  2, 6, 6, 8, 12, 8 ]
 
 export const CabinFeverClassClothingTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg" (TODO rags), "Privateer" (TODO + 2), "Angler"
  6, 10, 6, 4, 8, 4, 
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer", "The Tattooed" (TODO none), "The Griot"
  6, 10, 10, 8, 0, 6 ]
 
 export const CabinFeverClassHatTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg" (TODO no hat), "Privateer" (TODO + 4), "Angler"
  12, 12, 12, 6, 6, 6,
  // "Coagulant", "Reaper", "Shipwright", "ASH Dealer" (TODO + 1), "The Tattooed", "The Griot"
  10, 6, 10, 10, 10, 10 ]
 
 export const CabinFeverClassWeaponTable = [
  // "The Mess", "The Barnacle", The Sulphur", "Powder Keg", "Privateer" (TODO + 2), "Angler"
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

export const barnacleAbilityTable = [
  "A flintlock pistol and 40 rounds of shot [+1 Presence].",
  "20s, a hat (d12), shovel, and medical kit [+1 Presence].",
  "Twenty dried food, two tobacco, and d10 + Presence throwing knives [+1 Agility].",
  "d6 + Presence improvised grenades [+1 Agility].",
  "A ritual dagger (d4 damage) and a STOLEN Ancient Relic (d20) you don't understand [+1 Spirit]. Reroll if you got this as your previous pack.",
  "d4 ASH [+1 Spirit]. Add Spirit (minimum +1) when rolling for ASH effects." ]

export const sulphurAbilityTable = [
  "Black Powder Blessing: If you or a nearby ally fumbles with a black powder weapon, you can spend a Devil’s Luck to make it a hit instead. If taken again, it’s a CRIT.",
  "Deadeye Spotter: The next attack from a gun you reloaded is 2 DR. If taken again, you can reload a second gun when you use your action to reload a gun.",
  "Bombardier: Small Arms and Broadsides from your vessel deal an additional +2 damage. If taken again, your vessel's Broadside attacks BURN (roll d6 each turn; on 15 , deal that much damage. The fire goes out on 6).",
  "Cannoneer: You can Fire Broadsides once more than your ship would normally allow. You can’t do this on consecutive rounds. If taken again, you can.",
  "ASH CHYMIST: During a long rest, you can craft 1d4+Presence improvised bombs from ASH. If taken again, you craft 2d4+Presence bombs instead.",
  "Keep Your Powder Dry: You can fire your black powder weapons while swimming or in the rain. If taken again, you take d6 less from explosions." ]

export const powderKegAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const privateerAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const anglerAbilityTable = [
  "RAW FISH EATER You’ve stomached the slimy, smelly, and scaly uncooked. All tests to withstand eating diseased food are -2DR for you.",
  "HOOKER You catch an additional D4 fish whenever fishing.",
  "IT WAS THIS BIG! You tell exaggerated stories of massive beasts you catch, giving you -3DR to lying out the ass.",
  "ADVANCED FISHING TECHNIQUES A Book of advanced fishing strategies you only read half of. You can fish in half the usual time.",
  "TIGHT PACKER You can store double the usual amount of things in containers and cargo holds.",
  "COLD STORAGE You gain a never-melting ice block, which prevents fish stored near it from spoiling for 1 week." ]

export const coagulantAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const reaperAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const shipwrightAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const ashDealerAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const tattooedAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const griotAbilityTable = [
  "You begin with a trusted weapon [d6]. It has a nickname (what is it?). It will never break (but can be dropped). DR10 to attack:" ]

export const classAbilityTables = [
  messAbilityTable, barnacleAbilityTable, sulphurAbilityTable, powderKegAbilityTable, privateerAbilityTable, anglerAbilityTable,
  coagulantAbilityTable, reaperAbilityTable, shipwrightAbilityTable, ashDealerAbilityTable, tattooedAbilityTable, griotAbilityTable ]
