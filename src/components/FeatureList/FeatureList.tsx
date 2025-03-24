import { Player } from "@type/player";
import { FeaturePage, useGetFeatureData } from "@hooks/useGetFeatureData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import styles from "../../styles/Feature.module.scss";

interface FeatureListProps {
  player: Player;
}
export const FeatureList = ({ player }: FeatureListProps) => {
  const featurePages: FeaturePage[] = useGetFeatureData(player);
  return (
    <div className="feature-list">
      {featurePages.map((featurePage, index) => {
        return <Page key={index} {...featurePage} />;
      })}
    </div>
  );
};

const Page = ({ page, background }: FeaturePage) => {
  if (!page?.length) {
    return null;
  }
  return (
    <div className={styles.featurePage}>
      <div
        className={styles.featurePageBackgroundPanel}
        style={{ backgroundImage: `url("${background}")` }}
      />
      {page.map((section, index) => {
        return (
          <div key={index} className={styles.section}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children, ...props }) => {
                  return (
                    <p {...props} style={{ marginBottom: "1em" }}>
                      {children}
                    </p>
                  );
                },
                h1: ({ ...props }) => (
                  <h1 {...props} className={styles["markdown-h1"]} />
                ),
                h3: ({ ...props }) => (
                  <h3 {...props} className={styles["markdown-h3"]} />
                ),
                table: ({ ...props }) => (
                  <table {...props} className={styles["markdown-table"]} />
                ),
                th: ({ ...props }) => (
                  <th {...props} className={styles["markdown-th"]} />
                ),
                td: ({ ...props }) => (
                  <td {...props} className={styles["markdown-td"]} />
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
