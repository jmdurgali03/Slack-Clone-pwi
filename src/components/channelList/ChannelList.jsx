import React from 'react'

const ChannelList = ({ canales, titulo }) => {
    return (
        <>
            <h3>{titulo}</h3>
            {
                canales.map((canal) => {
                    return (
                        <ChannelItem
                            key={canal.id}
                            name={canal.name}
                            id={canal.id}
                        />
                    )
                })
            }
        </>
    )
}

const ChannelItem = ({ name }) => {
    return (
        <div>
            <a>{name}</a>
        </div>
    )
}

export default ChannelList
