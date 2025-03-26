import { Player } from '@type/player';
import { FeaturePage, useGetFeatureData } from '@hooks/useGetFeatureData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles/Feature.module.scss';
import { PageArtPosition, PageImage } from '@type/page';

// Each image is designed with a part where the image fades out,
// text can be displayed legibly over this part
const IMAGE_FADEOUT_OFFSET = 25;

interface FeatureListProps {
  player: Player;
}
export const FeatureList = ({ player }: FeatureListProps) => {
  const featurePages: FeaturePage[] = useGetFeatureData(player);
  return (
    <div className="feature-list">
      {featurePages.map((featurePage, index) => {
        return <Page key={index} {...featurePage} player={player} />;
      })}
    </div>
  );
};

const Page = ({
  background,
  page,
  player,
}: FeaturePage & { player: Player }) => {
  console.log('background', background);
  if (!page?.sections.length) {
    return null;
  }
  const { sections, compact, img } = page;
  return (
    <div
      className={styles.featurePage}
      style={{
        paddingTop:
          img && img.position === PageArtPosition.top
            ? `calc(4.5in - ${(img?.offset ?? 0) + IMAGE_FADEOUT_OFFSET}px)`
            : 0,
      }}
    >
      <div
        className={styles.featurePageBackgroundPanel}
        style={{ backgroundImage: `url("${background}")` }}
      />
      {img && <PageImg {...img} />}
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={`${styles.section} ${compact ? styles.compact : ''}`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children, ...props }) => {
                  return (
                    <p {...props} style={{ marginBottom: compact ? 0 : '1em' }}>
                      {children}
                    </p>
                  );
                },
                h1: ({ ...props }) => (
                  <h1
                    {...props}
                    className={styles['markdown-h1']}
                    style={compact ? { marginBottom: 0 } : undefined}
                  />
                ),
                h2: ({ ...props }) => (
                  <>
                    <h2 {...props} className={styles['markdown-h2']} />
                    <hr className={styles['markdown-hr']} />
                  </>
                ),
                h3: ({ ...props }) => (
                  <h3
                    {...props}
                    className={styles['markdown-h3']}
                    style={compact ? { marginTop: '10px' } : undefined}
                  />
                ),
                h4: ({ ...props }) => (
                  <h4 {...props} className={styles['markdown-h4']} />
                ),
                table: ({ ...props }) => (
                  <table
                    {...props}
                    className={`${styles['markdown-table']} ${styles[player]}`}
                  />
                ),
                th: ({ ...props }) => (
                  <th {...props} className={styles['markdown-th']} />
                ),
                td: ({ ...props }) => (
                  <td {...props} className={styles['markdown-td']} />
                ),
              }}
            >
              {section}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};

const PageImg = ({ position, url, offset }: PageImage) => {
  return (
    <div
      className={`${styles.featureImageContainer}  ${
        position === PageArtPosition.top ? styles.top : styles.bottom
      }`}
    >
      <img
        src={url}
        alt={'feature page image'}
        className={styles.featureImage}
        style={{
          top: offset
            ? position === PageArtPosition.top
              ? -offset
              : offset
            : 0,
        }}
      />
    </div>
  );
};
