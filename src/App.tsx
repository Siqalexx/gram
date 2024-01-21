import React from 'react';
import './App.scss';
import { cn } from '@bem-react/classname'
import Menu from './components/Menu/Menu';
import Contacts from './components/Contacts/Contacts';
import Chat from './components/Chat/Chat';

function App() {
  const appClass = cn('App');
  return (
    <div className={appClass()}>
      <Menu></Menu>
      <Contacts></Contacts>
      <Chat></Chat>
    </div>
  );
}

export default App;
