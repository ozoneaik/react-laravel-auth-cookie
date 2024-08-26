import * as React from 'react';
import {useState} from 'react';
import {CssVarsProvider, useColorScheme} from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import ChatIcon from '@mui/icons-material/Chat';
import {LoginApi} from "../Api/Auth.js";
import {useAuth} from "../Contexts/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import {CircularProgress} from "@mui/joy";
import {AlertWithConfirm} from "../Dialogs/Alert.js";


function ColorSchemeToggle(props) {
    // eslint-disable-next-line react/prop-types
    const {onClick, ...other} = props;
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <IconButton
            aria-label="toggle light/dark mode"
            size="sm"
            variant="outlined"
            disabled={!mounted}
            onClick={(event) => {
                setMode(mode === 'light' ? 'dark' : 'light');
                onClick?.(event);
            }}
            {...other}
        >
            {mode === 'light' ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
        </IconButton>
    );
}

export default function JoySignInSideTemplate() {
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('1111d');
    const [loading, setLoading] = useState(false);
    const {csrfToken, setUser} = useAuth();


    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        await csrfToken();
        const {data, status} = await LoginApi(email, password);
        console.log(data, status)
        if (status === 200) {
            setUser(data.user);
            return <Navigate to="/profile"/>;
        } else {
            AlertWithConfirm({text: data.message})
        }
        setLoading(false);
    }
    return (
        <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
            <CssBaseline/>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s',
                    },
                }}
            />
            <Box
                sx={(theme) => ({
                    width: {xs: '100%', md: '50vw'}, transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)', position: 'relative', zIndex: 1,
                    display: 'flex', justifyContent: 'flex-end', backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255 255 255 / 0.2)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    },
                })}
            >
                <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100dvh', width: '100%', px: 2,}}>
                    <Box component="header" sx={{py: 3, display: 'flex', justifyContent: 'space-between',}}>
                        <Box sx={{gap: 2, display: 'flex', alignItems: 'center'}}>
                            <IconButton variant="soft" size="sm" sx={{backgroundColor: '#f15739'}} color='black'>
                                <ChatIcon/>
                            </IconButton>
                            <Typography level="title-lg">PUMPKIN ครบทุกเรื่อง เครื่องมือช่าง</Typography>
                        </Box>
                        <ColorSchemeToggle/>
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto', py: 2, pb: 5, display: 'flex', flexDirection: 'column', mx: 'auto',
                            gap: 2, width: 400, maxWidth: '100%', borderRadius: 'sm',
                            '& form': {display: 'flex', flexDirection: 'column', gap: 2,},
                            [`& .MuiFormLabel-asterisk`]: {visibility: 'hidden',},
                        }}
                    >
                        <Stack gap={4} sx={{mb: 2}}>
                            <Stack gap={1}>
                                <Typography component="h1" level="h3">Call center System
                                    ระบบแชทบริการลูกค้า</Typography>
                            </Stack>
                        </Stack>
                        <Divider
                            sx={(theme) => ({
                                [theme.getColorSchemeSelector('light')]: {color: {xs: '#FFF', md: 'text.tertiary'},},
                            })}
                        >
                        </Divider>
                        <Stack gap={4} sx={{mt: 2}}>
                            <form onSubmit={onSubmit} method={'POST'}>
                                <FormControl required>
                                    <FormLabel>員工編號 (Emp Code,รหัสพนักงาน)</FormLabel>
                                    <Input defaultValue={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                           name="email"/>
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>密码 (Password,รหัสผ่าน)</FormLabel>
                                    <Input defaultValue={password} onChange={(e) => setPassword(e.target.value)}
                                           type="password" name="password"/>
                                </FormControl>
                                <Stack gap={4} sx={{mt: 2}}>
                                    <Button
                                        sx={{backgroundColor: '#f15739', '&:hover': {backgroundColor: 'darkorange'}}}
                                        disabled={loading} type="submit" fullWidth>
                                        {!loading ? <span>登入 (Login,เข้าสู่ระบบ)</span> : <CircularProgress/>}
                                    </Button>
                                </Stack>

                            </form>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{py: 3}}>
                        <Typography level="body-xs" textAlign="center">
                            © Pumpkin Corporation Company Limited | Bangkok {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    height: '100%', position: 'fixed', right: 0, top: 0, bottom: 0, left: {xs: 0, md: '50vw'},
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: 'background.level1', backgroundSize: 'cover', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://www.pumpkintool.com/wp-content/uploads/2017/11/Company-1.png)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage:
                            'url(https://unforgettabletravel.com/wp-content/uploads/2021/07/Asiatique-the-Riverfront-market-Bangkok.jpg)',
                    },
                })}
            />
        </CssVarsProvider>
    );
}
