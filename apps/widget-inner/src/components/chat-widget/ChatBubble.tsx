import { useEffect } from 'react';
import Prism from 'prismjs';
import { Message } from './ChatWidget';

export default function ChatBubble({ sender, type = 'text', language, content }: Message & { sender: 'user' | 'bot' }) {
  useEffect(() => {
    if (type === 'code') {
      Prism.highlightAll(); // Highlight new code blocks
    }
  }, [content, type]);

  if (type === 'code') {
    return (
      <pre
        className={`bg-gray-900 text-green-300 p-3 rounded font-mono overflow-x-auto max-w-[80%] ${
          sender === 'user' ? 'self-end' : 'self-start'
        }`}
      >
        <code className={language ? `language-${language}` : ''}>{content}</code>
      </pre>
    );
  }

  return (
    <div
      className={`p-3 rounded max-w-[80%] text-gray-800 ${
        sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
      }`}
    >
      {content}
    </div>
  );
}
