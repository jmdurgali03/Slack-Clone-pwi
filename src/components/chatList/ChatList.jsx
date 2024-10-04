import React, { useState } from 'react'

const ChatList = ({ messages }) => {

    const [error, setError] = useState({ text: '', isError: false })

    const handleSubmitMessage = (event) => {
        // Evento: son datos del evento en particular. (Cuando se hizo, donde, ...)
        // evento.preventDefault() previene el comportamiento por defecto de nuestro evento 
        // osea que el form no actualize la pag al mandarlo
        event.preventDefault()

        // Capturar los valores de mi formulario
        const form = new FormData(event.target)
        const message = form.get('message')

        if (!message) {
            setError({ isError: true, text: 'Write something..' })
        }
        // Si no hay error entonces devuelvo al estado de error a su valor inicial
        else {
            setError({ text: '', isError: false })
            // pushear el mensaje
        }
    }

    return (
        <div>
            <div className='mensajes'>
                {
                    messages.map((message) => {
                        return (
                            <ChatItem
                                key={message.id}
                                /* 
                                author={message.author}
                                text={message.text} 
                                */
                                {...message}
                            // propagacion de props
                            />
                        )
                    })
                }
            </div>
            {/* Form de envio de mensajes */}
            <form onSubmit={handleSubmitMessage}>
                <input placeholder='Write smt...' name='message' />
                {error.isError && <span>{error.text}</span>}
                <button type='submit'>Send msg</button>
            </form>
        </div>
    )
}

const ChatItem = (props) => {
    return (
        <div>
            <div>{props.author} : {props.hour}</div>
            <div>{props.text}</div>
        </div>
    )
}

export default ChatList