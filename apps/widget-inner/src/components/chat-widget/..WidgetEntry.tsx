import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";

declare global {
  interface Window {
    MyChatWidget: {
      init: (options: { apiUrl: string }) => void;
    };
  }
}

window.MyChatWidget = {
  init: ({ apiUrl }) => {
    const container = document.createElement("div");
    container.id = "my-chat-widget";
    // container.style.position = "fixed";
    // container.style.bottom = "0";
    // container.style.right = "0";
    // container.style.height = "fit-content";
    // container.style.margin = "0rem 1rem 1rem";

    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(<ChatWidget apiUrl={apiUrl} />);
  },
};
