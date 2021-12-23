import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  MenuItem,
  Button,
} from '@mui/material';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormGrado = () => {
  const [age, setAge] = React.useState('1');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <PageContainer title="Nuevo Grado" description="Agregar Grado">
      {/* breadcrumb */}
      <Breadcrumb title="Nuevo Grado" subtitle="Agregar Grado" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione Estudiante</CustomFormLabel>
              <CustomSelect
                labelId="student"
                id="student"
                value={age}
                onChange={handleChange}
                fullWidth
                size="small"
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </CustomSelect>

              <CustomFormLabel>Acumulativo</CustomFormLabel>
              <CustomTextField
                id="value"
                placeholder="Ingrese el tipo de aviso"
                variant="outlined"
                fullWidth
                size="small"
              />
             
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione Clase</CustomFormLabel>
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

              <CustomFormLabel>Examen</CustomFormLabel>
              <CustomTextField
                id="description"
                placeholder="Ingrese descripcion del aviso"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Seccion</CustomFormLabel>
              <CustomTextField
                id="description"
                placeholder="Ingrese descripcion del aviso"
                variant="outlined"
                fullWidth
                size="small"
              />

            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="description"
                placeholder="Ingrese descripcion del aviso"
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

export default FormGrado;
