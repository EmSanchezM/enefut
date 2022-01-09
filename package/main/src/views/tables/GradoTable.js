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

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import Axios from '../../config/axios'; 

const columns = [
  { id: 'student', label: 'Estudiante', minWidth: 170 },
  { id: 'class', label: 'Clase', minWidth: 100 },
  { id: 'average', label: 'Promedio', minWidth: 100 },
  { id: 'acumulative', label: 'Acumulativo', minWidth: 100 },
  { id: 'quiz', label: 'Examen', minWidth: 100 },
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
    title: 'Grados',
  },
];

const GradoTable = () => {
  
  const [grados, setGrados] = useState([]);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('grades');
        setGrados(data.data);
      }
    )();
  }, []);

  const handleDelete = async (gradoId) => {
    // eslint-disable-next-line
    if(window.confirm('Estas seguro de eliminarla?')){
      await Axios.delete(`grades/${gradoId}`);
      toast.success('Grado eliminado exitosamente');
      setGrados( grados.filter(grado => grado._id !== gradoId));
    }
  }

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
                href="/calificaciones/nueva"
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
                {grados.map((grado) => {
                  return (
                    <TableRow hover key={grado._id}>
                      <TableCell>
                        <Typography variant="h5">{grado.student.name} {grado.student.lastName}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grado.class.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grado.average}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grado.cumulative}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grado.quiz}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grado.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton href={`/calificaciones/${grado._id}/editar`}>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={()=> handleDelete(grado._id)}>
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
