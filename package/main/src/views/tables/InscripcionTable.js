import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
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
import { fetchAttendances } from '../../redux/attendance/Action';

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

  const dispatch = useDispatch();
  const { attendances } = useSelector(state => state.attendanceReducer);

  useEffect(() => {
    dispatch( fetchAttendances() );
  }, [dispatch]);

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
                {attendances.map((attendance) => {
                  return (
                    <TableRow hover key={attendance._id}>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(attendance.student.name)} {Capitalize(attendance.student.lastName)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{attendance.class.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{attendance.section}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{attendance.type}</Typography>
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

export default InscripcionTable;
