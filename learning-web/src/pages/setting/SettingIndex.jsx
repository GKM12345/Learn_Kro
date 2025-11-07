import { Box, Text, VStack } from "@chakra-ui/react";
import { ColorModeButton } from '../../components/ui/color-mode';

const SettingIndex = () => {
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
              Upcoming Settings Features
            </Text>
    
            <VStack align="start" spacing={3}>
                <Text>1. Email / push notification and preferences</Text>
                <Text>2. Enable or disable sound for notifications</Text>
                <Text>3. Default video playback speed (e.g., 1.25x) , Autoplay next video</Text>
                <Text>4. Default subtitle language, notes syncing (if you support it)</Text>
                <Text>5. Select time of day for learning reminders etc...</Text>
            </VStack>
          </Box>
          <Box mt={6} display="flex" alignItems="center" gap={4}>
            <Text>Change Theme</Text>
            <Box border="1px solid" borderRadius={4} >
              <ColorModeButton />
            </Box>
          </Box>
        </Box>
  )
}

export default SettingIndex


