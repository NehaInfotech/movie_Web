import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HelpIcon from '@mui/icons-material/Help';

function Profile() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup clicked');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>

  <Button startIcon={<HelpIcon />} sx={{ position: 'absolute', top: 90, right: 10 }}>Help & Support</Button>
      <Grid container spacing={2} sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                {isLogin ? 'Login' : 'Signup'}
              </Typography>
              <form>
                <FormControl sx={{ width: '100%', marginBottom: 2 }}>
                  <InputLabel>Username</InputLabel>
                  <OutlinedInput
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label="Username"
                  />
                </FormControl>
                <FormControl sx={{ width: '100%', marginBottom: 2 }}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                {!isLogin && (
                  <FormControl sx={{ width: '100%', marginBottom: 2 }}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                    {password !== confirmPassword && (
                      <FormHelperText error>Passwords do not match</FormHelperText>
                    )}
                  </FormControl>
                )}
                <Button  variant="contained" onClick={isLogin ? handleLogin : handleSignup}>
                  {isLogin ? 'Login' : 'Signup'}
                </Button>
                <Button variant="text" onClick={handleToggleForm}>
                  {isLogin ? 'Create an account' : 'Already have an account'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;