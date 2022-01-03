import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

import { fetchActivities } from '../../redux/activities/Action';

const columns = [
  { id: 'class', label: 'Clase', minWidth: 170 },
  { id: 'teacher', label: 'Maestro', minWidth: 150 },
  { id: 'student', label: 'Estudiante', minWidth: 150 },
  { id: 'name', label: 'Practica', minWidth: 150 },
  { id: 'description', label: 'Descripcion', minWidth: 170 },
  { id: 'value', label: 'Valor', minWidth: 150 },
  { id: 'delivery_date', label: 'Fecha', minWidth: 150 },
  { id: 'type', label: 'Tipo', minWidth: 150 },
  {
    id: 'action',
    label: 'Acciones',
    minWidth: 170,
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Practicas',
  },
];

const PracticasTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const dispatch = useDispatch();
  const { activities } = useSelector(state => state.activityReducer);

  useEffect(() => {
    dispatch( fetchActivities() );
  }, [dispatch]);

  return (
    <PageContainer title="Practicas" description="Practicas de estudiantes">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Practicas" items={BCrumb} />
      {/* end breadcrumb */}
      <Card>
        <CardContent>
          <TableContainer
            sx={{
              maxHeight: 440,
            }}
          >
            <Box display="flex" justifyContent="flex-start">
              <Button  
                variant="outlined" 
                color="primary" 
                href="practicas/nueva"
                startIcon={<FeatherIcon icon="plus" width="15" height="15" />}
              >
                Agregar
              </Button>
            </Box>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography variant="h5" fontWeight="500">
                        {column.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {activities.map((activity) => {
                  return (
                    <TableRow hover key={activity._id}>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(activity.class.name)}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          pl: 0,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(activity.teacher.name)} { Capitalize(activity.teacher.lastName) }
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(activity.student.name)} { Capitalize(activity.student.lastName) }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{activity.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{activity.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{activity.value}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(activity.deliveryDate).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{activity.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <FeatherIcon
                            icon="trash"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.red.A200,
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default PracticasTable;
