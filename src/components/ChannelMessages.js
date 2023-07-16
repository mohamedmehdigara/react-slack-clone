import React from "react";

const ChannelMessages = () => {
  // Example channel messages data
  const channelMessages = [
    { id: 1, sender: "John Doe", message: "Hello everyone!" },
    { id: 2, sender: "Jane Smith", message: "Hey, how are you?" },
    // Add more channel messages here
  ];

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
        {/* Add message input field and send button here */}
      </div>
    </div>
  );
};

export default ChannelMessages;
