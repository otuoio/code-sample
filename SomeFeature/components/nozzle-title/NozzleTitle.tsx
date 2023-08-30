import React from "react";

import IconChevronLeft from "../../../../icons/IconChevronLeft";
import {StyledBox, StyledTypograhy} from "../../../../style/Styles";
import {useNozzleTitle} from "./useNozzleTitle";
import {NozzleTitleProps} from "./interfaces";

const NozzleTitle = ({props, params}: NozzleTitleProps) => {

    const {alarm, text} = props;
    const {handleBack} = useNozzleTitle();

    return (
        <StyledBox onClick={() => handleBack(params)} style={{ backgroundColor: alarm ? "#fd230d" : "#FFFFFF", cursor:"pointer"}}>
            <IconChevronLeft/>
            <StyledTypograhy style={{fontSize: "16px", color: alarm ? "#FFFFFF" : "#000000"}}>{text}</StyledTypograhy>
        </StyledBox>
    )
}

export { NozzleTitle };