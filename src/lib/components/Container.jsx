import React from 'react'
import InnerContainer from './InnerContainer';
import LabelContainer from './LabelContainer';

const tempTotal = 1000;
const items = [100, 200, 300, 400]
const Container = ({ total = 1000, items = [100, 200, 300, 400], containerStyles = {}, innerContainerStyles = {}, labelLinesVisible = true, labelLinesContainer={}, innerLabelLinesContainer={}, hrStyles={}, labelStyles={} }) => {
    const mainContainerStyles = { width: '100%', display: "flex", border: "1px solid black", marginBottom:"10px", ...containerStyles }
    const mainInnerContainerStyles = { border: "1px solid black", display:"flex", justifyContent:"center", ...innerContainerStyles }
    const mainLabelLinesContainer = {width: '100%', display: "flex",...labelLinesContainer }
    const mainInnerLabelLinesContainer = {display: "flex", justifyContent:"space-between", borderLeft: "2px solid black", borderRight: "1px solid black", ...innerLabelLinesContainer}
    const mainHrStyles = {width: "100%", border:"1px solid #333", ...hrStyles};
    const mainLabelStyles = {padding:"0px 2px", ...labelStyles}
    return (
        <>
            <div style={mainContainerStyles}>
                {items?.map((item, index) => (
                    <InnerContainer key={index} item={item} total={total} mainInnerContainerStyles={mainInnerContainerStyles}  />
                ))}
            </div>
            {labelLinesVisible && <LabelContainer items={items} total={total} mainLabelLinesContainer={mainLabelLinesContainer} mainInnerLabelLinesContainer={mainInnerLabelLinesContainer} mainHrStyles={mainHrStyles} mainLabelStyles={mainLabelStyles}  />}
        </>

    )
}

export default Container