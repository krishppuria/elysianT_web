import { COLORS } from '../../constants/colors';

const styles = {
    main: {
        backgroundColor: COLORS.LIGHT_BLUE_COLOR,
        py: { xs: 4, sm: 4, md: 6, lg: 0 },
        height: { xs: "auto", sm: "auto", md: "100vh" },
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    paper: {
        borderRadius: 5,
        overflow: "hidden",
        boxShadow: "none",
    },
    gridContainer: {
        alignItems: "center",
    },
    circleContainer: {
        backgroundColor: COLORS.DARK_BLUE_COLOR,
        borderRadius: '50%',
        width: 278,
        height: 278,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    illustrationContainer: {
        position: 'absolute',
        width: 'max-content',
        height: 'auto',
    },
    illustrationImg: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    logoImg: {
        width: 50,
        height: 50,
        marginLeft: 25,
    },
    logoImgContainer: {
        position: 'absolute',
        top: 60
    },
    socialImg: {
        width: '97%',
        height: 40,
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: 4,
    },
    clickText: {
        color: COLORS.WHITE,
        marginBottom: 5,
    },
    rightContainer: {
        backgroundColor: COLORS.WHITE
    },
    rightMainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
    },
    forgotContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    forgotText: {
        marginTop: 1,
        marginBottom: 3,
    },
    alreadyAccountText: {
        color: COLORS.GRAY_COLOR,
        marginTop: 1,
        marginBottom: 2,
    },
    dividerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        marginBottom: 2,
    },
    dividerSubContainer: {
        backgroundColor: COLORS.LIGHT_BLUE_COLOR,
        width: 90,
        height: 1
    },
    orText: {
        color: COLORS.GRAY_COLOR,
        marginLeft: 1,
        marginRight: 1,
    }
}

export default styles