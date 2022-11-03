import { styled } from "@mui/material/styles"

const PREFIX = "UpdateInfo"

export const classes = {
    root: `${PREFIX}-root`,
    input: `${PREFIX}-input`,
    submitButton: `${PREFIX}-submitButton`,
}

export const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        margin: 32,
    },
    [`& .${classes.input}`]: {
        paddingBottom: 16,
    },
    [`& .${classes.submitButton}`]: {
        margin: "10px 0",
        color: "white",
        backgroundColor: "#393464",
        "&:hover": { backgroundColor: "#564f95" },
    },
}))
