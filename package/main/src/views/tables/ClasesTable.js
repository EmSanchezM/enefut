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

  const [clases, setClases] = useState([]);

  useEffect(() => {
    (
      async () => {
        const { data } = await Axios.get('classes');
        setClases(data.data);
      }
    )();
  }, []);
  
  const handleDelete = async (classId) => {
    // eslint-disable-next-line
    if(window.confirm('Estas seguro de eliminarla?')){
      await Axios.delete(`classes/${classId}`);
      toast.success('Clase eliminada exitosamente');
      setClases( clases.filter(clase => clase._id !== classId));
    }
  }

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
                {clases.map((clase) => {
                  return (
                    <TableRow hover key={clase._id}>
                      <TableCell>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(clase.name)}
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
                          {Capitalize(clase.description)}
                        </Typography>
                        
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{clase.duration} horas</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{clase.language}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{clase.modality}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{clase.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton href={`/clases/${clase._id}/editar`}>
                          <FeatherIcon
                            icon="edit"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(clase._id)}>
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
