import React from 'react'

export const shadows = {
  normal: {
    boxShadow: '1px 1px 3px rgba(50, 50, 50, 0.75)',
  },
}

export const defaultShadowContext = shadows.normal

export const ShadowContext = React.createContext(
  defaultShadowContext // default
)
