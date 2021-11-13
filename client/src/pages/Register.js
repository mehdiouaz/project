import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {register} from '../redux/actions/userActions';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const dispatch=useDispatch()
  const history= useHistory()

  const [input, setinput] = useState ({
    email:"",
    password:"",
    fullname:"",
  });
  const handleChange = (e) =>{
    setinput(
      {...input , [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    dispatch(register(input , history));
  };
  
  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{
          fontStyle: "italic",
          fontVariant: "small-caps",
          }}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                }}/>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                }}
            />
                        <TextField
              margin="normal"
              required
              fullWidth
              name="fullname"
              label="Full Name"
              type="fullname"
              id="fullname"
              autoComplete="current-password"
              onChange={handleChange}
              style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" 
              />}
              label="Remember me"
              style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                }}/>
            <Button 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              style={{
                fontStyle: "italic",
                fontVariant: "small-caps",
                }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"
                style={{
                  fontStyle: "italic",
                  fontVariant: "small-caps",
                  }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2"
                style={{
                  fontStyle: "italic",
                  fontVariant: "small-caps",
                  }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}