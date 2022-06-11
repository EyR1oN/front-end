import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const [msg, setMsg] = useState("");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const userId = JSON.parse(window.localStorage.getItem("userData"))?.idUser;

  const sendMessage = (ms) => {
    ms.preventDefault();
    console.log(msg);
    setMsg("");
    alert("Successfully sent.");
  };
  return (
    <div className="welcome-text">
      <h1>Try on your own</h1>
      <Link to="/service">Service</Link>
      {!isShown && (
        <button className="open-button" onClick={handleClick}>
          Chat
        </button>
      )}
      {isShown && userId && (
        <div className="chat-popup" id="myForm">
          <form className="form-container">
            <label for="msg" className="white">
              <b>Need help? Write your question here.</b>
            </label>
            <textarea
              placeholder="Type message.."
              value={msg}
              name="msg"
              required
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button type="submit" class="btn" onClick={sendMessage}>
              Send
            </button>
            <button type="button" class="btn cancel" onClick={handleClick}>
              Close
            </button>
          </form>
        </div>
      )}
      {isShown && !userId && (
        <div className="chat-popup" id="myForm">
          <form className="form-container">
            <h2 className="white">Please log in to use chat.</h2>
            <button type="button" className="btn cancel" onClick={handleClick}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
