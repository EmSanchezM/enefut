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
import { fetchGrades } from '../../redux/grade/Action';

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
  
  const dispatch = useDispatch();
  const { grades } = useSelector(state => state.gradeReducer);

  useEffect(() => {
    dispatch( fetchGrades() );
  }, [dispatch]);

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
                {grades.map((grade) => {
                  return (
                    <TableRow hover key={grade._id}>
                      <TableCell>
                        <Typography variant="h5">{grade.student.name} {grade.student.lastName}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grade.class.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grade.average}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grade.acumulative}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grade.quiz}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{grade.type}</Typography>
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
