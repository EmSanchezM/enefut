import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

import Axios from '../../config/axios'; 

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const columns = [
  { id: 'license', label: 'Licencia', minWidth: 170 },
  { id: 'section', label: 'Seccion', minWidth: 150 },
  { id: 'title', label: 'Aviso', minWidth: 150 },
  { id: 'dateInit', label: 'Fecha de Inicio', minWidth: 150 },
  { id: 'dateEnd', label: 'Fecha de Finalizacion', minWidth: 150 },
  { id: 'type', label: 'Tipo', minWidth: 150 },
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
    title: 'Avisos',
  },
];

const AvisoTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('notices');
        setAvisos(data.data);
      }
    )();
  }, []);
  
  const handleDelete = async (attendanceId) => {
    // eslint-disable-next-line
    if(window.confirm('Estas seguro de eliminarlo?')){
      await Axios.delete(`notices/${attendanceId}`);
      toast.success('Aviso eliminado exitosamente');
      setAvisos( avisos.filter(aviso => aviso._id !== attendanceId));
    }
  }

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
            <ToastContainer autoClose={3000} />
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
                {avisos.map((aviso) => {
                  return (
                    <TableRow hover key={aviso._id}>
                      <TableCell>
                        <Typography variant="h5">{aviso.license.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(aviso.section)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{(aviso.title)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{aviso.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(aviso.dateInit).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(aviso.dateEnd).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{aviso.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton href={`/avisos/${aviso._id}/editar`}>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(aviso._id)}>
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
