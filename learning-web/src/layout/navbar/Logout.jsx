import { Box, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../../hooks/AuthContext";
import useNavigateUrl from '../../hooks/useNavigateUrl';


const Logout = (props) => {
    const {id, color, icon, navName, open=false} = props;
    const {handleLogin} = useAuth();
    const { goto } = useNavigateUrl();

    const handleLogout = async () => {
        try {
          handleLogin(false);
          goto('');
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
