import { Player } from '@type/player';
import styles from '@styles/Guide.module.scss';

export const Guide = () => {
  return (
    <div className={styles.guide}>
      <h1 className={styles.title}>{"Davi's D&D Player Guide"}</h1>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <SectionBanner name="Players" />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {features.map((link, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <a href={link.url?.toLowerCase()} className={styles.item}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <SectionBanner name="Spell Books" />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {spellBooks.map((link, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <a href={link.url} className={`${styles.item} ${styles.spells}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ width: '100%' }}>
        <SectionBanner name="Other" />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a href={feats.url} className={`${styles.item} ${styles.other}`}>
              {feats.label}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const features = [
  { label: Player.barabis + ' Features', url: '/features/' + Player.barabis },
  { label: Player.blue + ' Features', url: '/features/' + Player.blue },
  { label: Player.demis + ' Features', url: '/features/' + Player.demis },
  { label: Player.nutmeg + ' Features', url: '/features/' + Player.nutmeg },
  { label: Player.romynar + ' Features', url: '/features/' + Player.romynar },
  { label: Player.xantari + ' Features', url: '/features/' + Player.xantari },
];

const spellBooks = [
  { label: 'Paladin Spells', url: '/spellbook/paladin' },
  { label: 'Warlock Spells', url: '/spellbook/warlock' },
  { label: 'Wizard Spells', url: '/spellbook/wizard' },
  { label: 'Extra Spells', url: '/spellbook/extra' },
];

const feats = {
  label: 'Feats (levels 1 - 4)',
  url: 'https://coffee-viva-24.tiiny.site/',
};

const SectionBanner = ({ name }: { name: string }) => (
  <h2
    style={{
      color: '#fff',
      fontFamily: 'Cinzel, serif',
      fontSize: '2.5rem',
      textShadow: '2px 2px 4px #000000',
      borderBottom: '2px solid #8B0000',
      paddingBottom: '0.5rem',
      marginBottom: '1rem',
    }}
  >
    {name}
  </h2>
);
