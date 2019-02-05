import React from 'react'

export const spacings = {
  normal: {
    padding: '1em',
    left: {
      width: '40em',
    },
    right: {
      width: '40em',
    },
  },
  compact: {
    padding: '0.618em',
    left: {
      width: '30em',
    },
    right: {
      width: '30em',
    },
  },
}

export const defaultSpacingContext = spacings.normal

export const SpacingContext = React.createContext(
  defaultSpacingContext // default
)
