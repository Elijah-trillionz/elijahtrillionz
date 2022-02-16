import {
  ArticleLink,
  ArticleParagraph,
  ArticleTitle,
  ArticleList,
  ArticleHeader,
  ArticleQuote,
  SyntaxHighlighter,
} from './styles/Markdown.styled';
import prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';

const CodeHighlighter = ({
  children: {
    props: { className, children },
  },
}) => {
  if (className.length >= 1) {
    const language = className.split('-').at(-1);
    const codeElement = () => {
      return {
        __html: prism.highlight(children, prism.languages[language], language),
      };
    };

    return (
      <SyntaxHighlighter>
        <code dangerouslySetInnerHTML={codeElement()} className='some-lang' />
      </SyntaxHighlighter>
    );
  } else {
    return (
      <SyntaxHighlighter>
        <code>Some thing here</code>
      </SyntaxHighlighter>
    );
  }
};

const MDXComponents = {
  p: (props) => <ArticleParagraph {...props} />,
  a: (props) => <ArticleLink {...props} />,
  h1: (props) => <ArticleTitle {...props} />,
  ol: (props) => <ArticleList {...props} />,
  ul: (props) => <ArticleList {...props} as={'ul'} />,
  blockquote: (props) => <ArticleQuote {...props} />,
  h2: (props) => <ArticleHeader {...props} style={{ fontSize: '1.3rem' }} />,
  h3: (props) => <ArticleHeader {...props} as={'h3'} />,
  h4: (props) => <ArticleHeader {...props} as={'h4'} />,
  h5: (props) => <ArticleHeader {...props} as={'h5'} />,
  h6: (props) => <ArticleHeader {...props} as={'h6'} />,
  pre: (props) => <CodeHighlighter {...props} />,
};

export default MDXComponents;
