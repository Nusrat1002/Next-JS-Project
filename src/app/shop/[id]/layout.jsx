import React from 'react'
import { AuthProvider } from "@/providers/AuthProvider"

const layout = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default layout