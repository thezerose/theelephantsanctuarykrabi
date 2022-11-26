import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{ zIndex: (th) => th.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            px: 0,
            py: 2,
            background:'#ffffff !important'
          }}
        >
          <Container maxWidth="lg">
            <div className="flex">
              <div className="py-1 mr-auto">
                <NextLink href="/">
                  <Typography variant='h3'  sx={{color:'#7c8b4d',fontWeight:700}}>The Elephant Sanctuary Krabi</Typography>
                </NextLink>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar