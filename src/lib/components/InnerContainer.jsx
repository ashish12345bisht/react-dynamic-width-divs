import React from 'react'

const InnerContainer = ({mainInnerContainerStyles, item, total}) => {
    let width = `${(item / total) * 100}%`
  return (
    <div style={{ ...mainInnerContainerStyles, width}}>{item}</div>
  )
}

export default InnerContainer