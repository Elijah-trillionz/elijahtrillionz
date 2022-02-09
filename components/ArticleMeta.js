import { ArticleJsonLd } from "next-seo";
import seoConfig from "../next-seo.config";
import { timestampDate } from "../scripts/date";
import Meta from "./Meta";

const ArticleMeta = ({
  title,
  canonical,
  description,
  keywords,
  datePublished,
  dateModified,
}) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <ArticleJsonLd
        url={seoConfig.url}
        title={title}
        images={[seoConfig.images[0].url]}
        datePublished={`${timestampDate(...datePublished)}`}
        dateModified={dateModified ? `${timestampDate(...dateModified)}` : ""}
        authorName={["Elijah Trillionz"]}
        publisherName="Elijah Trillionz"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description={description}
      />
    </>
  );
};

export default ArticleMeta;

// let's set a default title
ArticleMeta.defaultProps = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  canonical: seoConfig.url,
  keywords: seoConfig.defaultKeywords,
  datePublished: `${timestampDate([1, 1, 2022])}`,
};
