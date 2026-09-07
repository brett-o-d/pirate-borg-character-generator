export const DownAmongTheDeadClassTable = [
  "The Antiquarian",
  "Deep One",
  "Unlocked Soul"
]

// strength, agility, presence, toughness, spirit
export const DownAmongTheDeadClassStatsModifierTable = [ 
  // "The Antiquarian" (+1 to one ability), "Deep One" (d8 Origin), "Unlocked Soul"
  [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [-1, -1, -1, -1, -1] ]

 export const DownAmongTheDeadClassDevilsLuckCircleFillTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  "1", "1", "2" ]

 export const DownAmongTheDeadClassHpTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  8, 6, 4 ]

 export const DownAmongTheDeadClassClothingTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  10, 8, 10 ]

 export const DownAmongTheDeadClassHatTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  12, 10, 12 ]

 export const DownAmongTheDeadClassWeaponTable = [
  // "The Antiquarian", "Deep One"(Fishing Spear), "Unlocked Soul" (Shackles & Chains)
  10, 0, 0 ]

export const antiquarianPhobiaTable = [
"darkness", "heights",
"tight spaces", "spiders",
"fire", "the opposite sex",
"water", "amphibians",
"bats", "crustaceans",
"insects", "blood",
"snakes", "fish",
"sharks", "tentacles",
"demons", "sunlight",
"rodents", "undead" ]

export const antiquarianHolyGrailTable = [
"Undiscovered ruins, lost temples, and ancient treasures",
"To solve the mystery of the undead Scourge",
"The origins and dark secrets behind ASH ",
"To find anything that belongs in a museum",
"The sunken city of Atlantis",
"El Dorado,the City of Gold",
"The Fountain of Youth",
"A scorned lover from your past" ]

const antiquarianStatModifyingAbility = "+1 to one ability of your choice. "

export const antiquarianAbilityTable = [
  antiquarianStatModifyingAbility + "THEOLOGY/ARCANA Learn a random prayerPB42 or spellPB45 (you choose which type). You can cast it d2 + presence times a day, and you use presence for any modifiers or rolls.",
  antiquarianStatModifyingAbility + "PHILOLOGY You can read and translate ancient texts, glyphs, and hieroglyphics (at the GM’s discretion). When casting Rituals, you and anyone near you only roll a Mystical Mishap (PB66) if the test is failed by more than 4.",
  antiquarianStatModifyingAbility + "ATHLETICS Tests involving climbing, swinging, squeezing, avoiding a fall, jumping, or similar are -4 DR, regardless of the ability required.",
  antiquarianStatModifyingAbility + "ACQUISITIONS Treasure takes 1/2 the normal amount of inventory slots, and you can sell it for x2 its normal value.",
  antiquarianStatModifyingAbility + "ARCHAEOLOGY When you use a Relic, double any dice rolls or numerical benefits. You may repair any destroyed or depleted relic (limit once per relic).",
  antiquarianStatModifyingAbility + "OCCULTISM Increase your daily Devil's Luck by +1. Whenever you spend Devil's Luck, roll a d20 (cannot be altered): 1*. A Coral Shoggoth PB103 is summoned. 2*-19. No effect. Raise the Shoggoth range(*) by 1. 20. Reset the range(*) to 1." ]

export const deepOneAbilityTable = [
  "Black Powder Blessing: If you or a nearby ally fumbles with a black powder weapon, you can spend a Devil’s Luck to make it a hit instead. If taken again, it’s a CRIT.",
  "Deadeye Spotter: The next attack from a gun you reloaded is 2 DR. If taken again, you can reload a second gun when you use your action to reload a gun.",
  "Bombardier: Small Arms and Broadsides from your vessel deal an additional +2 damage. If taken again, your vessel's Broadside attacks BURN (roll d6 each turn; on 15 , deal that much damage. The fire goes out on 6).",
  "Cannoneer: You can Fire Broadsides once more than your ship would normally allow. You can’t do this on consecutive rounds. If taken again, you can.",
  "ASH CHYMIST: During a long rest, you can craft 1d4+Presence improvised bombs from ASH. If taken again, you craft 2d4+Presence bombs instead.",
  "Keep Your Powder Dry: You can fire your black powder weapons while swimming or in the rain. If taken again, you take d6 less from explosions." ]

export const unlockedSoulAbilityTable = [
  "RAW FISH EATER You’ve stomached the slimy, smelly, and scaly uncooked. All tests to withstand eating diseased food are -2DR for you.",
  "HOOKER You catch an additional D4 fish whenever fishing.",
  "IT WAS THIS BIG! You tell exaggerated stories of massive beasts you catch, giving you -3DR to lying out the ass.",
  "ADVANCED FISHING TECHNIQUES A Book of advanced fishing strategies you only read half of. You can fish in half the usual time.",
  "TIGHT PACKER You can store double the usual amount of things in containers and cargo holds.",
  "COLD STORAGE You gain a never-melting ice block, which prevents fish stored near it from spoiling for 1 week." ]

export const anglerWeaponTable = [
  "Fish-Filled Net (D4 damage)",
  "Harpoon (D8 damage)" ]

export const DownAmongTheDeadClassAbilityTables = [ antiquarianAbilityTable, deepOneAbilityTable, unlockedSoulAbilityTable ]
