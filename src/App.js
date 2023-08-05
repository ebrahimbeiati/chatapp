import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import { ChatEngine } from "react-chat-engine";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    !!localStorage.getItem("username")
  );

  if (!userLoggedIn) return <LoginForm setUserLoggedIn={setUserLoggedIn} />;

  // Retrieve projectId and userSecret from process.env or .env file
  const projectId = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;
  const userSecret = process.env.REACT_APP_CHAT_ENGINE_USER_SECRET;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectId}
        userName="Ebrahim"
        userSecret={userSecret}
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
