// fetchChat.ts
const sendMessageToChatAPI = async (message: string, aiModel?: string) => {
  const URL = "https://openrouter.ai/api/v1/chat/completions";  // OpenRouter API URL
  const apiKey = process.env.NEXT_PUBLIC_OPEN_ROUTES_API_KEY;  // Ensure the API key is correctly set
  const data = {
    model: aiModel ? aiModel : "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  };

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": `${window.location.origin}`,  // Optional, for rankings
      "X-Title": "YourAppName",  // Optional, shows in rankings
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  if (response.ok) {
    return responseData?.choices[0]?.message?.content;
  } else {
    throw new Error(responseData?.error?.message || "Something went wrong");
  }
};

export default sendMessageToChatAPI;
