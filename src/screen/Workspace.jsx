import React from "react";
import { obtenerWorkspaces } from "../data";
import { Link } from "react-router-dom";

const Workspaces = () => {

    const workspaces = obtenerWorkspaces()

    return (
        <div>
            <h1>Entornos de trabajo</h1>
            {
                workspaces.map((workspace) => {
                    return (
                        <div key={workspace.id}>
                            <h3>{workspace.name}</h3>
                            <Link>Entrar</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Workspaces