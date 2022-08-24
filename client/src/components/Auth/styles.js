import { styled } from "@mui/material/styles"

const PREFIX = "Auth"
export const classes = {
	root: `${PREFIX}-root`,
	paper: `${PREFIX}-paper`,
	avatar: `${PREFIX}-avatar`,
	form: `${PREFIX}-form`,
	captchaImg: `${PREFIX}-captchaImg`,
	submit: `${PREFIX}-submit`,
}

export const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        "& .MuiButtonBase-root": {
            color: "black",
        },
    },
    [`& .${classes.paper}`]: {
        marginTop: 100, //
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        padding: "20px 0",
    },
    [`& .${classes.avatar}`]: {
        marginBottom: 10,
        backgroundColor: "#393464",
    },
    [`& .${classes.form}`]: {
        width: 360,
    },
    [`& .${classes.captchaImg}`]: {
        paddingTop: 3,
        width: "100%",
        height: 50,
        objectFit: "cover",
        borderRadius: 5,
        objectPosition: "0 -37px",
    },
    [`& .${classes.submit}`]: {
        margin: "10px 0",
        backgroundColor: "#393464",
    },
    [theme.breakpoints.down(400)]: {
        [`& .${classes.form}`]: {
            width: 320
        }
    },
    [theme.breakpoints.down(370)]: {
        [`& .${classes.form}`]: {
            width: 300
        }
    }

}))
