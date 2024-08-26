import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HomePage() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const Sidebar = () => (
        <Sheet
            sx={{
                width: {
                    xs: '100%',
                    sm: 240,
                },
                height: '100%',
                p: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Typography level="h5">Sidebar</Typography>
                <IconButton
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ display: { sm: 'none' } }}
                    onClick={toggleDrawer}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                <ListItem>
                    <ListItemButton>Menu Item 1</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Menu Item 2</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Menu Item 3</ListItemButton>
                </ListItem>
            </List>
        </Sheet>
    );

    return (
        <CssVarsProvider>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                {/* Sidebar for larger screens */}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                        },
                        flexShrink: 0,
                    }}
                >
                    <Sidebar />
                </Box>

                {/* Drawer for mobile */}
                {drawerOpen && (
                    <Box
                        sx={{
                            position: 'fixed',
                            zIndex: 1200,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Box
                            role="presentation"
                            onClick={toggleDrawer}
                            sx={{
                                position: 'fixed',
                                inset: 0,
                                bgcolor: (theme) => `rgba(${theme.vars.palette.neutral.darkChannel} / 0.5)`,
                            }}
                        />
                        <Sidebar />
                    </Box>
                )}

                {/* Main content */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Navbar */}
                    <Sheet
                        sx={{
                            px: 2,
                            py: 1,
                            display: 'flex',
                            alignItems: 'center',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <IconButton
                            variant="outlined"
                            color="neutral"
                            size="sm"
                            onClick={toggleDrawer}
                            sx={{ display: { sm: 'none' }, mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography level="h4" component="h1" sx={{ flexGrow: 1 }}>
                            My App
                        </Typography>
                        <IconButton
                            variant="outlined"
                            color="neutral"
                        >
                        </IconButton>
                    </Sheet>

                    {/* Content */}
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Typography level="h2">Content</Typography>
                        <Typography>
                            ส่วนนี้เป็นพื้นที่สำหรับเนื้อหาหลักของแอปพลิเคชัน
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

export default HomePage;