"use client";

import React, { useState, useRef, useEffect } from "react";
import { BotMessageSquare, MessageCircle, Send, X } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import ChatLogItem from "../components/chat/ChatLogItem";
import TypingAnimation from "../components/chat/TypingAnimation";
import toast from "react-hot-toast";

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

type ChatBotProps = {
  title: string;
  subtitle: string;
  botName: string;
  welcomeMessage: string;
  aiModel?: string;
};

const ChatBot: React.FC<ChatBotProps> = ({
  title,
  subtitle,
  botName,
  welcomeMessage,
  aiModel,
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Please enter a message");
      return;
    }

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = async (message: string) => {
    const URL = "https://openrouter.ai/api/v1/chat/completions";
    const apiKey = import.meta.env.VITE_OPEN_ROUTES_API_KEY;

    if (!apiKey) {
      toast.error("API Key is missing!");
      setIsLoading(false);
      return;
    }

    const data = {
      model: aiModel || "openai/gpt-4",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        toast.error("API Error: " + result.error.message);
        setIsLoading(false);
        return;
      }

      const botMessage = result.choices?.[0]?.message?.content;

      if (botMessage) {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: botMessage },
        ]);
      } else {
        toast.error("Unexpected response format");
      }
    } catch (error) {
      console.error("Failed to fetch chat response:", error);
      toast.error("Error communicating with the chatbot API");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <>
      <div>
        {/* Chat Toggle Button */}
        <button
          id="chatbot"
          className="z-[500] fixed bottom-4 right-4 flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-[#32CD32] hover:bg-[#28a745] cursor-pointer"
          onClick={toggleChat}
          aria-haspopup="dialog"
          aria-expanded={isChatOpen}
        >
          <MessageCircle className="text-[#FFD700] w-8 h-8" />
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div
            className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-[#ccd6e8] border border-gray-200 rounded-xl w-[440px] h-[600px] z-[500]"
          >
            {/* Header */}
            <div className="flex justify-between items-center space-y-1.5 p-6 rounded-t-xl bg-[#32CD32] border-b">
              <div className="flex flex-row">
                <span className="flex-shrink-0 mr-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#32CD32]">
                  <BotMessageSquare className="text-[#FFD700] w-8 h-8" />
                </span>
                <div>
                  <h2 className="font-semibold text-xl text-white tracking-tight">
                    {title}
                  </h2>
                  <p className="text-gray-200 mt-2">{subtitle}</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="inline-flex justify-center items-center h-8 w-8 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <X />
              </button>
            </div>

            {/* Chat Log */}
            <div className="px-6 pb-8">
              <div
                ref={chatContainerRef}
                className="pr-4 h-[400px] overflow-y-scroll"
              >
                {chatLog.map((message, index) => (
                  <ChatLogItem
                    key={index}
                    type={message.type}
                    message={message.message}
                    botName={botName}
                  />
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <TypingAnimation />
                  </div>
                )}
              </div>

              {/* Input Section */}
              <div className="flex items-center pt-0">
                <form
                  className="flex items-center justify-center w-full space-x-2"
                  onSubmit={handleSubmit}
                >
                  <Input
                    className="flex h-10 w-full rounded-md"
                    placeholder="Type your message"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    className="bg-[#FFD700] hover:bg-[#FFC107] text-white w-10 h-10 flex items-center justify-center rounded-full"
                    type="submit"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;
