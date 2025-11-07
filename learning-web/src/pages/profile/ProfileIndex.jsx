import { Box, Text, VStack } from "@chakra-ui/react";

const ProfileIndex = () => {
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
          Upcoming Profile Features
        </Text>

        <VStack align="start" spacing={3}>
            <Text>1. Show User Details Name, Email Id</Text>
            <Text>2. User can change Password and Logout</Text>
            <Text>3. User can see Downloaded Videos here etc...</Text>
        </VStack>
      </Box>
    </Box>
  )
}

export default ProfileIndex

