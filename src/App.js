import React from 'react';
import { 
  ChatEngine, 
  ChatList, ChatCard, NewChatForm,
  ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
  ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
 } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
// import  ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height="100vh"
      projectID="b2e8347c-b7f6-4f49-aad9-ecffb335cbbf"
      // userName="Prono96"
      // userSecret="6534" 
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}  
      // renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
      renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
      renderChatFeed={ (chatAppProps) => <ChatFeed  {...chatAppProps}/>}  
    />
  );
}

export default App; 