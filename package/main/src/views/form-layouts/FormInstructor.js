import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { LocalizationProvider, DatePicker } from '@mui/lab';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormInstructor = () => {
  
  const [value2, setValue2] = React.useState(new Date());

  return (
    <PageContainer title="Nuevo Instructor" description="Agregar Instructor">
      {/* breadcrumb */}
      <Breadcrumb title="Nuevo Instructor" subtitle="Agregar Instructor" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>No de Identidad</CustomFormLabel>
              <CustomTextField
                id="identidad"
                placeholder="Ingrese el no de identificacion"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Nombre</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Ingrese el nombre del estudiante"
                variant="outlined"
                fullWidth
                size="small"
              /> 
              
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Codigo</CustomFormLabel>
              <CustomTextField
                id="identidad"
                placeholder="Ingrese el codigo de estudiante"
                variant="outlined"
                fullWidth
                size="small"
              />
              
              <CustomFormLabel>Apellido</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Ingrese el apellido del estudiante"
                variant="outlined"
                fullWidth
                size="small"
              />      
            </Grid>

            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>

              <CustomFormLabel htmlFor="date">Fecha de cumpleaños</CustomFormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value2}
                  onChange={(newValue2) => {
                    setValue2(newValue2);
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      size="small"
                      {...params}
                      fullWidth
                      id="date"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              <CustomFormLabel>Ubicacion</CustomFormLabel>
              <CustomTextField
                id="location"
                placeholder="Ingrese ubicacion"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>

            {/* ----------------------------------- */}
            {/* column 4 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Email</CustomFormLabel>
              <CustomTextField
                id="type"
                placeholder="Ingrese el correo"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Telefono</CustomFormLabel>
              <CustomTextField
                id="phone"
                placeholder="Ingrese el telefono"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Especialidad</CustomFormLabel>
              <CustomTextField
                id="speciality"
                placeholder="Ingrese la especialidad"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="type"
                placeholder="Ingrese el tipo de instructor"
                variant="outlined"
                fullWidth
                size="small"
              />
              
            </Grid>

            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Experiencia</CustomFormLabel>
              <CustomTextField
                id="experience"
                placeholder="Ingrese la experiencia"
                variant="outlined"
                fullWidth
                size="small"
              />
              
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              
              <Box
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'flex',
                    lg: 'flex',
                  },
                  alignItems: 'center',
                  mt: 3,
                }}
              >
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                      },
                      ml: {
                        xs: 0,
                        sm: 1,
                        lg: 1,
                      },
                    }}
                  >
                    Guardar
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default FormInstructor;
