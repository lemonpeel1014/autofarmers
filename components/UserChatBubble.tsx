import { Fragment } from 'react';

export default function UserChatBubble({
  id,
  text,
}: {
  id: number;
  text: string;
}) {
  return (
    <div className="bg-primary text-primary-foreground ml-auto flex w-max max-w-[75%] flex-wrap items-center justify-start gap-x-1 gap-y-0.5 rounded-lg px-3 py-2 text-sm first:mt-5 last:mb-5">
      {text.split('\n').map((line, i) => (
        <Fragment key={`user-messsage-${id}-line-${i}`}>
          {line.split(' ').map((word, j) => {
            const key = `user-message-${id}-line-${i}-word-${j}`;
            return word.startsWith('@') ? (
              <span
                key={key}
                className="text-secondary-foreground font-semibold underline"
              >
                {word}
              </span>
            ) : (
              <span key={key}>{word}</span>
            );
          })}
          <br />
        </Fragment>
      ))}
    </div>
  );
}
