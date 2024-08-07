import { createTheme } from '@mui/material/styles';

import { COLORS } from '../../src/constants/colors';

const theme = createTheme({
    palette: {
        primary: {
            dark: COLORS.BLUE_COLOR,
            main: COLORS.BLUE_COLOR,
        },
        secondary: {
            main: COLORS.GRAY_COLOR,
            light: COLORS.GRAY_COLOR,
            dark: COLORS.BLUE_COLOR,
        },
        background: {
            paper: COLORS.BLUE_COLOR,
            default: COLORS.BLUE_COLOR,
        },
    },
    typography: {
        fontFamily: ['Lato'].join(','),
        h1: {
            fontSize: 14,
            fontWeight: 400,
            '@media (max-width:900px)': {
                fontSize: 12,
            },
        },
        h2: {
            fontSize: 14,
            color: '#3949AB',
            fontWeight: 600,
            '@media (max-width:900px)': {
                fontSize: 14,
            },
        },
        h3: {
            fontSize: 20,
            color: '#3949AB',
            fontWeight: 600,
            '@media (max-width:900px)': {
                fontSize: 18,
            },
        },
        h4: {
            fontSize: 24,
            color: 'white',
            fontWeight: 600,
            '@media (max-width:900px)': {
                fontSize: 22,
            },
        },
    },
    components: {
        MuiTextField: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        '& .MuiOutlinedInput-root': {
                            height: 40,
                        }
                    }
                }
            ]
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    outline: 'none !important',
                },
            },
            variants: [
                {
                    props: {},
                    style: {
                        textTransform: 'none',
                        borderRadius: 40,
                        height: 40,
                    },
                },
            ],
        },
    }
});

export default theme;
