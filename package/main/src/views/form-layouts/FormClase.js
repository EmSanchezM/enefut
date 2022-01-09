import React, {useState, useEffect} from 'react';
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

const FormClase = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    name: '',
    description: '',
    duration: 0,
    language: '',
    modality: '',
    type: ''
  };

  const [clase, setClase] = useState(initialValues);
  
  useEffect(() => {
    if (paramsRoute.classId) {
      (
        async () => {
          const { data } = await Axios.get(`classes/${paramsRoute.classId}`);
          initialValues = {
            name: data.data.name,
            description: data.data.description,
            duration: data.data.duration,
            language: data.data.language,
            modality: data.data.modality,
            type: data.data.type
          };

          setClase(initialValues);
        }
      )();
    }
  }, []);

  const { name, description, duration, language, modality, type } = clase;

  const onChange = e => {
    setClase({
      ...clase,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      ...clase,
      duration: parseInt(duration, 10)
    };

    console.log('SAVE', dataSave);

    if (paramsRoute.classId) {
      const { data } = await Axios.put(`classes/${paramsRoute.classId}`, dataSave);
      console.log('SAVE POST', data);
      if (data.ok) {
        toast.success('Clase actualizado exitosamente');
        navigate('/clases');
      }
    } else {
      const { data } = await Axios.post('classes', dataSave);
      
      if (data.ok) {
        toast.success('Clase agregado exitosamente');
        navigate('/clases');
      }
    }
  
    setClase(initialValues);
  }
  return (
    <PageContainer title="Nueva Clase" description="Agregar Clase">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Clase" subtitle="Agregar Clase" />
      {/* end breadcrumb */}

      <Card>
        <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Nombre de la clase</CustomFormLabel>
              <CustomTextField
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Ingrese el nombre de la clase"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Duracion</CustomFormLabel>
              <CustomTextField
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={onChange}
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
                id="language"
                name="language"
                value={language}
                onChange={onChange}
                placeholder="Ingrese el lenguaje de la clase"
                variant="outlined"
                fullWidth
                size="small"
              />
              <CustomFormLabel>Modalidad</CustomFormLabel>
              <CustomTextField
                id="modality"
                name="modality"
                value={modality}
                onChange={onChange}
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
              <CustomFormLabel>Descripcion</CustomFormLabel>
              <CustomTextField
                id="description"
                name="description"
                value={description}
                onChange={onChange}
                placeholder="Ingrese descripccion de clase"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="type"
                name="type"
                value={type}
                onChange={onChange}
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
                    {paramsRoute.classId ? 'Editar' : 'Guardar' }
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

export default FormClase;
