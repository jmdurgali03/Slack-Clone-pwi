import {v4 as uuidv4} from 'uuid'

const workspaces_estado_inicial = [
    {
        id: 1,
        name: 'Workspace 1',
        description: 'Workspace 1 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Workspace 2',
        description: 'Workspace 2 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    }
]

const obtenerWorkspaces = () => {
    let workspaces = localStorage.getItem('workspaces')
    // Si hay workspaces los transformo a JSON
    if (workspaces){
        return JSON.parse(workspaces)
    }
    // devuelvo un array vacio
    else{
        // Guardo en lS el valor inicial de mis workspaces
        localStorage.setItem('workspaces', JSON.stringify(workspaces_estado_inicial))
        return workspaces_estado_inicial
    }
}

const crearWorkspace = (newWorkspace) => {
    newWorkspace.id = uuidv4()
    // genero un id
    let workspaces = obtenerWorkspaces()
    workspaces.push(newWorkspace)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}

export {obtenerWorkspaces, crearWorkspace}