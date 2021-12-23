import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
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

import img1 from '../../assets/images/users/5.jpg';
import img2 from '../../assets/images/users/6.jpg';
import img3 from '../../assets/images/users/7.jpg';
import img4 from '../../assets/images/users/8.jpg';

const columns = [
  { id: 'pname', label: 'Instructor', minWidth: 170 },
  { id: 'code', label: 'Codigo', minWidth: 100 },
  { id: 'title', label: 'Titulo', minWidth: 100 },
  { id: 'email', label: 'Correo', minWidth: 100 },
  { id: 'phone', label: 'Telefono', minWidth: 100 },
  { id: 'location', label: 'Ubicacion', minWidth: 100 },
  { id: 'specialty', label: 'Especialidad', minWidth: 100 },
  { id: 'experience', label: 'Experiencia', minWidth: 100 },
  { id: 'type', label: 'Tipo', minWidth: 100 },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    imgsrc: img1,
    name: 'Danny',
    lastName: 'Turcio',
    code: '001-TRAINER',
    birth: '1980-06-15',
    title: 'good',
    email: 'example@example.com',
    phone: '87452015',
    location: 'New Your',
    speciality: 'Doctor',
    experience: '3 years ago',
    type: 'Trainner'
  },
  {
    id: 2,
    imgsrc: img2,
    name: 'Arnold',
    lastName: 'Cruz',
    code: '002-TRAINER',
    birth: '1980-06-15',
    title: 'good',
    email: 'example@example.com',
    phone: '87452015',
    location: 'New Your',
    speciality: 'Doctor',
    experience: '3 years ago',
    type: 'Trainner'
  },
  {
    id: 3,
    imgsrc: img3,
    name: 'David',
    lastName: 'Suazo',
    code: '003-TRAINER',
    birth: '1980-06-15',
    title: 'good',
    email: 'example@example.com',
    phone: '87452015',
    location: 'New Your',
    speciality: 'Doctor',
    experience: '3 years ago',
    type: 'Trainner'
  },
  {
    id: 4,
    imgsrc: img4,
    name: 'Arnulfo',
    lastName: 'Padilla',
    code: '004-TRAINER',
    birth: '1980-06-15',
    title: 'good',
    email: 'example@example.com',
    phone: '87452015',
    location: 'New Your',
    speciality: 'Doctor',
    experience: '3 years ago',
    type: 'Trainner'
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
                {rows.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell
                        sx={{
                          pl: 0,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Avatar
                            src={row.imgsrc}
                            alt={row.imgsrc}
                            sx={{
                              borderRadius: '10px',
                              height: '70px',
                              width: '90px',
                            }}
                          />

                          <Box
                            sx={{
                              ml: 2,
                            }}
                          >
                            <Typography variant="h5">{row.name} {row.lastName}</Typography>
                            <Typography color="textSecondary" variant="h6" fontWeight="400">
                              { new Date(row.birth).toDateString() }
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
                          {Capitalize(row.code)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.email}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.phone}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.location}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.speciality}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.experience}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.type}</Typography>
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
