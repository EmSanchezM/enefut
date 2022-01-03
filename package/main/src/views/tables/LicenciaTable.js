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
import { fetchLicenses } from '../../redux/license/Action';

const columns = [
  { id: 'pname', label: 'Licencia', minWidth: 170 },
  { id: 'letter', label: 'Letra', minWidth: 100 },
  { id: 'description', label: 'Descripcion', minWidth: 170 },
  { id: 'duration', label: 'Duracion', minWidth: 100 },
  { id: 'cost', label: 'Costo', minWidth: 100 },
  { id: 'language', label: 'Lenguaje', minWidth: 100 },
  { id: 'type', label: 'Tipo', minWidth: 100 },
  {
    id: 'action',
    label: 'Accion',
    minWidth: 170,
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Documentos',
  },
];

const LicenciaTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const dispatch = useDispatch();
  const { licenses } = useSelector(state => state.licenseReducer);

  useEffect(() => {
    dispatch( fetchLicenses() );
  }, [dispatch]);

  return (
    <PageContainer title="Licencias" description="Tipos de Licencias">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Licencias" items={BCrumb} />
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
                href="licencias/nueva"
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
                {licenses.map((license) => {
                  return (
                    <TableRow hover key={license._id}>
                      <TableCell>
                        <Typography variant="h5">{license.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(license.letter)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{license.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{license.duration}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{license.cost}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{license.languague}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{license.type}</Typography>
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

export default LicenciaTable;
