import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    if (!message) {
      toast.error("Please enter a message");
      return false;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message);
        return false;
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
      
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
