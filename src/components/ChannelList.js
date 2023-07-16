import React from "react";

const ChannelList = () => {
  // Example channel data
  const channels = [
    { id: 1, name: "General" },
    { id: 2, name: "Random" },
    // Add more channels here
  ];

  // Example active channel ID
  const activeChannelId = 1;

  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li
            key={channel.id}
            className={channel.id === activeChannelId ? "active" : ""}
          >
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
