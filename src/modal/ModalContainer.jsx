import React from 'react'

const ModalContainer = ({ children }) => {
  return (
    <div
        className="overflow-y-hidden h-dvh w-dvw bg-[#999999] fixed top-0 left-0"
      >
        {children}
      </div>
  )
}

export default ModalContainer