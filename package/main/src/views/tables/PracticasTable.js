import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';

const columns = [
  { id: 'pname', label: 'Practica', minWidth: 170 },
  { id: 'review', label: 'Licencia', minWidth: 100 },
  {
    id: 'description',
    label: 'Descripcion',
    minWidth: 170,
  },
  {
    id: 'status',
    label: 'Estados',
    minWidth: 170,
  },
  {
    id: 'dates',
    label: 'Fecha',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Acciones',
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    imgsrc: img1,
    name: 'Is it good butterscotch ice-cream?',
    tags: 'Ice-Cream, Milk, Powder',
    review: 'good',
    percent: 65,
    description: 'lorem lorem lorem',
    licencia: 'A',
    status: 'Activo',
    dates: '2021-12-11'
  },
  {
    id: 2,
    imgsrc: img2,
    name: 'Supreme fresh tomato available',
    tags: 'Market, Mall',
    review: 'excellent',
    percent: 98,
    description: 'lorem lorem lorem',
    licencia: 'A',
    status: 'Activo',
    dates: '2021-12-11'
  },
  {
    id: 3,
    imgsrc: img3,
    name: 'Red color candy from Gucci',
    tags: 'Chocolate, Yummy',
    review: 'average',
    percent: 46,
    description: 'lorem lorem lorem',
    licencia: 'A',
    status: 'Activo',
    dates: '2021-12-11'
  },
  {
    id: 4,
    imgsrc: img4,
    name: 'Stylish night lamp for night',
    tags: 'Elecric, Wire, Current',
    review: 'poor',
    percent: 23,
    description: 'lorem lorem lorem',
    licencia: 'A',
    status: 'Activo',
    dates: '2021-12-11'
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
                            <Typography variant="h5">{row.name}</Typography>
                            <Typography color="textSecondary" variant="h6" fontWeight="400">
                              {row.tags}
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
                          {Capitalize(row.review)}
                        </Typography>
                        <LinearProgress
                          value={row.percent}
                          variant="determinate"
                          sx={{
                            '& span': {
                              backgroundColor:
                                row.review === 'good'
                                  ? (theme) => theme.palette.primary.main
                                  : row.review === 'excellent'
                                  ? (theme) => theme.palette.success.main
                                  : row.review === 'average'
                                  ? (theme) => theme.palette.warning.main
                                  : row.review === 'poor'
                                  ? (theme) => theme.palette.error.main
                                  : (theme) => theme.palette.secondary.main,
                            },
                          }}
                        />
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          fontWeight="400"
                          sx={{
                            mt: 1,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Licencia
                        </Typography>
                        <Typography variant="h5">{row.licencia}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Descripcion
                        </Typography>
                        <Typography variant="h5">{row.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Fecha
                        </Typography>
                        <Typography variant="h5">{row.dates}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <FeatherIcon
                            icon="trash"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
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
