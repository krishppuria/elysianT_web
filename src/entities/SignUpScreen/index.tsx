import { useState } from 'react';
import {
    Container,
    Grid,
    Box,
    TextField,
    Button,
    Typography,
    IconButton,
    Paper,
    InputAdornment,
    Divider
} from '@mui/material';
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

import Logo from '../../assets/svg/logo.svg';
import Signup from '../../assets/svg/signup.svg';
import ButtonFacebook from '../../assets/svg/ButtonFacebook.svg';
import ButtonGoogle from '../../assets/svg/ButtonGoogle.svg';
import { CONSTANTS } from '../../constants';
import { useForm } from "../../hooks/useForm";
import { signupValidation } from '../../helper/validation';
import { signUpData } from '../../constants/data'
import styles from "./styles";

const SignUpScreen = (props: { handleSignup: any; isLoading: any; }) => {
    const {handleSignup, isLoading} = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);
    // Business logic and api implementation for signup:
    const onSubmitForm = async () => {
        handleSignup(firstName?.value, lastName?.value, email?.value, password?.value);
    }

    const { state, handleChange, handleSubmit, disable } = useForm(
        signUpData,
        signupValidation,
        onSubmitForm,
    );
    const { firstName, lastName, email, password } = state;

    return (
        <Box sx={styles.main}>
            <Container>
                <Paper sx={styles.paper}>
                    <Grid container sx={styles.gridContainer}>

                        {/* Left Side Container */}
                        <Grid item xs={12} md={8}>
                            <Box sx={styles.logoImgContainer}>
                                <img src={Logo} alt="Illustration" style={styles.logoImg} />
                            </Box>
                            <Box sx={styles.boxContainer}>
                                <Box sx={styles.circleContainer}>
                                    <Box sx={styles.illustrationContainer}>
                                        <img src={Signup} alt="Logo" style={styles.illustrationImg} />
                                    </Box>
                                </Box>
                                <Typography variant="h4" sx={styles.welcomeText}>
                                    {CONSTANTS.WELCOME_TEXT}
                                </Typography>
                                <Typography variant="h1" sx={styles.clickText}>
                                    {CONSTANTS.START_TEXT}
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Right Side Container */}
                        <Grid item xs={12} md={4} style={styles.rightContainer}>
                            <Box sx={styles.rightMainContainer}>
                                <Typography variant="h3">
                                    {CONSTANTS.SIGNUP}
                                </Typography>
                                <TextField
                                    placeholder={CONSTANTS.FIRST_NAME}
                                    name="firstName"
                                    margin="normal"
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!firstName?.error}
                                    helperText={firstName?.error}
                                />
                                <TextField
                                    placeholder={CONSTANTS.LAST_NAME}
                                    name="lastName"
                                    margin="normal"
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!lastName?.error}
                                    helperText={lastName?.error}
                                />
                                <TextField
                                    placeholder={CONSTANTS.EMAIL}
                                    name="email"
                                    margin="normal"
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!email?.error}
                                    helperText={email?.error}
                                />
                                <TextField
                                    placeholder={CONSTANTS.PASSWORD}
                                    name="password"
                                    margin="normal"
                                    onChange={handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ),
                                    }}
                                    error={!!password?.error}
                                    helperText={password?.error}
                                />
                                <Box sx={styles.forgotContainer}>
                                    <Typography variant="h2" sx={styles.forgotText}>
                                        {CONSTANTS.FORGOT_PASSWORD}
                                    </Typography>
                                </Box>
                                <LoadingButton
                                    loading={isLoading}
                                    onClick={handleSubmit}
                                    disabled={disable}
                                    variant="contained"
                                    fullWidth
                                >
                                    {CONSTANTS.SIGNUP}
                                </LoadingButton>

                                <Box sx={styles.dividerContainer}>
                                    <Divider sx={styles.dividerSubContainer} />
                                    <Typography variant="h1" sx={styles.orText}>
                                        {CONSTANTS.OR_TEXT}
                                    </Typography>
                                    <Divider sx={styles.dividerSubContainer} />
                                </Box>

                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <img src={ButtonGoogle} alt="google" style={styles.socialImg} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={ButtonFacebook} alt="facebook" style={styles.socialImg} />
                                    </Grid>
                                </Grid>

                                <Typography variant="h1" sx={styles.alreadyAccountText}>
                                    {CONSTANTS.ALREADY_ACCOUNT}
                                </Typography>

                                <Button variant="outlined" fullWidth>
                                    {CONSTANTS.LOGIN}
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default SignUpScreen;
