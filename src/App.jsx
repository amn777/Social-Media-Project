

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import Createpost from './components/Createpost.jsx';
import Postlist from './components/Postlist.jsx';
import { useState } from 'react';
import PostListProvider from "./store/post-list-store";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  
  return (
    <PostListProvider>
    <div className="App-container">
   <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} > </Sidebar> 
   <div className="content">
    <Header> </Header>
    {selectedTab === "Home" ? <Postlist></Postlist > : <Createpost></Createpost>}
  
   
    <Footer> </Footer>
    </div>
    </div>
    </PostListProvider>
    
   

    
  )
  
}
export default App; 
