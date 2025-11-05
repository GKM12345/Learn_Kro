import React, {useState} from 'react'
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import { NavbarWeb, NavbarApp } from '../navbar/Navbar'
import Header from '../navbar/Header'
import RoutesAfterLogin from '../../routes/routesWithLogin/Router'
import { AppLoader } from '../../components/reusable/Loader'

const headerHeight = '60px';
const navbarCloseWidth = '54px';
const navbarOpenWidth = '180px';

const MenuLayout = () => {

  const [open, setOpen] = useState(false) 
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {!isMobile ? <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/> : null}
      <Flex top={isMobile ? "0px" :headerHeight} position="fixed" width="100vw" height={`calc(100vh - ${headerHeight})`} overflow="auto">
        {!isMobile ?
          <NavbarWeb open={open} navbarOpenWidth={navbarOpenWidth} navbarCloseWidth={navbarCloseWidth} /> :
          <NavbarApp />
          }
        <Box
          flex="1" p={3}
          ml={ isMobile ? "0px" : (open ? navbarOpenWidth : navbarCloseWidth)}
          transition="margin 0.3s ease-in-out"
        >
          <AppLoader />
          <RoutesAfterLogin />
        </Box>
      </Flex>
    </>
  )
}

export default MenuLayout
