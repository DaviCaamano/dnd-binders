import styles from "../../styles/SpellBook.module.scss";

export const SpellCardBackground = ({
  offSets: [left, right],
}: {
  offSets: [number, number];
}) => (
  <>
    <div
      className={styles.spellCardBackgroundPanel}
      style={{
        backgroundImage: `url("/img/Card BG sm.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `right -${right}px`,
        opacity: 0.5,
      }}
    />
    <div
      className={styles.spellCardBackgroundPanel}
      style={{
        backgroundImage: `url("/img/Card BG2 sm.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `left -${left}px`,
        opacity: 0.5,
      }}
    />
    <div
      className={styles.spellCardBackgroundPanel}
      style={{
        background: `linear-gradient(to bottom, rgba(169, 169, 169,.75),rgba(169, 169, 169, 0.5), rgba(169, 169, 169, 0.2), transparent)`,
        height: "30px",
        width: "100%",
        backgroundPosition: "50% 100%",
        zIndex: -1,
        opacity: 0.5,
      }}
    />
    <div
      className={styles.spellCardBackgroundPanel}
      style={{
        background: `linear-gradient(to top, rgba(169, 169, 169, 0.5), rgba(169, 169, 169, 0.2), transparent)`,
        height: "20px",
        width: "100%",
        bottom: 0,
        top: "unset",
        zIndex: -1,
        opacity: 0.5,
      }}
    />
  </>
);
