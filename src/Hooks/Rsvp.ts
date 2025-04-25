// hooks/useSendMessage.ts
import { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;

interface MessagePayload {
  name: string;
  phone: string;
  message: string;
  present: boolean;
}

interface SendMessageResponse {
  success: boolean;
  message: string;
}

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<SendMessageResponse | null>(null);

  const sendMessage = async (payload: MessagePayload) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post<SendMessageResponse>(
        api + "messages/send",
        payload
      );
      setResponse(res.data);
      return res.data;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    loading,
    error,
    response,
  };
};

/**
 * Get data message
 */
interface MessageItem {
  name: string;
  message: string;
  present: boolean;
  // createdAt?: string; //
}

const useFetchMessages = () => {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  const fetchMessages = async () => {
    try {
      axios.get(api + "messages").then((res) => {
        setMessages(res.data.data);
      }).catch(() =>{
        setMessages([]); 
      });
      
    } catch (error: any) {
  
      setMessages([]); 
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return {
    message: messages,
    refetch: fetchMessages,
  };
};

export { useSendMessage, useFetchMessages };
