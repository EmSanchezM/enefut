import React from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  Earnings,
  MonthlySales,
  SalesOverview
} from './dashboard1-components';

import PageContainer from '../../components/container/PageContainer';

const Dashboard1 = () => (
  // 2

  <PageContainer title="Estadisticas" description="Estadisticas">
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <WelcomeCard />
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} sm={6}>
            <Earnings />
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <MonthlySales />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 2 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <Earnings />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Earnings />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Earnings />
      </Grid>
      {/* ------------------------- row 3 ------------------------- */}
      
    </Grid>
  </PageContainer>
);
export default Dashboard1;
