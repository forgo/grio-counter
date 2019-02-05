import React from 'react'

export const colors = {
  light: {
    foreground: '#222222',
    background: '#F9F9F9',
    left: {
      foreground: 'green',
      background: '#EEE',
    },
    right: {
      foreground: 'black',
      background: 'yellow',
    },
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    left: {
      foreground: 'white',
      background: 'black',
    },
    right: {
      foreground: 'orange',
      background: 'brown',
    },
  },
}

export const defaultColorContext = colors.dark

export const ColorContext = React.createContext(defaultColorContext)
