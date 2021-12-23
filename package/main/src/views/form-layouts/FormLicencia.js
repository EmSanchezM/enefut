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

const FormLicencia = () => {
  
  return (
    <PageContainer title="Nueva Licencia" description="Agregar Licencia">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Licencia" subtitle="Agregar Licencia" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              
              <CustomFormLabel>Licencia</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Ingrese la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />  
              <CustomFormLabel>Descripcion</CustomFormLabel>
              <CustomTextField
                id="description"
                placeholder="Ingrese la descripcion"
                variant="outlined"
                fullWidth
                size="small"
              />              
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Letra</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Ingrese la letra de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />  

              <CustomFormLabel>Costo</CustomFormLabel>
              <CustomTextField
                id="value"
                placeholder="Ingrese el costo de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Duracion</CustomFormLabel>
              <CustomTextField
                id="duration"
                placeholder="Ingrese la duracion de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="duration"
                placeholder="Ingrese el tipo de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Lenguaje</CustomFormLabel>
              <CustomTextField
                id="languague"
                placeholder="Ingrese el lenguaje de la licencia"
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

export default FormLicencia;
