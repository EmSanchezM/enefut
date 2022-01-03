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
import { fetchNotices } from '../../redux/notices/Action';

const columns = [
  { id: 'license', label: 'Licencia', minWidth: 170 },
  { id: 'section', label: 'Seccion', minWidth: 150 },
  { id: 'title', label: 'Aviso', minWidth: 150 },
  { id: 'dateInit', label: 'Fecha de Inicio', minWidth: 150 },
  { id: 'dateEnd', label: 'Fecha de Finalizacion', minWidth: 150 },
  { id: 'description', label: 'Descripcion', minWidth: 150 },
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

  const dispatch = useDispatch();
  const { notices } = useSelector(state => state.noticeReducer);

  useEffect(() => {
    dispatch( fetchNotices() );
  }, [dispatch]);

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
                {notices.map((notice) => {
                  return (
                    <TableRow hover key={notice._id}>
                      <TableCell>
                        <Typography variant="h5">{notice.license.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{notice.section}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{Capitalize(notice.title)}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(notice.dateInit).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{new Date(notice.dateEnd).toLocaleDateString() }</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{notice.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">{notice.type}</Typography>
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
