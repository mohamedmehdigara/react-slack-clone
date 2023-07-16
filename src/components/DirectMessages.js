import React from "react";

const DirectMessages = () => {
  // Example direct messages data
  const directMessages = [
    { id: 1, sender: "John Doe", message: "Hello!" },
    { id: 2, sender: "Jane Smith", message: "Hi, how's it going?" },
    // Add more direct messages here
  ];

  return (
    <div className="direct-messages">
      <h2>Direct Messages</h2>
      <div className="message-list">
        {directMessages.map((message) => (
          <div className="message" key={message.id}>
            <div className="message__sender">{message.sender}</div>
            <div className="message__content">{message.message}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        {/* Add message input field and send button here */}
      </div>
    </div>
  );
};

export default DirectMessages;
