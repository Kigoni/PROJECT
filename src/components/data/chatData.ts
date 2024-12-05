import { useState } from "react";
import sendMessageToChatAPI from "./fetchChat";  // Import the fetch function

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

const useChat = () => {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addUserMessage = (message: string) => {
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message },
    ]);
  };

  const addBotMessage = (message: string) => {
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "bot", message },
    ]);
  };

  const handleSubmitMessage = async (message: string, aiModel?: string) => {
    if (message.trim() === "") {
      console.error("Message is empty");
      return;
    }

    addUserMessage(message);
    setIsLoading(true);

    try {
      const botMessage = await sendMessageToChatAPI(message, aiModel);
      addBotMessage(botMessage || "Sorry, I didn't understand that.");
    } catch (error) {
      console.error("Error while sending message:", error);
      addBotMessage("Sorry, something went wrong.");
    }

    setIsLoading(false);
  };

  return {
    chatLog,
    isLoading,
    handleSubmitMessage,
  };
};

export default useChat;
