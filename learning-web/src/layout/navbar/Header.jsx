import React from 'react'
import { HiMenu } from "react-icons/hi";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { Box, IconButton, Text } from "@chakra-ui/react"
import { useColorModeValue, ColorModeButton } from '../../components/ui/color-mode'
import { darkMode, lightMode, menuZIndex } from '../../theme/config';

const Header = (props) => {
    const {open, handleDrawerOpen, handleDrawerClose} = props;
    const bgColor = useColorModeValue(lightMode.headerBgColor, darkMode.headerBgColor);
    const hoverBgColor = useColorModeValue(lightMode.headerIconColor, darkMode.headerIconColor)
  return (
    <Box 
        width="100%" 
        padding="3" 
        bg={bgColor} 
        color="white" 
        shadow="md" 
        display="flex" 
        justifyContent="space-between" 
        position="fixed" 
        top="0"
        left="0"
        zIndex={menuZIndex}
    >
        <Box display="flex">
            <IconButton
                variant="solid"
                color="white"
                bg={hoverBgColor}
                size="m"
                mr="4"
                onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
                {open ? <RiMenuUnfold4Fill size="26px" /> :<HiMenu size="26px" />}
            </IconButton>
            <Text textStyle="xl">Learn Kro</Text>
        </Box>
        <ColorModeButton color="white" _hover={{ bg: hoverBgColor }} />
    </Box>
  )
}

export default Header
