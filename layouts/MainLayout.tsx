import { Box } from '@mui/material';
import React from 'react'
import Footer from '../components/share/Footer';
import Navbar from '../components/share/Navbar';
export type MainLayoutProps = {
  children?: React.ReactNode;
  pageName?: string;
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children, pageName }) => {
    return (
      <div>
        <Navbar/>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            backgroundSize: 'cover',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '96px',
            paddingBottom: '16px',
            zIndex: 1,
          }}
        >
          <Box component="main" minHeight="100vh" pt={4} pb={4}>
            {children}
          </Box>
        </div>
        <Footer/>
      </div>
    );
  };