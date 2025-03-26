import { Player } from '@type/player';
import { barabisPages } from '@constants/pages/barabis';
import { bluePages } from '@constants/pages/blue';
import { demisePages } from '@constants/pages/demis';
import { nutmegPages } from '@constants/pages/nutmeg';
import { romynarPages } from '@constants/pages/Romynar';
import { xantarirPages } from '@constants/pages/xantari';
import { Page } from '@type/page';
import { globalPages } from '@constants/pages/global';

const playerPages: Record<Player, Page[]> = {
  [Player.barabis]: barabisPages,
  [Player.blue]: bluePages,
  [Player.demis]: demisePages,
  [Player.nutmeg]: nutmegPages,
  [Player.romynar]: romynarPages,
  [Player.xantari]: xantarirPages,
  [Player.global]: globalPages,
};

export const getPlayerPages = (player: Player) => playerPages[player];
