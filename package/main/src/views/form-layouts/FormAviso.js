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

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';

import Axios from '../../config/axios';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const FormAviso = () => {
  const paramsRoute = useParams();
  const navigate = useNavigate();

  let initialValues = {
    section: '',
    title: '',
    description: '',
    type: '',
    license: ''
  };

  const [licencias, setLicencias] = useState([]);
  const [dateInit, setDateInit] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [aviso, setAviso] = useState(initialValues);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('licenses');
        setLicencias(data.data);
      }
    )();
  }, []);
  
  useEffect(() => {
    if (paramsRoute.noticeId) {
      (
        async () => {
          const { data } = await Axios.get(`notices/${paramsRoute.noticeId}`);
          initialValues = {
            section: data.data.section,
            title: data.data.title,
            description: data.data.description,
            type: data.data.type,
            license: data.data.license
          };
          setAviso(initialValues);
          setDateInit(data.data.dateInit);
          setDateEnd(data.data.dateEnd);
        }
      )();
    }
  }, []);

  const { section, title, description, type, license } = aviso;

  const onChange = e => {
    setAviso({
      ...aviso,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataSave = {
      ...aviso,
      dateInit: new Date(dateInit).toLocaleDateString(),
      dateEnd: new Date(dateEnd).toLocaleDateString()
    };

    if (paramsRoute.noticeId) {
      const { data } = await Axios.put(`notices/${paramsRoute.noticeId}`, dataSave);

      if (data.ok) {
        toast.success('Aviso actualizado exitosamente');
        navigate('/avisos');
      }
    } else {
      const { data } = await Axios.post('notices', dataSave);
  
      if (data.ok) {
        toast.success('Aviso agregado exitosamente');
        navigate('/avisos');
      }
    }
    setAviso(initialValues);
    setDateInit(new Date());
    setDateEnd(new Date());
  }
  
  return (
    <PageContainer title="Nuevo Aviso" description="Agregar Aviso">
      {/* breadcrumb */}
      <Breadcrumb title="Nuevo Aviso" subtitle="Agregar Aviso" />
      {/* end breadcrumb */}
      <Card>
        <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="class">Seleccione Licencia</CustomFormLabel>
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
                    <MenuItem key={licencia._id} value={licencia._id}>{licencia.name}</MenuItem>
                  ))
                }
              </CustomSelect>
              <CustomFormLabel>Tipo de aviso</CustomFormLabel>
              <CustomTextField
                id="type"
                name="type"
                value={type}
                onChange={onChange}
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
              <CustomFormLabel>Aviso</CustomFormLabel>
              <CustomTextField
                id="title"
                name="title"
                value={title}
                onChange={onChange}
                placeholder="Ingrese el aviso"
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
              <CustomFormLabel htmlFor="dateInit">Fecha Inicio</CustomFormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="dateInit"
                  name="dateInit"
                  value={dateInit}
                  onChange={(newDateInit) => { setDateInit(newDateInit); }}
                  renderInput={(params) => (
                    <CustomTextField
                      size="small"
                      {...params}
                      fullWidth
                      id="dateInit"
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
              <CustomFormLabel>Seccion</CustomFormLabel>
              <CustomTextField
                id="section"
                name="section"
                value={section}
                onChange={onChange}
                placeholder="Ingrese seccion del aviso"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomFormLabel htmlFor="dateEnd">Fecha Final</CustomFormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="dateEnd"
                  name="dateEnd"
                  value={dateEnd}
                  onChange={(newDateEnd) => { setDateEnd(newDateEnd); }}
                  renderInput={(params) => (
                    <CustomTextField
                      size="small"
                      {...params}
                      fullWidth
                      id="dateEnd"
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
                    {paramsRoute.noticeId ? 'Editar' : 'Guardar' }
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

export default FormAviso;
