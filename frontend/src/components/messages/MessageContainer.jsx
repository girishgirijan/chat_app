import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    //Clean up
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {selectedConversation === null ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            {/* <span className="label-text">To : </span> */}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
