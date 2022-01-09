import React, {useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Grid,
  Card,
  CardContent,
  Box,
  MenuItem,
  Button,
} from '@mui/material';

import Axios from '../../config/axios';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormGrado = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    cumulative: 0,
    quiz: 0,
    average: 0,
    obs: '',
    student: '',
    clase: '',
    type: ''
  };

  const [estudiantes, setEstudiantes] = useState([]);
  const [clases, setClases] = useState([]);
  const [grado, setGrado] = useState(initialValues);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('students');
        setEstudiantes(data.data);
      }
    )();
  }, []);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('classes');
        setClases(data.data);
      }
    )();
  }, []);
  
  useEffect(() => {
    if (paramsRoute.gradeId) {
      (
        async () => {
          const { data } = await Axios.get(`grades/${paramsRoute.gradeId}`);
          initialValues = {
            cumulative: data.data.cumulative,
            quiz: data.data.quiz,
            average: data.data.average,
            obs: data.data.obs,
            student: data.data.student,
            clase: data.data.class,
            type: data.data.type 
          };

          setGrado(initialValues);
        }
      )();
    }
  }, []);

  const { cumulative, quiz, average, obs, student, clase, type } = grado;

  const onChange = e => {
    setGrado({
      ...grado,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      cumulative : parseFloat(cumulative),
      quiz : parseFloat(quiz),
      average: parseFloat(average),
      student,
      type,
      obs,
      class: clase 
    };

    console.log('SAVE', dataSave);

    if (paramsRoute.gradeId) {
      const { data } = await Axios.put(`grades/${paramsRoute.gradeId}`, dataSave);
      console.log('SAVE POST', data);
      if (data.ok) {
        toast.success('Califición actualizado exitosamente');
        navigate('/calificaciones');
      }
    } else {
      const { data } = await Axios.post('grades', dataSave);
      
      if (data.ok) {
        toast.success('Calificacion agregado exitosamente');
        navigate('/calificaciones');
      }
    }
  
    setGrado(initialValues);
  }
  
  return (
    <PageContainer title="Nueva Calificacion" description="Agregar Calificacion">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Calificación" subtitle="Agregar Calificación" />
      {/* end breadcrumb */}

      <Card>
        <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione Estudiante</CustomFormLabel>
              <CustomSelect
                labelId="student"
                id="student"
                name="student"
                value={student}
                onChange={onChange}
                fullWidth
                size="small"
              >
                {
                  estudiantes.map((estudiante) =>(
                    <MenuItem value={estudiante._id}>{estudiante.name} {estudiante.lastName}</MenuItem>
                  ))
                }
              </CustomSelect>

              <CustomFormLabel>Acumulativo</CustomFormLabel>
              <CustomTextField
                type="number"
                id="cumulative"
                name="cumulative"
                value={cumulative}
                onChange={onChange}
                placeholder="Ingrese el acumulativo"
                variant="outlined"
                fullWidth
                size="small"
              />
             
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="clase">Seleccione Clase</CustomFormLabel>
                <CustomSelect
                  labelId="clase"
                  id="clase"
                  name="clase"
                  value={clase}
                  onChange={onChange}
                  fullWidth
                  size="small"
                >
                {
                  clases.map((classe) =>(
                    <MenuItem value={classe._id}>{classe.name}</MenuItem>
                  ))
                }
              </CustomSelect>
              <CustomFormLabel>Examen</CustomFormLabel>
              <CustomTextField
                type="number"
                id="quiz"
                name="quiz"
                value={quiz}
                onChange={onChange}
                placeholder="Ingrese nota de examen"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            {/* ----------------------------------- */}
            {/* column 3 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Tipo de Calificacion</CustomFormLabel>
              <CustomTextField
                id="type"
                name="type"
                value={type}
                onChange={onChange}
                placeholder="Ingrese tipo de calificacion"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Promedio</CustomFormLabel>
              <CustomTextField
                type="number"
                id="average"
                name="average"
                value={average}
                onChange={onChange}
                placeholder="Ingrese promedio"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Observaciones</CustomFormLabel>
              <CustomTextField
                id="obs"
                name="obs"
                value={obs}
                onChange={onChange}
                placeholder="Ingrese observaciones de la calificación"
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
                    { paramsRoute.gradeId ? 'Editar' : 'Guardar' }
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

export default FormGrado;
