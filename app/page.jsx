"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BasicCard from '../components/Card';


export default function Home() {



  return (
    <>
      <CssBaseline />
      <Box p={4}>
        <BasicCard />
      </Box>
    </>
  );
}
