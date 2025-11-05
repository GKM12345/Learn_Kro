import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Text, Spacer  } from "@chakra-ui/react";
import Logout from './Logout';
import { useColorModeValue } from '../../components/ui/color-mode';
import { lowerNavBarList, routeData, AppNavBarList } from '../../routes/routesWithLogin/constant';
import { darkMode, lightMode, menuZIndex, MenuIconColor } from '../../theme/config';


export const NavbarWeb = (props) => {
  const { open, navbarCloseWidth, navbarOpenWidth } = props;
  const borderColor = useColorModeValue(lightMode.navbarBorderColor, darkMode.navbarBorderColor);
  const hoverOrSelectedColor = useColorModeValue(lightMode.menuIconHoverColor, darkMode.menuIconHoverColor);
  const routePathLink = useLocation();

  return (
    <Box 
      borderRight="2px solid" 
      borderColor={borderColor} 
      shadow="md"
      p={4} 
      zIndex={menuZIndex}
      width={open ? navbarOpenWidth : navbarCloseWidth} 
      transition="width 0.3s ease-in-out"
      overflow="hidden"
      position="fixed"
      left="0"
      height="100%"
    >
      <Flex direction="column" height="100%">
        <Flex direction="column" flex="1">
          {routeData.filter(data => !lowerNavBarList.includes(data.name)).map((data) => (
            <Link key={data.id} to={data.url}>
              <Flex
                align="center"
                pt="1" pb="3"
                borderRadius="md"
                _hover={{ color: "blue.400" }}
                transition="all 0.3s"
                color={(routePathLink.pathname === data.url) ? MenuIconColor : hoverOrSelectedColor}
              >
                <Box fontSize="24px" mr={open ? 4 : 0} transition="margin 0.3s ease-in-out">
                  {data.icon}
                </Box>
                {open && (
                  <Text fontSize="md" fontWeight="medium">
                    {data.navName}
                  </Text>
                )}
              </Flex>
            </Link>
          ))}
        </Flex>
        <Spacer />
        <Flex direction="column" mb="10">
          {routeData.filter(data => lowerNavBarList.includes(data.name)).map((data) => (
            data.name === 'Logout' ? (
              <Logout 
                color = {(routePathLink.pathname === data.url) ? MenuIconColor : hoverOrSelectedColor}
                id={data.id}
                open={open}
                icon={data.icon}
                navName={data.navName}
              />
            ) : (
              <Link key={data.id} to={data.url}>
                <Flex
                  align="center"
                  pt="1" pb="3"
                  borderRadius="md"
                  _hover={{ color: "blue.400" }}
                  transition="all 0.3s"
                  color={(routePathLink.pathname === data.url) ? MenuIconColor : hoverOrSelectedColor}
                >
                  <Box fontSize="24px" mr={open ? 4 : 0} >
                    {data.icon}
                  </Box>
                  {open && (
                    <Text fontSize="md" fontWeight="medium">
                      {data.navName}
                    </Text>
                  )}
                </Flex>
              </Link>
            )
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};



export const NavbarApp = () => {
  const borderColor = useColorModeValue(lightMode.navbarBorderColor, darkMode.navbarBorderColor);
  const hoverOrSelectedColor = useColorModeValue(lightMode.menuIconHoverColor, darkMode.menuIconHoverColor);
  const routePathLink = useLocation();

  return (
    <Box 
      borderTop="2px solid" 
      borderColor={borderColor} 
      shadow="md"
      p={4} 
      zIndex={menuZIndex}
      width="100%"
      overflow="hidden"
      position="fixed"
      bottom="0"
      height="60px"
    >
      <Flex direction="row" height="100%">
        <Flex direction="row" flex="1" justify="space-between" align="center">
          {routeData.filter(data => AppNavBarList.includes(data.name)).map((data) => (
            <Link key={data.id} to={data.url}>
              <Flex
                align="center"
                direction="column"
                borderRadius="md"
                _hover={{ color: "blue.400" }}
                color={(routePathLink.pathname === data.url) ? MenuIconColor : hoverOrSelectedColor}
              >
                <Box fontSize="24px" mr={0}>
                  {data.icon}
                </Box>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.navName}
                  </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};