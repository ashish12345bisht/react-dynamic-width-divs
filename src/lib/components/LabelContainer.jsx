import React from 'react'
import InnerLabelContainer from './InnerLabelContainer'

const LabelContainer = ({items=[], total, mainInnerLabelLinesContainer, mainHrStyles, mainLabelStyles, mainLabelLinesContainer}) => {
    return (
        <div style={mainLabelLinesContainer}>
            {items?.map((item, index) => (
                <InnerLabelContainer key={index} item={item} total={total} mainInnerLabelLinesContainer={mainInnerLabelLinesContainer} mainHrStyles={mainHrStyles} mainLabelStyles={mainLabelStyles} mainLabelLinesContainer={mainLabelLinesContainer} />
            ))}
        </div>
    )
}

export default LabelContainer