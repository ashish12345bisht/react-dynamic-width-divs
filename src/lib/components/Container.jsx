import React from 'react'

const Container = () => {
    const total = 1000;
    const items = [100, 200, 300, 400]
    const containerStyles = { width: '100%', display: "flex", border: "1px solid black" }
    const innerContainerStyles = { border: "1px solid black" }
    return (
        <div style={containerStyles}>
            {items?.map(item => (
                <div style={{ ...innerContainerStyles, width: `${(item / total) * 100}%` }}>{item}</div>
            ))}
        </div>
    )
}

export default Container