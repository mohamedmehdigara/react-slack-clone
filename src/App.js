import React from "react";
import Sidebar from "./components/Sidebar";
import ChannelList from "./components/ChannelList";
import ChannelMessages from "./components/ChannelMessages";
import DirectMessages from "./components/DirectMessages";
import FileSharing from "./components/FileSharing";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Sidebar />
        <Routes>
          <Route path="/channel/:channelId" element={<ChannelList />}/>
            <Route path="/channelmessages" element={<ChannelMessages />}/>
            
          
          <Route path="/directmessage/:userId" element={<DirectMessages />}/>
            
              
            
          
          <Route path="/filesharing" element={<FileSharing />}/>
            
              
            
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
