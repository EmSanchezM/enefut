import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/backgrounds/login-bg.svg'; 
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';

const Login = () => (
  <PageContainer title="Login" description="this is Login page">
    <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) => `${theme.palette.mode === 'dark' ? '#1c1f25' : '#ffffff'}`,
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: 'relative',
                lg: 'absolute',
              },
              height: { xs: 'auto', lg: '100vh' },
              right: { xs: 'auto', lg: '-50px' },
              margin: '0 auto',
            }}
          >
            <img
              src={img1}
              alt="bg"
              style={{
                width: '100%',
                maxWidth: '812px',
              }}
            />
          </Box>

          <Box
            sx={{
              p: 4,
              position: 'absolute',
              top: '0',
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography fontWeight="700" variant="h2">
                Bienvenido a ENEFUT
              </Typography>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <CustomFormLabel htmlFor="email">Correo Electronico</CustomFormLabel>
                <CustomTextField id="email" variant="outlined" fullWidth />
                
                <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                <CustomTextField
                  id="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 3,
                  }}
                />
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                  }}
                >
                  Iniciar Sesion
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Login;
