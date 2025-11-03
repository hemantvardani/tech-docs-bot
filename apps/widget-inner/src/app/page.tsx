import Image from "next/image";
import ChatWidget from "../components/chat-widget/ChatWidget";

export default function Home() {
  return (
    <ChatWidget apiUrl="http://localhost:8000/chat" />
  );
}
