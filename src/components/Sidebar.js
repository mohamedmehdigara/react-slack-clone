import React from "react";

const Sidebar = () => {
  // Example channels and direct messages data
  const channels = [
    { id: 1, name: "General" },
    { id: 2, name: "Random" },
    // Add more channels here
  ];

  const directMessages = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more direct messages here
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* Add header content */}
      </div>
      <div className="sidebar__channels">
        <h2>Channels</h2>
        <ul>
          {channels.map((channel) => (
            <li key={channel.id}>{channel.name}</li>
          ))}
        </ul>
      </div>
      <div className="sidebar__direct-messages">
        <h2>Direct Messages</h2>
        <ul>
          {directMessages.map((message) => (
            <li key={message.id}>{message.name}</li>
          ))}
        </ul>
      </div>
      {/* Add more sidebar content */}
    </div>
  );
};

export default Sidebar;
