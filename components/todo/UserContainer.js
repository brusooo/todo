//  transition: background-color 0.2s ease;

import React from 'react'

const UserContainer = ({prop1 , children}) => {
  return (
    <div className="relative w-full h-[92%] overflow-y-scroll bg-white" ref={prop1}>{children}</div>
  )
}

export default UserContainer
