'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rnd } from 'react-rnd';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import { sendMessageToAPI } from '../../utils/chat-widget-api';

export type Message = {
  sender: 'user' | 'bot';
  type?: 'text' | 'code';
  language?: string | null;
  content: string;
};

export default function ChatWidget({ apiUrl }: { apiUrl: string }) {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{sender:'bot', type: "text", content:'Hello, how can I help you today?'}]);
  const [typing, setTyping] = useState(false);
  const [windowReady, setWindowReady] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ separate ref for scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Scroll to bottom smoothly whenever messages or typing state changes
    if (scrollContainerRef.current && messagesEndRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const isAtBottom =
        scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight < 100;

      if (isAtBottom) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [messages, typing]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth - 420,
        y: window.innerHeight - 580,
      });
      setWindowReady(true);
    }
  }, []);

  const handleSend = async () => {
    if (!inputRef.current?.value) return;
    const text = inputRef.current.value.trim();
    if (!text) return;

    setMessages(prev => [...prev, { sender: 'user', type: 'text', content: text }]);
    inputRef.current.value = '';
    setTyping(true);

    try {
      const res = await sendMessageToAPI(text);
      let botMessages: Message[] = [];
      try {
        botMessages = JSON.parse(res.answer);
      } catch {
        botMessages = [{ sender: 'bot', type: 'text', language: null, content: res.answer }];
      }
      setMessages(prev => [...prev, ...botMessages.map(m => ({ ...m, sender: 'bot' as const }))]);
    } catch {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', type: 'text', language: null, content: 'Failed to connect.' },
      ]);
    }

    setTyping(false);
  };

  const ChatWindow = (
    <motion.div
      key="chatbox"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden w-full h-full border border-gray-200"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 font-semibold text-sm flex items-center justify-between cursor-move">
        <span>AI TechDoc Assistant</span>
        <div className="flex gap-2">
          <button onClick={() => setMaximized(!maximized)} className="hover:text-gray-200">
            {maximized ? '🗗' : '🗖'}
          </button>
          <button onClick={() => setOpen(false)} className="hover:text-gray-200">✕</button>
        </div>
      </div>

      {/* ✅ Messages Section with scroll */}
      <div
        ref={scrollContainerRef}
        className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto scroll-smooth"
      >
        {messages.map((msg, i) => (
          <ChatBubble key={i} {...msg} />
        ))}
        {typing && <TypingIndicator />}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition"
          onClick={handleSend}
        >
          ➤
        </button>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(true)}
          >
            💬
          </motion.div>
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && windowReady && (
          maximized ? (
            <div className="fixed inset-0 flex items-center justify-center z-[99999] p-4">
              <div className="w-[90vw] h-[90vh]">{ChatWindow}</div>
            </div>
          ) : (
            <Rnd
              default={{
                x: position.x,
                y: position.y,
                width: 400,
                height: 520,
              }}
              bounds="window"
              minWidth={350}
              minHeight={400}
              enableResizing={{
                top: true, right: true, bottom: true, left: true,
                topRight: true, bottomRight: true, bottomLeft: true, topLeft: true,
              }}
              disableDragging={maximized}
              className="z-[9999] fixed"
            >
              {ChatWindow}
            </Rnd>
          )
        )}
      </AnimatePresence>
    </>
  );
}
