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

import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';

const columns = [
  { id: 'pname', label: 'Nombre', minWidth: 170 },
  { id: 'identidad', label: 'No Identidad', minWidth: 100 },
  { id: 'code', label: 'Codigo', minWidth: 100 },
  { id: 'birth', label: 'Cumpleaños', minWidth: 100 },
  { id: 'email', label: 'Correo', minWidth: 100 },
  { id: 'phone', label: 'Telefono', minWidth: 100 },
  { id: 'location', label: 'Ubicacion', minWidth: 100 },
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
    name: 'Milk',
    lastName: 'Powder',
    identidad: '0811-1988-00580',
    code: '01-STUDENT',
    birth: '1998-02-20',
    email: 'enefut@gmail.com',
    phone: '89745012',
    location: 'new york',
    type: 'A'
  },
  {
    id: 2,
    imgsrc: img2,
    name: 'Milk',
    lastName: 'Powder',
    identidad: '0811-1988-00580',
    code: '01-STUDENT',
    birth: '1998-02-20',
    email: 'enefut@gmail.com',
    phone: '89745012',
    location: 'new york',
    type: 'A'
  },
  {
    id: 3,
    imgsrc: img3,
    name: 'Milk',
    lastName: 'Powder',
    identidad: '0811-1988-00580',
    code: '01-STUDENT',
    birth: '1998-02-20',
    email: 'enefut@gmail.com',
    phone: '89745012',
    location: 'new york',
    type: 'A'
  },
  {
    id: 4,
    imgsrc: img4,
    name: 'Milk',
    lastName: 'Powder',
    identidad: '0811-1988-00580',
    code: '01-STUDENT',
    birth: '1998-02-20',
    email: 'enefut@gmail.com',
    phone: '89745012',
    location: 'new york',
    type: 'A'
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Estudiantes',
  },
];

const EstudianteTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer title="Estudiantes" description="Estudiantes">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Estudiantes" items={BCrumb} />
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
                href="/estudiantes/nuevo"
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
                            <Typography variant="h5">{Capitalize(row.name)} {Capitalize(row.lastName)}</Typography>
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
                          {row.identidad}
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.code}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(row.birth).toLocaleDateString() }</Typography>
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

export default EstudianteTable;
