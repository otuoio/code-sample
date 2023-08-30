import {Box, styled, Typography} from "@material-ui/core";

const StyledBox = styled(Box)(() => ({
    borderRadius: "10px",
    background: "#FFFFFF",
    padding: "20px",
    boxShadow: "0 12px 12px rgba(145, 158, 171, 0.24), 0 1px 2px rgba(145, 158, 171, 0.16)",
    display: "flex",
    alignItems:"center"
}));

const StyledTypograhy = styled(Typography)(() => ({
    fontFamily: "Merriweather",
    fontWeight: 700,
}));

export { StyledBox, StyledTypograhy };