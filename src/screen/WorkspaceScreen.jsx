import React from 'react'
import ChannelList from '../components/channelList/ChannelList';
import ChatList from '../components/chatList/ChatList';
import { useParams } from 'react-router-dom';
import { obtenerWorkspacesPorId } from '../data';

const WorkspaceScreen = () => {

    const { workspace_id } = useParams()
    const workspace = obtenerWorkspacesPorId(workspace_id)

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
            <h1>{workspace.name}</h1>
            <ChannelList canales={workspace.channels} titulo={'Canales'} />
        </>
    )
}

export default WorkspaceScreen;