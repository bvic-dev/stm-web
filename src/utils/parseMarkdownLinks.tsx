import React from "react";

export function parseMarkdownLinks(text: string): React.ReactNode[] {
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = markdownLinkRegex.exec(text)) !== null) {
    const [fullMatch, label, url] = match;
    const index = match.index;

    if (lastIndex < index) {
      result.push(text.slice(lastIndex, index));
    }

    result.push(
      <a
        key={`${label}-${index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {label}
      </a>
    );

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}