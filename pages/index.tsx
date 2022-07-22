import type { NextPage } from "next";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import card from '../components/card'


const Home: NextPage = () => {
  return (
      <Card variant="outlined">{card}</Card>
  );
};

export default Home;


