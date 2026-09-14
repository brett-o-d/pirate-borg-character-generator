export const DownAmongTheDeadClassTable = [
  "The Antiquarian",
  "Deep One",
  "Unlocked Soul"
]

// strength, agility, presence, toughness, spirit
export const DownAmongTheDeadClassStatsModifierTable = [
  // "The Antiquarian" (+1 to one ability), "Deep One" (d8 Origin), "Unlocked Soul"
  [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [-1, -1, -1, -1, -1]]

export const DownAmongTheDeadClassDevilsLuckCircleFillTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  "1", "1", "2"]

export const DownAmongTheDeadClassHpTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  8, 6, 4]

export const DownAmongTheDeadClassClothingTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  10, 8, 10]

export const DownAmongTheDeadClassHatTable = [
  // "The Antiquarian", "Deep One", "Unlocked Soul"
  12, 10, 12]

export const DownAmongTheDeadClassWeaponTable = [
  // "The Antiquarian", "Deep One"(Fishing Spear), "Unlocked Soul" (Shackles & Chains)
  10, 0, 0]

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
  "rodents", "undead"]

export const antiquarianHolyGrailTable = [
  "Undiscovered ruins, lost temples, and ancient treasures",
  "To solve the mystery of the undead Scourge",
  "The origins and dark secrets behind ASH ",
  "To find anything that belongs in a museum",
  "The sunken city of Atlantis",
  "El Dorado,the City of Gold",
  "The Fountain of Youth",
  "A scorned lover from your past"]

const antiquarianStatModifyingAbility = "+1 to one ability of your choice. "

export const antiquarianAbilityTable = [
  antiquarianStatModifyingAbility + "THEOLOGY/ARCANA Learn a random prayerPB42 or spell (PB45) (you choose which type). You can cast it d2 + presence times a day, and you use presence for any modifiers or rolls.",
  antiquarianStatModifyingAbility + "PHILOLOGY You can read and translate ancient texts, glyphs, and hieroglyphics (at the GM’s discretion). When casting Rituals, you and anyone near you only roll a Mystical Mishap (PB66) if the test is failed by more than 4.",
  antiquarianStatModifyingAbility + "ATHLETICS Tests involving climbing, swinging, squeezing, avoiding a fall, jumping, or similar are -4 DR, regardless of the ability required.",
  antiquarianStatModifyingAbility + "ACQUISITIONS Treasure takes 1/2 the normal amount of inventory slots, and you can sell it for x2 its normal value.",
  antiquarianStatModifyingAbility + "ARCHAEOLOGY When you use a Relic, double any dice rolls or numerical benefits. You may repair any destroyed or depleted relic (limit once per relic).",
  antiquarianStatModifyingAbility + "OCCULTISM Increase your daily Devil's Luck by +1. Whenever you spend Devil's Luck, roll a d20 (cannot be altered): 1*. A Coral Shoggoth (PB103) is summoned. 2*-19. No effect. Raise the Shoggoth range(*) by 1. 20. Reset the range(*) to 1."]

// strength, agility, presence, toughness, spirit
export const deepOneOriginStatsModifierTable = [
  // "Hybrid" (+1 to two abilities), "Lentic", "Lotic", "Neritic", "Photic", "Bathyal", "Abyssal", "Ancient"
  [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [1, 0, 1, 0, 0], [1, 1, 0, 0, 0], [1, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 2]]

const deepOneAquaticAbility = "\n\nYou can swim 30' a round and can breathe underwater."

export const deepOneOriginTable = [
  "ORIGIN: Hybrid\nhuman/Deep One offspring | land\n\n+1 to two Different abilities of your choice." + deepOneAquaticAbility,
  "ORIGIN: Lentic\nstill freshwater | swamps, lakes, wetlands" + deepOneAquaticAbility,
  "ORIGIN: Lotic\nmoving freshwater | rivers, streams" + deepOneAquaticAbility,
  "ORIGIN: Neritic\ncoastal saltwater | beaches, coves, reefs, shoal" + deepOneAquaticAbility,
  "ORIGIN: Photic\nsunlit open ocean | off-shore" + deepOneAquaticAbility,
  "ORIGIN: Bathyal\nno sunlight | deep ocean" + deepOneAquaticAbility,
  "ORIGIN: Abyssal\nno sunlight | sunless ocean floor\n\nYou have a lure as a light source. You can see in the dark, but tests involving sight in broad daylight are +2 dr." + deepOneAquaticAbility,
  "ORIGIN: Ancient\notherworldly | unknowable depths\n\nYou are huge.\nYour defense rolls are +1 dr, but you start with d4 extra hp." + deepOneAquaticAbility]


const unlockedSoulFearInoculatedAbility = "• You are immune to any effects related to fear or terror.\n"

const unlockedSoulBorrowedTimeAbility = "• Your d20 results of a natural 1 cannot be altered. Every time you roll a natural 1 on a d20, roll a d100. On a 1* or lower, Charon reclaims your soul and takes you to the Netherworld. Your story ends. *Increase this number by 1 each time this roll is made.\n"

export const unlockedSoulComplicationsTable = [
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• You can't taste food or drink, and thirst for the warmth of a fire.",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• Your eyes glow bright blue. In the dark, your body shimmers like a dying firefly.",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• You are now d2: 1 extremely buoyant. 2 prone to sinking.",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• If you are on dry land for more than 24 hours, your flesh starts to peel away.",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• Your head can spin 360°, but you are blind to one color: d8: R.O.Y.G.B.I.V. or colorblind",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• Your skeleton is made of coral... it itches from within",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• You're always covered in d4: 1 crabs 2 barnacles 3 seaweed 4 sand.",
  unlockedSoulFearInoculatedAbility + unlockedSoulBorrowedTimeAbility + "• Your skin is permanently cold, wet, and blue. You sweat and bleed saltwater"]

// export const unlockedSoulAbilityTable = [
//   "FROZEN IN TIME. Once an hour, recover d4 HP or prevent d4 dmg. Limbs regrow, scars heal.",
//   "WRAITH WALK. Once an hour, you can teleport to a place you can see within 50’.",
//   "SKELETONS' CANT. Once a day, ask a dead body you can see two yes or no questions.",
//   "VISIONS OF DOOM. Every day at dawn, roll a d20 and save the result. During that day you may swap out that result with any other d20 result at the table.",
//   "AQUEOUS SYMBIOSIS. Once an hour, you may make your body resemble transparent water for d6 rounds. +4 DR to spot you.",
//   "NETHERWORLD REJECT. Every time you would be reduced to less than 0 HP, you are instead reduced to 0 HP. Roll on the Broken Table (PB32) each time this happens."]

export const DownAmongTheDeadClassAbilityTables = [antiquarianAbilityTable, deepOneOriginTable, unlockedSoulComplicationsTable]
