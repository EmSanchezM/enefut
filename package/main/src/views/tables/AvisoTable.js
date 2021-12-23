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
  { id: 'license', label: 'Licencia', minWidth: 170 },
  { id: 'class', label: 'Clase', minWidth: 100 },
  { id: 'name', label: 'Aviso', minWidth: 100 },
  { id: 'description', label: 'Descripcion', minWidth: 100 },
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
    license: 'A',
    class: 'Tactico',
    name: 'aviso',
    description: 'Is it good butterscotch ice-cream',
    type: 'A',
  },
  {
    id: 2,
    license: 'B',
    class: 'Tactico',
    name: 'aviso',
    description: 'Is it good butterscotch ice-cream',
    type: 'B',
  },
  {
    id: 3,
    license: 'C',
    class: 'Tactico',
    name: 'aviso',
    description: 'Is it good butterscotch ice-cream',
    type: 'C',
  },
  {
    id: 4,
    license: 'D',
    class: 'Tactico',
    name: 'aviso',
    description: 'Is it good butterscotch ice-cream',
    type: 'D',
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Avisos',
  },
];

const AvisoTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer title="Avisos" description="Avisos">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Avisos" items={BCrumb} />
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
                href="/avisos/nuevo"
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
                        <Typography variant="h5">{row.license}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.class}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(row.name)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{row.description}</Typography>
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

export default AvisoTable;
