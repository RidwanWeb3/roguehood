import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { useChat, type UIMessage } from '@ai-sdk/react';

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onEmotionChange: (emotion: string) => void;
}

// Helper to extract text from UIMessage parts
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === 'text')
    .map((part) => (part as { text: string }).text)
    .join('');
}

export function ChatPanel({ isOpen, onClose, onEmotionChange }: ChatPanelProps) {
  const { messages, sendMessage, status } = useChat({
    onFinish: () => {
      onEmotionChange('idle');
    },
    onError: () => {
      onEmotionChange('confused');
    },
  });
  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'submitted' || status === 'streaming') {
      onEmotionChange('thinking');
    }
  }, [status, onEmotionChange]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    await sendMessage({ text: input });
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="w-full max-w-xl mx-auto mt-6"
        >
          <div className="bg-[#0B0F0A] border-2 border-lime-400 rounded-2xl p-6 shadow-2xl relative">
            <div className="mb-4 flex items-center justify-between border-b border-lime-400/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                  🦊
                </div>
                <div>
                  <h3 className="font-display text-lime-400 font-bold">Rogue</h3>
                  <p className="text-white/70 text-xs">Ready for an adventure?</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="h-64 overflow-y-auto mb-4 space-y-4 pr-2">
              {messages.length === 0 && (
                <div className="text-center py-10 text-white/70">
                  <p>Ask me anything about Roguehood!</p>
                </div>
              )}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                      🦊
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.role === 'user'
                        ? 'bg-lime-400 text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm">{getMessageText(message)}</p>
                  </div>
                </div>
              ))}
              {(status === 'submitted' || status === 'streaming') && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    🦊
                  </div>
                  <div className="bg-white/10 text-white p-3 rounded-xl">
                    <p className="text-sm flex items-center gap-1">
                      <span className="animate-pulse">Hmm...</span>
                    </p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Rogue anything..."
                className="flex-1 bg-white/10 border border-lime-400/30 rounded-xl px-4 py-2 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || status === 'submitted' || status === 'streaming'}
                className="bg-lime-400 text-black px-4 py-2 rounded-xl hover:bg-lime-300 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
