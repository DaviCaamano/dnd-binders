import { Player } from "@type/player";
import {
  barabisBackground,
  fighterClassTable,
  fighterLevel1,
  fighterLevel2,
  fighterLevel3,
} from "@constants/pages/barabis";
import {
  demisBackground,
  paladinClassTable,
  paladinLevel1,
  paladinLevel2,
  paladinLevel3,
} from "@constants/pages/demis";
import {
  blueBackground,
  monkClassTable,
  monkLevel1,
  monkLevel2,
  monkLevel3,
} from "@constants/pages/blue";
import {
  nutmegBackground,
  wizardClassTable,
  wizardLevel1,
  wizardLevel2,
} from "@constants/pages/nutmeg";
import {
  romynarBackground,
  warlockClassTable,
  warlockInvocations,
  warlockLevel1,
  warlockLevel2,
  warlockLevel3,
} from "@constants/pages/Romynar";
import {
  rogueClassTable,
  RogueLevel1,
  RogueLevel2,
  RogueLevel3,
  xantariBackground,
} from "@constants/pages/xantari";
const playerPages: Record<Player, string[][]> = {
  [Player.barabis]: [
    fighterClassTable,
    barabisBackground,
    fighterLevel1,
    fighterLevel2,
    fighterLevel3,
  ],
  [Player.blue]: [
    monkClassTable,
    blueBackground,
    monkLevel1,
    monkLevel2,
    monkLevel3,
  ],
  [Player.demis]: [
    paladinClassTable,
    demisBackground,
    paladinLevel1,
    paladinLevel2,
    paladinLevel3,
  ],
  [Player.nutmeg]: [
    wizardClassTable,
    nutmegBackground,
    wizardLevel1,
    wizardLevel2,
  ],
  [Player.romynar]: [
    warlockClassTable,
    romynarBackground,
    warlockLevel1,
    warlockLevel2,
    warlockLevel3,
    warlockInvocations,
  ],
  [Player.xantari]: [
    rogueClassTable,
    xantariBackground,
    RogueLevel1,
    RogueLevel2,
    RogueLevel3,
  ],
};

export const getPlayerPages = (player: Player) => playerPages[player];
