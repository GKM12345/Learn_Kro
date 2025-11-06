import { Box, Text } from "@chakra-ui/react";
const InvalidCourse = ({ message }) => (
  <Box textAlign="center" p={10}>
    <Text fontSize="2xl" fontWeight="bold">
      {message || "Invalid Course"}
    </Text>
  </Box>
);
export default InvalidCourse;
