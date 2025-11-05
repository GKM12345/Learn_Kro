import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from "@chakra-ui/react";
// import Swal from 'sweetalert2';



const Logout = (props) => {
    const {id, color, icon, navName, open} = props;
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          // await signOut();
          //   Swal.fire({
          //       icon: 'success', title: 'Logout Successful!', text: 'You have been logged out successfully.', timer: 2000,
          //       showConfirmButton: false
          //   }).then(() => {
          //       navigate('/');
          //   });
        } catch (error) {
          console.log('Error signing out: ', error);
        }
      };

  return (
    <Flex
        key={id}
        align="center"
        pt="1" pb="6"
        borderRadius="md"
        _hover={{ color: "blue.400" }}
        transition="all 0.3s"
        color={color}
        onClick={handleLogout}
        cursor="pointer"
    >
        <Box fontSize="24px" mr={open ? 4 : 0} >{icon}</Box>
        {open && (<Text fontSize="md" fontWeight="medium">{navName}</Text>)}
    </Flex>
  )
}

export default Logout
