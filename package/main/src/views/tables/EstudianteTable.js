import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  { id: 'pname', label: 'Nombre', minWidth: 170 },
  { id: 'identidad', label: 'No Identidad', minWidth: 150 },
  { id: 'code', label: 'Codigo', minWidth: 150 },
  { id: 'birth', label: 'Cumpleaños', minWidth: 150 },
  { id: 'email', label: 'Correo', minWidth: 150 },
  { id: 'phone', label: 'Telefono', minWidth: 150 },
  { id: 'location', label: 'Ubicacion', minWidth: 150 },
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
    title: 'Estudiantes',
  },
];

const EstudianteTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('students');
        setStudents(data.data);
      }
    )();
  }, []);
  
  const handleDelete = async (studentId) => {
    // eslint-disable-next-line
    if(window.confirm('Estas seguro de eliminarlo?')){
      await Axios.delete(`students/${studentId}`);
      toast.success('Estudiante eliminado exitosamente');
      setStudents( students.filter(student => student._id !== studentId));
    }
  }

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
            <ToastContainer autoClose={3000} />
            
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  { columns.map((column) => (
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
                {students && students.length ? 
                students.map((student) => 
                  (
                    <TableRow hover key={student._id}>
                      <TableCell>
                        <Typography variant="h5">{student.name} {student.lastName}</Typography>
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
                          {student.identidad}
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{student.code}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(student.birth).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{student.email}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{student.phone}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{student.location}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{student.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton href={`/estudiantes/${student._id}/editar`}>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={()=> handleDelete(student._id)}>
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
                  )) : 
                    'No Students'
                }
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default EstudianteTable;
