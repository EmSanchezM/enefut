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

const FormInscripcion = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    section: '',
    status: '',
    type: '',
    student: '',
    license: ''
  };

  const [licencias, setLicencias] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [inscripcion, setInscripcion] = useState(initialValues);

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
        const { data } = await Axios.get('licenses');
        setLicencias(data.data);
      }
    )();
  }, []);
  
  useEffect(() => {
    if (paramsRoute.enrollmentId) {
      (
        async () => {
          const { data } = await Axios.get(`enrollments/${paramsRoute.enrollmentId}`);
          initialValues = {
            section: data.data.section,
            status: data.data.status,
            type: data.data.type,
            student: data.data.student,
            license: data.data.license
          };

          setInscripcion(initialValues);
        }
      )();
    }
  }, []);

  const { section, status, type, student, license } = inscripcion;

  const onChange = e => {
    setInscripcion({
      ...inscripcion,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paramsRoute.enrollmentId) {
      const { data } = await Axios.put(`enrollments/${paramsRoute.enrollmentId}`, inscripcion);

      if (data.ok) {
        toast.success('Inscripcion actualizado exitosamente');
        navigate('/inscripciones');
      }
    } else {
      const { data } = await Axios.post('enrollments', inscripcion);
  
      if (data.ok) {
        toast.success('Inscripcion agregado exitosamente');
        navigate('/inscripciones');
      }
    }
  
    setInscripcion(initialValues);
  }
  
  return (
    <PageContainer title="Nueva Inscripcion" description="Agregar Inscripcion">
      {/* breadcrumb */}
      <Breadcrumb title="Nueva Inscripcion" subtitle="Agregar Inscripcion" />
      {/* end breadcrumb */}

      <Card>
        <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione estudiante</CustomFormLabel>
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
              <CustomFormLabel>Seccion</CustomFormLabel>
              <CustomTextField
                id="section"
                name="section"
                value={section}
                onChange={onChange}
                placeholder="Ingrese la seccion"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>

            {/* ----------------------------------- */}
            {/* column 2 */}
            {/* ----------------------------------- */}
            <Grid item xs={12} sm={12} lg={6}>

              <CustomFormLabel htmlFor="demo-simple-select">Seleccione licencia</CustomFormLabel>
                <CustomSelect
                  labelId="license"
                  id="license"
                  name="license"
                  value={license}
                  onChange={onChange}
                  fullWidth
                  size="small"
                >
                {
                  licencias.map((licencia) =>(
                    <MenuItem value={licencia._id}>{licencia.name}</MenuItem>
                  ))
                }
              </CustomSelect>

              <CustomFormLabel>Tipo</CustomFormLabel>
              <CustomTextField
                id="type"
                name="type"
                value={type}
                onChange={onChange}
                placeholder="Ingrese tipo del inscripcion"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel>Estado</CustomFormLabel>
              <CustomTextField
                id="status"
                name="status"
                value={status}
                onChange={onChange}
                placeholder="Estado de la inscripcion"
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
                    {paramsRoute.enrollmentId ? 'Editar' : 'Guardar' }
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

export default FormInscripcion;
