'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Noto_Sans_Mono } from 'next/font/google';

const mono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export default function MarkdownRenderer({
  className = '',
  content,
}: {
  className?: string;
  content: string;
}) {
  return (
    <div className={className}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          code: ({ children, className, ref, ...restProps }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...restProps}
                language={match[1]}
                style={vscDarkPlus}
                customStyle={{
                  padding: '0.5rem',
                  margin: '0rem',
                  overflow: 'auto',
                  backgroundColor: 'transparent',
                  ...mono.style,
                  fontWeight: 500,
                }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <span
                className="m-0 rounded-md bg-[#656c7633] px-1.5 py-0.5 whitespace-break-spaces"
                style={{
                  fontSize: '85%',
                  ...mono.style,
                  fontWeight: 500,
                }}
              >
                {children}
              </span>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
