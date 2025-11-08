import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { useColorModeValue } from '../../components/ui/color-mode'
import { useAuth } from "../../hooks/AuthContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const cardBg = useColorModeValue("white", "gray.800");
  const { handleLogin } = useAuth();

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Box
        w="full"
        maxW="360px"
        p={8}
        borderRadius="xl"
        boxShadow="xl"
        bg={cardBg}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          {isLogin ? "Welcome Back 👋" : "Create Your Account 🚀"}
        </Text>

        <VStack spacing={4}>
          <Input
            placeholder="Email"
            type="email"
            size="md"
            variant="filled"
          />
          <Input
            placeholder="Password"
            type="password"
            size="md"
            variant="filled"
          />

          <Button colorScheme="blue" w="full" onClick={() => {handleLogin(true)}}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          <Text fontSize="sm" mt={2}>
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button
                  variant="link"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </Button>
              </>
            )}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
