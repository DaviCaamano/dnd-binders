import { Player } from '@type/player';

export const Guide = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        marginBottom: '0.5rem',
        padding: '1rem',
      }}
    >
      {links.map((link, index) => (
        <Link key={index} {...link} />
      ))}
    </div>
  );
};

const links = [
  { label: Player.barabis + ' Features', url: '/features/' + Player.barabis },
  { label: Player.blue + ' Features', url: '/features/' + Player.blue },
  { label: Player.demis + ' Features', url: '/features/' + Player.demis },
  { label: Player.nutmeg + ' Features', url: '/features/' + Player.nutmeg },
  { label: Player.romynar + ' Features', url: '/features/' + Player.romynar },
  { label: Player.xantari + ' Features', url: '/features/' + Player.xantari },
  { label: Player.demis + ' Spells', url: '/spellbook/paladin' },
  { label: Player.nutmeg + ' Spells', url: '/spellbook/wizard' },
  { label: Player.romynar + ' Spells', url: '/spellbook/warlock' },
  { label: 'Extra Spells', url: '/spellbook/extra' },
];
interface LinkProps {
  label: string;
  url: string;
}
const Link = ({ label, url }: LinkProps) => {
  return (
    <div>
      <a
        href={url}
        style={{
          fontWeight: 'semibold',
          color: 'blue',
          textTransform: 'capitalize',
        }}
      >
        {label}
      </a>
    </div>
  );
};
