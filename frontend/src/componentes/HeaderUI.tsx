import React from 'react';
import logo from "../imagens/probleminha.jpg";
import usuario from '../imagens/usuario.png';
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuUI from './MenuUI';
import Avatar from '@mui/material/Avatar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: '100%',
    maxWidth: 500,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 445,
    },
  },
}));

export default function HeaderUI() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="abre o menu"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <MenuUI anchor='left'/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2 }}
          >
            <Link to={"/"} style={{display: 'flex', alignItems: 'center'}}>
              <img src={logo} alt="eRifaTec" style={styles.logo}/>
              <Typography sx={{display: { xs: 'none', md: 'block' }}}>eRifaTec</Typography>
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'pesquisar' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="notificações"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="notificações"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="usuário atual"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{width: 32, height: 32}} src={usuario} alt="usuario" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="abre o menu"
            >
              <MenuUI anchor='right'/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

const styles = {
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 6
  },

}

/*
import React from 'react'
import "../estilos/header.css";
import logo from "../imagens/probleminha.jpg"
import MenuUI from './MenuUI';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link, useNavigate } from 'react-router-dom'

export default function HeaderUI() {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login")
  }

  return (
    <header>
      <AppBar>

      </AppBar>
      <Grid container spacing={2} sx={{
        bgcolor: '#212121'
      }}>
        <Grid xs={1}>
          <MenuUI />
        </Grid>
        <Grid xs={2}>
          <Box>
            <h1>
              <img src={logo} alt="Logo" />
              <Link to={"/"}>eRifaTec</Link>
            </h1>
          </Box>
        </Grid>
        <Grid xs={6}>
          <nav className="navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/ajuda'}>Ajuda</Link>
            <Link to={'/contatos'}>Contato</Link>
            <button className="btnLogin" onClick={loginPage}>Entrar</button>
          </nav>
        </Grid>
      </Grid>


    </header>
  );
}
*/