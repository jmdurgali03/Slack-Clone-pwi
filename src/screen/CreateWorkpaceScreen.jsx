import React, { useState } from 'react'
import { crearWorkspace, obtenerWorkspaces } from '../data'

const CreateWorkpaceScreen = () => {

    const [error, setError] = useState({ text: '', isError: false })

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)

        const workspace = form.get('workspace')
        const channel = form.get('channel')

        const newWorkspace = {
            name: workspace,
            channel: [
                {
                    name: channel
                }
            ]
        }

        // localStorage almacena strings y retorna strings
        /* localStorage.setItem('workspaces', JSON.stringify(newWorkspace))
        let workspaces = JSON.parse(localStorage.getItem('workspaces')) */

        crearWorkspace(newWorkspace)
        obtenerWorkspaces()
    }

    return (
        <>
            <div>
                <h2>Create Workspace</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="w-space-name">Workspace name: </label>
                    <input type="text" id='w-space-name' placeholder='Eg. Microsoft Team' name='workspace' />
                    {error.isError && <span>{error.text}</span>}

                    <label htmlFor="channel-name">Channel name: </label>
                    <input type="text" id='channel-name' placeholder='Eg. General' name='channel' />
                    {error.isError && <span>{error.text}</span>}

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateWorkpaceScreen