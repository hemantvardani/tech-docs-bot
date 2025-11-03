import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";
import widgetCss from "./widget.compiled.css";

// Create a style element to inject widget styles into Shadow DOM
function injectStyles(shadowRoot) {
  const style = document.createElement("style");
  style.textContent = widgetCss;
  shadowRoot.appendChild(style);
}

// Main init function
function init({ apiUrl }) {
  const container = document.createElement("div");
  container.id = "chat-widget";
  const shadowRoot = container.attachShadow({ mode: "open" });
  document.body.appendChild(container);

  // ✅ Inject the compiled Tailwind styles inside the shadow root
  injectStyles(shadowRoot);

  const rootDiv = document.createElement("div");
  shadowRoot.appendChild(rootDiv);

  const root = ReactDOM.createRoot(rootDiv);
  root.render(React.createElement(ChatWidget, { apiUrl }));
}

// ✅ Export it as default so esbuild can attach to window.MyChatWidget
export default { init };
