import React from 'react'

const InnerLabelContainer = ({item, total, mainInnerLabelLinesContainer, mainHrStyles, mainLabelStyles}) => {
    const width = `${(item / total) * 100}%`;
    return (
        <div style={{ width, ...mainInnerLabelLinesContainer }}>
            <hr style={mainHrStyles} />
            <span style={mainLabelStyles}>
                {item}
            </span>
            <hr style={mainHrStyles} />
        </div>
    )
}

export default InnerLabelContainer