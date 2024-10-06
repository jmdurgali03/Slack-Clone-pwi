import React from 'react'
import { Route, Routes } from 'react-router-dom';
import WorkspaceScreen from './screen/WorkspaceScreen';
import CreateWorkpaceScreen from './screen/CreateWorkpaceScreen';
import Workspaces from './screen/Workspace';

function App() {

  return (

    <>
      <Routes>
        {/* Workspace */}
        <Route path='/' element={<WorkspaceScreen />} />
        {/* Formulario para crear workspace */}
        <Route path='/new' element={<CreateWorkpaceScreen />} />
        {/* Entornos de trabajo */}
        <Route path='/workspace/:workspace_id' element={<Workspaces />} />
      </Routes>

    </>
  )
}

export default App;
