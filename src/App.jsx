import React from 'react'
import ChannelList from './components/channelList/ChannelList';
import ChatList from './components/chatList/ChatList';

function App() {

  const messages = [
    {
      hour: '11:06 PM',
      author: 'Pepe suarez',
      text: 'Hola a todos!',
      id: 1
    },
    {
      hour: '11:05 AM',
      author: 'Martina Sanchez',
      text: 'Que tal?',
      id: 2
    },
    {
      hour: '11:17 AM',
      author: 'Juancito',
      text: 'Muy mal, no se nada de HTML para el examen',
      id: 3
    }
  ];

  const canales = [
    {
      id: 1,
      name: 'Consultas'
    },
    {
      id: 2,
      name: 'General'
    },
    {
      id: 3,
      name: 'Tareas'
    }
  ];

  return (

    <>
      <ChannelList canales={canales} titulo={'Canales importantes'} />
      <hr />
      <ChatList messages={messages} />
    </>
  )
}

export default App;
