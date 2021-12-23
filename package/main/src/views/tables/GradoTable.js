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
  { id: 'student', label: 'Estudiante', minWidth: 170 },
  { id: 'class', label: 'Clase', minWidth: 100 },
  { id: 'section', label: 'Seccion', minWidth: 100 },
  { id: 'acumulative', label: 'Acumulativo', minWidth: 100 },
  { id: 'quiz', label: 'Examen', minWidth: 100 },
  { id: 'type', label: 'Tipo', minWidth: 100 },
  {
    id: 'action',
    label: 'Accion',
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    student: 'Tactico',
    class: 'Tactico',
    section: 'A',
    acumulative: 'A',
    quiz: 'aviso',
    type: 'A',
  },
  {
    id: 2,
    student: 'Tactico',
    class: 'Tactico',
    section: 'A',
    acumulative: 'A',
    quiz: 'aviso',
    type: 'A',
  },
  {
    id: 3,
    student: 'Tactico',
    class: 'Tactico',
    section: 'A',
    acumulative: 'A',
    quiz: 'aviso',
    type: 'A',
  },
  {
    id: 4,
    student: 'Tactico',
    class: 'Tactico',
    section: 'A',
    acumulative: 'A',
    quiz: 'aviso',
    type: 'A',
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Grados',
  },
];

const GradoTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer title="Grados" description="Grados">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Grados" items={BCrumb} />
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
                href="/grados/nuevo"
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
                        <Typography variant="h5">{row.student}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.class}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(row.section)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.acumulative}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.quiz}</Typography>
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

export default GradoTable;
