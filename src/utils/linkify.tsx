import React from "react";

export function linkify(text: string): React.ReactNode[] {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const urlRegex =
    /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+|www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/g;

  const parts = text.split(urlRegex);
  return parts.flatMap((part, i) => {
    if (urlRegex.test(part)) {
      const url = part.startsWith("http") ? part : `https://${part}`;
      return [
        <a
          key={`url-${i}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {part}
        </a>,
      ];
    }
    const subparts = part.split(emailRegex);
    return subparts.map((sub, j) => {
      if (emailRegex.test(sub)) {
        return (
          <a
            key={`mail-${i}-${j}`}
            href={`mailto:${sub}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {sub}
          </a>
        );
      }
      return sub;
    });
  });
}
