import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

export default function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">JiyaRose</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
