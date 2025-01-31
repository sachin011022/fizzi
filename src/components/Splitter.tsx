type Props = {
  text: string;
  className?: string;
  wordDisplayStyle?: "inline-block" | "block";
};

export default function Splitter({ text, className, wordDisplayStyle }: Props) {
  if (!text) return;
  const words = text.split(" ");

  return words.map((word: string, wordIndex: number) => {
    const splitText = word.split("");
    return (
      <span
        className={`split-word ${className}`}
        style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
        key={`${wordIndex}-${word}`}
      >
        {splitText.map((char, charIndex) => {
          if (char === " ") return ` `;
          return (
            <span
              key={charIndex}
              className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 ? (
          <span className="split-char">{` `}</span>
        ) : (
          ""
        )}
      </span>
    );
  });
}
