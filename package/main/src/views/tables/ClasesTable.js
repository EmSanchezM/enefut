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
  { id: 'pname', label: 'Clase', minWidth: 170 },
  { id: 'description', label: 'Descripcion', minWidth: 170 },
  { id: 'duration', label: 'Duracion', minWidth: 100 },
  { id: 'languague', label: 'Lenguaje', minWidth: 100 },
  { id: 'modality', label: 'Modalidad', minWidth: 100 },
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
    name: 'Is it good butterscotch ice-cream?',
    description: 'Ice-Cream, Milk, Powder',
    duration: '2021-12-11',
    languague: 'Español',
    modality: 'Virtual',
    type: 'A'
  },
  {
    id: 2,
    name: 'Supreme fresh tomato available',
    description: 'Ice-Cream, Milk, Powder',
    duration: '2021-12-11',
    languague: 'Español',
    modality: 'Virtual',
    type: 'A'
  },
  {
    id: 3,
    name: 'Red color candy from Gucci',
    description: 'Ice-Cream, Milk, Powder',
    duration: '2021-12-11',
    languague: 'Español',
    modality: 'Virtual',
    type: 'A'
  },
  {
    id: 4,
    name: 'Stylish night lamp for night',
    description: 'Ice-Cream, Milk, Powder',
    duration: '2021-12-11',
    languague: 'Español',
    modality: 'Virtual',
    type: 'A'
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Clases',
  },
];

const ClasesTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer title="Clases" description="Clases de estudiantes">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Clases" items={BCrumb} />
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
                href="clases/nueva"
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
                          {Capitalize(row.name)}
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
                          {Capitalize(row.description)}
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(row.duration).toLocaleTimeString()} hours</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.languague}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.modality}</Typography>
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

export default ClasesTable;
