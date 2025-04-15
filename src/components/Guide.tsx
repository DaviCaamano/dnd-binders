import { Player } from '@type/player';

export const Guide = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#000000',
        minHeight: '100vh',
        minWidth: '100vw',
        margin: 0,
      }}
    >
      <h1
        style={{
          marginBottom: '1rem',
          color: '#fff',
          fontFamily: 'Cinzel, serif',
          fontSize: '3rem',
          textShadow: '2px 2px 6px #000000',
          paddingBottom: '0.5rem',
        }}
      >
        {"Davi's D&D Player Guide"}
      </h1>
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <SectionBanner name="Features" />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {features.map((link, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <a
                href={link.url?.toLowerCase()}
                style={{
                  textDecoration: 'none',
                  color: '#9cc2ec',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
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
              <a
                href={link.url}
                download={'Feats.pdf'}
                style={{
                  textDecoration: 'none',
                  color: '#81c390',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
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
            <a
              href={feats.url}
              style={{
                textDecoration: 'none',
                color: '#ff6070',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
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
  { label: Player.demis + ' Spells', url: '/spellbook/paladin' },
  { label: Player.nutmeg + ' Spells', url: '/spellbook/wizard' },
  { label: Player.romynar + ' Spells', url: '/spellbook/warlock' },
  { label: 'Extra Spells', url: '/spellbook/extra' },
];

const feats = { label: 'Feats', url: '/pdf/feats.pdf' };

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
