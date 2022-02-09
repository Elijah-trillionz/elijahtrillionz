import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Layout from "../layouts/Layout";
import GlobalStyles from "../components/styles/Global";
import theme from "../theme.config";
import { ThemeProvider } from "styled-components";
import "../prism.css";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <DefaultSeo
          title={seoConfig.defaultTitle}
          description={seoConfig.defaultDescription}
          additionalMetaTags={[
            {
              name: "keywords",
              content: seoConfig.defaultKeywords,
            },
          ]}
          openGraph={{
            type: "article",
            url: seoConfig.url,
            title: seoConfig.defaultTitle,
            description: seoConfig.defaultDescription,
            images: seoConfig.images,
            site_name: "Elijah Trillionz",
          }}
          twitter={seoConfig.twitter}
        />
        <Layout>
          <Component {...pageProps} />
          <GlobalStyles />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
