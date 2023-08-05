import { ChatEngine, ChatFeed } from "react-chat-engine";
import React from "react";
import axios from 'axios'; // Optional: If you're not using axios, you can remove this line.
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="a0566ef8-2b24-43f5-9551-ac72ce27dd25"
        userName="Ebrahim"
        userSecret="Ebrahim1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")
        }
      />

      <div className="footer">
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
