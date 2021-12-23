import React from 'react';
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

const columns = [
  { id: 'class', label: 'Clase', minWidth: 170 },
  { id: 'teacher', label: 'Maestro', minWidth: 100 },
  { id: 'student', label: 'Estudiante', minWidth: 100 },
  { id: 'name', label: 'Practica', minWidth: 100 },
  { id: 'description', label: 'Descripcion', minWidth: 170 },
  { id: 'value', label: 'Valor', minWidth: 100 },
  { id: 'delivery_date', label: 'Fecha', minWidth: 100 },
  { id: 'type', label: 'Tipo', minWidth: 100 },
  {
    id: 'action',
    label: 'Acciones',
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    class: 'Is it good butterscotch ice-cream?',
    teacher: 'Milk, Powder',
    student: 'Frank, Tower',
    name: 'Dominio',
    description: 'Supreme fresh tomato available',
    value: '20%',
    deliveryDate: '2021-12-11',
    type: 'A'
  },
  {
    id: 2,
    class: 'Is it good butterscotch ice-cream?',
    teacher: 'Milk, Powder',
    student: 'Frank, Tower',
    name: 'Estrategia',
    description: 'Supreme fresh tomato available',
    value: '20%',
    deliveryDate: '2021-12-11',
    type: 'A'
  },
  {
    id: 3,
    class: 'Is it good butterscotch ice-cream?',
    teacher: 'Milk, Powder',
    student: 'Frank, Tower',
    name: 'Tecnica',
    description: 'Supreme fresh tomato available',
    value: '20%',
    deliveryDate: '2021-12-11',
    type: 'A'
  },
  {
    id: 4,
    class: 'Is it good butterscotch ice-cream?',
    teacher: 'Milk, Powder',
    student: 'Frank, Tower',
    name: 'Tactica',
    description: 'Supreme fresh tomato available',
    value: '30%',
    deliveryDate: '2021-12-11',
    type: 'A'
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
                {rows.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(row.class)}
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
                          {Capitalize(row.teacher)}
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.student}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.value}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(row.deliveryDate).toDateString() }</Typography>
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

export default PracticasTable;
