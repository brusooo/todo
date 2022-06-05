import React from 'react'

const Container = ({children}) => {
  return (
    <div className="relative w-full h-full bg-white p-4 mb-3 top-8 flex overflow-x-auto overflow-y-hidden" >{children}</div>
  )
}

export default Container