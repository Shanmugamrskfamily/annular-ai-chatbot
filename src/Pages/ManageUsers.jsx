import React, { useState } from 'react'
import PendingAprovals from './PendingAprovals'
import ActiveUserData from './ActiveUserData'

function ManageUsers() {
    const [selectedModule,setSelectedModule]=useState('pendingUsers')
    const handleModuleChange=(module)=>{
        setSelectedModule(module);
    }
  return (
    <div className='w-screen h-screen'>
      {selectedModule==='pendingUsers'?(
        <PendingAprovals moduleChanged={handleModuleChange}/>
      ):(
        <ActiveUserData moduleChanged={handleModuleChange}/>
      )}
    </div>
  )
}

export default ManageUsers
