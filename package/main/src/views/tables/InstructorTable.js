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

import { fetchTeachers } from '../../redux/teacher/Action';

const columns = [
  { id: 'pname', label: 'Instructor', minWidth: 170 },
  { id: 'code', label: 'Codigo', minWidth: 150 },
  { id: 'title', label: 'Titulo', minWidth: 150 },
  { id: 'email', label: 'Correo', minWidth: 150 },
  { id: 'phone', label: 'Telefono', minWidth: 150 },
  { id: 'location', label: 'Ubicacion', minWidth: 150 },
  { id: 'specialty', label: 'Especialidad', minWidth: 150 },
  { id: 'experience', label: 'Experiencia', minWidth: 150 },
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
    title: 'Instructores',
  },
];

const InstructorTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const dispatch = useDispatch();

  const { teachers } = useSelector(state => state.teacherReducer);

  useEffect(() => {
    dispatch( fetchTeachers() );
  }, [dispatch]);

  return (
    <PageContainer title="Instructores" description="Instructores">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Instructores" items={BCrumb} />
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
                href="instructores/nuevo"
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
                {teachers.map((teacher) => {
                  return (
                    <TableRow hover key={teacher._id}>
                      <TableCell
                        sx={{
                          pl: 0,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box
                            sx={{
                              ml: 2,
                            }}
                          >
                            <Typography variant="h5">{Capitalize(teacher.name)} {Capitalize(teacher.lastName)}</Typography>
                            <Typography color="textSecondary" variant="h6" fontWeight="400">
                              { new Date(teacher.birth).toLocaleDateString() }
                            </Typography>
                          </Box>
                        </Box>
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
                          {teacher.code}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.email}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.phone}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.location}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.specialty}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.experience}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{teacher.type}</Typography>
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

export default InstructorTable;
