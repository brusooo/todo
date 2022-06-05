import React from 'react'

const Column = ({children}) => {
  return (
    <div className='w-[370px] h-[530px] border-[#333333] border-[10px] flex flex-col relative m-1 mx-3'>{children}</div>
  )
}

export default Column