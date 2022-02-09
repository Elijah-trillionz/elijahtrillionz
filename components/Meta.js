import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const Meta = ({ title, canonical, description, keywords }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      additionalMetaTags={[
        {
          name: "keywords",
          content: keywords,
        },
      ]}
      openGraph={{
        type: "article",
        url: seoConfig.url,
        title: title,
        description: description,
        images: seoConfig.images,
        site_name: "Elijah Trillionz",
      }}
      twitter={seoConfig.twitter}
    />
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  canonical: seoConfig.url,
  keywords: seoConfig.defaultKeywords,
};
