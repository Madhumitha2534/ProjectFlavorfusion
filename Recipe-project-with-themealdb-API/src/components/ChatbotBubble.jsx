import React, { useEffect } from 'react';

const ChatbotBubble = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "6NOz1aQcFLx4EGa5Wqv7l",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://www.chatbase.co/embed.min.js';
    script2.setAttribute('chatbotId', '6NOz1aQcFLx4EGa5Wqv7l');
    script2.setAttribute('domain', 'www.chatbase.co');
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default ChatbotBubble;