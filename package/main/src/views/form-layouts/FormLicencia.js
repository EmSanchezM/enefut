import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';

import Axios from '../../config/axios';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormLicencia = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    name: '',
    letter: '',
    description: '',
    duration: 0,
    cost: 0,
    language: '',
    type: ''
  };

  const [licencia, setLicencia] = useState(initialValues);
  
  useEffect(() => {
    if (paramsRoute.licenseId) {
      (
        async () => {
          const { data } = await Axios.get(`licenses/${paramsRoute.licenseId}`);
          initialValues = {
            name: data.data.name,
            letter: data.data.letter,
            description: data.data.description,
            duration: data.data.duration,
            cost: data.data.cost,
            language: data.data.language,
            type: data.data.type
          }
          setLicencia(initialValues);
        }
      )();
    }
  }, []);

  const { name, letter, description, duration, cost, language, type } = licencia;

  const onChange = e => {
    setLicencia({
      ...licencia,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      ...licencia,
      duration : parseInt(duration,10),
      cost : parseFloat(cost)
    };

    if (paramsRoute.licenseId) {
      const { data } = await Axios.put(`licenses/${paramsRoute.licenseId}`, dataSave);
      console.log('SAVE POST', data);
      if (data.ok) {
        toast.success('Licencia actualizado exitosamente');
        navigate('/licencias');
      }
    } else {
      const { data } = await Axios.post('licenses', dataSave);
      
      if (data.ok) {
        toast.success('Licencia agregado exitosamente');
        navigate('/licencias');
      }
    }
    setLicencia(initialValues);
  }

  return (
    <PageContainer title="Nueva Licencia" description="Agregar Licencia">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Licencia" subtitle="Agregar Licencia" />
      {/* end breadcrumb */}

      <Card>
        <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              
              <CustomFormLabel>Licencia</CustomFormLabel>
              <CustomTextField
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Ingrese la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />  
              <CustomFormLabel>Descripcion</CustomFormLabel>
              <CustomTextField
                id="description"
                name="description"
                value={description}
                onChange={onChange}
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
                id="letter"
                name="letter"
                value={letter}
                onChange={onChange}
                placeholder="Ingrese la letra de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />  

              <CustomFormLabel>Costo</CustomFormLabel>
              <CustomTextField
                type="number"
                id="cost"
                name="cost"
                value={cost}
                onChange={onChange}
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
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={onChange}
                placeholder="Ingrese la duracion de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="type"
                name="type"
                value={type}
                onChange={onChange}
                placeholder="Ingrese el tipo de la licencia"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Lenguaje</CustomFormLabel>
              <CustomTextField
                id="language"
                name="language"
                value={language}
                onChange={onChange}
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
                    type="submit"
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
                    { paramsRoute.licenseId ? 'Editar' : 'Guardar' }
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        </form>
      </Card>
    </PageContainer>
  );
};

export default FormLicencia;
