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
  { id: 'student', label: 'Estudiante', minWidth: 170 },
  { id: 'class', label: 'Clase', minWidth: 100 },
  { id: 'section', label: 'Seccion', minWidth: 100 },
  { id: 'type', label: 'Tipo', minWidth: 100 },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'ENEFUT',
  },
  {
    title: 'Inscripciones',
  },
];

const InscripcionTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('enrollments');
        setInscripciones(data.data);
      }
    )();
  }, []);
  
  const handleDelete = async (enrollmentId) => {
    // eslint-disable-next-line
    if(window.confirm('Estas seguro de eliminarla?')){
      await Axios.delete(`enrollments/${enrollmentId}`);
      toast.success('Inscripcion eliminada exitosamente');
      setInscripciones( inscripciones.filter(inscripcion => inscripcion._id !== enrollmentId));
    }
  }
  
  return (
    <PageContainer title="Inscripciones" description="Incripciones de Estudiantes">
      {/* breadcrumb */}
      <Breadcrumb title="Listado de Inscripciones" items={BCrumb} />
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
                href="inscripciones/nueva"
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
                {inscripciones.map((enrollment) => {
                  return (
                    <TableRow hover key={enrollment._id}>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(enrollment.student.name)} {Capitalize(enrollment.student.lastName)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{enrollment.license.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{enrollment.section}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{enrollment.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton href={`/inscripciones/${enrollment._id}/editar`}>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(enrollment._id)}>
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

export default InscripcionTable;
