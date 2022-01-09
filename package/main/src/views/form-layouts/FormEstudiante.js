import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { LocalizationProvider, DatePicker } from '@mui/lab';

import Axios from '../../config/axios';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormEstudiante = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    identidad: '',
    name: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    specialty: '',
    experience: '',
    type: '',
    password: '',
    passwordConfirm: ''
  };

  const [estudiante, setEstudiante] = useState(initialValues);
  const [birth, setBirth] = useState(new Date());

  useEffect(() => {
    if (paramsRoute.studentId) {
      (
        async () => {
          const { data } = await Axios.get(`students/${paramsRoute.studentId}`);
          initialValues = {
            identidad: data.data.identidad,
            name: data.data.name,
            lastName: data.data.lastName,
            title: data.data.title,
            email: data.data.email,
            phone: data.data.phone,
            location: data.data.location,
            specialty: data.data.specialty,
            experience: data.data.experience,
            type: data.data.type,
            password: '',
            passwordConfirm: ''
          }
          setBirth(data.data.birth);
          setEstudiante(initialValues);
        }
      )();
    }
  }, []);

  const { identidad, name, lastName, title, email, phone, location, specialty, experience, type, password, passwordConfirm } = estudiante;

  const onChange = e => {
    setEstudiante({
      ...estudiante,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      ...estudiante,
      birth: new Date(birth).toLocaleDateString()
    };

    if (paramsRoute.studentId) {
      const { data } = await Axios.put(`students/${paramsRoute.studentId}`, dataSave);
      if (data.ok) {
        toast.success('Estudiante actualizado exitosamente');
        navigate('/estudiantes');
      }
    } else {
      const { data } = await Axios.post('students', dataSave);

      if (data.ok) {
        toast.success('Estudiante agregado exitosamente');
        navigate('/estudiantes');
      }
    }
    setBirth(new Date());
    setEstudiante(initialValues);
  }

  return (
    <PageContainer title="Nuevo Estudiante" description="Agregar Estudiante">
      {/* breadcrumb */}
      <Breadcrumb title="Nuevo Estudiante" subtitle="Agregar Estudiante" />
      {/* end breadcrumb */}

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel>No de Identidad</CustomFormLabel>
                <CustomTextField
                  id="identidad"
                  name="identidad"
                  value={identidad}
                  onChange={onChange}
                  placeholder="Ingrese el no de identificacion"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <CustomFormLabel>Nombre</CustomFormLabel>
                <CustomTextField
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
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
                <CustomFormLabel>Especialidad</CustomFormLabel>
                <CustomTextField
                  id="specialty"
                  name="specialty"
                  value={specialty}
                  onChange={onChange}
                  placeholder="Ingrese la especialidad del estudiante"
                  variant="outlined"
                  fullWidth
                  size="small"
                />

                <CustomFormLabel>Apellido</CustomFormLabel>
                <CustomTextField
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
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
                    id="birth"
                    value={birth}
                    onChange={(newBirth) => { setBirth(newBirth); }}
                    renderInput={(params) => (
                      <CustomTextField
                        size="small"
                        {...params}
                        fullWidth
                        id="birth"
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
                  name="location"
                  value={location}
                  onChange={onChange}
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
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Ingrese el correo"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <CustomFormLabel>Telefono</CustomFormLabel>
                <CustomTextField
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  placeholder="Ingrese el telefono"
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
                  placeholder="Ingrese el tipo de estudiante"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <CustomFormLabel>Experiencia</CustomFormLabel>
                <CustomTextField
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={onChange}
                  placeholder="Ingrese la experiencia del estudiante"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel>Titulo</CustomFormLabel>
                <CustomTextField
                  id="title"
                  name="title"
                  value={title}
                  onChange={onChange}
                  placeholder="Ingrese el titulo del estudiante"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                {!paramsRoute.studentId && (
                  <>
                    <CustomFormLabel>Contraseña</CustomFormLabel>
                    <CustomTextField
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Ingrese la contraseña del estudiante"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </>
                )
                }
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                {!paramsRoute.studentId && (
                  <>
                    <CustomFormLabel>Repetir Contraseña</CustomFormLabel>
                    <CustomTextField
                      id="passwordConfirm"
                      type="password"
                      name="passwordConfirm"
                      value={passwordConfirm}
                      onChange={onChange}
                      placeholder="Repite la contraseña del estudiante"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </>
                )}
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
                      type='submit'
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
                      {paramsRoute.studentId ? 'Editar' : 'Guardar'}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default FormEstudiante;