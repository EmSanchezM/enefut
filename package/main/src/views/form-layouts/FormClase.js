import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormClase = () => {
  
  return (
    <PageContainer title="Nueva Clase" description="Agregar Clase">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Clase" subtitle="Agregar Clase" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Nombre de la clase</CustomFormLabel>
              <CustomTextField
                id="identidad"
                placeholder="Ingrese el nombre de la clase"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Duracion</CustomFormLabel>
              <CustomTextField
                id="duration"
                placeholder="Ingrese la duracion de la clase"
                variant="outlined"
                fullWidth
                size="small"
              /> 
              
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Lenguaje</CustomFormLabel>
              <CustomTextField
                id="languague"
                placeholder="Ingrese el lenguaje de la clase"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Modalidad</CustomFormLabel>
              <CustomTextField
                id="location"
                placeholder="Ingrese modalidad de la clase"
                variant="outlined"
                fullWidth
                size="small"
              />    
            </Grid>

            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="type"
                placeholder="Ingrese el tipo de clase"
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

export default FormClase;
