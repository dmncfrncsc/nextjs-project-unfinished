import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
export default function Dashboard() {
  const style = {
    paper1: {
      padding: '24px',
      backgroundColor: (theme) => theme.palette.dashboard.bg1,
    },
    paper2: {
      padding: '24px',
      backgroundColor: (theme) => theme.palette.dashboard.bg2,
    },
    paper3: {
      padding: '24px',
      backgroundColor: (theme) => theme.palette.dashboard.bg3,
    },
    text1: {
      fontWeight: '700',
      color: (theme) => theme.palette.text.t2,
    },
  };

  return (
    <Box sx={{ padding: '0 24px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/assets/svg/dashboard.svg"
          alt="Dashboard Image"
          width={40}
          height={40}
        />
        <Typography variant="h1" sx={{ marginLeft: '12px' }}>
          Dashboard
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: '12px' }}>
        <Grid item xs={12} sm>
          <Paper sx={style.paper1}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Users
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              100
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm>
          <Paper sx={style.paper2}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Products
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              100
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm>
          <Paper sx={style.paper3}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Product Low on Stock
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              15
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
