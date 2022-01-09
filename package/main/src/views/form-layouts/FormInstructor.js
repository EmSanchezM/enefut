import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';

import { toast } from 'react-toastify';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { LocalizationProvider, DatePicker } from '@mui/lab';

import Axios from '../../config/axios';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormInstructor = () => {
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

  const [instructor, setInstructor] = useState(initialValues);
  const [birth, setBirth] = useState(new Date());

  useEffect(() => {
    if (paramsRoute.teacherId) {
      (
        async () => {
          const { data } = await Axios.get(`teachers/${paramsRoute.teacherId}`);
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
          setInstructor(initialValues);
        }
      )();
    }
  }, []);

  const { identidad, name, lastName, title, email, phone, location, specialty, experience, type, password, passwordConfirm } = instructor;

  const onChange = e => {
    setInstructor({
      ...instructor,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      ...instructor,
      birth: new Date(birth).toLocaleDateString()
    };

    if (paramsRoute.teacherId) {
      const { data } = await Axios.put(`teachers/${paramsRoute.teacherId}`, dataSave);
      console.log('SAVE POST', data);
      if (data.ok) {
        toast.success('Instructor actualizado exitosamente');
        navigate('/instructores');
      }
    } else {
      const { data } = await Axios.post('teachers', dataSave);
      
      if (data.ok) {
        toast.success('Instructor agregado exitosamente');
        navigate('/instructores')
      }
    }
    setBirth(new Date());
    setInstructor(initialValues);
  }

  return (
    <PageContainer title="Nuevo Instructor" description="Agregar Instructor">
      {/* breadcrumb */}
      <Breadcrumb title="Nuevo Instructor" subtitle="Agregar Instructor" />
      {/* end breadcrumb */}
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel>No de Identidad</CustomFormLabel>
                <CustomTextField
                  id="identidad"
                  name='identidad'
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
                  placeholder="Ingrese el nombre del instructor"
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
                  placeholder="Ingrese la especialidad del instructor"
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

                <CustomFormLabel htmlFor="birth">Fecha de cumpleaños</CustomFormLabel>
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
                  placeholder="Ingrese el tipo de instructor"
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
                  placeholder="Ingrese la experiencia del instructor"
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
                  placeholder="Ingrese el titulo del instructor"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                {!paramsRoute.teacherId && (
                  <>
                    <CustomFormLabel>Contraseña</CustomFormLabel>
                    <CustomTextField
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Ingrese la contraseña del instructor"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </>
                )
                }
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                {!paramsRoute.teacherId && (
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
                      type='submit'
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
                      {paramsRoute.teacherId ? 'Editar' : 'Guardar'}
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

export default FormInstructor;
