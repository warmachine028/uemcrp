import { styled } from '@mui/material/styles';

const PREFIX = 'Navbar';
export const classes = {
	root: `${PREFIX}-root`,
	appbar: `${PREFIX}-appbar`,
	brand: `${PREFIX}-brand`,
	icon: `${PREFIX}-icon`,
	logo: `${PREFIX}-logo`,
	logo2: `${PREFIX}-logo2`,
	logout: `${PREFIX}-logout`,
};

export const Root = styled('div')(({ theme, logoutVisible }) => ({
	[`&.${classes.root}`]: {},
	[`& .${classes.appbar}`]: {
		position: 'inherit',
		backgroundColor: 'white',
		alignItems: 'center',
		margin: 'auto',
		minHeight: 140,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},

	[`& .${classes.brand}`]: {
		textDecoration: 'none',
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
	},
	[`& .${classes.icon}`]: {
		width: 100,
		objectFit: 'contain',
	},
	[`& .${classes.logo}`]: {
		color: '#393464',
		fontWeight: 700,
		fontSize: 'x-large',
		marginLeft: 10,
	},
	[`& .${classes.logout}`]: {
		display: logoutVisible,
		backgroundColor: 'black',
		color: 'white',
	},
	[`& .${classes.logout}:hover`]: {
		backgroundColor: 'grey',
	},
	[`& .${classes.logo2}`]: {
		color: '#393464',
		fontWeight: 700,
		fontSize: 'x-large',

		display: 'none',
	},
	[theme.breakpoints.down('1066')]: {
		[`& .${classes.appbar}`]: {
			flexDirection: 'column',
			minHeight: 170,
		},
		[`& .${classes.brand}`]: {
			flexDirection: 'column',
		},
		[`& .${classes.logo2}`]: {
			display: 'flex',
		},

		[`& .${classes.logo}`]: {
			display: 'none',
		},
	},
	[theme.breakpoints.down('780')]: {
		[`& .${classes.appbar}`]: {
			width: 850,
		},
	},
}));
