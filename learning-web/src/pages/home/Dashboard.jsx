import { Box, Text, VStack, Button } from "@chakra-ui/react";
import useNavigateUrl from "../../hooks/useNavigateUrl";


const Dashboard = () => {
  const { goto } = useNavigateUrl();
  return (
    <Box
      textAlign="center"
      py={16}
      px={8}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      minH="80vh"
    >
      {/* Title */}
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="green.500"
        textDecoration="underline"
        mb={6}
      >
        Work In Progress
      </Text>

      {/* Features Box */}
      <Box
        bg="gray.50"
        _dark={{ bg: "gray.800" }}
        p={6}
        rounded="lg"
        shadow="md"
        maxW="600px"
        w="full"
        textAlign="left"
      >
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          Upcoming Dashboard Features
        </Text>

        <VStack align="start" spacing={3}>
            <Text>1. List videos where the user left off</Text>
            <Text>2. Show overall progress of user</Text>
            <Text>3. Alerts for incomplete lessons, new uploads, quizzes, and assignments</Text>
            <Text>4. Allow user to set daily/weekly goals</Text>
            <Text>5. Show number of consecutive learning days and streaks etc...</Text>
        </VStack>
      </Box>

      {/* Explore Button */}
      <Button
        to="/courses"
        colorScheme="green"
        size="lg"
        mt={4}
        shadow="md"
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
        transition="all 0.2s ease-in-out"
        onClick={()=>goto('courses/index')}
      >
        Explore Courses
      </Button>
    </Box>
  );
};

export default Dashboard;
