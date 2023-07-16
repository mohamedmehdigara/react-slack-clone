import React, { useState } from "react";

const ChannelMessages = () => {
  // Example channel messages data
  const channelMessages = [
    { id: 1, sender: "John Doe", message: "Hello everyone!" },
    { id: 2, sender: "Jane Smith", message: "Hey, how are you?" },
    // Add more channel messages here
  ];

  const [newMessage, setNewMessage] = useState("");

  const handleMessageSend = () => {
    // Add logic to handle sending the message
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="channel-messages">
      <h2>Channel Name</h2>
      <div className="message-list">
        {channelMessages.map((message) => (
          <div className="message" key={message.id}>
            <div className="message__sender">{message.sender}</div>
            <div className="message__content">{message.message}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChannelMessages;
