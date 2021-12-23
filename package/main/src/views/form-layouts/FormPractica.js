import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  MenuItem,
  Button,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { LocalizationProvider, DatePicker } from '@mui/lab';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormPractica = () => {
  const [age, setAge] = React.useState('1');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const [value2, setValue2] = React.useState('2025-12-06');

  return (
    <PageContainer title="Nueva Practica" description="Agregar Practica">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Practica" subtitle="Agregar Practica" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione clase</CustomFormLabel>
              <CustomSelect
                labelId="class"
                id="class"
                value={age}
                onChange={handleChange}
                fullWidth
                size="small"
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </CustomSelect>

              <CustomFormLabel htmlFor="demo-simple-select">Seleccione maestro</CustomFormLabel>
                <CustomSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
              </CustomSelect>

              
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="demo-simple-select">Seleccione estudiante</CustomFormLabel>
                <CustomSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
              </CustomSelect>

              <CustomFormLabel>Nombre de Practica</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Ingrese el nombre de la practica"
                variant="outlined"
                fullWidth
                size="small"
              />

            </Grid>
            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Descripcion</CustomFormLabel>
              <CustomTextField
                id="description"
                placeholder="Ingrese descripcion de la practica"
                variant="outlined"
                fullWidth
                size="small"
              />

              <CustomFormLabel>Valor de Practica</CustomFormLabel>
              <CustomTextField
                id="value"
                placeholder="Ingrese el valor de la practica"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            {/* ----------------------------------- */}
            {/* column 4 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="date">Fecha de entrega</CustomFormLabel>
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

              <CustomFormLabel>Tipo de Practica</CustomFormLabel>
              <CustomTextField
                id="type"
                placeholder="Ingrese el tipo de la practica"
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

export default FormPractica;
